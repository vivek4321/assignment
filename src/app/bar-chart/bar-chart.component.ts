import { ChartDataService } from './../chart-data.service';
import { Component, OnInit, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private chartDataService:ChartDataService, private zone:NgZone) { }
  @Input() data;

  public pieChartLabels = ['age >0 to < 18', 'age >= 18 and < 60', 'age >= 60'];
  public pieChartData = [0, 0, 0];
  public pieChartType = 'pie';

  ngOnInit() {
    this.chartDataService.currData.subscribe((message:any) => {
      this.pieChartData = [...message];
  });
}

}
