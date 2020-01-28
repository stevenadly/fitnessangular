import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress: number = 20;
  timer: number;
  @Output() canceledTraining = new EventEmitter();

  constructor(public dialog: MatDialog) { }
  startOrResumeTimer() {

    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }


  ngOnInit() {
    this.startOrResumeTimer();
  }

  stopAddingExercises() {
    clearInterval(this.timer);
    let DialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        prgoress: this.progress
      }
    });


    DialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.canceledTraining.emit();
      }else{
        this.startOrResumeTimer();
      }
    });


  }


}
