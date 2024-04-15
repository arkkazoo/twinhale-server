import { Router } from 'express'
import { route_inhale } from './feature'

export const router = Router()

router.use('/inhale', route_inhale)
