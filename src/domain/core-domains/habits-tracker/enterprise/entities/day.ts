import z from 'zod'

import Entity from '@/core/entities/entity'
import UniqueEntityId from '@/core/entities/unique-entity-id'

import { DayHabits } from './day-habits'

interface DayProps {
  date: Date
  userId: UniqueEntityId
  dayHabits: DayHabits
  createdAt: Date
  updatedAt: Date | null
}

export const daySchema = z.object({
  date: z.date(),
  userId: z.string(),
  dayHabits: z
    .custom<DayHabits>((item) => item instanceof DayHabits)
    .optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional().nullable(),
})

export type DayCreationProps = z.infer<typeof daySchema>

export class Day extends Entity<DayProps> {
  static create(props: DayCreationProps, id?: string) {
    const day = new Day(
      {
        ...props,
        dayHabits: props.dayHabits ?? new DayHabits([]),
        userId: new UniqueEntityId(props.userId),
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
      },
      new UniqueEntityId(id),
    )
    return day
  }

  get date() {
    return this.props.date
  }

  get userId() {
    return this.props.userId
  }

  get dayHabits() {
    return this.props.dayHabits
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  setDayHabits(dayHabits: DayHabits) {
    this.props.dayHabits = dayHabits
    this.touch()
  }
}
