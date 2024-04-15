import { Router } from 'express'
import { add_inhale } from './add'

export const route_inhale = Router()

route_inhale.post('', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  add_inhale(req, res)
})
