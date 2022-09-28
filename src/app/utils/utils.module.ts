import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavigatorsComponent } from './navigators/navigators.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OKRComponent } from '../okr/okr.component';


const routes: Routes = [
  {path:'OKR',component:OKRComponent},
]


@NgModule({
  declarations: [
    LoginComponent,
    NavigatorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports:[
    LoginComponent,
    NavigatorsComponent
    ]
})
export class UtilsModule { }
