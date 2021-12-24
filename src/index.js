const service = require('../service');
const { COOKIE } = require('../config');

//  签到成功自动抽奖一次(免费的)
if (!COOKIE) {
  console.log(`获取不到cookie,请检查设置`)
} else {
  console.log(COOKIE)
  service.checkIn(COOKIE).then(() => {
    service.lottery(COOKIE)
  }).catch(err => {
    console.log(err)
  })
}
