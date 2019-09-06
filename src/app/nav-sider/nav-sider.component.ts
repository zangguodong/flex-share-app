import { Component, Inject, OnInit } from "@angular/core";
import { ROUTE_CONFIG_TOKEN } from "../app.module";
import { ROUTE_CONFIG, RouteItem } from "../route.config";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-nav-sider",
  templateUrl: "./nav-sider.component.html",
  styleUrls: ["./nav-sider.component.scss"]
})
export class NavSiderComponent implements OnInit {
  routeConfig = ROUTE_CONFIG;
  // constructor(
  //   @Inject(ROUTE_CONFIG_TOKEN) public routeConfig: Record<string, RouteItem>[]
  // ) {
  //   console.log("get ", this.routeConfig);
  // }

  ngOnInit() {}
}
