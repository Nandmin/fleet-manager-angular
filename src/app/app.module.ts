import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ebbem van az ngModel
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './part/menu/menu.component';
import { DataTableComponent } from './part/data-table/data-table.component';
import { DataRowComponent } from './part/data-row/data-row.component';
import { DataCellComponent } from './part/data-cell/data-cell.component';
import { ObjectArrayPipe } from './pipe/object-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    DataRowComponent,
    DataCellComponent,
    ObjectArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //amit importálunk ide is fel kell venni
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
