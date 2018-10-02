import { Component, OnInit,Input } from '@angular/core';
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact;
  socialMedias;

  @Input() showInfo=true;

  constructor(private info:WebsiteInfoService,private loader:LoaderEventService) {
    this.loader.addEvent();
    info.getContact().then((response)=>{
      this.loader.done();
      this.contact=response;
    });
    this.loader.addEvent();
    info.getSocialMedias().then((response)=>{
      this.loader.done();
      console.log(response);
      
      this.socialMedias=response;
    })
  }

  ngOnInit() {
  }

}
