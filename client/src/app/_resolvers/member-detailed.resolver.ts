import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Member } from "../_models/member";
import { MembersService } from "../_services/members.service";

@Injectable({
  providedIn: 'root'
})   // not a component
export class MemberDetailedResolver implements Resolve<Member>{

  constructor(private memberService: MembersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Member | Observable<Member> | Promise<Member> {
    throw new Error("Method not implemented.");
  }

}



 