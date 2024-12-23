import { z } from 'zod'

export enum ItemTypeEnum {
  FOOD = 'food',
}

export const createItemSchema = z.object({
  title: z.string().min(3, {
    message: 'Please enter minimum 3 chars',
  }),
})

export type CreateItemDto = z.infer<typeof createItemSchema>
