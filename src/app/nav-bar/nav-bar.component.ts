import { Component, OnInit,Input } from '@angular/core';
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navItems=[
    {label:'home',url:'home',actived:true}
  ];

  showFixedNav=false;
  hideFixedNav=true;
  displayFixedNav=false;

  @Input() dynamic=true;

  constructor(private info:WebsiteInfoService,private loader:LoaderEventService) {
    this.getPages();
  }

  ngOnInit() {
    if(this.dynamic){
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }else{
      this.displayFixedNav=true;
      this.showFixedNav=true;
      this.hideFixedNav=false;
    }
  }

  getPages(){
    this.loader.addEvent();
    this.info.getPages().then((response:any[])=>{
      this.loader.done();
      this.navItems = this.navItems.concat(response.map((item)=>{
        return {label:item.title.rendered,url:'pages/'+item.id,actived:false};
      }));
    },(err)=>{});
  }

  ngOnDestroy() {
    if(this.dynamic){
      window.removeEventListener('scroll', this.scroll, true);
    }
  }

  show(){
    this.displayFixedNav=true;
    this.showFixedNav=true;
    this.hideFixedNav=false;
  }

  hide(){
    this.showFixedNav=false;
    setTimeout(()=>{
      this.hideFixedNav=true;
      setTimeout(()=>{
        this.displayFixedNav=false;
      },500);
    },10);
  }

  scroll=(event)=>{
    
    if(window.scrollY>window.innerHeight && !this.displayFixedNav){
      console.log('show nav')
      this.show();
    }else if(window.scrollY<=window.innerHeight && this.showFixedNav){
      console.log('hide nav')
      this.hide();
    }

  }

}
