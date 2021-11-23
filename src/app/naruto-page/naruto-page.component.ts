import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/Item.service';
import { Item } from '../Models/Item';

@Component({
  selector: 'app-naruto-page',
  templateUrl: './naruto-page.component.html',
  styleUrls: ['./naruto-page.component.css']
})
export class NarutoPageComponent implements OnInit {

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

}
