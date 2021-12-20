import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Item } from '../Models/Item';
import { ItemService } from '../Services/Item.service';
import { HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MsalService } from '@azure/msal-angular';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent {
  @ViewChild('content')
  private modalRef?: TemplateRef<any>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private itemService: ItemService, private modalService: NgbModal, private msalService: MsalService, private userService: UserService) 
  { 
  }

  newItem : Item = {} as Item;
  public closeResult = '';

CreateItem(item: Item) {
  this.newItem.title = item.title;
  this.newItem.description = item.description;
  this.newItem.price = item.price;
  this.newItem.category = item.category;
  this.newItem.picture = item.picture;
  this.userService.getUser(this.msalService.instance.getActiveAccount()!.username)
  .subscribe( (response) => {
    this.newItem.userid = response.id;
    this.itemService.createItem(this.newItem)
    .subscribe(
      (item) => {
        this.newItem = item;
      }
    )
  })
}

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  reloadCurrentPage() {
    setTimeout(() => window.location.reload(), 500);
   }
}
