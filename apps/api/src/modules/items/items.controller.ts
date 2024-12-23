import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Item } from './item.model'
import { Model } from 'mongoose'
import { ValidationPipe } from '@/pipes'
import { CreateItemDto, ItemTypeEnum, createItemSchema } from './items.dto'

@Controller({ path: '/items' })
export class ItemsController {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  @Post()
  @UsePipes(new ValidationPipe(createItemSchema))
  async createItem(@Body() createItem: CreateItemDto) {
    await this.itemModel.create({
      ...createItem,
      type: ItemTypeEnum.FOOD,
    })
  }
}
