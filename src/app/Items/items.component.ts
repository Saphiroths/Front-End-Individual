import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ItemService } from '../Services/Item.service';
import { Item } from '../Models/Item';
import { HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @ViewChild('content')
  private modalRef?: TemplateRef<any>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private itemService: ItemService, private modalService: NgbModal) { }

  Items: Item[] = [];
  updateItem : Item = {} as Item;
  public closeResult = '';


  ngOnInit(): void {
    this.getItems();

    console.log(this.Items);
  }

  public getItems(): void {
    this.itemService.getItems()
      .subscribe(item => this.Items = item);

  }

  public deleteItems(item: Item) {
    console.log(item)
    this.itemService.deleteItem(item)
    .subscribe()
  }

  public updateItems(item: Item) {
    this.updateItem.title = item.title;
    this.updateItem.description = item.description;
    this.updateItem.category = item.category;
    this.updateItem.price = item.price;
    this.updateItem.picture = item.picture;
    this.itemService.updateItem(this.updateItem)
    .subscribe(
      (item) => {
        this.updateItem = item
      }
    )
  }

  public openModal(content: any, Item: Item) {
    this.updateItem.id = Item.id
    console.log(Item);
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

 
  public getGreeting(): String{
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

 public reloadCurrentPage() {
    setTimeout(() => window.location.reload(), 500);
   }

}
