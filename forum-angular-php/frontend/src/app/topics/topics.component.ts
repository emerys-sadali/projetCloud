import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BreadcrumbData } from '../breadcrumb/breadcrumb.component';
import { MessageService, PhpData } from '../message/message.service';
interface topics{
  Id_s:any;
  texte:any;
  nb_posts:number;
  Id_c:any;
  Dernier_envoi:any;
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit,AfterViewInit {
  breadcrumb: BreadcrumbData[]=[];
  n:topics[]=[];
  
  displayedColumns: string[] = ['texte', 'nb_posts', 'Dernier_envoi'];
  dataSource = new MatTableDataSource<topics>();
  id_c!:string|null;
  message=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private topic:MessageService, private route:ActivatedRoute, private router:Router) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.id_c=this.route.snapshot.paramMap.get('id');
   
    this.topic.sendMessage2("topics",{Id_c:this.id_c}).subscribe(resultat=>{
      console.log(resultat);
      if(resultat.status=="ok"){
      
        this.n=resultat.data.Sujet;
        this.dataSource.data=resultat.data.Sujet;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
        this.breadcrumb.push({nom:'Tous les cours',route:'/cours'});
        this.breadcrumb.push({nom:resultat.data.Nom,route:''});

      }
      else this.router.navigateByUrl('/login');
    });
  }
  receive_info(event:any):void{
    console.log(event);

    if(typeof event!="undefined"){
      const sujet = {
        Id_s:event.Id_s,
        texte:event.texte,
        nb_posts:0,
        Id_c:this.id_c,
        Dernier_envoi:""
      }
      this.n.unshift(sujet);
      this.dataSource.data=this.n;
      //this.dataSource.data.push(sujet);
    }
  }

}
