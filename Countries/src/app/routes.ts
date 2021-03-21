
import {CountryDetailsComponent} from "./components/country-details/country-details.component"
import { HomePageComponent } from "./components/home-page/home-page.component"
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component"


export const routingTable=[
  
    {path:"", component:HomePageComponent},
    {path:":country", component:CountryDetailsComponent},
    {path:"***", component:NotFoundPageComponent},

]