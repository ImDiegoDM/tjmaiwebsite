import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects=[
    {
      title:'Project',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis consectetur dui quis aliquet. In scelerisque lorem ac tortor dictum, feugiat lobortis eros rhoncus. Nulla eget erat non elit accumsan mollis vel et lectus. Duis nec hendrerit lectus. In at sodales risus, ut lacinia mauris. Suspendisse mollis magna sit amet pellentesque sagittis. Nulla id molestie est. Vestibulum sit amet risus eget risus facilisis gravida a eget quam. Donec id leo a urna eleifend pulvinar at eu ipsum. Morbi euismod sapien at arcu blandit, nec aliquam ligula tincidunt.',
      imgUrl:'assets/project.jpg'
    },
    {
      title:'Project',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis consectetur dui quis aliquet. In scelerisque lorem ac tortor dictum, feugiat lobortis eros rhoncus. Nulla eget erat non elit accumsan mollis vel et lectus. Duis nec hendrerit lectus. In at sodales risus, ut lacinia mauris. Suspendisse mollis magna sit amet pellentesque sagittis. Nulla id molestie est. Vestibulum sit amet risus eget risus facilisis gravida a eget quam. Donec id leo a urna eleifend pulvinar at eu ipsum. Morbi euismod sapien at arcu blandit, nec aliquam ligula tincidunt.',
      imgUrl:'assets/project.jpg'
    },
    {
      title:'Project',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis consectetur dui quis aliquet. In scelerisque lorem ac tortor dictum, feugiat lobortis eros rhoncus. Nulla eget erat non elit accumsan mollis vel et lectus. Duis nec hendrerit lectus. In at sodales risus, ut lacinia mauris. Suspendisse mollis magna sit amet pellentesque sagittis. Nulla id molestie est. Vestibulum sit amet risus eget risus facilisis gravida a eget quam. Donec id leo a urna eleifend pulvinar at eu ipsum. Morbi euismod sapien at arcu blandit, nec aliquam ligula tincidunt.',
      imgUrl:'assets/project.jpg'
    },
    {
      title:'Project',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis consectetur dui quis aliquet. In scelerisque lorem ac tortor dictum, feugiat lobortis eros rhoncus. Nulla eget erat non elit accumsan mollis vel et lectus. Duis nec hendrerit lectus. In at sodales risus, ut lacinia mauris. Suspendisse mollis magna sit amet pellentesque sagittis. Nulla id molestie est. Vestibulum sit amet risus eget risus facilisis gravida a eget quam. Donec id leo a urna eleifend pulvinar at eu ipsum. Morbi euismod sapien at arcu blandit, nec aliquam ligula tincidunt.',
      imgUrl:'assets/project.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
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
