import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {
  // a data-cell így már tudja, hogy van bejövő adat, amit a cellValue-n keresztül kap meg
  // a () arra szolgál, ha más névvel jön a bejövő adat, át lehet írni
  @Input() cellValue: any;
  @Input() col: any;

  constructor() { }

  ngOnInit(): void {
  }

}
