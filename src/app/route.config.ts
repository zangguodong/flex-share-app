import { IfcComponent } from "./ifc/ifc.component";
import { BfcComponent } from "./bfc/bfc.component";
import { PropsDemoComponent } from "./props-demo/props-demo.component";
import { ExampleComponent } from "./example/example.component";
import { Route } from "@angular/router";
import {FxlayoutComponent} from './fxlayout/fxlayout.component';

export interface RouteItem extends Route {
  nav_name: string;
}
export const ROUTE_CONFIG: RouteItem[] = [
  {
    nav_name: "IFC",
    path: "ifc",
    pathMatch: "full",
    component: IfcComponent
  },
  {
    nav_name: "BFC",
    path: "bfc",
    pathMatch: "full",
    component: BfcComponent
  },
  {
    nav_name: "Flex属性",
    path: "properties",
    component: PropsDemoComponent
  },
  {
    nav_name: "Flex案例",
    path: "example",
    pathMatch: "full",
    component: ExampleComponent
  },
  {
    nav_name: "flex-layout介绍",
    path: "fxlayout",
    pathMatch: "full",
    component: FxlayoutComponent
  }
];
