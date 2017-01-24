(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console);

xh5_define("datas.k", ["utils.util"], function(e) {
  "use strict";
  var n = e.load
    , t = e.dateUtil
    , a = e.kUtil
    , r = e.xh5_S_KLC_D
    , o = 0 == location.protocol.indexOf("https:");
  return new function() {
    this.VER = "2.5.5";
    var s = {
      CN: {
        MINK_URL: "http://money.finance.sina.com.cn/quotes_service/api/jsonp_v2.php/$cb/CN_MarketData.getKLineData?symbol=$symbol&scale=$scale&ma=no&datalen=1023",
        DAYK_URL: "http://finance.sina.com.cn/realstock/company/$symbol/hisdata/klc_kl.js?d=$rn",
        DAYK_RE_URL: "http://finance.sina.com.cn/realstock/newcompany/$symbol/p$dirfq.js?_=$rn",
        RE_VAR: "$symbol$dirfq"
      },
      HK: {
        MINK_URL: "",
        DAYK_URL: "http://finance.sina.com.cn/stock/hkstock/$symbol/klc_kl.js?d=$rn"
      },
      US: {
        MINK_URL: "http://stock.finance.sina.com.cn/usstock/api/jsonp_v2.php/$cb/US_MinKService.getMinK?symbol=$symbol&type=$scale&___qn=3",
        DAYK_URL: "http://stock.finance.sina.com.cn/usstock/api/jsonp_v2.php/$cb/US_MinKService.getDailyK?symbol=$symbol&_=$rn&___qn=3"
      },
      option_cn: {
        DAYK_URL: "http://stock.finance.sina.com.cn/futures/api/jsonp_v2.php/$cb/StockOptionDaylineService.getSymbolInfo?symbol=$symbol"
      },
      forex: {
        DAYK_URL: "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/$cb/NewForexService.getDayKLine?symbol=$symbol&_=$rn",
        MINK_URL: "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/$cb/NewForexService.getMinKline?symbol=$symbol&scale=$scale&datalen=$datalen"
      },
      forex_yt: {
        DAYK_URL: "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/$cb/NewForexService.getDayKLine?symbol=$symbol&_=$rn",
        MINK_URL: "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/$cb/NewForexService.getOldMinKline?symbol=$symbol&scale=$scale&datalen=$datalen"
      },
      OTC: {
        DAYK_URL: "http://stock.finance.sina.com.cn/thirdmarket/api/jsonp.php/$cb/ThirdDataService.ThirdDailyData?symbol=$symbol&_=$rn"
      },
      CFF: {
        DAYK_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb/CffexFuturesService.getCffexFuturesDailyKLine?symbol=$symbol&_=$rn",
        MINK_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb/CffexFuturesService.getCffexFuturesMiniKLine$scalem?symbol=$symbol&_=$rn"
      },
      HF: {
        DAYK_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb/GlobalFuturesService.getGlobalFuturesDailyKLine?symbol=$symbol&_=$rn",
        INIT_URL: "http://stock.finance.sina.com.cn/futures/api/jsonp.php/$cb/InterfaceInfoService.getMarket?category=hf&symbol=$symbol",
        INIT_VAR_PRE: "kke_future_"
      },
      NF: {
        DAYK_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb/InnerFuturesNewService.getDailyKLine?symbol=$symbol&_=$rn",
        MINK_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb/InnerFuturesNewService.getFewMinLine?symbol=$symbol&type=$scale",
        INIT_URL: "http://stock.finance.sina.com.cn/futures/api/jsonp.php/$cb/InterfaceInfoService.getMarket?category=nf&symbol=$symbol",
        INIT_VAR_PRE: "kke_future_"
      }
    }
      , i = function() {
      return {
        msg: "",
        data: null
      }
    }
      , l = function(n, r, o) {
      var s = k(o)
        , i = o.symbol
        , l = o.newthour
        , c = 1
        , u = s.market;
      "CN" == u && (c = r && /[gz]/.test(r.type) ? 10 : e.isRepos(i) ? 10 : 100),
      n || (n = []);
      var p = 0 / 0
        , m = "";
      if (r && r.date) {
        var d, f = r.date, h = !1;
        n.length > 0 ? (d = n[n.length - 1],
        f || (f = d.date)) : h = !0,
        d && ("NF" == u ? t.stbd(d.date, f) ? 1 != r.iscff && r.time >= l ? h = !0 : r.open && r.price && (d.open = r.open,
        d.high = r.high,
        d.low = r.low,
        d.close = r.price,
        d.volume = r.totalVolume * c) : f < d.date || (h = !0) : t.stbd(d.date, f) ? r.date && r.open && r.price && (d.open = r.open,
        d.high = r.high,
        d.low = r.low,
        d.close = r.price,
        d.volume = r.totalVolume * c,
        d.date = t.ddt(f)) : f < d.date || (h = l ? r.time >= l : !0)),
        h && n.push({
          open: r.open,
          high: r.high,
          low: r.low,
          close: r.price,
          volume: r.totalVolume * c,
          date: t.ddt(f)
        }),
        p = r.issueprice,
        m = r.name
      }
      if (n.length < 1)
        return [n, void 0, void 0, void 0];
      var b = !isNaN(p) && p > 0 ? p : n[0].open;
      e.oc(n[0], {
        prevclose: b,
        name: m,
        symbol: i
      });
      var v = a.mw(n, r, b, c, s.endDay)
        , g = v[0]
        , y = v[1]
        , _ = void 0;
      if (a.pd(n, null),
      a.pd(g, null),
      a.pd(y, null),
      r && r.settlement) {
        var w = n[n.length - 1];
        w.ampP = w.amplitude / r.settlement,
        w.change = w.close - r.settlement,
        w.percent = w.change / r.settlement
      }
      return e.oc(g[0], {
        name: m,
        symbol: i
      }),
      e.oc(y[0], {
        name: m,
        symbol: i
      }),
      o.ytd && (_ = a.yd(n),
      e.oc(_[0], {
        name: m,
        symbol: i
      })),
      [n, g, y, _]
    }
      , c = function(n, t, a) {
      var r = e.market(n)
        , i = r ? s[r][t ? "MINK_URL" : "DAYK_URL"] : null;
      return (o || a) && (i = e.getSUrl(i)),
      i
    }
      , u = function(n, t) {
      var a, r, i = e.market(n);
      return s[i] && (a = s[i].DAYK_RE_URL,
      r = s[i].RE_VAR),
      a && (o || t) && (a = e.getSUrl(a)),
      {
        url: a,
        VAR: r
      }
    }
      , p = function(n, t) {
      var a, r, i, l = e.market(n);
      return s[l] && (a = s[l].INIT_URL,
      r = s[l].INIT_VAR,
      i = s[l].INIT_VAR_PRE),
      a && (o || t) && (a = e.getSUrl(a)),
      {
        url: a,
        VAR: r,
        varPre: i
      }
    }
      , m = {
      xh5Fund: function(e) {
        for (var n, t, a, r, o = new Date, s = [o.getFullYear(), o.getMonth() + 1, o.getDate()].join("_"), i = e.data, l = e.symbol, c = i.split("#"), u = [], p = [], m = [], d = [], f = [], h = [], b = c.length; b--; )
          r = c[b].split(","),
          n = r[0].slice(0, 4),
          t = r[0].slice(4, 6),
          a = r[0].slice(6, 8),
          a = [n, t, a].join("-"),
          u.push({
            d: a,
            c: r[1]
          }),
          p.push({
            d: a,
            c: r[2]
          }),
          m.push({
            d: a,
            c: r[3]
          }),
          d.push({
            d: a,
            c: r[4]
          }),
          f.push({
            d: a,
            c: r[5]
          }),
          h.push({
            d: a,
            c: r[6]
          });
        var v = ["_dwjz_", l, s].join("")
          , g = ["_ljjz_", l, s].join("")
          , y = ["_lshb_", l, s].join("")
          , _ = ["_pwbfbyd_", l, s].join("")
          , w = ["_pwbfbjd_", l, s].join("")
          , N = ["_pwbfbnd_", l, s].join("")
          , $ = ["_fh_", l, s].join("");
        window[v] = u,
        window[g] = p,
        window[y] = m,
        window[_] = d,
        window[w] = f,
        window[N] = h,
        window[$] = {
          fhday: e.fhday,
          fhvalue: e.fhvalue,
          fhchaifen: e.fhchaifen
        }
      }
    }
      , d = function(e) {
      var n = [];
      if (e)
        for (var t, a, r = 0, o = e.length; o > r; r++) {
          a = e[r],
          t = Number(a.c);
          var s = a.d.split("-");
          n.push({
            close: t,
            open: Number(a.o) || t,
            high: Number(a.h) || t,
            low: Number(a.l) || t,
            volume: Number(a.v) || 0,
            date: new Date(Number(s[0]),Number(s[1]) - 1,Number(s[2]),0)
          })
        }
      return n
    }
      , f = function(e) {
      var n = [];
      if (e)
        for (var t, a, r = e.split("|"), o = 0, s = r.length; s > o; o++)
          t = r[o].split(","),
          t.length < 5 || (a = t[0].split("-"),
          n.push({
            open: Number(t[1]),
            low: Number(t[2]),
            high: Number(t[3]),
            close: Number(t[4]),
            volume: Number(t[5]),
            date: new Date(Number(a[0]),Number(a[1]) - 1,Number(a[2]),0)
          }));
      return n
    }
      , h = function(e) {
      var n = [];
      if (e && e.length)
        for (var t, a, r = .001, o = e.split("|"), s = 0, i = 0, l = o.length; l > i; i++)
          t = o[i].split(","),
          t.length < 5 || (a = t[0].split("-"),
          s = Number(t[4]) || s,
          n.push({
            open: Number(t[1]) || s,
            low: Number(t[2]) || s,
            high: Number(t[3]) || s,
            close: Number(t[4]) || s,
            volume: Number(t[5]) * r,
            date: new Date(Number(a[0]),Number(a[1]) - 1,Number(a[2]),0)
          }));
      return n
    }
      , b = function(e) {
      var n = [];
      if (e)
        for (var t, a, r, o = 0, s = e.length; s > o; o++)
          t = e[o],
          a = t[0].split("-"),
          r = Number(t[4]),
          n.push({
            date: new Date(Number(a[0]),Number(a[1]) - 1,Number(a[2]),0),
            open: Number(t[1]) || r,
            high: Number(t[2]) || r,
            low: Number(t[3]) || r,
            close: r,
            volume: Number(t[5]) || 0
          });
      return n
    }
      , v = function(e) {
      var n = [];
      if (e)
        for (var t, a, r = e.length; r--; )
          t = e[r],
          a = Number(t[4]),
          n.push({
            day: t[0],
            open: Number(t[1]) || a,
            high: Number(t[2]) || a,
            low: Number(t[3]) || a,
            close: a,
            volume: Number(t[5]) || 0
          });
      return n
    }
      , g = function(e) {
      var n = [];
      if (e)
        for (var a, r, o = 0, s = e.length; s > o; o++)
          a = e[o],
          r = Number(a.close),
          n.push({
            date: t.sd(a.date),
            volume: Number(a.volume),
            open: Number(a.open) || r,
            high: Number(a.high) || r,
            low: Number(a.low) || r,
            close: r
          });
      return n
    }
      , y = function(e, n) {
      if (!e)
        return null;
      for (var t, a = n.vu || 1, r = 0, o = e.length; o > r; r++)
        t = e[r],
        t.high *= 1,
        t.open *= 1,
        t.low *= 1,
        t.close *= 1,
        t.volume *= a;
      return e
    }
      , _ = function(e) {
      if (!e)
        return null;
      for (var n, t = 0, a = e.length; a > t; t++)
        n = e[t],
        n.high = 1 * n.h,
        n.open = 1 * n.o,
        n.low = 1 * n.l,
        n.close = 1 * n.c,
        n.volume = 1 * n.v,
        n.day = n.d;
      return e
    }
      , w = function(n, a, r, o) {
      for (var s, i, l = "DINIW" == o.hqSb ? 6 : 7, c = a.length; c-- && 0 != c; )
        for (var u = a[c], p = a[c - 1], m = t.ssd(u.day), d = t.ssd(p.day), f = c; d.setMinutes(d.getMinutes() + r) < m; ) {
          if (s = d.getDay(),
          6 == s) {
            if (i = d.getHours(),
            i >= l)
              continue
          } else {
            if (0 == s)
              continue;
            if (1 == s && (i = d.getHours(),
            l > i))
              continue
          }
          var h = e.clone(p, null);
          h.day = t.dss(d),
          a.splice(f++, 0, h)
        }
      for (var b = a[a.length - 1], v = t.ssd(b.day); v.setMinutes(v.getMinutes() + r) < n; ) {
        if (s = v.getDay(),
        6 == s) {
          if (i = v.getHours(),
          i >= l)
            continue
        } else {
          if (0 == s)
            continue;
          if (1 == s && (i = v.getHours(),
          l > i))
            continue
        }
        var g = {
          open: b.close,
          high: b.close,
          low: b.close,
          close: b.close,
          day: t.dss(v),
          prevclose: b.prevclose
        };
        a.push(g),
        b = g,
        v = t.ssd(b.day)
      }
    }
      , N = function(e, n) {
      var a = "DINIW" == e.symbol ? 6 : 7
        , r = n[n.length - 1].day
        , o = r.split(" ")[0];
      if (t.stbds(e.date, o, null)) {
        var s, i, l, c = e.prevclose, u = e.date.getHours();
        if (a > u) {
          var p, m = !1;
          for (s = n.length; s-- && (p = !1,
          l = n[s],
          i = Number(l.day.split(" ")[1].split(":")[0]),
          !m && a > i ? p = !0 : i >= a && (m = !0,
          p = !0),
          p); )
            l.prevclose = c
        } else
          for (s = n.length; s-- && (l = n[s],
          i = Number(l.day.split(" ")[1].split(":")[0]),
          i >= a); )
            l.prevclose = c
      }
    }
      , $ = function(e, n) {
      if (!e)
        return null;
      var a, r, o = Number(n.scale);
      n.hqObjs && (a = n.hqObjs[n.hqSb],
      r = new Date(1e3 * n.hqObjs[n.withsymbol].hqstr)),
      r || (r = new Date);
      var s = 60 * r.getTimezoneOffset() * 1e3;
      r.setTime(r.getTime() + s),
      r.setHours(r.getHours() + 8);
      for (var i, l, c = 0, u = e.length; u > c; c++)
        if (l = e[c],
        l.high = 1 * l.h,
        l.open = 1 * l.o,
        l.low = 1 * l.l,
        l.close = 1 * l.c,
        o > 1) {
          var p = t.ssd(l.d);
          p.setMinutes(p.getMinutes() + o),
          l.day = t.dss(p)
        } else
          l.day = l.d,
          isNaN(l.p) || (i = l.p),
          isNaN(i) && (i = l.o),
          l.prevclose = 1 * i;
      return w(r, e, o, n),
      1 == o && a && N(a, e),
      e
    }
      , k = function(n) {
      var t, a = n.symbol, r = n.volunit || 1, o = e.market(a), s = !1;
      n.dataurl && n.dataurl.length > 1 ? t = n.dataurl : (t = c(a, !!n.ismink, n.ssl),
      /^(CN|HK)/.test(o) && (s = !0));
      var i, l, u, p = a, m = a;
      switch (o) {
      case "HK":
        p = 0 == a.indexOf("rt_") ? a : "rt_" + a,
        m = p.substring(5);
        break;
      case "US":
        p = 0 == a.indexOf("gb_") ? a : "gb_" + a,
        m = p.split("_")[1],
        m = m.replace("$", "."),
        i = _;
        break;
      case "CN":
        r = .01;
        break;
      case "forex":
      case "forex_yt":
        i = $,
        l = f,
        u = 5;
        break;
      case "OTC":
        m = a.replace("sb", "otc_"),
        l = h;
        break;
      case "CFF":
        var y = p.split("_");
        m = y[y.length - 1],
        l = b,
        i = v;
        break;
      case "HF":
        p = 0 == a.indexOf("hf_") ? a : "hf_" + a,
        m = p.split("_")[1],
        l = g;
        break;
      case "NF":
        p = 0 == a.indexOf("nf_") ? a : "nf_" + a,
        m = p.split("_")[1],
        l = d,
        i = _
      }
      return n.customksb && (m = n.customksb),
      {
        hqSb: p,
        kSb: m,
        dayDataHandler: l,
        minDataHandler: i,
        endDay: u,
        kUrl: t,
        isCompressData: s,
        vu: r,
        market: o
      }
    }
      , D = function(t, r) {
      var o = k(t)
        , s = new Date
        , l = [s.getFullYear(), s.getMonth() + 1, s.getDate()].join("_")
        , c = t.scale
        , u = t.$scale || "$scale"
        , p = t.datalen || 828
        , m = "_" + o.kSb.replace(/\W/g, "") + "_" + c + "_" + s.getTime()
        , d = function(s) {
        var d = s ? s.dataObj : void 0
          , f = i();
        n(o.kUrl.replace("$symbol", o.kSb).replace(u, c).replace("$cb", "var%20" + m + "=").replace("$rn", l).replace("$datalen", p), function() {
          var n = window[m]
            , s = t.dataformatter || o.minDataHandler || y;
          if (n = s(n, {
            vu: o.vu,
            withsymbol: t.withsymbol,
            hqSb: o.hqSb,
            hqObjs: d,
            scale: c
          })) {
            var i = {};
            1 == c && /^forex/.test(o.market) && (i.usePc = !0),
            a.pd(n, i),
            f.data = n
          } else
            f.msg = "error";
          e.isFunc(r) && r(f)
        }, function() {
          f.msg = "error",
          e.isFunc(r) && r(f)
        })
      };
      t.withsymbol ? KKE.api("datas.hq.get", {
        symbol: [t.withsymbol, o.hqSb].join(","),
        cancelEtag: !0,
        ssl: t.ssl
      }, d) : d()
    }
      , K = function(t, a) {
      var o = k(t)
        , s = function(s) {
        var c = s ? s.data[0] : void 0
          , u = i()
          , p = new Date
          , m = [p.getFullYear(), p.getMonth() + 1, p.getDate()].join("_")
          , f = "_" + o.kSb.replace(/\W/g, "") + m;
        n(o.kUrl.replace("$symbol", o.kSb).replace("$rn", m).replace("$cb", "var%20" + f + "="), function() {
          var n;
          if (o.isCompressData){
            n = window["KLC_KL_" + o.kSb],
            n = r(n);
            console.log(n)
            console.save(n)
          }
          else {
            n = window[f];
            var s = t.dataformatter || o.dayDataHandler || d;
            n = s(n)
          }
          var i = l(n, c, t);
          i ? u.data = {
            hq: c,
            day: i[0],
            week: i[1],
            month: i[2],
            ytd: i[3] || null
          } : u.msg = "error",
          e.isFunc(a) && a(u)
        }, function() {
          if (c) {
            var n = l(null, c, t);
            n ? u.data = {
              hq: c,
              day: n[0],
              week: n[1],
              month: n[2],
              ytd: n[3] || null
            } : u.msg = "error",
            e.isFunc(a) && a(u)
          } else
            u.msg = "error",
            u.data = {
              hq: c
            },
            e.isFunc(a) && a(u)
        })
      };
      "undefined" == typeof o.market || "UNKNOWN" === o.market ? s() : KKE.api("datas.hq.get", {
        symbol: o.hqSb,
        cancelEtag: !0,
        withI: !0,
        ssl: t.ssl
      }, s)
    }
      , F = function(n, t) {
      var r = n.staticdata
        , o = i();
      if (n.ismink)
        a.pd(r, null),
        o.data = r;
      else {
        var s = l(r, null, n);
        o.data = {
          day: s[0],
          week: s[1],
          month: s[2],
          ytd: s[3] || null
        }
      }
      e.isFunc(t) && t(o)
    };
    this.get = function(n, t) {
      n.staticdata ? F(n, t) : (n.wfn && e.isFunc(m[n.wfn]) && (window[n.wfn] = m[n.wfn]),
      n.ismink ? D(n, t) : K(n, t))
    }
    ,
    this.loadReData = function(t, a) {
      var r = i()
        , o = t.symbol
        , s = u(o, t.ssl)
        , l = s.url;
      if (!l)
        return r.msg = "error",
        void (e.isFunc(a) && a(r));
      var c = t.dir
        , p = s.VAR || "";
      p = p.replace("$symbol", o).replace("$dir", c);
      var m = new Date
        , d = m.getHours();
      n(l.replace("$symbol", o).replace("$dir", c).replace("$rn", d), function() {
        var n = window[p];
        window[p] = null,
        n && n[0].total > 0 ? r.data = n[0].data : r.msg = "error",
        e.isFunc(a) && a(r)
      }, function() {
        r.msg = "error",
        e.isFunc(a) && a(r)
      })
    }
    ,
    this.loadHFInit = function(t, a) {
      var r = i()
        , o = t.symbol
        , s = p(o, t.ssl)
        , l = s.url
        , c = s.varPre
        , u = c + o
        , m = window[u];
      m ? (r.data = m,
      e.isFunc(a) && a(r)) : (o = o.split("hf_")[1],
      n(l.replace("$cb", "var%20" + u + "=").replace("$symbol", o), function() {
        m = window[u],
        m ? r.data = m : (window[u] = null,
        r.msg = "error, illegal data"),
        e.isFunc(a) && a(r)
      }, function() {
        r.msg = "error",
        e.isFunc(a) && a(r)
      }))
    }
    ,
    this.loadNFInit = function(t, a) {
      var r = i()
        , o = t.symbol
        , s = p(o, t.ssl)
        , l = s.url
        , c = s.varPre
        , u = c + o
        , m = window[u];
      m ? (r.data = m,
      e.isFunc(a) && a(r)) : (o = o.match(/^nf_([a-zA-Z]+)\d+$/)[1],
      n(l.replace("$cb", "var%20" + u + "=").replace("$symbol", o), function() {
        m = window[u],
        m ? r.data = m : (window[u] = null,
        r.msg = "error, illegal data"),
        e.isFunc(a) && a(r)
      }, function() {
        r.msg = "error",
        e.isFunc(a) && a(r)
      }))
    }
  }
});
;xh5_define("chart.h5k", ["cfgs.settinger", "utils.util", "utils.painter"], function(e, t, n) {
  "use strict";
  function a(a) {
    function i(e, n) {
      function i(e) {
        C.setDataRange(e),
        b && (b.linkData(e),
        b.setDataRange()),
        N && (N.linkData(e),
        N.setDataRange()),
        M && (M.linkData(e),
        M.setDataRange())
      }
      function l(e, t) {
        var n, a, i = R.get(w.URLHASH.KD), o = i.length;
        e || (n = 0),
        t || (a = o - 1);
        for (var r = 0; o > r && (isNaN(n) && i[r].date >= e && (n = r),
        isNaN(a) && i[r].date >= t && (a = r),
        isNaN(n) || isNaN(a)); r++)
          ;
        return [n, a]
      }
      function c() {
        n && (T = R),
        P.uUpdate(null, !0),
        "CN" !== u || /^(sh0|sh1|sh5|sz1|sz399)\d+/i.test(e.symbol) || R.initExtraData()
      }
      e = p({
        symbol: void 0,
        datas: {
          day: {
            wfn: void 0,
            url: void 0,
            dataformatter: void 0,
            staticdata: void 0
          },
          min: {
            wfn: void 0,
            url: void 0,
            dataformatter: void 0,
            staticdata: void 0
          }
        }
      }, e || {});
      var h = this
        , u = t.market(e.symbol)
        , g = !0;
      this.isErr = !1,
      this.symbol = e.symbol,
      this.market = u;
      var y;
      switch (u) {
      case "forex":
      case "forex_yt":
        y = "DINIW" == this.symbol ? "06:00" : "07:00";
        break;
      default:
        y = "09:30"
      }
      this.isMain = n,
      this.isCompare = !1,
      this.datas = null,
      this.dataLen = 0,
      this.nfloat = e.nfloat || 2,
      this.dataLenOffset = 0,
      this.prevclose = 0 / 0,
      this.labelMaxP = 0,
      this.labelMinP = Number.MAX_VALUE,
      this.maxPrice = 0,
      this.minPrice = Number.MAX_VALUE,
      this.rangeMax = 0,
      this.rangeMin = Number.MAX_VALUE,
      this.labelMaxVol = 0,
      this.maxVolume = 0,
      this.minPercent = Number.MAX_VALUE,
      this.maxPercent = -Number.MAX_VALUE,
      this.labelPriceCount = 0 / 0,
      this.isTotalRedraw = !0,
      this.hq = void 0,
      this.nco = void 0;
      var b, N, M, S = new _(this,e), A = e.name;
      this.getName = function() {
        return A || ""
      }
      ,
      this.viewState = $;
      var R = new function() {
        var i, o = {}, r = {
          rsAmount: void 0
        }, s = function(e, a, r, s, l) {
          if (a) {
            if (n) {
              if (e == w.URLHASH.KD && (i = t.clone(a, null)),
              s && window.datelist && h.hq) {
                var c = t.xh5_S_KLC_D(window.datelist);
                a = t.kUtil.ayd(a, c, !1, a[0].date, h.hq.date)
              }
            } else
              l || (e == w.URLHASH.KD && (i = t.clone(a, null)),
              a = t.kUtil.adbd(a, T.get(e), r, !1));
            o["k" + e] = a;
            var d = a.length
              , u = s ? I.PARAM.K_CL_NUM : I.PARAM.defaultCandleNum;
            o["k" + e + "v"] = d > u ? d - u : 0,
            o["k" + e + "b"] = d
          }
        }, l = function() {
          var e = $.viewId;
          switch (e) {
          case w.URLHASH.KDF:
          case w.URLHASH.KDB:
            e = w.URLHASH.KD;
            break;
          case w.URLHASH.KWF:
          case w.URLHASH.KWB:
            e = w.URLHASH.KW;
            break;
          case w.URLHASH.KMF:
          case w.URLHASH.KMB:
            e = w.URLHASH.KM;
            break;
          case w.URLHASH.KCLF:
          case w.URLHASH.KCLB:
            e = w.URLHASH.KCL
          }
          return e
        };
        this.get = function(e) {
          if (t.isStr(e)) {
            var n = l();
            return o["k" + n + e]
          }
          return o["k" + (e || $.viewId)]
        }
        ,
        this.set = function(e, t) {
          var n = l()
            , a = "k" + n + e;
          "undefined" != typeof o[a] && (o[a] = t)
        }
        ,
        this.getOriDK = function() {
          return i
        }
        ,
        this.initState = s,
        this.initDWMState = function(e, n) {
          var a = t.clone(n.day, null);
          s(w.URLHASH.KD, n.day),
          s(w.URLHASH.KW, n.week),
          s(w.URLHASH.KM, n.month),
          s(w.URLHASH.KCL, a, !1, !0)
        }
        ,
        this.extraDataObj = r,
        this.initExtraData = function() {
          var n = "http://stock.finance.sina.com.cn/stock/api/jsonp.php/$cb/StockService.getAmountBySymbol?_=$rn&symbol=$symbol";
          a.ssl && (n = t.getSUrl(n));
          var i = "KKE_ShareAmount_" + e.symbol;
          t.load(n.replace("$symbol", e.symbol).replace("$rn", String((new Date).getDate())).replace("$cb", "var%20" + i + "="), function() {
            var e = window[i];
            if (e) {
              for (var t, n = [], a = e.length; a--; )
                t = e[a],
                n.push({
                  amount: Number(t.amount),
                  date: m.sd(t.date)
                });
              n.length && (r.rsAmount = n)
            }
          })
        }
        ,
        this.gc = function() {
          o = null,
          r = null
        }
      }
        , C = new function() {
        var e = function() {
          h.minPrice = Number.MAX_VALUE,
          h.maxPrice = 0,
          h.minPercent = Number.MAX_VALUE,
          h.maxPercent = -Number.MAX_VALUE,
          h.maxVolume = 0,
          h.rangeMax = 0,
          h.rangeMin = Number.MAX_VALUE
        }
          , t = function() {
          for (var e, t = 0, n = h.dataLen; n > t; t++)
            e = h.datas[t],
            e.close <= 0 || (e.high > h.maxPrice && (h.maxPrice = h.rangeMax = e.high),
            e.low < h.minPrice && (h.minPrice = h.rangeMin = e.low),
            h.maxVolume = Math.max(h.maxVolume, e.volume));
          var a = v(h.maxVolume, 0, 0, !0);
          h.labelMaxVol = a[0],
          h.maxPercent = Math.max((h.maxPrice - h.prevclose) / h.prevclose, 0),
          h.minPercent = Math.min((h.minPrice - h.prevclose) / h.prevclose, 0)
        };
        this.createPlayingData = function() {
          var e, t, n = I.DIMENSION.h_k, a = n * I.DIMENSION.P_HV, i = n * (1 - I.DIMENSION.P_HV);
          e = h.labelMinP,
          t = h.labelMaxP;
          for (var o, r = h.labelMaxVol, s = h.prevclose, l = h.isTotalRedraw ? 0 : h.dataLen - h.dataLenOffset, c = I.custom.show_underlay_vol, u = h.isCompare ? "ppp" : "pp", p = h.dataLen; p > l; l++)
            o = h.datas[l],
            o.cy = d[u](o.close, e, t, n, s),
            o.oy = d[u](o.open, e, t, n, s),
            o.hy = d[u](o.high, e, t, n, s),
            o.ly = d[u](o.low, e, t, n, s),
            c && (o.vy = d.vp(o.volume, r, a) + i)
        }
        ,
        this.setDataRange = function(n) {
          var i = R.get();
          if (i) {
            $.dataLength = i.length;
            var o = $.start
              , r = $.end;
            if (isNaN(o) || isNaN(r))
              r = R.get("b"),
              o = R.get("v"),
              $.start = o,
              $.end = r;
            else {
              if (n && r + 1 >= i.length) {
                var s = i.length - r;
                $.end = r = i.length,
                (1 == a.pcm || $.viewId == w.URLHASH.K1) && (0 == o && r > 1 && r < I.PARAM.minCandleNum && (o = r - 1,
                $.start = o),
                r - o >= I.PARAM.defaultCandleNum && (o += s,
                $.start = o))
              }
              R.set("v", o),
              R.set("b", r)
            }
            switch ($.currentLength = r - o,
            $.startDate = i[o].date,
            $.endDate = i[r - 1].date,
            a.pcm) {
            case 1:
              h.prevclose = i[0].prevclose;
              break;
            case 2:
              h.prevclose = i[o].close;
              break;
            default:
              h.prevclose = o > 1 ? i[o - 1].close : i[0].prevclose || i[0].close
            }
            h.datas = i.slice(o, r),
            h.dataLen = h.datas.length,
            e(),
            t(n)
          }
        }
      }
        , P = new function() {
        var o, r = function(e) {
          return o ? (e.volume = e.totalVolume - (o.totalVolume || 0),
          e.amount = e.volume * e.price) : (o = {},
          e.volume = 0),
          o.totalVolume = e.totalVolume,
          e.avg_price = e.totalAmount / e.totalVolume || e.price,
          !0
        }, s = !1, l = function(e, n, a) {
          if (e.isUpdateTime) {
            var i = R.get(n);
            if (i && !(i.length < 1)) {
              var o = n == w.URLHASH.KD || n == w.URLHASH.KDF || n == w.URLHASH.KCL || n == w.URLHASH.KCLF
                , r = i[i.length - 1];
              if (1 == a) {
                if (r.time && !t.kUtil.spk(r.time, e.time, y, n, h.market)) {
                  if (t.kUtil.nc(i, e, n, {
                    price: e.price,
                    volume: e.volume
                  }),
                  /^forex/.test(h.market))
                    n == w.URLHASH.K1 && (r = i[i.length - 1],
                    r.prevclose = e.prevclose,
                    r.change = e.price - e.prevclose,
                    r.percent = r.change / e.prevclose);
                  else if ("NF" == h.market)
                    ;
                  else if (t.kUtil.spk("09:35", e.time, y, n)) {
                    if (n == w.URLHASH.K60) {
                      var l = e.time.split(":")
                        , c = l[0]
                        , d = l[1];
                      if (c > 10 || 10 == c && d > 30)
                        return
                    }
                    r = i[i.length - 1],
                    r.open = e.open,
                    r.open > r.high && (r.high = r.open),
                    r.open < r.low && (r.low = r.open)
                  }
                  return
                }
              } else if (2 == a) {
                if (!e.trstr)
                  return;
                t.kUtil.nc(i, e, n, {
                  price: e.price,
                  volume: 0
                })
              } else if (f(e.date, r.date))
                h.nco && ("NF" == h.market ? m.dst(r.date) < h.nco.open && e.time >= h.nco.open && e.time > h.nco.close && t.kUtil.nc(i, e, n, null) : s && e.time >= h.nco.open && (s = !1,
                t.kUtil.nc(i, e, n, null)));
              else {
                if (!(e.date > r.date))
                  return;
                h.nco ? "NF" == h.market ? e.time >= h.nco.open && t.kUtil.nc(i, e, n, null) : e.time <= h.nco.close && (s = !0) : t.kUtil.nc(i, e, n, null)
              }
              r = i[i.length - 1],
              r.close = e.price,
              r.date = m.ddt(e.date),
              n == w.URLHASH.KMS ? (r.volume = e.trvolume || 0,
              r.amount = e.tramount || 0,
              r.trbs = e.trbs,
              r.kke_cs = 0 == e.trbs ? -1 : 1) : (o ? (r.open = e.open,
              r.high = e.high,
              r.low = e.low,
              r.volume = e.totalVolume) : isNaN(r.volume) ? r.volume = e.volume : r.volume += Number(e.volume),
              r.kke_cs = r.close > r.open ? 1 : r.open > r.close ? -1 : 0);
              var u;
              1 == i.length ? u = o ? e.prevclose : r.open : (u = i[i.length - 2].close,
              e.settlement && o && (u = e.settlement)),
              /^forex/.test(h.market) && (n == w.URLHASH.K1 || n == w.URLHASH.KD) && (u = e.prevclose),
              r.change = e.price - u,
              r.percent = r.change / u,
              e.price > r.high && (r.high = e.price),
              e.price < r.low && (r.low = e.price),
              r.amplitude = r.high - r.low,
              r.ampP = r.amplitude / u,
              r.time = e.time
            }
          }
        }, c = function(e) {
          l(e, w.URLHASH.KD, 0),
          l(e, w.URLHASH.KW, 0),
          l(e, w.URLHASH.KM, 0),
          l(e, w.URLHASH.KDF, 0),
          l(e, w.URLHASH.KWF, 0),
          l(e, w.URLHASH.KMF, 0),
          l(e, w.URLHASH.KCL, 0),
          l(e, w.URLHASH.KCLF, 0),
          l(e, w.URLHASH.K1, 1),
          l(e, w.URLHASH.K5, 1),
          l(e, w.URLHASH.K15, 1),
          l(e, w.URLHASH.K30, 1),
          l(e, w.URLHASH.K60, 1),
          l(e, w.URLHASH.K240, 1),
          l(e, w.URLHASH.KMS, 2)
        }, d = new function() {
          this.check = function(e) {
            if (n)
              return !0;
            var a = $.viewId
              , i = T.get(a);
            if (!i || i.length < 1)
              return !1;
            var o = i[i.length - 1];
            if (e.date > o.date)
              if ("mink" == w.URLHASH.gt($.viewId).type) {
                if (!t.kUtil.spk(o.time, e.time, "00:00", a, h.market))
                  return !1
              } else if (!f(e.date, o.date))
                return !1;
            return !0
          }
        }
        ;
        this.uUpdate = function(n, o, s, l) {
          var u, p = {
            symbol: e.symbol,
            ssl: a.ssl
          };
          s ? (u = "datas.hq.parse",
          p.hqStr = s,
          p.market = l) : (u = "datas.hq.get",
          p.delay = !0,
          p.cancelEtag = o),
          KKE.api(u, p, function(a) {
            var o = a.dataObj[e.symbol];
            if (o && o.date && r(o)) {
              if (A = A || o.name || "",
              !d.check(o))
                return;
              h.hq = o,
              c(o),
              i(!0),
              t.isFunc(n) && n()
            }
          })
        }
      }
        , j = new function() {
        var i, o = function(e, n) {
          k.re(w.e.K_DATA_LOADED, n),
          t.isFunc(e) && e()
        }, r = function(e) {
          if (!h.hq || !h.hq.date)
            return null;
          for (var t = m.ddt(h.hq.date), n = "_" + m.ds(t, "_"), a = !0; !e[n]; ) {
            a = !1;
            var i = t.getDate();
            t.setDate(--i),
            n = "_" + m.ds(t, "_")
          }
          var o = e[n];
          return {
            factor: o,
            isToday: a
          }
        }, s = function(e, a, i, o) {
          if (e) {
            var r, s, l, c, d, u, p, f, v, g, y, b, N = -828 == e, M = R.getOriDK();
            if ("q" == o) {
              if (s = w.URLHASH.KDF,
              R.initState(s, t.clone(M, null), !1, !1, !0),
              r = R.get(s),
              b = r.length,
              !N) {
                var _ = (a ? h.hq.price : h.hq.prevclose) / e;
                for (g = 0; b > g; g++) {
                  p = r[g],
                  f = "_" + m.ds(p.date, "_"),
                  v = Number(i[f]);
                  var S = p.close;
                  isNaN(v) ? v = S / _ : p.close = _ * v,
                  y = p.close / S,
                  p.high = p.high * y,
                  p.low = p.low * y,
                  p.open = p.open * y,
                  0 == g && (u = p.prevclose,
                  isNaN(u) || 0 >= u ? u = p.open : (u = p.prevclose * y,
                  p.prevclose = u)),
                  p.amplitude = p.high - p.low,
                  p.ampP = p.amplitude / u,
                  p.change = p.close - u,
                  p.percent = p.change / u,
                  u = p.close
                }
              }
            } else if (s = w.URLHASH.KDB,
            R.initState(s, t.clone(M, null), !1, !1, !0),
            r = R.get(s),
            b = r.length,
            !N)
              for (g = 0; b > g; g++) {
                if (p = r[g],
                f = "_" + m.ds(p.date, "_"),
                v = Number(i[f]),
                isNaN(v)) {
                  if (0 >= g)
                    continue;
                  var k = r[g - 1];
                  v = p.percent * k.close + k.close
                }
                y = v / p.close,
                p.close = v,
                p.high = p.high * y,
                p.low = p.low * y,
                p.open = p.open * y,
                0 == g && (u = p.prevclose,
                isNaN(u) || 0 >= u ? u = p.open : (u = p.prevclose * y,
                p.prevclose = u)),
                p.amplitude = p.high - p.low,
                p.ampP = p.amplitude / u,
                p.change = p.close - u,
                p.percent = p.change / u,
                u = p.close
              }
            var I;
            1 == b && (p = r[b - 1],
            I = {
              open: p.open,
              high: p.high,
              low: p.low,
              close: p.close,
              price: p.close,
              volume: p.volume,
              totalVolume: p.volume,
              date: m.dd(p.date)
            }),
            l = t.kUtil.mw(r, I, null, null, 0 / 0),
            d = l[0],
            c = l[1],
            t.kUtil.pd(d, null),
            t.kUtil.pd(c, null),
            R.initState(w.URLHASH["q" == o ? "KWF" : "KWB"], d),
            R.initState(w.URLHASH["q" == o ? "KMF" : "KMB"], c);
            var L = t.clone(r, null);
            R.initState(w.URLHASH["q" == o ? "KCLF" : "KCLB"], L, !1, !0),
            n || R.initState(s, r)
          }
        }, l = function(t) {
          var n = w.URLHASH.gt($.viewId)
            , i = n.dir
            , l = {
            symbol: e.symbol,
            dir: i,
            ssl: a.ssl
          };
          F.show(),
          KKE.api("datas.k.loadReData", l, function(e) {
            F.hide();
            var n = !0
              , a = e.data;
            if (a) {
              var l = r(a);
              l && (n = !1,
              s(l.factor, l.isToday, a, i))
            }
            n && s(-828, !1, null, i),
            o(t, {
              viewId: $.viewId
            })
          })
        }, c = function(e, t) {
          var a = w.URLHASH.gt(i)
            , r = "mink" == a.type ? R.initState : R.initDWMState;
          F.show(),
          KKE.api("datas.k.get", e, function(s) {
            F.hide();
            var l = i;
            if (i = 0 / 0,
            "error" == s.msg) {
              if (h.isErr = !0,
              n)
                if (s.data && s.data.hq) {
                  var c;
                  if (s.data.hq.status)
                    switch (s.data.hq.status) {
                    case 2:
                      c = w.notlisted;
                      break;
                    case 3:
                      c = w.delisted
                    }
                  else
                    c = w.norecord;
                  c && V.showTip({
                    txt: c,
                    parent: x,
                    noBtn: !0
                  })
                } else
                  V.showTip({
                    txt: w.nodata,
                    parent: x
                  })
            } else
              s.data.hq && (h.hq = s.data.hq),
              r(a.baseid, s.data, e.ismink);
            o(t, {
              viewId: l
            })
          })
        }, d = function(t) {
          KKE.api("datas.hq.get", {
            symbol: e.symbol,
            cancelEtag: !0,
            ssl: a.ssl
          }, function(n) {
            var a = n.dataObj[e.symbol]
              , i = [{
              close: a.price,
              open: a.open,
              high: a.high,
              low: a.low,
              volume: 0,
              prevclose: a.prevclose,
              amplitude: a.high - a.low,
              ampP: (a.high - a.low) / a.prevclose,
              change: a.price - a.prevclose,
              date: a.date,
              day: m.ds(a.date, "/"),
              time: a.time,
              percent: a.price - a.prevclose / a.prevclose,
              kke_cs: 0
            }];
            R.initState($.viewId, i, !0),
            o(t, {
              viewId: $.viewId
            })
          })
        }, u = function(t) {
          var n, i, o = $.viewId, r = w.URLHASH.gt(o);
          if (h.nco && h.nco.open)
            i = h.nco.open,
            y = i;
          else {
            var s = new Date
              , l = y.split(":");
            s.setHours(l[0], l[1], 0),
            s.setMinutes(s.getMinutes() - 30),
            i = m.dst(s)
          }
          var d = {
            symbol: e.symbol,
            newthour: i,
            ssl: a.ssl
          };
          if ("mink" == r.type) {
            if (n = e.datas.min,
            d.ismink = !0,
            d.scale = o,
            /^forex/.test(h.market))
              switch (d.withsymbol = "sys_time",
              o) {
              case w.URLHASH.K1:
                d.datalen = 1440;
                break;
              case w.URLHASH.K240:
                d.datalen = parseInt(60 / o * 24 * 10);
                break;
              default:
                d.datalen = parseInt(60 / o * 24 * 5)
              }
          } else
            n = e.datas.day;
          d.dataurl = n.url,
          d.dataformatter = n.dataformatter,
          d.wfn = n.wfn,
          d.staticdata = n.staticdata,
          c(d, t)
        }, p = function(t, n) {
          var i = {
            symbol: e.symbol,
            ssl: a.ssl
          }
            , o = "datas.k.";
          n ? (o += "loadNFInit",
          h.nco = {
            open: "09:00",
            close: "15:00"
          }) : (o += "loadHFInit",
          h.nco = {
            open: "06:00",
            close: "05:59"
          }),
          KKE.api(o, i, function(e) {
            var n = e.data;
            if (n) {
              var a = n.time;
              a && a.length > 0 && (h.nco.open = a[0][0] || h.nco.open,
              h.nco.close = a[a.length - 1][1] || h.nco.close)
            }
            u(t)
          })
        }, f = function(e) {
          var t = new Date
            , n = y.split(":");
          t.setHours(n[0], n[1], 0),
          t.setMinutes(t.getMinutes() - 1);
          var a = m.dst(t);
          h.nco = {
            open: y,
            close: a
          },
          u(e)
        };
        this.iInit = function(e) {
          var t = $.viewId;
          if (i != t) {
            i = t;
            var n = w.URLHASH.gt(t);
            switch (h.market) {
            case "HF":
              p(e);
              break;
            case "NF":
              p(e, !0);
              break;
            case "forex":
            case "forex_yt":
              f(e);
              break;
            default:
              "msk" == n.type ? d(e) : "rek" == n.type && R.get(w.URLHASH.KD) ? l(e) : u(e)
            }
          }
        }
      }
      ;
      this.kDb = R,
      this.extraDataObj = R.extraDataObj,
      this.getYtdIndex = function(e) {
        var t = R.get(w.URLHASH.KD);
        if (!t)
          return null;
        var n = t[t.length - 1]
          , a = n.date.getFullYear()
          , i = 0;
        return e && (a--,
        i = n.date.getMonth()),
        l(new Date(a,i,1))
      }
      ,
      this.initData = j.iInit,
      this.doUpdate = P.uUpdate,
      this.onViewChange = i,
      this.setPricePos = function(e, t) {
        h.labelMaxP = e[0],
        h.labelMinP = e[1],
        h.labelPriceCount = e[2],
        h.isCompare = t,
        C.createPlayingData(),
        N && N.setPricePos(e)
      }
      ,
      this.setRange = function(e) {
        C.setDataRange(),
        b && b.setDataRange(),
        N && N.setDataRange(),
        M && M.setDataRange(e)
      }
      ,
      this.draw = function() {
        S.draw(),
        b && b.allDraw(z.x),
        N && N.allDraw(z.x)
      }
      ,
      this.resize = function(e) {
        C.createPlayingData(),
        S.resize(),
        b && b.onResize(e),
        N && N.onResize(),
        M && M.onResize()
      }
      ,
      this.clear = function(e) {
        S.clear(e),
        b && (b.clear(),
        b = null),
        N && (N.clear(),
        N = null),
        M && (M.clear(),
        M = null),
        n && (U = null)
      }
      ,
      this.getPriceTech = function() {
        return N || null
      }
      ;
      var W = function(e, n) {
        e && q.resizeAll(!0),
        L.onChangeView(),
        n && t.isFunc(n.callback) && n.callback()
      }
        , X = void 0;
      this.initPt = function(e, i) {
        if (e) {
          !t.isArr(e) && (e = [e]);
          for (var o = e.length; o--; )
            if (e[o].name && "VOLUME" === e[o].name.toUpperCase()) {
              e.splice(o, 1),
              I.custom.show_underlay_vol = !0;
              break
            }
          N || (N = new r({
            iMgr: Y,
            stockData: h,
            chartArea: D,
            titleArea: H,
            cb: W,
            cfg: I,
            type: "k",
            usrObj: a
          }),
          n && (K = N),
          X && (g = N.showHide(X),
          X = void 0)),
          N.createChart(e, i)
        }
      }
      ,
      this.removePt = function(e) {
        if (e) {
          !t.isArr(e) && (e = [e]);
          for (var n = e.length; n--; )
            if (e[n].name && "VOLUME" === e[n].name.toUpperCase()) {
              e.splice(n, 1),
              I.custom.show_underlay_vol = !1;
              break
            }
        } else
          I.custom.show_underlay_vol = !1;
        N && N.removeChart(e)
      }
      ,
      this.togglePt = function(e, t) {
        N ? g = N.showHide(e) : !t && (X = e)
      }
      ,
      this.initTc = function(e, t) {
        b || (b = new s({
          stockData: h,
          iMgr: Y,
          cb: W,
          subArea: O,
          cfg: I,
          type: "k",
          usrObj: a,
          initMgr: q
        }),
        n && (E = b)),
        b.createChart(e, t)
      }
      ,
      this.removeTc = function(e) {
        b && b.removeChart(e)
      }
      ,
      this.initRs = function() {
        M = new o({
          stockData: h,
          setting: I,
          rc: L.moving
        }),
        M.linkData(),
        U = M
      }
      ,
      this.setLineStyle = S.setLineStyle,
      this.getLineStyle = S.getLineStyle,
      c()
    }
    function _(e, a) {
      function i() {
        if (b)
          s = I.COLOR.K_N,
          r = I.COLOR.K_FALL,
          l = I.COLOR.K_RISE,
          c = I.COLOR.K_CL;
        else {
          var a = o.linecolor
            , i = a.K_N || "#" + t.randomColor();
          s = i,
          r = a.K_FALL || i,
          l = a.K_RISE || i,
          c = a.K_CL || i
        }
        m.K_N = s,
        m.K_FALL = r,
        m.K_RISE = l,
        m.K_CL = c,
        d = new n.xh5_ibPainter({
          setting: I,
          sd: e,
          ctn: R,
          withHBg: b,
          fixScale: !1,
          reO: {
            mh: I.DIMENSION.H_MA4K
          },
          iMgr: Y,
          iTo: function(t, n, a, i) {
            if (e && e.datas) {
              !h(t, Y.iHLineO.body) && t.appendChild(Y.iHLineO.body);
              var o = e.labelMaxP - a / I.DIMENSION.h_k * (e.labelMaxP - e.labelMinP);
              Y.iToD({
                mark: o,
                x: n,
                y: a,
                oy: I.DIMENSION.H_MA4K,
                ox: I.DIMENSION.posX,
                e: i
              }, !0, !1)
            }
          }
        }),
        u = d.getG()
      }
      var o, r, s, l, c, d, u, m = {}, f = 1.3, v = 1.3, g = "solid", y = isNaN(a.nfloat) ? 2 : a.nfloat, b = e.isMain, N = function(e) {
        if (o = p({
          linetype: "solid",
          linecolor: m
        }, e || {}),
        m = o.linecolor,
        s = m.K_N,
        r = m.K_FALL,
        l = m.K_RISE,
        c = m.K_CL,
        !o.linetype && (o.linetype = g),
        I.datas.candle = o.linetype,
        0 == o.linetype.indexOf("line") || 0 == o.linetype.indexOf("mountain")) {
          var t = Number(o.linetype.split("_")[1]);
          (isNaN(t) || 0 >= t) && (t = v),
          f = t
        }
      }, w = function(t, n) {
        u.fillStyle = I.COLOR.K_EXT;
        for (var a, i, o, r = !1, s = !1, l = e.datas, c = l.length; c--; ) {
          if (o = l[c],
          a = n,
          !r && o.high == e.rangeMax) {
            r = !0;
            var h = o.high.toFixed(y);
            u.textAlign = 99 > a ? "left" : a > I.DIMENSION.w_k - 99 ? "right" : "center",
            i = o.hy,
            i < I.STYLE.FONT_SIZE && (i = I.STYLE.FONT_SIZE + 2),
            u.fillText(h, a, i)
          }
          if (a = n,
          !s && o.low == e.rangeMin) {
            s = !0;
            var d = o.low.toFixed(y);
            u.textAlign = 99 > a ? "left" : a > I.DIMENSION.w_k - 99 ? "right" : "center",
            i = Math.floor(o.ly + I.STYLE.FONT_SIZE + 2),
            i > I.DIMENSION.h_k + .5 * I.STYLE.FONT_SIZE - 3 && (i = I.DIMENSION.h_k),
            u.fillText(d, a, i)
          }
          if (s && r)
            break;
          n -= t,
          0 > n && (n = 0)
        }
      }, M = function() {
        var t = e.datas
          , n = t.length
          , a = I.DIMENSION.w_k / Math.max(n, I.PARAM.minCandleNum)
          , i = .5 * a
          , o = z.x - a;
        d.beginPath();
        for (var r, s, l = 0; n > l; l++)
          r = t[l],
          s = r.vy,
          d.drawVStickC(o, s, i, I.DIMENSION.h_k, I.COLOR.V_SD),
          o += a;
        d.stroke()
      }, _ = function() {
        for (var t, n, a = e.datas, i = a.length, r = I.DIMENSION.w_k / Math.max(i, I.PARAM.minCandleNum), s = z.x - .4 * r, l = 0; i > l; l++)
          n = a[l],
          t = n.cy,
          0 == l ? (d.newStyle(c, !0, f),
          d.moveTo(s, t)) : d.lineTo(s, t),
          n.ix = s,
          s += r;
        d.stroke(),
        0 == o.linetype.indexOf("mountain") && (s -= r,
        d.lineTo(s, I.DIMENSION.h_k),
        d.lineTo(z.x - .4 * r, I.DIMENSION.h_k),
        d.newFillStyle(I.COLOR.M_ARR, I.DIMENSION.h_k),
        d.fill()),
        b && I.custom.show_ext_marks && w(r, s)
      }, S = function() {
        for (var t, n, a, i, o = e.datas, c = o.length, h = I.DIMENSION.w_k / Math.max(c, I.PARAM.minCandleNum), u = .6 * h, p = -1, m = 1, f = 0; 3 > f; f++) {
          switch (p) {
          case -1:
            i = r;
            break;
          case 0:
            i = s;
            break;
          case 1:
            i = l
          }
          for (t = z.x - h,
          d.beginPath(),
          a = 0; c > a; a++)
            n = o[a],
            n.isFake || (n.kke_cs == p && d.drawCandleRect(t, n.oy, n.cy, u, i, n.kke_cs == m),
            0 == f && (n.ix = t + u)),
            t += h;
          for (d.stroke(),
          t = z.x - h,
          d.beginPath(),
          a = 0; c > a; a++)
            n = o[a],
            n.isFake || n.kke_cs == p && d.drawCandleLineRect(t, n.hy, n.oy, n.cy, n.ly, u, i, n.kke_cs == m),
            t += h;
          d.stroke(),
          p++
        }
        b && I.custom.show_ext_marks && w(h, t)
      }, k = function() {
        for (var t, n, a, i, o = e.datas, c = o.length, h = I.DIMENSION.w_k / Math.max(c, I.PARAM.minCandleNum), u = .6 * h, p = -1, m = 0; 3 > m; m++) {
          switch (p) {
          case -1:
            i = r;
            break;
          case 0:
            i = s;
            break;
          case 1:
            i = l
          }
          for (t = z.x - h,
          d.beginPath(),
          a = 0; c > a; a++)
            n = o[a],
            n.isFake || (n.kke_cs == p && d.drawCandleRect_solid(t, n.oy, n.cy, u, i),
            0 == m && (n.ix = t + u)),
            t += h;
          for (d.stroke(),
          t = z.x - h,
          d.beginPath(),
          a = 0; c > a; a++)
            n = o[a],
            n.isFake || n.kke_cs == p && d.drawCandleLineRect(t, n.hy, n.oy, n.cy, n.ly, u, i, !1),
            t += h;
          d.stroke(),
          p++
        }
        b && I.custom.show_ext_marks && w(h, t)
      }, L = function() {
        for (var t, n, a, i, o = e.datas, c = o.length, h = I.DIMENSION.w_k / Math.max(c, I.PARAM.minCandleNum), u = .6 * h, p = -1, m = 0; 3 > m; m++) {
          switch (p) {
          case -1:
            i = r;
            break;
          case 0:
            i = s;
            break;
          case 1:
            i = l
          }
          for (t = z.x - h,
          d.beginPath(),
          a = 0; c > a; a++)
            n = o[a],
            n.isFake || (0 == m && (n.ix = t + u),
            n.kke_cs == p && d.drawOhlc(t, n.oy, n.hy, n.ly, n.cy, u, i)),
            t += h;
          d.stroke(),
          p++
        }
        b && I.custom.show_ext_marks && w(h, t)
      }, A = function() {
        b && d.drawBg(z.x);
        var t = e.datas;
        if (t) {
          var n = 0 == o.linetype.indexOf("line") || 0 == o.linetype.indexOf("mountain")
            , a = 0 == o.linetype.indexOf("hollow")
            , i = 0 == o.linetype.indexOf("ohlc");
          d.clear(n, I.PARAM.getHd()),
          d.newGStyle({
            textBaseline: "bottom",
            font: I.STYLE.FONT_SIZE + "px " + I.STYLE.FONT_FAMILY
          }),
          b && I.custom.show_underlay_vol && M(),
          n ? _() : a ? S() : i ? L() : k()
        }
      };
      this.draw = A,
      this.clear = function(e) {
        e ? d.clear(!1, I.PARAM.getHd()) : (d.remove(),
        d = null)
      }
      ,
      this.resize = function() {
        d.resize({
          mh: I.DIMENSION.H_MA4K
        }),
        A()
      }
      ,
      this.setLineStyle = N,
      this.getLineStyle = function() {
        return o
      }
      ,
      N(a),
      i()
    }
    function S() {
      var e, n, l, h, d = this, f = [], g = .05, b = function() {
        var e, t, n = Number.MAX_VALUE, i = -Number.MAX_VALUE, o = f.length, r = o > 1 || "percent" == I.datas.scaleType;
        I.custom.k_overlay && (r = !1);
        for (var s, l, c, h, d = r ? "Percent" : "Price", u = o; u--; )
          e = f[u],
          a.scalerange ? c = a.scalerange : (h = e.getPriceTech(),
          r || !h ? c = [i, n] : (t = h && h.getMaxMin(),
          c = t || [i, n])),
          s = e["min" + d],
          l = e["max" + d],
          isFinite(s) && isFinite(l) && (n = Math.min(n, s, c[1]),
          i = Math.max(i, l, c[0]));
        var p;
        p = a.scalerange ? a.scalerange.concat(4) : 1 == a.pcm ? .0199 > i - n ? [i, n, 1] : v(i, n, 2, !1, !0) : v(i, n, a.nfloat, !1, !0, g);
        for (var m = o; m--; )
          e = f[m],
          e.setPricePos(p, r)
      }, N = function() {
        ($.start < 1 || !I.custom.smooth) && z.resetX();
        for (var e = f.length; e--; )
          f[e].draw()
      }, M = function() {
        $.start = $.end = 0 / 0,
        $.currentLength = 0 / 0,
        n = void 0
      }, _ = function(t) {
        M();
        for (var n, a = f.length, i = 0; a > i; i++)
          n = f[i],
          n.onViewChange();
        b(),
        N(),
        t || j.onRange(e, a > 1)
      }, S = [], k = !1, L = function(t) {
        return t.isErr ? (t !== e && d.removeCompare([t.symbol]),
        !0) : t.kDb.get() ? !0 : (t.initData(D),
        !1)
      }, A = function(e) {
        if (e && t.isFunc(e.callback)) {
          for (var n = !1, a = S.length; a--; )
            if (e.callback === S[a]) {
              n = !0;
              break
            }
          !n && S.push(e.callback)
        }
      }, R = function() {
        for (var t, n = !0, a = f.length; a--; )
          t = f[a],
          t == e || L(t) || (n = !1,
          k = !0);
        return n
      }, D = function(t, n) {
        if (A(n),
        L(e)) {
          if (e.isErr)
            return void (e.isErr = !1);
          if (Y.patcher.switchFloater(),
          z.resetX(0),
          R())
            for (k = !1,
            _(t); S.length; ) {
              var a = S.shift();
              a()
            }
          if (j.onViewChanged(),
          t)
            return;
          j.onDataUpdate(),
          j.onViewPrice()
        }
      }, H = function(t) {
        (t || n && $.dataLength != n) && j.onRange(e, f.length > 1),
        n = $.dataLength
      }, O = function(e) {
        (e || $.end == $.dataLength) && (Y.update(),
        b(),
        N(),
        H(!0)),
        j.onDataUpdate(),
        !Y.isIng() && j.onViewPrice()
      }, T = function(e) {
        clearTimeout(h),
        !P && x.parentNode && "none" != x.style.display && (h = setTimeout(O, e || 200))
      }, E = function() {
        if (!k)
          for (var e, t = f.length; t--; )
            e = f[t],
            e.doUpdate(T)
      }, K = function() {
        if (clearInterval(l),
        !isNaN(a.rate)) {
          var e = 1e3 * a.rate;
          e > 0 && (l = setTimeout(K, e))
        }
        E()
      };
      this.mM = new function() {
        var n = function(a, i, o) {
          var l, c;
          switch (i) {
          case "price":
            if (l = r,
            c = "initPt",
            t.isObj(a))
              a.name && "TZY" === String(a.name).toUpperCase() && (g = .2);
            else if (t.isArr(a))
              for (var h, d = a.length; d--; )
                if (h = a[d],
                h && h.name && "TZY" === String(h.name).toUpperCase()) {
                  g = .2;
                  break
                }
            break;
          case "tech":
            l = s,
            c = "initTc"
          }
          c && (l ? e[c](a, o) : KKE.api("plugins.techcharts.get", {
            type: i
          }, function(e) {
            s = e.tChart,
            r = e.pChart,
            n(a, i, o)
          }))
        }
          , a = function(t, n) {
          var a;
          switch (n) {
          case "price":
            a = "removePt",
            g = .05;
            break;
          case "tech":
            a = "removeTc";
            break;
          default:
            return
          }
          e && e[a](t)
        }
          , i = function(t) {
          return o ? (U ? (U.sh(t),
          (t.from || t.to) && U.dateFromTo(t.from, t.to)) : (e.initRs(),
          i(t),
          C.appendChild(U.getBody())),
          void q.resizeAll(!0)) : void KKE.api("plugins.rangeselector.get", null, function(e) {
            o = e,
            i(t)
          })
        };
        this.showRs = i,
        this.newAC = n,
        this.removeAC = a,
        this.togglePt = function(t, n) {
          e && (e.togglePt(t, n),
          D())
        }
      }
      ;
      var F = new function() {
        var n, i, o, r, s = !1, l = !1, h = function() {
          i || (i = c("div"),
          i.style.margin = "0 auto"),
          i.style.width = .8 * I.DIMENSION.getStageW() + "px",
          i.style.height = .83 * I.DIMENSION.h_k + "px"
        }, d = function(e) {
          n.dateTo(e.date, function(e) {
            1 != e && V.showTip({
              txt: w.nohistoryt,
              parent: x
            })
          })
        }, u = function(t) {
          if (o && n) {
            l = !0;
            var a = n.getSymbols()[0];
            a != e.symbol && n.newSymbol({
              symbol: e.symbol
            }),
            n.resize(),
            d(t),
            n.show(i)
          }
        }, p = function() {
          l = !1
        }, f = function(n) {
          var a = {
            txt: e.getName() + "(" + e.symbol + ") " + m.ds(n.date),
            content: i,
            parent: x,
            fontColor: "#000",
            closeCb: p,
            btnLb: "\u5173\u95ed",
            bgStyle: {
              backgroundColor: "#fff",
              width: "80%",
              top: "2%"
            }
          };
          return o || (o = new t.TipM(I.COLOR)),
          a.content = i,
          a
        }, v = function(t) {
          var r = f(t);
          if (o.genTip(r),
          n)
            u(t);
          else {
            if (s)
              return;
            s = !0,
            KKE.api("chart.h5t.get", {
              symbol: e.symbol,
              dom: i,
              nfloat: a.nfloat
            }, function(e) {
              n = e,
              s = !1,
              u(t)
            })
          }
        };
        this.resetHisT = function() {
          o && o.hide()
        }
        ,
        this.isShowing = function() {
          return l
        }
        ,
        this.historyT = function() {
          if ("CN" === t.market(e.symbol)) {
            r = Y.getInteractiveIdx();
            var n = e.datas[r];
            if (n) {
              if (n.date.getFullYear() < 2008)
                return void V.showTip({
                  txt: w.historyt08,
                  parent: x
                });
              switch (I.custom.history_t) {
              case "layer":
                h(),
                v(n);
                break;
              case "window":
                var a = "http://finance.sina.com.cn/h5charts/tchart.html?symbol=$symbol&date=$date&rangeselector=true&indicator=tvol";
                a = a.replace("$symbol", e.symbol).replace("$date", m.ds(n.date));
                var i = "width=600,height=375,location=0,menubar=0,titlebar=0,toolbar=0,alwaysRaised=1";
                window.open(a, "_blank", i);
                break;
              default:
                return
              }
            }
          }
        }
      }
      ;
      this.h5tM = F,
      this.getAllStock = function() {
        return f
      }
      ,
      this.getMainStock = function() {
        return e
      }
      ,
      this.getAllSymbols = function() {
        for (var e = [], t = 0, n = f.length; n > t; t++)
          e.push(f[t].symbol);
        return e
      }
      ;
      var W = function() {
        d.mM.togglePt(f.length > 1 ? {
          v: !1
        } : $.viewId == w.URLHASH.KCL || $.viewId == w.URLHASH.KCLF || $.viewId == w.URLHASH.KCLB ? {
          v: !1
        } : {
          v: !0
        })
      }
        , X = function(t, n, a, i, o) {
        if (!a && z.resetX(),
        !(n - t < I.PARAM.minCandleNum || n > $.dataLength || 0 > t || n - t > I.PARAM.maxCandleNum)) {
          $.start = t,
          $.end = n,
          $.currentLength = n - t;
          for (var r, s = f.length, l = 0; s > l; l++)
            r = f[l],
            r.setRange(i);
          b(),
          N(),
          o || j.onRange(e, s > 1)
        }
      };
      this.onChangeView = D,
      this.showYTD = function(t, n) {
        $.viewId = w.URLHASH.KD + t,
        D(!0);
        var a = e.getYtdIndex(n);
        a && X(a[0], a[1] + 1)
      }
      ,
      this.moving = X,
      this.callSdDraw = N;
      var G = function(t, n) {
        var a = t instanceof i ? t : new i(t,n);
        n && (e = a),
        f.push(a),
        W(),
        D()
      }
        , B = function(n) {
        if ("mink" == w.URLHASH.gt($.viewId).type) {
          var a = t.market(n.symbol)
            , i = t.market(e.symbol);
          if (a != i && ("US" == a || "US" == i))
            return !1
        }
        return !0
      };
      this.compare = function(e) {
        for (var n = e.callback, a = f.length; a--; )
          if (f[a].symbol == e.symbol)
            return void (t.isFunc(n) && n({
              code: 1,
              msg: "comparing same symbol"
            }));
        B(e) ? G(e, !1) : t.isFunc(n) && n({
          code: 2,
          msg: "invalid comparing market or period"
        })
      }
      ,
      this.removeCompare = function(e, t) {
        for (var n, a, i = !1, o = e.length; o--; ) {
          a = e[o];
          for (var r = f.length; r--; )
            if (a == f[r].symbol) {
              i = !0,
              n = f.splice(r, 1)[0],
              n.clear(t),
              n = null;
              break
            }
        }
        i && !t && (W(),
        b(),
        N())
      }
      ;
      var Z, J = function(e) {
        e ? O() : $.end == $.dataLength && Y.update()
      }, Q = !1, ee = 0, te = function() {
        clearTimeout(Z),
        Q = !1,
        ee = 0
      }, ne = function() {
        Z = setTimeout(function() {
          ee > 0 && T(1),
          te()
        }, 500)
      };
      this.pushData = function(e, t) {
        var n = !1;
        switch (Number(t)) {
        case 0:
          te();
          break;
        case 1:
          te(),
          n = !0;
          break;
        case 2:
          Q || (Q = !0,
          ne())
        }
        for (var a = e.length; a--; )
          for (var i = f.length; i--; )
            if (f[i].symbol === e[a].symbol && e[a].data) {
              ee++,
              f[i].doUpdate(y(J, null, n), !1, e[a].data, e[a].market);
              break
            }
      }
      ,
      this.setScale = function(e) {
        I.datas.scaleType = e,
        b(),
        N()
      }
      ,
      this.setLineStyle = function(n) {
        if (n) {
          !t.isArr(n) && (n = [n]);
          for (var a = n.length; a--; ) {
            var i = n[a];
            if (i.hasOwnProperty("symbol")) {
              for (var o = i.symbol, r = f.length; r--; )
                if (f[r].symbol == o) {
                  f[r].setLineStyle(i),
                  f[r].draw();
                  break
                }
            } else
              e.setLineStyle(i),
              e.draw()
          }
        } else
          e.setLineStyle(),
          e.draw()
      }
      ,
      this.onResize = function(e) {
        for (var t = f.length; t--; )
          f[t].resize(e)
      }
      ;
      var ae = -1
        , ie = -1
        , oe = function(e, t) {
        var n = $.start
          , a = $.end
          , i = e / Math.abs(e)
          , o = i * Math.ceil((a - n) / I.PARAM.zoomUnit);
        if (Math.abs(o) > I.PARAM.zoomLimit && (o = i * I.PARAM.zoomLimit),
        I.custom.centerZoom) {
          var r = t ? t.layerX / I.DIMENSION.w_k : .5;
          r < I.PARAM.zoomArea ? a = Math.min(a - o * Math.abs(o), $.dataLength) : r > 1 - I.PARAM.zoomArea ? n = Math.max(n + o * Math.abs(o), 0) : (n = Math.max(n + o * Math.abs(o), 0),
          a = Math.min(a - o * Math.abs(o), $.dataLength))
        } else
          n = Math.max(n + o * Math.abs(o), 0);
        return n == ae && a == ie ? [-1] : (ae = n,
        ie = a,
        [n, a])
      };
      this.onWheel = function(e) {
        if (!F.isShowing()) {
          var t = e.detail || -1 * e.wheelDelta;
          if (0 != t) {
            var n = oe(t, e);
            X(n[0], n[1])
          }
        }
      }
      ,
      this.onKb = function(e) {
        if ("keyup" == e.type)
          return void Y.iToKb(null, !0);
        var t = e.keyCode;
        if (F.isShowing())
          return void (27 == t && F.resetHisT());
        switch (t) {
        case 38:
        case 40:
          var n = oe(38 == t ? 1 : -1);
          X(n[0], n[1]);
          break;
        case 37:
        case 39:
          var a = Y.iToKb(37 == t ? -1 : 1);
          a && (X($.start + a, $.end + a),
          Y.iToKb(0));
          break;
        case 13:
          F.historyT();
          break;
        default:
          return
        }
        u.preventDefault(e)
      }
      ,
      this.zoomApi = function(e) {
        var t = oe(e ? 1 : -1);
        X(t[0], t[1])
      }
      ,
      this.moveApi = function(e) {
        var t = $.start
          , n = $.end;
        t += e,
        n += e,
        n > $.dataLength && (n = $.dataLength,
        t = $.start + n - $.end),
        0 > t && (t = 0,
        n = $.end - $.start),
        X(t, n)
      }
      ,
      this.shareTo = function(e) {
        e = p({
          type: "weibo",
          url: window.location.href,
          wbtext: "",
          qrwidth: 100,
          qrheight: 100,
          extra: void 0
        }, e || {});
        var n = String(e.type).toLowerCase();
        switch (n) {
        case "qrcode":
          KKE.api("utils.qrcode.createcanvas", {
            text: e.url,
            width: e.qrwidth,
            height: e.qrheight
          }, function(e) {
            V.showTip({
              content: e,
              txt: '<p style="margin:0 0 9px 0;">\u626b\u63cf\u4e8c\u7ef4\u7801</p>',
              parent: x,
              btnLb: "\u5173\u95ed"
            })
          });
          break;
        default:
          t.grabM.shareTo({
            ctn: x,
            w: I.DIMENSION.getStageW(),
            h: I.DIMENSION.getStageH() - (C.clientHeight || 0),
            ignoreZIdxArr: [I.PARAM.I_Z_INDEX],
            ignoreIdArr: [I.PARAM.LOGO_ID],
            priorZIdx: I.PARAM.G_Z_INDEX,
            nologo: !1,
            top: I.DIMENSION.posY + I.DIMENSION.H_MA4K + 17,
            right: I.DIMENSION.RIGHT_W + I.DIMENSION.K_RIGHT_W,
            LOGO_W: I.DIMENSION.LOGO_W,
            LOGO_H: I.DIMENSION.LOGO_H,
            color: I.COLOR.LOGO,
            bgColor: I.COLOR.BG,
            txt: e.wbtext,
            url: e.url,
            extra: e.extra
          })
        }
      }
      ,
      this.getExtraData = function(n) {
        if (n = p({
          symbol: e.symbol,
          name: null,
          clone: !0
        }, n || {}),
        !n.name)
          return null;
        for (var a, i, o = f.length; o--; )
          if (f[o].symbol === n.symbol) {
            a = f[o];
            break
          }
        if (a) {
          var r;
          "currentK" == n.name ? (r = a.kDb.get(),
          i = n.clone ? t.clone(r, null) : r) : (r = a.extraDataObj[n.name],
          i = n.clone ? t.clone(r, null) : r)
        }
        return i
      }
      ,
      this.updateDataAll = K,
      this.outputNewRange = H,
      this.dcReset = function() {
        clearInterval(l),
        clearTimeout(h);
        for (var e, t = f.length; t--; )
          e = f.splice(t, 1)[0],
          e.clear(),
          e = null
      }
      ,
      this.dcInit = function(e) {
        G(e, !0),
        K()
      }
    }
    t.xh5_EvtDispatcher.call(this);
    var k = this;
    a = p({
      candlenum: 0 / 0,
      datas: {
        day: {
          wfn: void 0,
          url: void 0,
          dataformatter: void 0,
          staticdata: void 0
        },
        min: {
          wfn: void 0,
          url: void 0,
          dataformatter: void 0,
          staticdata: void 0
        }
      },
      dim: null,
      dom: void 0,
      domid: void 0,
      fh5: !1,
      maxcandlenum: 0 / 0,
      mincandlenum: 0 / 0,
      mh: 0,
      name: void 0,
      nfloat: 2,
      noh5: void 0,
      nohtml5info: void 0,
      ondataupdate: void 0,
      onrange: void 0,
      onviewchanged: void 0,
      onviewprice: void 0,
      pcm: 0,
      rate: 0 / 0,
      reorder: !0,
      reheight: !0,
      scalerange: void 0,
      ssl: !1,
      symbol: "sh000001",
      tchartobject: {
        t: void 0,
        k: void 0
      },
      theme: null,
      trace: void 0,
      view: "kd",
      w: 0 / 0,
      h: 0 / 0,
      zoomlimit: 0 / 0,
      zoomunit: 0 / 0
    }, a || {
      WANGXuan: "wangxuan2@staff.sina.com.cn",
      VER: "2.8.7"
    });
    var I;
    !function() {
      if (I = e.getSetting(["_", a.symbol, "_", Math.floor(1234567890 * Math.random() + 1) + Math.floor(9876543210 * Math.random() + 1)].join("")),
      0 == location.protocol.indexOf("https:") && (a.ssl = !0),
      !a.symbol && (a.symbol = "sh000001"),
      a.symbol = String(a.symbol),
      isNaN(a.rate) && (a.rate = I.PARAM.updateRate),
      !isNaN(a.mincandlenum) && a.mincandlenum > 0 && (I.PARAM.minCandleNum = a.mincandlenum),
      !isNaN(a.candlenum) && a.candlenum >= I.PARAM.minCandleNum && (I.PARAM.defaultCandleNum = a.candlenum),
      isNaN(a.maxcandlenum) || (I.PARAM.maxCandleNum = a.maxcandlenum),
      !isNaN(a.zoomunit) && a.zoomunit > I.PARAM.minCandleNum && (I.PARAM.zoomUnit = a.zoomunit),
      !isNaN(a.zoomlimit) && a.zoomlimit > 0 && (I.PARAM.zoomLimit = Math.round(a.zoomlimit)),
      g.noH5) {
        if ("undefined" == typeof FlashCanvas || a.fh5)
          return void (t.isFunc(a.noh5) && a.noh5(a));
        I.PARAM.isFlash = !0
      }
      if (I.PARAM.isFlash && (I.COLOR.F_BG = "#fff"),
      a.reorder || (I.custom.indicator_reorder = !1),
      a.reheight || (I.custom.indicator_reheight = !1),
      a.dim)
        for (var n in a.dim)
          a.dim.hasOwnProperty(n) && t.isNum(I.DIMENSION[n]) && (I.DIMENSION[n] = a.dim[n])
    }();
    var L, A, x, R, D, H, O, C, T, E, K, U, F, P = !1, $ = {
      viewId: w.URLHASH.vi(a.view || "kd"),
      dataLength: 0 / 0,
      start: 0 / 0,
      end: 0 / 0,
      currentLength: 0 / 0,
      startDate: void 0,
      endDate: void 0,
      movY: 0
    }, z = {
      x: 0,
      resetX: function(e) {
        this.x = isNaN(e) ? I.DIMENSION.w_k / Math.max($.currentLength, I.PARAM.minCandleNum) : e
      }
    }, V = new function() {
      var e;
      this.showTip = function(n) {
        e || (e = new t.TipM(I.COLOR)),
        e.genTip(n)
      }
      ,
      this.hideTip = function() {
        e && e.hide()
      }
    }
    , j = new function() {
      var e = function() {
        var e = T.get($.viewId);
        return e ? e[e.length - 1] : null
      };
      this.onRange = function(e, n) {
        !P && t.isFunc(a.onrange) && a.onrange({
          isCompare: n,
          data: e.datas,
          viewRangeState: t.clone($, null),
          width: I.DIMENSION.w_k,
          height: I.DIMENSION.h_k,
          left: I.DIMENSION.posX,
          top: I.DIMENSION.H_MA4K,
          range: [e.labelMaxP, e.labelMinP, e.labelMaxVol],
          minCandleNum: I.PARAM.minCandleNum
        })
      }
      ;
      var n = [];
      this.onViewPrice = function(i, o, r, s, l, c) {
        if (!P && t.isFunc(a.onviewprice)) {
          if (!i) {
            if (i = e(),
            !i)
              return;
            o = $.currentLength - 1
          }
          if (!r) {
            for (; n.length; )
              n.length--;
            for (var h, d, u, p, m = L.getAllStock(), f = 0, v = m.length; v > f; f++)
              p = m[f],
              h = p.datas,
              !h || h.length <= o || (d = p.getName(),
              u = h[o],
              !s && m[f].isMain && (s = h),
              n.push({
                name: d,
                data: u,
                rangedata: h,
                symbol: p.symbol,
                color: p.getLineStyle().linecolor
              }));
            r = n
          }
          l || (l = L.getMainStock().getName()),
          a.onviewprice({
            data: t.clone(i, null),
            rangedata: s,
            idx: o,
            left: I.DIMENSION.posX,
            top: I.DIMENSION.H_MA4K,
            data_array: r,
            curname: l,
            interacting: !!c
          })
        }
      }
      ,
      this.onDataUpdate = function() {
        if (t.isFunc(a.ondataupdate)) {
          var n = e();
          n && a.ondataupdate({
            data: t.clone(n, null),
            idx: $.currentLength - 1,
            left: I.DIMENSION.posX,
            top: I.DIMENSION.H_MA4K
          })
        }
      }
      ,
      this.onViewChanged = function() {
        t.isFunc(a.onviewchanged) && a.onviewchanged({
          viewRangeState: t.clone($, null)
        })
      }
      ,
      this.onInnerResize = function(e) {
        t.isFunc(a.oninnerresize) && a.oninnerresize(e)
      }
    }
    , q = new function() {
      var e, n, i, o, r, s = 37, h = function(e, t, n) {
        var i = !1;
        isNaN(e) && (e = a.w || A.offsetWidth),
        isNaN(t) && (t = a.h || A.offsetHeight - a.mh);
        var o = C.clientHeight || 0
          , r = O.clientHeight || 0;
        if (!isNaN(n) && (r -= n),
        r / (t - o) > 1) {
          for (var s, l = 0, c = O.childNodes.length; c--; )
            s = O.childNodes[c],
            l += s.id.indexOf("blankctn") >= 0 ? s.offsetHeight : I.DIMENSION.getOneWholeTH();
          r = l,
          i = !0
        }
        return I.DIMENSION.setStageW(e),
        I.DIMENSION.setStageH(t, r + o),
        i
      }, d = function() {
        r && (r.style.display = I.custom.show_logo ? "" : "none")
      }, p = function() {
        F = new t.LoadingSign,
        F.appendto(R)
      }, m = function() {
        F.setPosition()
      }, f = function(e, n, a) {
        var o = h(n, a, 0 / 0);
        if (e || n && a) {
          if (!L)
            return;
          L.onResize(o),
          Y.onResize()
        }
        i.style.left = "1px",
        i.style.top = I.DIMENSION.h_k + I.DIMENSION.H_MA4K + "px",
        d(),
        m(),
        t.stc("k_wh", [I.DIMENSION.getStageW(), I.DIMENSION.getStageH()])
      }, v = function() {
        A = l(a.domid) || a.dom,
        A || (A = c("div"),
        document.body.appendChild(A)),
        x = c("div"),
        x.style.position = "relative",
        x.style.outlineStyle = "none",
        x.style.webkitUserSelect = x.style.userSelect = x.style.MozUserSelect = "none",
        R = c("div", "mainarea_" + I.uid),
        D = c("div"),
        R.appendChild(D),
        H = c("div"),
        H.style.position = "absolute",
        H.style.fontSize = H.style.lineHeight = I.STYLE.FONT_SIZE + "px",
        H.style.width = "100%",
        R.appendChild(H),
        x.appendChild(R),
        O = c("div"),
        x.appendChild(O),
        C = c("div"),
        x.appendChild(C),
        e = new N({
          width: s,
          height: I.DIMENSION.H_TIME_PART
        }),
        n = e.g,
        i = e.canvas,
        i.style.position = "absolute",
        x.appendChild(i),
        A.appendChild(x)
      }, y = function(e) {
        var n = !1;
        if (e) {
          U && (n = U.setTheme(e));
          for (var a in e)
            e.hasOwnProperty(a) && I.COLOR.hasOwnProperty(a) && I.COLOR[a] !== e[a] && (I.COLOR[a] = e[a],
            n = !0);
          t.stc("k_thm", e)
        }
        return n && M.styleLogo({
          logo: r,
          color: I.COLOR.LOGO
        }),
        n
      }, b = function(e) {
        !I.custom.mousewheel_zoom || document.activeElement !== x && document.activeElement.parentNode !== x || (L && L.onWheel(e),
        u.preventDefault(e),
        u.stopPropagation(e))
      }, _ = function(e) {
        I.custom.keyboard && L && L.onKb(e)
      }, S = function() {
        t.xh5_deviceUtil.istd || (g.info.name.match(/firefox/i) ? u.addHandler(x, "DOMMouseScroll", b) : u.addHandler(x, "mousewheel", b),
        x.tabIndex = 0,
        u.addHandler(x, "keyup", _),
        u.addHandler(x, "keydown", _))
      }, k = function(e) {
        r = e,
        x.appendChild(e)
      };
      v(),
      p(),
      y(a.theme),
      f(),
      S(),
      M.getLogo({
        cb: k,
        id: I.PARAM.LOGO_ID,
        isShare: !1,
        top: I.DIMENSION.posY + I.DIMENSION.H_MA4K + 17,
        right: I.DIMENSION.RIGHT_W + I.DIMENSION.K_RIGHT_W,
        LOGO_W: I.DIMENSION.LOGO_W,
        LOGO_H: I.DIMENSION.LOGO_H,
        color: I.COLOR.LOGO
      }),
      g.noH5 && (V.showTip({
        txt: a.nohtml5info || w.nohtml5info,
        parent: x
      }),
      t.stc("k_nh5")),
      this.resizeAll = f,
      this.innerResize = function(e) {
        L && (h(0 / 0, 0 / 0, e),
        L.onResize(),
        Y.onResize(),
        m(),
        j.onInnerResize({
          height: I.DIMENSION.h_k
        }))
      }
      ,
      this.initTheme = y,
      this.drawReMark = function(t) {
        if (t) {
          if (i.style.display = "",
          o == t)
            return;
          var a = I.DIMENSION.H_TIME_PART;
          o = t,
          e.resize({
            width: s,
            height: a,
            hd: I.PARAM.getHd()
          }),
          n.font = "12px " + I.STYLE.FONT_FAMILY,
          n.textBaseline = "top",
          n.fillStyle = I.COLOR.REMARK_BG,
          n.fillRect(0, 0, s, a),
          n.fillStyle = I.COLOR.REMARK_T,
          n.fillText(t, 0, 0)
        } else
          i.style.display = "none"
      }
    }
    , Y = new function() {
      var e, n, i, o, r = t.market(a.symbol), s = /^forex|^HF/.test(r), l = isNaN(a.nfloat) ? 2 : a.nfloat, d = 150, u = new function() {
        var t = function(t) {
          var n = e.body.style;
          t && I.custom.show_floater ? (n.backgroundColor = I.COLOR.F_BG,
          n.color = I.COLOR.F_T,
          n.border = "1px solid " + I.COLOR.F_BR,
          n.display = "") : n.display = "none"
        };
        this.pv = function(n) {
          var a = e.body.style
            , i = Math.max(I.DIMENSION.posX, 55) + 9;
          a.left = (n.x > I.DIMENSION.getStageW() >> 1 ? i : I.DIMENSION.getStageW() - d - 9) + "px",
          a.top = (n.y || 0) + "px",
          t(!0)
        }
        ,
        this.showFloater = t
      }
      , p = function() {
        function t() {
          var e, t, n = "border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0;border-collapse:collapse;border-spacing:0;text-align:center;", a = "font-weight:normal;border:0;height:16px;text-align:center", i = "text-align:left;font-weight:normal;border:0;height:16px;", o = "text-align:right;border:0;height:16px;", r = c("div"), h = r.style;
          h.position = "absolute",
          h.zIndex = I.PARAM.I_Z_INDEX + 2,
          h.padding = "2px",
          h.width = d + "px",
          h.lineHeight = "16px",
          h.display = "none",
          h.fontSize = "12px";
          var u, p, f, v, g = c("table"), y = c("thead"), N = c("tbody");
          g.style.cssText = n,
          u = c("tr"),
          p = c("th"),
          p.setAttribute("colspan", "2"),
          p.style.cssText = a;
          var w = c("span");
          p.appendChild(w),
          u.appendChild(p),
          y.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.setAttribute("colspan", "2"),
          p.style.cssText = a;
          var M = c("span");
          p.appendChild(M),
          u.appendChild(p),
          N.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u5f00\u76d8";
          var _ = c("span");
          f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(_),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u6700\u9ad8";
          var S = c("span");
          f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(S),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u6700\u4f4e";
          var k = c("span");
          f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(k),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u6536\u76d8";
          var L = c("span");
          f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(L),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u6da8\u8dcc";
          var A = c("span");
          if (f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(A),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          !s) {
            u = c("tr"),
            p = c("th"),
            p.style.cssText = i,
            f = c("td"),
            v = c("span"),
            v.innerHTML = "\u6210\u4ea4";
            var x = c("span");
            f.style.cssText = o,
            p.appendChild(v),
            f.appendChild(x),
            u.appendChild(p),
            u.appendChild(f),
            N.appendChild(u),
            u = c("tr"),
            p = c("th"),
            p.style.cssText = i,
            f = c("td"),
            v = c("span"),
            v.innerHTML = "\u6362\u624b";
            var R = c("span");
            f.style.cssText = o,
            p.appendChild(v),
            f.appendChild(R),
            u.appendChild(p),
            u.appendChild(f),
            N.appendChild(u),
            R.innerHTML = "--"
          }
          u = c("tr"),
          p = c("th"),
          p.style.cssText = i,
          f = c("td"),
          v = c("span"),
          v.innerHTML = "\u632f\u5e45";
          var D = c("span");
          f.style.cssText = o,
          p.appendChild(v),
          f.appendChild(D),
          u.appendChild(p),
          u.appendChild(f),
          N.appendChild(u),
          g.appendChild(y),
          g.appendChild(N),
          g.style.width = "100%",
          r.appendChild(g);
          var H, O, C = function(e, t) {
            var n = I.COLOR.F_N;
            return e > t ? n = I.COLOR.F_RISE : t > e && (n = I.COLOR.F_FALL),
            n
          }, T = function(e, t) {
            return t ? "(" + ((e - t) / t * 100).toFixed(2) + "%)" : "(--%)"
          };
          this.setFloaterData = function(n) {
            if (e = n.name || n.symbol || e || "",
            w.innerHTML = e,
            H = n.data || t) {
              t = H,
              O = n.stock || O;
              var a = O.market
                , i = "";
              switch (a) {
              case "CN":
              case "OTC":
                i = "\u624b";
                break;
              case "US":
              case "HK":
                i = "\u80a1";
                break;
              default:
                i = ""
              }
              var o = H.percent
                , r = H.open
                , c = H.close
                , h = H.high
                , d = H.low
                , u = c / (1 + o) || H.prevclose;
              M.innerHTML = m.ds(H.date, "/") + "/" + m.nw(H.date.getDay()) + (H.time || "");
              var p = 1 > u || 1 > h || 1 > d ? 4 : l;
              _.innerHTML = r.toFixed(p) + T(r, u, p),
              S.innerHTML = h.toFixed(p) + T(h, u, p),
              k.innerHTML = d.toFixed(p) + T(d, u, p),
              L.innerHTML = c.toFixed(p) + T(c, u, p),
              o = isNaN(o) || !isFinite(o) ? "--" : (100 * o).toFixed(2),
              A.innerHTML = H.change.toFixed(p) + "(" + o + "%)";
              var f = isNaN(H.ampP) ? "--" : (100 * H.ampP).toFixed(2);
              if (D.innerHTML = H.amplitude.toFixed(p) + "(" + f + "%)",
              A.style.color = C(o, 0),
              _.style.color = C(r, u),
              S.style.color = C(h, u),
              k.style.color = C(d, u),
              L.style.color = C(c, u),
              s || (x.innerHTML = b(H.volume, 2) + i),
              R && O) {
                var v = O.extraDataObj.rsAmount;
                if (v) {
                  for (var g, y = 0, N = v.length; N > y; y++)
                    if (H.date >= v[y].date) {
                      g = v[y].amount;
                      break
                    }
                  g && (R.innerHTML = (H.volume / g).toFixed(2) + "%")
                } else
                  R.innerHTML = "--"
              }
            }
          }
          ,
          this.body = r,
          this.reset = function() {
            e = null,
            t = null
          }
        }
        n = new t,
        e = n
      }, f = function() {
        function e(e) {
          var t = c("div")
            , n = c("div")
            , a = c("span")
            , i = 12
            , o = e.isH
            , r = function() {
            if (n.style.borderStyle = "dashed",
            n.style.borderColor = I.COLOR.IVH_LINE,
            a.style.backgroundColor = I.COLOR[e.txtBgCN],
            a.style.color = I.COLOR[e.txtCN],
            o)
              n.style.borderWidth = "1px 0 0 0",
              t.style.width = n.style.width = I.DIMENSION.getStageW() + "px",
              a.style.top = -(.6 * I.STYLE.FONT_SIZE) + "px",
              a.style.width = I.DIMENSION.extend_draw ? "" : I.DIMENSION.posX + "px",
              a.style.left = 0,
              a.style.padding = "1px 0";
            else {
              n.style.borderWidth = "0 1px 0 0";
              var i, r, s = I.DIMENSION.H_MA4K + I.DIMENSION.H_T_B;
              I.DIMENSION.getStageH() < 0 ? (i = O.clientHeight,
              r = i - s) : (i = I.DIMENSION.getStageH() - C.clientHeight || 0,
              r = I.DIMENSION.h_k),
              i -= s,
              i += I.DIMENSION.I_V_O,
              t.style.height = n.style.height = i + "px",
              a.style.top = r + "px",
              a.style.padding = "2px 2px 1px"
            }
          };
          t.style.position = "absolute",
          t.style.zIndex = I.PARAM.I_Z_INDEX - 2,
          a.style.position = n.style.position = "absolute",
          n.style.zIndex = 0,
          a.style.zIndex = 1,
          a.style.font = I.STYLE.FONT_SIZE + "px " + I.STYLE.FONT_FAMILY,
          a.style.whiteSpace = "nowrap",
          a.style.lineHeight = i + "px",
          e.txtA && (a.style.textAlign = e.txtA),
          r(),
          t.appendChild(a),
          t.appendChild(n);
          var s = function(e) {
            e ? "" != t.style.display && (t.style.display = "") : "none" != t.style.display && (t.style.display = "none")
          };
          this.pv = function(e) {
            if (!isNaN(e.y) && (t.style.top = e.y + (e.oy || 0) + "px"),
            a.innerHTML = e.v || "",
            !isNaN(e.x)) {
              e.x < 0 && (e.x = 0);
              var n = e.x + (e.ox || 0)
                , i = I.DIMENSION.getStageW();
              n = ~~(n + .5),
              n -= 1,
              t.style.left = n + "px";
              var o = a.offsetWidth || 66
                , r = o >> 1;
              e.x < r ? r = e.x : n + r > i && (r = n + o - i),
              a.style.left = -r + "px"
            }
            s(!0)
          }
          ,
          this.display = s,
          this.body = t,
          this.resize = r,
          s(!1)
        }
        i = new e({
          isH: !0,
          txtCN: "P_TC",
          txtBgCN: "P_BG",
          txtA: "right"
        }),
        o = new e({
          isH: !1,
          txtCN: "T_TC",
          txtBgCN: "T_BG",
          txtA: "center"
        }),
        x.appendChild(o.body)
      }, v = function() {
        i.display(!1),
        o.display(!1),
        u.showFloater(!1)
      }, g = function(e) {
        E && E.indirectI(e),
        K && K.indirectI(e)
      }, y = !1, N = !1, M = 0 / 0, _ = !1;
      this.getInteractiveIdx = function() {
        return M
      }
      ,
      this.isIng = function() {
        return y
      }
      ,
      this.isMoving = function() {
        return _
      }
      ;
      var S = 0 / 0
        , A = 0 / 0
        , D = [];
      this.iToD = function(t, n, a) {
        if (!t.e || !N) {
          var r = t.x
            , s = t.ox || 0
            , c = t.y
            , h = t.oy || 0
            , d = t.e ? t.e.target : null;
          if (!a) {
            if (S == r && A == c)
              return;
            S = r,
            A = c
          }
          if (d) {
            var p = d.style.height.split("px")[0];
            (0 > c || c > p) && (r = 0 / 0,
            c = 0 / 0)
          }
          var m = $.currentLength
            , f = Math.max(m, I.PARAM.minCandleNum);
          r += I.DIMENSION.w_k / f - z.x;
          var b = Math.floor(r * f / I.DIMENSION.w_k);
          if (0 > b ? b = 0 : b >= m && (b = m - 1),
          !isNaN(b) && (M = b),
          isNaN(r) && isNaN(c))
            return y = !1,
            v(),
            g(Number.MAX_VALUE),
            void j.onViewPrice();
          y = $.end != $.dataLength ? !0 : m - 1 > b;
          for (var _, x, R, H, O, C, T, E = Number(t.mark); D.length; )
            D.length--;
          if (n) {
            var K = L.getAllStock()
              , U = K.length
              , F = U > 1 || "percent" == I.datas.scaleType;
            I.custom.k_overlay && (F = !1);
            for (var P, V, q, Y, W = Number.MAX_VALUE, X = 0; U > X; X++)
              q = K[X],
              O = q.datas,
              !O || O.length <= b || (P = q.getName(),
              V = O[b],
              D.push({
                name: P,
                data: V,
                rangedata: O,
                symbol: q.symbol,
                color: q.getLineStyle().linecolor
              }),
              V.isFake || (Y = Math.abs(V.cy - c),
              W > Y && (W = Y,
              H = q,
              R = V,
              T = O,
              x = P,
              _ = H.symbol)));
            if (F)
              C = 100 * E,
              C = Math.abs(C) > 999 ? Math.floor(C) : C.toFixed(2),
              C += "%";
            else if (C = E > 99999 ? Math.floor(E) : E.toFixed(E > 9999 ? 1 : l),
            I.custom.show_k_rangepercent && H) {
              var G = (E - H.prevclose) / H.prevclose * 100;
              G = isNaN(G) || !isFinite(G) ? "--" : G.toFixed(l),
              C += "<br/>" + G + "%"
            }
          } else {
            if (H = L.getMainStock(),
            O = H.datas,
            !O || O.length <= b)
              return;
            R = O[b],
            T = O,
            x = H.getName(),
            _ = H.symbol;
            var B = Math.abs(E);
            C = B > 99999 ? Math.floor(E) : E.toFixed(B > 9999 ? 1 : l),
            D.push({
              name: x,
              data: R,
              rangedata: T,
              symbol: _,
              color: H.getLineStyle().linecolor
            })
          }
          if (R) {
            var Z = r;
            I.custom.stick && (r = R.ix || r),
            e && (e.setFloaterData({
              symbol: _,
              name: x,
              data: R,
              stock: H,
              arr: D
            }),
            u.pv({
              x: Z,
              y: I.DIMENSION.K_F_T
            })),
            i.pv({
              y: c,
              v: C,
              oy: h
            }),
            o.pv({
              x: r,
              ox: s,
              y: I.DIMENSION.H_MA4K,
              v: R.day + " " + (R.time || "")
            }),
            g(b),
            !x && (x = _ || "--"),
            j.onViewPrice(R, b, D, T, x, !0),
            k.re(w.e.I_EVT, t.e)
          }
        }
      }
      ;
      var H, T, U;
      this.iToKb = function(e, t) {
        if (t)
          return void (N = !1);
        if (N = !0,
        M += e,
        !h(R, Y.iHLineO.body) && R.appendChild(Y.iHLineO.body),
        H = L.getMainStock(),
        U = H.getName(),
        T = H.datas,
        !T)
          return void 0;
        if (0 > M)
          return M = 0,
          -1;
        if (M >= T.length)
          return M = T.length - 1,
          1;
        var n = T[M];
        if (!n)
          return void 0;
        var a = {
          mark: H.labelMaxP - n.cy / I.DIMENSION.h_k * (H.labelMaxP - H.labelMinP),
          x: n.ix,
          y: n.cy,
          oy: I.DIMENSION.H_MA4K,
          ox: I.DIMENSION.posX
        };
        return void this.iToD(a, !0, !0)
      }
      ;
      var F;
      this.globalDragHandler = function(e, t, n, a, i) {
        if (isNaN(e) && isNaN(t))
          return F = 0 / 0,
          _ = !1,
          void k.re(w.e.I_EVT, i);
        v();
        var o = $.start
          , r = $.end
          , s = r - o;
        isNaN(F) && (F = e);
        var l = t - F
          , c = $.dataLength
          , h = I.DIMENSION.w_k / s;
        if (Math.abs(l) < h) {
          if (I.custom.smooth && h > 4) {
            if (r >= c && 0 > l)
              return;
            if (1 > o && l > 0)
              return;
            z.x = l,
            L.callSdDraw()
          }
        } else {
          F = t;
          var d = Math.round(l * s / I.DIMENSION.w_k);
          o -= d,
          r -= d,
          r >= c && (r = c,
          o = r - s),
          0 > o && (o = 0,
          r = s),
          ($.start != o || $.end != r) && (z.resetX(0),
          $.movY = a - n,
          L.moving(o, r, !0),
          _ = !0)
        }
      }
      ,
      this.zoomView = function(e, t) {
        var n = -Number(e);
        0 == n && (n = 1);
        var a = $.start
          , i = $.end
          , o = n * Math.ceil((i - a) / I.PARAM.zoomUnit);
        if (Math.abs(o) > I.PARAM.zoomLimit && (o = n * I.PARAM.zoomLimit),
        I.custom.centerZoom) {
          var r = Math.min.apply(Math, t)
            , s = r / I.DIMENSION.w_k
            , l = Math.max.apply(Math, t)
            , c = l / I.DIMENSION.w_k;
          s < I.PARAM.zoomArea ? i = Math.min(i - o * Math.abs(o), $.dataLength) : c > 1 - I.PARAM.zoomArea ? a = Math.max(a + o * Math.abs(o), 0) : (a = Math.max(a + o * Math.abs(o), 0),
          i = Math.min(i - o * Math.abs(o), $.dataLength))
        } else
          a = Math.max(a + o * Math.abs(o), 0);
        L.moving(a, i)
      }
      ,
      p(),
      f(),
      this.onResize = function() {
        i.resize(),
        o.resize()
      }
      ,
      this.iHLineO = i,
      this.hideIUis = v,
      this.update = function() {
        y || (g(Number.MAX_VALUE),
        e && e.setFloaterData({}))
      }
      ,
      this.iReset = function() {
        e.reset && e.reset()
      }
      ,
      this.patcher = new function() {
        var a, i = {}, o = function() {
          if (a) {
            e.body.parentNode && e.body.parentNode.removeChild(e.body);
            var t = "vid_" + $.viewId;
            if (a[t]) {
              var o;
              o = i[t] ? i[t] : i[t] = new a[t],
              e = o
            } else
              e = n
          } else
            e = n;
          !h(x, e.body) && x.appendChild(e.body)
        };
        this.customFloater = function(e) {
          a = e,
          o(),
          t.stc("k_fl", e)
        }
        ,
        this.switchFloater = o
      }
    }
    ;
    L = new S;
    var W = new function() {
      var e = this;
      this.resize = function(e, t) {
        q.resizeAll(!0, e, t)
      }
      ;
      var n, a = function(n, a) {
        if (I.hasOwnProperty(n)) {
          for (var i in a)
            if (a.hasOwnProperty(i) && t.isFunc(a[i]))
              return;
          p(I[n], a),
          t.stc(n, a),
          e.resize()
        }
      }, i = function(e, n) {
        var a;
        if (I.hasOwnProperty(e)) {
          a = t.clone(I[e], null);
          for (var i in a)
            if (a.hasOwnProperty(i))
              if (t.isFunc(a[i]))
                a[i] = null,
                delete a[i];
              else if (n)
                for (var o = n.length; o--; )
                  typeof a[i] === n[o] && (a[i] = null,
                  delete a[i])
        }
        return a
      }, o = function(e, t, n) {
        n = p({
          toremove: !1,
          isexclusive: !1,
          callback: void 0,
          addon: !1
        }, n || {}),
        n.toremove ? L.mM.removeAC(t, e) : n.isexclusive ? (L.mM.removeAC(null, e),
        L.mM.newAC(t, e, n)) : L.mM.newAC(t, e, n)
      };
      this.setLineStyle = function(e, a) {
        a || (n = e),
        L.setLineStyle(e),
        t.stc("k_style", e)
      }
      ,
      this.showScale = function(e) {
        L.setScale(e),
        t.stc("k_scale", e)
      }
      ,
      this.pushData = function(e, n) {
        !t.isArr(e) && (e = [e]),
        L.pushData(e, n)
      }
      ;
      var r, s, c = [], h = function() {
        if (c.length) {
          var e = c.shift();
          L.pushData([e], 1)
        } else
          clearInterval(s)
      }, d = function() {
        s = setInterval(h, 1)
      };
      this.pushTr = function(e) {
        if (e && e.data) {
          for (var t, n = e.data.split(","), a = e.symbol, i = e.market, o = 0, s = n.length; s > o; o++)
            t = {
              symbol: a,
              data: n[o],
              market: i
            },
            c.push(t);
          clearTimeout(r),
          r = setTimeout(d, 20)
        }
      }
      ,
      this.hide = function(e) {
        P = !0,
        Y.hideIUis(),
        t.$CONTAINS(A, x) && A.removeChild(x),
        e && L.dcReset()
      }
      ,
      this.show = function(e) {
        P = !1,
        e && (t.isStr(e) && (e = l(e)),
        A = e),
        t.$CONTAINS(A, x) || (A.appendChild(x),
        q.resizeAll(!0)),
        L.outputNewRange(!0),
        j.onViewPrice()
      }
      ;
      var u = 0
        , m = !1
        , f = function(e) {
        var t;
        switch (e) {
        case 1:
          t = "\u540e\u590d\u6743";
          break;
        case -1:
          t = "\u524d\u590d\u6743"
        }
        q.drawReMark(t)
      }
        , v = []
        , g = []
        , b = function() {
        for (; v.length; ) {
          var e = v.pop();
          g.length--,
          L.compare(e)
        }
      }
        , N = function() {
        for (var e, t = L.getMainStock().symbol, n = L.getMainStock().market, a = L.getAllStock(), i = a.length; i--; ) {
          e = a[i];
          var o = e.symbol;
          if (o != t) {
            var r = e.market;
            r != n && ("US" == r || "US" == n || "HK" == r || "HK" == n || "OTC" == r || "OTC" == n || "option_cn" == r || "option_cn" == n) && (v.push(e),
            g.push(o))
          }
        }
        g.length && L.removeCompare(g, !0)
      }
        , M = function() {
        m = !1,
        e.setLineStyle(void 0, !0),
        e.showScale(void 0),
        L.mM.togglePt({
          v: !0,
          ytd: !0
        })
      }
        , _ = function(e) {
        "mink" == w.URLHASH.gt(e).type ? ($.viewId = e,
        f(),
        N()) : (e += u,
        $.viewId = e,
        f(u),
        b())
      }
        , S = new function() {
        this.isClMode = !1,
        this.exitClMode = function() {
          this.isClMode = !1,
          e.setLineStyle(n, !0),
          L.mM.togglePt({
            v: !0,
            ytd: !0
          })
        }
        ,
        this.enterClMode = function() {
          this.isClMode = !0;
          var t = n && "mountain" == n.linetype ? "mountain" : "line";
          e.setLineStyle({
            linetype: t,
            linecolor: {
              K_CL: I.COLOR.T_P
            }
          }, !0),
          L.mM.togglePt({
            v: !1,
            ytd: !0
          })
        }
      }
        , R = !0;
      this.showView = function(e, n, a) {
        Y.hideIUis(),
        R ? setTimeout(function() {
          R = !1
        }, 99) : F.hide();
        var i = t.isNum(e) ? w.URLHASH.vn(e) : w.URLHASH.vi(e);
        if (i) {
          if (m && M(),
          i == w.URLHASH.KCL)
            S.enterClMode();
          else {
            S.isClMode && S.exitClMode();
            var o = L.getAllStock()
              , r = o && o.length > 1;
            r && L.mM.togglePt({
              v: !1
            })
          }
          _(i),
          L.onChangeView(!1, n),
          t.stc("k_v", e),
          !a && t.suda("vw", e)
        }
      }
      ;
      var D = !1;
      this.showYTD = function(e, n) {
        D = !!e,
        Y.hideIUis(),
        m || (m = !0,
        this.setLineStyle({
          linetype: "line",
          linecolor: {
            K_CL: I.COLOR.T_P
          }
        }, !0),
        !D && this.showScale("percent"),
        L.mM.togglePt({
          v: !1,
          ytd: !0
        })),
        f(u),
        L.showYTD(u, D),
        t.stc("k_v", w.URLHASH.NYTD),
        !n && t.suda("vw", w.URLHASH.NYTD)
      }
      ,
      this.showYear = function() {
        this.showYTD(!0)
      }
      ,
      this.setReK = function(e) {
        if (e = parseInt(e),
        !(isNaN(e) || Math.abs(e) > 1)) {
          u = e;
          var n = w.URLHASH.gt($.viewId);
          t.stc("k_re", e);
          var a = e;
          "-1" == a && (a = "_1"),
          t.suda("k_re", "k_re" + a),
          "mink" != n.type && (m ? this.showYTD(D, !0) : this.showView(n.baseid, void 0, !0))
        }
      }
      ;
      var H = function(e) {
        var n;
        return n = t.isStr(e) ? e.split(",") : [e.symbol]
      };
      this.compare = function(e, n) {
        if (n) {
          for (var a = H(e), i = a.length; i--; )
            for (var o = g.length; o--; )
              if (a[i] == g[o]) {
                g.splice(o, 1),
                v.splice(o, 1);
                break
              }
          L.removeCompare(H(e))
        } else
          L.compare(e),
          t.suda("k_comp");
        t.stc("k_comp", {
          rm: n,
          o: e
        })
      }
      ,
      this.tCharts = function(e, t) {
        o("tech", e, t)
      }
      ,
      this.pCharts = function(e, t) {
        o("price", e, t)
      }
      ,
      this.showPCharts = function(e) {
        e && (L.mM.togglePt(e),
        t.stc("k_sp", e))
      }
      ,
      this.getIndicators = function() {
        var e = E ? E.getLog() : null
          , t = K ? K.getLog() : null;
        return {
          tCharts: e,
          pCharts: t
        }
      }
      ,
      this.getIndicatorData = function() {
        var e = E ? E.getExistingCharts() : null
          , t = K ? K.getExistingCharts() : null;
        return {
          tCharts: e,
          pCharts: t
        }
      }
      ;
      var O;
      this.showRangeSelector = function(e) {
        O = p({
          display: !0,
          from: void 0,
          to: void 0
        }, e || {}),
        L.mM.showRs(O),
        t.stc("k_rs", e)
      }
      ,
      this.dateFromTo = function(e, n, a) {
        U && (U.dateFromTo(e, n, a),
        t.stc("k_ft", [e, n, a]))
      }
      ,
      this.setCustom = y(a, this, "custom"),
      this.setTheme = function(e) {
        var t = q.initTheme(e);
        t && (this.setLineStyle({
          linecolor: e
        }),
        this.resize())
      }
      ,
      this.setDimension = y(a, this, "DIMENSION"),
      this.getDimension = y(i, null, "DIMENSION", ["boolean"]),
      this.newSymbol = function(e) {
        if (Y.hideIUis(),
        Y.iReset(),
        L.dcReset(),
        L.dcInit(e),
        V.hideTip(),
        E) {
          var n = E.getLog();
          E = null,
          n && this.tCharts(n)
        }
        if (K) {
          var a = K.getLog();
          K = null,
          a && this.pCharts(a)
        }
        O && (O.from = void 0,
        O.to = void 0,
        L.mM.showRs(O)),
        L.h5tM.resetHisT(),
        t.stc("k_ns", e)
      }
      ,
      this.toggleExtend = function() {
        var e = I.DIMENSION.extend_draw
          , t = I.DIMENSION.posX;
        a.call(this, "DIMENSION", {
          extend_draw: !e,
          posX: t > 9 ? 7 : 55
        }),
        this.resize()
      }
      ,
      this.shareTo = function(e) {
        L.shareTo(e),
        t.stc("k_share", e);
        var n = e && e.type ? e.type : "weibo";
        t.suda("share", n)
      }
      ,
      this.getChartId = function() {
        return I.uid
      }
      ,
      this.getSymbols = function() {
        return L.getAllSymbols()
      }
      ,
      this.patcher = {
        iMgr: Y.patcher
      },
      this.getExtraData = function(e) {
        return L.getExtraData(e)
      }
      ,
      this.getCurrentData = function() {
        var e = T.get($.viewId);
        return e && (e = e[e.length - 1]),
        t.clone(e, null)
      }
      ,
      this.getCurrentRange = function() {
        for (var e, t, n, a = [], i = L.getAllStock(), o = 0, r = i.length; r > o; o++)
          n = i[o],
          t = n.getName(),
          e = n.datas,
          a.push({
            name: t,
            rangedata: e,
            symbol: n.symbol
          });
        return a
      }
      ,
      this.zoom = function(e) {
        L.zoomApi(e),
        t.stc("k_zoom", e, 9e3)
      }
      ,
      this.move = function(e) {
        e = parseInt(e),
        isNaN(e) || (L.moveApi(e),
        t.stc("k_move", e, 9e3))
      }
      ,
      this.update = function() {
        L.updateDataAll(),
        t.stc("k_up", 9e3)
      }
      ,
      this.type = "h5k",
      this.me = k
    }
    ;
    return L.dcInit(a),
    W
  }
  function i() {
    this.get = function(e, n) {
      t.stc("h5k_get");
      var i = new a(e);
      t.isFunc(n) && n(i),
      t.suda("h5k_" + t.market(e.symbol))
    }
    ,
    this.dual = function(e, n) {
      t.stc("h5k_dual"),
      e.linetype = "line";
      var i = new a(e);
      i.setCustom({
        k_overlay: !0
      });
      var o = function(t) {
        i.me.rl(t, o);
        var n = e.dual;
        i.compare({
          symbol: n.symbol,
          name: n.name,
          datas: n.datas,
          linetype: "line",
          linecolor: n.theme
        })
      };
      i.me.al(w.e.K_DATA_LOADED, o, !1),
      t.isFunc(n) && n(i),
      t.suda("dual_" + t.market(e.symbol))
    }
    ,
    this.tick = function(e, n) {
      t.stc("h5k_tick"),
      e.pcm = 1,
      e.view = w.URLHASH.NKMS,
      e.rate = 600,
      e.linetype = "line";
      var i = new a(e,!0);
      t.isFunc(n) && n(i),
      KKE.api("patch.atick.customfloater", {
        chart: i
      }, function(e) {
        i.patcher.iMgr.customFloater(e)
      }),
      i.setCustom({
        smooth: !1
      }),
      t.suda("tick_" + t.market(e.symbol))
    }
  }
  var o, r, s, l = t.$DOM, c = t.$C, h = t.$CONTAINS, d = t.xh5_PosUtil, u = t.xh5_EvtUtil, p = t.oc, m = t.dateUtil, f = m.stbd, v = t.xh5_ADJUST_HIGH_LOW.c, g = t.xh5_BrowserUtil, y = t.fBind, b = t.strUtil.ps, N = n.xh5_Canvas, w = e.globalCfg, M = t.logoM;
  return t.fInherit(a, t.xh5_EvtDispatcher),
  i
});
