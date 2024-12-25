import { z } from 'zod'

export const createVendorSchema = z.object({
  name: z.string().min(3, {
    message: 'Please enter minimum 3 chars',
  }),
  description: z.string(),
})

export type CreateVendorDto = z.infer<typeof createVendorSchema>
