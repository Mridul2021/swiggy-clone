import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { McDonaldsItem } from './mc-donalds-item.model';

@Component({
  selector: 'app-mc-donalds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mc-donalds.component.html',
  styleUrls: ['./mc-donalds.component.css']
})
export class McDonaldsComponent implements OnInit {
  items: McDonaldsItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<McDonaldsItem[]>('./restraunt-menus/mc-donalds.json').subscribe(data => {
      this.items = data;
    });
  }

  isInCart(item: McDonaldsItem): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((cartItem: McDonaldsItem) => cartItem.name === item.name);
  }

  toggleCart(item: McDonaldsItem): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((cartItem: McDonaldsItem) => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${item.name} ${existingItemIndex > -1 ? 'removed from' : 'added to'} cart`);
  }
}
