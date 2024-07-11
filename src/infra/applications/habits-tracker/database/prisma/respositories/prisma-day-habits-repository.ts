import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { DayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/day-habits-repository'
import { HabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/habits-reposiory'
import { DayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habit'

import { PrismaHabitsTracker } from '..'
import { PrismaDayHabitsMapper } from '../mappers/prisma-day-habits-mapper'

dayjs.extend(utc)

export class PrismaDayHabitsRepository implements DayHabitsRepository {
  constructor(
    private habitsRepository: HabitsRepository,
    private prisma: PrismaHabitsTracker,
  ) {}

  async create(dayHabit: DayHabit): Promise<void> {
    await this.prisma.prismaDayHabit.create({
      data: PrismaDayHabitsMapper.domainToPrisma(dayHabit),
    })
  }

  async createMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.create(dayHabit)
    }
  }

  async findById(id: string, date?: Date): Promise<DayHabit | null> {
    const weekDay = dayjs.utc(date).get('day')

    const prismaDayHabit = await this.prisma.prismaDayHabit.findUnique({
      where: {
        id,
        AND: [
          {
            habit: {
              createdAt: {
                lte: date,
              },
              prismaHabitWeekDays: {
                some: {
                  weekDay,
                },
              },
            },
          },
        ],
      },
    })
    if (!prismaDayHabit) return null

    const prismaHabit = await this.habitsRepository.findById(
      prismaDayHabit.habitId,
    )

    if (!prismaHabit) return null

    const mappedDayHabit = PrismaDayHabitsMapper.toDomain(
      prismaDayHabit,
      prismaHabit,
    )

    return mappedDayHabit
  }

  async findByDayIdAndHabitId(
    dayId: string,
    habitId: string,
    userId: string,
    date?: Date,
  ): Promise<DayHabit | null> {
    const weekDay = dayjs.utc(date).get('day')

    const prismaDayHabit = await this.prisma.prismaDayHabit.findUnique({
      where: {
        habitId_dayId_userId: {
          dayId,
          habitId,
          userId,
        },
        AND: [
          {
            habit: {
              createdAt: {
                lte: date,
              },
              prismaHabitWeekDays: {
                some: {
                  weekDay,
                },
              },
            },
          },
        ],
      },
    })
    if (!prismaDayHabit) return null

    const prismaHabit = await this.habitsRepository.findById(
      prismaDayHabit.habitId,
    )

    if (!prismaHabit) return null

    const mappedDayHabit = PrismaDayHabitsMapper.toDomain(
      prismaDayHabit,
      prismaHabit,
    )

    return mappedDayHabit
  }

  async findManyByUserId(userId: string, date?: Date): Promise<DayHabit[]> {
    const weekDay = dayjs.utc(date).get('day')

    const prismaDayHabit = await this.prisma.prismaDayHabit.findMany({
      where: {
        userId,
        AND: [
          {
            habit: {
              createdAt: {
                lte: date,
              },
              prismaHabitWeekDays: {
                some: {
                  weekDay,
                },
              },
            },
          },
        ],
      },
    })

    const prismaHabit = await Promise.all(
      prismaDayHabit.map(
        async (item) => await this.habitsRepository.findById(item.habitId),
      ),
    )

    if (!prismaHabit.includes(null)) return []

    const mappedDayHabit = prismaDayHabit.map((item, i) =>
      prismaHabit[i]
        ? PrismaDayHabitsMapper.toDomain(item, prismaHabit[i]!)
        : null,
    )

    if (!mappedDayHabit.includes(null)) return []

    return mappedDayHabit as DayHabit[]
  }

  async findManyByDayId(dayId: string, date?: Date): Promise<DayHabit[]> {
    const weekDay = dayjs.utc(date).get('day')

    const prismaDayHabit = await this.prisma.prismaDayHabit.findMany({
      where: {
        dayId,
        AND: [
          {
            habit: {
              createdAt: {
                lte: date,
              },
              prismaHabitWeekDays: {
                some: {
                  weekDay,
                },
              },
            },
          },
        ],
      },
    })

    const prismaHabit = await Promise.all(
      prismaDayHabit.map(
        async (item) => await this.habitsRepository.findById(item.habitId),
      ),
    )

    if (prismaHabit.includes(null)) return []

    const mappedDayHabit = prismaDayHabit.map((item, i) =>
      prismaHabit[i]
        ? PrismaDayHabitsMapper.toDomain(item, prismaHabit[i]!)
        : null,
    )

    if (mappedDayHabit.includes(null)) return []

    return mappedDayHabit as DayHabit[]
  }

  async countByDayId(dayId: string, date?: Date | undefined): Promise<number> {
    const weekDay = dayjs.utc(date).get('day')

    const prismaDayHabitAmount = await this.prisma.prismaDayHabit.count({
      where: {
        dayId,
        AND: [
          {
            habit: {
              createdAt: {
                lte: date,
              },
              prismaHabitWeekDays: {
                some: {
                  weekDay,
                },
              },
            },
          },
        ],
      },
    })

    return prismaDayHabitAmount
  }

  async update(dayHabit: DayHabit): Promise<void> {
    await this.prisma.prismaDayHabit.update({
      where: {
        id: dayHabit.id.value,
      },
      data: PrismaDayHabitsMapper.domainToPrisma(dayHabit),
    })
  }

  async updateMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.update(dayHabit)
    }
  }

  async delete(dayHabit: DayHabit): Promise<void> {
    await this.prisma.prismaDayHabit.delete({
      where: {
        id: dayHabit.id.value,
      },
    })
  }

  async deleteMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.delete(dayHabit)
    }
  }
}
