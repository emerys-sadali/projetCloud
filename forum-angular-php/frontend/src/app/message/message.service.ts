import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface PhpData
{
    data : any;
    status : string;
   
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http_: HttpClient) { }
  sendMessage(url:string, data:any ) : Observable<PhpData>{
    let completeUrl=environment.backendUrl;
    const formData=new FormData();
    for(const key in data){
      formData.append(key,data[key]);
    }
    
    console.log(completeUrl+url);
    return this.http_.post<PhpData>(
      completeUrl+url+".php",formData,{
        withCredentials:true
      }
    );
  }
  sendMessage2(url:string, data:any ) : Observable<PhpData>{
    let completeUrl=environment.backendUrl2;
    const formData=new FormData();
    for(const key in data){
      formData.append(key,data[key]);
    }
    
    console.log(completeUrl+url);
    return this.http_.post<PhpData>(
      completeUrl+url+".php",formData,{
        withCredentials:true
      }
    );
  }
}
