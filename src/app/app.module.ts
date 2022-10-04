import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupSelectComponent } from './group-select/group-select.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScoreListComponent } from './score-list/score-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupSelectComponent,
    BarChartComponent,
    NavBarComponent,
    ScoreListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
