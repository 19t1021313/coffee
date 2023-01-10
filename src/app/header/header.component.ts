import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  navbar =[
    {item:'Overview', url:'/home'},
    {item:'News', url:'/'},
    {item:'Project Interventions', url:'/'},
    {item:'', image:'./assets/images/partner/header_logo.png', url:'/'},
    {item:'Knowleage Products', url:'/'},
    {item:'Library', url:'/'},
  ]
}
