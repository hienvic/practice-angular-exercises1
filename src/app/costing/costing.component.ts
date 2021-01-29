import { Component, OnInit } from '@angular/core';
import { TotalCost } from '../total-cost';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-costing',
  templateUrl: './costing.component.html',
  styleUrls: ['./costing.component.css']
})
export class CostingComponent implements OnInit {

  TotalCost : TotalCost[]=[];

  constructor() { }

  ngOnInit(): void {
    this.TotalCost = AppComponent.TotalCost;
    console.log(this.TotalCost);
  }

}
