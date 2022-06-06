const service = require('../service');
const { JUEJIN, TIEBA, BILI, QQ, EMAIL } = require('../config');
const sendEmail  = require('./email');

//  掘金
function juejin() {
  return new Promise((resolve, reject) => {
    let text = '未签到';
    if(JUEJIN) {
      service.checkIn(JUEJIN).then(_ => {
        service.lottery(JUEJIN);
        service.getBigService(JUEJIN).then((res) => {
          const id = res.lotteries[0]['user_id'];
          service.luckyService(id, JUEJIN);
        })
        text = '签到成功';
        resolve(`掘金签到：${text}`);
      }).catch(err => {
        text = '签到失败';
        console.log('掘金签到失败：', err);
        reject(`掘金签到：${text}`);
      })
    } else {
      text = '未设置cookie';
      reject(`掘金签到：${text}`);
    }
  })
}

//  百度贴吧
function tieba() {
  return new Promise((resolve, reject) => {
    let text = '未签到';
    if(TIEBA) {
      service.getTbs(TIEBA).then(res => {
        const tbs = res.tbs;
        service.checkInBaiDu({ tbs }, TIEBA).then(() => {
          text = '签到成功';
          resolve(`百度贴吧签到：${text}`);
        }).catch(err => {
          text = '签到失败';
          console.log(`贴吧签到失败`, err);
          reject(`百度贴吧签到：${text}`);
        })
      })
    } else {
      text = '未设置cookie';
      reject(`百度贴吧签到：${text}`);
    }
  })
}

//  哔哩哔哩
function bili() {
  return new Promise((resolve, reject) => {
    let text = '未签到';
    if (BILI) {
      service.biliLiveService(BILI).then((res) => {
        text = '签到成功';
        resolve(`哔哩哔哩签到：${text}`);
      }).catch(err => {
        text = '签到失败';
        console.log(`bili直播签到失败: `, err);
        reject(`哔哩哔哩签到：${text}`);
      })
    } else {
      text = '未设置cookie';
      reject(`哔哩哔哩签到：${text}`);
    }
  })
}

async function all() {
  Promise.all([juejin(), tieba(), bili() ]).then(res => {
    // sendEmail(true, res);
  }).catch((err) => {
    sendEmail(true, err);
  })
}

all();
