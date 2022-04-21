import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../entities/user';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  async user() {
    return {
      id: '1',
      name: 'John Doe',
      email: '',
    };
  }
}
