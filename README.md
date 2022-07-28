<div align="center">
<h1 align="center">自动签到脚本</h1>

[![GitHub stars](https://img.shields.io/github/stars/xiaohuanxiong0985/autocheckin?style=flat-square)](https://github.com/xiaohuanxiong0985/autocheckin/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xiaohuanxiong0985/autocheckin?style=flat-square)](https://github.com/xiaohuanxiong0985/autocheckin/network)

</div>

# 自动签到脚本 - 基本操作

1.  点击`settings > Secrets`;
2.  点击`New repository secret`;
3.  在`Name`输入`JUEJIN`或`TIEBA`;
4.  在`Value`输入从掘金或者贴吧获取到的`cookie`;
5.  点击`Actions`开启流;

##  2022-07-28更新
1.  修改为当签到失败才发送邮件进行通知;

##  2022-04-14更新
1.  新增掘金粘福气功能;

##  2022-03-25更新
1.  新增工作流。可以一次签到三个，并发送邮件通知签到状态；
2.  新增`QQ`字段，用于发送邮件时需要添加相对应的`QQ`、`EMAIL`变量；
4.  当前会发邮件的工作流分别为`自动签到-全部`，`自动签到-掘金`，使用对应工作流时需要添加对应变量；
3.  添加工作流时，bilibili需要主要转义，要用`""`双引号来引入`cookie`；

##  2022-03-11更新
1.  新增百度贴吧tbs自动获取接口,修复tbs过期后不能继续签到问题;
2.  修改签到时间为晚上2点，避免早上签到失败；

##  2022-02-08更新

1.  新增bilibili直播签到;
2.  新增`BILI`字段,从bilibili直播获取`cookie`;
3.  操作流程与基本操作一致.只是名称修改为`BILI`;

##  2022-02-07更新

1.  新增语录接口,用于签到;
2.  对签到成功后的内容进行了修改;
3.  修改签到时间为早上8点;

##  2022-02-03更新

1.  新增发送邮件功能,签到成功后会发送邮件,失败则不发送;
2.  新增发送邮件功能运行需要进行如下操纵:
    1.  在`Secrets`中新增`EMAIL`名称;
    2.  填入从`邮箱 -> 设置 -> 账户 -> POP3/SMTP服务`获取的授权码;
    3.  重新开启`Actions`流,进行自动执行;
3.  注: 改功能暂时只接入了掘金签到.需要引入别的签到的话引入方法就行;
