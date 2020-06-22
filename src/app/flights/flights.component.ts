import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/services/data.service";
import { Itinerary } from '../models/itinerary';
import { Leg } from '../models/leg';

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.scss"],
})

export class FlightsComponent implements OnInit {
  public itineraries: Array<Itinerary> = [];
  public legs: Array<Leg> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFlights().subscribe((response) => {
      this.legs = response.legs;
      this.itineraries = response.itineraries.map((itinerary) => {
        itinerary.legs = this.legs.filter((leg) => itinerary.legs.includes(leg.id));
        return itinerary;
      });
    });
  }
}
