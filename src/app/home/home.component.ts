import { ChartDataService } from './../chart-data.service';
import { Person } from './person';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit, ChangeDetectorRef, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personArray:any = [];
  model = new Person(1, '', '', '');
  chartData = [0, 0, 0];
  tempIndex = 997878;

  constructor(private data: DataServiceService, private cd: ChangeDetectorRef, private chartDataService: ChartDataService) { }

  ngOnInit() {
    this.data.getData().subscribe( data => {
      this.personArray = [... data];
    });
    this.caluclateForChartData();
    this.chartDataService.changeMessage(this.chartData);
  }

  sortType(type: String) {
    if (type === 'first') {
      this.personArray = [...this.personArray.sort(this.sortByFirstName)];
    } else if (type === 'last') {
      this.personArray = [...this.personArray.sort(this.sortByLastName)];
    }
  }

  sortByFirstName(a: Person, b: Person) {
    if (a.firstName > b.firstName) return 1
    else if (a.firstName === b.firstName) return 0
    else return -1;
  }

  sortByLastName(a: Person, b: Person) {
    if (a.lastName > b.lastName) return 1
    else if (a.lastName === b.lastName) return 0
    else return -1;
  }

  editPerson(id) {
    const index = this.personArray.findIndex(obj => obj._id === id);
    this.model = new Person(this.personArray[index]._id,
      this.personArray[index].firstName, this.personArray[index].lastName, this.personArray[index].age);
  }

  onSubmit() {
    if(this.model._id === 1){
      this.model._id = this.tempIndex++;
      this.personArray.push(
        new Person(this.model._id, this.model.firstName, this.model.lastName, this.model.age)
      );
    }
    if (this.model._id) {
      const index = this.personArray.findIndex(obj => obj._id === this.model._id) || this.tempIndex++ ;
      this.personArray[index].firstName = this.model.firstName;
      this.personArray[index].lastName = this.model.lastName;
      this.personArray[index].age = this.model.age;
      this.caluclateForChartData();
      this.chartDataService.changeMessage(this.chartData);
    }
    
    this.model._id = 1;
    this.model.firstName = '';
    this.model.lastName = '';
    this.model.age = '';
  }

  caluclateForChartData() {
    this.personArray.forEach((person: any) => {
      if (person.age < 18) {
        this.chartData[0]++;
      } else if (person.age > 18 && person.age < 60) {
        this.chartData[1]++;
      } else {
        this.chartData[2]++
      }
    });
  }

  deletePerswon(id) {
    this.personArray = this.personArray.filter(person => person._id != id);
  }
}
