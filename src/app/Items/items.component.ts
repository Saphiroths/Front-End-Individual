import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Item.service';
import { Item } from '../Item';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  Items: Item[] = [];

  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();

    console.log(this.Items);
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(item => this.Items = item);

  }

  
  getGreeting(): String{
    var greeting: String;
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      greeting = 'Good morning';
    } else if (curHr < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    return greeting;
  }


}
