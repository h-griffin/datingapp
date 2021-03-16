import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  // register user then hide form
  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log("[register.component.ts] register()",response);
      this.cancel();
    }, error => {
      console.log("[register.component.ts] register()",error);
      this.toastr.error(error.error)
    })
  }

  cancel(){
    console.log("[register.component.ts] form cancelled");
    this.cancelRegister.emit('false');
  }
}
