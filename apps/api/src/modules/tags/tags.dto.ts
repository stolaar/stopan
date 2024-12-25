import { z } from 'zod'

export const createTagSchema = z.object({
  name: z.string().min(3, {
    message: 'Please enter minimum 3 chars',
  }),
  color: z.string().default('blue'),
})

export type CreateTagDto = z.infer<typeof createTagSchema>
