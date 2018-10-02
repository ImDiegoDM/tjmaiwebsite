import { Component, OnInit,ElementRef } from '@angular/core';
import { LoaderEventService } from "../loader-event.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showLoad=true;

  constructor(private elementRef:ElementRef,private loader:LoaderEventService) {
   }

  ngOnInit() {
    document.querySelector('body').style.overflowY="hidden";
    this.loader.registerLoadCallBack(()=>{
      this.showLoad=false;
      document.querySelector('body').style.overflowY="auto";
    });
  }

}
