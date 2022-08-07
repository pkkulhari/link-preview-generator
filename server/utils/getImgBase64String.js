const { default: axios } = require('axios')

module.exports = async (url) => {
  let res
  try {
    res = await axios.get(url, { responseType: 'arraybuffer' })
  } catch {
    return
  }

  const imgBuffer = Buffer.from(res.data, 'binary')
  return imgBuffer.toString('base64')
}
