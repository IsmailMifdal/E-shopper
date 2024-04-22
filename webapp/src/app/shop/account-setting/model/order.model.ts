import {OrderProduct} from "./order-product.model";


export interface Order {
  listOfOrderProduct: OrderProduct[];
  id: string,
  userId: string,
  shippingAddressLine1: string,
  shippingAddressLine2: string,
  shippingCity: string,
  shippingState: string,
  shippingPostalCode: string,
  total: number,
  orderStatus: string,
  orderDate: string,
}
