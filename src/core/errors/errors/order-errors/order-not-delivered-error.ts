import { UseCaseError } from '../../use-case-errors'

export class OrderNotDeliveredError extends Error implements UseCaseError {
  constructor() {
    super(`this order has not been delivered yet`)
  }
}
