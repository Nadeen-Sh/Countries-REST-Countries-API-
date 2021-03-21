import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map}from "rxjs/operators"

import {Country} from '../CountryApi';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http:HttpClient) { }


  getCountryDetails(name:string){
   
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${name}`)

    .pipe(map(([response])=>response))
  }
  


  getContriesNameByCode(codes:string[]){
   
   return this.http.get<Country[]>( `https://restcountries.eu/rest/v2/alpha?codes=${codes.join(';')}`)

  }
}