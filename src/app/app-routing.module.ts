import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ROUTE_CONFIG } from "./route.config";
import { FxlayoutComponent } from "./fxlayout/fxlayout.component";

const routes: Routes = ROUTE_CONFIG;

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes,
      {
        pathMatch: "full",
        path: "fxlayout",
        component: FxlayoutComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
