### 前后结合搞数据  
目前支持A股个股的日K线和历史1分钟线数据,json格式。  
http://finance.sina.com.cn/
### Usage
需要安装Nodejs，>=6.9
```
npm i
npm start
```

然后配置浏览器代理，建议使用SwitchyOmega
将
```
http://finance.sina.com.cn/sinafinancesdk/js/chart/h5t.js
http://finance.sina.com.cn/sinafinancesdk/js/chart/h5k.js
http://finance.sina.com.cn/sinafinancesdk/js/sf_sdk.js
```
都代理到```http://127.0.0.1:8402```  

打开 http://finance.sina.com.cn/realstock/company/sh600050/nc.shtml  （或者其它A股页面）  
这样，你在看日K线的时候 就会下载单只股票所有的K线记录，json格式。  
在日K线上按回车键 会弹出当日分钟线小窗口，会下载日期对应月份的1分钟K线数据，json格式。  

**重点来了**  
安装TamperMonkey插件，安装sina-finance-1minute.user.js  
此时在小窗口上调出console，输入```L_DEBUG = true``` 稍等，就会自动打开关闭好多页面，  
最后会下载一个包含一分钟线历史数据的json文件。从你在K线图上按回车的年份开始。  

**注意：**  
请允许弹出窗口，允许后关闭小窗口，重新在日K线上回车，在新弹出的小窗口内执行console  
和```L_DEBUG = true```，避免js执行报错，逻辑混乱。  



#### 以下是艰难历程。

新浪股票的日K线数据加密了……  
http://finance.sina.com.cn/realstock/company/sh600103/nc.shtml  


查看网络请求，发现了可疑目标js文件：  
http://finance.sina.com.cn/realstock/company/sh600103/hisdata/klc_kl.js?d=2017_1_23  
发现可疑变量：
var KLC_KL_sh600103=  


Command+Option+F 搜索KLC_KL  
在 http://finance.sina.com.cn/sinafinancesdk/js/chart/h5k.js 内发现可疑语句  

启动本地服务器，修改原文件，添加console.save方法，目标位置使用console.save  

浏览器使用SwitchyOmega 代理h5k.js到本地h5k.js  
OK  

青山纸业 600103 日K线历史数据到手。  

再使用GreaseMonkey之类的 手动点击，切换不同股票，比如以下关键代码：  
```  
jQuery('[data-id=KKE_tab_kd]').find('ul').show().find('li:eq(1)').click()
```  


新浪 历史1分钟K线纪录：  
http://finance.sina.com.cn/h5charts/tchart.html?symbol=sh600103&date=2014-10-21&rangeselector=true&indicator=tvol  

配置好代理后 配合GreaseMonkey和目录下的.user.js文件使用。



### 其它接口
腾讯股票接口以及其它接口 参见 http://blog.csdn.net/recordme/article/details/50985103  
以及tushare。
