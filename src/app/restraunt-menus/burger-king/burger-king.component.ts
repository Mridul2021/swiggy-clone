import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BurgerKingItem } from './burger-king-item.model';

@Component({
  selector: 'app-burger-king',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-king.component.html',
  styleUrls: ['./burger-king.component.css']
})
export class BurgerKingComponent implements OnInit {
  items: BurgerKingItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<BurgerKingItem[]>('/restraunt-menus/burger-king.json').subscribe(data => {
      this.items = data;
    });
  }

  isInCart(item: BurgerKingItem): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((cartItem: BurgerKingItem) => cartItem.name === item.name);
  }

  toggleCart(item: BurgerKingItem): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((cartItem: BurgerKingItem) => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${item.name} ${existingItemIndex > -1 ? 'removed from' : 'added to'} cart`);
  }
}
