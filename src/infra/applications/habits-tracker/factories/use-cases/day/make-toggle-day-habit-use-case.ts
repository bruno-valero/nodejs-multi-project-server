import { CreateDayUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/habits-tracker-use-cases/days/create-day-use-case'
import { ToggleDayHabitUseCase } from '@/domain/core-domains/habits-tracker/application/use-cases/habits-tracker-use-cases/days/toggle-day-habit-use-case'

import { prismaHabitsTracker } from '../../../database/prisma'
import { PrismaDayHabitsRepository } from '../../../database/prisma/respositories/prisma-day-habits-repository'
import { PrismaDaysRepository } from '../../../database/prisma/respositories/prisma-days-repository'
import { PrismaHabitsRepository } from '../../../database/prisma/respositories/prisma-habits-repository'
import { PrismaWeekDayHabitsRepository } from '../../../database/prisma/respositories/prisma-week-day-habits-repository'

export function makeToggleDayHabitUseCase() {
  const weekDayHabitsRepository = new PrismaWeekDayHabitsRepository(
    prismaHabitsTracker,
  )
  const habitsRepository = new PrismaHabitsRepository(
    prismaHabitsTracker,
    weekDayHabitsRepository,
  )

  const dayHabitsRepository = new PrismaDayHabitsRepository(
    habitsRepository,
    prismaHabitsTracker,
  )

  const daysRepository = new PrismaDaysRepository(
    dayHabitsRepository,
    prismaHabitsTracker,
  )

  const createDayUseCase = new CreateDayUseCase(
    daysRepository,
    habitsRepository,
  )

  const userCase = new ToggleDayHabitUseCase(
    daysRepository,
    dayHabitsRepository,
    createDayUseCase,
    habitsRepository,
  )

  return userCase
}
