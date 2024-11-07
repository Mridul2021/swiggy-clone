import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  private apiUrl = 'https://67189a707fc4c5ff8f4a2941.mockapi.io/api/submit-form/submit';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (users) => {
        const user = users.find(
          (u) => u.Email === this.email && u.Password === this.password
        );
        if (user) {
          localStorage.setItem('token', user.Token);
          this.router.navigate(['/']);
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Wrong credentials';
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'An error occurred while logging in.';
      }
    );
  }
}
