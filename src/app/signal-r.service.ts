import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() { }

  hubConnection : signalR.HubConnection = {} as signalR.HubConnection;
  message : string = '';
  iets! : string

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/messages', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .build();
  
    this.hubConnection
    .start()
    .then(() => {
        console.log('Hub Connection Started!');
    })
    .catch(err => console.log('Error while starting connection: ' + err))
}

askServer() {
  this.hubConnection.invoke("askServer", this.iets)
      .catch(err => console.error(err));
}

askServerListener() {
  this.hubConnection.on("askServerResponse", (someText) => {
    this.message = someText;
  })

}

}