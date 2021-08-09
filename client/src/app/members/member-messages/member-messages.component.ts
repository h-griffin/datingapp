import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild("messageForm") messageFrom: NgForm
  @Input() messages: Message[];
  @Input() username: string; // get from member detail
  messageContent: string;


  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageFrom.reset()     // clear text
    })
  }


}
