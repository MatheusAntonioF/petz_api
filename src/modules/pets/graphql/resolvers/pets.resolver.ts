import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtGuard } from 'src/modules/authentication/infra/guards/jwt.guard';
import { CreatePetUseCase } from '../../useCases/create-pet.use-case';
import { GetPetByIdUseCase } from '../../useCases/get-pet-by-id.use-case';
import { Pet } from '../entities/pet';
import { CreatePetInput } from '../inputs/create-pet.input';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(
    private getPetByIdUseCase: GetPetByIdUseCase,
    private createPetUseCase: CreatePetUseCase,
  ) {}

  @Query(() => Pet)
  @UseGuards(JwtGuard)
  async getPetById(@Args('id') id: string) {
    return this.getPetByIdUseCase.execute(id);
  }

  @Mutation(() => Pet)
  @UseGuards(JwtGuard)
  async createPet(@Args('data') { name, description, photo }: CreatePetInput) {
    return this.createPetUseCase.execute({ name, description, photo });
  }
}
