/* IMPORT*/
/* IMPORT ANGULAR*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* IMPORT OTHER MODULE*/
import { GridsterModule } from 'angular-gridster2';
/* IMPORT COMPONENT */
import { KioskComponent } from './kiosk.component';
/* IMPORT SERVICE */
@NgModule({
    imports: [
        CommonModule,
        GridsterModule,
    ],
    declarations: [
        KioskComponent
    ],
    exports: [
        KioskComponent,
    ],
    providers: [
    ] // Here we put all the services
})
export class KioskModule { }
