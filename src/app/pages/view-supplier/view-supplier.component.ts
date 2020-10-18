import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Bids} from '../../models/Bids';
import {Supplier} from '../../models/Supplier';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {

  supList: Supplier[] = [];
  supListDisplay: Supplier[] = [];
  list: any;
  items =  [];
  header = [
    ' ',
    'ID',
    'Name',
    'Contact Number',
    'Email',
    'Address'
  ];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.viewAllSuppliers();
  }

  private viewAllSuppliers(): any {
    this.backendService.viewAllSuppliers()
      .toPromise().then((data: Supplier[]) => {
      const thisDup = this;
      data.map(sup => {
        thisDup.supList.push(sup);
      });

      this.supListDisplay = thisDup.supList;
      for (this.list of this.supList) {
        this.items.push(
          {
            supplier_id: this.list.supplier_id,
            name: this.list.name,
            contactno: this.list.contactno,
            email: this.list.email,
            address: this.list.address
          }
        );
        // console.log(this.list);
      }
    });
  }
}
