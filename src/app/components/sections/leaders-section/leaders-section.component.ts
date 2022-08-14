import { Component, OnInit } from '@angular/core';
import leaderList from 'src/data/leaders.json';

@Component({
  selector: 'app-leaders-section',
  templateUrl: './leaders-section.component.html',
  styles: [],
})
export class LeadersSectionComponent implements OnInit {
  leaders: typeof leaderList = leaderList;

  constructor() {}

  ngOnInit(): void {}
}
