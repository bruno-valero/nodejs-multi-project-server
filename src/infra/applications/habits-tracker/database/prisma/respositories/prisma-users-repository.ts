import { UsersRepository } from '@/domain/core-domains/habits-tracker/application/repositories/users-reposiory'
import { User } from '@/domain/core-domains/habits-tracker/enterprise/entities/user'

import { PrismaHabitsTracker } from '..'
import { PrismaUserMapper } from '../mappers/prisma-users-mapper'

export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaHabitsTracker) {}

  items: User[] = []

  async create(user: User): Promise<void> {
    await this.prisma.prismaUser.create({
      data: PrismaUserMapper.domainToPrisma(user),
    })
  }

  async findById(id: string): Promise<User | null> {
    const prismaUser = await this.prisma.prismaUser.findUnique({
      where: {
        id,
      },
    })
    if (!prismaUser) return null

    const mappedUsers = PrismaUserMapper.toDomain(prismaUser)

    return mappedUsers
  }

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await this.prisma.prismaUser.findUnique({
      where: {
        email,
      },
    })
    if (!prismaUser) return null

    const mappedUsers = PrismaUserMapper.toDomain(prismaUser)

    return mappedUsers
  }

  async update(user: User): Promise<void> {
    await this.prisma.prismaUser.update({
      where: {
        id: user.id.value,
      },
      data: PrismaUserMapper.domainToPrisma(user),
    })
  }

  async delete(user: User): Promise<void> {
    await this.prisma.prismaUser.delete({
      where: {
        id: user.id.value,
      },
    })
  }
}
