import { GetUserUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/user/get-user-use-case'

import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaUsersRepository } from '../../../database/prisma/respositories/prisma-users-repository'

export function makeGetUserUseCase() {
  const usersRepository = new PrismaUsersRepository(prismaHabitsTracker)

  const useCase = new GetUserUseCase(usersRepository)

  return useCase
}
