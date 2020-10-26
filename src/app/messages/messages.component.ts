import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = this.messagesService.messages;

  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
