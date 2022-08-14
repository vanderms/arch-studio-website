import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-section',
  templateUrl: './cover-section.component.html',
  styles: [],
})
export class CoverSectionComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() page: string = '';

  constructor() {}

  get imageSrc() {
    const desktop = this.image;
    const tablet = this.image.replace('desktop', 'tablet');
    const mobile = this.image.replace('desktop', 'mobile');
    return { desktop, tablet, mobile };
  }

  ngOnInit(): void {}
}
