import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // store input info
  model: any = {}
  navElement: HTMLElement = null;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navElement = <HTMLElement> document.getElementById("navbar");
  }


  @HostListener("window:scroll", ["$event"])
  onScroll($event: Event) {
    let scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;

    if (opacity <= 1) {
      this.navElement.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
    }

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add("navbar-shadow");
    } else {
      this.navElement.classList.remove("navbar-shadow");
    }
  }


  login(){
    // console.log("[nav.component.ts login()]",this.model)
    this.accountService.login(this.model).subscribe(response => {
      console.log("[nav.components.ts] accountservice.login()",response);
      this.router.navigateByUrl('members');
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
