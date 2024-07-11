import { WatchedList } from '@/core/entities/watched-list'

import { DayHabit } from './day-habit'

export class DayHabits extends WatchedList<DayHabit> {
  compareItems(a: DayHabit, b: DayHabit): boolean {
    return a.id.equals(b.id)
  }
}
