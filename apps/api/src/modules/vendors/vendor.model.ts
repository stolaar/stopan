import { BadRequestException } from '@nestjs/common'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {
  HydratedDocument,
  Document,
  CallbackWithoutResultAndOptionalError,
} from 'mongoose'

export type VendorDocument = HydratedDocument<Vendor>

@Schema({ autoCreate: true, autoIndex: true })
export class Vendor extends Document {
  @Prop({ unique: true })
  name: string

  @Prop()
  description: string
}

export const VendorSchema = SchemaFactory.createForClass(Vendor)

VendorSchema.post(
  'save',
  (
    error: NativeError,
    _: Document,
    next: CallbackWithoutResultAndOptionalError,
  ) => {
    if ('code' in error && error.code === 11000) {
      next(new BadRequestException('Vendor with this name exists'))
      return
    }
    next()
  },
)
