import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ebbem van az ngModel
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { GoogleChartsModule } from 'angular-google-charts'

import { AppComponent } from './app.component';
import { MenuComponent } from './part/menu/menu.component';
import { DataTableComponent } from './part/data-table/data-table.component';
import { DataRowComponent } from './part/data-row/data-row.component';
import { DataCellComponent } from './part/data-cell/data-cell.component';
import { ObjectArrayPipe } from './pipe/object-array.pipe';
import { HomeComponent } from './page/home/home.component';
import { DriverComponent } from './page/driver/driver.component';
import { VehicleComponent } from './page/vehicle/vehicle.component';
import { FuelingComponent } from './page/fueling/fueling.component';

// útvonalak meghatározása
// **: minden egyéb esetben a home töltődjön be
const appRouting: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'fueling', component: FuelingComponent  },
  { path: 'vehicle', component: VehicleComponent  },
  { path: 'driver', component: DriverComponent  },
  { path: '**', component: HomeComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    DataRowComponent,
    DataCellComponent,
    ObjectArrayPipe,
    HomeComponent,
    DriverComponent,
    VehicleComponent,
    FuelingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //amit importálunk ide is fel kell venni
    HttpClientModule,
    // beállítja, hogy az approutingban meghatározott szabályok működjenek
    GoogleChartsModule.forRoot({ version: 'chart-version' }),
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
