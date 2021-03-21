
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {routingTable} from "./routes";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/subComponents/country-card/country-card.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { NavbarComponent } from './components/subComponents/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SelectRegionFilterComponent} from "./components/subComponents/select-region-filter/select-region-filter.component";
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CountryDetailsComponent,
    CountryCardComponent,
    SelectRegionFilterComponent,
    NotFoundPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterTestingModule ,
    RouterModule.forRoot(routingTable)
  
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]

})
export class AppModule { }
