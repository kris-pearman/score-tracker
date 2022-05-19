import { Component, OnInit } from '@angular/core';
import { SCORES } from '../data/mock-scores';
import {default as data} from '../data/Stats.json';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  scores = SCORES;
  

  
  constructor() { }

  ngOnInit(): void {
    // console.log(data.Stats.SongScores)
    this.getScores(data.Stats.SongScores.Song)
  }

  getScores(stats: any) {
        for (var val of stats) {
          // console.log(val['-Dir'])
          console.log(val.Steps.HighScoreList)
          // console.log(val)
        }
        
  }


}