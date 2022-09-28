import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(
    private http:HttpClient
  ) { }

  PostGoal(obj:any){
     return(this.http.post<any>(`/goal/add`,obj))
  }
}
