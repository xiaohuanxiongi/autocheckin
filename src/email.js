//  自动发送邮件
const service = require('../service');
const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
const { EMAIL } = require('../config');

const time = dayjs().format('YYYY-MM-DD')

let msg = `今天也是充满希望的一天呢!`;

function sendEmail (status) {
  //  获取每日语录
  service.ylService().catch(res => {
    msg = res;
  }).finally(err => {
    if (EMAIL) {
      //  邮件的一些基本信息.
      const data = {
        service: `QQ`,
        email:'530785139@qq.com',
        content:`<p>${status ? '签到成功' : '签到失败'}</p>
      <p>${time}</p>
      <p>${status ? msg : '签到失败了,请检查token是否过期'}</p>
    `
      }
      let transporter = nodemailer.createTransport({
        service: data.service, // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // SSL安全链接
        auth: {   //发送者的账户密码
          user: data.email, //账户
          pass: EMAIL, //smtp授权码，到邮箱设置下获取
        }
      });
      let mailOptions = {
        from: `香辣脆小浣熊<${data.email}>`, // 发送者昵称和地址
        to: data.email, // 接收者的邮箱地址
        subject: `${status ? '签到成功' : '签到失败'}`, // 邮件主题
        html: data.content
      };
      //发送邮件
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          //  如果发送失败,显示失败原因
          return console.log(error);
        }
        console.log('邮件发送成功');
      });
    } else {
      console.log(`没有设置邮件授权码`);
    }
  })
}


module.exports = sendEmail
