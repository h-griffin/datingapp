import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Member } from "../_models/member";
import { MembersService } from "../_services/members.service";

@Injectable({  // not a component
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member>{

  constructor(private membersService: MembersService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.membersService.getMember(route.paramMap.get('username'));
  }

}



