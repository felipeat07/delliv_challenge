// user.service.ts

import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  async createUser(userData: any) {
    return prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
    });
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id: parseInt(id), // Certifique-se de converter para número, se necessário
      },
    });
  }
}
