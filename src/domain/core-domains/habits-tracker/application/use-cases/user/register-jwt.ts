import { Either, left, right } from '@/core/either'
import { UserAlreadyExistsError } from '@/core/errors/errors/user-already-exists-error'

import { User } from '../../../enterprise/entities/user'
import { Encrypter } from '../../cryptography/encrypter'
import { UsersRepository } from '../../repositories/users-reposiory'

export interface RegisterJwtUseCaseRequest {
  email: string
  password: string
}

export type RegisterJwtUseCaseResponse = Either<UserAlreadyExistsError, null>

export class RegisterJwtUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private encrypter: Encrypter,
  ) {}

  async execute({
    email,
    password,
  }: RegisterJwtUseCaseRequest): Promise<RegisterJwtUseCaseResponse> {
    const existingUser = await this.usersRepository.findByEmail(email)
    if (existingUser) return left(new UserAlreadyExistsError(email))

    const passwordHash = await this.encrypter.hash(password)

    const user = User.create({
      email,
      password: passwordHash,
    })

    await this.usersRepository.create(user)

    return right(null)
  }
}
