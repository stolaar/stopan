import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Item, ItemSchema } from './item.model'
import { ItemsController } from './items.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Item.name, schema: ItemSchema, collection: 'Item' },
    ]),
  ],
  controllers: [ItemsController],
})
export class ItemsModule {}
