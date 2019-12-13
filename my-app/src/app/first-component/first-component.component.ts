import {Component, OnDestroy, OnInit} from '@angular/core';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';

import {BadModalComponent} from '../components/bad-modal/bad-modal.component';
import {GoodModalComponent} from '../components/good-modal/good-modal.component';

@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrls: ['./first-component.component.css'],
    providers: [BsModalService]
})
export class FirstComponentComponent implements OnInit, OnDestroy {

    bsModalRef: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) {
    }

    ngOnInit(): void {
    }

    openBadModal(event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this.bsModalRef = this.modalService.show(BadModalComponent, {
            animated: false,
            keyboard: false
        });
    }

    openGoodModal(event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        this.bsModalRef = this.modalService.show(GoodModalComponent, {
            animated: false,
            keyboard: false,
            ignoreBackdropClick: true
        });
    }

    ngOnDestroy(): void {
        console.log('First Component destroyed');
    }
}
