import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import {ServiceAreaComponent} from "./pages/service-area/service-area.component";
import {ScheduleServiceComponent} from "./pages/schedule-service/schedule-service.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ApplianceTechnicianJobComponent} from "./pages/appliance-technician-job/appliance-technician-job.component";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleServiceComponent,
    ServiceAreaComponent,
    ContactUsComponent,
    NotFoundComponent,
    ApplianceTechnicianJobComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
