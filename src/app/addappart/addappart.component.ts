import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappart',
  templateUrl: './addappart.component.html',
  styleUrls: ['./addappart.component.css']
})
export class AddappartComponent implements OnInit {
  addform!:FormGroup

  res:Residence={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  }

  constructor(private residenceservice:ResidenceService,private route:Router){}
ngOnInit(): void {
  this.addform=new FormGroup({
    appartNum:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    residence:new FormControl(this.res,Validators.required)
  })
  
}
  add(){
this.residenceservice.addapartment(this.addform.value).subscribe(()=>{
  console.log("added")
  this.route.navigate(['/appartment'])
})
  }

}
