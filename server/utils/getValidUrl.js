module.exports = (url) => {
  if (/^(:\/\/)/.test(url)) return `http${url}`
  else if (!/^(f|ht)tps?:\/\//i.test(url)) return `http://${url}`

  return url
}
