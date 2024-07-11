import { UseCaseError } from '../use-case-errors'

export class EntityTypeError extends Error implements UseCaseError {
  // eslint-disable-next-line
  constructor(message: string) {
    super(message)
  }
}
