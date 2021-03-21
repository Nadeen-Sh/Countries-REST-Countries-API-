
import { Component, OnInit } from '@angular/core';
import { Country, Currency,Language,RegionalBloc } from '../../CountryApi';
import { Observable , of} from 'rxjs';
import {mergeMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import {CountryDetailsService} from "../../srevices/country-details.service"


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})

export class CountryDetailsComponent implements OnInit {
  country$?:Observable<Country>;

  borderCountries$?: Observable<Country[]>;

  constructor(private countryDetailsService: CountryDetailsService ,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.country$=this.countryDetailsService.getCountryDetails(params.country)
      .pipe(tap((response)=> 
      console.log(response)),

mergeMap((response)=>{
  this.borderCountries$=this.countryDetailsService.getContriesNameByCode(response.borders.slice(0,4))
  
  
  return of(response)
})


      )}
      )
  }

  getLanguage(language: Language[]){
    return language.map((language)=>language.name).join(' /')

 
  
}

    getCurrency(currency: Currency[]){
      return currency.map((currency)=>currency.name).join(' /')

   
    
  }
  getRegionalBloc(regional: RegionalBloc[]){
    return regional.map((regional)=>regional.name).join()

 
  
}
 

}