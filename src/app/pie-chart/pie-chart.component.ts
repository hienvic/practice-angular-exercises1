import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla', 'Vin', 'Vins'];
  doughnutChartData: MultiDataSet = [
    [55, 15, 20, 5, 5]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public chartColors: Color[] = [{
    backgroundColor: ['#4a9ad4', '#7b9d45', '#c24432', '#ff8739', '#e4a02e']
  }];
  options = {
    responsive: true,
    legend: {display: false}  
  }
  constructor() {
  }

  ngOnInit() {
  }
}
