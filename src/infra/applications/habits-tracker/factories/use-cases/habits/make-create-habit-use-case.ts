import { CreateHabitUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/habits-tracker-use-cases/habits/create-habit-use-case'

import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaHabitsRepository } from '../../../database/prisma/respositories/prisma-habits-repository'
import { PrismaWeekDayHabitsRepository } from '../../../database/prisma/respositories/prisma-week-day-habits-repository'

export function makeCreateHabitUseCase() {
  const weekDayHabitsRepository = new PrismaWeekDayHabitsRepository(
    prismaHabitsTracker,
  )
  const habitsRepository = new PrismaHabitsRepository(
    prismaHabitsTracker,
    weekDayHabitsRepository,
  )
  const useCase = new CreateHabitUseCase(habitsRepository)

  return useCase
}
