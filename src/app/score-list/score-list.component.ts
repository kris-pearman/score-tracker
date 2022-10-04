import { Component, OnInit } from '@angular/core';
import scoresData from '../input/input.json';
import { ISongScore } from '../interfaces/SongScore';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
  scoreOpened:boolean=false;
  selectedScore? : ISongScore;
  outputDifficulty? : string = "";
  constructor() { 

  }
  scores: ISongScore[] = scoresData;
  ngOnInit(): void {
  }

  
  openScore(outputScore : ISongScore): void {
    this.selectedScore = outputScore;
    this.outputDifficulty = outputScore.Difficulty;
  }
}
