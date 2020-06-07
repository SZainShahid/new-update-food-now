import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-men-list',
  templateUrl: './men-list.component.html',
  styleUrls: ['./men-list.component.css']
})
export class MenListComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.service.listOfMenu();
  }

}
