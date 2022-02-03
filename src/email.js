//  自动发送邮件
const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
const { EMAIL } = require('../config');

const time = dayjs().format('YYYY-MM-DD')

function sendEmail () {
  if (EMAIL) {
    const data = {
      email:'530785139@qq.com',
      content:`<p>掘金签到成功</p>
      <p>${time}</p>
      <p>今天也是充满希望的一天呢!</p>
    `
    }
    let transporter = nodemailer.createTransport({
      service: 'QQ', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // SSL安全链接
      auth: {   //发送者的账户密码
        user: '530785139@qq.com', //账户
        pass: EMAIL, //smtp授权码，到邮箱设置下获取
      }
    });
    let mailOptions = {
      from: '<530785139@qq.com>', // 发送者昵称和地址
      to: data.email, // 接收者的邮箱地址
      subject: '签到成功', // 邮件主题
      html: data.content
    };
    //发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('邮件发送成功 ID：', info.messageId);
    });
  } else {
    console.log(`没有设置邮件授权码`);
  }
}


module.exports = sendEmail
