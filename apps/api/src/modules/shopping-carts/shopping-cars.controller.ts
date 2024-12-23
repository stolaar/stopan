import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common'
import { ShoppingCartService } from './shopping-carts.service'
import {
  CreateShoppingCartDto,
  UpdateShoppingCartItemDto,
  createShoppingCartSchema,
  updateShoppingCartItemSchema,
} from './shopping-carts.dto'
import { ValidationPipe } from '@/pipes'

@Controller({ path: '/shopping-cart' })
export class ShoppingCartController {
  constructor(
    @Inject(ShoppingCartService) private service: ShoppingCartService,
  ) {}

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id)
  }

  @Post()
  @UsePipes(new ValidationPipe(createShoppingCartSchema))
  async createShoppingCart(@Body() payload: CreateShoppingCartDto) {
    const items = await this.service.createCartItems(payload.items)

    return this.service.create({ ...payload, items: items.map(({ id }) => id) })
  }

  @Put()
  @UsePipes(new ValidationPipe(updateShoppingCartItemSchema))
  async updateCartItem(@Body() payload: UpdateShoppingCartItemDto) {
    await this.service.updateCartItem(payload)
  }
}
