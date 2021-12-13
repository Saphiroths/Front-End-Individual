import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Models/Item';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {  
  public API_URL: string = environment.API_URL;
  private itemURL: string = "https://localhost:44329/item/all"
  private createURL: string = this.API_URL + '/item/create'
  private updateURL: string = this.API_URL + '/item/update'
  private deleteURL: string = this.API_URL + '/item/delete/'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }
  public popup: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient){ }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL);
  }

  createItem(Item: Item): Observable<Item> {
    return this.http.post<Item>(this.createURL, Item, this.httpOptions)
  }

  updateItem(Item: Item): Observable<Item> {
    return this.http.put<Item>(this.updateURL, Item, this.httpOptions)
  }

  deleteItem(Item: Item): Observable<Item> {
    return this.http.delete<Item>(this.deleteURL + Item.id, this.httpOptions)
  }
}
