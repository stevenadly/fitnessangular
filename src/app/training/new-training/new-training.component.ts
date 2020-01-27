import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
@Output()startTrainig = new EventEmitter();
exercises= [
    {value: 'benshPress', viewValue: 'bensh press'},
    {value: 'squats', viewValue: 'squats'},
    {value: 'barbelRow', viewValue: 'barbel row'}
  ];
  constructor() { }

  ngOnInit() {
  }
  onStartTraining(){
    this.startTrainig.emit();
  }

}
