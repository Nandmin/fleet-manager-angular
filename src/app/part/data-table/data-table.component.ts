import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
// ezeket az adatokat kell átadni a html-nek
  @Input() list: any[] = [];
  @Input() cols: any[] = [];
  
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();


  // Egyirányú adatkötés (data-binding).
// objektum létrehozása, melyben felsoroljuk, hogy az adattáblában milyen mezők és adatok lesznek.
// Ezeket az adatokat a html-be kell megjeleníteni
// Text módosítása esetén a táblázatban is módosul a szöveg
    deleteIconClass = "fa fa-trash";
    phraseString: string ="";
    phraseKey: string = "not set";
    newRow: any = {};

    driver: any = {};
    // driver: any = {
    //   id: 1,
    //   name: "James",
    //   email: "james@cargo.com",
    //   phone: "+36-30-9638521",
    //   city: "Neverland",
    //   address: "Middle of nowhere"
    // };


  // constructor() {
  //   // Property binding-nél egy html elem attribútumára vonatkozó tulajdonságokat kérdezünk le
  //   // 1 másodpercenként cseréli az ikont
  //   setInterval(() => {
  //     this.deleteIconClass = this.deleteIconClass == "fa fa-trash-o" ? "fa fa-trash": "fa fa-trash-o";
  //   }, 1000);
  //  }

  // Dependency Injection
  //  BaseService-be felvesszük az adatokat, szükséges függvényeket, itt meg importálni is kell
  // Ha elindul az alkalmazás, datatable ezt a baseservice-t fogja megkapni, majd inicializáláskor kiolvass az adatot
  // Az adatokat így már a baseservice szolgáltatja
   constructor(
    private baseService: BaseService
      ){   
          setInterval(() => {
            this.deleteIconClass = this.deleteIconClass == "fa fa-trash-o" ? "fa fa-trash": "fa fa-trash-o";
          }, 1000);
      }

  ngOnInit() {
    // átrakva app-component
    //this.driver = this.baseService.getAll('drivers')[0];
  }

  // A create eseményen keresztül továbbadja az adatot az app-component-nek (@Output...)
  onCreate($event: any): void {
    this.create.emit($event);
  }
  
  // Adatküldés a nézetből (html oldalról)
  onUpdate(row: any): void {
    // alert('Update');
    this.update.emit(row);
    //alert(`Clicked on ${$event} button`);
  };

  onDelete(row: any):void {
    // alert('Click on delete button');
    // alert(`Clicked on ${$event} button`);
    if(confirm("Are you sure?")){
      this.delete.emit(row);
    }
  }

}
