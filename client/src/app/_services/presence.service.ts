import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { userInfo } from 'os';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  hubUrl = environment.hubUrl
  private hubConnection: HubConnection;
  private onlineUsersSource = new BehaviorSubject<string[]>([]);
  onlineUsers$ = this.onlineUsersSource.asObservable();

  constructor(private toastr: ToastrService, private router: Router) { }

  createHubConnection(user: User){

    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        accessTokenFactory: () => user.token
      })
      .withAutomaticReconnect() //network problem
      .build()

    this.hubConnection
      .start()
      .catch(error => console.log("[presence.service.ts] createHubConnection()", error));

      // just for demo
    this.hubConnection.on("UserIsOnline", username => {   // method names must match in presenceHub.cs
      this.toastr.info(username + " has connected");
    })

    this.hubConnection.on("UserIsOffline", username => {
      this.toastr.warning(username + " has disconnected");
    })

    this.hubConnection.on("GetOnlineUsers", (usernames: string[]) => {
      this.onlineUsersSource.next(usernames);
    })

    this.hubConnection.on("NewMessageReceived", ({username, knownAs}) => {
      this.toastr.info(knownAs + " has sent you a new message!")
        .onTap
        .pipe(take(1))
        .subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
    })

  }

  stopHubConnection(){
    this.hubConnection.stop().catch(error => console.log("[presence.service.ts] stopHubConnection()",error));
  }


}
