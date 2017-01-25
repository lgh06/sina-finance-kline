/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


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
})(console)

function getQueryString(name) {
 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
 var r = document.location.search.substr(1).match(reg);
 if (r != null) return unescape(r[2]); return null;
}


xh5_define("datas.t", ["utils.util"], function(e) {
  var t, a, r = e, n = r.load, i = r.tUtil, l = 0 == location.protocol.indexOf("https:"), s = {
    isBond: function(e) {
      return /^(sh204\d{3}|sz1318\d{2})$/.test(e) ? "bond" : /^sh020\d{3}$/.test(e) ? "bond" : /^sz108\d{3}$/.test(e) ? "bond" : /^sh(009|010)\d{3}$/.test(e) ? "bond" : /^sz10\d{4}$/.test(e) ? "bond" : /^sh(100|110|112|113)\d{3}$/.test(e) ? "bond" : /^sz12\d{4}$/.test(e) ? "bond" : /^sh(105|120|129|139)\d{3}$/.test(e) ? "bond" : /^sz11\d{4}$/.test(e) ? "bond" : !1
    },
    us: function(e, t, a) {
      for (var r, n = e.split(";"), i = [], l = 0, s = n.length; s > l; l++) {
        var c, o, p, d, u, m = n[l].split(",");
        0 == l ? (a ? (c = m[1].split(":")[0] + ":" + m[1].split(":")[1],
        o = m[0],
        p = Number(m[4]),
        d = Number(m[2]),
        u = Number(m[5]) || Number(m[4])) : (u = t.prevclose,
        c = m[0].split(":")[0] + ":" + m[0].split(":")[1],
        p = Number(m[3]),
        d = Number(m[1])),
        r = {
          prevclose: u,
          d: o,
          m: c,
          p: p,
          v: d,
          avp: p
        }) : (c = m[0].split(":")[0] + ":" + m[0].split(":")[1],
        p = Number(m[3]),
        d = Number(m[1]),
        r = {
          m: c,
          p: p,
          v: d,
          avp: p
        }),
        i.push(r),
        a && l == s - 1 && "16:00" > c && (r = {
          m: "16:00",
          p: p,
          v: 0,
          avp: p
        },
        i.push(r))
      }
      return i
    },
    optionCn: function(e, t, a) {
      if (typeof e.length < 1)
        return [];
      for (var r, n, l, s, c = i.gata(a), o = [], p = e.length, d = 0, u = 0; p > d; d++)
        l = e[d],
        c[c.length - 1] < l.m || (0 == u && Number(l.p) <= 0 && (l.p = t.price || t.prevclose),
        u++,
        Number(l.p) > 0 && (r = Number(l.p)),
        Number(l.p) <= 0 && (l.p = r || 0),
        Number(l.a) > 0 && (n = Number(l.a)),
        Number(l.a) <= 0 && (l.a = n || r || 0),
        Number(l.v) < 0 && (l.v = 0),
        s = {
          m: l.i,
          p: Number(l.p),
          avp: Number(l.a),
          v: Number(l.v),
          iy: Number(l.t)
        },
        0 == d && (s.d = l.d),
        o.push(s));
      return o
    },
    hf: function(a, r, n, l) {
      if (typeof a.length < 1)
        return [];
      var s, c, o = i.gata(n, t.time), p = [], d = a.length, u = 0;
      l && (d = o.length);
      for (var m, v, b = 0, f = 0; d > b && (c = a[b],
      m = 0,
      0 == b && (m = l ? 1 : 4),
      0 == f && Number(c[1 + m]) <= 0 && (c[1 + m] = r.price),
      !(r.index > 0 && !l && r.index <= e.arrIndexOf(o, c[m]))); b++)
        f++,
        c && Number(c[1 + m]) > 0 && (s = Number(c[1 + m])),
        c && Number(c[1 + m]) <= 0 && (c[1 + m] = s || 0),
        c ? (u += Number(c[1 + m]),
        v = {
          m: c[m],
          p: Number(c[1 + m]),
          avp: u / (b + 1),
          v: 0
        },
        0 == b && (v.d = c[0],
        v.prevclose = l ? Number(c[m]) || v.p : r.prevclose,
        l && (c[1 + m].split(":").length > 1 && (v.p = v.avp = Number(c[3])),
        isNaN(u) && (u = Number(c[3]),
        v.avp = u)))) : l && (v = {
          m: o[b],
          p: p[p.length - 1].p,
          avp: p[p.length - 1].avp,
          v: 0
        }),
        p.push(v);
      return p
    },
    hk: function(e, t, a) {
      if (typeof e.length < 1)
        return [];
      for (var r, n, l, s = i.gata(a), c = [], o = e.length, p = 0, d = 0, u = 0, m = 0; o > u; u++)
        n = e[u],
        d += Number(n.a),
        p += Number(n.v),
        n.m && (n.m = n.m.split(":")[0] + ":" + n.m.split(":")[1]),
        s[s.length - 1] < n.m || (0 == m && Number(n.p) <= 0 && (n.p = t.price || t.prevclose),
        m++,
        Number(n.p) > 0 && (r = Number(n.p)),
        Number(n.p) <= 0 && (n.p = r || 0),
        0 >= p && (p = 1),
        l = {
          m: n.m,
          p: Number(n.p),
          avp: d / p,
          v: Number(n.v)
        },
        c.push(l));
      return c
    },
    otc: function(e, t, a) {
      if (typeof e.length < 1)
        return [];
      for (var r, n, l, s, c = i.gata(a), o = [], p = e.length, d = 0, u = 0; p > d; d++) {
        s = e[d];
        var m = s.m.split(":")
          , v = m[0] + ":" + m[1];
        c[c.length - 1] < v || (0 == u && Number(s.p) <= 0 && (s.p = t.price || t.prevclose),
        u++,
        Number(s.p) > 0 && (r = Number(s.p)),
        Number(s.p) <= 0 && (s.p = r || 0),
        Number(s.avg) > 0 && (n = Number(s.avg)),
        Number(s.avg) <= 0 && (s.avg = n || r || 0),
        l = {
          p: Number(s.p),
          m: v,
          avp: Number(s.avg),
          v: Number(s.v) / 1e3
        },
        o.push(l))
      }
      return o
    },
    futures: function(t, r, n, l) {
      if (typeof t.length < 1)
        return [];
      for (var s, c, o, p, d, u, m, v, b, f, g = i.gata(n, a.time), h = 0, _ = [], y = 0, N = t.length; N > y; y++) {
        var k = t[y];
        if (l ? (c = k[6],
        b = Number(k[5]) || Number(k[1])) : (c = k[6] || r.today,
        b = Number(k[5]) || r.prevclose),
        r.index > 0 && !l && r.index <= e.arrIndexOf(g, k[0]))
          break;
        h++,
        Number(k[1]) > 0 && (u = Number(k[1])),
        Number(k[1]) <= 0 && (k[1] = u || 0),
        Number(k[2]) > 0 && (m = Number(k[2])),
        Number(k[2]) <= 0 && (k[2] = m || 0),
        Number(k[4]) > 0 && (v = Number(k[4])),
        Number(k[4]) <= 0 && (k[4] = v || 0),
        s = k[0],
        d = Number(k[3]) || 0,
        f = Number(k[4]) || 0,
        !l && t.length <= 1 && 0 == y ? (o = Number(k[1]) ? Number(k[1]) : r.price,
        p = Number(k[2]) ? Number(k[2]) : r.price,
        b = Number(k[5]) || r.prevclose) : (o = Number(k[1]),
        p = Number(k[2]));
        var T = {
          d: c,
          m: s,
          p: o,
          avp: p,
          iy: f,
          prevclose: b,
          v: d
        };
        _.push(T)
      }
      return l && _[_.length - 1].m < "15:00" && (T.m = "15:00",
      _.push(T)),
      _
    },
    gdf: function(e, t, a) {
      if (!e || e.length < 9 || !t)
        return null;
      var n = a ? e : r.xh5_S_KLC_D(e)
        , i = r.dateUtil.dd(t);
      6 == i.getDay() && i.setDate(i.getDate() - 1),
      0 == i.getDay() && i.setDate(i.getDate() - 2);
      for (var l, s = new Date(i.getFullYear() - 3,i.getMonth(),i.getDate()), c = 0, o = 0, p = 0, d = n.length; d > p; p++)
        l = n[p],
        l.getTime() <= s.getTime() && n[p + 1].getTime() >= s.getTime() && (c = p),
        r.dateUtil.stbd(l, i) && (o = p + 1);
      return n.slice(c, o)
    },
    c2b: function(e) {
      e = e.replace(" ", "+");
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e);
      return t >= 0 ? t : 0
    },
    db: function(e) {
      if (!e)
        return [];
      for (var t, a, r = [], n = 0, i = 0, l = 0, s = e.length; s > l; l++)
        t = this.c2b(e.charAt(l)),
        a = 6 & i ? 7 & i ^ 7 : 5,
        n |= t >> 5 - a << (7 ^ i) - a,
        64767 == n && 63 == t && (n = 65535),
        i > 25 && (i -= 32,
        r[r.length] = n,
        n = 0),
        n |= (t & (1 << 5 - a) - 1) << (7 | i) + 4 + a,
        i += 6;
      return r
    },
    fB: function(t, a, r, n) {
      t.splice(360, 3);
      for (var l, s = [], c = i.gata(r), o = 3 * c.length, p = 0, d = 0, u = 0; o > u; u += 3)
        d = Math.floor(u / 3),
        a ? s[s.length] = {
          time: c[d],
          price: t[u + 1] / 1e3
        } : (s[s.length] = {
          time: c[d],
          avg_price: t[u] / 1e3,
          price: t[u + 1] / 1e3,
          volume: t[u + 2] / 100
        },
        e.isRepos(n.symbol) && (s[d].avg_price = s[d].price,
        s[d].volume *= 10),
        s[d].volume > 0 && (p += s[d].volume),
        s[d] && 0 == s[d].price && (0 == d ? s[d].price = s[d].avg_price = n.prevclose : (s[d].price = s[d - 1].price,
        s[d].avg_price = s[d - 1].price)),
        s[d].avg_price > 0 && (l = s[d].avg_price));
      return s[0].price < 0 && (s[0].price = s[0].avg_price = p = 0),
      a || (s[0].totalVolume = p,
      s[0].totalAmount = p * l),
      s[0].index = n.index,
      s[0].prevclose = n.prevclose,
      s[0].symbol = n.symbol,
      s[0].name = n.name,
      s[0].today = n.today,
      s[0].date = n.date,
      s[0].lastfive = n.lastfive,
      s
    },
    ctdf: function(t, a, n, l) {
      for (var s, c, o, p, d = [], u = a, m = 0, v = t.length; v > m; m++) {
        d[d.length] = 0 == m && "" == t[0] ? i.gltbt(1, n.prevclose) : r.xh5_S_KLC_D(t[m]);
        var b, f = 0;
        for (d[m].splice(120, 1),
        c = 0,
        o = 241; o > c; c++)
          d[m][c] && 0 == d[m][c].price && (0 == c ? d[m][c].price = d[m][c].avg_price = d[m][c].prevclose : (d[m][c].price = d[m][c - 1].price,
          d[m][c].avg_price = d[m][c - 1].avg_price)),
          e.isRepos(n.symbol) && (d[m][c].avg_price = d[m][c].price,
          d[m][c].volume *= 10),
          b = d[m][c].volume *= .01,
          f += b;
        d[m][0].totalVolume = f,
        d[m][0].prevclose = d[m][0].prevclose || d[m][0].price
      }
      var g = d.length;
      for (g > 5 && d.splice(0, g - 5),
      s = [u],
      g = l.length,
      m = g - 2; m > g - 6; m--)
        for (c = 0,
        p = d.length; p > c; c++) {
          if (r.dateUtil.stbd(d[c][0].date, l[m])) {
            s.unshift(i.azft(d[c], "CN"));
            break
          }
          if (c == d.length - 1) {
            var h = s[0][0].prevclose;
            s.unshift(i.gltbt(1, h)),
            s[0][0].date = r.dateUtil.dd(l[m]),
            s[0][0].prevclose = h
          }
        }
      return s
    },
    ctdb: function(r, n, l, s, c) {
      for (var o = n, p = [o], d = s.length, u = d - 2; u > d - 6; u--)
        p.unshift("HF" == e.market(l.symbol) ? i.gltbt(1, l.prevclose, !1, c, [s[u]], t.time) : "NF" == e.market(l.symbol) ? i.gltbt(1, l.prevclose, !1, c, [s[u]], a.time) : i.gltbt(1, l.prevclose, !1, c, [s[u]]));
      return p
    },
    fund: function(e) {
      var t = [];
      if (e)
        for (var a = e.detail.split(","), r = 0, n = 0, i = a.length; i > n; n += 2) {
          r += Number(a[n + 1]);
          var l = {
            p: Number(a[n + 1]),
            avp: Number(r / (n / 2 + 1)),
            m: a[n]
          };
          0 == n && (l.prevclose = Number("09:30" == a[n] ? e.yes : a[n + 1])),
          t.push(l)
        }
      return t
    },
    pkt: function(e, n, l, s) {
      if (typeof e.length < 1)
        return [];
      var c, o = !1, p = e, d = i.s0(n.date.getHours()) + ":" + i.s0(n.date.getMinutes());
      switch (l) {
      case "HF":
        c = i.gata(l, t.time),
        p[0].d < n.today && d > t.time[0][0] && (d = t.time[t.time.length - 1][1]);
        break;
      case "NF":
        c = i.gata(l, a.time);
        break;
      default:
        c = i.gata(l)
      }
      for (var u, m = [], v = 0, b = 0, f = c.length; f > b; b++) {
        if (u = {},
        m[m.length] = u,
        u.time = c[b],
        u.volume = u.price = -1,
        u.avg_price = -1,
        d) {
          if (o && !s)
            continue;
          d == u.time && (o = !0)
        }
        for (var g = c[0], h = v, _ = p.length; _ > h; h++) {
          var y = p[h]
            , N = String(y.m).substring(0, 5);
          if (N == c[b]) {
            N == g && (u.symbol = n.symbol,
            u.name = n.name,
            s ? (u.prevclose = Number(e[0].prevclose) || Number(e[0].p),
            u.date = r.dateUtil.sd(e[0].d),
            u.today = e[0].d) : (u.prevclose = n.prevclose,
            "HF" == l || "NF" == l ? (u.date = r.dateUtil.sd(e[0].d) || n.date,
            u.today = e[0].d || n.today) : (u.date = n.date,
            u.today = n.today)),
            "fund" == l && (u.prevclose = e[0].prevclose)),
            u.volume = y.v || 0,
            u.avg_price = y.avp,
            u.price = y.p,
            y.iy && (u.inventory = y.iy),
            p.splice(h, 1);
            break
          }
          N > c[b] || "NF" == l && "21:00" == g && u.time > "21:00" && N < c[b] ? (0 == b ? s ? (u.price = e[0].p,
          u.prevclose = e[0].prevclose || u.price,
          u.avg_price = e[0].avp,
          u.date = r.dateUtil.sd(e[0].d),
          u.today = e[0].d) : (u.price = n.open || n.prevclose,
          u.prevclose = n.prevclose,
          u.avg_price = u.price,
          u.symbol = n.symbol,
          u.name = n.name,
          "NF" == l ? (u.date = r.dateUtil.sd(e[0].d) || n.date,
          u.today = e[0].d || n.today) : (u.date = n.date,
          u.today = n.today)) : (u.price = m[b - 1].price,
          u.avg_price = m[b - 1].avg_price,
          ("option_cn" == l || "NF" == l) && (u.inventory = m[b - 1].inventory)),
          u.volume = -.01) : 0 != b || s || (u.price = e[h].p || n.open || n.prevclose,
          u.prevclose = n.prevclose,
          u.avg_price = e[h].avp || u.price,
          u.symbol = n.symbol,
          u.name = n.name,
          u.volume = 0,
          "HF" == l || "NF" == l ? (u.date = r.dateUtil.sd(e[0].d) || n.date,
          u.today = e[0].d || n.today) : (u.date = n.date,
          u.today = n.today))
        }
      }
      return m[0].index = f - 1,
      m
    }
  };
  return new function() {
    this.VER = "2.5.9";
    var c = "http://finance.sina.com.cn/realstock/company/klc_td_sh.txt"
      , o = {
      CN: {
        T_Head_STR: "hq_str_ml_",
        T_EMI_URL: "http://finance.sina.com.cn/finance/eqlweight/$symbol.js",
        T_URL: "http://hq.sinajs.cn/?_=$rn&list=$symbol",
        T5_URL: "http://finance.sina.com.cn/realstock/company/$symbol/hisdata/klc_cm.js?day=$rn",
        TRADING_DATES_URL: c,
        HISTORY_DATA_URL: "http://finance.sina.com.cn/realstock/company/$symbol/hisdata/$y/$m.js?d=$date",
        LAST5_URL: "http://finance.sina.com.cn/realstock/lastfive/$symbol.js?_=$rn"
      },
      option_cn: {
        T_Head_STR: "t1",
        T_URL: "http://stock.finance.sina.com.cn/futures/api/openapi.php/StockOptionDaylineService.getOptionMinline?symbol=$symbol&random=$rn&callback=$cb=",
        T5_URL: "http://stock.finance.sina.com.cn/futures/api/openapi.php/StockOptionDaylineService.getFiveDayLine?symbol=$symbol&random=$rn&callback=$cb=",
        TRADING_DATES_URL: c
      },
      US: {
        T_Head_STR: "t1",
        T_URL: "http://stock.finance.sina.com.cn/usstock/api/jsonp_v2.php/$cb=/US_MinlineNService.getMinline?symbol=$symbol&day=1&random=$rn",
        T5_URL: "http://stock.finance.sina.com.cn/usstock/api/jsonp_v2.php/$cb/US_MinlineNService.getMinline?symbol=$symbol&day=5&random=$rn",
        TRADING_DATES_URL: "http://stock.finance.sina.com.cn/usstock/api/openapi.php/US_MinKService.getTradeDays?&start_day=$start&end_day=$end&callback=$cb="
      },
      HK: {
        T_Head_STR: "t1",
        T_URL: "http://stock.finance.sina.com.cn/hkstock/api/openapi.php/HK_StockService.getHKMinline?symbol=$symbol&random=$rn&callback=$cb=",
        LAST5_URL: "http://stock.finance.sina.com.cn/hkstock/api/jsonp_v2.php/$cb/HK_StockService.getStock5DayAvgVolume?symbol=$symbol",
        TRADING_DATES_URL: c
      },
      fund: {
        T_Head_STR: "t1",
        T_URL: "http://app.xincai.com/fund/api/jsonp.json/$cb=/XinCaiFundService.getFundYuCeNav?symbol=$symbol&___qn=3",
        TRADING_DATES_URL: c
      },
      CFF: {
        T_Head_STR: "t1",
        T_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb=/InnerFuturesNewService.getMinLine?symbol=$symbol",
        T5_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb=/InnerFuturesNewService.getFourDaysLine?symbol=$symbol",
        TRADING_DATES_URL: c
      },
      OTC: {
        T_Head_STR: "t1",
        T_URL: "http://stock.finance.sina.com.cn/thirdmarket/api/openapi.php/NQHQService.minline?symbol=$symbol&callback=$cb=",
        TRADING_DATES_URL: c
      },
      NF: {
        T_Head_STR: "t1",
        T_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb=/InnerFuturesNewService.getMinLine?symbol=$symbol",
        T5_URL: "http://stock2.finance.sina.com.cn/futures/api/jsonp.php/$cb=/InnerFuturesNewService.getFourDaysLine?symbol=$symbol",
        TRADING_DATES_URL: c
      },
      HF: {
        T_Head_STR: "t1",
        T_URL: "http://stock2.finance.sina.com.cn/futures/api/openapi.php/GlobalFuturesService.getGlobalFuturesMinLine?symbol=$symbol&callback=$cb=",
        T5_URL: "http://stock2.finance.sina.com.cn/futures/api/openapi.php/GlobalFuturesService.getGlobalFutures5MLine?symbol=$symbol&callback=$cb=",
        TRADING_DATES_URL: c
      }
    }
      , p = {}
      , d = 0
      , u = function(t, a, r) {
      var n = e.market(a)
        , i = o[n][r];
      return (l || t) && (i = e.getSUrl(i)),
      i
    }
      , m = 0;
    this.get = function(l, c) {
      var b, f, g, h = l.symbol, _ = e.market(h), y = l.date, N = l.withT5, k = l.withI, T = l.ssl;
      m = l.dist5;
      var $ = {
        msg: null,
        data: {
          td1: null,
          td5: null,
          hq: null
        }
      };
      switch (g = b = h,
      _) {
      case "HK":
        h = "rt" == h.substring(0, 2) ? h.slice(3) : h,
        b = h,
        f = b.replace("hk", "");
        break;
      case "US":
        g += "," + h + ",gb_ixic,sys_time",
        b = f = h.replace("gb_", ""),
        f = f.replace("$", "."),
        b = b.replace(".", "");
        break;
      case "OTC":
        f = h.replace("sb", "");
        break;
      case "fund":
        f = h.replace("fu_", "");
        break;
      case "CFF":
        f = h.replace("CFF_RE_", "");
        break;
      case "CN":
        f = "ml_" + h;
        break;
      case "HF":
        f = h.replace("hf_", "");
        break;
      case "NF":
        f = h.replace("nf_", "");
        break;
      default:
        f = h
      }
      var U = function(e) {
        var t, a, r;
        // LGH
        return y ? (r = y.split("-")[1] || "01",
        a = y.split("-")[0],
        y.split("-")[1] && Number(y.split("-")[1]) < 10 && (r = "0" + Number(y.split("-")[1]),
        y = a + "-" + r + "-" + y.split("-")[2]),
        t = "MLC_" + h + "_" + a + "_" + r,
        {
          lc: t,
          year: a,
          month: r
        }) : (y = e,
        null)
      }
        , F = function(e) {
        n(u(T, h, "HISTORY_DATA_URL").replace("$symbol", h).replace("$y", e.year).replace("$m", e.month).replace("$date", y), function() {
          var t = String(window[e.lc]);
          if (window[e.lc] = null,
          $.msg = "history",
          t) {
            for (var a, l, o, d, m = String(t).split(","), v = [], b = m.length, f = i.gata(_), g = 0; b > g; g++) {
              v[g] = r.xh5_S_KLC_D(m[g]),    //  LGH 解密数据
              a = v[g].shift(),
              v[g][0].prevclose = a.prevclose,
              v[g][0].date = a.date,
              v[g].splice(120, 1),
              l = 0;
              //console.log(v); //LGH
              for (var N = 0; 241 > N; N++)
                o = v[g][N].volume /= 100,
                l += o,
                v[g][N].time = f[N];
              var k = r.dateUtil.ds(a.date);
              k == y && (d = v[g]),
              v[g][0].totalVolume = l
            }

            var L_save = (v)=>{
              var L_f_date = v[0][0].date.toJSON().substr(0,10).replace(/-/g,'');
              var L_t_date = v[v.length-1][0].date.toJSON().substr(0,10).replace(/-/g,'');

              setTimeout(()=>{
                // LGH
                //use below when disable chrome's cross origin policy
                //window.opener.GGGG =  window.opener.GGGG || [];
                //window.opener.GGGG.push(v)

                console.save(v,getQueryString('symbol')+'-'+L_f_date+'-'+L_t_date+'.json');  //LGH  v Many days d single day
              },1000);

            }

            if (v.length < 5)
              return void n(u(T, h, "TRADING_DATES_URL"), function() {
                for (var t = window.datelist, a = v.length, n = s.gdf(t, r.dateUtil.sd(y)), l = 5 - a; l > 0; l--)
                  v.unshift(i.gltbt(1, v[0][0].price, !1, _, [n[n.length - 5 + l]]));
                $.data.td1 = d,
                $.data.td5 = v;

                L_save(v);

                p[h + e.year + e.month] = $,
                r.isFunc(c) && c($)
              }, null);
            $.data.td1 = d,
            $.data.td5 = v;

            L_save(v);

            //console.log($);
            p[h + e.year + e.month] = $,
            r.isFunc(c) && c($);
          }
        }, function() {
          $.msg = "nohistory",
          r.isFunc(c) && c($)
        })
      }
        , R = function(e) {
        return p[h + e.year + e.month] ? void (r.isFunc(c) && c(p[h + e.year + e.month])) : void F(e)
      }
        , w = function(e, t) {
        var a;
        switch (_) {
        case "OTC":
          a = s.otc(e.result.data, t, _);
          break;
        case "US":
          a = s.us(String(e), t);
          break;
        case "HK":
          a = s.hk(e.result.data, t, _);
          break;
        case "fund":
          a = s.fund(e);
          break;
        case "CFF":
          a = s.futures(e, t);
          break;
        case "NF":
          a = s.futures(e, t, _);
          break;
        case "option_cn":
          a = s.optionCn(e.result.data, t, "CN");
          break;
        case "CN":
          a = s.db(e);
          break;
        case "HF":
          a = s.hf(e.result.data.minLine_1d, t, _)
        }
        if ("CN" == _)
          a = s.fB(a, !1, _, t);
        else {
          a = s.pkt(a, t, _);
          var r = t.time;
          "HK" == _ && r > "15:59" && (r > "16:09" && (r = "16:09"),
          a[a.length - 1].price = t.price,
          a[a.length - 1].avg_price = a[a.length - 2].avg_price,
          a[a.length - 1].time = r,
          a[a.length - 1].volume = 0,
          a[a.length - 1].avg_price < 0 && (a[a.length - 1].avg_price = t.price))
        }
        return a
      }
        , S = function(t, a) {
        var i, o = 3;
        if (i && i.length > 600)
          v(t, h, a, i, c, l.dataformatter, T);
        else if (o--,
        o > 0)
          if ("US" == _) {
            var p = e.dateUtil.ds(new Date(t.date.getFullYear(),t.date.getMonth() - 2,t.date.getDate()), "-");
            n(u(T, g, "TRADING_DATES_URL").replace("$start", p).replace("$end", t.today).replace("$cb", "var usHistorydate"), function() {
              for (var n = window.usHistorydate.result.data, o = n.length; o--; )
                n[o] = e.dateUtil.sd(n[o]);
              n.length > 0 && !r.dateUtil.stbd(n[n.length - 1], t.date) && n.push(t.date),
              i = s.gdf(n, t.date, !0),
              v(t, h, a, i, _, c, l.dataformatter, T, b, f)
            }, null)
          } else
            n(u(T, h, "TRADING_DATES_URL"), function() {
              var e = window.datelist;
              i = s.gdf(e, t.date),
              v(t, h, a, i, _, c, l.dataformatter, T)
            }, null);
        else
          null()
      }
        , L = function(e, l) {
        n(e, function() {
          var e = window[o[_].T_Head_STR + b];
          window[o[_].T_Head_STR + b] = null,
          t = window["kke_future_" + l.symbol] || {
            time: [["06:00", "23:59"], ["00:00", "05:00"]]
          },
          a = window["kke_future_" + l.symbol] || {
            time: [["09:30", "11:29"], ["13:00", "02:59"]]
          };
          var n;
          if ("" == e || null == e || e.result && null == e.result.data || e.result && e.result.data && e.result.data.length <= 0 || e.__ERROR)
            switch ($.msg = "empty",
            _) {
            case "HF":
              n = i.gltbt(1, l.prevclose, !0, _, [l.date], t.time);
              break;
            case "NF":
              n = i.gltbt(1, l.prevclose, !0, _, [l.date], a.time);
              break;
            default:
              n = i.gltbt(1, l.prevclose, !0, _)
            }
          else if ($.msg = "",
          "HF" == _) {
            var s = l.today.split("-")
              , p = s[0] + "-" + (Number(s[1]) < 10 ? "0" + s[1] : s[1]) + "-" + (Number(s[2]) < 10 ? "0" + s[2] : s[2]);
            n = p < e.result.data.minLine_1d[0][0] ? i.gltbt(1, l.prevclose, !0, _, null, t.time) : w(e, l),
            "hf_ES" == l.symbol && l.time > t.time[0][0] && !r.dateUtil.stbd(n[0].date, l.date) && (n = i.gltbt(1, l.prevclose, !0, _, [l.date], t.time))
          } else
            n = w(e, l);
          return n && !n[0].date && (n[0].date = l.date),
          $.data.td1 = n,
          N ? void S(l, n) : (0 != d && (n[0].lastfive = d),
          void (r.isFunc(c) && c($)))
        })
      }
        , D = function() {
        KKE.api("datas.hq.get", {
          symbol: g,
          withI: k,
          cancelEtag: !0,
          ssl: T
        }, function(e) {
          var t = e.data[0];
          if ($.data.hq = t,
          !t.name && "CFF" != _)
            return $.msg = "error",
            void (r.isFunc(c) && c($));
          var a = u(T, h, "T_URL").replace("$rn", (new Date).getTime()).replace("$symbol", f).replace("$cb", "var t1" + b)
            , n = U(t.today);
          return "CN" != _ || r.dateUtil.stbd(r.dateUtil.sd(t.today), r.dateUtil.sd(y)) ? void L(a, t) : void R(n)
        })
      };
      D()
    }
    ;
    var v = function(e, l, c, o, p, v, b, f, g, h) {
      var _ = {
        msg: null,
        data: {
          td1: null,
          td5: null,
          hq: null
        }
      };
      if (_.data.hq = e,
      _.data.td1 = c,
      !e.name && "CFF" != p)
        return _.msg = "error",
        void (r.isFunc(v) && v(_));
      var y = function() {
        var t = s.ctdb(5, c, e, o, p);
        _.data.td5 = t;
        var a = "lastfive" + l
          , i = l.substring(2);
        n(u(f, l, "LAST5_URL").replace("$rn", (new Date).getHours()).replace("$symbol", i).replace("$cb", "var " + a + "="), function() {
          var e = window[a];
          return e ? (_.data.td5[4][0].lastfive = d = Number(e.volume),
          void (r.isFunc(v) && v(_))) : void (r.isFunc(v) && v(_))
        }, function() {
          _.data.td5 = t,
          r.isFunc(v) && v(_)
        })
      }
        , N = function() {
        n(u(f, l, "T5_URL").replace("$rn", (new Date).getTime()).replace("$symbol", h).replace("$cb", "var t5" + g + "="), function() {
          var t = String(window["t5" + g])
            , a = []
            , n = t.split(" ");
          n.shift();
          for (var d = n.length; d--; ) {
            var u = s.us(n[d], e, !0);
            n[d] = s.pkt(u, e, p, !0)
          }
          if (window["t5" + l] = null,
          "" == t)
            _.msg = "empty";
          else {
            _.msg = "";
            var m = o.length
              , b = 0
              , f = n.length
              , h = [];
            for (d = m - 1; d > m - 6; d--)
              h.unshift(i.gltbt(1, e.prevclose, !1, "US", [o[d]]));
            for (d = m - 1; d > m - 6; d--) {
              for (var y, N = 0, k = 0; f > k; k++)
                r.dateUtil.stbd(o[d], n[k][0].date) && (y = n[k],
                N = 1,
                b = k);
              0 == N && (y = i.gltbt(1, h[b][0].prevclose, !1, "US", [o[d]])),
              a.unshift(y)
            }
          }
          a[4] = c,
          _.data.td5 = a,
          r.isFunc(v) && v(_)
        })
      }
        , k = function() {
        var t = "CFF_RE_" == l.substring(0, 7) ? l.slice(7) : l;
        n(u(f, l, "T5_URL").replace("$rn", (new Date).getTime()).replace("$symbol", t).replace("$cb", "var t5" + l), function() {
          var t = window["t5" + l]
            , a = [];
          if (window["t5" + l] = null,
          "" == t)
            _.msg = "empty";
          else {
            if (void 0 == t)
              return _.msg = "data error.",
              void T();
            _.msg = "";
            for (var n = [], i = t.length, o = 0; i > o; o++) {
              var d = s.futures(t[o], e, p, "his");
              if (!r.dateUtil.stbd(r.dateUtil.sd(d[0].d), e.date)) {
                var u = s.pkt(d, e, p, !0);
                n.push(u),
                a.push(u)
              }
            }
          }
          a[4] = c,
          _.data.td5 = a,
          r.isFunc(v) && v(_)
        })
      }
        , T = function() {
        _.data.td5 = s.ctdb(5, c, e, o, p),
        r.isFunc(v) && v(_)
      }
        , $ = function() {
        n(u(f, l, "T5_URL").replace("$symbol", l.replace("nf_", "")).replace("$cb", "var t5" + l), function() {
          var n = window["t5" + l]
            , d = [];
          if (window["t5" + l] = null,
          "" == n)
            _.msg = "empty";
          else {
            if (void 0 == n)
              return _.msg = "data error.",
              void T();
            _.msg = "";
            for (var u = [], m = n.length, b = 0; m > b; b++) {
              var f = s.futures(n[b], e, p, "his");
              if (!r.dateUtil.stbd(r.dateUtil.sd(f[0].d), e.date) || "21:00" == a.time[0][0] && e.time >= "21:00" || e.time <= "02:30") {
                var g = s.pkt(f, e, p, !0);
                u.push(g)
              }
            }
            m = 5;
            var h;
            h = "21:00" == a.time[0][0] && e.time >= "21:00" || e.time <= "02:30" ? 5 : 6;
            var y = o.splice(o.length - h, 5)
              , N = 0;
            for (b = m - 1; b >= 0; b--) {
              for (var k = N; k < u.length && !(d.length > 3); k++) {
                if (r.dateUtil.stbd(u[u.length - k - 1][0].date, y[b])) {
                  d.unshift(u[u.length - k - 1]),
                  N++;
                  break
                }
                if (k == u.length - 1) {
                  for (var $ = 0, U = 0; U < u.length; U++)
                    r.dateUtil.stbd(u[u.length - U - 1][0].date, y[b]) && ($ = 1);
                  0 == $ && d.unshift(i.gltbt(1, u[u.length - 1][0].prevclose, !1, p, [y[b]], a.time))
                }
              }
              if (u.length <= 0) {
                if (d.length > 3)
                  break;
                d.unshift(i.gltbt(1, e.prevclose, !1, p, [y[b]], a.time))
              } else
                N == u.length && d.length < 4 && d.length > 0 && !r.dateUtil.stbd(d[0][0].date, y[b]) && d.unshift(i.gltbt(1, u[u.length - 1][0].prevclose, !1, p, [y[b]], t.time))
            }
          }
          d[4] = c,
          _.data.td5 = d,
          r.isFunc(v) && v(_)
        })
      }
        , U = function() {
        n(u(f, l, "T5_URL").replace("$symbol", l.replace("hf_", "")).replace("$cb", "var t5" + l), function() {
          var a = window["t5" + l]
            , n = [];
          if (window["t5" + l] = null,
          "" == a)
            _.msg = "empty";
          else {
            if (void 0 == a)
              return _.msg = "data error.",
              void T();
            _.msg = "";
            for (var o = [], d = a.result.data[l.replace("hf_", "")].length, u = 0; d > u; u++) {
              var m = s.hf(a.result.data[l.replace("hf_", "")][u], e, p, "his");
              if (!r.dateUtil.stbd(r.dateUtil.sd(m[0].d), e.date)) {
                var b = s.pkt(m, e, p, !0);
                o.push(b)
              }
            }
            for (var f = [], g = c[0].date || e.date, h = 1; f.length < 6; ) {
              var y = new Date(g);
              y.setDate(g.getDate() - h),
              6 != y.getDay() && 0 != y.getDay() && f.push(y),
              h++
            }
            var N, k = f.length, $ = 1;
            for (u = 0; k > u; u++) {
              for (N = $; N <= o.length && !(n.length > 3); N++) {
                if (r.dateUtil.stbd(o[o.length - N][0].date, f[u])) {
                  n.unshift(o[o.length - N]),
                  $++;
                  break
                }
                if (N == o.length - 1) {
                  for (var U = 0, F = 1; F <= o.length; F++)
                    r.dateUtil.stbd(o[o.length - F][0].date, f[u]) && (U = 1);
                  0 == U && n.unshift(i.gltbt(1, o[o.length - 1][0].prevclose, !1, p, [f[u]], t.time))
                }
              }
              $ == o.length && n.length <= 3 && !r.dateUtil.stbd(n[0][0].date, f[u]) && n.unshift(i.gltbt(1, o[o.length - 1][0].prevclose, !1, p, [f[u]], t.time))
            }
          }
          n[4] = c,
          _.data.td5 = n,
          r.isFunc(v) && v(_)
        })
      }
        , F = function() {
        n(u(f, l, "T5_URL").replace("$rn", (new Date).getTime()).replace("$symbol", l).replace("$cb", "var t5" + l), function() {
          var t = window["t5" + l]
            , a = o.length
            , n = [];
          if (window["t5" + l] = null,
          "" == t)
            _.msg = "empty";
          else {
            _.msg = "";
            for (var p = t.result.data.length, d = 0; p > d; d++) {
              var u = s.optionCn(t.result.data[d], e, "CN")
                , m = s.pkt(u, e, "CN", !0);
              n.push(m)
            }
            for (d = a - 1 - p; d > a - 6; d--)
              n.unshift(i.gltbt(1, n[0][0].prevclose, !1, "CN", [o[d]]))
          }
          n[4] = c,
          _.data.td5 = n,
          r.isFunc(v) && v(_)
        })
      }
        , R = function() {
        n(u(f, l, "T5_URL").replace("$symbol", l).replace("$rn", e.today), function() {
          var t = "lastfive" + l
            , a = window["KLC_ML_" + l];
          window["KLC_ML_" + l] = null;
          var i, m;
          "" == a ? (_.msg = "empty",
          i = s.ctdb(5, c, e, o, p)) : (_.msg = "",
          m = a.split(","),
          i = s.ctdf(m, c, e, o)),
          s.isBond(l) ? (_.data.td5 = i,
          r.isFunc(v) && v(_)) : n(u(f, l, "LAST5_URL").replace("$rn", (new Date).getHours()).replace("$symbol", l), function() {
            var e = window[t];
            if (!e || !e.lastfive)
              return _.data.td5 = i,
              void (r.isFunc(v) && v(_));
            for (var a = e.lastfive.length; a--; )
              for (var n = e.lastfive[a].d, l = i.length - 1; l--; )
                if (r.dateUtil.stbds(i[l][0].date, n, null)) {
                  i[l][0].lastfive = Number(e.lastfive[a].c);
                  break
                }
            d = e.lastfive[4] ? e.lastfive[4].c : 0,
            _.data.td5 = i,
            r.isFunc(v) && v(_)
          }, function() {
            _.data.td5 = i,
            r.isFunc(v) && v(_)
          })
        }, function() {
          _.data.td5 = s.ctdb(5, c, e, o, p),
          _.msg = "error",
          r.isFunc(v) && v(_)
        })
      };
      switch (p) {
      case "HK":
        y();
        break;
      case "US":
        N();
        break;
      case "CFF":
        k();
        break;
      case "OTC":
      case "fund":
        T();
        break;
      case "NF":
        $();
        break;
      case "option_cn":
        F();
        break;
      case "CN":
        R();
        break;
      case "HF":
        0 == m ? T() : U();
        break;
      case "":
      }
    }
  }
});
;xh5_define("chart.h5t", ["cfgs.settinger", "utils.util", "utils.painter"], function(e, t, a) {
  "use strict";
  function i(i) {
    function n(e, a) {
      function n(e) {
        U.setDataRange(e),
        D && (D.linkData(e),
        D.setDataRange()),
        w && (w.linkData(e),
        w.setDataRange()),
        I && (I.linkData(e),
        I.setDataRange())
      }
      function h() {
        a && (X = P),
        le.update(null, !0),
        "CN" === f && !/^(sh0|sh1|sh5|sz1|sz399)\d+/i.test(e.symbol)
      }
      e = v({
        symbol: void 0,
        datas: {
          t1: {
            url: void 0,
            dataformatter: void 0
          },
          t5: {
            url: void 0,
            dataformatter: void 0
          }
        },
        linecolor: void 0,
        linetype: void 0
      }, e || {});
      var m, p = this, f = t.market(e.symbol), N = function(e) {
        switch (e) {
        case "CN":
          return 1;
        case "HK":
          return 2;
        case "US":
          return 3
        }
        return 1
      }, _ = !0;
      this.dp = e.dp,
      this.marketNum = N,
      this.isErr = !1,
      this.witht5 = !0,
      this.symbol = e.symbol,
      this.isMain = a,
      this.isCompare = !1,
      this.dAdd = 0,
      this.uid = e.symbol + Math.random(),
      this.datas = null,
      this.dataLen = 0,
      this.dataLenOffset = 0,
      this.prevclose = void 0,
      this.labelMaxP = 0,
      this.maxPrice = 0,
      this.labelMinP = Number.MAX_VALUE,
      this.minPrice = Number.MAX_VALUE,
      this.labelMaxVol = 0,
      this.maxVolume = 0,
      this.minPercent = Number.MAX_VALUE,
      this.maxPercent = -Number.MAX_VALUE,
      this.labelPriceCount = void 0,
      this.isTotalRedraw = !0,
      this.realLen = 0,
      this.market = f,
      this.date = null,
      this.hq = null,
      this.futureTime = d || c,
      this.preData = {
        data: 0,
        vPos: null
      },
      this.needMarket = f,
      this.changeMarket = function(e) {
        var a, i = [], n = e;
        if (H = C.tcd(S),
        N(p.needMarket) != N(S)) {
          a = P.get(),
          m = t.tUtil.gata(S);
          for (var r = 0; r < a.length; r++)
            N(p.needMarket) < N(S) ? (i.push(C.aduk(a[r], p.market, S, L, a[r][0].date)),
            p.realLen = t.arrIndexOf(m, L.getHours() + ":" + t.strUtil.zp(L.getMinutes())),
            p.realLen < 0 && (p.realLen = H)) : (i.push(C.rmuk(a[r], S, n)),
            p.realLen = t.arrIndexOf(m, L.getHours() + ":" + t.strUtil.zp(L.getMinutes())));
          p.needMarket = S,
          P.initTState(i),
          p.datas = i[4],
          U.setDataRange(),
          U.createPlayingData()
        }
      }
      ;
      var D, w, I, O, L, F = new M(this,e);
      this.getName = function() {
        return O || ""
      }
      ,
      this.getStockType = function() {
        var e;
        return p.hq && (e = p.hq.type),
        e || ""
      }
      ,
      this.viewState = Q;
      var P = new function() {
        var a = {}
          , n = {
          rsAmount: void 0
        }
          , r = function(e) {
          if (e) {
            var n, r = e.length, o = [];
            if (t.clone(e, o),
            o.length > 5) {
              if (i.date) {
                for (var s, l = Number(i.date.split("-")[2]), c = 0, d = 0, h = 0, m = o.length; m > h; h++)
                  s = o[h][0].date.getDate(),
                  0 == h ? c = Math.abs(s - l) : c > Math.abs(s - l) && (c = Math.abs(s - l),
                  d = h);
                d >= 5 ? (n = o.splice(d - 4, 5),
                Q.start = 4,
                Q.end = 5) : (n = o.splice(0, 5),
                Q.start = d,
                Q.end = d + 1),
                a.tv = Q.start,
                a.tb = Q.end
              }
            } else
              n = o,
              a.tv = i.date ? 0 : 4,
              a.tb = r;
            a.t = n
          }
        };
        this.get = function(e) {
          return e ? a[e] : a.t
        }
        ,
        this.set = function(e, t) {
          "undefined" != typeof a[e] && (a[e] = t)
        }
        ,
        this.initState = r,
        this.initTState = function(e) {
          r(e)
        }
        ,
        this.extraDataObj = n,
        this.initExtraData = function() {
          var a = i.ssl ? "https" : "http"
            , r = a + "://stock.finance.sina.com.cn/stock/api/jsonp.php/$cb/StockService.getAmountBySymbol?_=$rn&symbol=$symbol"
            , o = "KKE_ShareAmount_" + e.symbol;
          t.load(r.replace("$symbol", e.symbol).replace("$rn", String((new Date).getDate())).replace("$cb", "var%20" + o + "="), function() {
            var e = window[o];
            if (e) {
              for (var t, a = [], i = e.length; i--; )
                t = e[i],
                a.push({
                  amount: Number(t.amount),
                  date: g.sd(t.date)
                });
              a.length && (n.rsAmount = a)
            }
          })
        }
        ,
        this.gc = function() {
          a = null,
          n = null
        }
      }
        , U = new function() {
        var e, t, a;
        e = function() {
          p.minPrice = Number.MAX_VALUE,
          p.maxPrice = 0,
          p.minPercent = Number.MAX_VALUE,
          p.maxPercent = -Number.MAX_VALUE,
          p.minavgPrice = Number.MAX_VALUE,
          p.maxavgPrice = 0,
          p.maxVolume = 0
        }
        ,
        t = function() {
          function e(e) {
            var t = Math.max(Math.abs(e - p.maxPrice), Math.abs(e - p.minPrice))
              , a = Math.max(Math.abs(e - p.maxavgPrice), Math.abs(e - p.minavgPrice));
            switch (t / e > .45 && (R.datas.scaleType = "price"),
            t / e > .1 && "newstock" == R.datas.scaleType && (R.datas.scaleType = "price"),
            R.datas.scaleType) {
            case "newstock":
              p.minPrice = Number(e) - .45 * e,
              p.maxPrice = Number(e) + .45 * e;
              break;
            case "tpct":
              p.minPrice = p.minPrice < Number(e) - .1 * e ? p.minPrice : Number(e) - .1 * e,
              p.maxPrice = p.maxPrice > Number(e) + .1 * e ? p.maxPrice : Number(e) + .1 * e;
              break;
            case "pct":
              var i = p.maxPrice - p.minPrice;
              p.minPrice -= .05 * i,
              p.maxPrice += .05 * i;
              break;
            case "price":
            default:
              p.minPrice = Number(e) - Number(t),
              p.maxPrice = Number(e) + Number(t),
              p.minavgPrice = Number(e) - Number(a),
              p.maxavgPrice = Number(e) + Number(a)
            }
            p.maxPercent = Math.max((p.maxPrice - e) / e, 0),
            p.minPercent = Math.min((p.minPrice - e) / e, 0),
            p.maxavgPercent = Math.max((p.maxavgPrice - e) / e, 0),
            p.minavgPercent = Math.min((p.minavgPrice - e) / e, 0)
          }
          p.isCompare = W.getAllStock().length > 1,
          p.dAdd = W.dAdd,
          p.preData.data = p.hq.preopen ? p.hq.preopen : p.preData.data;
          for (var t = 0, a = p.datas.length; a > t; t++) {
            for (var n, r = Number(p.datas[0][0].prevclose), o = 0, s = p.dataLen; s > o; o++)
              n = p.datas[t][o],
              n.price <= 0 || n.avg_price <= 0 || ("HK" == p.market && p.hq && "indx" == p.hq.type ? (p.maxPrice = Math.max(p.maxPrice, n.price, r),
              p.minPrice = Math.min(p.minPrice, n.price, r)) : b(p.datas[t][0].date, p.hq.date) && "CN" == p.market ? (p.maxPrice = Math.max(p.maxPrice, n.price, n.avg_price, r, p.preData.data),
              p.minPrice = Math.min(p.minPrice, n.price, n.avg_price, r, p.preData.data)) : (p.maxPrice = Math.max(p.maxPrice, n.price, n.avg_price, r),
              p.minPrice = Math.min(p.minPrice, n.price, n.avg_price, r)),
              b(p.datas[t][0].date, p.hq.date) && "CN" == p.market ? (p.maxavgPrice = Math.max(p.maxavgPrice, n.price, r, p.preData.data),
              p.minavgPrice = Math.min(p.minavgPrice, n.price, r, p.preData.data)) : (p.maxavgPrice = Math.max(p.maxavgPrice, n.price, r),
              p.minavgPrice = Math.min(p.minavgPrice, n.price, r)),
              p.labelMaxVol = p.maxVolume = Math.max(p.maxVolume, 0, n.volume));
            e(r)
          }
          (p.minPrice < -1e8 || p.maxPrice - p.minPrice < 1e-6) && (g.stbd(p.datas[0][0].date, p.hq.date) && (p.datas[0][0].price = p.hq.price,
          p.datas[0][0].avg_price = p.hq.price,
          p.datas[0][0].prevclose = p.hq.prevclose,
          p.datas[0][0].volume = p.hq.totalVolume),
          p.minPrice = r - .01 * r,
          p.maxPrice = r + .01 * r,
          p.maxPercent = .01,
          p.minPercent = -.01,
          p.hq.totalVolume > 0 && g.stbd(p.datas[0][0].date, p.hq.date) && !isNaN(p.hq.totalAmount) && (p.datas[0][0].volume = p.hq.totalAmount / p.hq.totalVolume));
          var l = y(p.maxVolume, 0, 0, !0);
          p.labelMaxVol = l[0];
          var c, d = .005;
          /^s[hz]51\d{4}$/.test(i.symbol) && (c = "fund"),
          c && "fund" === c && "pct" !== R.datas.scaleType && d > Math.abs(p.minPercent) && (d = Math.abs(p.minPercent),
          i.nfloat = p.nfloat = 3),
          p.maxPercent < d && "US" !== p.market && "pct" !== R.datas.scaleType && (p.minPrice = p.maxavgPrice = r - r * d,
          p.maxPrice = p.minavgPrice = r + r * d,
          p.maxPercent = p.maxavgPercent = d,
          p.minPercent = p.minavgPercent = -d),
          ("gb_brk$a" === p.symbol || "usr_brk$a" === p.symbol) && (i.nfloat = p.nfloat = 1)
        }
        ,
        a = function() {
          var e, t, a, i = R.DIMENSION.h_t, n = i * R.DIMENSION.P_HV, r = i * (1 - R.DIMENSION.P_HV);
          t = p.labelMinP,
          a = p.labelMaxP;
          var o, s = p.labelMaxVol;
          if (p.datas) {
            var l = p.datas.length;
            for (e = 0; l > e; e++) {
              o = p.datas[0][0].prevclose;
              for (var c, d = R.custom.show_underlay_vol, h = p.isCompare ? "ppp" : "pp", m = p.dataLen, f = 0; m > f; f++) {
                if (c = p.datas[e][f],
                !c)
                  return;
                c.price <= 0 && p.realLen >= f && f > 0 && (c.price = p.hq.price,
                c.avg_price = p.datas[e][f - 1].avg_price,
                c.volume = 0),
                c.change = c.price - o,
                c.percent = c.change / o,
                c.py = u[h](c.price, t, a, i, o),
                c.ay = u[h](c.avg_price, t, a, i, o),
                d && (c.vy = u.vp(c.volume, s, n) + r)
              }
            }
            p.preData.vPos = "CN" == p.market && 1 == l && b(p.hq.date, p.datas[0][0].date) ? u[h](p.preData.data, t, a, i, o) : null
          }
        }
        ,
        this.createPlayingData = a,
        this.extValues = function() {
          e(),
          t()
        }
        ,
        this.setDataRange = function(a) {
          var i = P.get();
          if (i) {
            Q.dataLength = i.length;
            var n = Q.start
              , r = Q.end;
            isNaN(n) || isNaN(r) ? (r = P.get("tb") || 5,
            n = P.get("tv") || 4,
            Q.start = n,
            Q.end = r) : (a && r + 1 > i.length && (Q.end = r = i.length),
            P.set("tv", n),
            P.set("tb", r));
            var o = []
              , s = [];
            if (i.length < 2)
              s = i,
              o.push(i);
            else
              for (var l = n; r > l; l++)
                s = s.concat(i[l]),
                o.push(i[l]);
            p.datas = o,
            p.lineDatas = s,
            p.dataLen = o[0].length,
            e(),
            t()
          }
        }
      }
        , $ = {}
        , G = !1
        , ee = !1
        , ae = {}
        , ne = (new Date).getTime()
        , re = function() {
        var e;
        L = new Date,
        e = 60 * L.getTimezoneOffset() * 1e3,
        L.setTime(L.getTime() + e),
        L.setHours(L.getHours() + 8)
      }
        , oe = function(e) {
        if (re(),
        !m)
          switch (S) {
          case "HF":
            m = t.tUtil.gata(S, c.time);
            break;
          case "NF":
            m = t.tUtil.gata(S, d.time);
          default:
            m = t.tUtil.gata(S)
          }
        e.index = t.arrIndexOf(m, e.time);
        var a = e.index;
        switch (p.market) {
        case "CN":
        case "option_cn":
        case "fund":
        case "OTC":
        case "NF":
          e.index < 0 && (e.time >= "11:30" && e.time < "13:00" && (a = t.arrIndexOf(m, "11:29")),
          "NF" == p.market && ("21:00" == d.time[0][0] ? e.time < "09:00" && e.time > "02:30" && (a = t.arrIndexOf(m, "09:00")) : e.time <= d.time[0][0] && (a = t.arrIndexOf(m, d.time[0][0]))));
          break;
        case "HK":
          e.time > "12:00" && e.time < "13:00" && (a = 150);
          break;
        case "HF":
          "hf_CHA50CFD" == p.symbol && e.time > "16:00" && e.time < "17:00" && (a = 420)
        }
        if (p.realLen = a,
        p.hq.open == p.hq.prevclose && p.hq.high == p.hq.prevclose && p.hq.low == p.hq.prevclose && 0 > a || p.hq.time < "09:30")
          switch (p.market) {
          case "CN":
            p.realLen = p.hq.time >= "15:00" ? H - 1 : 0;
            break;
          case "NF":
          case "HF":
            break;
          default:
            p.realLen = 0
          }
      }
        , se = function(e, t) {
        var a = e.getTime()
          , i = t.getTime();
        return Math.floor((a - i) / 864e5) > 5
      }
        , le = new function() {
        var a, r = !0, o = function(e) {
          var a;
          switch (S) {
          case "HF":
            a = c.time;
            break;
          case "NF":
            a = d.time;
            break;
          default:
            a = []
          }
          var i = t.tUtil.gltbt(1, e.price, !0, p.needMarket, [e.date], a);
          "NF" == S && e.time >= "21:00" ? (i[0].date = g.dd(e.date),
          i[0].date.setDate(e.date.getDate() + 1)) : i[0].date = g.dd(e.date),
          i[0].prevclose = e.price,
          i[0].price = e.price,
          i[0].volume = 0;
          for (var n = 0, r = 0, o = P.get(), s = 0, l = o.length; l > s; s++)
            o[s][0].totalVolume && (r += Number(o[s][0].totalVolume),
            n++);
          i[0].lastfive = r / n / 390 || 0,
          b(o[4][0].date, e.date) ? "NF" == S && e.time >= "21:00" ? (o.shift(),
          o.push(i)) : o[4] = i : (o.shift(),
          o.push(i)),
          P.initTState(o),
          p.datas = [o[4]],
          p.date = g.ds(e.date),
          p.realLen = 0
        }, s = 0, l = function(e, a) {
          function l() {
            switch (o(p.hq),
            n(),
            U.createPlayingData(),
            p.market) {
            case "US":
              U.extValues();
              break;
            case "NF":
              d.inited = 1
            }
            t.isFunc(a) && a()
          }
          function h() {
            var e = (new Date).getTime() - ne;
            return !isNaN(J) && J > 0 && e >= 1e3 * Number(J) && 0 != p.realLen && p.hq.isUpdateTime ? (ne = (new Date).getTime(),
            y(f, p.hq, a),
            !0) : !1
          }
          function u() {
            function e() {
              b(p.hq.date, N[4][0].date) && p.hq.time > "16:00" && r.price < 0 && (r.price = p.hq.price,
              r.avg_price = N[4][N[4].length - 2].avg_price,
              r.volume = 0)
            }
            function i() {
              b(p.hq.date, N[4][0].date) && p.hq.time > "16:00" && (r.price = p.hq.price,
              r.avg_price = N[4][N[4].length - 2].avg_price,
              r.volume = 0,
              r.time = p.hq.time,
              r.avg_price < 0 && (r.avg_price = p.hq.price))
            }
            if (!p.hq.isUpdateTime) {
              var r = N[4][N[4].length - 1];
              switch (p.market) {
              case "US":
                e();
                break;
              case "HK":
                i()
              }
              return oe(p.hq),
              n(!0),
              U.createPlayingData(),
              t.isFunc(a) && a(),
              !0
            }
            return p.date = "NF" == p.market && p.hq.time >= "21:00" ? g.ds(N[4][0].date) : p.hq.today,
            !1
          }
          var f, N = P.get();
          switch (p.needMarket) {
          case "HF":
            m = t.tUtil.gata(p.needMarket, c.time);
            break;
          case "NF":
            m = t.tUtil.gata(p.needMarket, d.time);
            break;
          default:
            m = t.tUtil.gata(p.needMarket)
          }
          if (e && e.date && p.datas && !i.date) {
            if (r = !1,
            f = N[4],
            p.hq.isDateChange) {
              if ("NF" == p.market && d && d.time[0][0] < "21:00" || "NF" != p.market)
                return void l()
            } else if ("CN" == p.market && !b(p.hq.date, N[4][0].date) && p.hq.time < "09:05" || "NF" == p.market && b(p.hq.date, N[4][0].date) && d && "21:00" == d.time[0][0] && p.hq.time >= d.time[0][0] || "HF" == p.market && !b(p.hq.date, N[4][0].date) && 0 != p.hq.date.getDay() && 6 != p.hq.date.getDay() && p.hq.time >= c.time[0][0])
              return void l();
            if (!h() && !u()) {
              if (p.datas && ($ = N[4][0]),
              se(e.date, N[4][0].date))
                return void (p.realLen = H);
              O = e.name || "",
              p.hq = e;
              var _ = e.date.getHours() < 10 ? "0" + e.date.getHours() : e.date.getHours();
              if (p.time = _ + ":" + t.strUtil.zp(e.date.getMinutes()),
              0 == e.index && v(f, e),
              t.arrIndexOf(m, p.time) && e.index > 0 && (t.arrIndexOf(m, p.time) - p.realLen <= 1 ? v(f, e) : y(f, e, a),
              1 == e.index && 0 == s))
                return s = 1,
                void y(f, e, a);
              "HF" != p.market && "NF" != p.market && (p.hq.open == p.hq.prevclose && p.hq.high == p.hq.prevclose && p.hq.low == p.hq.prevclose && p.hq.index < 0 || e.time < "09:30") && ("CN" == p.market ? (f[0].avg_price = e.price,
              f[0].volume = e.totalVolume) : "option_cn" == p.market || "NF" == p.market ? f[0].inventory = e.position || e.holdingAmount : "HK" == p.market && (f[0].avg_price = e.totalAmount / e.totalVolume || e.price)),
              5 == Q.end && (n(!0),
              U.createPlayingData()),
              t.isFunc(a) && a()
            }
          }
        }, h = -1, u = -1, f = -1, v = function(e, t) {
          var i = e;
          oe(t);
          var n = i[p.realLen];
          n && ($ && !a ? (G ? (t.volume = h = t.totalVolume - ($.totalVolume || 0),
          t.amount = u = t.volume * t.price,
          t.totalAmount = t.amount + $.totalAmount,
          t.avg_price = f = t.totalAmount / t.totalVolume || t.price) : (t.volume = 0,
          t.avg_price = f = $.totalAmount / $.totalVolume || t.price,
          t.totalAmount = t.totalVolume * t.avg_price,
          G = !0),
          $.totalVolume = t.totalVolume,
          $.totalAmount = t.totalAmount) : (ee ? t.volume = t.totalVolume - ae.totalVolume || 0 : (t.volume = 0,
          ee = !0),
          ae.totalVolume = t.totalVolume),
          ("option_cn" == p.market || "NF" == p.market) && (n.inventory = t.position || t.holdingAmount),
          "CN" == p.market ? n.avg_price = t.avg_price || n.price : (t.index > 1 ? n.avg_price = (i[t.index - 1].avg_price * t.index + t.price) / (t.index + 1) || n.price : "fund" == p.market || (n.avg_price = n.price || t.price),
          0 == t.index && (n.avg_price = t.totalAmount / t.totalVolume || t.price),
          n.volume = 0),
          "HK" != p.market && "NF" != p.market && (n.volume += t.volume),
          n.price = t.price,
          n.volume <= 0 && (n.volume = 0))
        }, y = function(a, r, o) {
          var s = {
            symbol: r.symbol,
            date: r.today,
            withT5: 0,
            withI: !1,
            faker: "",
            dataformatter: e.datas.t1.dataformatter,
            ssl: i.ssl
          };
          G = ee = !1,
          KKE.api("datas.t.get", s, function(e) {
            a = e.data.td1,
            oe(p.hq);
            var i = P.get();
            if ("NF" != p.market || ("21:00" == d.time[0][0] && p.hq.time >= d.time[0][0] && 0 != p.hq.date.getDay() && 6 != p.hq.date.getDay() && (a[0].date = i[4][0].date),
            "09:30" != d.time[0][0] && "09:15" != d.time[0][0] || !b(i[4][0].date, p.hq.date) || !(p.hq.time <= d.time[0][0]))) {
              if ("HF" == p.market && p.hq.time > c.time[0][0]) {
                if (a[0].today < p.hq.today)
                  return;
                0 != p.hq.date.getDay() && 6 != p.hq.date.getDay() && (a[0].date = p.hq.date)
              }
              i[4] = a,
              P.initTState(i),
              "CN" == p.market && "HK" == p.needMarket && (p.needMarket = "CN",
              W.changeData(p)),
              5 == Q.end && (n(!0),
              U.createPlayingData()),
              t.isFunc(o) && o()
            }
          })
        }, N = function(a, n, r) {
          var o = {
            symbol: n.symbol,
            date: n.today,
            withT5: 1,
            dist5: 1,
            withI: !1,
            faker: "",
            dataformatter: e.datas.t1.dataformatter,
            ssl: i.ssl
          };
          G = ee = !1,
          KKE.api("datas.t.get", o, function(e) {
            a = e.data.td1,
            P.initTState(e.data.td5),
            oe(p.hq),
            t.isFunc(r) && r(),
            W.moving(Q.start, Q.end, "T5"),
            Z.hide()
          })
        };
        this.updateT5Data = N,
        this.update = function(a, n, o, s) {
          var c, d, h, m = "";
          h = s ? s : t.market(e.symbol),
          "US" == h && (m = ",gb_ixic"),
          o ? (c = "datas.hq.parse",
          d = {
            symbol: e.symbol + m,
            hqStr: o,
            market: h,
            ssl: i.ssl
          }) : (c = "datas.hq.get",
          d = {
            symbol: e.symbol + m,
            delay: !0,
            cancelEtag: r,
            ssl: i.ssl
          }),
          KKE.api(c, d, function(t) {
            l(t.dataObj[e.symbol], a)
          })
        }
      }
        , ce = new function() {
        var n = void 0
          , o = 1
          , s = function(e) {
          o > 2 || (A.re(k.e.T_DATA_LOADED),
          t.isFunc(e) && e(),
          o++)
        }
          , l = function(e) {
          var t = e
            , a = !1;
          return a = t.hq.open == t.hq.prevclose && t.hq.high == t.hq.prevclose && t.hq.low == t.hq.prevclose && t.hq.index < 0 ? !0 : t.hq.time < "09:30"
        }
          , h = function(a, i) {
          var n, r, o = a;
          switch (S) {
          case "HF":
            r = c.time;
            break;
          case "NF":
            r = d.time;
            break;
          default:
            r = []
          }
          var s = t.tUtil.gltbt(1, o.hq.price, !0, p.market, [o.hq.date], r);
          return s[0].name = o.hq.name,
          s[0].symbol = e.symbol,
          s[0].today = t.dateUtil.ds(o.hq.date, "-"),
          n = i,
          n[4] = s,
          p.realLen = 0,
          n
        };
        this.init = function(o) {
          var u = Q.viewId;
          if (n != u) {
            n = u,
            null != p.datas && P.initTState(u, p.tDb.get());
            var f = {
              ssl: i.ssl,
              symbol: e.symbol,
              date: i.date,
              withT5: 1,
              dist5: i.dist5,
              withI: !0,
              faker: p.needMarket,
              dataformatter: e.datas.t1.dataformatter
            };
            switch (p.needMarket) {
            case "HF":
              m = t.tUtil.gata(p.needMarket, c.time);
              break;
            case "NF":
              m = t.tUtil.gata(p.needMarket, d.time);
              break;
            default:
              m = t.tUtil.gata(p.needMarket)
            }
            Z.show(),
            KKE.api("datas.t.get", f, function(e) {
              W.hasHistory && "history" == e.msg && W.hasHistory(T);
              var c = e.data.hq.status
                , m = ""
                , u = Number(e.data.hq.state);
              if ("error" == e.msg || "nohistory" == e.msg) {
                if (a && "nohistory" == e.msg && (T = 0,
                W.hasHistory && W.hasHistory(T),
                E.showTip({
                  txt: k.nohistoryt,
                  parent: q,
                  noBtn: !0
                })),
                p.isErr = !0,
                a && e.data && e.data.hq) {
                  if (c)
                    switch (p.market) {
                    case "CN":
                      switch (c) {
                      case 2:
                        m = k.notlisted;
                        break;
                      case 3:
                        m = k.delisted;
                        break;
                      case 0:
                        m = k.norecord
                      }
                      break;
                    case "HK":
                      switch (c) {
                      case 5:
                        m = k.notlisted;
                        break;
                      case 0:
                        m = k.delisted
                      }
                    }
                  else
                    m = k.norecord;
                  if (m && 0 != u) {
                    var v, g = {
                      txt: m,
                      parent: q,
                      noBtn: !0
                    };
                    R.DIMENSION.getStageW() < 200 ? (g.bgStyle = {
                      padding: 0,
                      top: "0px"
                    },
                    v || (v = new t.TipM(R.COLOR),
                    v.genTip(g))) : E.showTip({
                      txt: m,
                      parent: q,
                      noBtn: !0
                    })
                  }
                }
                if (0 != u && 7 != u) {
                  if (W.onResize(),
                  1 != c)
                    return void W.removeCompare([f.symbol]);
                  p.isErr = !1
                } else
                  p.isErr = !1
              }
              p.hq = e.data.hq,
              n = void 0,
              f.td1 = e.data.td1;
              var y;
              L = new Date;
              var N = 60 * L.getTimezoneOffset() * 1e3;
              L.setTime(L.getTime() + N),
              L.setHours(L.getHours() + 8),
              O = p.hq.name || "",
              oe(p.hq),
              l(p, e.data.td5) && "HF" != p.market && "NF" != p.market ? "history" == e.msg ? (y = e.data.td5,
              y[4][0].date || (y[4][0].date = p.hq.date)) : y = h(p, e.data.td5) : (y = e.data.td5,
              "NF" != p.market || !d || "09:30" != d.time[0][0] && "09:15" != d.time[0][0] || b(y[4][0].date, p.hq.date) && p.hq.time <= d.time[0][0] && (y = h(p, e.data.td5)),
              y && !y[4][0].date && (y[4][0].date = p.hq.date)),
              W.historyData = y,
              p.date = e.data.td1 && e.data.td1[0].today || p.hq.date,
              P.initTState(y),
              s(o),
              1 == x && (r.dateTo(i.historytime, i.historycb),
              x = 0),
              Z.hide()
            })
          }
        }
      }
      ;
      this.tDb = P,
      this.initData = ce.init,
      this.initT5Data = le.updateT5Data,
      this.doUpdate = le.update,
      this.onViewChange = n,
      this.setPricePos = function(e, t) {
        p.labelMaxP = e[0],
        p.labelMinP = e[1],
        p.labelPriceCount = e[2],
        p.isCompare = t,
        U.createPlayingData(),
        w && w.setPricePos(e)
      }
      ,
      this.setRange = function() {
        U.setDataRange(),
        D && D.setDataRange(),
        w && w.setDataRange(),
        I && I.setDataRange()
      }
      ,
      this.draw = function() {
        F.draw(),
        D && D.allDraw(),
        w && w.allDraw()
      }
      ,
      this.resize = function(e) {
        U.createPlayingData(),
        F.resize(),
        D && D.onResize(e),
        w && w.onResize(),
        I && I.onResize()
      }
      ,
      this.clear = function() {
        F.clear(),
        D && (D.clear(),
        D = null),
        w && (w.clear(),
        w = null),
        I && (I.clear(),
        I = null),
        a && (Y = null)
      }
      ,
      this.getPriceTech = function() {
        return w || null
      }
      ,
      this.removePt = function(e) {
        if (e) {
          !t.isArr(e) && (e = [e]);
          for (var a = e.length; a--; )
            if (e[a].name && "VOLUME" === e[a].name.toUpperCase()) {
              e.splice(a, 1),
              R.custom.show_underlay_vol = !1;
              break
            }
        } else
          R.custom.show_underlay_vol = !1;
        w && w.removeChart(e)
      }
      ,
      this.togglePt = function(e) {
        w && (_ = w.showHide(e))
      }
      ;
      var de = function(e, a) {
        e && te.resizeAll(!0),
        W.onChangeView(),
        a && t.isFunc(a.callback) && a.callback()
      };
      this.initPt = function(e, n) {
        if (e) {
          !t.isArr(e) && (e = [e]);
          for (var r = e.length; r--; )
            if (e[r].name && "VOLUME" === e[r].name.toUpperCase()) {
              e.splice(r, 1),
              R.custom.show_underlay_vol = !0;
              break
            }
          w || (w = new s({
            stockData: p,
            chartArea: V,
            titleArea: K,
            cb: de,
            type: "t",
            cfg: R,
            usrObj: i
          }),
          a && (j = w)),
          w.createChart(e, n)
        }
      }
      ,
      this.initTc = function(e, t) {
        D || (D = new l({
          stockData: p,
          iMgr: ie,
          subArea: z,
          cb: de,
          cfg: R,
          type: "option_cn" == S ? "p" : "t",
          usrObj: i,
          initMgr: te
        }),
        a && (B = D)),
        D.createChart(e, t)
      }
      ,
      this.removeTc = function(e) {
        D && D.removeChart(e)
      }
      ,
      this.initRs = function() {
        I || (I = new o({
          stockData: p,
          setting: R,
          state: Q,
          rc: W.moving,
          witht5: 1
        }),
        Y = I),
        I.linkData()
      }
      ,
      this.setTLineStyle = F.setTLineStyle,
      h()
    }
    function M(e, n) {
      function r() {
        var n = e.isMain;
        if (e.nfloat = i.nfloat || 2,
        n)
          l = R.COLOR.T_P,
          c = R.COLOR.T_AVG;
        else {
          2 != W.dAdd || o.linecolor || (o.linecolor = i.overlaycolor);
          var r = o.linecolor || "#cccccc";
          l = r.K_N || r.T_N || "#" + t.randomColor()
        }
        s = new a.xh5_ibPainter({
          setting: R,
          sd: e,
          withHBg: n,
          ctn: $,
          iMgr: ie,
          reO: {
            mh: R.DIMENSION.H_MA4K
          },
          iTo: function(t, a, i, n) {
            if (!p(t, ie.iHLineO.body) && t.appendChild(ie.iHLineO.body),
            e && e.datas) {
              var r, o, s = e.datas[0][0].prevclose;
              2 == e.dAdd ? r = e.labelMaxP * s + s - i / R.DIMENSION.h_t * (e.labelMaxP * s + s - (e.labelMinP * s + s)) : (r = e.labelMaxP - i / R.DIMENSION.h_t * (e.labelMaxP - e.labelMinP),
              o = Number(100 * (r - s) / s).toFixed(2) + "%"),
              ie.iToD({
                mark: r,
                rmark: o,
                x: a,
                y: i,
                oy: R.DIMENSION.H_MA4K,
                ox: R.DIMENSION.posX,
                e: n
              }, !0, !1)
            }
          }
        })
      }
      var o, s, l, c, d, h = {}, m = 1, f = function(e) {
        o = v({
          linetype: "line_" + m,
          linecolor: o ? o.linecolor || {} : {}
        }, e || {});
        var t = [];
        e && e.linetype && (t = e.linetype.split("_"),
        t.length > 1 && "line" == t[0] && (m = Number(t[1]) || 1)),
        h = o.linecolor || {},
        l = h.K_N || h.T_N || R.COLOR.T_P,
        c = h.T_AVG || R.COLOR.T_AVG,
        d = h.T_PREV || R.COLOR.T_PREV
      }, g = function() {
        function t() {
          if (e.isMain && R.custom.show_underlay_vol) {
            for (var t, a = R.COLOR.V_SD, i = y; v > i; i++)
              b = p[i],
              t = b.vy,
              s.drawVStickC(w, t, k, R.DIMENSION.h_t, a),
              w += D;
            s.stroke(),
            s.getG().lineWidth = 1
          }
        }
        function a() {
          if ((!e.isCompare || 2 == e.dAdd && e.isMain) && !("HK" == e.market && e.hq && "indx" == e.hq.type || "US" == e.market)) {
            for (w = D * (.5 + y),
            s.newStyle(c, !0, m),
            g = y; v > g && (b = p[g],
            !(b.price <= 0)); g++) {
              if (5 == Q.end && "CN" == e.market && j)
                for (var t = j.getLog(), a = 0; a < t.length; a++)
                  if ("EWI" == t[a].name && g > (v / H - 1) * H)
                    return void s.stroke();
              g == y || g % H == 0 ? s.moveTo(w, p[g].ay) : s.lineTo(w, p[g].ay),
              w += D
            }
            s.stroke()
          }
        }
        function i() {
          s.newStyle(l, !0, m),
          w = D * (.5 + y),
          "CN" == e.market && e.preData.vPos && (0 == e.realLen && e.hq ? e.hq.time > "09:29" ? (s.moveTo(0, e.preData.vPos),
          p[0].py || (p[0].py = e.preData.vPos),
          s.lineTo(w, p[0].py)) : s.drawDot(w, e.preData.vPos, 1) : (s.moveTo(0, e.preData.vPos),
          p[0].py || (p[0].py = e.preData.vPos),
          s.lineTo(w, p[0].py)),
          s.stroke())
        }
        function n() {
          var e;
          for (g = y; v > g && (b = p[g],
          !(b.price <= 0)); g++)
            e = b.py,
            g == y || g % H == 0 ? s.moveTo(w, e) : s.lineTo(w, e),
            b.ix = w,
            w += D;
          s.stroke()
        }
        function r() {
          N && !e.isCompare && e.datas.length < 2 && (w -= D,
          s.lineTo(w, R.DIMENSION.h_t),
          s.lineTo(.5 * D, R.DIMENSION.h_t),
          s.newFillStyle_rgba(R.COLOR.M_ARR, R.DIMENSION.h_t, .5),
          s.fill())
        }
        function h() {
          d = R.COLOR.T_PREV,
          s.newStyle(d, !0, 1);
          var t, a = 0, i = 5;
          for (t = e.isCompare && e.isMain && "pct" === R.datas.scaleType ? u.pp(0, e.labelMinP, e.labelMaxP, R.DIMENSION.h_t) : u.pp(e.datas[0][0].prevclose, e.minPrice, e.maxPrice, R.DIMENSION.h_t),
          t = ~~(t + .5),
          t -= .5; a < R.DIMENSION.w_t; )
            s.moveTo(a, t),
            a += i,
            s.lineTo(a, t),
            a += i;
          e.isMain && s.stroke()
        }
        if (!(R.DIMENSION.getStageH() < 0)) {
          e.isMain && s.drawBg("T");
          var p = [];
          if (e.datas) {
            for (var f = 0; f < e.datas.length; f++)
              p = p.concat(e.datas[f]);
            var v = p.length;
            if (p) {
              var g, b, y, N = o.linetype && 0 == o.linetype.indexOf("mountain"), _ = e.datas.length * H, D = R.DIMENSION.w_t / Math.max(_, R.PARAM.minCandleNum), k = .5 * D, w = 0;
              e.isTotalRedraw ? (y = 0,
              s.clear(!0, R.PARAM.getHd())) : (y = _ - 2,
              0 > y && (y = 0),
              w += D * y,
              s.clearLimit(w + k, D + k)),
              t(),
              a(),
              i(),
              n(),
              r(),
              h()
            }
          }
        }
      };
      this.draw = g,
      this.clear = function() {
        s.remove(),
        s = null
      }
      ,
      this.resize = function() {
        s.resize({
          mh: R.DIMENSION.H_MA4K
        }),
        g()
      }
      ,
      this.setTLineStyle = f,
      f(n),
      r()
    }
    function I() {
      var e, a = this, r = [];
      this.getAllStock = function() {
        return r
      }
      ,
      this.getMainStock = function() {
        return e
      }
      ,
      this.getAllSymbols = function() {
        for (var e = [], t = 0, a = r.length; a > t; t++)
          e.push(r[t].symbol);
        return e
      }
      ;
      var c = function() {
        for (var e, t, a, i = Number.MAX_VALUE, n = -Number.MAX_VALUE, o = r.length, s = o > 1, l = s ? "avgPercent" : "Price", c = o; c--; )
          e = r[c],
          a = e.getPriceTech(),
          a && !s && a.getMaxMin()[0] && (n = a.getMaxMin()[0],
          i = a.getMaxMin()[1]),
          t = [n, i],
          i = Math.min(i, e["min" + l], t[1]),
          n = Math.max(n, e["max" + l], t[0]);
        if (j) {
          var d = j.getLog()
            , h = d.length;
          for (c = 0; h > c; c++)
            if ("EWI" == d[c].name || "MA" == d[c].name) {
              var m = r[0].datas[0][0].prevclose
                , p = Math.max(Math.abs(m - n), Math.abs(m - i));
              n = m + p,
              i = m - p
            }
        }
        var u, f = R.DIMENSION.h_t;
        u = 100 > f ? 2 : 180 > f ? 4 : 300 > f ? 6 : 8;
        for (var v = o; v--; )
          e = r[v],
          e.setPricePos([n, i, u], s)
      }
        , d = function(e) {
        if (e)
          e.draw();
        else
          for (var t = r.length; t--; )
            r[t].draw()
      }
        , h = function(t) {
        1 == Q.viewId || 0 == Q.viewId ? i.date ? a.moving(Q.start, Q.end) : a.moving(4, 5, !1) : a.moving(Q.start, Q.end, !1),
        t || ae.onRange(e)
      }
        , m = function(e) {
        return e.isErr ? (t.trace.error("err symbol data"),
        a.removeCompare([e.symbol]),
        !0) : e.tDb.get() ? !0 : (e.initData(g),
        !1)
      }
        , p = []
        , u = function(e) {
        if (e && t.isFunc(e.callback)) {
          for (var a = !1, i = p.length; i--; )
            if (e.callback === p[i]) {
              a = !0;
              break
            }
          !a && p.push(e.callback)
        }
      }
        , g = function(a, i) {
        if (u(i),
        m(e)) {
          if (e.isErr)
            return t.trace.error("err main symbol"),
            void (e.isErr = !1);
          ie.patcher.switchFloater();
          for (var n, o = !0, s = r.length; s--; )
            n = r[s],
            n == e || m(n) || (o = !1);
          if (o) {
            for (s = r.length; s--; )
              r[s].marketNum(r[s].needMarket) > r[s].marketNum(S) && (S = r[s].needMarket);
            for (s = r.length; s--; )
              x(r[s]);
            for (h(a); p.length; ) {
              var l = p.shift();
              l()
            }
          }
          if (ae.onViewChanged(),
          a)
            return;
          ae.onViewPrice(),
          ae.onDataUpdate()
        }
      }
        , b = function() {
        ae.onRange(e)
      };
      this.getExtraData = function(a) {
        if (a = v({
          symbol: e.symbol,
          name: null,
          clone: !0
        }, a || {}),
        !a.name)
          return null;
        for (var i, n, o = r.length; o--; )
          if (r[o].symbol === a.symbol) {
            i = r[o];
            break
          }
        if (i) {
          var s;
          "t1" == a.name || "t5" == a.name ? (s = i.tDb.get(),
          n = a.clone ? t.clone(s) : s) : n = null
        }
        return n
      }
      ,
      this.shareTo = function(e) {
        e = v({
          type: "weibo",
          url: window.location.href,
          wbtext: "",
          qrwidth: 100,
          qrheight: 100,
          extra: void 0
        }, e);
        var a = String(e.type).toLowerCase();
        switch (a) {
        case "qrcode":
          KKE.api("utils.qrcode.createcanvas", {
            text: e.url,
            width: e.qrwidth,
            height: e.qrheight
          }, function(e) {
            E.showTip({
              content: e,
              txt: '<p style="margin:0 0 9px 0;">\u626b\u63cf\u4e8c\u7ef4\u7801</p>',
              parent: q,
              btnLb: "\u5173\u95ed"
            })
          });
          break;
        default:
          t.grabM.shareTo({
            ctn: q,
            w: R.DIMENSION.getStageW(),
            h: R.DIMENSION.getStageH() - (G.clientHeight || 0),
            ignoreZIdxArr: [R.PARAM.I_Z_INDEX],
            ignoreIdArr: [R.PARAM.LOGO_ID],
            priorZIdx: R.PARAM.G_Z_INDEX,
            nologo: !1,
            top: R.DIMENSION.posY + R.DIMENSION.H_MA4K + 17,
            right: R.DIMENSION.RIGHT_W + R.DIMENSION.K_RIGHT_W,
            LOGO_W: R.DIMENSION.LOGO_W,
            LOGO_H: R.DIMENSION.LOGO_H,
            color: R.COLOR.LOGO,
            bgColor: R.COLOR.BG,
            txt: e.wbtext,
            url: e.url,
            extra: e.extra
          })
        }
      }
      ;
      var y, N, D = function() {
        ie.update(),
        c(),
        d(),
        b(),
        ie.isIng() || ae.onViewPrice()
      }, k = function() {
        clearTimeout(N),
        !ee && q.parentNode && "none" != q.style.display && (N = setTimeout(D, 200))
      }, w = function() {
        if (clearInterval(y),
        !isNaN(i.rate)) {
          var e = 1e3 * i.rate;
          e > 0 && (y = setTimeout(w, e))
        }
        for (var t, a = r.length; a--; )
          t = r[a],
          t.doUpdate(k)
      }, M = function() {
        Q.viewId = 2;
        for (var e, t = r.length; t--; )
          e = r[t],
          e.initT5Data(e.datas, e.hq, g)
      };
      this.updateDataAll = w,
      this.update5Data = M;
      var I = function(t, a) {
        var i = new n(t,a);
        a && (e = i),
        r[r.length] = i,
        O(),
        g()
      }
        , T = function(e) {
        for (var t, a, i = e, n = 0, o = 0; n < r.length; n++)
          a = r[n],
          a.marketNum(a.market) == a.marketNum(i) ? o++ : t = t ? a.marketNum(a.market) > a.marketNum(t) ? a.market : t : a.market,
          n == r.length - 1 && 0 == o && (S = t);
        for (n = r.length; n--; )
          x(r[n], i)
      }
        , x = function(e, t) {
        e.changeMarket(t)
      };
      this.changeData = x;
      var O = function() {
        if (r.length > 1)
          a.mM.togglePt({
            v: !1
          });
        else {
          if (r.length <= 0)
            return;
          a.mM.togglePt({
            v: !0
          })
        }
      }
        , C = function(e) {
        var t = Q.start
          , a = Q.end;
        return t = Math.max(t + e, 0),
        0 == t && 5 >= a && 0 == Q.start && a++,
        t >= a && (t = a - 1),
        a > 5 && (a = 5),
        [t, a]
      };
      this.onWheel = function(e) {
        var t = -1 * e.detail || e.wheelDelta;
        if (0 != t) {
          t = t > 0 ? -1 : 1;
          var i = C(t);
          a.moving(i[0], i[1], "wheel")
        }
      }
      ,
      this.onKb = function(e) {
        var t = e.keyCode;
        switch (t) {
        case 38:
        case 40:
          var i = C(38 == t ? 1 : -1);
          a.moving(i[0], i[1], "Key");
          break;
        case 37:
        case 39:
          ie.iToKb(37 == t ? -1 : 1);
          break;
        default:
          return
        }
        f.preventDefault(e)
      }
      ,
      this.zoomApi = function(e) {
        var t = C(e ? 1 : -1);
        a.moving(t[0], t[1], "zoom")
      }
      ,
      this.moveApi = function(e) {
        var t = Q.start
          , i = Q.end;
        t += e,
        i += e,
        i > 5 && (t = 4,
        i = 5),
        0 > t && (t = 0,
        i = 1),
        a.moving(t, i, "move")
      }
      ,
      this.setViewData = h,
      this.onChangeView = g,
      this.moving = function(t, a, i) {
        Q.start = t,
        Q.end = a,
        (4 != t && 5 != a || 0 != t && 5 != a) && (Q.viewId = 0),
        "HF" == S && 0 == L && i && (Z.show(),
        M("t5"),
        L = 1);
        for (var n, o = r.length; o--; )
          n = r[o],
          n.setRange(),
          n.onViewChange();
        c(),
        d(),
        ae.onRange(e)
      }
      ,
      this.dAdd = 0,
      this.compare = function(e) {
        for (var t = r.length; t--; )
          if (r[t].symbol == e.symbol)
            return;
        I(e, !1)
      }
      ,
      this.removeCompare = function(e) {
        for (var t, a, i = "CN", n = e.length; n--; ) {
          a = e[n];
          for (var o = r.length; o--; )
            if (a == r[o].symbol) {
              t = r.splice(o, 1)[0],
              i = t.market,
              t.clear(),
              t = null;
              break
            }
        }
        T(i),
        O(),
        c(),
        d(),
        ae.onRange(r[0])
      }
      ,
      this.onResize = function(e) {
        for (var t = r.length; t--; )
          r[t].resize(e)
      }
      ,
      this.dcReset = function() {
        for (var e, t = r.length; t--; )
          e = r.splice(t, 1)[0],
          e.clear(),
          e = null
      }
      ,
      this.setScale = function(e) {
        R.datas.scaleType = e
      }
      ,
      this.setTLineStyle = function(a) {
        if (a) {
          !t.isArr(a) && (a = [a]);
          for (var i = a.length; i--; ) {
            var n = a[i];
            if (n.hasOwnProperty("symbol")) {
              for (var o = n.symbol, s = r.length; s--; )
                if (r[s].symbol == o) {
                  r[s].setTLineStyle(n),
                  r[s].draw();
                  break
                }
            } else
              e.setTLineStyle(n),
              e.draw()
          }
        } else
          e.setTLineStyle(),
          e.draw()
      }
      ;
      var A, F = function(e) {
        e ? D() : ie.update()
      }, H = !1, P = 0, U = function() {
        clearTimeout(A),
        H = !1,
        P = 0
      }, $ = function() {
        A = setTimeout(function() {
          P > 0 && D(),
          U()
        }, 500)
      };
      this.pushData = function(e, t) {
        var a = !1;
        switch (Number(t)) {
        case 1:
          U(),
          a = !0;
          break;
        case 2:
          H || (H = !0,
          $());
          break;
        case 0:
          U()
        }
        for (var i = e.length; i--; )
          for (var n = r.length; n--; )
            if (r[n].symbol == e[i].symbol && e[i].data) {
              P++,
              r[n].doUpdate(_(F, null, a), !1, e[i].data, e[i].market);
              break
            }
      }
      ,
      this.dcInit = function(e) {
        I(e, !0),
        w()
      }
      ,
      this.mM = new function() {
        var t = function(a, i, n) {
          var r, o;
          switch (i) {
          case "price":
            r = s,
            o = "initPt";
            break;
          case "tech":
            r = l,
            o = "initTc"
          }
          o && (r ? e[o](a, n) : KKE.api("plugins.techcharts.get", {
            type: i
          }, function(e) {
            l = e.tChart,
            s = e.pChart,
            t(a, i, n)
          }))
        }
          , a = function(t, a) {
          var i;
          switch (a) {
          case "price":
            i = "removePt";
            break;
          case "tech":
            i = "removeTc"
          }
          i && e && (e[i](t),
          g())
        }
          , i = function(t) {
          return o ? (Y ? Y.sh(t) : (e.initRs(),
          i(t),
          G.appendChild(Y.getBody())),
          void te.resizeAll(!0)) : void KKE.api("plugins.rangeselector.get", null, function(e) {
            o = e,
            i(t)
          })
        };
        this.showRs = i,
        this.newAC = t,
        this.removeAC = a,
        this.togglePt = function(t) {
          e && (e.togglePt(t),
          g())
        }
      }
    }
    var S = "CN"
      , T = 1
      , x = 0
      , O = "\u624b"
      , L = 0
      , C = {
      tcd: function(e) {
        var a;
        switch (e) {
        case "HF":
          a = t.tUtil.gtAll(c.time).length;
          break;
        case "CN":
          a = 241,
          t.isRepos(i.symbol) && (O = "");
          break;
        case "option_cn":
          a = 241,
          O = "";
          break;
        case "HK":
          a = 331,
          O = "";
          break;
        case "US":
          a = 391,
          O = "";
          break;
        case "NF":
          a = t.tUtil.gtAll(d.time).length,
          O = "";
          break;
        default:
          a = 241
        }
        return a
      },
      rmuk: function(e, t, a) {
        var i, n, r = e;
        return "HK" == a ? (i = r.splice(0, 120),
        n = i.concat(r.splice(30, 121))) : "US" == a || (n = e),
        n
      },
      aduk: function(e, a, i, n, r) {
        var o, s, l, c, d, h = e, m = a, p = i, u = [], f = [], v = n.getHours() + ":" + t.strUtil.zp(n.getMinutes()), b = t.tUtil.gata(i), y = g.stbd(n, r) ? t.arrIndexOf(b, v) : 0;
        "HK" == m && "US" == i && (s = [["12:01", "12:59"]],
        u = [1],
        l = h[150],
        c = h[h.length - 1]),
        ("CN" == m || "option_cn" == m) && ("HK" == p ? (s = [["11:30", "11:59"], ["15:01", "16:00"]],
        u = [0, 2],
        l = h[119],
        c = h[h.length - 1]) : (s = [["11:30", "11:59"], ["12:00", "12:59"], ["15:01", "16:00"]],
        u = [0, 1, 2],
        l = h[119],
        c = h[h.length - 1]));
        for (var N = 0, _ = u.length; _ > N; N++) {
          for (var D, k, w, M = t.tUtil.gtr([s[N]]), I = [], S = 0, T = M.length; T > S; S++)
            u[N] < 2 ? (("CN" == m || "option_cn" == m) && (y > 120 && 150 > y ? (k = y - 120,
            w = k > S ? l.price : -.01) : w = l.price),
            "HK" == m && y > 150 && 180 > y && (k = y - 150),
            D = {
              time: M[S],
              price: w,
              avg_price: w,
              volume: 0,
              fake: u[N]
            }) : (("CN" == m || "option_cn" == m) && (y > 272 ? (k = y - 272,
            w = k > S ? c.price : -.01) : w = c.price),
            D = {
              time: M[S],
              price: w,
              avg_price: w,
              volume: 0,
              fake: u[N]
            }),
            I.push(D);
          f.push(I)
        }
        return "HK" == a && (d = h.splice(0, 151),
        o = d.concat(f[0], h)),
        ("CN" == a || "option_cn" == m) && ("US" == p ? (d = h.splice(0, 120),
        o = d.concat(f[0], f[1], h, f[2])) : "HK" == p && (d = h.splice(0, 120),
        o = d.concat(f[0], h, f[1]))),
        o
      }
    };
    t.xh5_EvtDispatcher.call(this);
    var A = this;
    i = v({
      symbol: "sh000001",
      ssl: !1,
      datas: {
        t1: {
          url: void 0,
          dataformatter: void 0
        },
        t5: {
          url: void 0,
          dataformatter: void 0
        }
      },
      dim: null,
      theme: null,
      view: "ts",
      rate: 3,
      t_rate: 0 / 0,
      fh5: !1,
      noh5: null,
      reorder: !0,
      reheight: !0,
      dist5: 0,
      w: void 0,
      h: void 0,
      mh: 0,
      date: null,
      dp: !1,
      onrange: void 0,
      onviewprice: void 0,
      ondataupdate: void 0,
      onviewchanged: void 0,
      nfloat: 2,
      trace: void 0,
      overlaycolor: void 0,
      nohtml5info: void 0,
      tchartobject: {
        t: void 0,
        k: void 0
      }
    }, i || {
      YANGWEN: "yangwen@staff.sina.com.cn",
      VER: "2.5.6"
    }),
    !i.symbol && (i.symbol = "sh000001"),
    i.symbol = String(i.symbol),
    0 == location.protocol.indexOf("https:") && (i.ssl = !0);
    var F = "_" + i.symbol + "_" + Math.floor(1234567890 * Math.random() + 1) + Math.floor(9876543210 * Math.random() + 1)
      , R = e.getSetting(F);
    R.datas.isT = !0,
    i.reorder || (R.custom.indicator_reorder = !1),
    i.reheight || (R.custom.indicator_reheight = !1),
    S = t.market(i.symbol),
    R.datas.tDataLen = C.tcd(S);
    var H = R.datas.tDataLen
      , E = new function() {
      var e;
      this.showTip = function(a) {
        e || (e = new t.TipM(R.COLOR)),
        e.genTip(a)
      }
      ,
      this.hideTip = function() {
        e && e.hide()
      }
    }
    ;
    if (N.noH5) {
      if ("undefined" == typeof FlashCanvas || i.fh5)
        return void (t.isFunc(i.noh5) && i.noh5(i));
      R.PARAM.isFlash = !0
    }
    if (R.PARAM.isFlash && (R.COLOR.K_EXT_BG = "#fff",
    R.COLOR.F_BG = "#fff"),
    i.dim)
      for (var P in i.dim)
        i.dim.hasOwnProperty(P) && t.isNum(R.DIMENSION[P]) && (R.DIMENSION[P] = i.dim[P]);
    var U, q, $, V, K, z, G, W, X, B, j, Y, Z, Q = {
      viewId: k.URLHASH.vi(i.view || "ts"),
      dataLength: void 0,
      start: void 0,
      end: void 0,
      startDate: void 0,
      endDate: void 0
    }, J = isNaN(i.t_rate) ? R.PARAM.T_RATE : i.t_rate, ee = !1, te = new function() {
      var e, a = function(e, t, a) {
        var n = !1;
        isNaN(e) && (e = i.w || U.offsetWidth),
        isNaN(t) && (t = i.h || U.offsetHeight - i.mh);
        var r = G.clientHeight || 0
          , o = z.clientHeight || 0;
        if (!isNaN(a) && (o -= a),
        o / (t - r) > 1) {
          for (var s, l = 0, c = z.childNodes.length; c--; )
            s = z.childNodes[c],
            l += s.id.indexOf("blankctn") >= 0 ? s.offsetHeight : R.DIMENSION.getOneWholeTH();
          o = l,
          n = !0
        }
        return R.DIMENSION.setStageW(e),
        R.DIMENSION.setStageH(t, o + r),
        0 > t && (R.DIMENSION.H_T_G = R.DIMENSION.H_T_G - R.DIMENSION.H_T_T,
        R.DIMENSION.H_T_B = R.DIMENSION.H_TIME_PART),
        n
      }, n = function() {
        Z.setPosition()
      }, r = function() {
        e && (e.style.display = R.custom.show_logo ? "" : "none")
      }, o = function(e, i, o) {
        var s = a(i, o, 0 / 0);
        if (e || i && o) {
          if (!W)
            return;
          W.onResize(s),
          ie.onResize()
        }
        n(),
        r(),
        t.stc("t_wh", [R.DIMENSION.getStageW(), R.DIMENSION.getStageH()])
      }, s = function() {
        U = h(i.domid) || i.dom,
        U || (U = m("div"),
        document.body.appendChild(U),
        t.trace.error("missing of dom id")),
        q = m("div"),
        q.style.position = "relative",
        q.style.outlineStyle = "none",
        q.style.webkitUserSelect = q.style.userSelect = q.style.MozUserSelect = "none",
        $ = m("div", "mainarea_" + R.uid),
        V = m("div"),
        $.appendChild(V),
        K = m("div"),
        K.style.position = "absolute",
        K.style.fontSize = R.STYLE.FONT_SIZE + "px",
        $.appendChild(K),
        q.appendChild($),
        z = m("div"),
        q.appendChild(z),
        G = m("div"),
        q.appendChild(G),
        U.appendChild(q),
        Z = new t.LoadingSign,
        Z.appendto($)
      }, l = function(a) {
        var i = !1;
        if (a) {
          Y && (i = Y.setTheme(a));
          for (var n in a)
            a.hasOwnProperty(n) && R.COLOR.hasOwnProperty(n) && R.COLOR[n] !== a[n] && (R.COLOR[n] = a[n],
            i = !0);
          t.stc("t_thm", a)
        }
        return i && w.styleLogo({
          logo: e,
          color: R.COLOR.LOGO
        }),
        i
      }, c = function(e) {
        !R.custom.mousewheel_zoom || document.activeElement !== q && document.activeElement.parentNode !== q || (W && W.onWheel(e),
        f.preventDefault(e),
        f.stopPropagation(e))
      }, d = function(e) {
        R.custom.keyboard && W && W.onKb(e)
      }, p = function() {
        t.xh5_deviceUtil.istd || (N.info.name.match(/firefox/i) ? f.addHandler(q, "DOMMouseScroll", c) : f.addHandler(q, "mousewheel", c),
        q.tabIndex = 0,
        f.addHandler(q, "keydown", d))
      }, u = function(t) {
        e = t,
        q.appendChild(t)
      }, v = function() {
        s(),
        l(i.theme),
        o(),
        p(),
        R.DIMENSION.h_t < 0 && ($.style.display = "none",
        R.custom.indicator_reorder = !1,
        R.custom.indicator_reheight = !1),
        w.getLogo({
          cb: u,
          id: R.PARAM.LOGO_ID,
          isShare: !1,
          top: R.DIMENSION.posY + R.DIMENSION.H_MA4K + 17,
          right: R.DIMENSION.RIGHT_W + R.DIMENSION.K_RIGHT_W,
          LOGO_W: R.DIMENSION.LOGO_W,
          LOGO_H: R.DIMENSION.LOGO_H,
          color: R.COLOR.LOGO
        }),
        N.noH5 && (E.showTip({
          txt: i.nohtml5info || k.nohtml5info,
          parent: q
        }),
        t.stc("t_nh5"))
      };
      v(),
      this.resizeAll = o,
      this.innerResize = function(e) {
        W && (a(0 / 0, 0 / 0, e),
        W.onResize(),
        ie.onResize(),
        n(),
        ae.onInnerResize({
          height: R.DIMENSION.h_t
        }))
      }
      ,
      this.initTheme = l
    }
    , ae = new function() {
      var e = 0
        , a = function(a, i) {
        var n = H - 1
          , r = W.getAllStock()[0];
        if (r && r.datas && (i = b(r.datas[r.datas.length - 1][0].date, r.hq.date) ? r.realLen < 0 || r.realLen > n ? n : n = r.realLen : "NF" == S && d && "21:00" == d.time[0][0] ? n = r.realLen : r.realLen < 0 || r.realLen > n ? n : n,
        a = r.datas[r.datas.length - 1][n],
        a && a.time)) {
          var o, s;
          return "HF" == S ? (o = c.time[0][0],
          o > a.time ? (o = r.datas[r.datas.length - 1][0].date,
          s = new Date(o),
          s.setDate(s.getDate() + 1)) : s = r.datas[r.datas.length - 1][0].date) : "NF" == S ? (o = d.time[0][0],
          o < a.time && "21:00" == o ? (o = r.datas[r.datas.length - 1][0].date,
          s = new Date(o),
          s.setDate(s.getDate() - 1)) : s = r.datas[r.datas.length - 1][0].date) : s = r.datas[r.datas.length - 1][0].date,
          a.day = t.dateUtil.ds(s, "/", !1) + "/" + t.dateUtil.nw(s.getDay()) + (a.time || ""),
          e = i,
          t.clone(a)
        }
      };
      this.currentData = a,
      this.onDataUpdate = function() {
        if (t.isFunc(i.ondataupdate)) {
          var e = a();
          e && i.ondataupdate({
            data: t.clone(e),
            idx: Q.currentLength - 1,
            left: R.DIMENSION.posX,
            top: R.DIMENSION.H_MA4K
          })
        }
      }
      ,
      this.onInnerResize = function(e) {
        t.isFunc(i.oninnerresize) && i.oninnerresize(e)
      }
      ,
      this.onRange = function(e) {
        !ee && t.isFunc(i.onrange) && e && i.onrange({
          isCompare: e.isCompare,
          data: t.clone(e.datas),
          width: R.DIMENSION.w_t,
          height: R.DIMENSION.h_t,
          viewRangeState: t.clone(Q),
          range: [e.labelMinP, e.labelMaxP, e.labelMaxVol],
          left: R.DIMENSION.posX,
          top: R.DIMENSION.H_MA4K
        })
      }
      ,
      this.onViewChanged = function() {
        t.isFunc(i.onviewchanged) && i.onviewchanged({
          viewRangeState: t.clone(Q)
        })
      }
      ,
      this.onViewPrice = function(n, r, o, s) {
        if (!ee && t.isFunc(i.onviewprice)) {
          if (n || (n = a(n, r)),
          !n)
            return;
          o || (o = W.getMainStock().getName());
          var l = t.clone(n)
            , c = i.symbol.length;
          "HK" == S && i.symbol.substring(c - 1, c) >= "A" && (l.avg_price = 0 / 0),
          l.volume && l.volume < 0 && (l.volume = 0),
          i.onviewprice({
            curname: o || "",
            data_array: W.getAllStock(),
            data: l,
            idx: e,
            left: R.DIMENSION.posX,
            top: R.DIMENSION.H_MA4K,
            interacting: !!s
          })
        }
      }
    }
    , ie = new function() {
      var e, a, n, r, o, s = isNaN(i.nfloat) ? 2 : i.nfloat, l = 137, h = new function() {
        var t = function(t) {
          var a = e.body.style;
          t && R.custom.show_floater ? (a.backgroundColor = R.COLOR.F_BG,
          a.color = R.COLOR.F_T,
          a.border = "1px solid " + R.COLOR.F_BR,
          a.display = "") : a.display = "none"
        };
        this.pv = function(a) {
          s = isNaN(i.nfloat) ? 2 : i.nfloat;
          var n = e.body.style
            , r = Math.max(R.DIMENSION.posX, 55) + 9
            , o = R.DIMENSION.posX < 55 ? 9 : 0
            , c = R.DIMENSION.getStageW() - l - 9 - R.DIMENSION.RIGHT_W - o;
          n.left = (a.x > R.DIMENSION.getStageW() - R.DIMENSION.RIGHT_W >> 1 ? r : c) + "px",
          n.top = (a.y || 0) + "px",
          t(!0)
        }
        ,
        this.showFloater = t
      }
      , u = function() {
        function t() {
          var e = W.getAllStock()[0];
          return !("HK" != e.market || "indx" != e.hq.type)
        }
        function i() {
          var e, a, i, n = "border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0;border-collapse:collapse;border-spacing:0;text-align:center;", r = "font-weight:normal;border:0;height:16px;text-align:center;", o = "text-align:left;font-weight:normal;border:0;height:16px;", c = "text-align:right;border:0;height:16px;", d = m("div");
          d.style.position = "absolute",
          d.style.zIndex = R.PARAM.I_Z_INDEX + 2,
          d.style.padding = "2px",
          d.style.width = l + "px",
          d.style.lineHeight = "16px",
          d.style.display = "none",
          d.style.fontSize = "12px";
          var h, p, u, f, v = m("table"), g = m("thead"), b = m("tbody");
          v.style.cssText = n,
          h = m("tr"),
          p = m("th"),
          p.setAttribute("colspan", "2"),
          p.style.cssText = r;
          var y = m("span");
          p.appendChild(y),
          h.appendChild(p),
          g.appendChild(h),
          h = m("tr"),
          h.style.textAlign = "center",
          p = m("th"),
          p.setAttribute("colspan", "2"),
          p.style.cssText = r;
          var N = m("span");
          p.appendChild(N),
          h.appendChild(p),
          b.appendChild(h),
          h = m("tr"),
          p = m("th"),
          p.style.cssText = o,
          u = m("td"),
          p.style.fontWeight = "normal",
          f = m("span"),
          f.innerHTML = "\u4ef7\u683c";
          var _ = m("span");
          u.style.cssText = c,
          p.appendChild(f),
          u.appendChild(_),
          p.style.fontWeight = "normal",
          h.appendChild(p),
          h.appendChild(u),
          b.appendChild(h),
          h = m("tr"),
          p = m("th"),
          p.style.cssText = o,
          p.style.fontWeight = "normal",
          u = m("td"),
          f = m("span"),
          f.innerHTML = "\u5747\u4ef7";
          var k = m("span");
          u.style.cssText = c,
          p.appendChild(f),
          p.style.fontWeight = "normal",
          u.appendChild(k),
          h.appendChild(p),
          h.appendChild(u),
          b.appendChild(h),
          h = m("tr"),
          p = m("th"),
          p.style.cssText = o,
          u = m("td"),
          p.style.fontWeight = "normal",
          f = m("span"),
          f.innerHTML = "\u6da8\u8dcc";
          var w = m("span");
          u.style.cssText = c,
          p.appendChild(f),
          u.appendChild(w),
          h.appendChild(p),
          h.appendChild(u),
          b.appendChild(h),
          h = m("tr"),
          p = m("th"),
          p.style.cssText = o,
          u = m("td"),
          p.style.fontWeight = "normal",
          f = m("span"),
          f.innerHTML = "\u6210\u4ea4";
          var M = m("span");
          u.style.cssText = c,
          "HF" != S && (p.appendChild(f),
          u.appendChild(M),
          h.appendChild(p),
          h.appendChild(u),
          b.appendChild(h)),
          v.appendChild(g),
          v.appendChild(b),
          v.style.width = "100%",
          d.appendChild(v);
          var I = function(e, t) {
            var a = R.COLOR.F_N;
            return e > t ? a = R.COLOR.F_RISE : t > e && (a = R.COLOR.F_FALL),
            a
          };
          this.setFloaterData = function(n) {
            if (e = n.name || e || "",
            y.innerHTML = e,
            i = n.time || i,
            a = n.data || a) {
              N.innerHTML = i;
              var r = a
                , o = Number(r.percent)
                , l = Number(r.price)
                , c = Number(r.prevclose)
                , d = Number(r.avg_price)
                , h = r.change
                , m = 1 > l || 1 > d ? 4 : s;
              "HF" == S && (3 > l || 3 > d ? m = 4 : (99 > l || 99 > d) && (m = 3)),
              o = isNaN(o) ? "--" : (100 * o).toFixed(2),
              _.innerHTML = l.toFixed(m),
              k.innerHTML = t() ? "--" : d.toFixed(m),
              w.innerHTML = h.toFixed(m) + "(" + o + "%)",
              M.innerHTML = D(r.volume < 0 ? 0 : r.volume, 2) + O,
              w.style.color = I(o, 0),
              k.style.color = I(d - c, 0),
              _.style.color = I(o, 0)
            }
          }
          ,
          this.body = d
        }
        a = new i,
        e = a
      }, f = function() {
        function e(e) {
          var t = m("div")
            , a = m("div")
            , i = m("span")
            , n = m("span")
            , r = e.isH
            , o = 12
            , s = function() {
            if (a.style.borderStyle = "dashed",
            a.style.borderColor = R.COLOR.IVH_LINE,
            i.style.backgroundColor = n.style.backgroundColor = R.COLOR[e.txtBgCN],
            i.style.color = n.style.color = R.COLOR[e.txtCN],
            r)
              a.style.borderWidth = "1px 0 0 0",
              t.style.width = a.style.width = R.DIMENSION.getStageW() - R.DIMENSION.RIGHT_W + "px",
              i.style.top = -(.6 * R.STYLE.FONT_SIZE) + "px",
              n.style.top = -(.6 * R.STYLE.FONT_SIZE) + "px",
              i.style.left = 0,
              n.style.left = R.DIMENSION.extend_draw ? R.DIMENSION.getStageW() - 55 + 2 * R.DIMENSION.RIGHT_W + "px" : R.DIMENSION.getStageW() - R.DIMENSION.RIGHT_W + "px",
              i.style.width = n.style.width = R.DIMENSION.extend_draw ? "" : R.DIMENSION.posX + "px",
              i.style.padding = "1px 0",
              n.style.padding = "1px 0";
            else {
              a.style.borderWidth = "0 1px 0 0";
              var o, s, l = R.DIMENSION.H_MA4K + R.DIMENSION.H_T_B;
              R.DIMENSION.getStageH() < 0 ? (o = z.clientHeight,
              s = o - l) : (o = R.DIMENSION.getStageH() - G.clientHeight || 0,
              s = R.DIMENSION.h_t),
              o -= l,
              o += R.DIMENSION.I_V_O,
              t.style.height = a.style.height = o + "px",
              i.style.top = s + "px",
              i.style.padding = "2px 2px 1px"
            }
          };
          t.style.position = "absolute",
          t.style.zIndex = R.PARAM.I_Z_INDEX - 2,
          i.style.position = n.style.position = a.style.position = "absolute",
          a.style.zIndex = 0,
          i.style.zIndex = n.style.zIndex = 1,
          i.style.font = n.style.font = R.STYLE.FONT_SIZE + "px " + R.STYLE.FONT_FAMILY,
          i.style.whiteSpace = n.style.whiteSpace = "nowrap",
          i.style.lineHeight = o + "px",
          n.style.lineHeight = o + "px",
          e.txtA && (i.style.textAlign = e.txtA) && (n.style.textAlign = "left"),
          e.txtBgCN && (i.style.backgroundColor = R.COLOR[e.txtBgCN]) && (n.style.backgroundColor = R.COLOR[e.txtBgCN]),
          s(),
          t.appendChild(i),
          r && t.appendChild(n),
          t.appendChild(a);
          var l = function(e) {
            e ? "" != t.style.display && (t.style.display = "") : "none" != t.style.display && (t.style.display = "none")
          };
          this.pv = function(e) {
            if (!isNaN(e.y) && (t.style.top = e.y + (e.oy || 0) + "px"),
            i.innerHTML = e.v || "",
            e.p ? (n.innerHTML = isNaN(Number(e.p.replace("%", ""))) ? "0.00%" : e.p,
            n.style.display = "") : n.style.display = "none",
            !isNaN(e.x)) {
              var a = e.x + (e.ox || 0)
                , r = R.DIMENSION.getStageW();
              t.style.left = a + "px";
              var o = i.offsetWidth;
              if (0 >= o && (o = 112),
              o > 0) {
                var s = o >> 1;
                e.x < s ? s = e.x : a + s > r - R.DIMENSION.posX && (s = a + o - r + R.DIMENSION.posX),
                i.style.left = -s + "px"
              }
            }
            l(!0)
          }
          ,
          this.display = l,
          this.body = t,
          this.resize = s,
          l(!1)
        }
        n = new e({
          isH: !0,
          txtCN: "P_TC",
          txtBgCN: "P_BG",
          txtA: "right"
        }),
        r = new e({
          isH: !1,
          txtCN: "T_TC",
          txtBgCN: "T_BG",
          txtA: "center"
        }),
        q.appendChild(r.body)
      }, v = function() {
        n.display(!1),
        r.display(!1),
        h.showFloater(!1)
      }, y = function() {
        var e = W.getAllStock()
          , t = e[0].datas.length
          , a = 0;
        return e[0].realLen >= 0 && (a = 5 == Q.end ? e[0].realLen + R.datas.tDataLen * (t - 1) : R.datas.tDataLen * (t - 1)),
        a
      }, N = function(e) {
        e > 2e3 && (e = y()),
        0 > e || (B && B.indirectI(e),
        j && j.indirectI(e))
      }, _ = function() {
        N(y()),
        B && B.allDraw()
      }, w = !0, M = 0, I = 0, T = 0 / 0, x = 0 / 0;
      this.iToD = function(a, i, o) {
        var l = a.x
          , m = a.ox || 0
          , p = a.y
          , u = a.oy || 0
          , f = a.mark
          , y = a.rmark
          , _ = a.e ? a.e.target : null;
        if (!o) {
          if (T == l && x == p)
            return;
          T = l,
          x = p
        }
        if (_) {
          var D = _.style.height.split("px")[0];
          (0 > p || p > Number(D)) && (l = 0 / 0,
          p = 0 / 0)
        }
        var O, L = W.getAllStock(), C = L.length, F = H, E = C > 1, P = L[0].datas.length, U = F * P, q = Math.floor(l * U / R.DIMENSION.w_t);
        if (isNaN(l) && isNaN(p)) {
          if (w = !0,
          v(),
          b(L[0].datas[P - 1][0].date, L[0].hq.date)) {
            var $;
            $ = L[0].realLen >= 0 ? (F - 1) * (P - 1) + L[0].realLen : Number.MAX_VALUE,
            N($)
          } else
            N(Number.MAX_VALUE);
          return void ae.onViewPrice()
        }
        w = !1,
        I = q;
        for (var V, K, z, G, X, B, j, Y, Z = [], J = Number.MAX_VALUE, ee = C; ee--; )
          if (B = L[ee].datas,
          Z = Z.concat(B),
          B) {
            var te = Math.floor(q / F)
              , ie = q % F;
            if (!B[te])
              return;
            if (j = B[te][ie],
            j.date = B[te][0].date,
            E && L[ee].dAdd <= 1)
              Y = Math.abs(j.py - p),
              J > Y && (K = ee,
              J = Y,
              O = j,
              z = L[ee],
              G = L[ee].getName(),
              X = L[ee].getStockType()),
              y = V = i ? (100 * f).toFixed(2) + "%" : f.toFixed(s);
            else {
              switch (K = ee,
              z = L[ee],
              G = L[ee].getName(),
              X = L[ee].getStockType(),
              S) {
              case "HK":
                V = f.toFixed(1 > f && f > 0 || f > -1 && 0 > f ? 3 : s);
                break;
              case "HF":
                V = f.toFixed(3 > f ? 4 : 99 > f ? 3 : s);
                break;
              default:
                V = f.toFixed(1 > f && f > 0 || f > -1 && 0 > f ? 4 : s)
              }
              V = f > 99999 ? Math.floor(f) : f > 9999 ? f.toFixed(1) : V,
              O = j
            }
          }
        var ne = j && j.date;
        M = 0 == L[0].realLen ? 0 : L[0].realLen - 1;
        var re = "string" != typeof L[0].date ? g.ds(L[0].date) : L[0].date;
        if (P > 1) {
          z.realLen < 0 && (z.realLen = H);
          var oe = U - F + z.realLen;
          5 == Q.end && q >= oe && (q = oe,
          O = Z[te][q % H])
        } else {
          if (g.stbd(ne, g.sd(re)))
            -1 == z.realLen && (z.realLen = H),
            q >= z.realLen && (q = z.realLen);
          else
            switch (S) {
            case "HF":
            case "NF":
              q >= z.realLen && 4 == Q.start && (q = z.realLen);
              break;
            default:
              M = H - 1
            }
          "HF" != S && "NF" != S && g.stbd(ne, g.sd(re)) && z.hq && z.hq.time >= "09:00" && z.hq.time < "09:30" ? O = {
            price: z.hq.preopen,
            avg_price: z.hq.preopen,
            prevclose: z.hq.prevclose,
            percent: (z.hq.open - z.hq.prevclose) / z.hq.prevclose,
            change: z.hq.preopen - z.hq.price,
            volume: z.hq.totalVolume,
            ix: .1,
            time: z.hq.time
          } : (O = z.datas[0][q],
          O.prevclose = z.datas[0][0].prevclose)
        }
        if (O && (O.date || (O.date = ne),
        !O || O.date)) {
          var se = l;
          R.custom.stick && (l = O.ix || l);
          var le, ce;
          "HF" == S ? (le = c.time[0][0],
          le > O.time ? (le = O.date,
          ce = new Date(le),
          ce.setDate(ce.getDate() + 1)) : ce = O.date) : "NF" == S ? (le = d.time[0][0],
          le <= O.time && "21:00" == le ? (le = O.date,
          ce = new Date(le),
          ce.setDate(ce.getDate() - 1),
          0 == ce.getDay() && ce.setDate(ce.getDate() - 2)) : O.time < "03:00" && 1 == O.date.getDay() ? (ce = new Date(O.date),
          ce.setDate(ce.getDate() - 2)) : ce = O.date) : ce = O.date;
          var de = t.dateUtil.ds(ce, "/", !1) + "/" + t.dateUtil.nw(ce.getDay()) + (O.time || "");
          O.day = de,
          e && (e.setFloaterData({
            stocktype: X,
            name: G,
            time: de,
            data: O
          }),
          h.pv({
            x: se,
            y: R.DIMENSION.T_F_T
          })),
          n.pv({
            y: p,
            oy: u,
            v: V,
            p: y
          }),
          r.pv({
            v: de,
            x: l,
            ox: m,
            y: R.DIMENSION.H_MA4K
          }),
          N(q),
          ae.onViewPrice(O, q, G, !w),
          A.re(k.e.I_EVT, a.e)
        }
      }
      ,
      this.globalDragHandler = function(e, t, a, i, n) {
        isNaN(e) && isNaN(t) && A.re(k.e.I_EVT, n)
      }
      ,
      this.zoomView = function() {}
      ,
      u(),
      f(),
      this.onResize = function() {
        n.resize(),
        r.resize()
      }
      ,
      this.iHLineO = n,
      this.hideIUis = v,
      this.iToKb = function(e) {
        I += e,
        M = I;
        var t = W.getAllStock()
          , a = t[0].datas.length
          , i = t[0].datas[0][I]
          , n = t.length
          , r = t[0].realLen
          , o = "string" != typeof t[0].date ? g.ds(t[0].date) : t[0].date;
        1 >= a ? g.stbd(t[0].datas[0][0].date, g.sd(o)) ? 0 > r && (r = H) : r = H : g.stbd(t[0].datas[a - 1][0].date, g.sd(o)) || (r = H);
        var s = H > r ? r + 1 : r;
        if (0 > I) {
          var l = H > r ? r : r - 1;
          M = I = (a - 1) * H + l,
          i = t[0].datas[a - 1][l]
        } else if (I >= s + (a - 1) * H)
          if (g.stbd(t[0].datas[a - 1][0].date, g.sd(o)) && 0 > e) {
            var c = 0;
            c = a > 1 ? r - 1 + H * (a - 1) : r - 1,
            M = I = c,
            i = t[0].datas[0][M]
          } else
            M = I = 0,
            i = t[0].datas[0][0];
        !p($, ie.iHLineO.body) && $.appendChild(ie.iHLineO.body);
        var d = Math.floor(M / H);
        I >= H && (i = t[0].datas[d][M - d * H]),
        i.date = t[0].datas[d][0].date;
        var h = n > 1 ? i.percent : i.price
          , m = {
          idx: I,
          name: t[0].getName(),
          mark: h,
          datas: t[0].datas,
          data: i,
          x: i.ix,
          y: i.py,
          oy: R.DIMENSION.H_MA4K,
          ox: R.DIMENSION.posX
        };
        this.iToD(m, !0, !0)
      }
      ,
      this.isIng = function() {
        return !w
      }
      ,
      this.isMoving = function() {
        return !1
      }
      ,
      this.iReset = function() {}
      ,
      this.patcher = new function() {
        var i, n = {}, r = function() {
          if (i) {
            e.body.parentNode && e.body.parentNode.removeChild(e.body);
            var t = "vid_" + Q.viewId;
            if (i[t]) {
              var r;
              r = n[t] ? n[t] : n[t] = new i[t],
              e = r
            } else
              e = a
          } else
            e = a;
          !p(q, e.body) && q.appendChild(e.body)
        };
        this.customFloater = function(e) {
          i = e,
          r(),
          t.stc("t_fl", e)
        }
        ,
        this.switchFloater = r
      }
      ,
      this.update = function() {
        var a = W.getAllStock();
        if (a) {
          var i, n = a[0], r = n.datas.length, s = 0;
          if (n) {
            if (I > r * (H - 1) && (I = 0),
            i = Math.floor(I / (H - 1)),
            r == i && (i -= 1),
            I > H - 1) {
              var l = I - H * i;
              s = b(n.datas[i][0].date, n.hq.date) && l > M ? n.realLen : l
            } else
              s = 1 == r && 0 == i && I > M ? n.realLen : I;
            if (i = 0 > i ? 0 : i,
            s = 0 > s ? 0 : s,
            o = n.datas[i][s])
              if (o.day = t.dateUtil.ds(n.datas[i][0].date, "/", !1) + "/" + t.dateUtil.nw(n.datas[i][0].date.getDay()) + (o.time || ""),
              e && e.setFloaterData({}),
              w)
                if (b(n.datas[r - 1][0].date, n.hq.date))
                  s = n.realLen >= 0 ? n.realLen : H - 1,
                  s += (r - 1) * H,
                  s = 0 > s ? Number.MAX_VALUE : s,
                  N(s);
                else {
                  if ("NF" == S && n.hq.time >= "21:00")
                    return n.realLen >= 0 && (s = n.realLen),
                    void (4 == Q.start && 5 == Q.end && ae.onViewPrice(o, s, void 0, !w));
                  _()
                }
              else if ("HF" == S)
                4 == Q.start && 5 == Q.end && ae.onViewPrice(o, s, void 0, !w);
              else if ("NF" == S) {
                var c = new Date(o.date);
                o.date && o.time >= "21:00" && (c.setDate(1 == o.date.getDay() ? c.getDate() - 3 : c.getDate() - 1),
                o.day = t.dateUtil.ds(c, "/", !1) + "/" + t.dateUtil.nw(c.getDay()) + (o.time || "")),
                ae.onViewPrice(o, s, void 0, !w)
              } else
                ae.onViewPrice(o, s, void 0, !w)
          }
        }
      }
    }
    ;
    return r = new function() {
      var e = this
        , a = function(a, i) {
        if (R.hasOwnProperty(a)) {
          for (var n in i)
            if (i.hasOwnProperty(n) && t.isFunc(i[n]))
              return void t.trace.error("illegal operation:", n);
          v(R[a], i),
          t.stc(a, i),
          e.resize()
        } else
          t.trace.error("not exist param:", a)
      }
        , n = function(e, a) {
        var i;
        if (R.hasOwnProperty(e)) {
          i = t.clone(R[e]);
          for (var n in i)
            if (i.hasOwnProperty(n) && t.isFunc(i[n]))
              i[n] = null,
              delete i[n];
            else if (a)
              for (var r = a.length; r--; )
                typeof i[n] === a[r] && (i[n] = null,
                delete i[n])
        }
        return i
      }
        , r = function(e, t, a) {
        a = v({
          toremove: !1,
          isexclusive: !1,
          callback: void 0
        }, a),
        a.toremove ? W.mM.removeAC(t, e) : a.isexclusive ? (W.mM.removeAC(null, e),
        W.mM.newAC(t, e, a)) : W.mM.newAC(t, e, a)
      }
        , o = function(e) {
        Q.viewId = e,
        Q.start = 1 == e ? 4 : 0,
        Q.end = 5
      };
      this.pushData = function(e, a) {
        !t.isArr(e) && (e = [e]),
        W.pushData(e, a)
      }
      ;
      var s;
      this.pushTr = function(e) {
        e && e.data && (clearTimeout(s),
        s = setTimeout(function() {
          var t = e.data.split(",")
            , a = e.symbol
            , i = e.market
            , n = {
            symbol: a,
            data: t[t.length - 1],
            market: i
          };
          W.pushData([n], 1)
        }, 20))
      }
      ,
      this.setScale = function(e) {
        W.setScale(e),
        t.stc("t_scale", e)
      }
      ;
      var l = !0;
      this.showView = function(e, a) {
        ie.hideIUis(),
        l ? l = !1 : Z.hide();
        var n = k.URLHASH.vi(e);
        if (i.date)
          return i.date = "",
          o(n),
          void this.newSymbol(i);
        var r = W.getAllStock()[0];
        if (ae.onRange(r),
        t.stc("t_v", e),
        t.suda("vw", e),
        Q.viewId != n) {
          if (o(n),
          "HF" == S && "t5" == e && 0 == L)
            return Z.show(),
            L = 1,
            void W.update5Data(e);
          W.onChangeView(!1, a),
          ae && ae.onViewPrice()
        }
      }
      ;
      var c = function(e) {
        var a;
        return a = t.isStr(e.symbol) ? e.symbol.split(",") : [e.symbol]
      }
        , d = [];
      this.overlay = function(e, t) {
        if (W && 1 != W.dAdd)
          if (t) {
            W.removeCompare(c(e));
            for (var a = 0; a < d.length; a++)
              e.symbol == d[a] && d.splice(a, 1);
            W.getAllStock().length <= 1 && (W.dAdd = 0)
          } else
            i.overlaycolor = e.linecolor || {
              K_N: "#cccccc"
            },
            W.dAdd = 2,
            W.compare(e),
            d.push(e.symbol)
      }
      ,
      this.compare = function(e, a) {
        if (W) {
          var i, n = 0;
          if (a) {
            if (i = t.isStr(e) ? e.split(",") : [e.symbol],
            1 == W.dAdd && W.removeCompare(i),
            W.getAllStock().length <= 1) {
              for (n = 0; n < d.length; n++)
                W.dAdd = 2,
                W.compare({
                  symbol: d[n]
                });
              d.length < 1 && (W.dAdd = 0)
            }
          } else
            2 == W.dAdd && W.removeCompare(d),
            W.dAdd = 1,
            W.compare(e),
            t.suda("t_comp");
          t.stc("t_comp", {
            rm: a,
            o: e
          })
        }
      }
      ,
      this.tCharts = function(e, t) {
        r("tech", e, t)
      }
      ,
      this.pCharts = function(e, t) {
        r("price", e, t)
      }
      ,
      this.showPCharts = function(e) {
        e && (W.mM.togglePt(e),
        t.stc("t_sp", e))
      }
      ,
      this.getIndicators = function() {
        var e = B ? B.getLog() : null
          , t = j ? j.getLog() : null;
        return {
          tCharts: e,
          pCharts: t
        }
      }
      ;
      var m;
      this.showRangeSelector = function(e) {
        m = v({
          dispaly: !0,
          from: void 0,
          to: void 0
        }, e),
        W.mM.showRs(m),
        t.stc("t_rs", e)
      }
      ,
      this.setLineStyle = function(e) {
        W && W.setTLineStyle(e),
        t.stc("t_style", e)
      }
      ,
      this.setCustom = _(a, this, "custom"),
      this.setDimension = _(a, this, "DIMENSION"),
      this.getDimension = _(n, null, "DIMENSION", ["boolean"]),
      this.setTheme = function(e) {
        var t = te.initTheme(e);
        t && (this.setLineStyle({
          linecolor: e
        }),
        this.resize())
      }
      ,
      this.newSymbol = function(e) {
        if (i.symbol = e.symbol,
        i.date = e.date,
        ie.hideIUis(),
        ie.iReset(),
        W.dcReset(),
        W.dcInit(i),
        E.hideTip(),
        B) {
          var a = B.getLog();
          B = null,
          a && this.tCharts(a)
        }
        if (j) {
          var n = j.getLog();
          j = null,
          n && this.pCharts(n)
        }
        m && (m.from = void 0,
        m.to = void 0,
        W.mM.showRs(m)),
        t.stc("t_ns", e)
      }
      ,
      this.resize = function(e, t) {
        te.resizeAll(!0, e, t)
      }
      ,
      this.hide = function(e) {
        ee = !0,
        ie.hideIUis(),
        t.$CONTAINS(U, q) && U.removeChild(q),
        e && W.dcReset()
      }
      ,
      this.show = function(e) {
        ee = !1,
        e && (t.isStr(e) && (e = h(e)),
        U = e),
        t.$CONTAINS(U, q) || (U.appendChild(q),
        te.resizeAll(!0)),
        ae && ae.onViewPrice()
      }
      ,
      this.shareTo = function(e) {
        W.shareTo(e),
        t.stc("t_share", e);
        var a = e && e.type ? e.type : "weibo";
        t.suda("share", a)
      }
      ,
      this.getChartId = function() {
        return R.uid
      }
      ,
      this.dateTo = function(e, a) {
        i.historytime = e,
        i.historycb = a;
        var n = e;
        "object" == typeof e ? n = g.ds(e, "-") : e = g.sd(e);
        var r = X.get();
        if (null == r)
          return void (x = 1);
        for (var o = r.length, s = 0; o > s; s++)
          if (g.stbd(e, r[s][0].date))
            return void W.moving(s, s + 1, "dateTo");
        i.date = n,
        W.hasHistory = a,
        t.stc("t_ft", n),
        this.newSymbol(i)
      }
      ,
      this.showScale = function(e) {
        W && W.setScale(e)
      }
      ,
      this.resize = function(e, t) {
        te.resizeAll(!0, e, t)
      }
      ,
      this.showCompatibleTip = function(e) {
        te.showCompatibleTip(e)
      }
      ,
      this.toggleExtend = function() {
        var e = R.DIMENSION.extend_draw
          , t = R.DIMENSION.posX;
        a.call(this, "DIMENSION", {
          extend_draw: !e,
          posX: t > 9 ? 7 : 55,
          RIGHT_W: t > 9 ? 7 : 55
        }),
        this.resize()
      }
      ,
      this.historyData = function() {
        return W.historyData
      }
      ,
      this.getExtraData = function(e) {
        return W.getExtraData(e)
      }
      ,
      this.patcher = {
        iMgr: ie.patcher
      },
      this.zoom = function(e) {
        W.zoomApi(e),
        t.stc("t_zoom", e, 9e3)
      }
      ,
      this.move = function(e) {
        e = parseInt(e),
        isNaN(e) || (W.moveApi(e),
        t.stc("t_move", e, 9e3))
      }
      ,
      this.getSymbols = function() {
        return W.getAllSymbols()
      }
      ,
      this.update = function() {
        W.updateDataAll(),
        t.stc("t_up", "update", 9e3)
      }
      ,
      this.getCurrentData = function() {
        return ae.currentData()
      }
      ,
      this.viewState = Q,
      this.me = A,
      this.type = "h5t"
    }
    ,
    W = new I,
    W.dcInit(i),
    r
  }
  function n() {
    function e(e, a) {
      var n = new i(e)
        , r = function(e) {
        n.me.rl(e, r)
      };
      n.me.al(k.e.T_DATA_LOADED, r),
      t.isFunc(a) && a(n)
    }
    this.get = function(a, i) {
      t.stc("h5t_get"),
      t.suda("h5t_" + t.market(a.symbol));
      var n;
      0 == location.protocol.indexOf("https:") && (n = !0);
      var r = t.market(a.symbol)
        , o = "http://stock.finance.sina.com.cn/futures/api/jsonp.php/$cb=/InterfaceInfoService.getMarket?category=$market&symbol=$symbol";
      switch (n && (o = t.getSUrl(o)),
      r) {
      case "HF":
        c = "kke_future_" + a.symbol,
        t.load(o.replace("$symbol", a.symbol.replace("hf_", "")).replace("$market", "hf").replace("$cb", "var " + c), function() {
          c = window[c] || {
            time: [["06:00", "23:59"], ["00:00", "05:00"]]
          },
          e(a, i)
        });
        break;
      case "NF":
        d = "kke_future_" + a.symbol;
        var s = a.symbol.replace("nf_", "").replace(/[\d]+$/, "");
        t.load(o.replace("$symbol", s).replace("$market", "nf").replace("$cb", "var " + d), function() {
          d = window[d] || {
            time: [["09:30", "11:29"], ["13:00", "02:59"]]
          },
          d.inited = 0,
          e(a, i)
        });
        break;
      default:
        e(a, i)
      }
    }
  }
  var r, o, s, l, c, d, h = t.$DOM, m = t.$C, p = t.$CONTAINS, u = t.xh5_PosUtil, f = t.xh5_EvtUtil, v = t.oc, g = t.dateUtil, b = t.dateUtil.stbd, y = t.xh5_ADJUST_HIGH_LOW.c, N = t.xh5_BrowserUtil, _ = t.fBind, D = t.strUtil.ps, k = e.globalCfg, w = t.logoM;
  return t.fInherit(i, t.xh5_EvtDispatcher),
  n
});
;
