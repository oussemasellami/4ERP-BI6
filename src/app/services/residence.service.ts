//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/appartements';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
appartUrl='http://localhost:3000/appartement'
  constructor(private http:HttpClient) { }

getNumber(list:any,creteria:string,value:any){
  let n=0
  for(let i in list){
    if(list[i][creteria]==value){
      n++
    }
  }
return n
}

getappartment():Observable<Apartment[]>{
  return this.http.get<Apartment[]>(this.appartUrl)
}

addapartment(appart:Apartment):Observable<Apartment[]>{
  return this.http.post<Apartment[]>(this.appartUrl,appart)
}

deleteappart(id:number):Observable<Apartment[]>{
  return this.http.delete<Apartment[]>(this.appartUrl+'/'+id)
}

}
