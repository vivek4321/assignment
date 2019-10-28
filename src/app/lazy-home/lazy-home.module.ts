import { BarChartComponent } from './../bar-chart/bar-chart.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyHomeRoutingModule } from './lazy-home-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { ScrollingModule } from '@angular/cdk/scrolling'
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [HomeComponent, BarChartComponent],
  imports: [
    CommonModule,
    LazyHomeRoutingModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
    
  ]
})
export class LazyHomeModule { }
