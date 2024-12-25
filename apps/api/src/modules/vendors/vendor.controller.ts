import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ValidationPipe } from '@/pipes'
import { CreateVendorDto, createVendorSchema } from './vendor.dto'
import { VendorsService } from './vendor.service'

@Controller({ path: '/vendors' })
export class VendorController {
  constructor(@Inject(VendorsService) private service: VendorsService) {}

  @Post()
  @UsePipes(new ValidationPipe(createVendorSchema))
  async createVendor(@Body() createVendor: CreateVendorDto) {
    await this.service.createVendor(createVendor)
  }

  @Get('/:search')
  async searchVendors(@Param('search') search: string) {
    return this.service.searchVendors(search)
  }
}
