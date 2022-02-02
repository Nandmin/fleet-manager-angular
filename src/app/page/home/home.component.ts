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
      this.processData(data)
    },
    err => console.error(err)
  )
  }

  processData(data: any): void {
    this.vehicleChart = {
      chartType: 'PieChart',
      //chartType: GoogleChartType.PieChart,
      dataTable: [
        ['Vehicle', 'Cosumption'],
        ['GGP-432', 40],
        ['HHH-432', 100],
        ['UUU-432', 10]
      ],
      //firstRowIsData: true,
      options: this.pieChartOptions
    }
  }
}
