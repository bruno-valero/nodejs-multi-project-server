import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { User } from '../../../enterprise/entities/user'
import { UsersRepository } from '../../repositories/users-reposiory'

export interface GetUserUseCaseRequest {
  userId: string
}

export type GetUserUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  { user: User }
>

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserUseCaseRequest): Promise<GetUserUseCaseResponse> {
    const existingUser = await this.usersRepository.findById(userId)
    if (!existingUser) return left(new ResourceNotFoundError())

    return right({ user: existingUser })
  }
}
