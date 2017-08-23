import { Component } from '@angular/core';
import { Test } from "./test.model";

@Component({
    templateUrl: 'home.html'
})
export class HomePage {

    pageindex = 1;
    SIZE = 30;

    datas: Array<Test> = [];

    constructor() {
        this.refreshData();
    }

    refreshData() {

        let tempDatas = new Array<Test>();

        for (let i = 0;i < this.SIZE * this.pageindex;i++) {
            let t = new Test();
            t.title = 'TestTest' + i;
            tempDatas.push(t);
        }

        this.datas = tempDatas;
    }

    moreData() {
        let tempDatas = new Array<Test>();
        
        for (let i = 0;i < this.SIZE * this.pageindex;i++) {
            let t = new Test();
            t.title = 'TestTest' + i;
            tempDatas.push(t);
        }

        Array.prototype.push.apply(this.datas, tempDatas);
    }

    doRefresh(refresh) {
        setTimeout(() => {
            this.refreshData();
            if (refresh) {
                refresh.complete();
            }
        }, 2000);
    }

    doMore(refresh) {
        setTimeout(() => {
            this.moreData();
            if (refresh) {
                refresh.complete();
            }
        }, 2000);
    }

}