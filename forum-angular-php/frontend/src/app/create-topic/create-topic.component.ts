import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTopicDialogComponent } from '../create-topic-dialog/create-topic-dialog.component';
import { PhpData } from '../message/message.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  id_c!:string|null;
  @Output() out=new EventEmitter<PhpData>();
  constructor(private router:Router,private route:ActivatedRoute,public dialog: MatDialog) { }

    ngOnInit(): void {
      this.id_c=this.route.snapshot.paramMap.get('id');
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(CreateTopicDialogComponent, {
        width: '250px',
        data: this.id_c,
      });

      dialogRef.afterClosed().subscribe(result => {
        
        this.out.emit(result);
      });
    }
}
