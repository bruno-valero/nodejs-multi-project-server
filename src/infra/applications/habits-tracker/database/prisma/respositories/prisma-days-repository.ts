import { DayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/day-habits-repository'
import { DaysRepository } from '@/domain/core-domains/habits-tracker/application/repositories/days-respository'
import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'

import { PrismaHabitsTracker } from '..'
import { PrismaDaysMapper } from '../mappers/prisma-day-mapper'

export class PrismaDaysRepository implements DaysRepository {
  constructor(
    private dayHabitsRepository: DayHabitsRepository,
    private prisma: PrismaHabitsTracker,
  ) {}

  async create(day: Day): Promise<void> {
    const dayHabits = [
      ...day.dayHabits.getItems(),
      ...day.dayHabits.getNewItems(),
    ]

    await this.prisma.prismaDay.create({
      data: PrismaDaysMapper.domainToPrisma(day),
    })

    await this.dayHabitsRepository.createMany(dayHabits)
  }

  async findById(id: string): Promise<Day | null> {
    const prismaDay = await this.prisma.prismaDay.findUnique({
      where: {
        id,
      },
    })

    if (!prismaDay) return null

    const dayHabits = await this.dayHabitsRepository.findManyByDayId(
      prismaDay.id,
      prismaDay.createdAt,
    )

    const mappedDay = PrismaDaysMapper.toDomain(prismaDay, dayHabits)

    return mappedDay
  }

  async findByDateAndUserId(date: Date, userId: string): Promise<Day | null> {
    const prismaDay = await this.prisma.prismaDay.findUnique({
      where: {
        userId,
        date,
      },
    })

    if (!prismaDay) return null

    const dayHabits = await this.dayHabitsRepository.findManyByDayId(
      prismaDay.id,
      prismaDay.createdAt,
    )

    const mappedDay = PrismaDaysMapper.toDomain(prismaDay, dayHabits)

    return mappedDay
  }

  async findManyByUserId(userId: string): Promise<Day[]> {
    const prismaDay = await this.prisma.prismaDay.findMany({
      where: {
        userId,
      },
    })

    const mappedDays = await Promise.all(
      prismaDay.map(async (item) => {
        const dayHabits = await this.dayHabitsRepository.findManyByDayId(
          item.id,
          item.createdAt,
        )
        const mappedItem = PrismaDaysMapper.toDomain(item, dayHabits)
        return mappedItem
      }),
    )

    return mappedDays
  }

  async findManyByUserIdAndDateRange(
    userId: string,
    range: { from: Date; to: Date },
  ): Promise<Day[]> {
    const prismaDay = await this.prisma.prismaDay.findMany({
      where: {
        userId,
        date: {
          gte: range.from,
          lte: range.to,
        },
      },
    })

    const mappedDays = await Promise.all(
      prismaDay.map(async (item) => {
        const dayHabits = await this.dayHabitsRepository.findManyByDayId(
          item.id,
          item.createdAt,
        )
        const mappedItem = PrismaDaysMapper.toDomain(item, dayHabits)
        return mappedItem
      }),
    )

    return mappedDays
  }

  async update(day: Day): Promise<void> {
    await this.dayHabitsRepository.deleteMany(day.dayHabits.getRemovedItems())
    await this.dayHabitsRepository.createMany(day.dayHabits.getNewItems())

    await this.prisma.prismaDay.update({
      where: {
        id: day.id.value,
      },
      data: PrismaDaysMapper.domainToPrisma(day),
    })
  }

  async updateMany(Days: Day[]): Promise<void> {
    for (const Day of Days) {
      await this.update(Day)
    }
  }

  async delete(day: Day): Promise<void> {
    await this.dayHabitsRepository.deleteMany(day.dayHabits.getItems())

    await this.prisma.prismaDay.delete({
      where: {
        id: day.id.value,
      },
    })
  }

  async deleteMany(Days: Day[]): Promise<void> {
    for (const Day of Days) {
      await this.delete(Day)
    }
  }
}
