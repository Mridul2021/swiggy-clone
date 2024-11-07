import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

interface Restaurant {
  name: string;
  rating: string;
  deliveryTime: string;
  cuisine: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-restraunt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restraunt.component.html',
  styleUrls: ['./restraunt.component.css']
})
export class RestrauntComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRestaurants().subscribe((data: Restaurant[]) => {
      this.restaurants = data;
      console.log('Fetched restaurants:', this.restaurants);
    });
  }

  fetchRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/restraunts2.json');
  }
}
