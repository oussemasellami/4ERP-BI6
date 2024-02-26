import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateappart',
  templateUrl: './updateappart.component.html',
  styleUrls: ['./updateappart.component.css']
})
export class UpdateappartComponent implements OnInit {
id!:number
  constructor(private activatedrouter:ActivatedRoute){}

  ngOnInit(): void {
    
    this.id=this.activatedrouter.snapshot.params['id']
    console.log(this.id)
  }

}
