import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Reservation } from '../../interface/reservation';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Reservation : Reservation[] = []
  constructor() { }

  ngOnInit(): void {
    this.Reservation = AppComponent.Reservation;
  }

}
