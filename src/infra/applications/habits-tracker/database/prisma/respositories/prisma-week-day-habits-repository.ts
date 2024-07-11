import { WeekDayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/week-day-habits-repositorie'
import { WeekDayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/week-day-habit'

import { PrismaHabitsTracker } from '..'
import { PrismaWeekDayHabitMapper } from '../mappers/prisma-week-day-habit-mapper'

export class PrismaWeekDayHabitsRepository implements WeekDayHabitsRepository {
  constructor(private prisma: PrismaHabitsTracker) {}

  items: WeekDayHabit[] = []

  async create(weekDayHabit: WeekDayHabit): Promise<void> {
    await this.prisma.prismaWeekDayHabit.create({
      data: PrismaWeekDayHabitMapper.domainToPrisma(weekDayHabit),
    })
  }

  async createMany(weekDayHabits: WeekDayHabit[]): Promise<void> {
    for (const weekDayHabit of weekDayHabits) {
      await this.create(weekDayHabit)
    }
  }

  async findById(id: string): Promise<WeekDayHabit | null> {
    const prismaWeekDayHabit = await this.prisma.prismaWeekDayHabit.findUnique({
      where: {
        id,
      },
    })

    if (!prismaWeekDayHabit) return null

    const mappedWeekDayHabit =
      PrismaWeekDayHabitMapper.toDomain(prismaWeekDayHabit)

    return mappedWeekDayHabit
  }

  async findManyByUserId(userId: string): Promise<WeekDayHabit[]> {
    const prismaWeekDayHabits = await this.prisma.prismaWeekDayHabit.findMany({
      where: {
        userId,
      },
    })

    const mappedWeekDayHabits = prismaWeekDayHabits.map(
      PrismaWeekDayHabitMapper.toDomain,
    )

    return mappedWeekDayHabits
  }

  async findManyByHabitId(habitId: string): Promise<WeekDayHabit[]> {
    const prismaWeekDayHabits = await this.prisma.prismaWeekDayHabit.findMany({
      where: {
        habitId,
      },
    })

    const mappedWeekDayHabits = prismaWeekDayHabits.map(
      PrismaWeekDayHabitMapper.toDomain,
    )

    return mappedWeekDayHabits
  }

  async update(weekDayHabit: WeekDayHabit): Promise<void> {
    await this.prisma.prismaWeekDayHabit.update({
      where: {
        id: weekDayHabit.id.value,
      },
      data: PrismaWeekDayHabitMapper.domainToPrisma(weekDayHabit),
    })
  }

  async updateMany(weekDayHabits: WeekDayHabit[]): Promise<void> {
    for (const weekDayHabit of weekDayHabits) {
      await this.update(weekDayHabit)
    }
  }

  async delete(weekDayHabit: WeekDayHabit): Promise<void> {
    await this.prisma.prismaWeekDayHabit.delete({
      where: {
        id: weekDayHabit.id.value,
      },
    })
  }

  async deleteMany(weekDayHabits: WeekDayHabit[]): Promise<void> {
    for (const weekDayHabit of weekDayHabits) {
      await this.delete(weekDayHabit)
    }
  }
}
