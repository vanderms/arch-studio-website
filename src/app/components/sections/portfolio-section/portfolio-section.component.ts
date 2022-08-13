import { Component, OnInit } from '@angular/core';
import porfolioList from 'src/data/portfolio.json';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styles: [
  ]
})
export class PortfolioSectionComponent implements OnInit {

  portfolioList = porfolioList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
