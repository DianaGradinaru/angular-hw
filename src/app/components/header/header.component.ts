import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Management Pacienti';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddPacient() {
    console.log('toggle');
  }
}
