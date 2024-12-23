import { PipeTransform, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'

export class ValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value)
      return parsedValue
    } catch (error) {
      throw new BadRequestException('Validation failed', {
        cause: error,
        // eslint-disable-next-line
        description: ((error as any)?.issues as string) ?? '',
      })
    }
  }
}
