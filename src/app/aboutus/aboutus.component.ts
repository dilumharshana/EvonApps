import { Component, OnInit } from '@angular/core';

export interface Employee
{
  id:String;
  name:String;
  email:String;

}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee = [
    
      {id:"0001" , name:"Dilum" , email:"dilum.harshana123@gmail.com"}
  ]

}
