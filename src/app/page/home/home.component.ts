import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartInterface, GoogleChartType, Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicleChart!: GoogleChartInterface;
  driversChart!: GoogleChartInterface;
  daysChart!: GoogleChartInterface;
  
  pieChartOptions: any = {
    is3D: true,
    chartArea: {width: 400, height: 400}
  };
  
  columnChartOptions: any = {
    is3D: true,
    chartArea: {width: 800, height: 400}
  };


  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    // ?_expand=vehicle&_expand=driver : a vehicle és a driver adatait összefűzve adja már vissza
  this.baseService.query('fuelings', '?_expand=vehicle&_expand=driver')
  //then: mi történjen akkor, amikor megjön az adat
  // ha ok, akkor első sor, ha nem, akkor 2. sor
  .then(
    data => { 
      this.initCharts(data)
    },
    err => console.error(err)
  )
  }

  initCharts(data: any): void {
    let ByVehicle = this.processByType(data, (row: any) => row.vehicle.lp, (row: any) => row.amount);
    let ByDriver = this.processByType(data, (row: any) => row.driver.name, (row: any) => row.amount);
    let ByDays = this.processByType(data, (row: any) => row.date, (row: any) => row.amount);

    console.log(ByVehicle);
    
    this.vehicleChart = this.collectChartData(
      [['Vehicle', 'Consumption']].concat(ByVehicle), 'PieChart', this.pieChartOptions);
    
    this.driversChart = this.collectChartData(
      [['Vehicle', 'Consumption']].concat(ByDriver), 'PieChart', this.pieChartOptions);

    this.daysChart = this.collectChartData(
      [['Vehicle', 'Consumption']].concat(ByDays), 'ColumnChart', this.columnChartOptions
    );
    
    // {
    //   chartType: 'PieChart',
    //   //chartType: GoogleChartType.PieChart,
    //   dataTable: [
    //     ['Vehicle', 'Cosumption'],
    //     ['GGP-432', 40],
    //     ['HHH-432', 100],
    //     ['UUU-432', 10]
    //   ],
    //   //firstRowIsData: true,
    //   options: this.pieChartOptions
    // }
  }


  collectChartData(data: any[], type: string, options: any): any {
    return {
      chartType: type,
      //chartType: GoogleChartType.PieChart,
      dataTable: data,
      //firstRowIsData: true,
      options: options
    }
  }

  // típus alapján végzi el az adatfeldolgozást
  processByType(data: any[], getkey: Function, getValue: any): any[] {
    let processed: any = {};
    let table: any[] = [];

    for(let row of data){
      let key = getkey(row);

      if(!processed[getkey(row)]){
        processed[getkey(row)] = 0;
      }
      processed[key] += parseInt(getValue(row));
    }
    for(let k in processed){
      table.push([k, processed[k]]);
    }

    return table;
  }
}

