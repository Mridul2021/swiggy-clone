import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RestrauntComponent } from '../restraunt/restraunt.component';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, FooterComponent, RestrauntComponent]
})
export class HeroComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  fetchRestaurants(): void {
    this.http.get<any[]>('restaurants.json')
      .subscribe(
        (data) => {
          console.log('Fetched restaurant data:', data);
          this.restaurants = data;
        },
        (error) => console.error('Error fetching restaurant data:', error)
      );
  }
}
