import { Component, OnInit } from "@angular/core";
import { CodepanelComponent } from "../codepanel/codepanel.component";

@Component({
  selector: "app-bfc",
  templateUrl: "./bfc.component.html",
  styleUrls: ["./bfc.component.scss"]
})
export class BfcComponent implements OnInit {
  constructor(private codePanel: CodepanelComponent) {
    this.codePanel.sendCode(`<div style="margin-bottom: 10px">
  第一行
</div>
<div style="margin-bottom: 20px;margin-top: 20px">
  第二行
</div>
<div style="margin-bottom: 20px;">
  <div style="margin-top: 30px">
    第三行，与上面的margin为30px
  </div>
</div>
<div style="overflow: hidden">
  <div style="margin-top: 30px">
    第四行，与上面的margin为50px
  </div>
</div>

<div
  fxLayout="row"
  fxLayoutAlign="space-between start"
>
  <div style="display: flow-root">
    <div style="margin-bottom: 10px">bottom: 10px</div>
    <div style="margin-top: 10px">top: 10px</div>
  </div>
  <div style="display: flow-root">
    <div style="margin-bottom: 10px">bottom: 10px</div>
    <div style="margin-top: -5px">top: -5px</div>
  </div>
  <div style="display: flow-root">
    <div style="margin-bottom: 10px">bottom: 10px</div>
    <div style="margin-top: -10px">top: -10px</div>
  </div>
  <div style="display: flow-root">
    <div style="margin-top: 10px">
      <div style="margin-top: -10px">inner-top: -10px</div>
    </div>
    <div>next line</div>
  </div>
</div>
`);
  }

  ngOnInit() {}
}
