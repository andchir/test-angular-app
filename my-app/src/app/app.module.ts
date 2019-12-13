import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {ModalModule} from 'ngx-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GoodModalComponent} from './components/good-modal/good-modal.component';
import {BadModalComponent} from './components/bad-modal/bad-modal.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
    declarations: [
        AppComponent,
        GoodModalComponent,
        BadModalComponent,
        FirstComponentComponent,
        SecondComponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        ModalModule.forRoot()
    ],
    entryComponents: [
        GoodModalComponent,
        BadModalComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
