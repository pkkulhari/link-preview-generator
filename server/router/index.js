const { Router, response } = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { getTitle, getDescription, getDomain, getImage, getValidUrl } = require('../utils')

const router = Router()

router.get('/', async (req, res) => {
  let url = req.query?.url

  // Validation
  if (!url) {
    return res.status(400).send({ error: { message: 'Missing url parameter' } })
  }
  url = getValidUrl(url)

  let response
  try {
    response = await axios.get(url)
  } catch (error) {
    res.send({ error: true })
    return
  }

  const $ = cheerio.load(response.data)
  const obj = {
    title: getTitle($),
    description: getDescription($),
    domain: getDomain(url),
    image: await getImage($),
    url,
  }

  res.send(obj)
})

module.exports = router
