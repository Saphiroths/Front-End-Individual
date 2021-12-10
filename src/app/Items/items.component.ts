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

  getItems(): void {
    this.itemService.getItems()
      .subscribe(item => this.Items = item);

  }

  updateItems(item: Item) {
    this.updateItem.id = item.id;
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

  openModal(content: any, updateItem: Item) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // document.getElementById('title')?.setAttribute('value',updateItem.title)
    // document.getElementById('description')?.setAttribute('value',updateItem.description)
    // document.getElementById('price')?.setAttribute('value',updateItem.price.toString())
    // document.getElementById('category')?.setAttribute('value',updateItem.category.toString())
    // document.getElementById('picture')?.setAttribute('value',updateItem.picture)
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
