import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { KFCItem } from './kfc-item.model';

@Component({
  selector: 'app-kfc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css']
})
export class KFCMenuComponent implements OnInit {
  items: KFCItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<KFCItem[]>('./restraunt-menus/kfc.json').subscribe(data => {
      this.items = data;
    });
  }

  isInCart(item: KFCItem): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((cartItem: KFCItem) => cartItem.name === item.name);
  }

  toggleCart(item: KFCItem): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((cartItem: KFCItem) => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${item.name} ${existingItemIndex > -1 ? 'removed from' : 'added to'} cart`);
  }
}
