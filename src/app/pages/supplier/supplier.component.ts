import {Component, OnInit} from '@angular/core';
import {Bids} from '../../models/Bids';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  header = [
    ' ',
    'ID',
    'Amount',
    'Description',
    'Requisition Id'
  ];

  bidList: Bids[] = [];
  bidListDisplay: Bids[] = [];
  list: any;
  items =  [];
  private supId: any;

  constructor(private backendService: BackendService,
              private readonly router: Router) {
    backendService.apiData$.subscribe(data => this.supId = data);
    console.log('passed data');
    console.log(this.supId);
  }

  ngOnInit(): void {
    this.getAllBidsBySupplier();
  }

  getAllBidsBySupplier(): any {
    this.backendService.viewBidsForSupplier(1)
      .toPromise().then((data: Bids[]) => {
      const thisDup = this;
      data.map( bid =>  {
        thisDup.bidList.push(bid);
      });
      console.log('inside subs');
      console.log(this.supId);
      this.bidListDisplay = thisDup.bidList;
      for (this.list of this.bidList) {
        this.items.push(
          {
            bidId: this.list.bidId,
            amount: this.list.amount,
            description: this.list.description,
            requisitionId: this.list.requisitionId,
          }
        );
        console.log(this.list);
      }
    });
  }

  logOut(): any {
    this.router.navigate(['login']);
  }

}
