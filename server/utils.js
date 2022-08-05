const axios = require('axios')

module.exports = {
  getTitle: ($) => {
    if ($('meta[property="og:title"]').length) return $('meta[property="og:title"]').attr('content')
    if ($('meta[name="twitter:title"]').length)
      return $('meta[name="twitter:title"]').attr('content')
    if ($('title').length) return $('title').text()
    return null
  },

  getDescription: ($) => {
    if ($('meta[property="og:description"]').length)
      return $('meta[property="og:description"]').attr('content')
    else if ($('meta[name="twitter:description"]').length)
      return $('meta[name="twitter:description"]').attr('content')
    else if ($('meta[name="description"]').length)
      return $('meta[name="description"]').attr('content')
    return null
  },

  getDomain: (url) => {
    return url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/)[1]
  },

  getImage: async ($) => {
    let imageUrl = ''
    if ($('meta[property="og:image"]').length)
      imageUrl = $('meta[property="og:image"]').attr('content')
    else if ($('meta[name="twitter:image"]').length)
      imageUrl = $('meta[name="twitter:image"]').attr('content')
    else if ($('link[rel="image_src"]').length) imageUrl = $('link[rel="image_src"]').attr('href')

    if (imageUrl === '') return null

    const res = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    return Buffer.from(res.data, 'binary').toString('base64')
  },

  getValidUrl: (url) => {
    if (/^(:\/\/)/.test(url)) return `http${url}`
    else if (!/^(f|ht)tps?:\/\//i.test(url)) return `http://${url}`

    return url
  },
}
