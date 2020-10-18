import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Purchased} from '../../models/Purchased';

@Component({
  selector: 'app-view-purchase-order',
  templateUrl: './view-purchase-order.component.html',
  styleUrls: ['./view-purchase-order.component.css']
})
export class ViewPurchaseOrderComponent implements OnInit {

  poList: Purchased[] = [];
  poListDisplay: Purchased[] = [];
  list: any;
  items = [];
  header = [
    'Purchase Id',
    'Supplier Id',
    'Transport Cost',
    'Amount',
    'Requisition Id',
    'Description'
  ];


  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.viewAllPurchaseOrders();
  }

  viewAllPurchaseOrders(): any {
    this.backendService.getAllFromPurchased()
      .toPromise().then((data: Purchased[]) => {
      const thisDup = this;
      data.map(bid => {
        thisDup.poList.push(bid);
      });

      this.poListDisplay = thisDup.poList;
      for (this.list of this.poList) {
        this.items.push(
          {
            purchaseId: this.list.purchaseId,
            supplierId: this.list.supplierId,
            transportCost: this.list.transportCost,
            requisitionId: this.list.requisitionId,
            description: this.list.description
          }
        );
        // console.log(this.list);
      }
    });
  }

}
