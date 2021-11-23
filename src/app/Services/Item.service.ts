import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../Models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {  
  private itemURL = "https://localhost:44329/api/item/all"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient){ }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL);
  }
}
