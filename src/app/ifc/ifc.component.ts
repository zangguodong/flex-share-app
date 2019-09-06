import { Component, OnInit } from "@angular/core";
import { CodepanelComponent } from "../codepanel/codepanel.component";

export enum IFC_CONTENT_TYPE {
  INLINE_HEIGHT = "LINE BOX高度",
  WRAP = "折行",
  NO_CONTENT = "没有内容效果",
  IFC_WITH_BFC = "inline元素中放置块元素"
}

@Component({
  selector: "app-ifc",
  templateUrl: "./ifc.component.html",
  styleUrls: ["./ifc.component.scss"]
})
export class IfcComponent implements OnInit {
  selectIfc = IFC_CONTENT_TYPE.INLINE_HEIGHT;
  IFC_CONTENT_TYPE = IFC_CONTENT_TYPE;

  constructor(private codePanel: CodepanelComponent) {}

  changeIfc(content) {
    switch (content) {
      case IFC_CONTENT_TYPE.INLINE_HEIGHT: {
        this.codePanel.sendCode(`<div style="text-align: center;">
   <span style="line-height: 100px;">content1 变化我的vertical-align</span>
   <span>content2 初始值</span>
   <span style="vertical-align: bottom">content3 bottom</span>
</div>`);
        break;
      }
      case IFC_CONTENT_TYPE.WRAP: {
        this.codePanel.sendCode(`<div style="white-space: nowrap">
   我是一个超长的内容....
</div>
<div>
   我是一个超长的内容....
</div>`);
        break;
      }
      case IFC_CONTENT_TYPE.NO_CONTENT: {
        this.codePanel.sendCode(`<div style="line-height: 100px;">
  一些内容
</div>
<div style="line-height: 100px;">
  <span></span>
</div>`)
        break;
      }
      case IFC_CONTENT_TYPE.IFC_WITH_BFC: {
        this.codePanel.sendCode(`<div>
  <span>"一些内容"</span>
  <span>"其他内容，试试将我弄成inline-block"
     <div style="line-height: 50px;">"block元素的内容"</div>
  </span>
  <span>"一些内容"</span>
</div>`)
        break;
      }
    }
  }

  ngOnInit() {
    this.changeIfc(this.selectIfc);
  }
}
