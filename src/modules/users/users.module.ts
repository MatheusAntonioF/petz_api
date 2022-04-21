import { Module } from '@nestjs/common';
import { UsersResolver } from './graphql/resolvers/users.resolver';

@Module({
  providers: [UsersResolver],
})
export class UsersModule {}
