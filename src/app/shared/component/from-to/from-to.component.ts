import { Component, Input } from "@angular/core";

@Component({
  selector: "app-from-to",
  templateUrl: "./from-to.component.html",
  styleUrls: ["./from-to.component.scss"],
})
export class FromToComponent {
  @Input() leg: any = {};

  constructor() {}

  getDuration(mins) {
    let h: any = Math.floor(mins / 60);
    let m: any = mins % 60;
    m = m < 10 ? "0" + m : m;
    return `${h}h ${m}`;
  }
}
