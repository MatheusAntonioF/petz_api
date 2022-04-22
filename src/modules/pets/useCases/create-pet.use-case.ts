import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';
import { CreatePetInput } from '../graphql/inputs/create-pet.input';

@Injectable()
export class CreatePetUseCase {
  constructor(private prisma: PrismaService) {}

  async execute({ name, description, photo }: CreatePetInput) {
    return this.prisma.pet.create({
      data: {
        name,
        description,
        photo,
        userId: '67a1ed23-b58c-4100-9c89-9a786f5df236',
      },
    });
  }
}
