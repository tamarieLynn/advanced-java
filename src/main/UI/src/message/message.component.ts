import { Component, OnInit } from '@angular/core';
import { MessageService } from './messageService';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})

export class MessageComponent implements OnInit {
  englishMessage!: string;
  frenchMessage!: string;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getTranslatedMessage('welcome.message.english').subscribe((message: string) => {
      this.englishMessage = message;
    });

    this.messageService.getTranslatedMessage('welcome.message.french').subscribe((message: string) => {
      this.frenchMessage = message;
    });
  }
}
