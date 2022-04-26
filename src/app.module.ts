import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [DatabaseModule, HttpModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
