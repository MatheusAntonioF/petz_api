import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JwtGuard } from 'src/modules/authentication/infra/guards/jwt.guard';
import { Pet } from 'src/modules/pets/graphql/entities/pet';
import { CreateUserUseCase } from '../../useCases/create-user.use-case';
import { GetPetsByUserIdUseCase } from '../../useCases/get-pets-by-user-id.use-case';
import { GetUserByIdUseCase } from '../../useCases/get-user-by-id.use-case';
import { User } from '../entities/user';
import { CreateUserInput } from '../inputs/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private getUserByIdUseCase: GetUserByIdUseCase,
    private createUserUseCase: CreateUserUseCase,
    private getPetsByUserIdUseCase: GetPetsByUserIdUseCase,
  ) {}

  @Query(() => User)
  @UseGuards(JwtGuard)
  async getUserById(@Args('id') id: string) {
    return this.getUserByIdUseCase.execute(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.createUserUseCase.execute(data);
  }

  @ResolveField(() => [Pet])
  @UseGuards(JwtGuard)
  async pets(@Parent() user: User) {
    return this.getPetsByUserIdUseCase.execute(user.id);
  }
}
