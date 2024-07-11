import { WatchedList } from '@/core/entities/watched-list'

import { WeekDayHabit } from './week-day-habit'

export class WeekDaysHabit extends WatchedList<WeekDayHabit> {
  compareItems(a: WeekDayHabit, b: WeekDayHabit): boolean {
    return a.id.equals(b.id)
  }
}
