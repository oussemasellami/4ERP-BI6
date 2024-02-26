import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit  {
f!:FormGroup
ngOnInit(): void {
  
  this.f=new FormGroup({
    name:new FormControl('',Validators.required),
    address:new FormControl('',[Validators.required,Validators.minLength(3)])
  })
}
  
get name(){return this.f.get('name')}
get address(){return this.f.get('address')}
add(){
  console.log(this.f.value)
}

}
