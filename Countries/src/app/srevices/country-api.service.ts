import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Country} from '../CountryApi'


@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private http:HttpClient) { }
  
  getAlCountries(){
    return this.http.get<Country[]>("https://restcountries.eu/rest/v2/all")
  
  
}
}
