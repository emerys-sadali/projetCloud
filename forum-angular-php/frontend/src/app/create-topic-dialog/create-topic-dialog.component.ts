import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageService } from '../message/message.service';
@Component({
  selector: 'app-create-topic-dialog',
  templateUrl: './create-topic-dialog.component.html',
  styleUrls: ['./create-topic-dialog.component.scss']
})
export class CreateTopicDialogComponent implements OnInit {
  texte="";
  error_message="";
  constructor(
    public dialogRef: MatDialogRef<CreateTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,@Inject(MessageService) private message:MessageService) {}
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  new_subject():void{
    this.message.sendMessage2('saveNewTopic',{Id_c:this.data,Sujet:this.texte}).subscribe(resultat=>{
      console.log(resultat);
    if(resultat.status=="error") this.error_message=resultat.data.reason;
    else this.dialogRef.close({Id_s:resultat.data,texte:this.texte});
    });
  }
}
