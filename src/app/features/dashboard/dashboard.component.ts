import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  amount: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', amount: 5, date: '10/21/19'},
  { name: 'Helium', amount: 5, date: '10/21/19'},
  { name: 'Lithium', amount: 6, date: '10/21/19'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Amount', 'Date'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
