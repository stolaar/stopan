import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Vendor } from './vendor.model'
import { Model } from 'mongoose'
import { CreateVendorDto } from './vendor.dto'

@Injectable()
export class VendorsService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  async createVendor(payload: CreateVendorDto) {
    await this.vendorModel.create(payload)
  }

  searchVendors(search: string) {
    return this.vendorModel.find({
      name: {
        $regex: search,
        $options: 'i',
      },
    })
  }
}
