import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";
import { DetailPage } from "./detail";

@Component({
    templateUrl: 'home-child.html'
})
export class HomeChildPage {

    private nav: NavController;

    constructor(private params: NavParams) {
        this.nav = params.get('rootNavCtrl');
    }

    gotoDetail() {
        this.nav.push(DetailPage);
    }

}