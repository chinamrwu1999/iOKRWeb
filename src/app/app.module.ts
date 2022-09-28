import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';
import { OKRComponent } from './okr/okr.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddGoalComponent } from './Goal/add-goal/add-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    OKRComponent,
    ProjectsComponent,
    AddGoalComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
