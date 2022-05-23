import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: BrandsComponent,
    children: [
      {
        path: 'maytag-repair-sacramento',
        component: MaytagRepairFresnoComponent,
      },
      {
        path: 'viking-repair-sacramento',
        component: VikingRepairFresnoComponent,
      },
      {
        path: 'kitchen-aid-repair-sacramento-ca',
        component: KitchenAidRepairFresnoCaComponent,
      },
      {
        path: 'whirlpool-repair-sacramento',
        component: WhirlpoolRepairFresnoComponent,
      },
      {
        path: 'jenn-air-repair-sacramento',
        component: JennAirRepairFresnoComponent,
      },
      {
        path: 'ge-repair-sacramento',
        component: GeRepairFresnoComponent,
      },
      {
        path: 'frigidaire-repair-sacramento',
        component: FrigidaireRepairFresnoComponent,
      },
      {
        path: 'kenmore-repair-sacramento-ca',
        component: KenmoreRepairFresnoCaComponent,
      },
      {
        path: 'sub-zero-repair-sacramento-ca',
        component: SubZeroRepairFresnoCaComponent,
      },
      {
        path: 'lg-repair-sacramento',
        component: LgRepairFresnoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule {
}
