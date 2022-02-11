const axios = require('axios');
const qs = require('qs');

const header = {
  'juejin': {
    origin: 'https://juejin.cn',
    pragma: 'no-cache',
    referer: 'https://juejin.cn/',
    'sec-ch-ua':
      '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
  },
  'baidu': {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Host: 'tieba.baidu.com',
    Origin: 'https://tieba.baidu.com',
    Referer: 'https://tieba.baidu.com/index.html',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': "macOS",
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

const service = axios.create({

});

//  请求拦截器
service.interceptors.request.use(config => {
  config.headers = Object.assign({}, header[config.name], config.headers)
  return config;
}, error => {
  return Promise.reject(error);
});

//  响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    //  成功
    if (res.err_no === 0 || res.no === 0) {
      return Promise.resolve(res.data)
    } else if (response.status === 200) {
      //  用于判断语录是否正常返回,由于此接口可能会由于网络原因请求不到
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  }, error => {
    console.log('请求失败', error)
  }
);


module.exports = service;
