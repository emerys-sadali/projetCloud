import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message/message.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
interface course{
  Id_c:number;
  Nom:string;
  Topic:number;
  Posts:number;
  Derniere_Modif:any;
}
const ELEMENT_DATA: course[] =[];
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit, AfterViewInit {
  titre : string = 'Liste des cours auxquels vous avez accès';
  displayedColumns: string[] = ['Nom', 'Topic', 'Posts', 'Derniere_Modif'];
  dataSource = new MatTableDataSource<course>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private cours:MessageService) {}
  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.cours.sendMessage2("cours",{}).subscribe(resultat=>{
      console.log(resultat);
      if(resultat.status=="ok"){
        this.dataSource.data=resultat.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
      }
    });
  }
  

}
