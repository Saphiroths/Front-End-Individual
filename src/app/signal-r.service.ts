import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() { }

  hubConnection : signalR.HubConnection = {} as signalR.HubConnection;

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
  this.hubConnection.invoke("askServer", "hey")
      .catch(err => console.error(err));
}

askServerListener() {
  this.hubConnection.on("askServerResponse", (someText) => {
      console.log(someText);
  })
}
}