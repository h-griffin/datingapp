import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() username: string;
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.messageService.getMessageThread(this.username).subscribe(messages => {
      // no pagination so dont need to get from response body
      this.messages = messages;
    })
  }

}
