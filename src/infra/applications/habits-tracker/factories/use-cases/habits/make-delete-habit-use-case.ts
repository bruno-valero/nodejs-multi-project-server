import { DeleteHabitUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/habits-tracker-use-cases/habits/delete-habit-use-case'

import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaHabitsRepository } from '../../../database/prisma/respositories/prisma-habits-repository'
import { PrismaWeekDayHabitsRepository } from '../../../database/prisma/respositories/prisma-week-day-habits-repository'

export function makeDeleteHabitUseCase() {
  const weekDayHabitsRepository = new PrismaWeekDayHabitsRepository(
    prismaHabitsTracker,
  )
  const habitsRepository = new PrismaHabitsRepository(
    prismaHabitsTracker,
    weekDayHabitsRepository,
  )
  const useCase = new DeleteHabitUseCase(habitsRepository)

  return useCase
}
