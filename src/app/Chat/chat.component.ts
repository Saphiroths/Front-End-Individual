import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from '../Models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: Message) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
    this.chatService.startConnection();  
    this.chatService.askServer();                                         
  }

  msgDto: Message = {} as Message;
  msgInboxArray: Message[] = [];

  send(): void {
    if(this.msgDto) {
      console.log(this.msgDto)
      if(this.msgDto.user.length == 0 || this.msgDto.msgText.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: Message) {
    let newObj = {} as Message;
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }
}
