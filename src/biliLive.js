const service = require('../service');
const { BILI } = require('../config');
const sendEmail  = require('./email');

//  bilibili直播自动签到
if (!BILI) {
  console.log(`获取不到哔哩哔哩cookie,请检查设置`)
} else {
  service.biliLiveService(BILI).then((res) => {
    console.log(`bilibili直播签到成功: `, res)
  }).catch(err => {
    sendEmail(false, [{ msg: 'bili直播签到失败' }]);
    console.log(`bili直播签到失败: `, err)
  })
}
