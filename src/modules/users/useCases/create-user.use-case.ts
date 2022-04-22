import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

import { CreateUserInput } from '../graphql/inputs/create-user.input';

import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async execute({ name, email, password }: CreateUserInput) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) throw new HttpException('User already exists', 401);

    const passwordHashed = await bcrypt.hash(password, 8);

    return this.prisma.user.create({
      data: { name, email, password: passwordHashed },
    });
  }
}
