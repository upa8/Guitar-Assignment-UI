import { Component, OnInit } from '@angular/core';

import { ThemesService } from '../core/themes/themes.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(public themes: ThemesService) {
        themes.getDefaultTheme();
    }

    ngOnInit() {
    }

}
