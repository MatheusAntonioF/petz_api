import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

@Injectable()
export class GetUserByAuth0TokenUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(tokenAuth0: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        tokenAuth0,
      },
    });

    if (!foundUser) throw new HttpException('User not found', 401);

    return foundUser;
  }
}
