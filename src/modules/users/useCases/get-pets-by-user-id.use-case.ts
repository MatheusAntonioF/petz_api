import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

@Injectable()
export class GetPetsByUserIdUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const foundPets = await this.prisma.pet.findMany({
      where: {
        userId: id,
      },
    });

    return foundPets;
  }
}
