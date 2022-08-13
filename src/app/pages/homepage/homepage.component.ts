import { Component, OnDestroy, OnInit } from '@angular/core';
import slides from 'src/data/slides.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [],
})
export class HomepageComponent implements OnInit, OnDestroy {
  slide: number = 0;
  intervalTimeout: number | undefined = undefined;
  animationTimeout: number | undefined = undefined;
  waitAnimationTimeout: number | undefined = undefined;
  slides = slides;
  animation: 'right' | 'left' | 'none' = 'none';

  constructor() {}

  ngOnInit(): void {
    this.slideOnInterval();
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.animationTimeout);
    window.clearTimeout(this.intervalTimeout);
    window.clearTimeout(this.intervalTimeout);
  }

  slideOnInterval() {
    window.clearTimeout(this.intervalTimeout);
    this.intervalTimeout = window.setTimeout(() => {
      this.slideOne('left');
    }, 10000);
  }

  async handleClick(target: number) {
    this.slide = target;
    this.slideOnInterval();
  }

  slideOne(animation: 'right' | 'left'): Promise<boolean> {
    if (this.animation === 'none') {
      return new Promise((resolve) => {
        this.animation = animation;
        this.slide =
          animation === 'right' ? (this.slide + 3) % 4 : (this.slide + 1) % 4;
        window.clearTimeout(this.animationTimeout);
        this.animationTimeout = window.setTimeout(() => {
          this.animation = 'none';
          this.slideOnInterval();
          resolve(true);
        }, 1000);
      });
    }
    return new Promise((resolve) => {
      window.clearTimeout(this.waitAnimationTimeout);
      this.waitAnimationTimeout = window.setTimeout(() => {
        this.slideOnInterval();
        resolve(false);
      }, 1000);
    });
  }
}
