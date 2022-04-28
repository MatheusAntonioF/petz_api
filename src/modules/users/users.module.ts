import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { CreateUserUseCase } from './useCases/create-user.use-case';
import { GetPetsByUserIdUseCase } from './useCases/get-pets-by-user-id.use-case';
import { GetUserByAuth0TokenUseCase } from './useCases/get-user-by-auth0-token.use-case';
import { GetUserByIdUseCase } from './useCases/get-user-by-id.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersResolver,
    GetUserByIdUseCase,
    CreateUserUseCase,
    GetPetsByUserIdUseCase,
    GetUserByAuth0TokenUseCase,
  ],
  exports: [GetUserByAuth0TokenUseCase],
})
export class UsersModule {}
