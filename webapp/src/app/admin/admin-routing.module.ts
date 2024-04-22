import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AdminComponent} from "./admin.component";
import {SideBarComponent} from "./side-bar/side-bar.component";


const routes: Routes = [
  { path: "admin", component: AdminComponent,
  Children:[
    {path:"",}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
