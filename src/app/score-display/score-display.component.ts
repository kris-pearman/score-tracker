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
  titles = data;
  difficulties = data.Stats.SongScores.Song[1];

  
  constructor() { }

  ngOnInit(): void {
    // console.log(data.Stats.SongScores)
    let listOfDifficulties = this.difficulties.Steps
    console.log(data.Stats.SongScores.Song)
    // console.log(listOfDifficulties[['-Difficulty']])
    // console.log(data.Stats.SongScores.Song['-Difficulty'])
    // this.getSongList(data.Stats.SongScores.Song)
  }

  getDifficulty(song : any){
    let hardest = song.Steps['-Difficulty']

    return hardest
  }


  getScores(stats: any) {
    // console.log(stats)    
    for (var val of stats) {
          
        }
  }

  // getSongList(stats: any): string[] {
  //   let songList = ['blank']
  //   for (var val of stats) {
  //     songList.push(val)
  //   }
  //   console.log(songList)
  //   return ;
  // }



}