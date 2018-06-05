import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../core/data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data = [];
    selectValue = 'type';
    inputValue = '';

    constructor(public dataService: DataService) {
        this.dataService.fetchInventory().subscribe(items => {
            this.data = items
        });
    }

    ngOnInit() {
    }

    search() {
        this.dataService.fetchSearchInventory(this.selectValue, this.inputValue).subscribe(items => {
            this.data = items
        });
    }
}
