import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserUseCase } from '../../useCases/create-user.use-case';
import { GetUserByIdUseCase } from '../../useCases/get-user-by-id.use-case';
import { User } from '../entities/user';
import { CreateUserInput } from '../inputs/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private getUserByIdUseCase: GetUserByIdUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}

  @Query(() => User)
  async getUserById(@Args('id') id: string) {
    return this.getUserByIdUseCase.execute(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.createUserUseCase.execute(data);
  }
}
