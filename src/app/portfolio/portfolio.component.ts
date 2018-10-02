import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { WebsiteInfoService } from '../website-info.service';
import { LoaderEventService } from '../loader-event.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations:[
    trigger('colectionStates',[
      state('view',style({
        opacity:1,
        transform:'scale(1)'
      })),
      state('notView',style({
        opacity:0,
        transform:'scale(.3)'
      })),
      transition('view => notView', animate('300ms ease-in')),
      transition('notView => view', animate('300ms ease-out'))
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  @ViewChild('carousel') carousel:ElementRef;
  actualPage = 0;

  projects=[];

  constructor(private info:WebsiteInfoService,private loader:LoaderEventService) {
    this.getProjects();
   }

  ngOnInit() {
    //console.log(this.projects_old);
    // setTimeout(()=>{this.nextColection()},1000);
  }

  getProjects(){
    this.loader.addEvent();
    this.info.getPosts(this.actualPage+1,4).then((response)=>{
      this.loader.done();
      this.projects.push({state:'view',data:response});
      this.getNextProjects();
    });
  }

  getNextProjects():Promise<any>{
    return new Promise((res,rej)=>{
      this.info.getPosts(this.actualPage+2,4).then((response)=>{
        this.projects.push({state:'notView',data:response});
        console.log(this.projects);
        res();
      }).catch((err)=>{
        console.log('end of page');
        res();
      });
    })
  }

  async nextColection(){

    if(this.actualPage<this.projects.length-1){
      this.projects[this.actualPage].state = 'notView';
      this.actualPage++;
      this.projects[this.actualPage].state = 'view';
      this.navigate();
    }

    if(this.projects.length-1==this.actualPage) await this.getNextProjects();
  }

  backColection(){
    if(this.actualPage>0){
      this.projects[this.actualPage].state = 'notView';
      this.actualPage--;
      this.projects[this.actualPage].state = 'view';
      this.navigate();
    }
  }

  navigate(){
    let amout = this.carousel.nativeElement.clientWidth*this.actualPage;
    console.log(amout);
    this.carousel.nativeElement.scrollLeft=amout;
    console.log(this.carousel.nativeElement.scrollLeft);
    console.log(this.carousel);
  }

  numberChar(elem){
    let wSize = window.innerWidth;
    if(wSize>=806){
      if(wSize<=880){
        return 20;
      }
      else if(wSize<=1000){
        return 30;
      }
      return 50;
    }else{
      if(wSize<=380){
        return 20;
      }
      else if(wSize<=450){
        return 50;
      }
      else if(wSize<=510){
        return 100;
      }
      return 150;
    }
  }
}
