import { Component, OnInit } from "@angular/core";
import { CodepanelComponent } from "../codepanel/codepanel.component";
import { MediaObserver } from "@angular/flex-layout";

@Component({
  selector: "app-fxlayout",
  templateUrl: "./fxlayout.component.html",
  styleUrls: ["./fxlayout.component.scss"]
})
export class FxlayoutComponent implements OnInit {
  constructor(
    private codeComponent: CodepanelComponent,
    public mediaObserver: MediaObserver
  ) {
    mediaObserver.media$.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit() {
    this.codeComponent.sendCode(`fxLayout
<div fxLayout="row wrap">
  <div fxFlex="50%">item1</div>
  <div fxFlex="50%">item2</div>
  <div fxFlex="50%">item3</div>
</div>

fxLayoutGap
<div fxLayout="column" fxLayoutGap="calc(10px)">
  <div>item1</div>
  <div>item2</div>
</div>

fxLayoutAlign
<div fxLayout fxLayoutAlign="space-around center">
  <div>item1</div>
  <div>item2</div>
</div>

fxFlex
<div fxLayout>
  <div fxFlex>item0</div>
  <div fxFlex="0 1 100px">item1</div>
  <div fxFlex="1 0 100px">item2</div>
  <div fxFlex="1 1 0%">item3</div>
  <div fxFlex="1 1 100px">item4</div>
</div>
<div fxLayout>
  <div style="flex: 1 1 0;">item0</div>
  <div style="flex: 0 1 100px;">item1</div>
  <div style="flex: 1 0 100px;">item2</div>
  <div style="flex: 1 1 0;">item3</div>
  <div style="flex: 1 1 100px;">item4</div>
</div>

fxFlexOffset
<div fxLayout>
  <div fxFlexOffset="20px">item0</div>
  <div fxFlexOffset="20px">item1</div>
</div>

fxFlexAlign
<div fxLayout fxLayoutAlign="stretch">
  <div fxFlexAlign="center">item0</div>
</div>

fxFlexFill
<div fxLayout="row wrap">
  <div style="background: red" fxFlexFill>item0</div>
  <div style="background: green">item1</div>
</div>

自适应布局
<div fxLayout fxLayout.xs="column" fxLayoutGap="10px">
  <div [ngStyle.xs]="{ color: 'red' }">some text</div>
  <div [ngStyle.xs]="{ color: 'red' }">some text</div>
</div>
`);
  }
}
