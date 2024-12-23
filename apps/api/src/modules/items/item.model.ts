import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Document } from 'mongoose'

export type ItemDocument = HydratedDocument<Item>

@Schema({ autoCreate: true, autoIndex: true })
export class Item extends Document {
  @Prop()
  title: string

  @Prop()
  image?: number

  @Prop()
  type: string
}

export const ItemSchema = SchemaFactory.createForClass(Item)
