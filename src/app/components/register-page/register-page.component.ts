import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    UserName: '',
    Password: '',
    FirstName: '',
    LastName: ''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const payload = {
      UserName: this.form.UserName,
      Password: this.form.Password,
      FirstName: this.form.FirstName,
      LastName: this.form.LastName
    };

    this.authService.register(payload).subscribe({
      next: (response) => {
        console.log('Registration response:', response);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        console.error('Registration error:', err);
        this.errorMessage = err.error?.message || err.message || 'Registration failed.';
        this.isSignUpFailed = true;
      }
    });
  }
}