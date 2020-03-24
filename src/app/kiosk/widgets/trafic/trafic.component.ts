import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-trafic',
  templateUrl: './trafic.component.html',
  styleUrls: ['./trafic.component.css']
})
export class TraficComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  ngAfterViewInit() {
    const mapProp = {
      center: new google.maps.LatLng(48.605
          ,7.72),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const trafficLayer = new google.maps.TrafficLayer();
    this.map = new google.maps.Map(this.gmap.nativeElement, mapProp);
    trafficLayer.setMap(this.map);
  }
}
