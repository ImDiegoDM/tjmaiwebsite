import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class WebsiteInfoService {

  constructor(private httpclient:HttpClient) { }

  getKnowField():Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/know').subscribe((response)=>{
        res(response[0].content.rendered)
      },(err)=>{
        rej(err);
      });
    });
  }

  getMVV():Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/mvv').subscribe((response:any[])=>{
        response=response.sort((a,b)=>{
          if(a.id<b.id){
            return -1;
          }
          else if(a.id>b.id){
            return 1;
          }
          return 0;
        });

        res(response.filter((item,index)=>{
          return index < 3;
        }))
      },(err)=>{
        rej(err);
      });
    });
  }

  getContact():Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/contact').subscribe((response)=>{
        res(response[0].content.rendered)
      },(err)=>{
        rej(err);
      });
    });
  }

  getSocialMedias():Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/social_medias').subscribe((response)=>{
        res(response)
      },(err)=>{
        rej(err);
      });
    });
  }

  getPosts(page:number,per_page:number):Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/posts?page='+page+'&per_page='+per_page)
      .subscribe((response)=>{
        res(response);
      },(err)=>{
        rej(err);
      });
    });
  }

  getPostById(id:number):Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/posts/'+id)
      .subscribe((response)=>{
        res(response);
      },(err)=>{
        rej(err);
      });
    });
  }

  getPageById(id:number):Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/pages/'+id)
      .subscribe((response)=>{
        res(response);
      },(err)=>{
        rej(err);
      });
    });
  }

  getPages():Promise<any>{
    return new Promise((res,rej)=>{
      this.httpclient.get(environment.wpUrl+'wp/v2/pages?per_page=100')
      .subscribe((response)=>{
        res(response);
      },(err)=>{
        rej(err);
      });
    });
  }
}
