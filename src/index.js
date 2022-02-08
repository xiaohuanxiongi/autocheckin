const service = require('../service');
const { COOKIE, BaiDu } = require('../config');
const sendEmail  = require('./email');

//  签到成功自动抽奖一次(免费的)
// console.log(process.env)

sendEmail();
// if (!COOKIE && !BaiDu) {
//   console.log(`获取不到cookie,请检查设置`)
// } else {
//   //  掘金签到
//   service.checkIn(COOKIE).then(() => {
//     service.lottery(COOKIE)
//   }).catch(err => {
//     console.log('掘金签到失败', err)
//   })
//   //  百度贴吧签到
//   service.checkInBaiDu(BaiDu).then(() => {
//     console.log(`百度贴吧签到成功`)
//   }).catch(err => {
//     console.log(`贴吧签到失败`, err)
//   })
// }

/**
 * 计算价格
 * @param oldTotalPic 原来的总金额
 * @param newTotalPic 现在的总金额
 * @param oldNumber 原来的总数
 * @param newNumber 现在的总数
 */
function count(oldTotalPic, newTotalPic, oldNumber, newNumber) {
  return ((oldTotalPic + newTotalPic) / (oldNumber + newNumber)).toFixed(4)
}
