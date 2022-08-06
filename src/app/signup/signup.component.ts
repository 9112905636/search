import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  public signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      mobile: [''],
      address: [''],
      type: ['Customer'],
      password: [''],
    });
  }
  signup() {
    this.http
      .post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
      .subscribe(
        (data) => {
          alert('Signup Successfully');
          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
  login() {
    this.router.navigate(['/login']);
  }
}
