import { Component } from '@angular/core';
import { Test } from "./test.model";
import { HomeChildPage } from "./home-child";

@Component({
    templateUrl: 'home.html'
})
export class HomePage {

    page = HomeChildPage;

    constructor() {
    }
}