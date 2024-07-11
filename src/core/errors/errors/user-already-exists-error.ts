import { UseCaseError } from '../use-case-errors'

export class UserAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`user ${identifier} already exists.`)
  }
}
