import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SettingsService } from './settings/settings.service';
import { ThemesService } from './themes/themes.service';
import { MenuService } from './menu/menu.service';
import { CartService } from './cart/cart.service';
import { HttpService } from './data/http.service';
import { DataService } from './data/data.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        SettingsService,
        ThemesService,
        MenuService,
        CartService,
        HttpService,
        DataService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
