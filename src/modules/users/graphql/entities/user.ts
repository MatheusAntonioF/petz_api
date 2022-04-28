import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Pet } from 'src/modules/pets/graphql/entities/pet';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Pet])
  pets?: Pet[];

  @Field()
  tokenAuth0?: string | null;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
