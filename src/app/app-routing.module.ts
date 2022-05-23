import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ServiceAreaComponent} from "./pages/service-area/service-area.component";
import {ScheduleServiceComponent} from "./pages/schedule-service/schedule-service.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {ApplianceTechnicianJobComponent} from "./pages/appliance-technician-job/appliance-technician-job.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'service-area',
    component: ServiceAreaComponent,
  },
  {
    path: 'schedule-service',
    component: ScheduleServiceComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'appliance-technician-job',
    component: ApplianceTechnicianJobComponent,
  },

  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
  },

  {
    path: 'brands',
    loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
