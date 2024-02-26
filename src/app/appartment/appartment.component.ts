import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/appartements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {
listappart:Apartment[]=[]
  constructor(private residenceService:ResidenceService,private router:Router){

  }
  ngOnInit(): void {
    this.residenceService.getappartment().subscribe((data)=>{
      this.listappart=data
    })
  }

  deleteappart(id:number){
    this.residenceService.deleteappart(id).subscribe(()=>{
console.log('deleted')
window.location.reload()
    })

  }
addappart(){
  this.router.navigate(['/addappartment'])

}
}
