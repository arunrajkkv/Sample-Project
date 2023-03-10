import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = document.getElementsByTagName('base')[0].href;
    }

    addPersonDetail(params: any) {
        return this.httpClient.post(this.baseUrl + 'addPersonDetail', params);

    }

    getPersonDetail() {
        return this.httpClient.get(this.baseUrl + 'getPersonDetail');
    }

    updateItem() {
        return this.httpClient.get(this.baseUrl + 'updateItem');
    }

    deleteItem() {
        return this.httpClient.get(this.baseUrl + 'deleteItem');
    }

    getProducts() {
        return this.httpClient.get(this.baseUrl + 'products');
    }

    getData() {
        return this.httpClient.get(this.baseUrl + 'hello');
    }

}
