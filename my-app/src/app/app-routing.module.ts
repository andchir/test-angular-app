import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstComponentComponent} from './first-component/first-component.component';
import {SecondComponentComponent} from './second-component/second-component.component';

const routes: Routes = [
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    {path: 'first', component: FirstComponentComponent},
    {path: 'second', component: SecondComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
