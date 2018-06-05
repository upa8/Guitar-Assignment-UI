import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: '', component: CheckoutComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [CheckoutComponent],
    exports: [
        RouterModule
    ]
})
export class CheckoutModule { }