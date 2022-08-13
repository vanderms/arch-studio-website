import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styles: [],
})
export class HeroSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  constructor() {}

  ngOnInit(): void {}

  get imagePath() {
    return {
      desktop: `/assets/home/desktop/${this.image}`,
      tablet: `/assets/home/tablet/${this.image}`,
      mobile: `/assets/home/mobile/${this.image}`,
    };
  }
}
