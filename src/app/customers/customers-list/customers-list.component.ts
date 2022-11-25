import { Component, OnInit } from '@angular/core';

import { faUser as farUser, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faUser as fasUser, faTableCellsLarge, faList, faLocation, faPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  faUserGroup = faUserGroup;
  farUser = farUser;
  faTableCellsLarge = faTableCellsLarge;
  faList = faList;
  faLocation = faLocation;
  faPlus = faPlus;


  constructor(
    private http: HttpClientService) { }

  ngOnInit() {
    this.getUsersLast();
  }


  users: User[] = [];
  p: number = 1;
  total: number = 0;

  getUsersLast() {
    this.http.getUsers(this.p)
      .subscribe((response: any) => {
        this.users = response.data;
        this.total = response.total;
      });
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsersLast();
  }
  
}
