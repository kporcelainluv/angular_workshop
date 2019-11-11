import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  templateUrl: "./input-button-unit.component.html",
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  constructor() {
    this.changeTitle("My First Angular App");
  }

  ngOnInit() {}
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
