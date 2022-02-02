import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  serverUrl: string = "http://localhost:3000/"
  observables: any = {

  };

  // data: any = {
  //   drivers: [
  //     {
  //       id: 1,
  //       name: 'James',
  //       email: 'james@cargo.com',
  //       phone: '36309638521',
  //       city: 'la',
  //       address: 'Middle of nowhere',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jack',
  //       email: 'jack@cargo.com',
  //       phone: '363093238521',
  //       city: 'bp',
  //       address: 'Middle of Nowhere',
  //     },
  //     {
  //       id: 3,
  //       name: 'Jones',
  //       email: 'jones@cargo.com',
  //       phone: '36309456521',
  //       city: 'debi',
  //       address: 'Middle of Nowhere',
  //     }
  //   ],
  //   vehicles: [
  //     {
  //       id: 1,
  //       lp: 'GHG-234',
  //       year: 2015,
  //       manufacturer: 'VW',
  //       consumption: 7,
  //       engine: 'diesel',
  //     },
  //   ],
  //   fuelings: [
  //     {
  //       id: 1,
  //       vehicle: 1,
  //       driver: 1,
  //       ammount: 40,
  //       date: '2022-01-01',
  //     }
  //   ]
  // };

  constructor(
    private http: HttpClient
  ) {}

  // beégetett adatból
  // getAll(dataType: string): any[] {
  //   return this.data[dataType];
  // }

    //egyszer használatos objektum: promise
    query(dataType: string, params: string): Promise<any> {
      let url = `${this.serverUrl}${dataType}${params}`;
      return this.http.get(url).toPromise();
    }

  // Observable: reaktív programozást tesz lehetővé, ha vmi változik, értesíti a szereplőket
  // Az értesítésre fel kell iratkozni
  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    if ( !this.observables[dataType]){
      // Subject: egyszerűsítet observable, ugyanúgy fel lehet rá iratkozni
      // feltöltjük az objektumot subjectekkel és amikor jön egy next, mindenkit értesít aki feliratkozott
      // a végén a subjecttel térünk vissza
      this.observables[dataType] = new Subject();
    }
      this.http.get(url).forEach(
        // ha meghívjuk a next-et mindenkit értesít, hogy módosulás történt és teríti az adatokat
        data => this.observables[dataType].next(data)
      );
      
      return this.observables[dataType];
  }

  // POST létrehozása
  create(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}`;
    // hova és mit küldünk
    this.http.post(url, row)
    //a szerver üzeneteket kiírja. Ez az observable-ból jön, egyszer fut le
    .forEach(response => this.getAll(dataType));

  }

  update(dataType: string, row: any): void {
    // kell az id, hogy tudja mit kell módosítani
    let url = `${this.serverUrl}${dataType}/${row.id}`;
    // hova és mit küldünk
    this.http.put(url, row)
    //a szerver üzeneteket kiírja. Ez az observable-ból jön, egyszer fut le
    .forEach(response => this.getAll(dataType));
  }

  delete(dataType: string, row: any): void {
    let url = `${this.serverUrl}${dataType}/${row.id}`;
    this.http.delete(url, row)
    .forEach(response => this.getAll(dataType));
  }
}
