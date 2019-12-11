import {Component} from '@angular/core';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';

import {BadModalComponent} from './components/bad-modal/bad-modal.component';
import {GoodModalComponent} from './components/good-modal/good-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [BsModalService]
})
export class AppComponent {

    bsModalRef: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) {}

    openBadModal(event?: MouseEvent): void {
        this.bsModalRef = this.modalService.show(BadModalComponent, {
            animated: false,
            keyboard: false
        });
    }

    openGoodModal(event?: MouseEvent): void {
        this.bsModalRef = this.modalService.show(GoodModalComponent, {
            animated: false,
            keyboard: false,
            ignoreBackdropClick: true
        });
    }

}
