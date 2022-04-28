import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from '../users/users.module';
import { PetsResolver } from './graphql/resolvers/pets.resolver';
import { CreatePetUseCase } from './useCases/create-pet.use-case';
import { GetPetByIdUseCase } from './useCases/get-pet-by-id.use-case';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UsersModule],
  providers: [PetsResolver, GetPetByIdUseCase, CreatePetUseCase],
})
export class PetsModule {}
