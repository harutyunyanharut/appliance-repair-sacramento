import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import {WasherInstallationFresnoComponent} from "./washer-installation-sacramento/washer-installation-sacramento.component";
import {WasherRepairFresnoComponent} from "./washer-repair-sacramento/washer-repair-sacramento.component";
import {RefrigeratorRepairFresnoComponent} from "./refrigerator-repair-sacramento/refrigerator-repair-sacramento.component";
import {FreezerRepairFresnoComponent} from "./freezer-repair-sacramento/freezer-repair-sacramento.component";
import {DishwasherRepairFresnoComponent} from "./dishwasher-repair-sacramento/dishwasher-repair-sacramento.component";
import {OvenRepairFresnoComponent} from "./oven-repair-sacramento/oven-repair-sacramento.component";
import {MicrowaveRepairFresnoComponent} from "./microwave-repair-sacramento/microwave-repair-sacramento.component";
import {RangeHoodInstallationComponent} from "./range-hood-installation/range-hood-installation.component";
import {DryerRepairFresnoComponent} from "./dryer-repair-sacramento/dryer-repair-sacramento.component";
import {WasherDryerRepairFresnoComponent} from "./washer-dryer-repair-sacramento/washer-dryer-repair-sacramento.component";
import {StoveRepairFresnoComponent} from "./stove-repair-sacramento/stove-repair-sacramento.component";
import {FresnoWineCoolerRepairComponent} from "./sacramento-wine-cooler-repair/sacramento-wine-cooler-repair.component";
import {IceMakerRepairFresnoComponent} from "./ice-maker-repair-sacramento/ice-maker-repair-sacramento.component";
import {ApplianceTechnicianJobComponent} from "../appliance-technician-job/appliance-technician-job.component";

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      //services
      {
        path: 'washer-installation-sacramento',
        component: WasherInstallationFresnoComponent,
      },
      {
        path: 'washer-repair-sacramento',
        component: WasherRepairFresnoComponent,
      },
      {
        path: 'refrigerator-repair-sacramento',
        component: RefrigeratorRepairFresnoComponent,
      },
      {
        path: 'freezer-repair-sacramento',
        component: FreezerRepairFresnoComponent,
      },
      {
        path: 'dishwasher-repair-sacramento',
        component: DishwasherRepairFresnoComponent,
      },
      {
        path: 'oven-repair-sacramento',
        component: OvenRepairFresnoComponent,
      },
      {
        path: 'microwave-repair-sacramento',
        component: MicrowaveRepairFresnoComponent,
      },
      {
        path: 'range-hood-installation',
        component: RangeHoodInstallationComponent,
      },
      {
        path: 'dryer-repair-sacramento',
        component: DryerRepairFresnoComponent,
      },
      {
        path: 'washer-dryer-repair-sacramento',
        component: WasherDryerRepairFresnoComponent,
      },
      {
        path: 'stove-repair-sacramento',
        component: StoveRepairFresnoComponent,
      },
      {
        path: 'wine-cooler-repair-sacramento',
        component: FresnoWineCoolerRepairComponent,
      },
      {
        path: 'ice-maker-repair-sacramento',
        component: IceMakerRepairFresnoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {
}
