const axios = require('axios')
const cheerio = require('cheerio')
const getImgBase64String = require('./getImgBase64String')
const getValidUrl = require('./getValidUrl')

class Metadata {
  constructor(data) {
    this.$ = cheerio.load(data)
  }

  getMetadata() {
    return {
      metaTags: this.getMetaTags(),
      ogTags: this.getOgTags(),
      twitterTags: this.getTwitterTags(),
    }
  }

  getMetaTags() {
    return {
      title: this.$('meta[name="title"]')?.attr('content'),
      description: this.$('meta[name="description"]')?.attr('content'),
      url: this.$('meta[name="url"]')?.attr('content'),
    }
  }

  getOgTags() {
    return {
      title: this.$('meta[property="og:title"]')?.attr('content'),
      description: this.$('meta[property="og:description"]')?.attr('content'),
      site_name: this.$('meta[property="og:site_name"]')?.attr('content'),
      url: this.$('meta[property="og:url"]')?.attr('content'),
      image: this.$('meta[property="og:image"]')?.attr('content'),
    }
  }

  getTwitterTags() {
    return {
      title: this.$('meta[name="twitter:title"]')?.attr('content'),
      description: this.$('meta[name="twitter:description"]')?.attr('content'),
      card: this.$('meta[name="twitter:card"]')?.attr('content'),
      image: this.$('meta[name="twitter:image"]')?.attr('content'),
    }
  }
}

module.exports = async (url) => {
  url = getValidUrl(url)

  let res
  try {
    res = await axios.get(url)
  } catch (error) {
    return
  }

  const md = new Metadata(res.data)
  const metadata = md.getMetadata()
  metadata['url'] = metadata.metaTags?.url || metadata.ogTags?.url || url
  metadata['domain'] = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/)[1]
  metadata['image'] = await getImgBase64String(
    metadata.ogTags?.image || metadata.twitterTags?.image
  )

  return metadata
}
