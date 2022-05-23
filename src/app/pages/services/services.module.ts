import { NgModule } from '@angular/core';

// modules
import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from "../../shared/shared.module";

// components
import { ServicesComponent } from './services.component';
import {RefrigeratorRepairFresnoComponent} from "./refrigerator-repair-sacramento/refrigerator-repair-sacramento.component";
import {FreezerRepairFresnoComponent} from "./freezer-repair-sacramento/freezer-repair-sacramento.component";
import {WasherRepairFresnoComponent} from "./washer-repair-sacramento/washer-repair-sacramento.component";
import {WasherInstallationFresnoComponent} from "./washer-installation-sacramento/washer-installation-sacramento.component";
import {DishwasherRepairFresnoComponent} from "./dishwasher-repair-sacramento/dishwasher-repair-sacramento.component";
import {OvenRepairFresnoComponent} from "./oven-repair-sacramento/oven-repair-sacramento.component";
import {MicrowaveRepairFresnoComponent} from "./microwave-repair-sacramento/microwave-repair-sacramento.component";
import {RangeHoodInstallationComponent} from "./range-hood-installation/range-hood-installation.component";
import {DryerRepairFresnoComponent} from "./dryer-repair-sacramento/dryer-repair-sacramento.component";
import {WasherDryerRepairFresnoComponent} from "./washer-dryer-repair-sacramento/washer-dryer-repair-sacramento.component";
import {StoveRepairFresnoComponent} from "./stove-repair-sacramento/stove-repair-sacramento.component";
import {FresnoWineCoolerRepairComponent} from "./sacramento-wine-cooler-repair/sacramento-wine-cooler-repair.component";
import {IceMakerRepairFresnoComponent} from "./ice-maker-repair-sacramento/ice-maker-repair-sacramento.component";

@NgModule({
  declarations: [
    ServicesComponent,
    RefrigeratorRepairFresnoComponent,
    FreezerRepairFresnoComponent,
    WasherRepairFresnoComponent,
    WasherInstallationFresnoComponent,
    DishwasherRepairFresnoComponent,
    OvenRepairFresnoComponent,
    MicrowaveRepairFresnoComponent,
    RangeHoodInstallationComponent,
    DryerRepairFresnoComponent,
    WasherDryerRepairFresnoComponent,
    StoveRepairFresnoComponent,
    FresnoWineCoolerRepairComponent,
    IceMakerRepairFresnoComponent,
  ],
  imports: [
    ServicesRoutingModule,
    SharedModule,
  ],
  providers: [
  ]
})
export class ServicesModule {
}
