import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../core/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../../core/cart/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: './productView.component.html',
    styleUrls: ['./productView.component.scss']
})
export class ProductViewComponent implements OnInit {

    data = {};

    constructor(private dataService: DataService, private router: Router, private activatedrouter: ActivatedRoute, private cartService: CartService) {
        const id = this.activatedrouter.snapshot.params.id;
        this.data = this.dataService.fetchItem(id);
    }

    ngOnInit() {
    }

    addToMyCart() {
        this.cartService.addItems(this.data);
        this.router.navigate(['/checkout']);
    }

}
