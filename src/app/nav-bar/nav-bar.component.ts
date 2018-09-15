import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navItems=[
    {label:'home',actived:true},
    {label:'generic',actived:false},
  ];

  showFixedNav=false;
  hideFixedNav=true;
  displayFixedNav=false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
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
