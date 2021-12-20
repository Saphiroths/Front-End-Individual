import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/Item.service';
import { UserService } from '../Services/user.service';
import { Item } from '../Models/Item';
import { User } from '../Models/user';
import { HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private itemService: ItemService, private userService: UserService, private msalService: MsalService) { }

  Item : Item[] = [];

  ngOnInit(): void {
    this.getItemsByUser();
  }

  getItemsByUser(): void {
    this.userService.getUser(this.msalService.instance.getActiveAccount()!.username)
    .subscribe( (response) => {
    this.itemService.getItemByUser(response.id)
      .subscribe((items) => {
        this.Item = items;
      })
    })

  }

}
