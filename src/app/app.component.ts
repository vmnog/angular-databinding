import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Server 1", content: "Server 1 Content" },
    { type: "server", name: "Server 2", content: "Server 2 Content" },
    { type: "server", name: "Server 3", content: "Server 3 Content" },
  ];
}
