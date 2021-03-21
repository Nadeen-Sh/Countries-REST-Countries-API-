import { Component } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

 
  constructor(private router:Router){

  }

  ngOnit(){
 
  }

  goHome(){
    this.router.navigate(['/'])
  }
  
  toggle(){
    
  }
  }
  


