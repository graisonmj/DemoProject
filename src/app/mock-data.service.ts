import { Injectable } from '@angular/core';
import { UsersData } from './models/usersdata.model';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  usersData: UsersData;

  constructor() {}

  getMockDataService(): UsersData {
    return (this.usersData = {
      UsersDetails: [
        { email: 'sample@gmail.com', password: 'hello123', id: 12433 },
        { email: 'xyz@gmail.com', password: 'he321llo', id: 123123 },
        { email: 'qwe@gmail.com', password: 'hel12lo', id: 135423 },
        { email: 'ytu@gmail.com', password: '123hello', id: 122343 },
        { email: 'ample@gmail.com', password: 'he3212llo', id: 1231123 },
        { email: 'sam@gmail.com', password: 'he12l3lo', id: 121433 },
        { email: 'ple@gmail.com', password: 'he123llo', id: 156723 },
        { email: 'sle@gmail.com', password: '123hello', id: 187923 },
        { email: 'sae@gmail.com', password: 'hel23lo', id: 12123 },
        { email: 'same@gmail.com', password: 'hel321lo', id: 12983 },
      ],
    });
  }
}
