import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!foundUser) throw new HttpException('User not found', 401);

    return foundUser;
  }
}
