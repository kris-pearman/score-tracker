import { Component, OnInit } from '@angular/core';
import scoresData from './input/input.json';
import { ISongScore } from './interfaces/SongScore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'score-tracker';

  constructor() {

  }



  ngOnInit(): void {
    

  }

}
