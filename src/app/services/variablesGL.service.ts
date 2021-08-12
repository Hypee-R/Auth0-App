import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  auth0LoggedIn: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(){}

}
