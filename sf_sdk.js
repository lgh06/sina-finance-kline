var xh5_define, KKE = KKE || {};
~function(n) {
  "use strict";
  function e(n, e, t) {
    if (!u.isStr(n))
      return void u.err(t, [i.CMD_UNEXIST, n].join(":"));
    e = e || {};
    var r = n.split(".")
      , o = r.splice(r.length - 1, r.length).join("")
      , a = r.splice(r.length - 1, r.length).join("")
      , l = r.splice(0, r.length)
      , s = l.join(".")
      , c = [s, a].join(".");
    d.relyCall(c, function() {
      var r = d.modsTree
        , s = void 0;
      do {
        var c = l.shift();
        if (s = s ? s[c] : r[c],
        !s)
          return void u.err(t, [i.MOD_ERR, a].join(":"))
      } while (l.length);var f = s[a] || {}
        , h = f.entity || {}
        , m = h[o];
      "undefined" == typeof m ? u.err(t, [i.CMD_UNEXIST, n].join(":")) : u.isFunc(m) ? m(e, t) : u.isFunc(t) && t(m)
    }, e.modUrl || null)
  }
  for (var t, r, i = {
    SDK_REG: new RegExp("sf_sdk.js",a),
    isLocal: !1,
    isDebug: !1,
    isSSL: !1,
    custom_mod_url: void 0,
    MOD_URL: "js/$moduleName.js",
    MOD_URL_PROD: "http://finance.sina.com.cn/sinafinancesdk/js/$moduleName.js",
    MOD_URL_PROD_S: "https://ssl-finance.sina.com.cn/sinafinancesdk/js/$moduleName.js",
    getModUrl: function() {
      return this.custom_mod_url ? this.custom_mod_url + "/$moduleName.js" : this.isLocal ? this.MOD_URL : this.isSSL ? this.MOD_URL_PROD_S : this.MOD_URL_PROD
    },
    CMD_404: "error occured while loading",
    CMD_UNEXIST: "calling nonexistent API",
    MOD_ERR: "erroneous module",
    MOD_DEF_ERR: "illegal module",
    DEP_ERR: "error def module"
  }, o = document.getElementsByTagName("script"), a = o.length; a--; )
    if (t = o[a],
    r = t.src || "",
    i.SDK_REG.test(r)) {
      for (var l, s = t.attributes.length; s--; )
        l = t.attributes[s],
        "ssl" == l.name && (i.isSSL = "true" == l.value),
        "debug" == l.name && (i.isDebug = "true" == l.value),
        "local" == l.name && (i.isLocal = "true" == l.value),
        "murl" == l.name && (i.custom_mod_url = l.value);
      break
    }
  0 == location.protocol.indexOf("https:") && (i.isSSL = !0);
  var u = new function() {
    function n(n, e, t, r) {
      var i = !1
        , o = document.createElement("script")
        , a = document.getElementsByTagName("script")[0]
        , l = document.head || document.getElementsByTagName("head")[0] || document.documentElement
        , s = l.getElementsByTagName("base")[0];
      o.charset = r || "gb2312",
      o.src = n,
      o.async = !0,
      o.onload = o.onreadystatechange = function() {
        i || o.readyState && !/loaded|complete/.test(String(o.readyState)) || (i = !0,
        o.onload = o.onreadystatechange = o.onerror = null,
        o.parentNode.removeChild(o),
        o = null,
        "function" == typeof e && e())
      }
      ,
      o.onerror = function() {
        o.onload = o.onreadystatechange = o.onerror = null,
        o.parentNode.removeChild(o),
        o = null,
        "function" == typeof t && t()
      }
      ,
      a.parentNode ? a.parentNode.insertBefore(o, a) : s ? l.insertBefore(o, s) : l.appendChild(o)
    }
    this.fBind = function(n, e) {
      var t = Array.prototype.slice.call(arguments, 2);
      return function() {
        return n.apply(e, t.concat(Array.prototype.slice.call(arguments)))
      }
    }
    ;
    var e = function(n) {
      return function(e) {
        return {}.toString.call(e) == "[object " + n + "]"
      }
    };
    this.isStr = e("String"),
    this.isFunc = e("Function"),
    this.isArr = e("Array"),
    this.trace = function(n) {
      return {
        log: function() {
          n && n.log && n.log.apply(n, arguments)
        },
        error: function() {
          n && n.error && n.error.apply(n, arguments)
        }
      }
    }(null),
    this.err = function(n, e) {
      this.isFunc(n) && n({
        msg: e,
        data: null
      }),
      this.trace.error(e)
    }
    ,
    this.load = n
  }
    , c = ["datas.hq", "datas.k", "datas.t", "utils.util"]
    , d = new function() {
    function n(n, e, r) {
      if (3 != arguments.length)
        return void u.trace.error(i.MOD_DEF_ERR, n);
      var o = t(n)
        , a = o[0]
        , s = o[1]
        , c = a[s];
      c ? c.init = !0 : c = a[s] = {
        init: !0,
        name: n,
        funcQ: [],
        entity: void 0
      },
      u.isStr(e) && (e = [e]);
      for (var d, h = e.length; h--; )
        if (d = e[h],
        d.indexOf("*") > -1) {
          e.splice(h, 1);
          var m = d.split(".");
          m.splice(m.length - 1, m.length);
          var g = m.join(".");
          e = e.concat(f(g, n));
          break
        }
      l(e, e.slice(0), c, r)
    }
    var e = {}
      , t = function(n) {
      for (var t, r = n.split("."), i = r.splice(r.length - 1, r.length).join(""), o = r.splice(0, r.length), a = o.join("."), l = void 0; o.length; ) {
        var s = o.shift();
        l ? (t = l[s],
        t || (t = l[s] = {})) : (t = e[s],
        t || (t = e[s] = {})),
        l = t
      }
      return [l, i, a]
    }
      , r = function(n) {
      for (; n.funcQ.length; ) {
        var e = n.funcQ.shift();
        u.isFunc(e) && e()
      }
    }
      , o = function(n) {
      if (!n)
        return null;
      for (var t = [], r = [], o = 0, a = n.length; a > o; o++) {
        for (var l, s = n[o].split("."), c = void 0; s.length; )
          if (l = s.shift(),
          c = c ? c[l] : e[l],
          !c) {
            u.trace.error(i.DEP_ERR, s.toString());
            break
          }
        r.push(c.entity),
        t.push(l)
      }
      return {
        n: t,
        e: r
      }
    }
      , a = function(n, t, i) {
      var a = t.toString()
        , l = 0 == a.indexOf("function");
      if (l) {
        var s = o(i)
          , c = t.apply(null, s.e.concat(e));
        n.entity = u.isFunc(c) ? new c : c
      } else
        n.entity = t;
      r(n)
    }
      , l = function(n, e, t, r) {
      e.length ? h(e.shift(), u.fBind(l, this, n, e, t, r)) : a(t, r, n)
    }
      , s = function(n, e, t) {
      e = e.replace(/\./g, "/"),
      t && (t += "$moduleName.js");
      var r = t || i.getModUrl();
      u.load(r.replace("$moduleName", e), null, u.fBind(u.trace.error, this, i.CMD_404, n.name))
    }
      , d = function(n, e) {
      u.isArr(n) && (n = n.join("."));
      var r = t(n)
        , i = r[0]
        , o = r[1]
        , a = i[o];
      return a || (a = {
        init: !1,
        name: n,
        funcQ: [],
        entity: void 0
      },
      i[o] = a,
      s(a, n, e)),
      a
    }
      , f = function(n, e) {
      for (var t, r = [], i = c.length; i--; )
        t = c[i],
        0 == t.indexOf(n) && -1 == t.indexOf(e) && (r[r.length] = t);
      return r
    }
      , h = function(n, e, t) {
      var r = d(n, t);
      u.isFunc(e) && (r.init ? e() : r.funcQ.push(e))
    };
    this.modsTree = e,
    this.relyCall = h,
    xh5_define = n
  }
  ;
  n.api = e,
  n.cls = {},
  n.istLL = "KKE|1.0.3|WANGXuan|SinaFinance|wangxuan2@staff.sina.com.cn"
}(KKE);
;xh5_define("utils.util", [], function() {
  return function() {
    function t(t, e) {
      var n = w(e.prototype);
      n.constructor = t,
      t.prototype = n
    }
    function e() {
      this.evtObj = {}
    }
    function n(t, e) {
      var n = Array.prototype.slice.call(arguments, 2);
      return function() {
        return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
      }
    }
    function r() {
      return Date.now ? Date.now() : (new Date).getTime()
    }
    function i(t, e) {
      e || (t = t.toLowerCase());
      for (var n, r = 1315423911, i = t.length; i--; )
        n = t.charCodeAt(i),
        r ^= (r << 5) + n + (r >> 2);
      return 2147483647 & r
    }
    function a(t, e, n, r) {
      var i = !1
        , a = document.createElement("script")
        , o = document.getElementsByTagName("script")[0]
        , s = document.head || document.getElementsByTagName("head")[0] || document.documentElement
        , l = s.getElementsByTagName("base")[0];
      a.charset = r || "gb2312",
      a.src = t,
      a.async = !0,
      a.onload = a.onreadystatechange = function() {
        i || a.readyState && !/loaded|complete/.test(a.readyState) || (i = !0,
        a.onload = a.onreadystatechange = a.onerror = null,
        a.parentNode.removeChild(a),
        a = null,
        "function" == typeof e && e())
      }
      ,
      a.onerror = function() {
        a.onload = a.onreadystatechange = a.onerror = null,
        a.parentNode.removeChild(a),
        a = null,
        "function" == typeof n && n()
      }
      ,
      o.parentNode ? o.parentNode.insertBefore(a, o) : l ? s.insertBefore(a, l) : s.appendChild(a)
    }
    function o() {
      function t(t) {
        var e = t.style;
        for (var n in e)
          e.hasOwnProperty(n) && (t.dom.style[n] = e[n])
      }
      function e() {
        for (var t = ["@keyframes KKELoading", "@-webkit-keyframes KKELoading", "@-moz-keyframes KKELoading"], e = 0, n = t.length; n > e; e++)
          l.cssUtil.inject(t[e] + s.scaleY)
      }
      function n() {
        if (e(),
        !i) {
          i = l.$C("div"),
          t({
            dom: i,
            style: s.ctn
          });
          for (var n = .1, r = 0, a = s.color.length; a > r; r++) {
            var o = l.$C("span");
            t({
              dom: o,
              style: s.item
            });
            var u = l.clone(s.delay, u)
              , c = -1 + n * r + "s";
            for (var d in u)
              u.hasOwnProperty(d) && (u[d] = c);
            t({
              dom: o,
              style: u
            }),
            o.style.background = s.color[r],
            i.appendChild(o)
          }
        }
      }
      function r() {
        clearTimeout(o),
        o = setTimeout(function() {
          "none" != i.style.display && (i.style.display = "none")
        }, 9e3)
      }
      var i, a, o, s = {
        ctn: {
          width: "40px",
          height: "30px",
          margin: 0,
          display: "none",
          position: "absolute",
          zIndex: 1
        },
        item: {
          display: "inline-block",
          width: "4px",
          height: "30px",
          margin: "0px 2px",
          borderRadius: "5px",
          animation: "KKELoading 1.2s infinite",
          webkitAnimation: "KKELoading 1.2s infinite",
          MozAnimation: "KKELoading 1.2s infinite"
        },
        color: ["#FF5472", "#FF706E", "#FF8762", "#FFAF4C", "#FFD53E"],
        delay: {
          animationDelay: -1,
          webkitAnimationDelay: -1,
          MozAnimationDelay: -1
        },
        scaleY: "{0%,40%,100%{-moz-transform:scaleY(0.2);-webkit-transform:scaleY(0.2);transform:scaleY(0.2);}20%,60%{-moz-transform:scaleY(1);-webkit-transform:scaleY(1);transform:scaleY(1);}}"
      };
      n(),
      this.appendto = function(t) {
        a = t,
        a.appendChild(i)
      }
      ,
      this.setPosition = function() {
        a && a.offsetHeight > 0 && (i.style.top = (a.offsetHeight - g(s.ctn.height)) / 2 + "px",
        i.style.left = (a.offsetWidth - g(s.ctn.width)) / 2 + "px")
      }
      ,
      this.show = function() {
        r(),
        i.style.display = ""
      }
      ,
      this.hide = function() {
        clearTimeout(o),
        i.style.display = "none"
      }
    }
    function s(t) {
      t = t || {};
      var e, n, r, i, a, o, s = l.$C("div"), u = 70, c = function() {
        clearTimeout(o),
        n && (n.style.display = "none",
        s.innerHTML = ""),
        e && h(e.closeCb) && e.closeCb()
      }, d = function(d) {
        if (e = d,
        clearTimeout(o),
        !n) {
          n = l.$C("div"),
          n.style.width = "100%",
          n.style.height = "100%",
          n.style.position = "absolute",
          n.style.zIndex = u,
          n.style.top = 0,
          n.style.textAlign = "center",
          r = l.$C("div"),
          i = l.$C("div"),
          a = l.$C("span"),
          s.style.fontSize = "12px",
          s.style.margin = "9px auto",
          r.style.position = "absolute",
          r.style.top = 0,
          r.style.left = 0,
          r.style.width = "100%",
          r.style.height = "100%",
          r.style.backgroundColor = t.TIP_ARR ? t.TIP_ARR[2] || "#fff" : "#fff",
          r.style.opacity = .5,
          r.style.filter = "alpha(opacity=50)",
          i.style.padding = "1px 3px 10px",
          i.style.top = t.TIP_ARR ? t.TIP_ARR[4] || "26%" : "26%",
          i.style.position = "relative",
          i.style.margin = "0 auto",
          i.style.width = "100%",
          a.style.cursor = "pointer",
          a.style.display = "block",
          a.style.margin = "0 auto",
          a.style.lineHeight = a.style.height = "28px",
          a.style.width = "60px",
          a.style.fontSize = "14px",
          a.style.borderRadius = "3px",
          l.xh5_EvtUtil.addHandler(a, "click", c),
          i.appendChild(s);
          var h = !(!t.TIP_ARR || !t.TIP_ARR[3]);
          !h && n.appendChild(r),
          n.appendChild(i)
        }
        n.style.display = "",
        s.style.color = "undefined" != typeof d.fontColor ? d.fontColor : t.TIP_ARR ? t.TIP_ARR[1] || "#fff" : "#fff";
        var f = t.TIP_ARR ? t.TIP_ARR[0] || "#000" : "#000";
        if (i.style.backgroundColor = l.xh5_BrowserUtil.noH5 ? f : l.hex2dec(f, .8),
        d.bgStyle)
          for (var p in d.bgStyle)
            d.bgStyle.hasOwnProperty(p) && (i.style[p] = d.bgStyle[p]);
        if (s.innerHTML = d.txt || "",
        d.content && s.appendChild(d.content),
        !isNaN(d.autoHide) && d.autoHide > 0 && setTimeout(c, 1e3 * d.autoHide),
        d.noBtn ? l.$CONTAINS(i, a) && i.removeChild(a) : (a.innerHTML = d.btnLb || "\u786e\u5b9a",
        a.style.background = t.BTN_ARR ? t.BTN_ARR[0] || "#2b9dfc" : "#2b9dfc",
        a.style.color = t.BTN_ARR ? t.BTN_ARR[1] || "#fff" : "#fff",
        !l.$CONTAINS(i, a) && i.appendChild(a)),
        d.extraBtn)
          for (var m = 0, g = d.extraBtn, v = g.length; v > m; m++) {
            var b = g[m]
              , y = l.$C("input");
            y.type = "button",
            y.value = b.value,
            y.style.marginTop = "20px",
            y.style.cursor = "pointer",
            l.xh5_EvtUtil.addHandler(y, "click", b.onClk),
            i.appendChild(y)
          }
        return d.parent.appendChild(n),
        n
      };
      this.genTip = d,
      this.hide = c
    }
    this.VER = "2.2.30";
    var l = this
      , u = function(t) {
      return function(e) {
        return {}.toString.call(e) == "[object " + t + "]"
      }
    }
      , c = u("Object")
      , d = u("String")
      , h = u("Function")
      , f = u("Array")
      , p = u("Number")
      , m = u("Date");
    this.isObj = c,
    this.isStr = d,
    this.isFunc = h,
    this.isArr = f,
    this.isNum = p,
    this.isDate = m;
    var g = function(t) {
      return parseInt(t, 10)
    };
    this.uae = function(t) {
      for (var e, n = [], r = {}, i = 0, a = t.length; a > i; i++)
        e = t[i],
        1 !== r[e] && (r[e] = 1,
        n[n.length] = e);
      return n
    }
    ;
    var v = new function() {
      var t;
      if (XMLHttpRequest)
        t = new XMLHttpRequest;
      else if (ActiveXObject)
        try {
          t = new ActiveXObject("MSXML2.XMLHTTP")
        } catch (e) {
          try {
            t = new ActiveXObject("Microsoft.XMLHTTP")
          } catch (n) {}
        }
      this.send = function(e, n, r, i) {
        if (!t || !e)
          return void (r && r("error while sending"));
        if (e += e.indexOf("?") < 0 ? "?" : "&",
        e += "_=" + (new Date).getTime(),
        i = i || "POST",
        t.onreadystatechange = function() {
          if (4 == t.readyState) {
            var e;
            200 == t.status && (e = t.responseText),
            r && r(e)
          }
        }
        ,
        t.open(i, e, !0),
        "POST" == i) {
          t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
          var a = "";
          for (var o in n)
            n.hasOwnProperty(o) && (a += [encodeURIComponent(o), encodeURIComponent(n[o])].join("=") + "&");
          t.send(a)
        } else
          t.send(null)
      }
    }
    ;
    this.POST = "undefined" != typeof jQuery && jQuery.post ? jQuery.post : v.send,
    this.trace = function(t) {
      return {
        log: function() {
          t && t.log && t.log.apply(t, arguments)
        },
        error: function() {
          t && t.error && t.error.apply(t, arguments)
        }
      }
    }(null);
    var b = function(t, e) {
      var n = -1;
      if (t.indexOf)
        n = t.indexOf(e);
      else
        for (var r = t.length; r--; )
          if (t[r] === e) {
            n = r;
            break
          }
      return n
    };
    this.arrIndexOf = b;
    var y = function(t, e) {
      if (null == t || "object" != typeof t)
        return t;
      if (t.constructor == Date || t.constructor == RegExp || h(t) || d(t) || t.constructor == Number || t.constructor == Boolean)
        return new t.constructor(t);
      e = e || new t.constructor;
      for (var n in t)
        t.hasOwnProperty(n) && (e[n] = "undefined" == typeof e[n] ? y(t[n], null) : e[n]);
      return e
    };
    this.clone = y;
    var N = function(t) {
      if (!t)
        return t;
      var e = {};
      for (var n in t)
        t.hasOwnProperty(n) && (e[n] = t[n]);
      return e
    };
    this.co = N,
    this.oc = function(t, e) {
      if (!t)
        return e;
      for (var n in e)
        e.hasOwnProperty(n) && (t[n] = c(t[n]) && c(e[n]) ? arguments.callee(t[n], e[n]) : e[n]);
      return t
    }
    ;
    var w = function(t) {
      function e() {}
      return e.prototype = t,
      new e
    };
    this.fInherit = t,
    this.urlUtil = new function() {
      this.getUrlParam = function() {
        var t, e = {};
        try {
          t = location.search.substring(1)
        } catch (n) {}
        if (t)
          for (var r, i, a, o = t.split("&"), s = o.length, l = 0; s > l; l++)
            a = o[l].indexOf("="),
            -1 != a && (r = o[l].substring(0, a),
            i = o[l].substring(a + 1),
            e[r] = i);
        return e
      }
      ,
      this.getMainUrl = function() {
        return window.location != window.parent.location ? document.referrer : document.location.href
      }
    }
    ,
    this.xh5_BrowserUtil = new function() {
      this.info = function() {
        var t, e = navigator.userAgent, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
        {
          name: "IE ",
          version: t[1] || ""
        }) : "Chrome" === n[1] && (t = e.match(/\bOPR\/(\d+)/),
        null != t) ? {
          name: "Opera",
          version: t[1]
        } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]),
        {
          name: n[0],
          version: n[1]
        })
      }(),
      this.noH5 = !1,
      this.hdpr = function(t) {
        var e = document.createElement("canvas");
        if (e.getContext && e.getContext("2d")) {
          var n = Math.ceil(window.devicePixelRatio || 1)
            , r = e.getContext("2d").webkitBackingStorePixelRatio || 1;
          return n / r
        }
        return t.noH5 = !0,
        1
      }(this)
    }
    ,
    this.xh5_deviceUtil = function() {
      return {
        istd: function() {
          if ("ontouchend"in window) {
            var t;
            try {
              t = navigator.userAgent
            } catch (e) {}
            return t && t.indexOf("Windows NT") > 0 ? !1 : !0
          }
          return !1
        }(),
        allowt: "ontouchend"in window
      }
    }();
    var x = function() {
      function t(t) {
        return t = JSON.stringify(t),
        t || (t = ""),
        t = encodeURIComponent(t)
      }
      function e(t) {
        try {
          t = JSON.parse(t)
        } catch (e) {
          t = decodeURIComponent(t)
        }
        return t
      }
      function n(e, n, r) {
        if (r = r || {},
        void 0 != e && void 0 != n) {
          var i, a, o, s;
          a = r.path ? "; path=" + r.path : "",
          o = r.domain ? "; domain=" + r.domain : "",
          s = r.secure ? "; secure" : "";
          var l, c = r.expires;
          switch (u(c)) {
          case "Number":
            l = new Date,
            l.setTime(l.getTime() + 1e3 * c);
            break;
          case "String":
            l = new Date(c),
            "Invalid Date" == l && (l = "");
            break;
          case "Date":
            l = c
          }
          i = l ? "; expires=" + l.toUTCString() : "",
          document.cookie = [encodeURIComponent(e), "=", t(n), i, a, o, s].join("")
        }
      }
      function r(t) {
        var n = document.cookie.match("(?:^|;)\\s*" + encodeURIComponent(t) + "=([^;]*)");
        return n ? e(n[1]) || "" : null
      }
      function i(t) {
        document.cookie = encodeURIComponent(t) + "=;expires=" + new Date(0).toUTCString()
      }
      function a(e, n) {
        void 0 != e && void 0 != n && localStorage.setItem(encodeURIComponent(e), t(n))
      }
      function o(t) {
        var n = localStorage.getItem(encodeURIComponent(t));
        return e(n)
      }
      function s(t) {
        localStorage.removeItem(encodeURIComponent(t))
      }
      var l = Object.prototype.toString
        , u = function(t) {
        return null === t ? "Null" : void 0 === t ? "Undefined" : l.call(t).slice(8, -1)
      }
        , c = function() {
        if ("object" == typeof localStorage && localStorage && localStorage.setItem) {
          var t = "KKE_LOCALSTORAGE_TESTing";
          try {
            return localStorage.removeItem(t),
            localStorage.setItem(t, t),
            localStorage.removeItem(t),
            !0
          } catch (e) {
            return !1
          }
        }
        return !1
      }();
      return {
        hasls: c,
        save: function(t, e, r) {
          r = r || {};
          var i = r.mode;
          if (i)
            switch (i) {
            case "localStorage":
              if (!c)
                return;
              a(t, e);
              break;
            case "cookie":
              n(t, e, r)
            }
          else if (c)
            try {
              s(t),
              a(t, e)
            } catch (o) {}
          else
            n(t, e, r)
        },
        load: function(t, e) {
          var n;
          if ("Object" == u(e) && (e = e.mode),
          e)
            switch (e) {
            case "localStorage":
              if (!c)
                return;
              n = o(t);
              break;
            case "cookie":
              n = r(t)
            }
          else
            c && (n = o(t)),
            !n && (n = r(t));
          return n
        },
        remove: function(t, e) {
          if ("Object" == u(e) && (e = e.mode),
          e)
            switch (e) {
            case "localStorage":
              if (!c)
                return;
              s(t);
              break;
            case "cookie":
              i(t)
            }
          else
            c && s(t),
            i(t)
        },
        clear: function(t) {
          c && s(t)
        }
      }
    }();
    this.localSL = x,
    this.xh5_EvtUtil = {
      addHandler: function(t, e, n) {
        t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n)
      },
      removeHandler: function(t, e, n) {
        t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null)
      },
      getEvent: function(t) {
        return t ? t : window.event
      },
      getTarget: function(t) {
        return !t && (t = this.getEvent()),
        t ? t.target || t.srcElement : null
      },
      preventDefault: function(t) {
        !t && (t = this.getEvent()),
        t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
      },
      stopPropagation: function(t) {
        !t && (t = this.getEvent()),
        t && (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0)
      },
      getRelatedTarget: function(t) {
        return !t && (t = this.getEvent()),
        t.relatedTarget ? t.relatedTarget : t.toElement ? t.toElement : t.fromElement ? t.fromElement : null
      },
      getWheelDelta: function(t) {
        return !t && (t = this.getEvent()),
        t ? t.wheelDelta ? client.engine.opera && client.engine.opera < 9.5 ? -t.wheelDelta : t.wheelDelta : 40 * -t.detail : 0
      }
    },
    e.prototype.al = function(t, e, n) {
      n && this.evtObj[t] || (!this.evtObj[t] && (this.evtObj[t] = []),
      this.evtObj[t].push(e))
    }
    ,
    e.prototype.rl = function(t, e) {
      var n = this.evtObj[t];
      if (f(n))
        for (var r = n.length; r--; )
          n[r] == e && n.splice(r, 1)
    }
    ,
    e.prototype.re = function(t, e) {
      var n = this.evtObj[t];
      if (f(n))
        for (var r = 0, i = n.length; i > r; r++)
          "function" == typeof n[r] && n[r](t, e)
    }
    ,
    this.xh5_EvtDispatcher = e,
    this.$DOM = function(t, e) {
      return e = e || document,
      e.getElementById(t)
    }
    ,
    this.$C = function(t, e) {
      var n = document.createElement(t);
      return e && (n.id = e),
      n
    }
    ,
    this.$T = function(t) {
      return document.createTextNode(t)
    }
    ,
    this.$CONTAINS = function(t, e) {
      if (t.compareDocumentPosition)
        return t === e || !!(16 & t.compareDocumentPosition(e));
      if (t.contains && 1 === e.nodeType)
        return t.contains(e) && t !== e;
      for (; e = e.parentNode; )
        if (e === t)
          return !0;
      return !1
    }
    ,
    this.getTextNodes = function(t) {
      var e = [];
      for (t = t.firstChild; t; t = t.nextSibling)
        3 == t.nodeType ? e.push(t) : e = e.concat(arguments.callee(t));
      return e
    }
    ,
    this.getCSS = function(t) {
      var e = null;
      return e = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
    }
    ,
    this.fBind = n,
    this.isColor = function(t) {
      return /^#[0-9a-fA-F]{3,6}$/.test(t)
    }
    ,
    this.isColorRGB = function(t) {
      return /(^#[0-9a-fA-F]{3,6}$)|(^rgba?\(.{5,16}\)$)/.test(t)
    }
    ,
    this.randomColor = function() {
      for (var t = Math.floor(16777215 * Math.random()).toString(16); t.length < 6; )
        t += "0";
      return t
    }
    ,
    this.hex2dec = function(t, e, n) {
      if (0 == t.indexOf("rgb"))
        return t;
      t = t.replace(/#|0x/i, "");
      var r, i, a;
      t.replace(/(\w{6})|(\w{3})/, function(e, n, o) {
        if (n)
          r = t.slice(0, 2),
          i = t.slice(2, 4),
          a = t.slice(4);
        else {
          if (!o)
            return [0, 0, 0];
          var s = t.split("");
          r = s[0],
          r += String(r),
          i = s[1],
          i += String(i),
          a = s[2],
          a += String(a)
        }
      });
      var o;
      return isNaN(e) ? (o = [parseInt(r, 16), parseInt(i, 16), parseInt(a, 16)],
      n ? o : "rgb($color)".replace("$color", o.join(","))) : (o = [parseInt(r, 16), parseInt(i, 16), parseInt(a, 16), e],
      n ? o : "rgba($color)".replace("$color", o.join(",")))
    }
    ,
    this.getTimestamp = r,
    this.cssUtil = {
      inject: function(t) {
        var e = document.createElement("style")
          , n = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        e.type = "text/css",
        e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
        n.appendChild(e)
      },
      adCls: function(t, e) {
        if (t.className != e) {
          var n = t.className.split(" ");
          for (var r in n)
            if (n.hasOwnProperty(r) && n[r] == e)
              return;
          "" == t.className ? t.className = e : t.className += " " + e
        }
      },
      rmCls: function(t, e) {
        if (-1 != t.className.indexOf(e))
          if (t.className == e)
            t.className = "";
          else {
            var n = t.className.split(" ")
              , r = "";
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                if (n[i] == e)
                  continue;
                "" != r && (r += " "),
                r += n[i]
              }
            t.className = r
          }
      }
    },
    this.load = a;
    var _, T = new function() {
      var t = _ || {};
      _ = t;
      var e = function(e, n) {
        for (var r = t[e][n ? "errCbArr" : "cbArr"], i = r.length; i--; ) {
          var a = r[i];
          h(a) && a()
        }
        t[e] = null,
        delete t[e]
      };
      this.load = function(r, o, s, l) {
        var u = "urlhash_" + i(r);
        for (var c in t)
          if (t.hasOwnProperty(c) && c == u)
            return t[c].cbArr.push(o),
            void t[c].errCbArr.push(s);
        t[u] = {
          url: r,
          cbArr: [o],
          errCbArr: [s]
        },
        a(r, n(e, this, u), n(e, this, u, !0), l)
      }
    }
    ;
    this.relyLoader = T,
    this.iframer = function(t, e) {
      function n() {
        if (document && document.body) {
          clearInterval(i),
          o = 0;
          var t = document.body;
          t.insertBefore(r, t.firstChild),
          r.setAttribute("data-ready", "1")
        } else
          o++ > 9 && (clearInterval(i),
          h(e) && e())
      }
      var r, i, a = t.attribute ? t.attribute.id || "_kkeiframe" + (new Date).getTime() : "_kkeiframe" + (new Date).getTime(), o = 0;
      if (!(r = document.getElementById(a))) {
        if (r = document.createElement("iframe"),
        r.setAttribute("data-ready", "0"),
        t.attribute)
          for (var s in t.attribute)
            t.attribute.hasOwnProperty(s) && (r[s] = t.attribute[s]);
        if (r.style.height = r.style.width = 0,
        r.style.borderStyle = "none",
        r.style.position = "absolute",
        r.style.zIndex = -9,
        r.style.display = "none",
        t.style)
          for (var l in t.style)
            t.style.hasOwnProperty(l) && (r.style[l] = t.style[l]);
        i = setInterval(n, 500),
        n()
      }
      return r
    }
    ,
    this.ca = function(t) {
      if (t)
        for (; t.length > 0; )
          t.length--
    }
    ,
    this.isRepos = function(t) {
      return /^(sh204\d{3}|sz1318\d{2})$/.test(t)
    }
    ,
    this.market = function(t) {
      return /^s[hz]\d{6}$/.test(t) ? "CN" : /^s[hz]\d{6}_i$/.test(t) ? "CNI" : /^sb[48]\d{5}$/.test(t) ? "OTC" : /^[48]\d{5}$/.test(t) ? "OTC" : /^otc_\d{6}$/.test(t) ? "OTC" : /^gb_.+$/.test(t) ? "US" : /^(hk|rt_hk)\w+/.test(t) ? "HK" : /^hf_\w+/.test(t) ? "HF" : /^nf_\w+/.test(t) ? "NF" : /^f_\d{6}$/.test(t) || /^fu_\d{6}$/.test(t) || /^pwbfbyd_\d{6}$/.test(t) || /^pwbfbjd_\d{6}$/.test(t) || /^pwbfbnd_\d{6}$/.test(t) || /^ljjz_\d{6}$/.test(t) || /^dwjz_\d{6}$/.test(t) || /^lshb_\d{6}$/.test(t) ? "fund" : /^CON_OP_\w+/.test(t) ? "option_cn" : /^fx_.+$/.test(t) ? "forex" : /^(DINIW|USDCNY)$/.test(t) ? "forex_yt" : /^CFF_RE_.+$/.test(t) ? "CFF" : /\d+$/.test(t) ? "NF" : void 0
    }
    ,
    this.cookieUtil = {
      escape: function(t) {
        return t.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
      },
      get: function(t) {
        var e = document.cookie.match("(?:^|;)\\s*" + this.escape(t) + "=([^;]*)");
        return e ? e[1] || "" : ""
      },
      set: function(t, e, n) {
        !n && (n = {}),
        e || (e = "",
        n.expires = -1);
        var r = "";
        if (n.expires && (Number(n.expires) || n.expires.toUTCString)) {
          var i;
          Number(n.expires) ? (i = new Date,
          i.setTime(i.getTime() + 1e3 * n.expires)) : i = n.expires,
          r = "; expires=" + i.toUTCString()
        }
        var a = n.path ? "; path=" + n.path : ""
          , o = n.domain ? "; domain=" + n.domain : ""
          , s = n.secure ? "; secure" : "";
        document.cookie = [t, "=", e, r, a, o, s].join("")
      }
    };
    var A = new function() {
      function t() {
        a(e, function() {
          for (; d.length; ) {
            var t = d.pop();
            SUDA.uaTrack.apply(null, t)
          }
        }, function() {
          c--,
          c && t(),
          c || (d = [])
        })
      }
      var e = "https://wwws.sinaimg.cn/unipro/pub/suda_s_v851c.js"
        , n = navigator.userAgent || "unknownUa";
      n = encodeURIComponent("_UA_" + n);
      var r, i, o = "chart_finance", s = "", l = ",", u = [], c = 5, d = [];
      "undefined" == typeof SUDA && t();
      var h = function() {
        for (var t, e = "", r = 0, a = u.length; a > r; r++)
          t = u[r],
          e += [t.k, t.v].join(s) + l;
        for (; u.length; )
          u.length--;
        if (e !== i) {
          i = e,
          e += n;
          try {
            SUDA.uaTrack(o, e)
          } catch (h) {
            c && d.push([o, e])
          }
        }
      };
      this.s = function(t, e, n) {
        if (t) {
          (isNaN(n) || 0 > n) && (n = 3e3),
          e = JSON.stringify(e),
          e || (e = ""),
          e = encodeURIComponent(e);
          for (var i = u.length; i--; )
            if (u[i].k == t) {
              u.splice(i, 1);
              break
            }
          u.push({
            k: t,
            v: e
          }),
          clearTimeout(r),
          r = setTimeout(h, n)
        }
      }
      ;
      var f, p;
      this.s2 = function(t, e, n) {
        if (n = n || "chart_detail",
        p != t || f != n) {
          f = n,
          p = t,
          setTimeout(function() {
            f = void 0,
            p = void 0
          }, 99);
          try {
            SUDA.uaTrack(n, e || t)
          } catch (r) {
            c && d.push([n, e || t])
          }
        }
      }
    }
    ;
    this.stc = A.s,
    this.suda = A.s2,
    this.xh5_PosUtil = {
      pp: function(t, e, n, r) {
        return isNaN(t) || e >= t ? r : t >= n ? 1 : Math.max(r * (1 - (t - e) / (n - e)), 1)
      },
      ppp: function(t, e, n, r, i) {
        return t = (t - i) / i,
        this.pp(t, e, n, r)
      },
      vp: function(t, e, n) {
        return isNaN(t) || 0 >= t ? n - 1 : n * (1 - t / e)
      }
    },
    this.xh5_HtmlPosUtil = {
      pageX: function(t) {
        return t.offsetParent ? t.offsetLeft + this.pageX(t.offsetParent) : t.offsetLeft
      },
      pageY: function(t) {
        return t.offsetParent ? t.offsetTop + this.pageY(t.offsetParent) : t.offsetTop
      },
      parentX: function(t) {
        return t.parentNode == t.offsetParent ? t.offsetLeft : this.pageX(t) - this.pageX(t.parentNode)
      },
      parentY: function(t) {
        return t.parentNode == t.offsetParent ? t.offsetTop : this.pageY(t) - this.pageY(t.parentNode)
      }
    },
    this.xh5_ADJUST_HIGH_LOW = new function() {
      var t = function(t) {
        var e = parseInt(Math.round(100 * t));
        return e % 100 != 0 && (e % 10 == 0 && (e *= .1),
        e % 5 != 0 && e % 2 != 0) ? !0 : !1
      }
        , e = function(t, e) {
        if (e)
          for (; t > 5; )
            if (t % 2 == 0)
              t *= .5;
            else {
              if (t % 3 != 0)
                break;
              t /= 3
            }
        else
          t > 9 && (t % 3 == 0 ? t /= 3 : t % 4 == 0 ? t *= .25 : t % 2 == 0 && (t *= .5));
        return t
      };
      this.c = function(n, r, i, a, o, s) {
        if (isNaN(n) || isNaN(r) || r > n)
          return [0, 0, 0];
        isNaN(s) || (s = (n - r) * s,
        n += s,
        r -= s);
        for (var l, u, c, d, h, f, p, m, g, v, b, y, N, w, x = -1e-6, _ = .5 * (r + n), T = a ? [4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20] : [4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20], A = [1, 2, 3, 4, 5, 6, 8], k = !1, C = A.length, S = 0, D = T.length; D > S; S++)
          for (k = !1,
          N = T[S],
          c = (n - r) / N,
          m = Math.pow(10, 0 - i); !k; ) {
            for (w = 0; C > w; w++)
              if (d = m * A[w],
              d - c > x && (1 & N ? (h = Math.round((_ + .5 * d) / d) * d,
              b = (h + .5 * (N - 1) * d).toFixed(5),
              y = (h - .5 * (N + 1) * d).toFixed(5)) : (h = Math.round(_ / d) * d,
              b = (h + .5 * N * d).toFixed(5),
              y = (h - .5 * N * d).toFixed(5)),
              f = Number(b),
              p = Number(y),
              f - n > x && x > p - r)) {
                if (k = !0,
                0 > p && !o && (f -= p,
                p = 0),
                !g) {
                  g = f - p,
                  l = f,
                  u = p,
                  v = N;
                  break
                }
                var P = (f - p) / e(N);
                if (1 != Math.round(100 * P) && 1 != Math.round(10 * P) && t(P))
                  break;
                if (f - p > g)
                  break;
                if (f - p == g) {
                  var F = l - n
                    , O = r - u
                    , L = Math.abs(F - O);
                  F = f - n,
                  O = r - p;
                  var K = Math.abs(F - O);
                  if (K >= L)
                    break
                }
                if (t(f))
                  break;
                if (t(p))
                  break;
                g = f - p,
                l = f,
                u = p,
                v = N;
                break
              }
            m *= 10
          }
        return v = e(v, a),
        [l, u, v]
      }
    }
    ,
    this.xh5_S_KLC_D = function(t) {  // LGH 历史某天 分时线 解密 加密
      var e, n, r, i, a, o, s, l = 864e5, u = 7657, c = [], d = [], h = ~(3 << 30), f = 1 << 30, p = [0, 3, 5, 6, 9, 10, 12, 15, 17, 18, 20, 23, 24, 27, 29, 30], m = Math, g = function() {
        var l, u;
        for (l = 0; 64 > l; l++)
          d[l] = m.pow(2, l),
          26 > l && (c[l] = v(l + 65),
          c[l + 26] = v(l + 97),
          10 > l && (c[l + 52] = v(l + 48)));
        for (c.push("+", "/"),
        c = c.join(""),
        n = t.split(""),
        r = n.length,
        l = 0; r > l; l++)
          n[l] = c.indexOf(n[l]);
        return i = {},
        e = o = 0,
        a = {},
        u = w([12, 6]),
        s = 63 ^ u[1],
        {
          _1479: A,
          _136: T,
          _200: _,
          _139: k,
          _197: C
        }["_" + u[0]] || function() {
          return []
        }
      }, v = String.fromCharCode, b = function(t) {
        return t === {}._
      }, y = function() {
        var t, e;
        for (t = N(),
        e = 1; ; ) {
          if (!N())
            return e * (2 * t - 1);
          e++
        }
      }, N = function() {
        var t;
        return e >= r ? 0 : (t = n[e] & 1 << o,
        o++,
        o >= 6 && (o -= 6,
        e++),
        !!t)
      }, w = function(t, i, a) {
        var s, l, u, c, h;
        for (l = [],
        u = 0,
        i || (i = []),
        a || (a = []),
        s = 0; s < t.length; s++)
          if (c = t[s],
          u = 0,
          c) {
            if (e >= r)
              return l;
            if (t[s] <= 0)
              u = 0;
            else if (t[s] <= 30) {
              for (; h = 6 - o,
              h = c > h ? h : c,
              u |= (n[e] >> o & (1 << h) - 1) << t[s] - c,
              o += h,
              o >= 6 && (o -= 6,
              e++),
              c -= h,
              !(0 >= c); )
                ;
              i[s] && u >= d[t[s] - 1] && (u -= d[t[s]])
            } else
              u = w([30, t[s] - 30], [0, i[s]]),
              a[s] || (u = u[0] + u[1] * d[30]);
            l[s] = u
          } else
            l[s] = 0;
        return l
      }, x = function(t) {
        var e, n, r, a;
        for (t > 1 && (e = 0),
        e = 0; t > e; e++)
          i.d++,
          r = i.d % 7,
          (3 == r || 4 == r) && (i.d += 5 - r);
        return n = new Date,
        a = 60 * n.getTimezoneOffset() * 1e3,
        n.setTime((u + i.d) * l + a),
        n.setHours(n.getHours() + 8),
        n
      }, _ = function() {
        var t, n, a, o, l;
        if (s >= 1)
          return [];
        for (i.d = w([18], [1])[0] - 1,
        a = w([3, 3, 30, 6]),
        i.p = a[0],
        i.ld = a[1],
        i.cd = a[2],
        i.c = a[3],
        i.m = m.pow(10, i.p),
        i.pc = i.cd / i.m,
        n = [],
        t = 0; o = {
          d: 1
        },
        N() && (a = w([3])[0],
        0 == a ? o.d = w([6])[0] : 1 == a ? (i.d = w([18])[0],
        o.d = 0) : o.d = a),
        l = {
          date: x(o.d)
        },
        N() && (i.ld += y()),
        a = w([3 * i.ld], [1]),
        i.cd += a[0],
        l.close = i.cd / i.m,
        n.push(l),
        !(e >= r) && (e != r - 1 || 63 & (i.c ^ t + 1)); t++)
          ;
        return n[0].prevclose = i.pc,
        n
      }, T = function() {
        var t, n, a, o, l, u, c, d, h, f, p;
        if (s >= 2)
          return [];
        for (c = [],
        h = {
          v: "volume",
          p: "price",
          a: "avg_price"
        },
        i.d = w([18], [1])[0] - 1,
        d = {
          date: x(1)
        },
        a = w(1 > s ? [3, 3, 4, 1, 1, 1, 5] : [4, 4, 4, 1, 1, 1, 3]),
        t = 0; 7 > t; t++)
          i[["la", "lp", "lv", "tv", "rv", "zv", "pp"][t]] = a[t];
        for (i.m = m.pow(10, i.pp),
        s >= 1 ? (a = w([3, 3]),
        i.c = a[0],
        a = a[1]) : (a = 5,
        i.c = 2),
        i.pc = w([6 * a])[0],
        d.pc = i.pc / i.m,
        i.cp = i.pc,
        i.da = 0,
        i.sa = i.sv = 0,
        t = 0; !(e >= r) && (e != r - 1 || 7 & (i.c ^ t)); t++) {
          for (l = {},
          o = {},
          f = i.tv ? N() : 1,
          n = 0; 3 > n; n++)
            if (p = ["v", "p", "a"][n],
            (f ? N() : 0) && (a = y(),
            i["l" + p] += a),
            u = "v" == p && i.rv ? N() : 1,
            a = w([3 * i["l" + p] + ("v" == p ? 7 * u : 0)], [!!n])[0] * (u ? 1 : 100),
            o[p] = a,
            "v" == p) {
              if (!(l[h[p]] = a) && 241 > t && (i.zv ? !N() : 1)) {
                o.p = 0;
                break
              }
            } else
              "a" == p && (i.da = (1 > s ? 0 : i.da) + o.a);
          i.sv += o.v,
          l[h.p] = (i.cp += o.p) / i.m,
          i.sa += o.v * i.cp,
          l[h.a] = b(o.a) ? t ? c[t - 1][h.a] : l[h.p] : i.sv ? ((m.floor((i.sa * (2e3 / i.m) + i.sv) / i.sv) >> 1) + i.da) / 1e3 : l[h.p] + i.da / 1e3,
          c.push(l)
        }
        return c[0].date = d.date,
        c[0].prevclose = d.pc,
        c
      }, A = function() {
        var t, e, n, r, a, o, l;
        if (s >= 1)
          return [];
        for (i.lv = 0,
        i.ld = 0,
        i.cd = 0,
        i.cv = [0, 0],
        i.p = w([6])[0],
        i.d = w([18], [1])[0] - 1,
        i.m = m.pow(10, i.p),
        a = w([3, 3]),
        i.md = a[0],
        i.mv = a[1],
        t = []; a = w([6]),
        a.length; ) {
          if (n = {
            c: a[0]
          },
          r = {},
          n.d = 1,
          32 & n.c)
            for (; ; ) {
              if (a = w([6])[0],
              63 == (16 | a)) {
                l = 16 & a ? "x" : "u",
                a = w([3, 3]),
                n[l + "_d"] = a[0] + i.md,
                n[l + "_v"] = a[1] + i.mv;
                break
              }
              if (32 & a) {
                o = 8 & a ? "d" : "v",
                l = 16 & a ? "x" : "u",
                n[l + "_" + o] = (7 & a) + i["m" + o];
                break
              }
              if (o = 15 & a,
              0 == o ? n.d = w([6])[0] : 1 == o ? (i.d = o = w([18])[0],
              n.d = 0) : n.d = o,
              !(16 & a))
                break
            }
          r.date = x(n.d);
          for (o in {
            v: 0,
            d: 0
          })
            b(n["x_" + o]) || (i["l" + o] = n["x_" + o]),
            b(n["u_" + o]) && (n["u_" + o] = i["l" + o]);
          for (n.l_l = [n.u_d, n.u_d, n.u_d, n.u_d, n.u_v],
          l = p[15 & n.c],
          1 & n.u_v && (l = 31 - l),
          16 & n.c && (n.l_l[4] += 2),
          e = 0; 5 > e; e++)
            l & 1 << 4 - e && n.l_l[e]++,
            n.l_l[e] *= 3;
          n.d_v = w(n.l_l, [1, 0, 0, 1, 1], [0, 0, 0, 0, 1]),
          o = i.cd + n.d_v[0],
          r.open = o / i.m,
          r.high = (o + n.d_v[1]) / i.m,
          r.low = (o - n.d_v[2]) / i.m,
          r.close = (o + n.d_v[3]) / i.m,
          a = n.d_v[4],
          "number" == typeof a && (a = [a, a >= 0 ? 0 : -1]),
          i.cd = o + n.d_v[3],
          l = i.cv[0] + a[0],
          i.cv = [l & h, i.cv[1] + a[1] + !!((i.cv[0] & h) + (a[0] & h) & f)],
          r.volume = (i.cv[0] & f - 1) + i.cv[1] * f,
          t.push(r)
        }
        return t
      }, k = function() {
        var t, e, n, r;
        if (s > 1)
          return [];
        for (i.l = 0,
        r = -1,
        i.d = w([18])[0] - 1,
        n = w([18])[0]; i.d < n; )
          e = x(1),
          0 >= r ? (N() && (i.l += y()),
          r = w([3 * i.l], [0])[0] + 1,
          t || (t = [e],
          r--)) : t.push(e),
          r--;
        return t
      }, C = function() {
        var t, n, a, o;
        if (s >= 1)
          return [];
        for (i.f = w([6])[0],
        i.c = w([6])[0],
        a = [],
        i.dv = [],
        i.dl = [],
        t = 0; t < i.f; t++)
          i.dv[t] = 0,
          i.dl[t] = 0;
        for (t = 0; !(e >= r) && (e != r - 1 || 7 & (i.c ^ t)); t++) {
          for (o = [],
          n = 0; n < i.f; n++)
            N() && (i.dl[n] += y()),
            i.dv[n] += w([3 * i.dl[n]], [1])[0],
            o[n] = i.dv[n];
          a.push(o)
        }
        return a
      };
      //console.log(g()()); //LGH
      return g()()
    }
    ;
    var k = {  //dateUtil
      dd: function(t) {
        return new Date(t.getFullYear(),t.getMonth(),t.getDate())
      },
      ddt: function(t) {
        return new Date(t.getTime())
      },
      stbd: function(t, e) {
        return t && e && t.getFullYear() == e.getFullYear() && t.getMonth() == e.getMonth() ? t.getDate() == e.getDate() : !1
      },
      stbdt: function(t, e) {
        return t && e ? t.getTime() == e.getTime() : !1
      },
      stbs: function(t, e, n, r) {
        return t.getFullYear() == e && t.getMonth() == n ? t.getDate() == r : !1
      },
      stbds: function(t, e, n) {
        !n && (n = "-");
        var r = e.split(n);
        return this.stbs(t, Number(r[0]), Number(r[1]) - 1, Number(r[2]))
      },
      ds: function(t, e, n, r, i, a) {
        "undefined" == typeof e && (e = "-");
        var o = [];
        if (r || o.push(t[n ? "getUTCFullYear" : "getFullYear"]()),
        !i) {
          var s = t[n ? "getUTCMonth" : "getMonth"]() + 1;
          o.push(10 > s ? "0" + s : s)
        }
        if (!a) {
          var l = t[n ? "getUTCDate" : "getDate"]();
          o.push(10 > l ? "0" + l : l)
        }
        return o.join(e)
      },
      dss: function(t, e, n) {
        var r = this.ds(t, e, n)
          , i = [t["get" + (n ? "UTC" : "") + "Hours"]()]
          , a = [t["get" + (n ? "UTC" : "") + "Minutes"]()]
          , o = [t["get" + (n ? "UTC" : "") + "Seconds"]()]
          , s = [10 > i ? "0" + i : i, 10 > a ? "0" + a : a, 10 > o ? "0" + o : o].join(":");
        return [r, s].join(" ")
      },
      dst: function(t, e, n) {
        var r = [t["get" + (n ? "UTC" : "") + "Hours"]()]
          , i = [t["get" + (n ? "UTC" : "") + "Minutes"]()]
          , a = [10 > r ? "0" + r : r, 10 > i ? "0" + i : i];
        if (e) {
          var o = [t["get" + (n ? "UTC" : "") + "Seconds"]()];
          a.push(10 > o ? "0" + o : o)
        }
        return a.join(":")
      },
      sd: function(t, e) {
        var n = t.split("-")
          , r = n[0]
          , i = n[1] - 1 || 0
          , a = n[2] || 1
          , o = 0
          , s = 0
          , l = 0;
        return e && (n = e.split(":"),
        o = n[0] || 0,
        s = n[1] || 0,
        l = n[2] || 0),
        new Date(r,i,a,o,s,l)
      },
      ssd: function(t) {
        var e = t.split(" ")
          , n = e[0]
          , r = e[1];
        return this.sd(n, r)
      },
      gw: function(t, e) {
        var n = 6048e5
          , r = 2592e5
          , i = (t.getTime() - r) / n
          , a = (e.getTime() - r) / n;
        return Math.floor(i) == Math.floor(a)
      },
      gm: function(t, e) {
        return t.getFullYear() == e.getFullYear() ? t.getMonth() == e.getMonth() : !1
      },
      weekname: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u65e5"],
      nw: function(t) {
        return this.weekname[t] || ""
      }
    };
    this.dateUtil = k,
    this.LoadingSign = o;
    var C = {
      trim: function(t) {
        return t.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")
      },
      ps: function(t, e) {
        if (t = Number(t),
        isNaN(t))
          return "-";
        var n = Math.abs(t);
        return 1e5 > n ? t.toFixed(e) : 1e7 > n ? (t / 1e4).toFixed(e) + "\u4e07" : 1e8 > n ? (t / 1e7).toFixed(e) + "\u5343\u4e07" : (t / 1e8).toFixed(e) + "\u4ebf"
      },
      nu: function(t) {
        return t = Number(t),
        t = Math.abs(t),
        1e5 > t || isNaN(t) ? [1, ""] : 1e7 > t ? [1e4, "\u4e07"] : 1e8 > t ? [1e7, "\u5343\u4e07"] : [1e8, "\u4ebf"]
      },
      vs: function(t, e) {
        var n, r = "";
        return t > 1e12 ? (n = (t / 1e12).toFixed(0),
        r = "\u4e07\u4ebf") : t > 1e8 ? (n = (t / 1e8).toFixed(2),
        r = "\u4ebf") : t > 1e5 ? (n = (t / 1e4).toFixed(2),
        r = "\u4e07") : n = t >= 1 ? t.toFixed(0) : "-",
        e ? n + r : n
      },
      zp: function(t) {
        return t = String(t),
        t.length < 2 ? "0" + t : t
      }
    };
    this.strUtil = C,
    this.tUtil = {
      s0: function(t) {
        return t = parseInt(Number(t)),
        0 > t ? "" : 10 > t ? "0" + String(t) : String(t)
      },
      tIWS: function(t, e) {
        for (var n = [], r = t; e >= r; r++)
          n.push(this.s0(r / 60) + ":" + this.s0(r % 60));
        return n
      },
      gtr: function(t) {
        for (var e, n, r, i, a, o = [], s = 0, l = t.length; l > s; s++)
          e = t[s][0],
          n = t[s][1],
          r = 60 * Number(e.split(":")[0]) + Number(e.split(":")[1]),
          i = 60 * Number(n.split(":")[0]) + Number(n.split(":")[1]),
          a = this.tIWS(r, i),
          o = o.concat(a);
        return o
      },
      tradingA: [],
      gta: function() {
        return this.tradingA.length || (this.tradingA = this.gtr([["9:30", "11:29"], ["13:00", "15:00"]])),
        this.tradingA
      },
      tradingUs: [],
      gtus: function() {
        return this.tradingUs.length || (this.tradingUs = this.gtr([["9:30", "16:00"]])),
        this.tradingUs
      },
      tradingHk: [],
      gthk: function() {
        return this.tradingHk.length || (this.tradingHk = this.gtr([["09:30", "11:59"], ["13:00", "16:00"]])),
        this.tradingHk
      },
      trading: [],
      gtAll: function(t) {
        return this.trading.length ? (this.trading[0] != t[0][0] || this.trading[this.trading.length - 1] != t[t.length - 1][1]) && (this.trading = this.gtr(t)) : this.trading = this.gtr(t),
        this.trading
      },
      gata: function(t, e) {
        var n;
        switch (t) {
        case "US":
          n = this.gtus();
          break;
        case "HK":
          n = this.gthk();
          break;
        case "NF":
          n = this.gtAll(e);
          break;
        case "HF":
          n = this.gtAll(e);
          break;
        default:
        case "CN":
          n = this.gta()
        }
        return n
      },
      ist: function(t, e) {
        return t = t.toUpperCase(),
        b(this.gata(t), e) >= 0
      },
      gltbt: function(t, e, n, r, i, a) {
        for (var o, s = [], l = this.gata(r, a), u = l.length, c = 0, d = 0, h = t * u; h > c; c++)
          o = {
            time: l[c % u],
            price: 0,
            percent: 0,
            avg_price: 0,
            volume: -.01,
            inventory: 0
          },
          c % u == 0 && i && (o.date = i[d],
          d++),
          s.push(o),
          n || (s[c].price = s[c].avg_price = e);
        return s[0].price = s[0].avg_price = s[0].prevclose = e,
        s[0].volume = s[0].totalVolume = s[0].totalAmount = 0,
        s[0].inventory = 0,
        s
      },
      azft: function(t, e) {
        if (!t)
          return t;
        for (var n = this.gata(e), r = 0, i = t.length; i > r; r++)
          t[r].time = n[r];
        return t[0].date.setHours(0),
        t
      }
    },
    this.kUtil = {
      mw: function(t, e, n, r, i) {
        "number" != typeof r && (r = 0);
        var a = t.length
          , o = t[0];
        r > 1 && (o.volume /= r);
        var s, l = [], u = [];
        if (1 == a)
          l[0] = {
            open: e.open,
            high: e.high,
            low: e.low,
            close: e.price,
            volume: e.totalVolume,
            date: k.dd(e.date)
          },
          u[0] = {
            open: e.open,
            high: e.high,
            low: e.low,
            close: e.price,
            volume: e.totalVolume,
            date: k.dd(e.date)
          };
        else
          for (var c, d = o.open, h = o.high, f = o.low, p = o.close, m = o.volume, g = o.date, v = o.open, b = o.high, y = o.low, N = o.close, w = o.volume, x = o.date, _ = 1; a > _; _++)
            o = t[_],
            r > 1 && (o.volume /= r),
            k.gw(t[_ - 1].date, o.date) ? (o.high > h && (h = o.high),
            o.low < f && (f = o.low),
            p = o.close,
            m += o.volume,
            g = o.date) : (isNaN(i) || (s = g.getDay(),
            0 == s && (s = 7),
            c = s - i,
            c > 0 && (g = k.ddt(g),
            g.setDate(g.getDate() - c))),
            l.push({
              open: d,
              high: h,
              low: f,
              close: p,
              volume: m,
              date: g
            }),
            d = o.open,
            h = o.high,
            f = o.low,
            p = o.close,
            m = o.volume,
            g = o.date),
            k.gm(t[_ - 1].date, o.date) ? (o.high > b && (b = o.high),
            o.low < y && (y = o.low),
            N = o.close,
            w += o.volume,
            x = o.date) : (isNaN(i) || (s = x.getDay(),
            0 == s && (s = 7),
            c = s - i,
            c > 0 && (x = k.ddt(x),
            x.setDate(x.getDate() - c))),
            u.push({
              open: v,
              high: b,
              low: y,
              close: N,
              volume: w,
              date: x
            }),
            v = o.open,
            b = o.high,
            y = o.low,
            N = o.close,
            w = o.volume,
            x = o.date),
            _ == a - 1 && (l.push({
              open: d,
              high: h,
              low: f,
              close: p,
              volume: m,
              date: g
            }),
            u.push({
              open: v,
              high: b,
              low: y,
              close: N,
              volume: w,
              date: x
            }));
        return l[0].prevclose = n,
        u[0].prevclose = n,
        [l, u]
      },
      nc: function(t, e, n, r) {
        if (t && !(t.length < 1)) {
          r = r || {};
          var i = t[t.length - 1];
          if (168 == n && k.gw(i.date, e.date) || 720 == n && k.gm(i.date, e.date))
            return i.day = String(e.today).split("-").join("/"),
            void (i.date = k.dd(e.date));
          i = t[t.length - 1];
          var a = i.close
            , o = e.price - a
            , s = o / a;
          t.push({
            open: isNaN(r.price) ? a : r.price,
            high: isNaN(r.price) ? e.high : r.price,
            low: isNaN(r.price) ? e.low : r.price,
            close: isNaN(r.price) ? e.price : r.price,
            volume: isNaN(r.volume) ? e.totalVolume : r.volume,
            percent: s,
            day: String(e.today).split("-").join("/"),
            date: k.ddt(e.date),
            time: e.time,
            ampP: 0,
            amplitude: 0,
            change: o,
            kke_cs: 0
          })
        }
      },
      pd: function(t, e) {
        var n = t.length
          , r = t[0]
          , i = r.prevclose;
        (isNaN(i) || 0 >= i) && (i = r.open);
        for (var a = 0; n > a; a++) {
          if (r = t[a],
          e && e.usePc && (i = r.prevclose),
          r.amplitude = r.high - r.low,
          r.ampP = r.amplitude / i,
          r.change = r.close - i,
          r.percent = r.change / i,
          i = r.close,
          r.day) {
            var o = r.day.split(" ");
            r.day = o[0],
            r.time = o[1].slice(0, 5),
            r.date = k.sd(r.day, r.time),
            r.day = r.day.split("-").join("/")
          } else {
            var s = r.date
              , l = C.zp(s.getMonth() + 1)
              , u = C.zp(s.getDate());
            r.day = [s.getFullYear(), l, u].join("/")
          }
          r.kke_cs = r.close > r.open ? 1 : r.open > r.close ? -1 : 0
        }
      },
      ms: function(t, e, n, r, i) {
        return n > t && (t += 24),
        Math.max(1, Math.ceil((60 * (t - n) + e - r) / i))
      },
      spk: function(t, e, n, r, i) {
        if (t == e)
          return !0;
        var a = t.split(":")
          , o = Number(a[0])
          , s = Number(a[1]);
        a = e.split(":");
        var l = Number(a[0])
          , u = Number(a[1]);
        if (o > l && 3 > o - l || o == l && s >= u)
          return !0;
        if (60 != r || i && /^forex/.test(i)) {
          a = n.split(":");
          var c = Number(a[0])
            , d = Number(a[1])
            , h = this.ms(o, s, c, d, r)
            , f = this.ms(l, u, c, d, r);
          return h == f
        }
        return "10:30" != t && "11:30" != t && "14:00" != t && "15:00" != t || u == s ? !0 : !1
      },
      yd: function(t) {
        for (var e = t[t.length - 1].date.getFullYear(), n = [], r = t.length; r-- && t[r].date.getFullYear() == e; )
          n[n.length] = t[r];
        return n.reverse(),
        n[0].prevclose = t[r] ? t[r].prevclose || t[r].close : n[0].prevclose || n[0].close,
        n
      },
      rd: function(t, e) {
        var n = []
          , r = k.dd(e);
        r.setFullYear(r.getFullYear() - 5);
        for (var i = t.length; i-- && !(t[i].date < r); )
          n[n.length] = t[i];
        return n.reverse(),
        n[0].prevclose = t[i] ? t[i].close : n[0].close,
        n
      },
      adbd: function(t, e, n, r) {
        for (var i, a, o, s, l = n ? k.stbdt : k.stbd, u = t.length, c = e.length; c--; ) {
          if (o = e[c].date,
          1 > u) {
            c = e.length - t.length;
            for (var d = [], h = t[0]; c-- > 0; ) {
              if (a = N(h) || {},
              a.isFake = !0,
              a.kke_cs = 0,
              r)
                for (i in a)
                  a.hasOwnProperty(i) && p(a[i]) && (a[i] = 0);
              d.push(a)
            }
            t = d.concat(t);
            break
          }
          for (var f = u--; f-- && (s = t[f].date,
          !l(o, s)); ) {
            if (o > s) {
              if (a = N(t[f]),
              a.isFake = !0,
              a.date = o,
              a.kke_cs = 0,
              r)
                for (i in a)
                  a.hasOwnProperty(i) && p(a[i]) && (a[i] = 0);
              t.splice(++f, 0, a),
              u++;
              break
            }
            t.splice(f, 1),
            u--
          }
        }
        return u > 0 && t.splice(0, u),
        t
      },
      ayd: function(t, e, n, r, i) {
        for (var a, o, s, l, u = k.stbd, c = t.length, d = e.length; d--; )
          if (s = e[d],
          !(s > i)) {
            if (r > s && !k.stbd(s, r))
              break;
            for (var h = c--; h-- && (l = t[h].date,
            !u(s, l)); ) {
              if (s > l) {
                o = N(t[h]);
                var f = o.close;
                for (a in o)
                  o.hasOwnProperty(a) && p(o[a]) && (o[a] = 0);
                o.open = o.high = o.low = o.close = f,
                o.date = s,
                t.splice(++h, 0, o),
                c++;
                break
              }
              t.splice(h, 1),
              c--
            }
          }
        return c > 0 && t.splice(0, c),
        t
      }
    },
    this.domGc = new function() {
      var t = l.$C("div");
      return t.style.display = "none",
      function(e, n) {
        if (e) {
          if (e.hasChildNodes())
            for (; e.childNodes.length > 0; )
              e.removeChild(e.firstChild);
          if (n)
            return void (e.innerHTML = "");
          t.appendChild(e),
          t.innerHTML = ""
        }
      }
    }
    ,
    this.getSUrl = function(t, e) {
      if (!t)
        return null;
      for (var n, r, i = [{
        h: "finance.sina.com.cn",
        s: "ssl-finance.sina.com.cn"
      }, {
        h: "money.finance.sina.com.cn",
        s: "ex.sina.com.cn"
      }, {
        h: "vip.stock.finance.sina.com.cn",
        s: "ex.sina.com.cn"
      }, {
        h: "stock.finance.sina.com.cn",
        s: "stock.sina.com.cn"
      }, {
        h: "stock2.finance.sina.com.cn",
        s: "stock.sina.com.cn"
      }, {
        h: "www.sinaimg.cn",
        s: "wwws.sinaimg.cn"
      }, {
        h: "n.sinaimg.cn",
        s: "ns.sinaimg.cn"
      }, {
        h: "i0.sinaimg.cn",
        s: "i0s.sinaimg.cn"
      }, {
        h: "i1.sinaimg.cn",
        s: "i1s.sinaimg.cn"
      }, {
        h: "i2.sinaimg.cn",
        s: "i2s.sinaimg.cn"
      }, {
        h: "i3.sinaimg.cn",
        s: "i3s.sinaimg.cn"
      }, {
        h: "data.finance.sina.com.cn",
        s: "ssl-data.sina.com.cn"
      }, {
        h: "biz.finance.sina.com.cn",
        s: "biz.sina.com.cn"
      }, {
        h: "i.sso.sina.com.cn",
        s: "sso-ssl.sina.com.cn"
      }, {
        h: "touzi.sina.com.cn",
        s: "touzi.sina.com.cn"
      }], a = t.match(/(\w*:\/\/)?([^\/]+)(\/+.*)?/i), o = a[2], s = a[3], l = i.length; l--; )
        if (i[l].h == o) {
          r = i[l].s;
          break
        }
      return n = r ? ["https://", r, s].join("") : e ? t : ["https://", o, s].join("")
    }
    ,
    this.TipM = s,
    this.logoM = new function() {
      var t = "data:image/png;base64,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"
        , e = l.$C("img")
        , n = !1
        , r = []
        , i = []
        , a = function() {
        l.xh5_EvtUtil.addHandler(e, "load", function() {
          for (n = !0; r.length; ) {
            var t = r.shift();
            s(t)
          }
        }),
        e.src = t
      }
        , o = function(t) {
        if (t.logo && !l.xh5_BrowserUtil.noH5) {
          var e = t.logo;
          t.color || (t.color = "#ccc");
          var n = l.hex2dec(t.color, 0 / 0, !0);
          (!n || n.length < 3) && (n = [200, 200, 200]);
          for (var r = e.getContext("2d"), i = r.getImageData(0, 0, e.width, e.height), a = n[0], o = n[1], s = n[2], u = 0, c = i.data.length; c > u; u += 4)
            0 != i.data[u + 3] && (i.data[u] = a,
            i.data[u + 1] = o,
            i.data[u + 2] = s);
          r.putImageData(i, 0, 0)
        }
      }
        , s = function(t) {
        if (l.xh5_BrowserUtil.noH5)
          return null;
        if (!n) {
          for (var a = r.length; a--; )
            if (r[a].id == t.id)
              return null;
          return r.push(t),
          null
        }
        var s;
        s = l.$C("canvas", t.id),
        s.style.zIndex = 0,
        i.push(s),
        s.style.position = "absolute",
        s.style.top = t.top + "px",
        s.style.right = t.right + "px",
        s.width = e.width,
        s.height = e.height,
        s.style.width = t.LOGO_W + "px",
        s.style.height = t.LOGO_H + "px";
        var u = s.getContext("2d");
        if (t.isShare) {
          var c = l.xh5_BrowserUtil.hdpr;
          if (2 > c) {
            var d = c / 2;
            u.scale(d, d)
          }
        }
        return u.drawImage(e, 0, 0),
        o({
          logo: s,
          color: t.color
        }),
        h(t.cb) && t.cb(s),
        s
      };
      this.getLogo = s,
      this.styleLogo = o,
      a()
    }
    ,
    this.grabM = new function() {
      var t = function(t) {
        var e = t.dom
          , n = t.child;
        if (!e || !n)
          return null;
        d(e) && (e = l.$DOM(e));
        var r = e.getElementsByTagName(n);
        if (!r || r.length < 1)
          return null;
        var i = l.xh5_BrowserUtil.hdpr
          , a = e.offsetWidth
          , o = e.offsetHeight
          , s = l.$C("canvas")
          , u = s.getContext("2d");
        s.style.width = a + "px",
        s.style.height = o + "px",
        s.width = a * i,
        s.height = o * i,
        1 != i && u.scale(i, i);
        var c = l.xh5_HtmlPosUtil.pageX(e)
          , h = l.xh5_HtmlPosUtil.pageY(e)
          , f = l.xh5_HtmlPosUtil.parentY(e);
        u.textBaseline = "top";
        for (var p, m, g = 0, v = r.length; v > g; g++) {
          p = r[g],
          m = l.getCSS(p);
          var b = l.xh5_HtmlPosUtil.pageX(p) - c
            , y = l.xh5_HtmlPosUtil.pageY(p) - h
            , N = Number(m.paddingLeft.split("px")[0])
            , w = .5 * (Number(m.lineHeight.split("px")[0]) - Number(m.fontSize.split("px")[0]));
          u.fillStyle = m.backgroundColor,
          u.fillRect(b, y, p.offsetWidth, p.offsetHeight),
          u.font = [m.fontSize, m.fontFamily].join(" "),
          u.fillStyle = m.color,
          u.fillText(p.innerHTML, b + N, y + w)
        }
        return {
          canvas: s,
          x: c,
          y: f
        }
      }
        , e = function(t, e) {
        if (l.POST) {
          var n = e.txt || ""
            , r = e.url || ""
            , i = "_" + Math.floor(1e3 * Math.random());
          window.open("about:blank", i);
          var a = l.getSUrl("http://stock.finance.sina.com.cn/misc/userapi/Pic4Weibo.php");
          l.POST(a, {
            imgData: t,
            symbol: "imgData"
          }, function(t) {
            t && t.match(/^http.+/) && (t = encodeURIComponent(t),
            t = "http://service.weibo.com/share/share.php?source=bookmark&title=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(r) + "&pic=" + t,
            window.open(t, i))
          })
        }
      }
        , n = function(n) {
        if (!l.xh5_BrowserUtil.noH5) {
          var r = n.ctn;
          if (r) {
            for (var i, a, o = r.getElementsByTagName("canvas"), s = n.w || r.offsetWidth, u = n.h || r.offsetHeight, c = l.xh5_BrowserUtil.hdpr, d = [], h = l.xh5_HtmlPosUtil.pageX(r), p = l.xh5_HtmlPosUtil.pageY(r), m = o.length; m--; ) {
              a = o[m],
              i = a.style.zIndex;
              var g, v = !1;
              for (g = n.ignoreZIdxArr.length; g--; )
                if (i == n.ignoreZIdxArr[g]) {
                  v = !0;
                  break
                }
              if (!v) {
                for (g = n.ignoreIdArr.length; g--; )
                  if (a.id == n.ignoreIdArr[g]) {
                    v = !0;
                    break
                  }
                if (!v) {
                  var b = {
                    canvas: a,
                    x: l.xh5_HtmlPosUtil.pageX(a) - h,
                    y: l.xh5_HtmlPosUtil.pageY(a) - p
                  };
                  d.push(b)
                }
              }
            }
            if (!n.nologo) {
              var y = l.logoM.getLogo({
                cb: null,
                id: "share_logo",
                isShare: !0,
                top: n.top,
                right: n.right,
                LOGO_W: n.LOGO_W,
                LOGO_H: n.LOGO_H,
                color: n.color
              });
              y && d.push({
                canvas: y,
                x: s - Number(y.style.right.split("px")[0]) - n.LOGO_W,
                y: Number(y.style.top.split("px")[0])
              })
            }
            if (n.extra) {
              !f(n.extra) && (n.extra = [n.extra]);
              for (var N = 0, w = n.extra.length; w > N; N++) {
                var x = t(n.extra[N]);
                x && (d = d.concat(x))
              }
            }
            var _ = l.$C("canvas")
              , T = _.getContext("2d");
            _.style.width = s + "px",
            _.style.height = u + "px",
            _.width = s * c,
            _.height = u * c,
            T.fillStyle = n.bgColor,
            T.fillRect(0, 0, s, u);
            for (var A = 0, k = d.length; k > A; A++) {
              var C = d[A];
              T.drawImage(C.canvas, C.x * c, C.y * c)
            }
            e(_.toDataURL("image/png").substring(22), n)
          }
        }
      };
      this.shareTo = n
    }
    ,
    this.bridge = new function() {
      function t(t, e) {
        for (var n in t)
          t.hasOwnProperty(n) && (t[n] = e + t[n])
      }
      var e, n, r = !1, i = "sinatkchart_SLBridge~", a = {
        SAVE: "save",
        LOAD: "load",
        REMOVE: "remove",
        DATA: "data",
        READY: "ready"
      };
      t(a, i);
      var o = []
        , s = {}
        , u = []
        , c = function(t) {
        var e = t
          , n = e.key
          , r = e.options
          , i = e.value;
        x.save(n, i, r)
      }
        , d = function(t) {
        return r ? void 0 : n ? void n.postMessage(JSON.stringify({
          type: a.SAVE,
          content: t
        }), "*") : void u.push([t])
      }
        , h = function(t) {
        var e = t
          , n = e.key
          , r = e.options;
        return x.load(n, r)
      }
        , f = function(t, e) {
        if (!r) {
          if (!n)
            return void o.push([t, e]);
          s[t.uid] = e;
          var l = t.type ? i + t.type : a.LOAD;
          n.postMessage(JSON.stringify({
            type: l,
            content: t
          }), "*")
        }
      }
        , p = function(t, e, n) {
        var r = h(t);
        e(r),
        n || f(t, e)
      }
        , m = function(t, e) {
        t && (c(t),
        e || d(t))
      }
        , g = new function() {
        var t = function(t) {
          if (t && t.type) {
            var e = t.type;
            if (-1 != e.indexOf(i))
              return e
          }
          return void 0
        }
          , r = function() {
          for (var t; o.length; )
            t = o.shift(),
            p(t[0], t[1]);
          for (; u.length; )
            t = u.shift(),
            m(t[0])
        };
        this.onMsg = function(i) {
          var o;
          try {
            o = JSON.parse(i.data)
          } catch (u) {}
          var c = t(o);
          if (c)
            switch (c) {
            case a.READY:
              n = e.contentWindow,
              r();
              break;
            case a.DATA:
              if (!l.isFunc(s[o.uid]))
                return;
              s[o.uid](o.result),
              s[o.uid] = null,
              delete s[o.uid]
            }
        }
      }
        , v = function() {
        r = !0;
        for (var t in s)
          s.hasOwnProperty(t) && (s[t] = null,
          delete s[t]);
        for (; o.length; )
          o.length--;
        for (; u.length; )
          u.length--
      }
        , b = "SINA_CHART_BRIDGE";
      l.xh5_EvtUtil.addHandler(window, "message", g.onMsg),
      e = l.iframer({
        attribute: {
          id: b,
          src: "https://current.sina.com.cn/sinatkchart/SLBridge.html?20160704"
        }
      }, v),
      setTimeout(function() {
        e.style.display = "none"
      }, 999),
      this.load = p,
      this.save = m,
      this.getStatus = function() {
        return n && !r && "1" == e.getAttribute("data-ready")
      }
    }
    ,
    this.colorPicker = function() {
      function t(t, e) {
        var n = function() {}
          , r = t.prototype;
        n.prototype = e.prototype,
        t.prototype = new n;
        for (var i in r)
          r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
        t.prototype.constructor = t
      }
      function e(t, n, r) {
        if (!n)
          return t;
        t || (t = {});
        for (var i in n)
          n.hasOwnProperty(i) && ("Object" === S(n[i]) ? (!t[i] && (t[i] = {}),
          e(t[i], n[i], r)) : !r && i in t || (t[i] = n[i]));
        return t
      }
      function n(t) {
        var e = "undefined" == typeof getComputedStyle ? t.currentStyle : getComputedStyle(t);
        return e ? (t.clientWidth || g(e.width) || g(t.style.width)) - (g(e.paddingLeft) || 0) - (g(e.paddingRight) || 0) | 0 : 0
      }
      function r(t) {
        var e = "undefined" == typeof getComputedStyle ? t.currentStyle : getComputedStyle(t);
        return e ? (t.clientHeight || g(e.height) || g(t.style.height)) - (g(e.paddingTop) || 0) - (g(e.paddingBottom) || 0) | 0 : 0
      }
      function i(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
          left: 0,
          top: 0
        }
      }
      function a(t) {
        var e = t.getContext("2d");
        e.clearRect(0, 0, t.width, t.height)
      }
      function o(t, e) {
        var i = document.createElement("canvas")
          , a = i.style
          , o = n(t)
          , s = r(t)
          , l = o * e.width
          , u = s * e.height;
        return i.width = l,
        i.height = u,
        a.position = "absolute",
        a.width = l + "px",
        a.height = u + "px",
        a.left = o * e.left + "px",
        a.top = s * e.top + "px",
        t.appendChild(i),
        i
      }
      function s(t, e) {
        var i = document.createElement("ul")
          , a = i.style
          , o = e.label
          , s = n(t)
          , l = r(t);
        a.listStyle = "none",
        a.padding = 0,
        a.margin = 0,
        a.font = e.font,
        a.position = "absolute",
        a.left = s * e.left + "px",
        a.top = l * e.top + "px";
        for (var c = 0, d = o.length; d > c; c++)
          u(i, c, e);
        return t.appendChild(i),
        i
      }
      function u(t, e, n) {
        var r = document.createElement("li")
          , i = document.createElement("label")
          , a = document.createElement("input")
          , o = i.style
          , s = r.style
          , l = a.style;
        return i.innerHTML = n.label[e],
        o.textAlign = "right",
        o.display = "inline-block",
        o.width = n.labelWidth + "px",
        o.color = n.color,
        "number" == n.type && (a.type = "number"),
        l.width = n.inputWidth + "px",
        s.marginBottom = n.gap + "px",
        T(a, "mousemove", function(t) {
          A(t)
        }),
        r.appendChild(i),
        r.appendChild(a),
        t.appendChild(r),
        r
      }
      function c(t, e) {
        var i = document.createElement("div")
          , a = i.style
          , o = n(t)
          , s = r(t);
        return a.position = "absolute",
        a.left = o * e.left + "px",
        a.top = s * e.top + "px",
        a.width = o * e.width + "px",
        a.height = s * e.height + "px",
        t.appendChild(i),
        i
      }
      function d(t, e) {
        function n(n) {
          n = P(e, n),
          t._onmousemove(n.NyanX, n.NyanY),
          t.onmousemove && t.onmousemove(t)
        }
        function r(t) {
          o = !0,
          n(t)
        }
        function i(t) {
          o && n(t),
          A(t),
          k(t)
        }
        function a() {
          o && (o = !1)
        }
        var o = !1;
        "ontouchend"in window ? (T(e, "touchstart", r),
        T(e, "touchmove", i),
        T(e, "touchend", a)) : (T(e, "mousedown", r),
        T(e, "mousemove", i),
        T(e, "mouseup", a),
        T(e, "mouseout", a))
      }
      function h(t, e, n) {
        return t = Math.round(t),
        e > t ? e : t > n ? n : t
      }
      function f(t, e, n) {
        return e > t ? e : t > n ? n : t
      }
      function p(t) {
        return t.length && "%" === t.charAt(t.length - 1) ? h(parseFloat(t) / 100 * 255, 0, 255) : h(parseInt(t, 10), 0, 255)
      }
      function m(t) {
        return t.length && "%" === t.charAt(t.length - 1) ? f(parseFloat(t) / 100, 0, 1) : f(parseFloat(t), 0, 1)
      }
      function v(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1),
        1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      function b(t) {
        var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360
          , n = m(t[1])
          , r = m(t[2])
          , i = .5 >= r ? r * (n + 1) : r + n - r * n
          , a = 2 * r - i;
        return [f(255 * v(a, i, e + 1 / 3), 0, 255), f(255 * v(a, i, e), 0, 255), f(255 * v(a, i, e - 1 / 3), 0, 255)]
      }
      function y(t) {
        if (t) {
          var e, n, r = t[0] / 255, i = t[1] / 255, a = t[2] / 255, o = Math.min(r, i, a), s = Math.max(r, i, a), l = s - o, u = (s + o) / 2;
          if (0 === l)
            e = 0,
            n = 0;
          else {
            n = .5 > u ? l / (s + o) : l / (2 - s - o);
            var c = ((s - r) / 6 + l / 2) / l
              , d = ((s - i) / 6 + l / 2) / l
              , h = ((s - a) / 6 + l / 2) / l;
            r === s ? e = h - d : i === s ? e = 1 / 3 + c - h : a === s && (e = 2 / 3 + d - c),
            0 > e && (e += 1),
            e > 1 && (e -= 1)
          }
          return [360 * e, n, u]
        }
      }
      function N(t) {
        if (t) {
          t += "";
          var e = t.replace(/ /g, "").toLowerCase();
          if ("#" !== e.charAt(0)) {
            var n = e.indexOf("(")
              , r = e.indexOf(")");
            if (-1 !== n && r + 1 === e.length) {
              var i = e.substr(0, n)
                , a = e.substr(n + 1, r - (n + 1)).split(",");
              switch (i) {
              case "rgb":
                if (3 !== a.length)
                  return;
                return [p(a[0]), p(a[1]), p(a[2])];
              case "hsl":
                if (3 !== a.length)
                  return;
                return b(a);
              default:
                return
              }
            }
          } else {
            if (4 === e.length) {
              var o = parseInt(e.substr(1), 16);
              if (!(o >= 0 && 4095 >= o))
                return;
              return [(3840 & o) >> 4 | (3840 & o) >> 8, 240 & o | (240 & o) >> 4, 15 & o | (15 & o) << 4]
            }
            if (7 === e.length) {
              if (o = parseInt(e.substr(1), 16),
              !(o >= 0 && 16777215 >= o))
                return;
              return [(16711680 & o) >> 16, (65280 & o) >> 8, 255 & o]
            }
          }
        }
      }
      function w(t) {
        var e = [(+t[0]).toFixed(0), (+t[1]).toFixed(0), (+t[2]).toFixed(0)];
        return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
      }
      function x(t) {
        var e = [t[0].toFixed(0), (100 * t[1]).toFixed(0) + "%", (100 * t[2]).toFixed(0) + "%"];
        return "hsl(" + e.join(",") + ")"
      }
      function _(t, e) {
        if (t) {
          var n = "Array" == S(t) ? t : N(t);
          switch (e) {
          case "rgb":
            return e + "(" + n.join(",") + ")";
          case "hex":
            return "#" + w(n);
          case "hsl":
            return x(y(n))
          }
        }
      }
      if ("undefined" != typeof getComputedStyle) {
        var T = function() {
          return window.addEventListener ? function(t, e, n) {
            t.addEventListener(e, n)
          }
          : function(t, e, n) {
            t.attachEvent("on" + e, n)
          }
        }()
          , A = function() {
          return window.addEventListener ? function(t) {
            t.stopPropagation()
          }
          : function(t) {
            t.cancelBubble = !0
          }
        }()
          , k = function() {
          return window.addEventListener ? function(t) {
            t.preventDefault()
          }
          : function(t) {
            t.returnValue = !1
          }
        }()
          , C = Object.prototype.toString
          , S = function(t) {
          return null === t ? "Null" : void 0 === t ? "Undefined" : C.call(t).slice(8, -1)
        }
          , D = function(t, e) {
          if (!t)
            return -1;
          if (t.indexOf)
            return t.indexOf(e);
          for (var n = t.length; n--; )
            if (t[n] === e)
              return n
        }
          , P = function(t, e) {
          if (e = e || window.event,
          null != e.NyanX)
            return e;
          var n = e.type
            , r = n && D(n, "touch") >= 0;
          if (r) {
            var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
            if (a) {
              var o = i(t);
              e.NyanX = a.clientX - o.left,
              e.NyanY = a.clientY - o.top
            }
          } else {
            var s = i(t);
            e.NyanX = e.clientX - s.left,
            e.NyanY = e.clientY - s.top,
            e.NyanDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3
          }
          return e
        }
          , F = {
          width: 320,
          height: 200,
          zIndex: 10002,
          backgroundColor: "#444",
          wrapShadow: "3px 3px 4px rgba(0, 0, 0, 0.4)",
          color: "#66ccff",
          picker: {
            left: .05,
            top: .15,
            width: .4,
            height: .65,
            size: 10,
            color: "#000",
            lineWidth: 1
          },
          slider: {
            left: .5,
            top: .15,
            width: .05,
            height: .65
          },
          rgbBox: {
            label: ["R:", "G:", "B:"],
            font: "12px Microsoft YaHei",
            color: "#FFFEFA",
            gap: 8,
            type: "number",
            labelWidth: 15,
            inputWidth: 36,
            left: .6,
            top: .15
          },
          hslBox: {
            label: ["H:", "S:", "L:"],
            font: "12px Microsoft YaHei",
            color: "#FFFEFA",
            gap: 8,
            type: "number",
            labelWidth: 15,
            inputWidth: 36,
            left: .78,
            top: .15
          },
          hexBox: {
            label: ["#"],
            font: "12px Microsoft YaHei",
            color: "#FFFEFA",
            labelWidth: 15,
            inputWidth: 60,
            left: .03,
            top: .85
          },
          colorBox: {
            left: .63,
            top: .6,
            width: .32,
            height: .2
          },
          okBtn: {
            text: "\u786e\u5b9a",
            backgroundColor: "#6C6C6C",
            color: "#FFFEFA",
            font: "12px Microsoft YaHei",
            left: .65,
            top: .87,
            width: .12,
            height: .1
          },
          cancelBtn: {
            text: "\u53d6\u6d88",
            backgroundColor: "#6C6C6C",
            color: "#FFFEFA",
            font: "12px Microsoft YaHei",
            left: .83,
            top: .87,
            width: .12,
            height: .1
          }
        }
          , O = function(t, n) {
          e(this, n),
          this.background = o(t, n),
          this.layer = o(t, n),
          this.H = 0,
          this.S = 0,
          d(this, this.layer),
          this.paintBG()
        };
        O.prototype = {
          constructor: O,
          paintBG: function() {
            for (var t = this.background, e = t.getContext("2d"), n = t.width, r = t.height, i = e.createLinearGradient(0, 0, n, 0), a = 0; 1 > a; a += 1 / 6)
              i.addColorStop(a, "hsl(" + 360 * a + " , 100%, 50%)");
            e.fillStyle = i,
            e.fillRect(0, 0, n, r),
            i = e.createLinearGradient(0, 0, 0, r),
            i.addColorStop(0, "hsla(0, 0%, 50%, 0)"),
            i.addColorStop(1, "hsla(0, 0%, 50%, 1)"),
            e.fillStyle = i,
            e.fillRect(0, 0, n, r)
          },
          _onmousemove: function(t, e) {
            var i = this.layer
              , a = n(i)
              , o = r(i);
            this.H = t / a * 360,
            this.S = (o - e) / o
          },
          updatePoint: function() {
            var t = this.layer
              , e = t.getContext("2d")
              , i = this.size
              , a = n(t)
              , o = r(t)
              , s = this.H * a / 360
              , l = o - this.S * o;
            e.clearRect(0, 0, t.width, t.height),
            e.beginPath(),
            e.moveTo(s - i, l),
            e.lineTo(s + i, l),
            e.moveTo(s, l - i),
            e.lineTo(s, l + i),
            e.strokeStyle = "black",
            e.lineWidth = 2,
            e.stroke()
          },
          update: function(t) {
            this.H = t[0],
            this.S = t[1],
            this.updatePoint()
          }
        };
        var L = function(t, n) {
          e(this, n),
          this.background = o(t, n),
          this.layer = o(t, n),
          this.L = .5,
          d(this, this.layer)
        };
        L.prototype = {
          constructor: L,
          paintBG: function(t) {
            var e = this.background
              , n = e.getContext("2d")
              , r = e.width
              , i = e.height
              , o = n.createLinearGradient(0, 0, 0, i);
            a(e),
            o.addColorStop(0, "#fff"),
            o.addColorStop(.5, "hsl(" + (+t[0]).toFixed(0) + ", " + (100 * t[1]).toFixed(0) + "%, 50%)"),
            o.addColorStop(1, "#000"),
            n.fillStyle = o,
            n.fillRect(0, 0, r, i)
          },
          _onmousemove: function(t, e) {
            var n = this.layer
              , i = r(n);
            this.L = (i - e) / i
          },
          updatePoint: function(t) {
            for (var e = this.layer, n = e.getContext("2d"), i = r(e), a = i - this.L * i, o = b(t), s = o.length; s--; )
              o[s] = (255 - o[s]).toFixed(0);
            n.clearRect(0, 0, e.width, e.height),
            n.beginPath(),
            n.moveTo(0, a + .5),
            n.lineTo(e.width, a + .5),
            n.strokeStyle = _(o, "hex"),
            n.lineWidth = 3,
            n.stroke()
          },
          update: function(t) {
            this.L = t[2],
            this.paintBG(t),
            this.updatePoint(t)
          }
        };
        var K = function(t, e) {
          var n = this;
          this.box = s(t, e),
          T(this.box, "input", function(t) {
            t.target.value = h(t.target.value, 0, 255),
            n.oninput && n.oninput(t)
          })
        };
        K.prototype = {
          constructor: K,
          getRGB: function() {
            var t = this.box.childNodes;
            return "rgb(" + t[0].childNodes[1].value + ", " + t[1].childNodes[1].value + ", " + t[2].childNodes[1].value + ")"
          },
          getRGBArr: function() {
            var t = this.box.childNodes;
            return [t[0].childNodes[1].value, t[1].childNodes[1].value, t[2].childNodes[1].value]
          },
          update: function(t) {
            for (var e = this.box.childNodes, n = b(t), r = 0, i = n.length; i > r; r++)
              e[r].childNodes[1].value = (+n[r]).toFixed(0)
          }
        };
        var R = function(t, e) {
          var n = this;
          this.box = s(t, e);
          var r = this.box.childNodes;
          T(r[0].childNodes[1], "input", function(t) {
            t.target.value = h(t.target.value, 0, 360),
            n.oninput && n.oninput(t)
          }),
          T(r[1].childNodes[1], "input", function(t) {
            t.target.value = h(t.target.value, 0, 100),
            n.oninput && n.oninput(t)
          }),
          T(r[2].childNodes[1], "input", function(t) {
            t.target.value = h(t.target.value, 0, 100),
            n.oninput && n.oninput(t)
          })
        };
        R.prototype = {
          constructor: R,
          getHSL: function() {
            var t = this.box.childNodes;
            return "hsl(" + t[0].childNodes[1].value + ", " + t[1].childNodes[1].value + "%, " + t[2].childNodes[1].value + "% )"
          },
          getHSLArr: function() {
            var t = this.box.childNodes;
            return [t[0].childNodes[1].value, t[1].childNodes[1].value / 100, t[2].childNodes[1].value / 100]
          },
          update: function(t) {
            for (var e = this.box.childNodes, n = 0, r = t.length; r > n; n++)
              e[n].childNodes[1].value = (n > 0 ? 100 * t[n] : +t[n]).toFixed(0)
          }
        };
        var E = function(t, e) {
          var n = this;
          this.box = s(t, e);
          var r = this.box.childNodes;
          T(r[0].childNodes[1], "input", function(t) {
            t.target.value = t.target.value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
            var e = t.target.value.length;
            6 == e && n.oninput && n.oninput(t)
          })
        };
        E.prototype = {
          constructor: E,
          getHEX: function() {
            return "#" + this.box.childNodes[0].childNodes[1].value
          },
          update: function(t) {
            var e = this.box.childNodes;
            e[0].childNodes[1].value = w(b(t))
          }
        };
        var M = function(t, e) {
          this.btn = c(t, e);
          var n = this.btn.style;
          this.btn.innerHTML = e.text,
          n.font = e.font,
          n.lineHeight = r(t) * e.height + "px",
          n.textAlign = "center",
          n.backgroundColor = e.backgroundColor,
          n.color = e.color,
          n.cursor = "pointer"
        }
          , U = function(t, e) {
          this.box = c(t, e),
          this.box.style.backgroundColor = "#000"
        };
        U.prototype = {
          constructor: U,
          update: function(t) {
            for (var e = b(t), n = e.length; n--; )
              e[n] = (+e[n]).toFixed(0);
            this.box.style.backgroundColor = "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
          }
        };
        var H = function(t) {
          t = t || {},
          this.param = e(t, F),
          this.inited = !1,
          l.xh5_EvtDispatcher.call(this)
        };
        return H.prototype = {
          constructor: H,
          init: function() {
            if (!this.inited) {
              var t = this.param
                , e = y(N(t.color));
              this._initDoms(t),
              this._initEvent(),
              this.update(e),
              document.body.appendChild(this.wrap),
              this.inited = !0
            }
          },
          _initDoms: function(t) {
            var e = document.createElement("div")
              , n = e.style;
            n.position = "absolute",
            n.width = t.width + "px",
            n.height = t.height + "px",
            n.zIndex = t.zIndex,
            n.backgroundColor = t.backgroundColor,
            n.boxShadow = t.wrapShadow,
            n.transition = "opacity 0.2s ease-in-out 0s",
            n.opacity = 0,
            n.visibility = "hidden",
            n.userSelect = "none",
            n.webkitUserSelect = "none",
            n.msUserSelect = "none",
            n.mosUserSelect = "none",
            this.wrap = e,
            this.picker = new O(e,t.picker),
            this.slider = new L(e,t.slider),
            this.rgbBox = new K(e,t.rgbBox),
            this.hslBox = new R(e,t.hslBox),
            this.hexBox = new E(e,t.hexBox),
            this.colorBox = new U(e,t.colorBox),
            this.okBtn = new M(e,t.okBtn),
            this.cancelBtn = new M(e,t.cancelBtn)
          },
          _initEvent: function() {
            function t(t) {
              N = !0,
              r = +b.left.replace(/[^0-9.]/g, ""),
              i = +b.top.replace(/[^0-9.]/g, ""),
              t.targetTouches ? (a = t.targetTouches[0].clientX,
              o = t.targetTouches[0].clientY) : (a = t.clientX,
              o = t.clientY)
            }
            function e(t) {
              N && (t.targetTouches ? (s = t.targetTouches[0].clientX - a,
              l = t.targetTouches[0].clientY - o) : (s = t.clientX - a,
              l = t.clientY - o),
              b.left = +r + +s + "px",
              b.top = +i + +l + "px",
              A(t)),
              k(t)
            }
            function n() {
              N = !1
            }
            var r, i, a, o, s, l, u = this, c = this.wrap, d = this.picker, h = this.slider, f = this.rgbBox, p = this.hslBox, m = this.hexBox, g = this.okBtn, v = this.cancelBtn, b = c.style, N = !1;
            "ontouchend"in window ? (T(c, "touchstart", t),
            T(c, "touchmove", e),
            T(c, "touchend", n)) : (T(c, "mousedown", t),
            T(c, "mousemove", e),
            T(c, "mouseup", n),
            T(c, "mouseout", n)),
            d.onmousemove = function() {
              u.update([d.H, d.S, h.L])
            }
            ,
            h.onmousemove = function() {
              u.update([d.H, d.S, h.L])
            }
            ,
            p.oninput = function() {
              u.update(p.getHSLArr())
            }
            ,
            f.oninput = function() {
              u.update(y(f.getRGBArr()))
            }
            ,
            m.oninput = function() {
              u.update(m.getHEX())
            }
            ,
            T(g.btn, "click", function() {
              u.hide(),
              u.re("ok", [{
                rgb: f.getRGB(),
                hsl: p.getHSL(),
                hex: _(p.getHSL(), "hex")
              }, u.target]),
              u.onok && u.onok({
                rgb: f.getRGB(),
                hsl: p.getHSL(),
                hex: _(p.getHSL(), "hex")
              }, u.target)
            }),
            T(v.btn, "click", function() {
              u.hide()
            })
          },
          show: function(t, e, n, r) {
            !this.inited && this.init();
            var i = this.wrap
              , a = i.style;
            a.left = (t ? t : 0) + "px",
            a.top = (e ? e : 0) + "px",
            a.visibility = "visible",
            a.opacity = 1,
            r && this.update(r),
            this.target = n
          },
          hide: function() {
            if (this.inited) {
              var t = this.wrap
                , e = t.style;
              e.visibility = "hidden",
              e.opacity = 0
            }
          },
          update: function(t) {
            var e = "Array" == S(t) ? t : y(N(t));
            this.picker.update(e),
            this.slider.update(e),
            this.rgbBox.update(e),
            this.hslBox.update(e),
            this.hexBox.update(e),
            this.colorBox.update(e)
          }
        },
        t(H, l.xh5_EvtDispatcher),
        new H
      }
    }()
  }
});
;xh5_define("cfgs.settinger", [], function() {
  "use strict";
  function t(t) {
    this.uid = t,
    this.custom = {
      show_underlay_vol: !0,
      show_ext_marks: !0,
      show_floater: !0,
      mousewheel_zoom: !0,
      keyboard: !0,
      history_t: "window",
      allow_move: !0,
      mouse_and_touch: !0,
      tchart_tap: !0,
      show_k_rangepercent: !0,
      touch_prevent: !0,
      mini_threshold: {
        width: 0 / 0,
        height: 0 / 0
      },
      show_logo: !0,
      k_overlay: !1,
      stick: !0,
      smooth: !1,
      indicatorpanel_url: "https://current.sina.com.cn/sinatkchart/indicatorpanel.html?20160704",
      allow_indicator_edit: !0,
      storage_lv: 2,
      indicator_reorder: !0,
      indicator_cvs_title: !1,
      indicator_reheight: !0,
      centerZoom: !0
    },
    this.PARAM = {
      K_CL_NUM: 260,
      updateRate: 5,
      T_RATE: 120,
      minCandleNum: 15,
      maxCandleNum: 0 / 0,
      defaultCandleNum: 80,
      zoomUnit: 90,
      zoomLimit: 10,
      zoomArea: .15,
      I_Z_INDEX: 50,
      G_Z_INDEX: 30,
      _hd: 1,
      setHd: function(t) {
        "number" == typeof t && (this._hd = t)
      },
      getHd: function() {
        return this._hd
      },
      isFlash: !1,
      LOGO_ID: "KKE_sina_finance_logo"
    },
    this.DIMENSION = {
      extend_draw: !1,
      LOGO_W: 80,
      LOGO_H: 20,
      posY: 0,
      posX: 55,
      RIGHT_W: 55,
      K_RIGHT_W: 9,
      _w: void 0,
      _h: void 0,
      w_t: void 0,
      w_k: void 0,
      h_t: void 0,
      h_k: void 0,
      P_HV: .28,
      H_MA4K: 13,
      H_TIME_PART: 13,
      K_F_T: 47,
      T_F_T: 13,
      H_T_T: 14,
      W_T_L: 43,
      H_T_G: 60,
      H_BLK: 50,
      H_T_B: 7,
      I_V_O: 0,
      getOneWholeTH: function() {
        return this.H_T_T + this.H_T_G
      },
      H_RS: 30,
      setStageW: function(t) {
        this._w = t,
        this.w_k = t - this.posX - this.K_RIGHT_W,
        this.w_t = t - this.posX - this.RIGHT_W
      },
      setStageH: function(t, e) {
        this._h = t,
        this.h_k = this.h_t = t - e - this.H_TIME_PART - this.H_MA4K
      },
      getStageW: function() {
        return this._w
      },
      getStageH: function() {
        return this._h
      }
    },
    this.STYLE = {
      FONT_SIZE: 12,
      FONT_FAMILY: "helvetica,arial,sans-serif"
    },
    this.COLOR = {
      BG: "#fff",
      T_P: "#007cc8",
      T_AVG: "#000000",
      T_PREV: "#9b9b9b",
      K_RISE: "#f11200",
      K_FALL: "#00a800",
      K_N: "#000000",
      K_CL: "#007cc8",
      K_MS_RISE: "#f11200",
      K_MS_FALL: "#00a800",
      K_MS_N: "#000000",
      T_RISE: "#f11200",
      T_FALL: "#00a800",
      T_N: "#000000",
      F_RISE: "#f11200",
      F_FALL: "#00a800",
      F_N: "#000000",
      F_BG: "rgba(255,255,255,.9)",
      F_BR: "#000",
      F_T: "#000",
      K_EXT: "#080208",
      T_T: "#777",
      K_P: "#555",
      V_SD: "#dddddd",
      M_ARR: ["#fff", "#BCD4F9"],
      TIME_S: "#000000",
      TIME_L: "#eeeeee",
      GRID: "#eee",
      IVH_LINE: "#494949",
      P_TC: "#fff",
      P_BG: "#494949",
      T_TC: "#fff",
      T_BG: "#494949",
      REMARK_T: "#fff",
      REMARK_BG: "#494949",
      K_PCT: "#ccc",
      BTN_ARR: ["#2b9dfc", "#fff"],
      TIP_ARR: ["#000", "#fff", null, !1, null],
      LOGO: "#ccc"
    },
    this.datas = {
      s: "sh000001",
      mode: "",
      tDataLen: 241,
      t: "",
      isT: !1,
      scaleType: "price",
      candle: "solid"
    }
  }
  var e = {
    URLHASH: {
      TS: 1,
      T1: 1,
      T5: 5,
      FAKE_T5: 2,
      NTS: "ts",
      NT5: "t5",
      KD: 24,
      KW: 168,
      KM: 720,
      KCL: 365,
      KDF: 23,
      KDB: 25,
      KWF: 167,
      KWB: 169,
      KMF: 719,
      KMB: 721,
      KCLF: 364,
      KCLB: 366,
      NKD: "kd",
      NKW: "kw",
      NKM: "km",
      NKCL: "kcl",
      NKDF: "kdf",
      NKDB: "kdb",
      NKWF: "kwf",
      NKWB: "kwb",
      NKMF: "kmf",
      NKMB: "kmb",
      NKCLF: "kclf",
      NKCLB: "kclb",
      K1: 1,
      K5: 5,
      K15: 15,
      K30: 30,
      K60: 60,
      K240: 240,
      NK1: "k1",
      NK5: "k5",
      NK15: "k15",
      NK30: "k30",
      NK60: "k60",
      NK240: "k240",
      KMS: 1e3,
      NKMS: "kms",
      KYTD: 983,
      NYTD: "kytd",
      vn: function(t) {
        for (var e in this)
          if (this.hasOwnProperty(e) && "number" == typeof this[e] && t == this[e])
            return this[e];
        return void 0
      },
      vi: function(t) {
        switch (t) {
        case this.NTS:
          return this.TS;
        case this.NT5:
          return this.FAKE_T5;
        default:
          return this[t.toUpperCase()]
        }
      },
      gt: function(t) {
        var e;
        switch (t) {
        case this.KMS:
          e = {
            type: "msk"
          };
          break;
        case this.K1:
        case this.K5:
        case this.K15:
        case this.K30:
        case this.K60:
        case this.K240:
          e = {
            type: "mink"
          };
          break;
        case this.KDF:
        case this.KWF:
        case this.KMF:
        case this.KCLF:
          e = {
            type: "rek",
            dir: "q"
          };
          break;
        case this.KDB:
        case this.KWB:
        case this.KMB:
        case this.KCLB:
          e = {
            type: "rek",
            dir: "h"
          };
          break;
        default:
          e = {
            type: "k"
          }
        }
        switch (t) {
        case this.KD:
        case this.KDF:
        case this.KDB:
          e.baseid = this.KD;
          break;
        case this.KW:
        case this.KWF:
        case this.KWB:
          e.baseid = this.KW;
          break;
        case this.KM:
        case this.KMF:
        case this.KMB:
          e.baseid = this.KM;
          break;
        case this.KCL:
        case this.KCLF:
        case this.KCLB:
          e.baseid = this.KCL;
          break;
        default:
          e.baseid = t
        }
        return e
      }
    },
    e: {
      K_DATA_LOADED: "kDataLoaded",
      T_DATA_LOADED: "tDataLoaded",
      I_EVT: "iEvent"
    },
    nohtml5info: "\u68c0\u6d4b\u5230\u60a8\u7684\u6d4f\u89c8\u5668\u8fc7\u65e7\u4e14\u4e0d\u652f\u6301HTML 5\uff0c\u5f53\u524d\u4ee5\u517c\u5bb9\u6a21\u5f0f\u8fd0\u884c\u3002<br/>\u4e3a\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c\u53ca\u5b8c\u5584\u7684\u529f\u80fd\uff0c\u5efa\u8bae\u4f7f\u7528<a style='color:#fff;text-decoration:underline;' href='http://down.tech.sina.com.cn/content/40975.html' target='_blank'>\u8c37\u6b4cChrome</a>\u6d4f\u89c8\u5668\uff0c\u6216\u5347\u7ea7\u5230\u60a8\u6d4f\u89c8\u5668\u7684<a style='color:#fff;text-decoration:underline;' href='http://down.tech.sina.com.cn/content/58979.html' target='_blank'>\u6700\u65b0\u7248\u672c</a>\u3002",
    historyt08: "\u5f53\u524d\u63d0\u4f9bA\u80a12008\u5e74\u4ee5\u6765\u7684\u5386\u53f2\u5206\u65f6\u8d70\u52bf\u67e5\u8be2",
    nohistoryt: "\u65e0\u6b64\u8bc1\u5238\u6b64\u65f6\u6bb5\u5386\u53f2\u5206\u65f6\u6570\u636e",
    norecord: "\u8bc1\u5238\u4ee3\u7801\u65e0\u8bb0\u5f55",
    notlisted: "\u672a\u4e0a\u5e02",
    delisted: "\u9000\u5e02",
    nodata: "\u672a\u52a0\u8f7d\u5230\u6709\u6548\u6570\u636e",
    noredata: "\u90e8\u5206\u8bc1\u5238\u65e0\u590d\u6743\u6570\u636e"
  };
  return new function() {
    this.VER = "2.0.27";
    var n = [];
    this.getSetting = function(e) {
      for (var i, s = n.length; s--; )
        if (i = n[s],
        e == i.uid)
          return i;
      return i = new t(e),
      n.push(i),
      i
    }
    ,
    this.globalCfg = e
  }
});
;xh5_define("datas.hq", ["utils.util"], function(e) {
  "use strict";
  var t = e.load
    , r = e.fBind
    , a = e.market
    , i = e.cookieUtil
    , n = e.dateUtil
    , s = e.tUtil
    , o = 0 == location.protocol.indexOf("https:")
    , u = new function() {
    var e, r = "sinaH5EtagStatus", a = {
      domain: "",
      path: "/",
      expires: 3600
    }, n = "n", s = "y", u = 0, d = (o ? "https" : "http") + "://hq.sinajs.cn/list=sys_hqEtagMode", m = function() {
      t(d, function() {
        var t = window.hq_str_sys_hqEtagMode;
        0 == u ? u = t : (u == t ? (e = !1,
        i.set(r, n, a)) : (e = !0,
        i.set(r, s, a)),
        u = 0)
      })
    }, l = function() {
      var t = i.get(r);
      switch (t) {
      case n:
        e = !1;
        break;
      case s:
        e = !0;
        break;
      default:
        e = !1,
        m()
      }
    };
    l(),
    setInterval(l, 2e3),
    this.isETag = function() {
      return e
    }
  }
    , d = function() {
    function i(t, r, a) {
      var i = {}
        , n = _[t];
      n || (n = {
        symbol: t
      },
      _[t] = n);
      var s = w.trHandler(a, n);
      s && (n.trstr = a),
      i[t] = n;
      var o = {
        msg: "",
        dataObj: i
      };
      return e.isFunc(r) && r(o),
      o
    }
    function d(e) {
      return /^nf_(IF|IC|IH|TF)\w+$/.test(e) ? "CFF" : /^nf_T(\d{4}|0)$/.test(e) ? "CFF" : "NF"
    }
    function m(t, r, i, n) {
      if (n && --n.count > 0)
        return null;
      for (var s, o, u, m, l, c, h = t.split(","), f = [], _ = {}, b = 0, g = h.length; g > b; b++) {
        if (s = h[b],
        u = p[s],
        u || (u = {
          symbol: s
        },
        p[s] = u),
        o = a(s),
        i)
          m = i;
        else {
          switch (m = window["hq_str_" + s],
          o) {
          case "HK":
            l = window["hq_str_" + s.replace("rt_", "") + "_i"];
            break;
          default:
            l = window["hq_str_" + s + "_i"]
          }
          if ("US" == o)
            var N = window.hq_str_gb_$ixic || window.hq_str_gb_ixic || window.hq_str_gb_$dji || window.hq_str_gb_dji
        }
        c = m && m.length > 0 ? m.split(",") : void 0;
        var C;
        switch (o) {
        case "CN":
          C = w;
          break;
        case "CNI":
          C = w;
          break;
        case "US":
          C = T;
          break;
        case "HK":
          C = S;
          break;
        case "OTC":
          C = E;
          break;
        case "HF":
          C = P;
          break;
        case "NF":
          C = "CFF" == d(s) ? y : K;
          break;
        case "fund":
          C = D;
          break;
        case "option_cn":
          C = k;
          break;
        case "forex":
        case "forex_yt":
          C = v;
          break;
        case "CFF":
          C = y;
          break;
        default:
          C = void 0
        }
        var F = !0;
        C && (F = C.update(c, u, l, N)),
        F && (u.hqstr = m),
        f.push(u),
        _[s] = u
      }
      var L = {
        msg: "",
        data: f,
        dataObj: _
      };
      return e.isFunc(r) && r(L),
      L
    }
    function l(t) {
      var r = 40
        , a = t.split(",")
        , i = [];
      for (a = e.uae(a); a.length > r; )
        i.push(a.splice(0, r));
      return i.push(a.splice(0, a.length)),
      i
    }
    this.VER = "2.6.9";
    var c, h = {
      "00": "",
      "01": "\u505c\u724c\u4e00\u5c0f\u65f6",
      "02": "\u505c\u724c\u4e00\u5929",
      "03": "\u8fde\u7eed\u505c\u724c",
      "04": "\u76d8\u4e2d\u505c\u724c",
      "05": "\u505c\u724c\u534a\u5929",
      "06": "\u505c\u724c\u534a\u5c0f\u65f6",
      "07": "\u6682\u505c",
      "08": "\u53ef\u6062\u590d\u4ea4\u6613\u7194\u65ad",
      "09": "\u4e0d\u53ef\u6062\u590d\u4ea4\u6613\u7194\u65ad"
    }, f = (new Date).getTime(), p = {}, _ = {}, b = new function() {
      var e = "hq.sinajs.cn"
        , r = "://" + e + "/?_=$rn&list=$symbol"
        , a = "://" + e + "/etag.php?_=" + f + "&list=$symbol"
        , i = function(e) {
        var t, i = o ? "https" : e.ssl ? "https" : "http";
        return t = e.cancelEtag ? i + r.replace("$rn", String(Math.random())) : i + (u.isETag() ? a : r.replace("$rn", String(Math.random())))
      };
      return function(e, r, a) {
        a = a || {},
        t(i(a).replace("$symbol", e), r)
      }
    }
    , g = function(e) {
      var t = e.timeStr || ""
        , r = e.dateStr || ""
        , a = e.tArr || void 0
        , i = e.hqObj || {}
        , o = e.dateDiv || "-"
        , u = t.split(":")
        , d = Number(u[0]) || 0
        , m = Number(u[1]) || 0
        , l = Number(u[2]) || 0
        , c = [s.s0(d), s.s0(m)].join(":")
        , h = 0 / 0;
      if (a)
        if (a.indexOf)
          h = a.indexOf(c);
        else
          for (var f = a.length; f--; )
            if (a[f] == c) {
              h = f;
              break
            }
      var p = {
        time: c,
        isUpdateTime: isNaN(h) ? !0 : Boolean(h >= 0),
        index: h
      }
        , _ = r.split(o)
        , b = ~~Number(_[0])
        , g = ~~(Number(_[1]) - 1)
        , N = ~~Number(_[2])
        , v = {
        isErrData: !1,
        isDateChange: !1,
        date: i.date,
        today: [b, g + 1, N].join("-")
      };
      if (i.date) {
        var w = new Date(b,g,N,d,m,l)
          , y = n.stbd(i.date, w);
        y ? w >= i.date ? v.date.setHours(d, m, l) : v.isErrData = !0 : (v.isDateChange = Boolean(w > i.date),
        v.isDateChange ? v.date = w : v.isErrData = !0)
      } else
        r ? v.date = new Date(b,g,N,d,m,l) : v.isErrData = !0;
      return {
        datePart: v,
        timePart: p
      }
    }, N = {
      swap: function(e) {
        var t, r = e.split(","), a = "";
        r[8] = "TP" == r[8] ? "03" : "00",
        t = [0, 4, 3, 7, 5, 6, 26, 46, 10, 11, 36, 26, 37, 27, 38, 28, 39, 29, 40, 30, 56, 46, 57, 47, 58, 48, 59, 49, 60, 50, 2, 1, 8];
        for (var i = 0; i < t.length; i++)
          a += r[t[i]] + ",";
        return a = a.slice(0, a.length - 1)
      },
      kak: function(e, t) {
        var r;
        switch (t) {
        case "CN_2":
          r = this.swap(e);
          break;
        default:
          r = e
        }
        return r
      }
    }, v = new function() {
      var e, t;
      this.update = function(r, a) {
        if (!r)
          return !1;
        e || (e = s.gtr([["7:00", "23:59"], ["0:00", "6:59"]]));
        var i = e
          , n = "07:00"
          , o = 17
          , u = a.symbol;
        0 !== u.indexOf("fx_") && (o = 10,
        "DINIW" == u && (t || (t = s.gtr([["6:00", "23:59"], ["0:00", "5:59"]])),
        i = t,
        n = "06:00"));
        var d = r[o]
          , m = r[0]
          , l = g({
          dateStr: d,
          timeStr: m,
          hqObj: a,
          tArr: i,
          start: n
        });
        if (l.datePart.isErrData)
          return !1;
        a.date = l.datePart.date,
        a.today = l.datePart.today,
        a.time = l.timePart.time,
        a.index = l.timePart.index,
        a.isUpdateTime = l.timePart.isUpdateTime,
        a.name = String(r[9]);
        var c = Number(r[3]) || 0;
        return a.prevclose = c,
        a.open = Number(r[5]) || c,
        a.high = Number(r[6]) || c,
        a.low = Number(r[7]) || c,
        a.price = Number(r[8]) || c,
        a.totalVolume = 0,
        !0
      }
    }
    , w = new function() {
      var t, r, a = function(r, a) {
        if (!r)
          return !1;
        t || (t = s.gta());
        var i = 100;
        /[gz]/.test(a.type) ? i = 10 : e.isRepos(a.symbol) ? i = 10 : /^(sh000|sh580)\d+/.test(a.symbol) && (i = 1);
        var n = r[30]
          , o = r[31]
          , u = g({
          dateStr: n,
          timeStr: o,
          hqObj: a,
          tArr: t,
          start: "09:30"
        });
        if (u.datePart.isErrData)
          return !1;
        if (a.date = u.datePart.date,
        a.isDateChange = u.datePart.isDateChange,
        a.today = u.datePart.today,
        a.time = u.timePart.time,
        a.index = u.timePart.index,
        a.isUpdateTime = u.timePart.isUpdateTime,
        !u.timePart.isUpdateTime) {
          var d = a.time.split(":")
            , m = Number(d[0])
            , l = Number(d[1]);
          switch (m) {
          case 11:
            36 > l && (a.isUpdateTime = !0,
            a.index = 119);
            break;
          case 15:
            10 > l && (a.isUpdateTime = !0,
            a.index = 240)
          }
        }
        a.name = String(r[0]),
        a.isNewListed = Boolean(0 == a.name.indexOf("N"));
        var c = Number(r[2]) || 0;
        a.prevclose = c,
        a.preopen = Number(r[1]) || Number(r[6]) || Number(r[7]) || c,
        a.open = Number(r[1]) || c,
        a.price = Number(r[3]) || c,
        a.high = Number(r[4]) || c,
        a.low = Number(r[5]) || c,
        a.buy = Number(r[6]),
        a.sell = Number(r[7]);
        var f = Number(r[8]) || 0;
        f /= i,
        a.totalVolume = f,
        a.totalAmount = Number(r[9]) || 0;
        var p = r[32];
        return a.state = p,
        a.isStopDay = "02" == p || "03" == p,
        a.statusStr = h[p] || "",
        !0
      }, i = function(e, t) {
        var r = e.split(",");
        !r || r.length < 16 || (t.type = String(r[0]).toLowerCase(),
        t.lastfive = Number(r[6]),
        t.fc = Number(r[8]),
        t.issueprice = Number(r[14]),
        t.status = Number(r[15]))
      }, o = function(t, a) {
        r || (r = s.gtr([["9:15", "11:30"], ["13:00", "15:01"]]));
        var i = p[a.symbol] || {}
          , o = i.date;
        e.isDate(o) || (o = new Date);
        var u = t.split("|")
          , d = n.ds(o)
          , m = u[1]
          , l = g({
          dateStr: d,
          timeStr: m,
          hqObj: a,
          tArr: r,
          start: "09:15"
        });
        return l.datePart.isErrData ? !1 : l.datePart.date.getHours() - o.getHours() > 2 ? !1 : (a.date = l.datePart.date,
        a.isDateChange = l.datePart.isDateChange,
        a.today = l.datePart.today,
        a.time = l.timePart.time,
        a.index = l.timePart.index,
        a.isUpdateTime = l.timePart.isUpdateTime,
        a.name = i.name || "",
        a.isNewListed = Boolean(0 == a.name.indexOf("N")),
        a.price = Number(u[2]),
        a.trvolume = .01 * (Number(u[3]) || 0),
        a.tramount = Number(u[4]) || 0,
        a.trbs = Number(u[7]) || 0,
        !0)
      };
      this.trHandler = function(e, t) {
        return o(e, t)
      }
      ,
      this.update = function(e, t, r) {
        var n = !0;
        return r && i(r, t),
        e && (n = a(e, t)),
        n
      }
    }
    , y = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gata(a(r.symbol), window["kke_future_" + r.symbol] && window["kke_future_" + r.symbol].time || [["09:30", "11:29"], ["13:00", "02:59"]]));
        var i = t[36]
          , n = t[37]
          , o = g({
          dateStr: i,
          timeStr: n,
          hqObj: r,
          tArr: e,
          start: e[0]
        });
        if (o.datePart.isErrData)
          return !1;
        r.name = t[49] || r.symbol.replace("CFF_RE_", ""),
        r.date = o.datePart.date,
        r.isDateChange = o.datePart.isDateChange,
        r.today = o.datePart.today,
        r.time = o.timePart.time,
        r.index = o.timePart.index,
        r.isUpdateTime = o.timePart.isUpdateTime;
        var u = Number(t[14]) || Number(t[13]) || 0;
        return r.settlement = r.prevclose = u,
        r.open = Number(t[0]) || u,
        r.price = Number(t[3]) || u,
        r.high = Number(t[1]) || u,
        r.low = Number(t[2]) || u,
        r.preopen = r.open,
        r.totalVolume = Number(t[4]) || 0,
        r.totalAmount = Number(t[5]) || 0,
        r.holdingAmount = Number(t[6]) || 0,
        r.preHoldingAmount = Number(t[15]) || 0,
        r.iscff = 1,
        !0
      }
    }
    , T = new function() {
      var t, r = function(t) {
        if (!t || t.length < 9)
          return null;
        for (var r, a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i = t.split(" "), n = new Date, s = n.getFullYear(), o = 0, u = a.length; u > o; o++)
          if (String(i[0]).toUpperCase() == String(a[o]).toUpperCase()) {
            r = o;
            break
          }
        var d = parseInt(Number(i[1]))
          , m = String(i[2])
          , l = m.toUpperCase().indexOf("PM") > 0
          , c = m.split(":")
          , h = parseInt(Number(c[0]));
        l && 12 != h && (h += 12);
        var f = c[1]
          , p = f.slice(0, -2)
          , _ = [e.strUtil.zp(h), e.strUtil.zp(p), "00"].join(":")
          , b = new Date(s,r,d);
        if (+b > +n) {
          if (!(0 == n.getMonth() && n.getDate() < 7))
            return null;
          s--,
          b = new Date(s,r,d)
        }
        var g = [b.getFullYear(), e.strUtil.zp(b.getMonth() + 1), e.strUtil.zp(b.getDate())].join("-");
        return [_, g]
      }, a = function(e, t) {
        if (e && t) {
          var r = e.split(",");
          !r || r.length < 3 || (t.exchange = r[0],
          t.industry = r[1],
          t.issueprice = r[2])
        }
      }, i = function(e, a, i) {
        function o(e) {
          return 0 === parseInt(e[2]) && 0 === parseInt(e[4]) && 0 === parseInt(e[5]) && 0 === parseInt(e[6]) && 0 === parseInt(e[7]) && 0 === parseInt(e[10])
        }
        if (!e || e.length < 28)
          return !1;
        t || (t = s.gtus());
        var u, d = !1;
        i ? (u = i.split(","),
        d = o(u)) : d = o(e);
        var m;
        if (a.prevclose = Number(e[26]) || 0,
        d) {
          a.high = a.prevclose,
          a.open = a.prevclose,
          a.low = a.prevclose;
          var l = new Date((window.hq_str_sys_time ? new Date(1e3 * window.hq_str_sys_time) : new Date) - 432e5);
          m = ["09:10", l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate()]
        } else
          a.open = Number(e[5]) || a.prevclose,
          a.high = Number(e[6]) || a.prevclose,
          a.low = Number(e[7]) || a.prevclose,
          m = r(String(u ? u[25] : e[25]));
        if (a.name = e[0],
        a.price = Number(e[1]) || a.open,
        a.preopen = a.open,
        a.totalVolume = Number(e[10]) || 0,
        a.prevclose <= 0 && (a.prevclose = a.price),
        a.isUnlisted = 0 == a.price && 0 == Number(e[8]) && 0 == Number(e[9]),
        m) {
          var c = g({
            dateStr: m[1],
            timeStr: m[0],
            hqObj: a,
            tArr: t
          });
          a.date = c.datePart.date,
          a.isDateChange = c.datePart.isDateChange,
          a.today = c.datePart.today,
          a.time = c.timePart.time,
          a.index = c.timePart.index,
          a.isUpdateTime = c.timePart.isUpdateTime,
          n = !0
        }
        return !0
      }, n = !1;
      this.update = function(e, t, r, n) {
        var s;
        return r && a(r, t),
        e && (s = i(e, t, n)),
        s
      }
    }
    , D = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gthk());
        var a = t[7]
          , i = t[1]
          , n = g({
          dateStr: a,
          dateDiv: "-",
          timeStr: i,
          hqObj: r,
          tArr: e,
          start: "09:30"
        });
        return r.date = n.datePart.date,
        r.isDateChange = n.datePart.isDateChange,
        r.today = n.datePart.today,
        r.time = n.timePart.time,
        r.index = n.timePart.index,
        r.isUpdateTime = n.timePart.isUpdateTime,
        r.name = String(t[0]),
        r.volume = 0,
        r.price = Number(t[2]),
        r.prevprice = r.prevclose = Number(t[3]),
        !0
      }
    }
    , K = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gata(a(r.symbol), window["kke_future_" + r.symbol] && window["kke_future_" + r.symbol].time || [["09:30", "11:29"], ["13:00", "02:59"]]));
        var i = t[1]
          , n = t[17]
          , o = i.slice(0, 2) + ":" + i.slice(2, 4)
          , u = g({
          dateStr: n,
          dateDiv: "-",
          timeStr: o,
          hqObj: r,
          tArr: e,
          start: e[0]
        });
        r.date = u.datePart.date,
        r.isDateChange = u.datePart.isDateChange,
        r.today = u.datePart.today,
        r.time = u.timePart.time,
        r.index = u.timePart.index,
        r.isUpdateTime = u.timePart.isUpdateTime,
        r.name = String(t[0]);
        var d = Number(t[10]) || 0;
        return r.prevclose = d,
        r.open = Number(t[2]) || d,
        r.preopen = r.open || r.price,
        r.high = Number(t[3]) || d,
        r.low = Number(t[4]) || d,
        r.close = Number(t[5]) || d,
        r.buy = Number(t[6]),
        r.sell = Number(t[7]),
        r.price = Number(t[8]) || d,
        r.activeprevclose = Number(t[9]),
        r.buyAmount = Number(t[11]),
        r.sellAmount = Number(t[12]),
        r.holdingAmount = Number(t[13]),
        r.totalVolume = Number(t[14]) || 0,
        r.exchange = t[15],
        r.futuresType = t[16],
        r.isHot = Number(t[18]),
        r.day5Highest = Number(t[19]),
        r.day5Lowest = Number(t[20]),
        r.day10Highest = Number(t[21]),
        r.day10Lowest = Number(t[22]),
        r.day20Highest = Number(t[23]),
        r.day20Lowest = Number(t[24]),
        r.day55Highest = Number(t[25]),
        r.day55Lowest = Number(t[26]),
        r.weighted = Number(t[27]),
        !0
      }
    }
    , S = new function() {
      var e, t = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gthk());
        var a = t[17]
          , i = t[18]
          , n = t[24]
          , o = g({
          dateStr: a,
          dateDiv: "/",
          timeStr: i,
          hqObj: r,
          tArr: e,
          start: "09:30"
        });
        r.date = o.datePart.date || new Date,
        r.isDateChange = o.datePart.isDateChange,
        r.today = o.datePart.today;
        var u = !1;
        (!r.time || o.timePart.time > "09:29" && r.time < o.timePart.time) && (u = !0),
        r.time = o.timePart.time,
        r.index = o.timePart.index,
        r.isUpdateTime = o.timePart.isUpdateTime,
        u && (r.isUpdateTime = !0),
        r.name = String(t[1]);
        var d = Number(t[3]) || 0;
        return r.prevclose = d,
        r.open = "Y" == n ? Number(t[2]) || d : d,
        r.preopen = Number(t[2]) || Number(t[9]) || Number(t[10]) || d,
        r.price = Number(t[6]) || d,
        r.high = Number(t[4]) || d,
        r.low = Number(t[5]) || d,
        r.totalVolume = Number(t[12]) || 1e3 * Number(t[11]) || 0,
        r.totalAmount = Number(t[11]) || 0,
        !0
      }, r = function(e, t) {
        var r = e.split(",");
        !r || r.length < 15 || (t.type = String(r[0]).toLowerCase(),
        t.lastfive = 0,
        t.status = Number(r[14]),
        t.issueprice = Number(r[16]))
      };
      this.update = function(e, a, i) {
        var n = !0;
        return i && r(i, a),
        e && (n = t(e, a)),
        n
      }
    }
    , P = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gata(a(r.symbol), window["kke_future_" + r.symbol] && window["kke_future_" + r.symbol].time || [["06:00", "23:59"], ["00:00", "05:00"]]));
        var i = e
          , n = e[0]
          , o = 12
          , u = t[o]
          , d = t[6]
          , m = g({
          dateStr: u,
          timeStr: d,
          tArr: i,
          start: n,
          hqObj: r
        });
        if (m.datePart.isErrData)
          return !1;
        r.date = m.datePart.date,
        r.today = m.datePart.today,
        r.time = m.timePart.time,
        r.index = m.timePart.index,
        r.isUpdateTime = m.timePart.isUpdateTime,
        r.name = String(t[13]);
        var l = Number(t[7]) || 0;
        return r.prevclose = l,
        r.open = Number(t[8]) || l,
        r.price = Number(t[0]) || l,
        r.high = Number(t[4]) || l,
        r.low = Number(t[5]) || l,
        r.buy = Number(t[2]),
        r.sell = Number(t[3]),
        r.buyAmount = Number(t[10]),
        r.sellAmount = Number(t[11]),
        r.holdingAmount = Number(t[9]),
        !0
      }
    }
    , k = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gta());
        var a = t[32]
          , i = a.split(" ")
          , n = i[0]
          , o = i[1]
          , u = g({
          dateStr: n,
          timeStr: o,
          hqObj: r,
          tArr: e,
          start: "09:30"
        });
        if (u.datePart.isErrData)
          return !1;
        r.date = u.datePart.date,
        r.isDateChange = u.datePart.isDateChange,
        r.today = u.datePart.today,
        r.time = u.timePart.time,
        r.index = u.timePart.index,
        r.isUpdateTime = u.timePart.isUpdateTime,
        r.name = String(t[37]),
        r.isNewListed = Boolean(0 == r.name.indexOf("N"));
        var d = Number(t[8]) || 0;
        return r.prevclose = d,
        r.preopen = Number(t[9]) || d,
        r.open = Number(t[9]) || d,
        r.price = Number(t[2]) || d,
        r.high = Number(t[39]) || d,
        r.low = Number(t[40]) || d,
        r.position = Number(t[5]) || 0,
        r.totalVolume = Number(t[41]) || 0,
        r.totalAmount = Number(t[42]) || 0,
        !0
      }
    }
    , E = new function() {
      var e;
      this.update = function(t, r) {
        if (!t)
          return !1;
        e || (e = s.gta());
        var a = t[30]
          , i = t[31]
          , n = g({
          dateStr: a,
          timeStr: i,
          hqObj: r,
          tArr: e,
          start: "09:30"
        });
        if (n.datePart.isErrData)
          return !1;
        if (r.date = n.datePart.date,
        r.isDateChange = n.datePart.isDateChange,
        r.today = n.datePart.today,
        r.time = n.timePart.time,
        r.index = n.timePart.index,
        r.isUpdateTime = n.timePart.isUpdateTime,
        !n.timePart.isUpdateTime) {
          var o = r.time.split(":")
            , u = Number(o[0])
            , d = Number(o[1]);
          switch (u) {
          case 11:
            59 > d && (r.isUpdateTime = !0);
            break;
          case 15:
            31 > d && (r.isUpdateTime = !0)
          }
        }
        r.name = String(t[0]),
        r.isNewListed = Boolean(0 == r.name.indexOf("N"));
        var m = Number(t[2]) || 0;
        r.prevclose = m,
        r.preopen = Number(t[1]) || Number(t[6]) || Number(t[7]) || m,
        r.open = Number(t[1]) || m,
        r.price = Number(t[3]) || m,
        r.high = Number(t[4]) || m,
        r.low = Number(t[5]) || m,
        r.buy = Number(t[6]),
        r.sell = Number(t[7]),
        r.totalVolume = Number(t[8]) / 1e3 || 0,
        r.totalAmount = Number(t[9]) || 0;
        var l = t[32];
        return r.state = l,
        r.isStopDay = "02" == l || "03" == l,
        r.statusStr = h[l] || "",
        !0
      }
    }
    , C = [], F = "", L = "", A = function(e) {
      for (var t = C.length; t--; )
        C[t](e),
        C[t] = null,
        C.length--
    };
    this.get = function(e, t) {
      var i, n = e.symbol, s = e.withI, o = n, u = 0;
      if (s)
        for (var d, h = n.split(","), f = h.length; f > u; u++) {
          d = h[u];
          var p;
          p = "HK" == a(d) ? d.replace("rt_", "") + "_i" : d + "_i",
          o += "," + p
        }
      var _, g;
      if (e.delay)
        F += n + ",",
        L += o + ",",
        C.push(t),
        clearTimeout(c),
        c = setTimeout(function() {
          for (L = L.substring(0, L.length - 1),
          F = F.substring(0, F.length - 1),
          i = l(L),
          g = i.length,
          _ = {
            count: g
          },
          u = 0; g > u; u++)
            b(i[u].join(","), r(m, null, F, A, null, _), e);
          F = "",
          L = ""
        }, 100);
      else
        for (i = l(o),
        g = i.length,
        _ = {
          count: g
        },
        u = 0; g > u; u++)
          b(i[u].join(","), r(m, null, n, t, null, _), e)
    }
    ,
    this.parse = function(t, r) {
      var a, n = t.symbol;
      switch (t.market) {
      case "CN_TR":
        a = i(n, null, t.hqStr);
        break;
      default:
        var s = N.kak(t.hqStr, t.market);
        a = m(n, null, s, null)
      }
      e.isFunc(r) && r(a)
    }
  };
  return d
});
;xh5_define("utils.painter", ["utils.util", "cfgs.settinger"], function(t, e) {
  "use strict";
  function i() {
    function e(t) {
      function e(t) {
        o = t.hd || o;
        var e = t.width || i.width || 0
          , n = t.height || i.height || 0
          , s = o;
        switch (i.style.width = e + "px",
        i.style.height = n + "px",
        s) {
        case 0:
          break;
        case 1:
          s = r.hdpr,
          e *= s,
          n *= s;
          break;
        default:
          e *= s,
          n *= s
        }
        i.height = i.width = 0,
        i.height = n,
        i.width = e,
        s && 1 != s && a.scale(s, s)
      }
      this.VER = "2.0.1";
      var i = n("canvas");
      "undefined" != typeof FlashCanvas && FlashCanvas.initElement(i);
      var a = i.getContext("2d")
        , o = 1;
      t && e(t),
      this.canvas = i,
      this.g = a,
      this.resize = e
    }
    function i(i) {
      var n, r, o, s, l, c, d, f, p, m = i.parentObj, g = i.ctn, v = m.sd, b = m.setting, N = 0, y = b.DIMENSION.H_TIME_PART, w = m.nu, x = m.fixScale, S = 99999, T = function() {
        n = new e,
        r = n.canvas,
        o = n.g,
        r.style.position = "absolute",
        r.style.zIndex = 0,
        a.addHandler(r, "touchstart", function(t) {
          b.custom.touch_prevent && a.preventDefault(t)
        }),
        g.appendChild(r)
      }, _ = function(t) {
        t = t || {},
        s = b.DIMENSION.getStageW(),
        N = isNaN(t.mh) ? N : t.mh,
        l = b.DIMENSION.posX,
        c = b.DIMENSION.RIGHT_W,
        d = b.DIMENSION.K_RIGHT_W,
        f = isNaN(t.h) ? f : t.h,
        y = isNaN(t.eh) ? y : t.eh,
        n.resize({
          width: s,
          height: f + y + N,
          hd: b.PARAM.getHd()
        }),
        o.font = b.STYLE.FONT_SIZE + "px " + b.STYLE.FONT_FAMILY
      }, k = function(t, e, i, n) {
        t = ~~(t + .5),
        t -= .5,
        e = ~~(e + .5),
        e -= .5,
        i = ~~(i + .5),
        i -= .5,
        o.beginPath(),
        n ? (o.moveTo(t, i),
        o.lineTo(e, i)) : (o.moveTo(i, t),
        o.lineTo(i, e)),
        o.stroke()
      }, C = function(t, e) {
        var i;
        return x ? i = isNaN(e) ? 0 > t ? Math.floor(t) : Math.ceil(t) : t.toFixed(e) : (t = (1e4 * t).toFixed(0),
        i = t / 1e4,
        i > S && (i = Math.floor(i))),
        i
      }, A = new function() {
        var e, i, n, r, a, h = 4, d = v.futureTime || window["kke_future_" + v.symbol], p = function() {
          if (isNaN(b.custom.mini_threshold.height) || !(f < b.custom.mini_threshold.height)) {
            var e = b.DIMENSION.extend_draw
              , i = l;
            e ? (o.textAlign = "left",
            o.textBaseline = "top") : o.textAlign = "right",
            o.fillStyle = b.COLOR.T_N,
            o.strokeStyle = b.COLOR.GRID,
            b.DIMENSION.getStageH() < 0 && "TFLOW" == v.name && (v.labelPriceCount = 4),
            !v.isSC && b.DIMENSION.h_t < 150 && (v.labelPriceCount = 2);
            for (var n, r, a, u, h, d = v.labelMaxP, p = w ? t.strUtil.nu(d) : null, m = v.labelMinP, g = v.labelPriceCount, y = b.DIMENSION.posX, x = d - m, T = f / g, _ = 0; g >= _; _++) {
              h = _ * T + N,
              o.fillStyle = b.COLOR.T_N,
              a = d - _ * x / g,
              a > 0 ? o.fillStyle = b.COLOR.T_RISE : 0 > a && (o.fillStyle = b.COLOR.T_FALL),
              e ? _ == g && (o.textBaseline = "bottom") : o.textBaseline = 0 == _ ? "top" : _ == g ? "bottom" : "middle";
              var A;
              if (v.isCompare) {
                if (v.dAdd <= 1)
                  a *= 100,
                  u = a.toFixed(2),
                  u += "%",
                  o.fillText(u, y, h),
                  o.fillText(u, y + b.DIMENSION.w_t + o.measureText(u).width, h);
                else {
                  A = v.datas[0][0].prevclose;
                  var D, O = a;
                  O *= 100,
                  D = O.toFixed(2),
                  D += "%",
                  e ? o.fillText(D, b.DIMENSION.w_t - o.measureText(D).width, h) : o.fillText(D, y + b.DIMENSION.w_t + o.measureText(D).width, h),
                  a = a * A + A,
                  u = a.toFixed(2),
                  o.fillText(u, y, h)
                }
                k(i, s - c, h, !0)
              } else {
                if (v.isSC)
                  if (o.fillStyle = b.COLOR.K_P,
                  w) {
                    var P = v.name && "TFLOW" == v.name ? 2 : 0;
                    a /= p[0],
                    0 == _ || _ == g ? (u = _ >= g ? p[1] : C(a, P),
                    ("NaN" == u || "" == u) && (u = 0)) : u = ""
                  } else
                    u = 0 == _ || _ == g ? a.toFixed(1 > m ? 4 : 2) : 0,
                    0 == u && 0 != _ && _ != g && (u = "");
                else {
                  if (b.DIMENSION.h_t < 0)
                    return;
                  A = v.datas[0][0].prevclose;
                  var M = "HK" == v.market ? 3 : 4
                    , R = 1 > m ? M : v.nfloat || 2;
                  "HF" == t.market(v.symbol) && (3 > m ? R = 4 : 99 > m && (R = 3)),
                  u = Math.abs(a) > S ? Math.floor(a) : a.toFixed(R),
                  n = 100 * (a - A) / A,
                  o.fillStyle = n > 0 ? b.COLOR.T_RISE : 0 > n ? b.COLOR.T_FALL : b.COLOR.T_N,
                  r = isNaN(n) ? "--%" : n.toFixed(2) + "%",
                  e ? o.fillText(r, y + b.DIMENSION.w_t - o.measureText(r).width, h) : o.fillText(r, y + b.DIMENSION.w_t + o.measureText(r).width, h)
                }
                o.fillText(u, y, h),
                k(i, s - c, h, !0)
              }
            }
          }
        }, g = function(e, i) {
          var n = v && t.market(v.symbol)
            , r = b.DIMENSION.w_t;
          "HK" == n && 415 > r && !i || k(N, f + N, e, !1)
        }, y = function(t, i, n, r, a) {
          if (e = t,
          m.dt) {
            var s = o.measureText(i).width
              , l = 0;
            l = 0 == n ? 0 : n == r - 1 ? -s : -s / 2,
            0 == r && (l = a / 2 - s / 2),
            o.fillText(i, t + l, N + f + b.STYLE.FONT_SIZE + 2)
          }
        }, x = function(t) {
          var e = t.replace("nf_", "").replace(/[\d]+$/, "");
          return "TF" == e || "T" == e ? "CFF" : "NF"
        }, T = 30, A = "ignore", D = "ignoreT", O = function() {
          var e, o = v && t.market(v.symbol);
          switch (o) {
          case "US":
            h = 7;
            break;
          case "HK":
            h = 5;
            break;
          case "NF":
          case "HF":
            h = 0;
            break;
          default:
            h = 4
          }
          if (!i) {
            switch (o) {
            case "HF":
              i = t.tUtil.gata(o, d && d.time || [["06:00", "23:59"], ["00:00", "05:00"]]);
              break;
            case "NF":
              i = t.tUtil.gata(o, d && d.time || [["09:00", "23:29"], ["13:00", "02:59"]]);
              break;
            default:
              i = t.tUtil.gata(o)
            }
            for ("CFF" == x(v.symbol) && (T = 15),
            n = [],
            e = 0; e < i.length; e += T)
              n.push(i[e]);
            var s = i[i.length - 1].split(":")[1];
            "00" != s && "30" != s && n.push(i[i.length - 1])
          }
          r = [],
          a = [];
          var l = b.DIMENSION.w_t
            , u = 370
            , c = 70
            , f = 35
            , p = l / n.length
            , g = 0
            , N = 0;
          if (m.dt && "HK" == o) {
            var y = v.hq.time;
            m.dt && y > "15:59" && (y > "16:09" && (y = "16:09"),
            n[n.length - 1] = y),
            u = 415
          }
          for (e = 0; e < n.length; e++)
            0 == e || e == n.length - 1 ? (r.push(n[e]),
            a.push(D)) : e == h ? (r.push(n[e]),
            a.push(n[e])) : u > l ? r.push(A) : e > 0 && h > e ? p * (e - g) > c && p * (h - e) > c ? (r.push(n[e]),
            g = e) : r.push(A) : (h > g && (g = h),
            p * (e - g) > c && p * (n.length - 1 - e) > c ? (r.push(n[e]),
            g = e) : r.push(A)),
            0 != e && e != h && e != n.length - 1 && (e > 0 && h > e ? p * (e - N) > f && p * (h - e) > f ? (a.push(n[e]),
            N = e) : a.push(D) : (h > N && (N = h),
            p * (e - N) > f && p * (n.length - 1 - e) > f ? (a.push(n[e]),
            N = e) : a.push(D)));
          switch (o) {
          case "NF":
            d && ("21:00" != d.time[0][0] ? h = 15 == T ? b.DIMENSION._w <= 550 ? 9 : 0 : 5 : u > l && (h = Math.floor(a.length / 2))),
            r[r.length - 1] = 30 == T ? "15:00" : "15:15";
            var w = n[h].split(":");
            59 == w[1] && (n[h] = Number(w[0]) + 1 + ":00"),
            r[h] = n[h];
            break;
          case "HF":
            u > l && (h = Math.floor(a.length / 2)),
            r[h] = n[h]
          }
        }, P = function() {
          var i = b.DIMENSION.w_t;
          if (isNaN(b.custom.mini_threshold.width) || !(i < b.custom.mini_threshold.width)) {
            o.textBaseline = "bottom",
            o.textAlign = "left",
            o.strokeStyle = b.COLOR.TIME_L,
            o.fillStyle = b.COLOR.TIME_S,
            e = l;
            var s = v.datas
              , c = s.length
              , d = v && t.market(v.symbol)
              , f = n.length
              , p = 1;
            "NF" == d && "CFF" == x(v.symbol) && (p = 2);
            var N = i / Math.max(f - p, 5)
              , w = l
              , S = 550;
            if (b.DIMENSION.getStageH() < 0 && (m.dt = !0),
            m.dt) {
              var T;
              if (1 == c || c > 6)
                for (T = 0; f > T; T++)
                  r[T] !== A && y(w, r[T], T, f),
                  "HF" == d || "NF" == d ? r[T] !== A && (T == h ? g(w, h) : g(w)) : a[T] !== D && (T == h ? g(w, h) : g(w)),
                  w += N;
              else if (6 > c)
                for (N = i / c,
                T = 0; c > T; T++)
                  b.DIMENSION._w < S ? y(w, u.ds(s[T][0].date, "/", !1, !0, !1, !1), T, 0, N) : y(w, u.ds(s[T][0].date, "/") + "/" + u.nw(s[T][0].date.getDay()), T, 0, N),
                  0 != T && g(w),
                  w += N
            }
          }
        };
        this.drawFrames = function() {
          _(),
          O(),
          P(),
          p()
        }
      }
      , D = new function() {
        this.iOffsetX = 0;
        var e, i, n, r, a, u = this, c = 0, g = 22, y = 99, x = function(t, e, i) {
          if (isNaN(i)) {
            if (c + y >= t || t >= s - y)
              return;
            k(N + 1, f + N, t, !1)
          }
          if (c = t,
          m.dt) {
            var n, r = f + N + b.STYLE.FONT_SIZE + 3;
            switch (i) {
            case 1:
              o.fillText(e, t, r);
              break;
            case 2:
              n = o.measureText(e).width,
              o.fillText(e, t - n, r);
              break;
            case 3:
              break;
            default:
              n = o.measureText(e).width,
              o.fillText(e, t - (n >> 1), r)
            }
          }
        }, S = function() {
          var e = b.DIMENSION.w_k;
          if (isNaN(b.custom.mini_threshold.width) || !(e < b.custom.mini_threshold.width)) {
            o.textBaseline = "bottom",
            o.textAlign = "left",
            o.strokeStyle = b.COLOR.TIME_L,
            o.fillStyle = b.COLOR.TIME_S,
            c = l;
            var i, n = v.datas, r = n.length;
            switch (p) {
            case h.URLHASH.KMS:
              i = "sec";
              break;
            case h.URLHASH.K1:
              i = "h";
              break;
            case h.URLHASH.K5:
            case h.URLHASH.K15:
            case h.URLHASH.K30:
            case h.URLHASH.K60:
            case h.URLHASH.K240:
              i = 60 / p * 24 > r ? "h" : "d";
              break;
            case h.URLHASH.KD:
            case h.URLHASH.KDF:
            case h.URLHASH.KDB:
            case h.URLHASH.KCL:
            case h.URLHASH.KCLF:
            case h.URLHASH.KCLB:
              i = r > 300 ? "y" : 28 > r ? "w" : "m";
              break;
            default:
              i = r > 300 ? "y" : "m"
            }
            for (var a, s, d, f, m, N, w = e / Math.max(r, b.PARAM.minCandleNum), S = u.iOffsetX + l + .6 * w, T = e / y, _ = e / (w * g), k = Math.ceil(_ / T), C = 0, A = 0, D = -1, O = -1, P = -1, M = -1, R = -1, F = 0; r > F; F++)
              if (N = n[F],
              m = N.date,
              s = m.getMonth(),
              a = m.getFullYear(),
              0 != F)
                if (F >= r - 1)
                  x(S + w / 2, a + "/" + (s + 1) + "/" + m.getDate(), r >= b.PARAM.minCandleNum ? 2 : 3);
                else {
                  switch (i) {
                  case "sec":
                    var L = m.getSeconds();
                    L != M && (L = t.strUtil.zp(L),
                    f = t.strUtil.zp(m.getMinutes()),
                    d = t.strUtil.zp(m.getHours()),
                    x(S, d + ":" + f + ":" + L)),
                    M = Number(L);
                    break;
                  case "min":
                    f = m.getMinutes(),
                    f != P && (f = t.strUtil.zp(f),
                    d = t.strUtil.zp(m.getHours()),
                    x(S, d + ":" + f)),
                    P = Number(f);
                    break;
                  case "h":
                    d = m.getHours(),
                    d != O && (f = t.strUtil.zp(m.getMinutes()),
                    x(S, d + ":" + f)),
                    O = d;
                    break;
                  case "d":
                    var I = m.getDate();
                    I != C && x(S, a + "/" + (s + 1) + "/" + I),
                    C = I;
                    break;
                  case "w":
                    var E = m.getDay();
                    R > E && x(S, s + 1 + "/" + m.getDate()),
                    R = E;
                    break;
                  default:
                  case "m":
                    s == D || s % k || x(S, a + "/" + (s + 1)),
                    D = s;
                    break;
                  case "y":
                    a != A && x(S, a),
                    A = a
                  }
                  S += w
                }
              else
                x(l, a + "/" + (s + 1) + "/" + m.getDate(), 1)
          }
        }, T = 37, A = function() {
          o.fillStyle = b.COLOR.K_PCT,
          o.textBaseline = "top",
          o.textAlign = "right";
          for (var t, e, i = v.nfloat || 2, n = v.prevclose, r = v.labelPriceCount, a = 0, l = f / r, u = v.labelMaxP, c = v.labelMinP, m = u - c; r >= a; a++)
            if (!(T > l && 1 & a)) {
              e = a * l + N,
              0 == a && e++,
              t = u - a * m / r,
              a == r && (o.textBaseline = "bottom");
              var g;
              p === h.URLHASH.KMS || p === h.URLHASH.K1 ? (g = ((t - n) / n * 100).toFixed(i) + "%",
              o.fillStyle = t > n ? b.COLOR.K_MS_RISE : n > t ? b.COLOR.K_MS_FALL : b.COLOR.K_MS_N) : g = Math.round((t - n) / n * 100) + "%",
              o.fillText(g, s - d, e)
            }
        }, D = function() {
          if (isNaN(b.custom.mini_threshold.height) || !(f < b.custom.mini_threshold.height)) {
            var e = b.DIMENSION.extend_draw;
            o.fillStyle = b.COLOR.K_P,
            o.strokeStyle = b.COLOR.GRID;
            var i = l;
            e ? (o.textAlign = "left",
            o.textBaseline = "top") : o.textAlign = "right";
            for (var n, r, a, u = v.labelPriceCount, c = 0, m = b.DIMENSION.posX, g = f / u, y = v.labelMaxP, x = v.labelMinP, S = y - x, _ = v.prevclose, D = w ? t.strUtil.nu(y) : null; u >= c; c++)
              T > g && 1 & c || (r = c * g + N,
              0 == c && r++,
              n = y - c * S / u,
              v.isCompare && (n *= 100),
              w ? (n /= D[0],
              a = c >= u ? D[1] : C(n)) : a = C(n),
              v.isCompare && (a += "%"),
              e ? c == u && (o.textBaseline = "bottom") : o.textBaseline = 0 == c ? "top" : c == u ? "bottom" : "middle",
              p === h.URLHASH.KMS && _ && (o.fillStyle = n > _ ? b.COLOR.K_MS_RISE : _ > n ? b.COLOR.K_MS_FALL : b.COLOR.K_MS_N),
              o.fillText(a, m, r),
              k(i, s - d, r, !0));
            _ && (v.isCompare || b.custom.show_k_rangepercent && A())
          }
        };
        this.drawFrames = function(t) {
          (t || v.datas[0].date != n || v.datas[v.datas.length - 1].date != r || v.labelMaxP != e || v.labelMinP != i || p != a) && (_(),
          D(),
          S()),
          a = v.viewState.viewId,
          n = v.datas[0].date,
          r = v.datas[v.datas.length - 1].date,
          e = v.labelMaxP,
          i = v.labelMinP
        }
      }
      ;
      this.drawBg = function(t, e) {
        v.datas && (p = v.viewState.viewId,
        b.datas.isT ? A.drawFrames(t) : (isNaN(e) || (D.iOffsetX = e,
        t = !0),
        D.drawFrames(t)))
      }
      ,
      this.respos = function(t) {
        _(t),
        r.style.left = 0,
        r.style.top = b.DIMENSION.posY + "px",
        this.drawBg(!0)
      }
      ,
      this.gc = function() {
        t.domGc(r)
      }
      ,
      T()
    }
    function d(e) {
      var i, r = e.parentObj, u = e.ctn, c = r.iMgr, h = l(r.iTo, null, u), d = r.iClk, f = c.globalDragHandler, p = c.zoomView, m = r.setting, g = m.PARAM.isFlash, v = !g, b = !1, N = 300, y = {
        isM: !1,
        isTch: !1,
        isP: !1,
        tCount: void 0,
        tXOff: -1,
        isPv: !1,
        lastIy: null,
        mDx: 0 / 0,
        mDy: 0 / 0,
        isClk: 0,
        isTMin: !1,
        mvOx: 0,
        vP: function(t) {
          var e, i;
          if (t.changedTouches) {
            a.preventDefault(t),
            a.stopPropagation(t);
            var n = a.getTarget(t)
              , r = t.changedTouches[0]
              , o = n.getBoundingClientRect()
              , s = o.left
              , l = o.top;
            e = r.clientX - s,
            i = r.clientY - l
          } else
            e = t.offsetX,
            isNaN(e) && (e = t.layerX),
            i = t.offsetY,
            isNaN(i) && (i = t.layerY);
          h(e, i, t)
        },
        vH: function(t) {
          if (!(this.isClk > 0) && m.custom.allow_move) {
            a.preventDefault(t),
            a.stopPropagation(t);
            var e = t.changedTouches ? t.changedTouches[0].pageX : t.layerX;
            isNaN(e) && (e = t.offsetX);
            var i = t.changedTouches ? t.changedTouches[0].pageY : t.layerY;
            isNaN(i) && (i = t.offsetY),
            f(this.mDx, e, this.mDy, i)
          }
        },
        mD: function(t) {
          this.mDx = isNaN(t.layerX) ? t.offsetX : t.layerX,
          this.mDy = isNaN(t.layerY) ? t.offsetY : t.layerY,
          this.isM = this.isP = !0,
          this.isClk = 2,
          S(!0)
        },
        mM: function(t) {
          this.isTch || (b = !0,
          this.isClk--,
          this.isP ? this.vH(t) : this.vP(t))
        },
        mU: function(t) {
          this.mDx = 0 / 0,
          this.mDy = 0 / 0,
          this.isM = this.isP = !1,
          f(0 / 0, 0 / 0, 0 / 0, 0 / 0, t),
          this.isClk > 0 && d && (this.isClk = 0,
          d()),
          S(!1)
        },
        mO: function() {
          this.isClk = 0,
          this.isM = this.isP = b = !1,
          h(0 / 0, 0 / 0),
          S(!1)
        },
        tR: function() {
          clearTimeout(this.tCount),
          this.isPv = this.isTMin = !1
        },
        gR: function() {
          this.tR(),
          this.tXOff = -1
        },
        tCheck: function(t) {
          this.mvOx = t.touches[0].pageX;
          var e = this;
          e.isClk = 2,
          this.tCount = setTimeout(function() {
            e.isPv = !0,
            e.vP(t),
            e.isClk = 0
          }, N)
        },
        tE: function(t) {
          a.preventDefault(t),
          this.tR(),
          this.isTch = b = !1,
          this.mDx = 0 / 0,
          this.mDy = 0 / 0,
          h(0 / 0, 0 / 0),
          f(0 / 0, 0 / 0, 0 / 0, 0 / 0, t),
          this.isClk > 0 && d && (this.isClk = 0,
          d())
        },
        tM: function(t) {
          if (this.isClk--,
          1 == t.touches.length) {
            if (!this.isPv && !this.isTMin && Math.abs(this.mvOx - t.touches[0].pageX) < 5)
              return;
            this.isTMin = !0,
            clearTimeout(this.tCount),
            this.isPv ? this.vP(t) : this.vH(t)
          } else if (2 == t.touches.length) {
            a.preventDefault(t);
            var e = t.touches[0]
              , i = t.touches[1];
            if (this.tXOff >= 0) {
              var n = Math.abs(e.pageX - i.pageX);
              if (n != this.tXOff) {
                var r = a.getTarget(t)
                  , o = s.pageX(r)
                  , l = e.pageX - o
                  , u = i.pageX - o;
                p(n < this.tXOff, [l, u])
              }
            }
            this.tXOff = Math.abs(e.pageX - i.pageX)
          }
        },
        tS: function(t) {
          switch (this.tR(),
          m.custom.touch_prevent && a.preventDefault(t),
          this.isTch = b = !0,
          this.lastIy = t.touches[0].pageY,
          this.mDx = t.changedTouches[0].pageX,
          this.mDy = t.changedTouches[0].pageY,
          t.touches.length) {
          case 1:
            this.tCheck(t);
            break;
          case 2:
            this.gR()
          }
        },
        handleEvent: function(t) {
          if (m.custom.mouse_and_touch)
            switch (t.type) {
            case "mouseup":
              this.mU(t);
              break;
            case "mousedown":
              this.mD(t);
              break;
            case "mouseout":
              this.mO();
              break;
            case "mousemove":
              this.mM(t);
              break;
            case "touchend":
              this.tE(t);
              break;
            case "touchmove":
              this.tM(t);
              break;
            case "touchstart":
              this.tS(t)
            }
        }
      }, w = new function() {
        this.onmouseup = function(t) {
          m.custom.mouse_and_touch && y.mU(t)
        }
        ,
        this.onmousedown = function(t) {
          m.custom.mouse_and_touch && y.mD(t)
        }
        ,
        this.onmouseout = function() {
          m.custom.mouse_and_touch && y.mO()
        }
        ,
        this.onmousemove = function(t) {
          m.custom.mouse_and_touch && y.mM(t)
        }
      }
      , x = function() {
        v ? i = n("canvas") : (i = n("div"),
        i.style.backgroundColor = "#eee",
        i.style.opacity = 0,
        i.style.filter = "alpha(opacity=0)"),
        i.style.position = "absolute",
        i.style.zIndex = m.PARAM.I_Z_INDEX;
        var t;
        o.istd ? t = ["touchend", "touchmove", "touchstart"] : (t = ["mousedown", "mouseup", "mousemove", "mouseout"],
        o.allowt && (t = t.concat(["touchend", "touchmove", "touchstart"])));
        for (var e = t.length; e--; )
          v ? a.addHandler(i, t[e], y) : a.addHandler(i, t[e], w["on" + t[e]] || function() {}
          );
        u.appendChild(i)
      }, S = function(t) {
        t ? (i.style.cursor = "grabbing",
        i.style.cursor = "-webkit-grabbing") : i.style.cursor = "default"
      };
      this.respos = function(t) {
        i.style.top = m.DIMENSION.posY + t.mh + "px",
        i.style.left = m.DIMENSION.posX + "px";
        var e;
        e = m.datas.isT ? m.DIMENSION.w_t : m.DIMENSION.w_k,
        i.style.width = e + "px",
        i.style.height = t.h + "px"
      }
      ,
      this.gc = function() {
        t.domGc(i)
      }
      ,
      x()
    }
    function f(e) {
      this.VER = "2.2.4",
      e = c({
        setting: void 0,
        sd: void 0,
        ctn: void 0,
        reO: void 0,
        withHBg: !1,
        nu: !1,
        dt: !0,
        fixScale: !0,
        iTo: function() {},
        iMgr: void 0,
        iClk: void 0
      }, e || {});
      var a, o, s, l, u, h = e.setting, f = function() {
        e.ctn ? a = e.ctn : (a = n("div"),
        a.style.position = "relative")
      }, p = function() {
        o = n("canvas"),
        "undefined" != typeof FlashCanvas && FlashCanvas.initElement(o),
        o.style.position = "absolute",
        o.style.zIndex = h.PARAM.G_Z_INDEX,
        s = o.getContext("2d"),
        a.appendChild(o)
      }, m = function() {
        u = new d({
          parentObj: e,
          ctn: a
        })
      }, g = function() {
        l = new i({
          parentObj: e,
          ctn: a
        })
      }, v = function(t) {
        t = t || {};
        var e, i, n = isNaN(t.mh) ? h.DIMENSION.H_T_T : t.mh, s = isNaN(t.eh) ? h.DIMENSION.H_TIME_PART : t.eh, c = h.PARAM.getHd();
        switch (e = h.datas.isT ? h.DIMENSION.w_t : h.DIMENSION.w_k,
        i = isNaN(t.h) ? h.DIMENSION.h_k : t.h,
        t.h = i,
        t.mh = n,
        t.eh = s,
        a.style.height = i + n + s + "px",
        o.style.top = h.DIMENSION.posY + n + "px",
        o.style.left = h.DIMENSION.posX + "px",
        o.style.width = e + "px",
        o.style.height = i + "px",
        c) {
        case 0:
          break;
        case 1:
          c = r.hdpr,
          e *= c,
          i *= c;
          break;
        default:
          e *= c,
          i *= c
        }
        o.width = e,
        o.height = i,
        u && u.respos(t),
        l && l.respos(t)
      };
      this.resize = v,
      this.getCanvas = function() {
        return o
      }
      ,
      this.getG = function() {
        return s
      }
      ,
      this.getWrap = function() {
        return a
      }
      ;
      var b;
      this.scale = function(t) {
        switch (t) {
        case 0:
          return;
        case 1:
          t = r.hdpr
        }
        t && s.scale(t, t)
      }
      ,
      this.newGStyle = function(t) {
        for (var e in t)
          t.hasOwnProperty(e) && (s[e] = t[e])
      }
      ,
      this.newStyle = function(t, e, i) {
        b = s.strokeStyle = t,
        e && s.beginPath(),
        i && (s.lineWidth = i)
      }
      ,
      this.newFillStyle = function(t, e) {
        if (t && !(t.length < 1)) {
          var i = t.length;
          if (1 == i)
            s.fillStyle = t[0];
          else if (i > 1) {
            for (var n = s.createLinearGradient(0, 0, 0, e), r = 0; i > r; r++)
              n.addColorStop(1 / (i - 1) * r, t[r]);
            s.fillStyle = n
          }
        }
      }
      ,
      this.newFillStyle_rgba = function(e, i, n) {
        for (var r = s.createLinearGradient(0, 0, 0, i), a = 0, o = e.length; o > a; a++)
          r.addColorStop(1 / (o - 1) * a, t.hex2dec(e[a], n));
        s.fillStyle = r
      }
      ,
      this.clear = function(t, e) {
        o.width = o.width,
        t && (b && s.strokeStyle != b && (s.strokeStyle = b),
        s.beginPath()),
        this.scale(e)
      }
      ,
      this.clearLimit = function(t, e) {
        s.clearRect(t, 0, e, o.height),
        s.beginPath()
      }
      ,
      this.beginPath = function() {
        s.beginPath()
      }
      ,
      this.closePath = function() {
        s.closePath()
      }
      ,
      this.fill = function() {
        s.fill()
      }
      ,
      this.stroke = function() {
        s.stroke()
      }
      ,
      this.save = function() {
        s.save()
      }
      ,
      this.translate = function(t, e) {
        s.translate(t, e)
      }
      ,
      this.restore = function() {
        s.restore()
      }
      ,
      this.moveTo = function(t, e) {
        s.moveTo(t, e)
      }
      ,
      this.lineTo = function(t, e) {
        s.lineTo(t, e)
      }
      ,
      this.drawDot = function(t, e, i, n) {
        n && s.moveTo(t, e),
        s.arc(t, e, i, 0, 2 * Math.PI)
      }
      ,
      this.arc = function(t, e, i, n, r, a) {
        s.arc(t, e, i, n, r, a)
      }
      ,
      this.drawCandleRect = function(t, e, i, n, r, a) {
        if (e != i && !(2 > n)) {
          var o = i - e;
          t += .5 * n,
          n = ~~(n + .5),
          t = ~~(t + .5),
          e = ~~(e + .5),
          o = ~~(o + .5),
          s.lineWidth = 1,
          a ? (t -= .5,
          e -= .5,
          s.strokeStyle = r,
          s.strokeRect(t, e, n, o)) : (1 > o && (o = 1),
          s.fillStyle = r,
          s.fillRect(t, e, n, o),
          t -= .5,
          e -= .5,
          s.strokeStyle = r,
          s.strokeRect(t, e, n, o))
        }
      }
      ,
      this.drawCandleRect_solid = function(t, e, i, n, r) {
        if (e != i && !(2 > n)) {
          var a = i - e;
          t += .5 * n,
          n = ~~(n + .5),
          t = ~~(t + .5),
          e = ~~(e + .5),
          a = ~~(a + .5),
          s.lineWidth = 1,
          s.fillStyle = r,
          s.fillRect(t, e, n, a),
          t -= .5,
          e -= .5,
          s.strokeStyle = r,
          s.strokeRect(t, e, n, a)
        }
      }
      ,
      this.drawCandleLineRect = function(t, e, i, n, r, a, o, l) {
        if (t += a,
        t = ~~(t + .5),
        s.strokeStyle = o,
        s.lineWidth = 1,
        i == n) {
          var u = .5 * a;
          u = ~~(u + .5),
          .5 > u && (u = .5),
          i = ~~(i + .5),
          i -= .5,
          s.moveTo(t - u, i),
          s.lineTo(t + u, i)
        }
        if (e != r) {
          if (t -= .5,
          s.moveTo(t, e),
          l && a >= 2) {
            var c = Math.min(i, n)
              , h = Math.max(i, n);
            s.lineTo(t, c),
            s.moveTo(t, h)
          }
          s.lineTo(t, r)
        }
      }
      ,
      this.drawOhlc = function(t, e, i, n, r, a, o) {
        s.strokeStyle = o,
        s.lineWidth = 1;
        var l = .5 * a;
        l = ~~(l + .5),
        .5 > l && (l = .5),
        t += a,
        t = ~~(t + .5),
        e = ~~(e + .5),
        e -= .5,
        s.moveTo(t - l, e),
        s.lineTo(t, e),
        r = ~~(r + .5),
        r -= .5,
        s.moveTo(t, r),
        s.lineTo(t + l, r),
        t -= .5,
        s.moveTo(t, i),
        s.lineTo(t, n)
      }
      ,
      this.drawVStickC = function(t, e, i, n, r) {
        t += i,
        i = ~~(i + .5),
        1 > i && (i = 1),
        t = ~~(t + .5),
        1 & i && (t -= .5),
        e = ~~(e + .5),
        n = ~~(n - .5),
        s.strokeStyle = r,
        s.lineWidth = i,
        s.moveTo(t, e),
        s.lineTo(t, e + n)
      }
      ,
      this.drawVStickRect = function(t, e, i, n, r, a) {
        t += .5 * i;
        var o = i;
        t = ~~(t + .5),
        o = ~~(o + .5),
        e = ~~(e + .5),
        n = ~~(n + .5),
        0 == n && (n = 1),
        a ? (.5 > o && (o = .5),
        s.fillStyle = r,
        s.fillRect(t, e, o, n)) : (t -= .5,
        e -= .5,
        s.strokeStyle = r,
        s.strokeRect(t, e, o, n))
      }
      ,
      this.drawBg = function(t) {
        l && l.drawBg(!1, t)
      }
      ,
      this.remove = function() {
        t.domGc(o),
        u && u.gc(),
        l && l.gc()
      }
      ,
      f(),
      p(),
      e.withHBg && (m(),
      g()),
      v(e.reO)
    }
    this.xh5_ibPainter = f,
    this.xh5_Canvas = e
  }
  var n = t.$C
    , r = t.xh5_BrowserUtil
    , a = t.xh5_EvtUtil
    , o = t.xh5_deviceUtil
    , s = t.xh5_HtmlPosUtil
    , l = t.fBind
    , u = t.dateUtil
    , c = t.oc
    , h = e.globalCfg;
  return i
});
