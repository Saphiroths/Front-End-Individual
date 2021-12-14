
import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Models/message';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  hubconnection?:signalR.HubConnection

public startConnection()
{
   this.hubconnection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5000/chatsocket",
  { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets})
    .build();

    this.hubconnection.start()
    .then(() => {
      console.log("connection online");
    })
    .catch(err => console.log("DIKKE FOUT " + err));
}

public askServer()
{
  this.hubconnection?.on("ReceiveOne", (user: string, message: string) => { this.mapReceivedMessage(user, message); });
}
   readonly POST_URL = "https://localhost:44379/api/chat/send"

  private receivedMessageObject: Message = {} as Message;
  private sharedObj = new Subject<Message>();

  constructor() { }

  private mapReceivedMessage(user: string, message: string): void {
    this.receivedMessageObject.user = user;
    this.receivedMessageObject.msgText = message;
    this.sharedObj.next(this.receivedMessageObject);
 }

  public broadcastMessage(msgDto: any) {
    this.hubconnection?.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));   
  }

  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }


}
