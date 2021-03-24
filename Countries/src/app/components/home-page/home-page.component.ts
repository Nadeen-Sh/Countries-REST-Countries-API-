import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/CountryApi';
import { CountryApiService } from '../../srevices/country-api.service';
import { Observable } from 'rxjs';



const Allregions= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 componentName="Home"

   search?:Country[];
  searchFilter?:string;
  regionFilter?: string;
  AllOptions = Allregions;
 
  countries$?:Observable<Country[]>;
  
  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    //  this.countries$ = this.countryApiService.getAlCountries()
   this.countryApiService.getAlCountries()
     .subscribe((countries)=>{
      this.search=countries;
    
    })
  
  }
  
  get countries(){
    return this.search

    ?this.search.filter((country)=>
    this.searchFilter ? country.name.toLocaleLowerCase() 
    .includes(this.searchFilter.toLowerCase()) 
    || country.capital.toLocaleLowerCase() 
    .includes(this.searchFilter.toLowerCase())
    || country.nativeName.toLocaleLowerCase() 
    .includes(this.searchFilter.toLowerCase())
    : country)
      
    .filter((country)=>
    this.regionFilter
    ?country.region
    .includes(
      this.regionFilter
    )
    :country
    )
    :this.search
  }
}
























  