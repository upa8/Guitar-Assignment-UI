import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { SelectModule } from 'ng2-select';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ng2-validation';

import { SharedModule } from '../../shared/shared.module';
import { GuitarComponent } from './guitar/guitar.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
    { path: 'guitar', component: GuitarComponent },
    { path: 'accessories', component: AccessoriesComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        SelectModule,
        ColorPickerModule,
        TagInputModule,
        CustomFormsModule
    ],
    providers: [ColorPickerService],
    declarations: [
        GuitarComponent,
        AccessoriesComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AdminsModule { }
