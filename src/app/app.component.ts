import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fleet manager';
  // driver: any = {};
  // cols: any[] = [];
  // listSubscription!: Subscription;

  constructor(
    // private baseService: BaseService,
    // private config: ConfigService
  ){
    
  }
  // kikötés, hogy ennek lennie kell
  ngOnInit(){
    // this.cols = this.config.cols.drivers;
    // // this.driver = this.baseService.getAll('drivers');
    // this.listSubscription = this.baseService.getAll('drivers').subscribe(
    //   // ha megérkeznek az adatok:
    //   list => this.driver = list,
    //   //hiba esetén
    //   err => console.log(err),
    //   // leiratkozás az adatforrásról
    //   () => console.log('unsubsciped')
    //);
  }

  // mielőtt az osztályból létrehozott objektum megszűnik/leiratkozunk, hogy felszabadítsunk memóriát
  // ngOnDestroy(): void {
      // this.listSubscription.unsubscribe();
  // }

  // onCreate(row: any): void {
  //   this.baseService.create('drivers', row);
  // }

  // onUpdate(row: any): void {
  //   this.baseService.update('drivers', row);
  // }

  // onDelete(row: any): void {
  //   this.baseService.delete('drivers', row);
  // }
}

