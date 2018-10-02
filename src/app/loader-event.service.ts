import { Injectable } from '@angular/core';

@Injectable()
export class LoaderEventService {

  events=0;
  eventsDone=0;

  loadAllCallback:(()=>void)[]=[];

  constructor() { }

  registerLoadCallBack(callback:()=>void){
    this.loadAllCallback.push(callback);
  }

  addEvent(){
    this.events++;
  }

  callAllCallbacks(){
    this.loadAllCallback.forEach((item)=>{
      item();
    });
  }

  done(){
    if(this.events>this.eventsDone){
      this.eventsDone++;
      if(this.events==this.eventsDone){ 
        this.events = 0;
        this.eventsDone=0;
        this.callAllCallbacks();
      }
    }
  }

}
