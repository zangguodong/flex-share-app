import { Component, OnInit } from "@angular/core";
import { CodepanelComponent } from "../codepanel/codepanel.component";

enum PROP_CONTENT_TYPE {
  FlexItemWidth = "item宽度计算",
  ALIGN_SELF = "align-self覆盖",
  MARGIN = "margin用法",
  ZINDEX = "z-index效果",
  FlexFlow = "决定排列方向的属性flex-flow",
  FLEX = "flex属性"
}
@Component({
  selector: "app-props-demo",
  templateUrl: "./props-demo.component.html",
  styleUrls: ["./props-demo.component.scss"]
})
export class PropsDemoComponent implements OnInit {
  PROP_CONTENT_TYPE = PROP_CONTENT_TYPE;
  selectProp = PROP_CONTENT_TYPE.ALIGN_SELF;
  constructor(private codePanel: CodepanelComponent) {
    this.changeProp(this.selectProp);
  }
  changeProp(type) {
    switch (type) {
      case PROP_CONTENT_TYPE.ALIGN_SELF: {
        this.codePanel
          .sendCode(`<div style="display: flex;align-items: flex-end">
  <span>content</span>
  <span style="align-self: stretch">
    content stretch
  </span>
</div>`);
        break;
      }
      case PROP_CONTENT_TYPE.MARGIN: {
        this.codePanel
          .sendCode(`<div style="flex-direction: column;display: flex">
  <span>initial</span>
  <span style="margin-left:auto">margin-left:auto</span>
  <span style="margin:auto">margin:auto</span>
  <span style="margin:auto;">margin:auto;</span>
  <span style="align-self:center;">align-self:center;</span>
</div>

<div style="display: flex">
  <span></span>
  <span></span>
  <span style="margin-left: auto;margin-right: 10px;"></span>
</div>
`);
        break;
      }
      case PROP_CONTENT_TYPE.ZINDEX: {
        this.codePanel.sendCode(`<div style="display: flex">
  <span style="z-index: 1;">z index is 1</span>
  <span style="z-index: 0;position: relative;left: -20px">z index 0</span>
</div>

<div style="height: 80px;">
  <div style="z-index: 1;display: inline-block;">
    z index is 1
  </div>
  <div style="z-index: 0;display: inline-block;position: relative;left: -20px">
    z index 0
  </div>
</div>

<div style="z-index: 5;position: relative;background: red">
  content bottom
  <div style="z-index: -1;position: relative;left: -20px;background: green">
    overlap it
  </div>
</div>`);
        break;
      }
      case PROP_CONTENT_TYPE.FlexFlow: {
        this.codePanel
          .sendCode(`<div style="flex-flow: column wrap;height: 80px;display: flex">
  <span>test1</span>
  <span>test2</span>
  <span>test3</span>
  <span>test4</span>
  <span>test5</span>
</div>

<div style="flex-flow: column wrap-reverse;height: 80px;display: flex;">
  <span>test1</span>
  <span>test2</span>
  <span>test3</span>
  <span>test4</span>
  <span>test5</span>
</div>

<div style="flex-flow: column wrap-reverse;height: 80px;
display: flex;align-content: space-between;">
  <span>test1</span>
  <span>test2</span>
  <span>test3</span>
  <span>test4</span>
  <span>test5</span>
</div>`);
        break;
      }
      case PROP_CONTENT_TYPE.FLEX: {
        this.codePanel.sendCode(`<div style="display: flex">
  <span>content1</span>
  <span>content2</span>
</div>

<div style="display: flex">
  <span style="flex:1;">content1</span>
  <span>content2</span>
</div>

<div style="display: flex">
  <span style="flex:1;">content1</span>
  <span style="flex:1;">content2</span>
</div>

<div style="display: flex">
  <span style="flex:1;width: 100px">content1</span>
  <span style="flex:1;width: 300px">
  content2
  </span>
</div>

<div style="display: flex">
  <span style="flex:1;width: 200px">content1</span>
  <span style="flex:1;width: 800px">
  content2
  </span>
</div>

<div style="display: flex">
  <span style="flex:1 0 200px;">content1</span>
  <span style="flex:1 0 0;">content2</span>
</div>

<div style="display: flex">
  <span style="flex:0 1 400px;">content1</span>
  <span style="flex:0 2 600px;">content2</span>
</div>
`);
        break;
      }
      case PROP_CONTENT_TYPE.FlexItemWidth: {
        this.codePanel.sendCode(`1.A
<div fxLayout>
  <div style="flex-basis: 400px"></div>
</div>

1.B
<div style="flex-basis: content;width: 100px;height: 400px">
  <div style="padding-bottom: 30%;"></div>
</div>

1.C
<div fxLayout>
  <div style="flex-basis: 30%"></div>
</div>
`);
      }
    }
  }
  ngOnInit() {}
}
