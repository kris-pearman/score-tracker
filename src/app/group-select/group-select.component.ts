import { Component, OnInit } from '@angular/core';
import scoresData from '../input/input.json';
import { ISongScore } from '../interfaces/SongScore';


@Component({
  selector: 'app-group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.css']
})
export class GroupSelectComponent implements OnInit {

  constructor() { }

  scores: ISongScore[] = scoresData;
  groupArray: string[] = [];
  selectedGroup?: string;
  selectedSong?: string;
  selectedSongArray?: ISongScore[] ;
  songGroupArray: string[] = [];
  
  ngOnInit(): void {
    this.groupArray = scoresData.map(item => item.SongGroup).filter((value, index, self) => self.indexOf(value) === index);
    console.log(this.groupArray.length);
  }

  viewSongs(group: string): void {
    this.selectedGroup = group;
    let outPut: string[] = [];
    this.scores.forEach(function(score)
    {
      if(score.SongGroup === group)
      {
        outPut.push(score.Title);
      }   
    })
    this.songGroupArray = outPut!;
    this.songGroupArray = this.songGroupArray.map(item => item).filter((value, index, self) => self.indexOf(value) === index);
  }

  viewStats(song: string): void {
    this.selectedSong = song;
    let outPut: ISongScore[] = [];
    this.scores.forEach(function(score)
    {
      if(score.Title === song)
      {
        outPut.push(score)
      }
    })
    this.selectedSongArray = outPut!;
  }

}
