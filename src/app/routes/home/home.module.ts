import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './productView/productView.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':id', component: ProductViewComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    declarations: [HomeComponent, ProductViewComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }