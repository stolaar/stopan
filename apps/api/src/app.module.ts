import { Module } from '@nestjs/common'
import { ConfigModule, ItemsModule, ShoppingCartModule } from './modules'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('mongoURI'),
      }),
    }),
    ItemsModule,
    ShoppingCartModule,
  ],
})
export class AppModule {}
