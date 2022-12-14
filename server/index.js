const express = require('express')
const cors = require('cors')
const router = require('./router')
const path = require('path')

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const origin = { origin: isProduction ? false : '*' }

// Middlewares
app.use(cors(origin))
app.use(express.static(path.join(__dirname, '../client/dist')))

// Routes
app.use('/api', router)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on ${port}`))
