import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#', type: "plain" },
      { key: 'name', text: 'Name', type: "text" },
      { key: 'email', text: 'Email', type: "text" },
      { key: 'phone', text: 'Phone', type: "number" },
      { key: 'city', text: 'City', type: "text" },
      { key: 'address', text: 'Address', type: "text" },
    ],
    vehicles: [
      { key: 'id', text: '1', type: "plain" },
      { key: 'lp', text: 'GHG-234', type: "text" },
      { key: 'year', text: '2015', type: "text" },
      { key: 'manufacturer', text: 'VW', type: "text" },
      { key: 'consumption', text: 7, type: "text" },
      { key: 'engine', text: 'diesel', type: "text" },
    ],
    fuelings: [
      { key: 'id', text: '1', type: "plain" },
      { key: 'vehicle', text: '1', type: "text" },
      { key: 'driver', text: '1', type: "text" },
      { key: 'ammount', text: '40', type: "text" },
      { key: 'date', text: '2022-01-01', type: "text" },
    ],
  };

  constructor() {}
}
