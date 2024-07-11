import { FastifyReply } from 'fastify'

import { AuthJwtUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/user/auth-jwt-use-case'

import { BcryptEncrypter } from '../../../auth/cryptography/bcrypt-encrypter'
import { FastifyJwtEncoder } from '../../../auth/cryptography/fastify-jwt-encoder'
import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaUsersRepository } from '../../../database/prisma/respositories/prisma-users-repository'

export function makeAuthJwtUseCase(res: FastifyReply) {
  const usersRepository = new PrismaUsersRepository(prismaHabitsTracker)
  const encrypter = new BcryptEncrypter()
  const encoder = new FastifyJwtEncoder(res)

  const useCase = new AuthJwtUseCase(usersRepository, encrypter, encoder)

  return useCase
}
