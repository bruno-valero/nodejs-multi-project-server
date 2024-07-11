import { PrismaDay } from '@root/prisma/generated/habits-tracker'

import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'
import { DayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habit'
import { DayHabits } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habits'

export class PrismaDaysMapper {
  static toDomain(day: PrismaDay, domainDayHabits: DayHabit[]): Day {
    const dayHabits = new DayHabits(domainDayHabits)

    const newDay = Day.create(
      {
        dayHabits,
        date: day.date,
        userId: day.userId,
        createdAt: day.createdAt,
        updatedAt: day.updatedAt,
      },
      day.id,
    )

    return newDay
  }

  static domainToPrisma(day: Day): PrismaDay {
    const newDay: PrismaDay = {
      date: day.date,
      id: day.id.value,
      userId: day.userId.value,
      createdAt: day.createdAt,
      updatedAt: day.updatedAt,
    }
    return newDay
  }
}
