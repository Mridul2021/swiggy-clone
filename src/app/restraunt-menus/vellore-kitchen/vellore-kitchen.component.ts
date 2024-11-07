import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VelloreKitchenItem } from './vellore-kitchen-item.model';

@Component({
  selector: 'app-vellore-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vellore-kitchen.component.html',
  styleUrls: ['./vellore-kitchen.component.css']
})
export class VelloreKitchenComponent implements OnInit {
  items: VelloreKitchenItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<VelloreKitchenItem[]>('./restraunt-menus/vellore-kitchen.json').subscribe(data => {
      this.items = data;
    });
  }

  isInCart(item: VelloreKitchenItem): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((cartItem: VelloreKitchenItem) => cartItem.name === item.name);
  }

  toggleCart(item: VelloreKitchenItem): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((cartItem: VelloreKitchenItem) => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${item.name} ${existingItemIndex > -1 ? 'removed from' : 'added to'} cart`);
  }
}
