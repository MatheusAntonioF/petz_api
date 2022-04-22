import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  async getPetById(@Args('id') id: string) {
    return this.getPetByIdUseCase.execute(id);
  }

  @Mutation(() => Pet)
  async createPet(@Args('data') { name, description, photo }: CreatePetInput) {
    return this.createPetUseCase.execute({ name, description, photo });
  }
}
