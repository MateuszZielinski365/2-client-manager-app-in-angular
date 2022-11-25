import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail() {
    var link = "mailto: mateusz.zielinski365@gmail.com";
    window.location.href = link;
  }
}
