import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myListRoutes =[
    {
      route:'/home',
      defaultIcon:'',
      activeIcon:'',
      title:'Home'
    },
    {
      route:'/rating',
      defaultIcon:'',
      activeIcon:'',
      title:'Rating'
    },
    {
      route:'/review',
      defaultIcon:'',
      activeIcon:'',
      title:'Review'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}