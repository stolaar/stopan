import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ShoppingCart } from './models/shopping-cart.model'
import { Model } from 'mongoose'
import {
  CreateCartItemsDto,
  CreateShoppingCartDto,
  UpdateShoppingCartItemDto,
} from './shopping-carts.dto'
import { CartItem } from './models/cart-item.model'

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private shoppingCartModel: Model<ShoppingCart>,
    @InjectModel(CartItem.name)
    private cartItemModel: Model<CartItem>,
  ) {}

  findById(id: string) {
    return this.shoppingCartModel.findById(id)
  }

  createCartItems(cartItems: CreateCartItemsDto[]) {
    return this.cartItemModel.create(cartItems)
  }

  create(shoppingCart: CreateShoppingCartDto) {
    return this.shoppingCartModel.create(shoppingCart)
  }

  updateCartItem(cartItem: UpdateShoppingCartItemDto) {
    return this.cartItemModel.updateOne(cartItem)
  }
}
