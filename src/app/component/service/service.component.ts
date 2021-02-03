import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Services } from '../../interface/services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  Services : Services[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Services = HomeComponent.Services;
    console.log(this.Services);
  }

}
