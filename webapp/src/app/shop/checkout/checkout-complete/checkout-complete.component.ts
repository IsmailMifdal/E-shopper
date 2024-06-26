import { AfterViewInit, Component, OnInit } from "@angular/core";
import { OrderService } from "../../account-setting/repository/order/order.service";
import { Observable } from "rxjs";
import { Order } from "../../account-setting/model/order.model";
import { ActivatedRoute } from "@angular/router";
import { UnsubscribeComponent } from "../../../core/component/unsubscribe/unsubscribe.component";
import { OrderProduct } from "../../account-setting/model/order-product.model";

@Component({
    selector: "app-checkout-complete",
    templateUrl: "./checkout-complete.component.html",
    styleUrls: ["./checkout-complete.component.scss"],
})
export class CheckoutCompleteComponent extends UnsubscribeComponent implements OnInit, AfterViewInit {

    order$!: Observable<Order>;

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute,
    ) {
        super();
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get("id");
            if (id) {
                this.order$ = this.orderService.getOrder(id);
            }
        });
    }

    ngAfterViewInit(): void {
    }
}
