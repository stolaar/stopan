import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Tag } from './tag.model'
import { Model } from 'mongoose'
import { ValidationPipe } from '@/pipes'
import { CreateTagDto, createTagSchema } from './tags.dto'

@Controller({ path: '/tags' })
export class TagsController {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  @Post()
  @UsePipes(new ValidationPipe(createTagSchema))
  async createTag(@Body() createTag: CreateTagDto) {
    await this.tagModel.create(createTag)
  }

  @Get('/:search')
  async searchTags(@Param('search') search: string) {
    return this.tagModel.find({
      name: {
        $regex: search,
      },
    })
  }
}
