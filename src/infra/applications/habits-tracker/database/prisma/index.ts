import { PrismaClient as HabitsTrackerPrismaClient } from '@root/prisma/generated/habits-tracker'

export class PrismaHabitsTracker extends HabitsTrackerPrismaClient {}

export const prismaHabitsTracker = new PrismaHabitsTracker()
