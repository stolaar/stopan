import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Tag, TagsSchema } from './tag.model'
import { TagsController } from './tags.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tag.name, schema: TagsSchema, collection: 'Tags' },
    ]),
  ],
  controllers: [TagsController],
})
export class TagsModule {}
