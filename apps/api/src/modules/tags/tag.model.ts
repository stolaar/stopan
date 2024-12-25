import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Document } from 'mongoose'

export type TagsDocument = HydratedDocument<Tag>

@Schema({ autoCreate: true, autoIndex: true })
export class Tag extends Document {
  @Prop()
  name: string

  @Prop()
  color?: string
}

export const TagsSchema = SchemaFactory.createForClass(Tag)
