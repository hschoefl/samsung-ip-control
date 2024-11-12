const express = require('express')
const cors = require('cors')
const app = express()

const { getTvIp } = require('./middlewares/getTvIp')
const errorHandler = require('./middlewares/errorMiddleware')

const authRouter = require('./routes/authRoutes')
const keyRouter = require('./routes/keyRoutes')
const powerRouter = require('./routes/powerRoutes')

app.use(express.json())
app.use(cors())

// to allow self signed certificates and disable SSL checking
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// extract the IP from the header
app.use(getTvIp)

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/key', keyRouter)
app.use('/api/v1/power', powerRouter)

// register error middleware
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Express server started on port 3000 ...')
})
