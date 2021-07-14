import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { userInfo } from 'os';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  hubUrl = environment.hubUrl
  private hubConnection: HubConnection;

  constructor(private toastr: ToastrService) { }

  createHubConnection(user: User){

    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        accessTokenFactory: () => user.token
      })
      .withAutomaticReconnect() //network problem
      .build()

    this.hubConnection
      .start()
      .catch(error => console.log(error));

      // just for demo
    this.hubConnection.on("UserIsOnline", username => {   // method names must match in presenceHub.cs
      this.toastr.info(username + " has connected");
    })

    this.hubConnection.on("UserIsOffline", username => {
      this.toastr.warning(username + " has disconnected");
    })

  }

  stopHubConnection(){
    this.hubConnection.stop().catch(error => console.log(error));
  }


}
