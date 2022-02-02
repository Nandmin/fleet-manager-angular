import { Injectable } from '@angular/core';
import { Base } from '../page/base';
import { BaseService } from 'src/app/service/base.service';
//import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // cols: any = {
  //   drivers: [
  //     { key: 'id', text: '#', type: "plain"},
  //     { key: 'name', text: 'Drivers Name', type: "text"},
  //     { key: 'email', text: 'Email', type: "email"},
  //     { key: 'phone', text: 'Phone', type: "number"},
  //     { key: 'city', text: 'City', type: "text"},
  //     { key: 'address', text: 'Street address', type: "text" }
  //   ],
  //   vehicles: [
  //     { key: "id", text: "#", type: "plain"},
  //     { key: "lp", text: "LP.", type: "text"},
  //     { key: "year", text: "Year", type: "number"},
  //     { key: "manufacturer", text: "Man.", type: "text"},
  //     { key: "consumption", text: "Cons.", type: "text"},
  //     { key: "engine", text: "Eng.", type: "text" }
  //   ],
  //   fuelings: [
  //     { key: "id", text: "#", type: "plain"},
  //     { key: "vehicleId", text: "Vehicle", type: "text"},
  //     { key: "driverId", text: "Driver", type: "text"},
  //     { key: "amount", text: "Amount", type: "text"},
  //     { key: "date", text: "Date", type: "date" }
  //   ]
  // };
  // col: any;

  //original
  cols: any = {
    drivers: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'name', text: 'Drivers Name', type: "text" },
      { key: 'email', text: 'Email', type: "text" },
      { key: 'phone', text: 'Phone', type: "number" },
      { key: 'city', text: 'City', type: "select", 
      options: [
        {value: "la", text: "Los Alamos"},
        {value: "bp", text: "Budapest"},
        {value: "debi", text: "Debrecen"}
      ]},
      { key: 'address', text: 'Address', type: "text" }
    ],
    vehicles: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'lp', text: 'CarID', type: "text" },
      { key: 'year', text: 'Year', type: "text" },
      { key: 'manufacturer', text: 'Manufacturer', type: "text" },
      { key: 'consumption', text: "Consumption", type: "text" },
      { key: 'engine', text: 'FuelType', type: "text" }
    ],
    fuelings: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'vehicleId', text: 'Vehicle', type: "text" },
      { key: 'driverId', text: 'Driver Name', type: "text" },
      { key: 'amount', text: 'Ammount', type: "text" },
      { key: 'date', text: 'Date', type: "text" }
    ]
  }; 

  constructor() { }
}
