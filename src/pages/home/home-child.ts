import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from "ionic-angular";
import { BasePage } from "../base/basepage";

@IonicPage()
@Component({
    templateUrl: 'home-child.html'
})
export class HomeChildPage extends BasePage {

    private nav: NavController;

    constructor(private params: NavParams) {
        super();
        this.nav = params.get('rootNavCtrl');

        console.log('rootNavCtrl--->' + this.nav);
    }

    gotoDetail() {
        this.nav.push('DetailPage');
    }

}