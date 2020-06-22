import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlightsRoutes } from './flights.route';

@NgModule({
  imports: [RouterModule.forChild(FlightsRoutes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
