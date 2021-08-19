import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: "nav-drawer",
  templateUrl: "./nav-drawer.component.html",
  styleUrls: ["./nav-drawer.component.css"]
})
export class NavDrawerComponent implements OnInit {
  model: any = {}

  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
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
