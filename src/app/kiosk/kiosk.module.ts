/* IMPORT*/
/* IMPORT ANGULAR*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* IMPORT OTHER MODULE*/
import { GridsterModule } from 'angular-gridster2';
/* IMPORT COMPONENT */
import { KioskComponent } from './kiosk.component';
import { MeteoComponent } from './widgets/meteo/meteo.component';
import { TraficComponent } from './widgets/trafic/trafic.component';
import { ProjectComponent } from './widgets/project/project.component';
import { SecurityComponent } from './widgets/security-message/security.component';
import { WeeklyMessageComponent } from './widgets/weekly-message/weekly-message.component';
/* IMPORT SERVICE */
@NgModule({
    imports: [
        CommonModule,
        GridsterModule,
    ],
    declarations: [
        KioskComponent,
        MeteoComponent,
        TraficComponent,
        ProjectComponent,
        SecurityComponent,
        WeeklyMessageComponent
    ],
    exports: [
        KioskComponent,
    ],
    providers: [
    ] // Here we put all the services
})
export class KioskModule { }
