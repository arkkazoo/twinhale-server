import cors from 'cors'
import express from 'express'

import { router } from './route'

const app = express()
const port = 24041

app.use(cors())
app.use(express.json())

app.use('', router)

app.listen(port, () => {
  console.info('twinhale-server is running')
})
