import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Group } from '../_models/group';
import { Message } from '../_models/message';
import { User } from '../_models/user';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  hubUrl = environment.hubUrl;
  private hubConnection: HubConnection;
  private messageThreadSource = new BehaviorSubject<Message[]>([]);
  messageThread$ = this.messageThreadSource.asObservable();

  constructor(private http: HttpClient) { }

  createHubConnection(user: User, otherUsername: string){
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
        accessTokenFactory: () => user.token
      })
      .withAutomaticReconnect()
      .build()

    this.hubConnection.start().catch(error => console.log("[message.service.ts] createHubConnection()", error));

    this.hubConnection.on("ReceiveMessageThread", messages => { // match message hub on connecteed()
      this.messageThreadSource.next(messages);
    })

    this.hubConnection.on("NewMessage", message => {
      this.messageThread$.pipe(take(1)).subscribe(messages => {
        this.messageThreadSource.next([...messages, message]) // new arr with added message
      })
    })

    this.hubConnection.on("UpdatedGroup", (group: Group) => {
      // look inside message thread and mark messages as read for new connection
      if (group.connections.some(x => x.username == otherUsername)){
        this.messageThread$.pipe(take(1)).subscribe(messages => {
          messages.forEach(message => {
            if (!message.dateRead){
              message.dateRead = new Date(Date.now())
            }
          })
          this.messageThreadSource.next([...messages]);
        })
      }
    })
  }



  stopHubConnection(){
    if (this.hubConnection){
      this.hubConnection.stop();
    }
  }

  getMessages(pageNumber, pageSize, container) {
    let params = getPaginationHeaders(pageNumber, pageSize);

    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseUrl + 'messages', params, this.http);
  }

  getMessageThread(username: string){
    // paginate later
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/' + username);
  }

  async sendMessage(username: string, content: string){
    return this.hubConnection.invoke("SendMessage",  {recipientUsername: username, content}) // return promise not obs
      .catch(error => console.log(error));  // no access to error interceptor because it is not http
  }

  deleteMessage(id: number){
    return this.http.delete(this.baseUrl + "messages/" + id);
  }
}
