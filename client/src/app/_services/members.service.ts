import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] =[];

  constructor(private http: HttpClient) { }

  getMembers(){
    if(this.members.length > 0) return of(this.members); //observable
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members = members;
        return members; // observables
      })
    )
  }

  getMember(username: string){
    const member = this.members.find(x => x.username === username);  // check if members have already came from api
    if (member !== undefined) return of(member);

    return this.http.get<Member>(this.baseUrl + 'users/' + username); // getting member from api
  }

  updateMember(member: Member){
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        // get member from service
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    )
  }
}
