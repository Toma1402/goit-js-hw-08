!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(t,e,n){var i,r,u,f,c,a,l=0,d=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=i,o=r;return i=r=void 0,l=e,f=t.apply(o,n)}function h(t){return l=t,c=setTimeout(T,e),d?j(t):f}function O(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-l>=u}function T(){var t=b();if(O(t))return w(t);c=setTimeout(T,function(t){var n=e-(t-a);return s?p(n,u-(t-l)):n}(t))}function w(t){return c=void 0,y&&i?j(t):(i=r=void 0,f)}function x(){var t=b(),n=O(t);if(i=arguments,r=this,a=t,n){if(void 0===c)return h(a);if(s)return c=setTimeout(T,e),j(a)}return void 0===c&&(c=setTimeout(T,e)),f}return e=g(e)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},x.flush=function(){return void 0===c?f:w(b())},x}function m(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=m(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):r.test(t)?NaN:+t}document.querySelector("input");console.log(1),console.log(2)}();
//# sourceMappingURL=03-feedback.a0f46048.js.map
