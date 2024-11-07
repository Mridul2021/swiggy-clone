import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DominosItem } from './dominos-item.model';

@Component({
  selector: 'app-dominos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dominos.component.html',
  styleUrls: ['./dominos.component.css']
})
export class DominosComponent implements OnInit {
  items: DominosItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<DominosItem[]>('./restraunt-menus/dominos.json').subscribe(data => {
      this.items = data;
    });
  }

  isInCart(item: DominosItem): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((cartItem: DominosItem) => cartItem.name === item.name);
  }

  toggleCart(item: DominosItem): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((cartItem: DominosItem) => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${item.name} ${existingItemIndex > -1 ? 'removed from' : 'added to'} cart`);
  }
}
