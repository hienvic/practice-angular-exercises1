import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { TotalCost } from '../../interface/total-cost';
import { Services } from '../../interface/services';
import { Reservation } from '../../interface/reservation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'AngularChart';
  isShow = false;
  private REST_TOTAL_COST = 'http://localhost:3000/totalCost';
  private REST_SERVICES_BREAKDOWN = 'http://localhost:3000/servicesBreakdown';
  private REST_RESERVATION = 'http://localhost:3000/reservation';

  public static TotalCost : TotalCost[] = [];
  TotalCost : TotalCost[] = []

  public static Services : Services[]=[];
  Services : Services[] = []

  public static Reservation : Reservation[] = [];
  Reservation : Reservation[] = []

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getTotalCost();
    this.getServices();
    this.getReservation();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getTotalCost(){
    this.dataService.sendGetRequestTotalCost(this.REST_TOTAL_COST)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      HomeComponent.TotalCost = res.body;
    })
  }

  getServices(){
    this.dataService.sendGetRequestServicesBreakdown(this.REST_SERVICES_BREAKDOWN)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      HomeComponent.Services = res.body;
    })
  }

  getReservation(){
    this.dataService.sendGetRequestReservation(this.REST_RESERVATION)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      HomeComponent.Reservation = res.body;
    })
  }
}
