import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MaterialModule } from './material.module';

// components

// dialogs

// modules

// plugins

// directives

// components
import { HeaderComponent } from './components/header/header.component';
import {CommonModule} from "@angular/common";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {FooterComponent} from "./components/footer/footer.component";
import {ServicesListComponent} from "./components/services-list/services-list.component";
import {CallScheduleComponent} from "./components/call-schedule/call-schedule.component";
import {ScheduleServiceComponent} from "./components/schedule-service/schedule-service.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    ServicesListComponent,
    CallScheduleComponent,
    ScheduleServiceComponent,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScheduleServiceComponent,
    CallScheduleComponent,
    ServicesListComponent,
  ]
})
export class SharedModule { }
