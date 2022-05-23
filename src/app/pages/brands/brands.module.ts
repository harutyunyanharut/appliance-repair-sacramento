import { NgModule } from '@angular/core';

// modules
import { BrandsRoutingModule } from './brands-routing.module';
import { SharedModule } from "../../shared/shared.module";

// components
import {BrandsComponent} from './brands.component';
import {MaytagRepairFresnoComponent} from "./maytag-repair-sacramento/maytag-repair-sacramento.component";
import {VikingRepairFresnoComponent} from "./viking-repair-sacramento/viking-repair-sacramento.component";
import {KitchenAidRepairFresnoCaComponent} from "./kitchen-aid-repair-sacramento-ca/kitchen-aid-repair-sacramento-ca.component";
import {WhirlpoolRepairFresnoComponent} from "./whirlpool-repair-sacramento/whirlpool-repair-sacramento.component";
import {JennAirRepairFresnoComponent} from "./jenn-air-repair-sacramento/jenn-air-repair-sacramento.component";
import {GeRepairFresnoComponent} from "./ge-repair-sacramento/ge-repair-sacramento.component";
import {FrigidaireRepairFresnoComponent} from "./frigidaire-repair-sacramento/frigidaire-repair-sacramento.component";
import {KenmoreRepairFresnoCaComponent} from "./kenmore-repair-sacramento-ca/kenmore-repair-sacramento-ca.component";
import {SubZeroRepairFresnoCaComponent} from "./sub-zero-repair-sacramento-ca/sub-zero-repair-sacramento-ca.component";
import {LgRepairFresnoComponent} from "./lg-repair-sacramento/lg-repair-sacramento.component";

@NgModule({
  declarations: [
    BrandsComponent,
    // brands pages
    MaytagRepairFresnoComponent,
    VikingRepairFresnoComponent,
    KitchenAidRepairFresnoCaComponent,
    WhirlpoolRepairFresnoComponent,
    JennAirRepairFresnoComponent,
    GeRepairFresnoComponent,
    FrigidaireRepairFresnoComponent,
    KenmoreRepairFresnoCaComponent,
    SubZeroRepairFresnoCaComponent,
    LgRepairFresnoComponent,
  ],
  imports: [
    BrandsRoutingModule,
    SharedModule,
  ],
  providers: [
  ]
})
export class BrandsModule {
}
