import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersData } from './models/usersdata.model';
import { request } from 'https';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDataService(): Observable<UsersData> {
    return;
  }
}
