import { Either, right } from '@/core/either'

import { Habit } from '../../../../enterprise/entities/habit'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface FetchHabitsUseCaseRequest {
  userId: string
  filters?: {
    title?: string
    weekDays?: number[]
  }
}

export type FetchHabitsUseCaseResponse = Either<null, { habits: Habit[] }>

export class FetchHabitsUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({
    userId,
    filters,
  }: FetchHabitsUseCaseRequest): Promise<FetchHabitsUseCaseResponse> {
    const existingHabits = await this.habitsRepository.findManyByUserId(
      userId,
      filters,
    )

    return right({ habits: existingHabits })
  }
}
