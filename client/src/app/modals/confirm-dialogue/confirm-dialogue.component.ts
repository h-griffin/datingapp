import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.css']
})
export class ConfirmDialogueComponent implements OnInit {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
  result: boolean; // cont or cancel

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm(){
    this.result = true;
    this.bsModalRef.hide();
  }

  decline(){
    this.result = false;
    this.bsModalRef.hide();
  }

}
