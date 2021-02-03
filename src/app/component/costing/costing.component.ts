import { Component, OnInit } from '@angular/core';
import { TotalCost } from '../../interface/total-cost';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-costing',
  templateUrl: './costing.component.html',
  styleUrls: ['./costing.component.css']
})
export class CostingComponent implements OnInit {

  TotalCost : TotalCost[]=[];

  constructor() { }

  ngOnInit(): void {
    this.TotalCost = HomeComponent.TotalCost;
    console.log(this.TotalCost);
  }

}
