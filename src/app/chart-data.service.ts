import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  private chartData = new BehaviorSubject('default message');
  currData = this.chartData.asObservable();

  constructor() { }

  changeMessage(message: any) {
    console.log(message);
    this.chartData.next(message)
  }
}
