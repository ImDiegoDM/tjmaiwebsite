import { Component, OnInit } from '@angular/core';
import { ParamMap,Router,ActivatedRoute } from "@angular/router";
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.css']
})
export class GenericPageComponent implements OnInit {
  item;

  constructor(private route:ActivatedRoute,private info:WebsiteInfoService,private loader:LoaderEventService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      let id = params['projectId'] || params['pageId']
      if(params['projectId']){
        this.loader.addEvent();
        this.info.getPostById(params['projectId']).then((response)=>{
          this.loader.done();
          this.item = response;
        });
      }
      if(params['pageId']){
        this.loader.addEvent();
        this.info.getPageById(params['pageId']).then((response)=>{
          this.loader.done();
          this.item = response;
        });
      }
      console.log(params['projectId']);
    });
  }

}
