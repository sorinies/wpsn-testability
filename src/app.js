require('../env')
const express = require('express')
const morgan = require('morgan')
const bugsnag = require('bugsnag')

const createApiRouter = require('./router/api')

bugsnag.register(process.env.BUGSNAG_KEY)

module.exports = ({postMessage}) => {
  const app = express()

  app.set('trust proxy', true)
  app.use(bugsnag.requestHandler)
  app.use(morgan('tiny'))
  app.use('/api', createApiRouter({postMessage}))
  return app
}
