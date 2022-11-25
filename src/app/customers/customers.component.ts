import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faUser as farUser, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faUser as fasUser, faTableCellsLarge, faTableCells, faList, faLocation, faPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/models/user';
import { HttpClientService } from '../core/services/http-client.service';
import { UserInformation } from '../models/userInformation';

declare var window: any;



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {


  farUser = farUser;
  fasUser = fasUser;
  faTableCellsLarge = faTableCellsLarge;
  faTableCells = faTableCells;
  faList = faList;
  faLocation = faLocation;
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faUserGroup = faUserGroup;

  userFirstName = 'Matthew';
  userLastName = 'Perry';
  userEmail = 'matthew@yahoo.com';
  userAvatar = "assets/userAvatar.png"

  formModal: any;

  filterText: string = '';

  user: Partial<User> = {};

  users: User[] = [];
  p: number = 1;
  total: number = 0;

  errorMessage: string | undefined;


  constructor(
    private http: HttpClientService) { }


  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(document.getElementById('editModal'));

    this.getUsers();
  }

  getUsers() {
    this.http.getUsers(this.p)
      .subscribe((response: UserInformation) => {
        this.users = response.data;
        this.total = response.total;
      });
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }

  openFormModal() {
    this.formModal.show();
  }
  saveNewCustomer() {
    this.formModal.hide();
  }

  createUser() {
    const user: User = {
      first_name: this.userFirstName,
      last_name: this.userLastName,
      email: this.userEmail,
      avatar: this.userAvatar

    };

    this.users.unshift(user)
    this.userFirstName = '';
    this.userLastName = '';
    this.userEmail = '';

    this.http.postUser(user).subscribe();
  }

  initForm(): void { }
  userForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  post() {
    const user: User = {
      first_name: 'Matthew',
      last_name: 'Perry',
      email: 'matthew.perry@yahoo.com'
    };
    this.http.postUser(user).subscribe();
  }

  deleteUser(user: User) {
    this.users = this.users.filter(e => e !== user);
    this.http.deleteUser('3').subscribe();
  }

  deleteAllUsers() {
    this.users = [];
    this.http.deleteUser('').subscribe();
  }


}
