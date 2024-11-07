import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  drawerOpen = false;

  constructor(private router: Router) {}

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  confirmLogout() {
    const userConfirmed = confirm('Are you sure you want to log out?');
    if (userConfirmed) {
      localStorage.removeItem('token');
      
      this.router.navigate(['/login']);
    } else {
      console.log('Logout canceled');
    }
  }
}
