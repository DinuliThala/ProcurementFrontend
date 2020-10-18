import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Bids} from '../../models/Bids';

@Component({
  selector: 'app-view-purchase-order',
  templateUrl: './view-purchase-order.component.html',
  styleUrls: ['./view-purchase-order.component.css']
})
export class ViewPurchaseOrderComponent implements OnInit {

  bidList: Bids[] = [];
  bidListDisplay: Bids[] = [];
  list: any;
  items =  [];
  header = [
    ' ',
    'ID',
    'Amount',
    'Description',
    'Requisition Id',
    'Supplier Id'
  ];


  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  viewAllPurchaseOrders(): any {

  }


}
