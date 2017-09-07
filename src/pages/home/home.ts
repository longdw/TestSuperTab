import { Component } from '@angular/core';
import { Test } from "./test.model";
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
    templateUrl: 'home.html'
})
export class HomePage {

    isLoaded = false;

    page = 'HomeChildPage';

    datas;

    constructor() {
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.datas = [
                {
                    title: 'First Page'
                },
                {
                    title: 'Second Page'
                },
                {
                    title: 'Third Page'
                },
                {
                    title: 'Fourth Page'
                },
                {
                    title: 'Fifth Page'
                },
                {
                    title: 'Sixth Page'
                }
            ];
            this.isLoaded = true;
        }, 1000);
    }

    getParams() {
        let params = {
            title: 'test'
        };
        return params;
    }
}