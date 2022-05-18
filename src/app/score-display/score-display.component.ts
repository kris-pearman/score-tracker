import { Component, OnInit } from '@angular/core';
import { SCORES } from '../data/mock-scores';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  scores = SCORES;
  
  constructor() { }

  ngOnInit(): void {
  
  }

}