import { Component, OnDestroy, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';
import { SignalRService } from './signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'front-end-individual';

  constructor(private msalService: MsalService, public signalrService: SignalRService) {
    
  }

  ngOnInit() {
    this.signalrService.startConnection();

    setTimeout(() => {
      this.signalrService.askServerListener();
      this.signalrService.askServer();
    }, 2000);
  }
  
  ngOnDestroy() {
    this.signalrService.hubConnection.off("askServerResponse");
  }

  
  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null
  }

  login() {
    this.msalService.loginPopup().subscribe( (response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account)
    } );
  }

  logout() {
    this.msalService.logout();
  }

 
}
