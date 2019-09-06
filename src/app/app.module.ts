import { BrowserModule } from "@angular/platform-browser";
import { InjectionToken, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavSiderComponent } from "./nav-sider/nav-sider.component";
import { WorkpanelComponent } from "./workpanel/workpanel.component";
import { ROUTE_CONFIG } from "./route.config";
import { IfcComponent } from "./ifc/ifc.component";
import { BfcComponent } from "./bfc/bfc.component";
import { PropsDemoComponent } from "./props-demo/props-demo.component";
import { ExampleComponent } from "./example/example.component";
import { FormsModule } from "@angular/forms";
import { CodepanelComponent } from "./codepanel/codepanel.component";
import { FxlayoutComponent } from "./fxlayout/fxlayout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
export const ROUTE_CONFIG_TOKEN = new InjectionToken("ROUTE_CONFIG_TOKEN");

@NgModule({
  declarations: [
    AppComponent,
    NavSiderComponent,
    WorkpanelComponent,
    IfcComponent,
    BfcComponent,
    PropsDemoComponent,
    ExampleComponent,
    CodepanelComponent,
    FxlayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule],
  providers: [
    { provide: ROUTE_CONFIG_TOKEN, useValue: ROUTE_CONFIG },
    CodepanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
