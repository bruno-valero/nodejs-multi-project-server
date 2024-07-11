import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { Encoder } from '../../cryptography/encoder'
import { Encrypter } from '../../cryptography/encrypter'
import { UsersRepository } from '../../repositories/users-reposiory'

export interface AuthJwtUseCaseRequest {
  email: string
  password: string
}

export type AuthJwtUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  { token: string }
>

export class AuthJwtUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private encrypter: Encrypter,
    private encoder: Encoder,
  ) {}

  async execute({
    email,
    password,
  }: AuthJwtUseCaseRequest): Promise<AuthJwtUseCaseResponse> {
    const existingUser = await this.usersRepository.findByEmail(email)
    if (!existingUser) return left(new ResourceNotFoundError())

    const isValidPassword = await this.encrypter.compare(
      password,
      existingUser.password ?? '',
    )
    if (!isValidPassword) return left(new UnauthorizedError())

    const token = await this.encoder.encode({ sub: existingUser.id.value })

    return right({ token })
  }
}
