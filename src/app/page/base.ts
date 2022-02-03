import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';
import { Subscription } from 'rxjs';

// @Component({
//     template: ''
// })

@Directive()

export class Base implements OnInit, OnDestroy {
    list: any = [];
    cols: any[] = [];
    //dataType: any = {};
    listSubscription: Subscription = new Subscription;
  
    constructor(
      protected baseService: BaseService,
      protected config: ConfigService,
      public dataType: string
    ){
      
    }
    // kikötés, hogy ennek lennie kell
    ngOnInit(){
      console.log(this.dataType);
      this.cols = this.config.cols[this.dataType];
      //this.cols = this.config.cols['fuelings'];
      // this.driver = this.baseService.getAll('drivers');
      this.listSubscription = this.baseService.getAll(this.dataType).subscribe(
        // ha megérkeznek az adatok:
        list => this.list = list,
        //hiba esetén
        err => console.log(err),
        // leiratkozás az adatforrásról
        () => console.log('unsubsciped')
      );
    }
  
    // mielőtt az osztályból létrehozott objektum megszűnik/leiratkozunk, hogy felszabadítsunk memóriát
    ngOnDestroy(): void {
        this.listSubscription.unsubscribe();
    }
  
    onCreate(row: any): void {
      this.baseService.create(this.dataType, row);
      
    }
  
    onUpdate(row: any): void {
      this.baseService.update(this.dataType, row);
    }
  
    onDelete(row: any): void {
      this.baseService.delete(this.dataType, row);
    }
}

