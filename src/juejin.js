const service = require('../service');
const { JUEJIN } = require('../config');
const sendEmail  = require('./email');

//  签到成功自动抽奖一次(免费的)
// console.log(process.env)
if (!JUEJIN) {
  console.log(`获取不到cookie,请检查设置`)
} else {
  //  掘金签到
  service.checkIn(JUEJIN).then(() => {
    // sendEmail(true);
    service.lottery(JUEJIN);
    service.getBigService(JUEJIN).then((res) => {
      const id = res.lotteries[0]['user_id'];
      service.luckyService(id, JUEJIN);
    })
  }).catch(err => {
    sendEmail(false, [{ msg: '掘金签到失败' }]);
    console.log('掘金签到失败', err)
  })
}
