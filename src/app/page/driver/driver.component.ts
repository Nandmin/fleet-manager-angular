import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent extends Base {

  driver: any = {};
  constructor(
    baseService: BaseService,
    config: ConfigService
  ) {
    // super: szülőosztály konstruktorának meghívása
    // a konstruktorban lévő adatok sorrendjében kell meghívni
    super(baseService, config, 'drivers');
   }

}
