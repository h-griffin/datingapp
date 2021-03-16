import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;

  constructor(private accountService: AccountService){}

  ngOnInit() {
    this.setCurrentUSer();
  }

  // set user in account service
  setCurrentUSer(){
    const user: User = JSON.parse(localStorage.getItem('user')) // undo stringified
    this.accountService.setCurrentUser(user);
  }

}
