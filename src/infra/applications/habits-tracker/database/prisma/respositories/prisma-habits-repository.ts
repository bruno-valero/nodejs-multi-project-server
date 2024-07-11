import { HabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/habits-reposiory'
import { WeekDayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/week-day-habits-repositorie'
import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

import { PrismaHabitsTracker } from '..'
import { PrismaHabitsMapper } from '../mappers/prisma-habits-mapper'

export class PrismaHabitsRepository implements HabitsRepository {
  constructor(
    private prisma: PrismaHabitsTracker,
    private weekDayHabitsRepository: WeekDayHabitsRepository,
  ) {}

  async create(habit: Habit): Promise<void> {
    await this.prisma.prismaHabit.create({
      data: PrismaHabitsMapper.domainToPrisma(habit),
    })

    console.log('habit', habit)
    await this.weekDayHabitsRepository.createMany([
      ...habit.weekDaysHabit.getItems(),
      ...habit.weekDaysHabit.getNewItems(),
    ])
  }

  async createMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.create(habit)
    }
  }

  async findById(id: string, date?: Date | undefined): Promise<Habit | null> {
    const prismaHabit = await this.prisma.prismaHabit.findUnique({
      where: {
        id,
        createdAt: {
          lte: date,
        },
      },
    })

    if (!prismaHabit) return null

    const weekdayHabits = await this.weekDayHabitsRepository.findManyByHabitId(
      prismaHabit.id,
    )

    const mappedHabit = PrismaHabitsMapper.toDomain(prismaHabit, weekdayHabits)
    return mappedHabit
  }

  async findManyByUserId(
    userId: string,
    filters?: { title?: string; weekDays?: number[] } | undefined,
    date?: Date | undefined,
  ): Promise<Habit[]> {
    const prismaHabits = await this.prisma.prismaHabit.findMany({
      where: {
        userId,
        createdAt: {
          lte: date,
        },
        AND: [
          {
            title: filters?.title,
            prismaHabitWeekDays: {
              some: {
                weekDay: {
                  in: filters?.weekDays,
                },
              },
            },
          },
        ],
      },
    })

    const mappedHabits = await Promise.all(
      prismaHabits.map(async (item) => {
        const weekDayHabit =
          await this.weekDayHabitsRepository.findManyByHabitId(item.id)

        return PrismaHabitsMapper.toDomain(item, weekDayHabit)
      }),
    )

    return mappedHabits
  }

  async findManyByWeekDay(
    weekDay: number,
    userId: string,
    filters?:
      | { title?: string | undefined; weekDays?: number[] | undefined }
      | undefined,
    date?: Date | undefined,
  ): Promise<Habit[]> {
    const prismaHabits = await this.prisma.prismaHabit.findMany({
      where: {
        createdAt: {
          lte: date,
        },
        userId,
        prismaHabitWeekDays: {
          some: {
            weekDay,
          },
        },
        AND: [
          {
            title: filters?.title,
            prismaHabitWeekDays: {
              some: {
                weekDay: {
                  in: filters?.weekDays,
                },
              },
            },
          },
        ],
      },
    })

    const mappedHabits = await Promise.all(
      prismaHabits.map(async (item) => {
        const weekDayHabit =
          await this.weekDayHabitsRepository.findManyByHabitId(item.id)

        return PrismaHabitsMapper.toDomain(item, weekDayHabit)
      }),
    )

    return mappedHabits
  }

  async countByWeekDay(
    weekDay: number,
    filters?:
      | { title?: string | undefined; weekDays?: number[] | undefined }
      | undefined,
    date?: Date | undefined,
  ): Promise<number> {
    const prismaHabitsAmount = await this.prisma.prismaHabit.count({
      where: {
        createdAt: {
          lte: date,
        },
        prismaHabitWeekDays: {
          some: {
            weekDay,
          },
        },
        AND: [
          {
            title: filters?.title,
            prismaHabitWeekDays: {
              some: {
                weekDay: {
                  in: filters?.weekDays,
                },
              },
            },
          },
        ],
      },
    })

    return prismaHabitsAmount
  }

  async update(habit: Habit): Promise<void> {
    await this.prisma.prismaHabit.update({
      where: {
        id: habit.id.value,
      },
      data: PrismaHabitsMapper.domainToPrisma(habit),
    })

    await this.weekDayHabitsRepository.createMany(
      habit.weekDaysHabit.getNewItems(),
    )
    await this.weekDayHabitsRepository.deleteMany(
      habit.weekDaysHabit.getRemovedItems(),
    )
  }

  async updateMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.update(habit)
    }
  }

  async delete(habit: Habit): Promise<void> {
    // deleting relationed data
    await this.weekDayHabitsRepository.deleteMany(
      habit.weekDaysHabit.getItems(),
    )

    // deleing habit
    await this.prisma.prismaHabit.delete({
      where: {
        id: habit.id.value,
      },
    })
  }

  async deleteMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.delete(habit)
    }
  }
}
