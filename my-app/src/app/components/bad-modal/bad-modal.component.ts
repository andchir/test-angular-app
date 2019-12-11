import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError, Subject} from 'rxjs';
import {catchError, takeUntil, finalize} from 'rxjs/operators';
import {BsModalRef} from 'ngx-bootstrap';
import {DataInterface} from '../../models/data-interface';

@Component({
    selector: 'app-bad-modal',
    templateUrl: './bad-modal.component.html',
    styleUrls: ['./bad-modal.component.css'],
    providers: [HttpClient]
})
export class BadModalComponent implements OnInit, OnDestroy {

    loading = false;
    destroyed$ = new Subject<void>();
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
        const subscription = this.http.get<DataInterface>('/action.php?a=2').pipe(
                takeUntil(this.destroyed$),
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
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
