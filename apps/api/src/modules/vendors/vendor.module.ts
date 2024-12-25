import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Vendor, VendorSchema } from './vendor.model'
import { VendorController } from './vendor.controller'
import { VendorsService } from './vendor.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vendor.name, schema: VendorSchema, collection: 'Vendors' },
    ]),
  ],
  providers: [VendorsService],
  controllers: [VendorController],
})
export class VendorsModule {}
