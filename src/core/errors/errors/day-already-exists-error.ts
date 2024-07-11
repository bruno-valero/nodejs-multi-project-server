import { UseCaseError } from '../use-case-errors'

export class DayAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`day ${identifier} already exists.`)
  }
}
