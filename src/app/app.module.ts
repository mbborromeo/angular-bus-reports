import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; //NgModel lives here
=======
>>>>>>> 9f8a41545327575e06c0105e6b3960c212f7c549

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusOrganisationsComponent } from './busOrganisations/busOrganisations.component';
import { BusesComponent } from './buses/buses.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BusOrganisationsComponent,
    BusesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    */
<<<<<<< HEAD
    FormsModule,
=======
>>>>>>> 9f8a41545327575e06c0105e6b3960c212f7c549
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
