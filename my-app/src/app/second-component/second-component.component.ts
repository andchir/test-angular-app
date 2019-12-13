import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-second-component',
    templateUrl: './second-component.component.html',
    styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit, OnDestroy {

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        console.log('Second Component destroyed');
    }

}
