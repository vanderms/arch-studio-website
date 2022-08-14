import { Component, OnInit } from '@angular/core';
import coverData from 'src/data/cover.json';

@Component({
  selector: 'app-contact-cover-section',
  templateUrl: './contact-cover-section.component.html',
  styles: [
  ]
})
export class ContactCoverSectionComponent implements OnInit {

  data: typeof coverData.contact = coverData.contact;

  constructor() { }

  ngOnInit(): void {
  }

}
