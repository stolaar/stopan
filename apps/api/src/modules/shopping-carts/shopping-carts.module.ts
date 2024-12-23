import { Module } from '@nestjs/common'
import { ShoppingCartController } from './shopping-cars.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { CartItem, CartItemSchema } from './models/cart-item.model'
import { ShoppingCart, ShoppingCartSchema } from './models/shopping-cart.model'
import { ShoppingCartService } from './shopping-carts.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CartItem.name,
        schema: CartItemSchema,
      },
      {
        name: ShoppingCart.name,
        schema: ShoppingCartSchema,
      },
    ]),
  ],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
