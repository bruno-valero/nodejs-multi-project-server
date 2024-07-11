import { PrismaWeekDayHabit } from '@root/prisma/generated/habits-tracker'

import { WeekDayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/week-day-habit'

export class PrismaWeekDayHabitMapper {
  static toDomain(weekDayHabit: PrismaWeekDayHabit): WeekDayHabit {
    const newWeekDayHabit = WeekDayHabit.create(
      {
        habitId: weekDayHabit.habitId,
        userId: weekDayHabit.userId,
        weekDay: weekDayHabit.weekDay,
      },
      weekDayHabit.id,
    )

    return newWeekDayHabit
  }

  static domainToPrisma(weekDayHabit: WeekDayHabit): PrismaWeekDayHabit {
    const newWeekDayHabit: PrismaWeekDayHabit = {
      habitId: weekDayHabit.habitId.value,
      id: weekDayHabit.id.value,
      userId: weekDayHabit.userId.value,
      weekDay: weekDayHabit.weekDay,
    }

    return newWeekDayHabit
  }
}
