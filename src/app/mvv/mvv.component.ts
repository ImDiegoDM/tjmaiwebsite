import { Component, OnInit } from '@angular/core';
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-mvv',
  templateUrl: './mvv.component.html',
  styleUrls: ['./mvv.component.css']
})
export class MvvComponent implements OnInit {

  mvv;
  constructor(private info:WebsiteInfoService,private loader:LoaderEventService) {
    this.loader.addEvent();
    info.getMVV().then((response)=>{
      this.loader.done();
      console.log(response);
      
      this.mvv=response;
    });
  }

  ngOnInit() {
  }

}
