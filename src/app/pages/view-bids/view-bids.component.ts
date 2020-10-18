import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Bids} from '../../models/Bids';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Router} from '@angular/router';

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

  // Modal variables
  tplModalButtonLoading = false;
  htmlModalVisible = false;
  disabled = false;

  constructor(private backendService: BackendService,
              private modal: NzModalService,
              private viewContainerRef: ViewContainerRef,
              private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllBids();
  }

  getAllBids(): any {
    this.backendService.viewAllBids()
      .toPromise().then((data: Bids[]) => {
      const thisDup = this;
      data.map(bid => {
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
        // console.log(this.list);
      }
    });
  }

  onChangeHandler(): any {
    console.log('working');
    this.router.navigate(['home']);
  }

  createModal(): void {
    this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }

  statusChange(): any {
    console.log('button click');
  }
}
