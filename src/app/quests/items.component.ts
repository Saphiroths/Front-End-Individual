import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Item.service';
import { Item } from '../Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  quests: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();

    console.log(this.quests);
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(quest => this.quests = quest);

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
