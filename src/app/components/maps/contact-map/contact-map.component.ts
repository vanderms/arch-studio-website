import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';

const customIcon = icon({
  iconUrl: '/assets/contact/desktop/location.svg',
  iconSize: [40, 50],
  iconAnchor: [20, 25],
});

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styles: [],
})
export class ContactMapComponent implements OnInit {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 5,
    center: latLng(34.7358697, -89.0781705),
  };

  layers = [
    marker([35.9917272, -86.7500008], { icon: customIcon }),
    marker([34.5579401, -92.0781705], { icon: customIcon }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
