import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';
import { CreatePetInput } from '../graphql/inputs/create-pet.input';

interface IRequest extends CreatePetInput {
  userId: string;
}

@Injectable()
export class CreatePetUseCase {
  constructor(private prisma: PrismaService) {}

  async execute({ name, description, photo, userId }: IRequest) {
    return this.prisma.pet.create({
      data: {
        name,
        description,
        photo,
        userId,
      },
    });
  }
}
