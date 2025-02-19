'use strict'

const axios = require('axios')
const pRetry = require('p-retry')

/**
 * 模拟浏览器的头信息
 */
/* eslint-disable max-len */
const headers = {
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.8',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
  Host: 'cn.bing.com',
  Pragma: 'no-cache',
  Referer: 'http://cn.bing.com/dict/?FORM=Z9LH3',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36'
}
/* eslint-enable max-len */

function main (url, configs) {
  const retryOptions = {
    retries: configs.retries
  }

  const fetchOptions = {
    headers
  }

  return pRetry(() => {
    return axios.get(url, fetchOptions).then(res => res.data)
  }, retryOptions)
}

module.exports = main
