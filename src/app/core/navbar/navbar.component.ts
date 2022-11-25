import { Component, OnInit } from '@angular/core';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faUser as fasUser, faTableCellsLarge, faList, faLocation, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  farUser = farUser;
  faTableCellsLarge = faTableCellsLarge;
  faList = faList;
  faLocation = faLocation;
  faPlus = faPlus;
  faUserGroup = faUserGroup;


  constructor() {}

  ngOnInit(): void {}


}
