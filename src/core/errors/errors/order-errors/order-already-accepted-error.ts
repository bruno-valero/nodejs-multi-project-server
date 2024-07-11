import { UseCaseError } from '../../use-case-errors'

export class OrderAlreadyAcceptedError extends Error implements UseCaseError {
  constructor() {
    super(`this order was already accepted`)
  }
}
