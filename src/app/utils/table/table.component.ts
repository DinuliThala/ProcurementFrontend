import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // Items will be used for the values
  // Header is for the column headings

  @Input() items;
  @Input() header;
  @Input() img;

  page = 1;
  pageSize = 4;
  collectionSize = 10;

  get sortData(): any[] {
    return this.items
      .map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


  constructor() {
  }

  ngOnInit(): void {

  }
}
