import { Component, OnInit } from '@angular/core';
import portfolio from 'src/data/portfolio.json';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styles: [],
})
export class FeaturedSectionComponent implements OnInit {
  portfolio = portfolio;
  constructor() {}

  ngOnInit(): void {}

  get featured() {
    const featuredPortfolio = portfolio
      .filter((x) => x.featured > 0)
      .sort((a, b) => a.featured - b.featured);

    console.log(featuredPortfolio);

    return featuredPortfolio;
  }
}
