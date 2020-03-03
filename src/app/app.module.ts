import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {GridsterModule} from 'angular-gridster2';
import 'hammerjs';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';

import {AppComponent} from './app.component';
import {KioskComponent} from './components/kiosk/kiosk.component';

const appRoutes: Routes = [
  {path: 'api', component: KioskComponent},
  {path: '**', redirectTo: 'api'}
];

@NgModule({
  declarations: [
    AppComponent,
    KioskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatSidenavModule, MatListModule,
    GridsterModule,
    MarkdownModule.forRoot({loader: HttpClient, markedOptions: {provide: MarkedOptions, useValue: {smartypants: true, breaks: true}}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
