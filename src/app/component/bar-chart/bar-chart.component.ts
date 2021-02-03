import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { HomeComponent } from '../home/home.component';
import { Reservation } from '../../interface/reservation';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  Reservation : Reservation[] = []

  public chartColors: Color[] = [{
    backgroundColor: '#c34431'
  }];

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: { display: false } 
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33]}
  ];

  constructor() { }

  ngOnInit(): void {
    this.Reservation = HomeComponent.Reservation;
    var dataChart = [];
    var labelChart = [];
    for (let i = 0; i < this.Reservation.length; i++) {
      dataChart.push(this.Reservation[i].onDemandHours);
      labelChart.push(this.Reservation[i].instanceType);
    }
    this.barChartLabels = labelChart;
    this.barChartData[0].data = dataChart;
  }

}
