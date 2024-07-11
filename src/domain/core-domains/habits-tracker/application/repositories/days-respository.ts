import { Day } from '../../enterprise/entities/day'

export abstract class DaysRepository {
  abstract create(day: Day): Promise<void>
  abstract findById(id: string): Promise<Day | null>
  abstract findByDateAndUserId(date: Date, userId: string): Promise<Day | null>

  abstract findManyByUserId(userId: string): Promise<Day[]>
  abstract findManyByUserIdAndDateRange(
    userId: string,
    range: { from: Date; to: Date },
  ): Promise<Day[]>

  abstract update(day: Day): Promise<void>
  /**
   * The param needs to be a day becouse it has a watched-list in its properties, which means tha it has to access them to be able to delete them from their databases
   * @param day
   */
  abstract delete(day: Day): Promise<void>
}
