import {
  AfterViewChecked,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { AfterContentChecked, AfterContentInit } from "@angular/core";
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input("srvElement") element: { type: string; name: string; content: string };

  @Input() name: string;

  @ViewChild("heading") headerElement: ElementRef<HTMLHeadingElement>;

  constructor() {
    console.log("constructor called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");

    console.log(
      "😈 Header Element: " + this.headerElement.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");

    console.log(
      "😈 Header Element: " + this.headerElement.nativeElement.textContent
    );
  }
}
