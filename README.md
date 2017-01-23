### 前后结合搞数据

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

腾讯股票接口 参见 http://blog.csdn.net/recordme/article/details/50985103
