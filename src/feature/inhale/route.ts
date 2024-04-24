import { Router } from 'express'
import { add_inhale } from './add'
import { get_latest_inhales } from './search'

export const route_inhale = Router()

route_inhale.post('', (req, res) => {
  add_inhale(req, res)
})

route_inhale.get('', (req, res) => {
  get_latest_inhales(req, res)
})
