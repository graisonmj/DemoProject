import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';

import { UsersData } from '../models/usersdata.model';
import { UserData } from '../models/userdata.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usersData: UsersData;
  userDataList: UserData[];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.usersData = this.mockDataService.getMockDataService();
    this.userDataList = this.usersData.UsersDetails;
  }
}
