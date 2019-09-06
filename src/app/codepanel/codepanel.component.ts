import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, race } from "rxjs";
import { switchMap, takeUntil, tap } from "rxjs/operators";
@Component({
  selector: "app-codepanel",
  templateUrl: "./codepanel.component.html",
  styleUrls: ["./codepanel.component.scss"]
})
export class CodepanelComponent implements OnInit {
  @ViewChild("dragBar", { static: true })
  barComp: ElementRef;
  @ViewChild("codePanel", { static: true })
  codePanel: ElementRef;
  active = "";
  rawWidth = null;
  rawLeft = null;
  private parentElement = null;
  public sendCode(code: string) {
    document.getElementById("code").innerText = code;
  }

  ngOnInit() {
    fromEvent(this.barComp.nativeElement, "mousedown")
      .pipe(
        tap((ev: MouseEvent) => {
          this.parentElement = this.codePanel.nativeElement;
          this.rawWidth = this.parentElement.offsetWidth;
          this.rawLeft = this.parentElement.offsetLeft;
        }),
        switchMap(() =>
          fromEvent(window, "mousemove").pipe(
            tap((ev: MouseEvent) => {
              this.active = "active";
              const currWidth = this.rawWidth + this.rawLeft - ev.clientX - 32;
              this.parentElement.style.width = currWidth + "px";
            }),
            takeUntil(
              race(
                fromEvent(window, "mouseup").pipe(
                  tap(() => {
                    this.active = "";
                  })
                )
              )
            )
          )
        )
      )
      .subscribe(_ => _);
  }
}
