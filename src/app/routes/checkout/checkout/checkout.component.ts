import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/cart/cart.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    data = [];
    total = 0.0;

    constructor(private cartService: CartService) {
        this.data = this.cartService.getItems();
        this.calculateTotal();
    }

    ngOnInit() { }

    removeItem(id) {
        let index = this.cartService.removeItem(id);
        this.calculateTotal();
    }

    calculateTotal() {
        this.total = 0;
        this.data.forEach(e => this.total = this.total + (e.price * e.count));
    }

}
