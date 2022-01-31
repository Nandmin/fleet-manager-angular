import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  serverUrl: string = "http://localhost:3000/"

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

  constructor(
    private http: HttpClient
  ) {}

  // beégetett adatból
  // getAll(dataType: string): any[] {
  //   return this.data[dataType];
  // }

  // Observable: reaktív programozást tesz lehetővé, ha vmi változik, értesíti a szereplőket
  // Az értesítésre fel kell iratkozni
  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    return this.http.get(url)
  }

  // POST létrehozása
  create(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}`;
    // hova és mit küldünk
    this.http.post(url, row)
    //a szerver üzeneteket kiírja. Ez az observable-ból jön, egyszer fut le
    .forEach(response => console.log(response));

  }
}
