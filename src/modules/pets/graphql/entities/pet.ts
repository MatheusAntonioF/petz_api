import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/modules/users/graphql/entities/user';

@ObjectType()
export class Pet {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  photo: string;
}
