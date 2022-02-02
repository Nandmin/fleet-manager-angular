import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends Base {

  // vehicle: any = {};
  constructor(
    baseService: BaseService,
    config: ConfigService
  ) {
    // super: szülőosztály konstruktorának meghívása
    // a konstruktorban lévő adatok sorrendjében kell meghívni
    super(baseService, config, 'vehicles');
   }
}
