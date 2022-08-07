const { Router } = require('express')
const getMetadata = require('../utils/getMetadata')

const router = Router()

router.get('/', async (req, res) => {
  const url = req.query?.url
  if (!url) return res.status(400).send({ error: 'Missing url parameter' })

  const metadata = await getMetadata(url)
  if (!metadata) return res.status(400).send({ error: 'Fetching metadata failed' })
  res.send(metadata)
})

module.exports = router
