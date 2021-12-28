const service = require('../service');
const { TIEBA } = require('../config');

//  签到成功自动抽奖一次(免费的)
// console.log(process.env)
if (!TIEBA) {
  console.log(`获取不到cookie,请检查设置`)
} else {
  //  百度贴吧签到
  service.checkInBaiDu(TIEBA).then(() => {
    console.log(`百度贴吧签到成功`)
  }).catch(err => {
    console.log(`贴吧签到失败`, err)
  })
}
