import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServieService {
private count = new BehaviorSubject<number>(0)
  constructor() { }
getCount(){
  
}
}
