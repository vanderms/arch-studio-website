import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [],
})
export class HomepageComponent implements OnInit, OnDestroy {
  slide: number = 0;
  timeout: number | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    this.setNext(1, 10000);
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timeout);
  }

  setNext(slide: number, duration: number = 50) {
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.slide = slide;
      const nextSlide = (this.slide + 1) % 4;
      this.setNext(nextSlide, 10000);
    }, duration);
  }

  swipeLeft() {
    console.log('why?');

    const nextSlide = (this.slide + 1) % 4;
    console.log(nextSlide);
    this.setNext(nextSlide);
  }

  swipeRight() {
    const nextSlide = (this.slide + 3) % 4;
    console.log(nextSlide);
    this.setNext(nextSlide);
  }
}
