import { FastifyInstance } from 'fastify'

import { createDayController } from '../http/controllers/habit-tracker-controllers/days/create-day-controller'
import { fetchDaysWithCompletedNumberController } from '../http/controllers/habit-tracker-controllers/days/fetch-days-with-completed-number-controller'
import { findDayDetailsController } from '../http/controllers/habit-tracker-controllers/days/find-day-details-controller'
import { toggleDayHabitController } from '../http/controllers/habit-tracker-controllers/days/toggle-day-habit-controller'
import { createHabitController } from '../http/controllers/habit-tracker-controllers/habits/create-habit-controller'
import { deleteHabitController } from '../http/controllers/habit-tracker-controllers/habits/delete-habit-controller'
import { fetchHabitsController } from '../http/controllers/habit-tracker-controllers/habits/fetch-habits-controller'
import { findHabitController } from '../http/controllers/habit-tracker-controllers/habits/find-habit-controller'
import { jwtVerify } from '../http/middlewares/jwtVerify'

export async function application(app: FastifyInstance) {
  app.addHook('onRequest', jwtVerify)

  // habits
  app.post('/habits', createHabitController)
  app.delete('/habits/:id', deleteHabitController)
  app.get('/habits/:id', findHabitController)
  app.get('/habits', fetchHabitsController)

  // days
  app.post('/days', createDayController)
  app.get('/days/:date/details', findDayDetailsController)
  app.get('/days/completed-details', fetchDaysWithCompletedNumberController)

  // day-habits
  app.patch('/toggle-day-habit', toggleDayHabitController)
}
