import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { CreateUserUseCase } from './useCases/create-user.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [UsersResolver, CreateUserUseCase],
})
export class UsersModule {}
