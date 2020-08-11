import { Component, OnInit } from '@angular/core';
import { chatservice } from '../services/chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  constructor(private chat : chatservice) { }

  ngOnInit(){
    this.chat.talk();
  }

}
