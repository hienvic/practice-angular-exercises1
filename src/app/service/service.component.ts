import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Services } from '../services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  Services : Services[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Services = AppComponent.Services;
    console.log(this.Services);
  }

}
