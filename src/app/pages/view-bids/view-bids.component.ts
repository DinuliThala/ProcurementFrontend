import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import {ColumnItem} from './ColumnItem';
import {DataItem} from './DataItem';
import {Requisiton} from '../../models/Requisiton';
import {BackendService} from '../../services/backend.service';
import {Bids} from '../../models/Bids';

@Component({
  selector: 'app-view-bids',
  templateUrl: './view-bids.component.html',
  styleUrls: ['./view-bids.component.css']
})
export class ViewBidsComponent implements OnInit {

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

  isVisible = false ;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getAllBids();
  }

  getAllBids(): any {
    this.backendService.viewAllBids()
      .toPromise().then((data: Bids[]) => {
      const thisDup = this;
      data.map( bid =>  {
        thisDup.bidList.push(bid);
      });

      this.bidListDisplay = thisDup.bidList;
      for (this.list of this.bidList) {
        this.items.push(
          {
            bidId: this.list.bidId,
            amount: this.list.amount,
            description: this.list.description,
            requisitionId: this.list.requisitionId,
            supplierId: this.list.supplierId
          }
        );
        console.log(this.list);
      }
    });
  }


  getAllBidsBySupplier(): any {
    this.backendService.viewBidsForSupplier(this.list.supplierId)
      .toPromise().then((data: Bids[]) => {
      const thisDup = this;
      data.map( bid =>  {
        thisDup.bidList.push(bid);
      });

      this.bidListDisplay = thisDup.bidList;
      for (this.list of this.bidList) {
        this.items.push(
          {
            bidId: this.list.bidId,
            amount: this.list.amount,
            description: this.list.description,
            requisitionId: this.list.requisitionId,
            // supplierId: this.list.supplierId
          }
        );
        console.log(this.list);
      }
    });
  }
}
