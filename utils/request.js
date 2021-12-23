const axios = require('axios');

const service = axios.create({
 headers: {
   origin: 'https://juejin.cn',
   pragma: 'no-cache',
   referer: 'https://juejin.cn/',
   'sec-ch-ua':
     '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
   'sec-ch-ua-mobile': '?0',
   'sec-fetch-dest': 'empty',
   'sec-fetch-mode': 'cors',
   'sec-fetch-site': 'same-site',
   'User-Agent':
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
 }
});

//  请求拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

//  响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    //  成功
    console.log('请求成功', res)
  }, error => {
    console.log('请求失败', error)
  }
);


module.exports = service;
