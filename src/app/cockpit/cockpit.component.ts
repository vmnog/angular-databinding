import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(
    serverNameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value,
    });
  }

  onAddBlueprint(
    serverNameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    this.blueprintCreated.emit({
      bluePrintName: serverNameInput.value,
      bluePrintContent: serverContentInput.value,
    });
  }
}
