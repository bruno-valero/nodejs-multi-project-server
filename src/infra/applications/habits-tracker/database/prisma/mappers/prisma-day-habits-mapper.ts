import { PrismaDayHabit } from '@root/prisma/generated/habits-tracker'

import { DayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habit'
import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

export class PrismaDayHabitsMapper {
  static toDomain(dayHabit: PrismaDayHabit, domainHabit: Habit): DayHabit {
    const habit = domainHabit

    const newDayHabit = DayHabit.create(
      {
        dayId: dayHabit.dayId,
        habit,
        userId: dayHabit.userId,
      },
      dayHabit.id,
    )

    return newDayHabit
  }

  static domainToPrisma(dayHabit: DayHabit): PrismaDayHabit {
    const newDayHabit: PrismaDayHabit = {
      dayId: dayHabit.dayId.value,
      habitId: dayHabit.habit.id.value,
      id: dayHabit.id.value,
      userId: dayHabit.userId.value,
    }
    return newDayHabit
  }
}
