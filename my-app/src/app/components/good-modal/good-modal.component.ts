import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {BsModalRef} from 'ngx-bootstrap';
import {DataInterface} from '../../models/data-interface';

@Component({
  selector: 'app-good-modal',
  templateUrl: './good-modal.component.html',
  styleUrls: ['./good-modal.component.css']
})
export class GoodModalComponent implements OnInit, OnDestroy {

    loading = false;
    largeData: number[] = (new Array(1000000)).fill(1);
    data: DataInterface;

    constructor(
        private http: HttpClient,
        private bsModalRef: BsModalRef
    ) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData(): void {
        // For example only, not for production.

        this.loading = true;
        const subscription = this.http.get<DataInterface>('/action.php?a=1').pipe(
            catchError((err) => throwError(err.message)),
            finalize(() => console.log('FINALIZE'))
        )
            .subscribe({
                next: (res) => {
                    setTimeout(() => {
                        console.log(subscription.closed ? 'SUBSCRIPTION IS CLOSED' : 'SUBSCRIPTION IS NOT CLOSED!');
                    }, 0);
                    console.log('LOADED');
                    this.data = res;
                    this.loading = false;
                },
                error: (error) => {
                    setTimeout(() => {
                        console.log(subscription.closed ? 'ERROR - SUBSCRIPTION IS CLOSED' : 'ERROR - SUBSCRIPTION IS NOT CLOSED!');
                    }, 0);
                    console.log('ERROR', error);
                },
                complete: () => {
                    setTimeout(() => {
                        console.log(subscription.closed ? 'COMPLETED - SUBSCRIPTION IS CLOSED' : 'COMPLETED - SUBSCRIPTION IS NOT CLOSED!');
                    }, 0);
                    console.log('COMPLETED');
                }
            });
    }

    close(event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this.bsModalRef.hide();
    }

    ngOnDestroy() {
        console.log('DESTROY');
    }
}
