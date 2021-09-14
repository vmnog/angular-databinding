import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Server 1", content: "Server 1 Content" },
    // { type: "blueprint", name: "Server 2", content: "Server 2 Content" },
    // { type: "server", name: "Server 3", content: "Server 3 Content" },
  ];

  onChangeFirst() {
    this.serverElements[0].name = "Changed";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    bluePrintName: string;
    bluePrintContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent,
    });
  }
}
