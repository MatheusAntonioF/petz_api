import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { PetsResolver } from './graphql/resolvers/pets.resolver';
import { CreatePetUseCase } from './useCases/create-pet.use-case';
import { GetPetByIdUseCase } from './useCases/get-pet-by-id.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [PetsResolver, GetPetByIdUseCase, CreatePetUseCase],
})
export class PetsModule {}
