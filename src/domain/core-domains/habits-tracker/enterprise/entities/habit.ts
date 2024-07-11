import z from 'zod'

import Entity from '@/core/entities/entity'
import UniqueEntityId from '@/core/entities/unique-entity-id'

import { WeekDaysHabit } from './week-days-habit'

interface HabitProps {
  title: string
  createdAt: Date
  weekDaysHabit: WeekDaysHabit
  userId: UniqueEntityId
}

export const habitSchema = z.object({
  title: z.string().min(1),
  createdAt: z.date().optional(),
  weekDaysHabit: z
    .custom<WeekDaysHabit>((item) => item instanceof WeekDaysHabit)
    .optional(),
  userId: z.string(),
})

export type HabitCreationProps = z.infer<typeof habitSchema>

export class Habit extends Entity<HabitProps> {
  static create(props: HabitCreationProps, id?: string) {
    const habit = new Habit(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        weekDaysHabit: props.weekDaysHabit ?? new WeekDaysHabit([]),
        userId: new UniqueEntityId(props.userId),
      },
      new UniqueEntityId(id),
    )

    return habit
  }

  get title() {
    return this.props.title
  }

  get createdAt() {
    return this.props.createdAt
  }

  get weekDaysHabit() {
    return this.props.weekDaysHabit
  }

  get userId() {
    return this.props.userId
  }

  setTitle(title: string) {
    this.props.title = title
  }

  setWeekDaysHabit(weekDaysHabit: WeekDaysHabit) {
    this.props.weekDaysHabit = weekDaysHabit
  }
}
