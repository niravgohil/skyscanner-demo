import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightsComponent } from './flights.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/services/data.service';


@NgModule({
  declarations: [FlightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FlightsRoutingModule
  ],
  providers: [DataService]
})
export class FlightsModule { }
