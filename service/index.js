const axios = require('../utils/request');
const { checkInApi, draw } = require('../api/juejin');
const { onekeySignin } = require('../api/baidu');
const { ylApi } = require('../api/common');
const qs = require('qs');

//  掘金签到
function checkIn(cookie) {
  return axios.post(checkInApi, {}, { headers: { cookie }, name: 'juejin' })
}

//  掘金-抽奖一次
function lottery(cookie) {
  return axios.post(draw, {}, { headers: { cookie }, name: 'juejin' })
}

//  百度签到
function checkInBaiDu(cookie) {
  const params = { ie: 'utf-8', tbs: '0db5c8d315812f591640651930' };
  return axios.post(onekeySignin, qs.stringify(params), { headers: { cookie }, name: 'baidu' })
}

//  一言语录
function ylService() {
  return axios.get(ylApi)
}

module.exports = {
  checkIn,
  lottery,
  checkInBaiDu,
  ylService
}
