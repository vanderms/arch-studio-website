import { Component, OnInit } from '@angular/core';
import coverList from 'src/data/cover.json';

@Component({
  selector: 'app-about-cover-section',
  templateUrl: './about-cover-section.component.html',
  styles: [],
})
export class AboutCoverSectionComponent implements OnInit {
  data = coverList.about;
  constructor() {}

  ngOnInit(): void {}
}
