import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeChildPage } from "./home-child";

@NgModule({
    declarations: [ HomeChildPage ],
    imports: [ 
        IonicPageModule.forChild(HomeChildPage)
    ]
})
export class HomeChildPageModule { }