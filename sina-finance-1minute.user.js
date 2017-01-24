// ==UserScript==
// @name         sina-finance-1minitue
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        http://finance.sina.com.cn/h5charts/tchart.html*
// @grant        none
// @author       lgh06
// @require      https://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js
// @run-at       document-idle
// ==/UserScript==




(function() {
    'use strict';

    if(window.opener) return;
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = document.location.search.substr(1).match(reg);
        if (r !== null) return unescape(r[2]); return null;
    }

    var $ = jQuery.noConflict();
    var symbol = getQueryString('symbol') || 'sh600103';
    var year = 2008; //you can modify year.
    var month = 1; //do not modify this.
    var date = 1;//do not modify this.
    var url = (y,m,d)=> {
        y = y || year;
        m = m || month;
        d = d || date;
        return `http://finance.sina.com.cn/h5charts/tchart.html?symbol=${symbol}&date=${y}-${m}-${d}&rangeselector=true&indicator=tvol`;
    };
    console.log(window.parent,window.opener);
    var time = 0;
    setInterval(()=>{
        if(!window.L_DEBUG) return;
        time++;
        if(year >= 2017 && month >= 1 && date>=2) return;

        date = 2;

        if(month == 13) month = 1;
        if(time!=1 && (time-1) % 12 === 0)  year++;
        var c = window.open(url());
        setTimeout(()=>{
            c.close();
        },5000);
        console.log(year,month,date);
        month++;///
    },6000);
})();
