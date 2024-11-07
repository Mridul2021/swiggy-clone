import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pizza {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Pizza[] = [];

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const cart = localStorage.getItem('cart');
    this.cartItems = cart ? JSON.parse(cart) : [];
  }

  removeFromCart(itemName: string): void {
    this.cartItems = this.cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
