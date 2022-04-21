import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/services/prisma.service';

import { CreateUserInput } from '../graphql/inputs/create-user.input';

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async execute({ name, email, password }: CreateUserInput) {
    return this.prisma.user.create({ data: { name, email, password } });
  }
}
