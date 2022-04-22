import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

@Injectable()
export class GetPetByIdUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const foundPet = await this.prisma.pet.findUnique({
      where: { id },
    });

    if (!foundPet) throw new HttpException('Pet not found', 401);

    return foundPet;
  }
}
