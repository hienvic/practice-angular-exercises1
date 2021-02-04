import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router} from "@angular/router";
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  errorMessage = '';
  isLoginFailed = false;
  isValid = true;
  form = new FormGroup({
 
  });
  constructor(
    private dataService: DataService,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit():void {
    this.submitted = true;
    console.log(this.form.valid);
    if (this.form.valid) {
      this.dataService.login(this.form.value.username, this.form.value.password)
      .pipe()
      .subscribe({
          next: () => {
            this.router.navigate(['/dash-board']);
          },
          error: error => {
            this.isLoginFailed = true;
          }
      });
    } else {
      this.isValid = false;
    }
}
}
