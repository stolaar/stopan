import { Item, ItemSchema } from '@/modules/items/item.model'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema()
export class CartItem extends mongoose.Document {
  @Prop({ type: [ItemSchema] })
  item: Item

  @Prop()
  quantity: number

  @Prop()
  price: number

  @Prop()
  vendor: string

  @Prop()
  note: string
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem)
