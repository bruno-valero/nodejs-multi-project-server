import z from 'zod'

import Entity from '@/core/entities/entity'
import UniqueEntityId from '@/core/entities/unique-entity-id'

interface WeekDayHabitProps {
  habitId: UniqueEntityId
  userId: UniqueEntityId
  weekDay: number
}

export const weekDayHabitSchema = z.object({
  habitId: z.string().uuid(),
  userId: z.string().uuid(),
  weekDay: z.number(),
})

export type WeekDayHabitCreationProps = z.infer<typeof weekDayHabitSchema>

export class WeekDayHabit extends Entity<WeekDayHabitProps> {
  static create(props: WeekDayHabitCreationProps, id?: string) {
    const weekDayHabit = new WeekDayHabit(
      {
        ...props,
        habitId: new UniqueEntityId(props.habitId),
        userId: new UniqueEntityId(props.userId),
      },
      new UniqueEntityId(id),
    )

    return weekDayHabit
  }

  get habitId() {
    return this.props.habitId
  }

  get userId() {
    return this.props.userId
  }

  get weekDay() {
    return this.props.weekDay
  }
}
