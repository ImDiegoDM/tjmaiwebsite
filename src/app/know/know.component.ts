import { Component, OnInit } from '@angular/core';
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.css']
})
export class KnowComponent implements OnInit {

  know='';

  constructor(private info:WebsiteInfoService,private loader:LoaderEventService) {
    this.loader.addEvent();
    info.getKnowField().then((response)=>{
      this.loader.done();
      this.know=response;
    });
  }

  ngOnInit() {
  }

}
