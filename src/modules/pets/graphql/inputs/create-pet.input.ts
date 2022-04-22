import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  photo: string;
}
