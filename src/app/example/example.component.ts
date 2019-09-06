import { Component, OnInit } from "@angular/core";
import { CodepanelComponent } from "../codepanel/codepanel.component";
enum EXAMPLE_CONTENT_TYPE {
  PROBLEM = "flex中空格问题",
  EXAMPLE = "Flex多列布局"
}
@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.scss"]
})
export class ExampleComponent implements OnInit {
  EXAMPLE_CONTENT_TYPE = EXAMPLE_CONTENT_TYPE;
  selectExample = EXAMPLE_CONTENT_TYPE.PROBLEM;
  showHint = false;
  constructor(private codePanel: CodepanelComponent) {
    this.changeType(this.selectExample);
  }
  changeType(type: EXAMPLE_CONTENT_TYPE) {
    switch (type) {
      case EXAMPLE_CONTENT_TYPE.EXAMPLE: {
        this.codePanel.sendCode(`<div style="display:flex;flex-wrap: wrap">
  <span style="flex: 0 0 50%;">
    some content1
  </span>
  <span style="flex: 0 0 50%;">
    some content2
  </span>
  <span style="flex: 0 0 50%;">
    some content3 i am very very long, i am very very long
  </span>
</div>

<div style="display:flex;flex-wrap: wrap;">
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content1
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content2
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content3
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content4
  </span>
</div>
  some other content

<div style="display:flex;flex-wrap: wrap;margin-bottom:-20px;">
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content1
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content2
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content3
  </span>
  <span style="flex: 0 0 50%;margin-bottom: 20px">
    some content4
  </span>
</div>
  some other content

<div style="display:flex;flex-wrap: wrap;margin-bottom:-20px;">
</div>
  some other content

<div style="overflow:hidden;">
  <div style="display:flex;flex-wrap: wrap;margin-bottom:-20px;">
    <span style="flex: 0 0 50%;">some content1</span>
    <span style="flex: 0 0 50%;">some content2</span>
    <span style="flex: 0 0 50%;">some content3</span>
    <span style="flex: 0 0 50%;">some content4</span>
  </div>
</div>
  some other content

<div style="display: flex">
  <div style="flex-wrap: wrap;height: unset;border:none;margin-bottom:-20px;">
  </div>
</div>
  some other content`);
        break;
      }

      case EXAMPLE_CONTENT_TYPE.PROBLEM: {
        this.codePanel.sendCode(`<div>
  <span>一些内容-></span>       按道理我前面一堆空白符号啊
</div>

<div style="display: flex">
  <span>一些内容-></span>    按道理有了white-space合并，前面有单个空格啊
</div>`);
        break;
      }
    }
  }
  show() {
    this.showHint = true;
  }
  ngOnInit() {}
}
