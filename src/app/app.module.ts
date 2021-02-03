import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CostingComponent } from './component/costing/costing.component';
import { ServiceComponent } from './component/service/service.component';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { TableComponent } from './component/table/table.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './component/login/login.component';

import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CostingComponent,
    ServiceComponent,
    PieChartComponent,
    TableComponent,
    BarChartComponent,
    AccountComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dash-board', component: HomeComponent },
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
