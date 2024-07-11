import z from 'zod'

import Entity from '@/core/entities/entity'
import UniqueEntityId from '@/core/entities/unique-entity-id'

import { Habit } from './habit'

interface DayHabitProps {
  habit: Habit
  dayId: UniqueEntityId
  userId: UniqueEntityId
}

export const habitSchema = z.object({
  habit: z.custom<Habit>((item) => item instanceof Habit),
  dayId: z.string().uuid(),
  userId: z.string().uuid(),
})

export type DayHabitCreationProps = z.infer<typeof habitSchema>

export class DayHabit extends Entity<DayHabitProps> {
  static create(props: DayHabitCreationProps, id?: string) {
    const habit = new DayHabit(
      {
        ...props,
        dayId: new UniqueEntityId(props.dayId),
        userId: new UniqueEntityId(props.userId),
      },
      new UniqueEntityId(id),
    )

    return habit
  }

  get habit() {
    return this.props.habit
  }

  get dayId() {
    return this.props.dayId
  }

  get userId() {
    return this.props.userId
  }
}
