const service = require('../service');
const { BILI } = require('../config');

//  bilibili直播自动签到
if (!BILI) {
  console.log(`获取不到哔哩哔哩cookie,请检查设置`)
} else {
  service.biliLiveService(BILI).then((res) => {
    console.log(`bilibili直播签到成功: `, res)
  }).catch(err => {
    console.log(`bili直播签到失败: `, err)
  })
}
