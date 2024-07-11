import { PrismaUser } from '@root/prisma/generated/habits-tracker'

import { User } from '@/domain/core-domains/habits-tracker/enterprise/entities/user'

export class PrismaUserMapper {
  static toDomain(user: PrismaUser): User {
    const newUser = User.create(
      {
        email: user.email,
        password: user.password_hash,
        createdAt: user.createdAt,
        updatedAt: user.createdAt,
      },
      user.id,
    )

    return newUser
  }

  static domainToPrisma(user: User): PrismaUser {
    const newUser: PrismaUser = {
      id: user.id.value,
      email: user.email,
      password_hash: user.password ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }

    return newUser
  }
}
