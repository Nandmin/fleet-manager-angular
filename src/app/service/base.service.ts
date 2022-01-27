import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  data: any = {
    drivers: [
      {
        id: 1,
        name: 'James',
        email: 'james@cargo.com',
        phone: '36309638521',
        city: 'la',
        address: 'Middle of nowhere',
      },
      {
        id: 2,
        name: 'Jack',
        email: 'jack@cargo.com',
        phone: '363093238521',
        city: 'bp',
        address: 'Middle of Nowhere',
      },
      {
        id: 3,
        name: 'Jones',
        email: 'jones@cargo.com',
        phone: '36309456521',
        city: 'debi',
        address: 'Middle of Nowhere',
      }
    ],
    vehicles: [
      {
        id: 1,
        lp: 'GHG-234',
        year: 2015,
        manufacturer: 'VW',
        consumption: 7,
        engine: 'diesel',
      },
    ],
    fuelings: [
      {
        id: 1,
        vehicle: 1,
        driver: 1,
        ammount: 40,
        date: '2022-01-01',
      }
    ]
  };

  constructor() {}

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
