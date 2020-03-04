import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-start',
    template: `<h3>{{name}}</h3><hr>`,
    styleUrls: ['./app.component.css'],
})
export class StartComponent  {
    @Input() name: string;
}
