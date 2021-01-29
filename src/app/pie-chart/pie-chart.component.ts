import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { AppComponent } from '../app.component';
import { Services } from '../services';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  Services : Services[] = [];

  doughnutChartLabels: Label[] = ['EC2', 'EFS', 'OTHER', 'S3', 'SUPPORT'];
  doughnutChartData: MultiDataSet = [
    [1, 5, 6, 8, 10]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public chartColors: Color[] = [{
    backgroundColor: ['#4a9ad4', '#7b9d45', '#c24432', '#ff8739', '#e4a02e']
  }];
  options = {
    responsive: true,
    legend: {display: false}  
  }
  constructor() {}

  ngOnInit() {
    this.Services = AppComponent.Services;
    let dataChart = [
      [
        this.Services[0].EC2, 
        this.Services[0].EFS, 
        this.Services[0].OTHER, 
        this.Services[0].S3, 
        this.Services[0].SUPPORT
      ]
    ];
    this.doughnutChartData = dataChart;
  }
}
