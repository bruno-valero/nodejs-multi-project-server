import { RegisterJwtUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/user/register-jwt'

import { BcryptEncrypter } from '../../../auth/cryptography/bcrypt-encrypter'
import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaUsersRepository } from '../../../database/prisma/respositories/prisma-users-repository'

export function makeRegisterJwtUseCase() {
  const usersRepository = new PrismaUsersRepository(prismaHabitsTracker)
  const encrypter = new BcryptEncrypter()

  const useCase = new RegisterJwtUseCase(usersRepository, encrypter)

  return useCase
}
