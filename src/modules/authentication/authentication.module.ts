import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtGuard } from './infra/guards/jwt.guard';
import { JwtAuthenticateStrategy } from './infra/strategies/jwt-authenticate.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [JwtAuthenticateStrategy, JwtGuard],
  exports: [PassportModule, JwtGuard],
})
export class AuthenticationModule {}
