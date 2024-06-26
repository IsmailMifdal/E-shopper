import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { PageNotFoundComponent } from "../core/component/page-not-found/page-not-found.component";
import { ShopComponent } from "./shop.component";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuard } from "../core/guard/auth.guard";
import { CheckoutCompleteComponent } from "./checkout/checkout-complete/checkout-complete.component";
import { BuyNowComponent } from "./checkout/buy-now/buy-now.component";
import { SearchResultComponent } from "./search/search-result/search-result.component";
import { PaginatorComponent } from "../core/component/paginator/paginator.component";

const routes: Routes = [
  { path: "test", component: PaginatorComponent },
  {
    path: "",
    component: ShopComponent,
    children: [
      { path: "", component: HomeComponent, data: { title: "Eshopper Home" }, pathMatch: "full" },
      { path: "product/:id", redirectTo: "product/:id/", pathMatch: "full" },
      { path: "product/:id/:title", component: ProductDetailComponent },
      { path: "cart", component: CartComponent, data: { title: "Eshopper Cart" } },
      { path: "checkout", component: CheckoutComponent, data: { title: "Eshopper Checkout" }, canActivate: [AuthGuard] },
      { path: "buy-now", component: BuyNowComponent, data: { title: "Eshopper Checkout" }, canActivate: [AuthGuard] },
      { path: "search", component: SearchResultComponent },
      {
        path: "checkout-complete/:id",
        component: CheckoutCompleteComponent,
        data: { title: "Eshopper Order Complete" },
        canActivate: [AuthGuard],
      },
      {
        path: "account",
        loadChildren: () => import("./account-setting/account-setting.module").then(m => m.AccountSettingModule),
        canActivate: [AuthGuard],
      },
      { path: "**", component: PageNotFoundComponent, data: { title: "Eshopper 404 Not Found" } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {
}
