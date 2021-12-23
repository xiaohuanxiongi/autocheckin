const axios = require('../utils/request');
const { checkInApi, draw } = require('../api/juejin');

//  签到
function checkIn(cookie) {
  return axios.post(checkInApi, {}, { headers: { cookie } })
}

//  抽奖一次
function lottery(cookie) {
  return axios.post(draw, {}, { headers: { cookie } })
}

module.exports = {
  checkIn,
  lottery
}
