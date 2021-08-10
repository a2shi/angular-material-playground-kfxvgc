import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-demo-one",
  templateUrl: "./demo-one.component.html",
  styleUrls: ["./demo-one.component.scss"]
})
export class DemoOneComponent implements OnInit {
  items = [{ name: "name1", value: "value1" }];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  onAddItem() {
    this.items.push({ name: "new-item", value: "new-value" });
    this.cd.detectChanges();
  }
}
