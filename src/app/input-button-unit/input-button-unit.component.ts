import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  templateUrl: "./input-button-unit.component.html",
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  heading = "Beautiful day";
  constructor() {}

  ngOnInit() {
    let inputElement = document.getElementById("my-input");
    inputElement.value = this.heading;
  }
}
