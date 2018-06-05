import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from './../../../environments/environment';
let Inventory: Array<any>;

@Injectable()
export class DataService {

    ;
    Guitars: Array<any>;
    Accessories: Array<any>;

    constructor(private http: Http) {
        this.Guitars = [];
        this.Accessories = [];
        this.fetchInventory().subscribe(data => {
            Inventory = data;
        });
    }

    fetchInventory() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(environment.serverUrl + 'inventory', options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    getInventory() {
        return Inventory;
    }

    fetchItem(id) {
        const index = Inventory.findIndex((e) => {
            return e._id === id;
        });
        return Inventory[index];
    }

    fetchSearchInventory(select, input) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(environment.serverUrl + 'inventory/search/?select=' + select + '&input=' + input, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    addGuitar(Guitar) {
        this.Guitars.push(Guitar);
    }

    getAccessories() {
        return this.Accessories;
    }

    addAccessory(Accessory) {
        this.Accessories.push(Accessory);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
