import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
username="";
password="";
error_user=false;
error_mdp=false;
incorrect=false;
constructor(private message:MessageService, private router:Router) {}

ngOnInit() {}

affiche_console(){
    console.log("Username : ",this.username,"\nPassword: ",this.password);
    this.show_error();
    this.message.sendMessage('checkLogin',{Login:this.username,Password:this.password}).subscribe(resultat=>{
      console.log(resultat);
      if(resultat.status=="ok") this.router.navigateByUrl('/cours');
      else{
        this.show_incorrect();
      }
    });
    
}
show_incorrect(){
  this.incorrect=true;
}
show_error(){
  if(this.username=="") this.error_user=true;
  else this.error_user=false;
  if(this.password=="") this.error_mdp=true;
  else this.error_mdp=false;
}  

}