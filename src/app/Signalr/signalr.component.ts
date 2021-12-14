import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../signal-r.service';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.css']
})
export class SignalrComponent implements OnInit {

  constructor(public signalrService: SignalRService) { }

  displaymessage! :string;

  ngOnInit(): void {
    this.displaymessage = this.signalrService.message
  }


}
