import { Injectable } from '@angular/core';
let Items: Array<any> = [];
let length;

@Injectable()
export class CartService {



    constructor() {
        Items = [];
        if (sessionStorage.getItem('cart')) {
            Items = JSON.parse(sessionStorage.getItem('cart'));
            length = Items.length;
        }
    }

    getItems() {
        return Items;
    }

    addItems(Item) {
        const index = Items.findIndex((e) => {
            return e._id === Item._id;
        });
        if (index > -1) {
            Items[index].count += 1;
        }
        else {
            Item.count = 1;
            Items.push(Item);
        }
        this.updateSessionStorage();
    }

    removeItem(id) {
        const index = Items.findIndex((e) => {
            return e._id === id;
        });
        if (Items[index].count > 1) {
            Items[index].count -= 1;
        }
        else {
            Items.splice(index, 1);
        }
        this.updateSessionStorage();
        return index;
    }

    getLength() {
        return length;
    }

    updateSessionStorage() {
        var event = new CustomEvent('length_change', { detail: Items.length });
        document.dispatchEvent(event);
        sessionStorage.setItem('cart', JSON.stringify(Items));
    }

}
