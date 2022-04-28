import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  AuthUser,
  CurrentUser,
} from 'src/authentication/infra/decorators/current-user.decorator';
import { AuthorizationGuard } from 'src/authentication/infra/guards/authorization.guard';
import { GetUserByAuth0TokenUseCase } from 'src/modules/users/useCases/get-user-by-auth0-token.use-case';
import { CreatePetUseCase } from '../../useCases/create-pet.use-case';
import { GetPetByIdUseCase } from '../../useCases/get-pet-by-id.use-case';
import { Pet } from '../entities/pet';
import { CreatePetInput } from '../inputs/create-pet.input';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(
    private getPetByIdUseCase: GetPetByIdUseCase,
    private createPetUseCase: CreatePetUseCase,
    private getUserByAuth0TokenUseCase: GetUserByAuth0TokenUseCase,
  ) {}

  @Query(() => Pet)
  async getPetById(@Args('id') id: string) {
    return this.getPetByIdUseCase.execute(id);
  }

  @Mutation(() => Pet)
  @UseGuards(AuthorizationGuard)
  async createPet(
    @CurrentUser() user: AuthUser,
    @Args('data') { name, description, photo }: CreatePetInput,
  ) {
    const { id: loggedUserId } = await this.getUserByAuth0TokenUseCase.execute(
      user.sub,
    );

    return this.createPetUseCase.execute({
      name,
      description,
      photo,
      userId: loggedUserId,
    });
  }
}
