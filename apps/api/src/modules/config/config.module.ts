import { Module } from '@nestjs/common'
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config'
import { config } from '../../config'

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
