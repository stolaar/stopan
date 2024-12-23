import { z } from 'zod'
import { createItemSchema } from '../items/items.dto'

const createCartItemItemSchema = createItemSchema.extend({
  _id: z.string().min(1),
})

export const createCartItemsSchema = z.object({
  item: createCartItemItemSchema,
  price: z.number(),
  quantity: z.number(),
  vendor: z.string(),
  note: z.string(),
})

export const createShoppingCartSchema = z.object({
  title: z.string(),
  items: z.array(createCartItemsSchema),
})

export const updateShoppingCartItemSchema = createCartItemsSchema
  .omit({
    item: true,
  })
  .partial()
  .extend({
    _id: z.string().min(1),
  })

export type CreateShoppingCartDto = z.infer<typeof createShoppingCartSchema>
export type UpdateShoppingCartItemDto = z.infer<
  typeof updateShoppingCartItemSchema
>
export type CreateCartItemsDto = z.infer<typeof createCartItemsSchema>
