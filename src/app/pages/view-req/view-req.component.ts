import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Requisiton} from '../../models/Requisiton';

@Component({
  selector: 'app-view-req',
  templateUrl: './view-req.component.html',
  styleUrls: ['./view-req.component.css']
})
export class ViewReqComponent implements OnInit {

  reqList: Requisiton[] = [];
  reqListDisplay: Requisiton[] = [];
  list: any;
  items =  [];

  header = [
    ' ',
    'Requisition ID',
    'Site Manager',
    'Status',
    'Type',
    'Due Date',
    'Site',
    'Store Location'
  ];

   isVisible = false ;

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.getAllRequisitions();
  }

  // tslint:disable-next-line:typedef
  getAllRequisitions() {
    this.backendService.viewAllRequisition()
      .toPromise().then((data: Requisiton[]) => {
        const thisDup = this;
        data.map( record =>  {
          thisDup.reqList.push(record);
        });

        this.reqListDisplay = thisDup.reqList;
        for (this.list of this.reqList) {
          this.items.push(
            {requisition_id: this.list.requisition_id,
              manager: this.list.manager,
              status: this.list.status,
              type: this.list.type,
              due_date: this.list.due_date,
              site: this.list.site,
              store_location: this.list.store_location
            }
          );
          console.log(this.list);
        }
    });
  }


  private showModal(): void {

      this.isVisible = true;
  }
}
