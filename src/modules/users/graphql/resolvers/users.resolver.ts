import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserUseCase } from '../../useCases/create-user.use-case';
import { User } from '../entities/user';
import { CreateUserInput } from '../inputs/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Query(() => User)
  async user() {
    return {
      id: '1',
      name: 'John Doe',
      email: '',
      password: '',
    };
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.createUserUseCase.execute(data);
  }
}
