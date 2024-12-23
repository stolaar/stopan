import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { CartItem } from './cart-item.model'

@Schema()
export class ShoppingCart extends mongoose.Document {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }] })
  items: mongoose.Types.Array<CartItem>

  @Prop()
  totalPrice: number

  @Prop()
  note: string

  @Prop()
  price: string
}

export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart)
