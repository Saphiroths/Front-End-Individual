import { Component, OnInit } from '@angular/core';
import { SignalRService } from './signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end-individual';


constructor(public signalrService: SignalRService) {
  
}


ngOnInit()
{ 
  this.signalrService.startConnection();

  setTimeout(() => {
    this.signalrService.askServerListener();
    this.signalrService.askServer();
  }, 2000);
}

}

  




