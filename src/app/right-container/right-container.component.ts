import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  // variables to control underline
  today:boolean = false;
  week:boolean = true;

  //variable to control metric
  celsius:boolean = true;
  farenheit:boolean = false;

  //function to control underline
  onTodayClick(){
    this.today = true;
    this.week = false;
  }

  onWeekClick(){
    this.week = true;
    this.today = false;
  }

  //function to control metric
  onCelciusClick(){
    this.celsius = true;
    this.farenheit = false;
  }

  onFarenheitClick(){
    this.celsius = false;
    this.farenheit = true;
  }
} 
