!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.OvenPlayer = t())
    : (e.OvenPlayer = t());
})(self, function () {
  return (function () {
    var e = {
        6757: function (e, t, n) {
          "use strict";
          n.d(t, {
            default: function () {
              return ar;
            },
          });
          var r = "0.10.23",
            o = n(741),
            i = n.n(o);
          function A(e) {
            return e ? e.replace(/^\s+|\s+$/g, "") : "";
          }
          var a = function (e) {
            return e && "rtmp" != e.substr(0, 4)
              ? (function (e) {
                  var t = "";
                  return (
                    /[(,]format=mpd-/i.test(e)
                      ? (t = "mpd")
                      : /[(,]format=m3u8-/i.test(e) && (t = "m3u8"),
                    t
                  );
                })(e) ||
                  ((e = e.split("?")[0].split("#")[0]).lastIndexOf(".") > -1
                    ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase()
                    : "")
              : "";
          };
          function s(e) {
            var t = parseInt(e, 10);
            if (!e) return "00:00";
            var n = Math.floor(t / 3600),
              r = Math.floor((t - 3600 * n) / 60),
              o = t - 3600 * n - 60 * r;
            return (
              r < 10 && (r = "0" + r),
              o < 10 && (o = "0" + o),
              n > 0 ? n + ":" + r + ":" + o : r + ":" + o
            );
          }
          function l(e, t) {
            if (!e) return 0;
            if (i().isNumber(e) && !i().isNaN(e)) return e;
            var n = (e = e.replace(",", ".")).split(":"),
              r = n.length,
              o = 0;
            if ("s" === e.slice(-1)) o = parseFloat(e);
            else if ("m" === e.slice(-1)) o = 60 * parseFloat(e);
            else if ("h" === e.slice(-1)) o = 3600 * parseFloat(e);
            else if (r > 1) {
              var A = r - 1;
              4 === r && (t && (o = parseFloat(n[A]) / t), (A -= 1)),
                (o += parseFloat(n[A])),
                (o += 60 * parseFloat(n[A - 1])),
                r >= 3 && (o += 3600 * parseFloat(n[A - 2]));
            } else o = parseFloat(e);
            return i().isNaN(o) ? 0 : o;
          }
          function c(e) {
            var t = {},
              n = e.split("\r\n");
            1 === n.length && (n = e.split("\n"));
            var r = 1;
            if (
              (n[0].indexOf(" --\x3e ") > 0 && (r = 0),
              n.length > r + 1 && n[r + 1])
            ) {
              var o = n[r],
                i = o.indexOf(" --\x3e ");
              i > 0 &&
                ((t.start = l(o.substr(0, i))),
                (t.end = l(o.substr(i + 5))),
                (t.text = n.slice(r + 1).join("\r\n")));
            }
            return t;
          }
          var u = window.VTTCue,
            f = { "": !0, lr: !0, rl: !0 },
            p = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
          function d(e) {
            return (
              "string" == typeof e && !!p[e.toLowerCase()] && e.toLowerCase()
            );
          }
          function g(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) e[r] = n[r];
            }
            return e;
          }
          u ||
            ((u = function (e, t, n) {
              var r = this,
                o = /MSIE\s8\.0/.test(navigator.userAgent),
                i = {};
              o ? (r = document.createElement("custom")) : (i.enumerable = !0),
                (r.hasBeenReset = !1);
              var A = "",
                a = !1,
                s = e,
                l = t,
                c = n,
                u = null,
                p = "",
                h = !0,
                v = "auto",
                m = "start",
                C = 50,
                y = "middle",
                b = 50,
                w = "middle";
              if (
                (Object.defineProperty(
                  r,
                  "id",
                  g({}, i, {
                    get: function () {
                      return A;
                    },
                    set: function (e) {
                      A = "" + e;
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "pauseOnExit",
                  g({}, i, {
                    get: function () {
                      return a;
                    },
                    set: function (e) {
                      a = !!e;
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "startTime",
                  g({}, i, {
                    get: function () {
                      return s;
                    },
                    set: function (e) {
                      if ("number" != typeof e)
                        throw new TypeError(
                          "Start time must be set to a number."
                        );
                      (s = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "endTime",
                  g({}, i, {
                    get: function () {
                      return l;
                    },
                    set: function (e) {
                      if ("number" != typeof e)
                        throw new TypeError(
                          "End time must be set to a number."
                        );
                      (l = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "text",
                  g({}, i, {
                    get: function () {
                      return c;
                    },
                    set: function (e) {
                      (c = "" + e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "region",
                  g({}, i, {
                    get: function () {
                      return u;
                    },
                    set: function (e) {
                      (u = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "vertical",
                  g({}, i, {
                    get: function () {
                      return p;
                    },
                    set: function (e) {
                      var t = (function (e) {
                        return (
                          "string" == typeof e &&
                          !!f[e.toLowerCase()] &&
                          e.toLowerCase()
                        );
                      })(e);
                      if (!1 === t)
                        throw new SyntaxError(
                          "An invalid or illegal string was specified."
                        );
                      (p = t), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "snapToLines",
                  g({}, i, {
                    get: function () {
                      return h;
                    },
                    set: function (e) {
                      (h = !!e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "line",
                  g({}, i, {
                    get: function () {
                      return v;
                    },
                    set: function (e) {
                      if ("number" != typeof e && "auto" !== e)
                        throw new SyntaxError(
                          "An invalid number or illegal string was specified."
                        );
                      (v = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "lineAlign",
                  g({}, i, {
                    get: function () {
                      return m;
                    },
                    set: function (e) {
                      var t = d(e);
                      if (!t)
                        throw new SyntaxError(
                          "An invalid or illegal string was specified."
                        );
                      (m = t), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "position",
                  g({}, i, {
                    get: function () {
                      return C;
                    },
                    set: function (e) {
                      if (e < 0 || e > 100)
                        throw new Error("Position must be between 0 and 100.");
                      (C = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "positionAlign",
                  g({}, i, {
                    get: function () {
                      return y;
                    },
                    set: function (e) {
                      var t = d(e);
                      if (!t)
                        throw new SyntaxError(
                          "An invalid or illegal string was specified."
                        );
                      (y = t), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "size",
                  g({}, i, {
                    get: function () {
                      return b;
                    },
                    set: function (e) {
                      if (e < 0 || e > 100)
                        throw new Error("Size must be between 0 and 100.");
                      (b = e), (this.hasBeenReset = !0);
                    },
                  })
                ),
                Object.defineProperty(
                  r,
                  "align",
                  g({}, i, {
                    get: function () {
                      return w;
                    },
                    set: function (e) {
                      var t = d(e);
                      if (!t)
                        throw new SyntaxError(
                          "An invalid or illegal string was specified."
                        );
                      (w = t), (this.hasBeenReset = !0);
                    },
                  })
                ),
                (r.displayState = void 0),
                o)
              )
                return r;
            }).prototype.getCueAsHTML = function () {
              return WebVTT.convertCueToDOMTree(window, this.text);
            });
          var h = u,
            v = { "": !0, up: !0 };
          function m(e) {
            return "number" == typeof e && e >= 0 && e <= 100;
          }
          var C = function () {
              var e = 100,
                t = 3,
                n = 0,
                r = 100,
                o = 0,
                i = 100,
                A = "";
              Object.defineProperties(this, {
                width: {
                  enumerable: !0,
                  get: function () {
                    return e;
                  },
                  set: function (t) {
                    if (!m(t))
                      throw new Error("Width must be between 0 and 100.");
                    e = t;
                  },
                },
                lines: {
                  enumerable: !0,
                  get: function () {
                    return t;
                  },
                  set: function (e) {
                    if ("number" != typeof e)
                      throw new TypeError("Lines must be set to a number.");
                    t = e;
                  },
                },
                regionAnchorY: {
                  enumerable: !0,
                  get: function () {
                    return r;
                  },
                  set: function (e) {
                    if (!m(e))
                      throw new Error(
                        "RegionAnchorX must be between 0 and 100."
                      );
                    r = e;
                  },
                },
                regionAnchorX: {
                  enumerable: !0,
                  get: function () {
                    return n;
                  },
                  set: function (e) {
                    if (!m(e))
                      throw new Error(
                        "RegionAnchorY must be between 0 and 100."
                      );
                    n = e;
                  },
                },
                viewportAnchorY: {
                  enumerable: !0,
                  get: function () {
                    return i;
                  },
                  set: function (e) {
                    if (!m(e))
                      throw new Error(
                        "ViewportAnchorY must be between 0 and 100."
                      );
                    i = e;
                  },
                },
                viewportAnchorX: {
                  enumerable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (e) {
                    if (!m(e))
                      throw new Error(
                        "ViewportAnchorX must be between 0 and 100."
                      );
                    o = e;
                  },
                },
                scroll: {
                  enumerable: !0,
                  get: function () {
                    return A;
                  },
                  set: function (e) {
                    var t = (function (e) {
                      return (
                        "string" == typeof e &&
                        !!v[e.toLowerCase()] &&
                        e.toLowerCase()
                      );
                    })(e);
                    if (!1 === t)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    A = t;
                  },
                },
              });
            },
            y = function () {};
          function b(e, t) {
            return (
              void 0 === t && (t = 1),
              "rgba(" +
                [
                  parseInt(e.substring(0, 2), 16),
                  parseInt(e.substring(2, 4), 16),
                  parseInt(e.substring(4, 6), 16),
                  t,
                ].join(",") +
                ")"
            );
          }
          var w = 1;
          function E(e, t, n) {
            switch (n) {
              case "webvtt.font.color":
              case "webvtt.font.opacity":
                var r = Services.prefs.getCharPref("webvtt.font.color"),
                  o = Services.prefs.getIntPref("webvtt.font.opacity") / 100;
                B.fontSet = b(r, o);
                break;
              case "webvtt.font.scale":
                w = Services.prefs.getIntPref("webvtt.font.scale") / 100;
                break;
              case "webvtt.bg.color":
              case "webvtt.bg.opacity":
                var i = Services.prefs.getCharPref("webvtt.bg.color"),
                  A = Services.prefs.getIntPref("webvtt.bg.opacity") / 100;
                B.backgroundSet = b(i, A);
                break;
              case "webvtt.edge.color":
              case "webvtt.edge.type":
                var a = Services.prefs.getIntPref("webvtt.edge.type"),
                  s = Services.prefs.getCharPref("webvtt.edge.color");
                B.edgeSet =
                  ["", "0px 0px ", "4px 4px 4px ", "-2px -2px ", "2px 2px "][
                    a
                  ] + b(s);
            }
          }
          if ("undefined" != typeof Services) {
            var B = {};
            [
              "webvtt.font.color",
              "webvtt.font.opacity",
              "webvtt.font.scale",
              "webvtt.bg.color",
              "webvtt.bg.opacity",
              "webvtt.edge.color",
              "webvtt.edge.type",
            ].forEach(function (e) {
              E(0, 0, e), Services.prefs.addObserver(e, E, !1);
            });
          }
          var x =
            Object.create ||
            (function () {
              function e() {}
              return function (t) {
                if (1 !== arguments.length)
                  throw new Error(
                    "Object.create shim only accepts one parameter."
                  );
                return (e.prototype = t), new e();
              };
            })();
          function k(e, t) {
            (this.name = "ParsingError"),
              (this.code = e.code),
              (this.message = t || e.message);
          }
          function I(e) {
            function t(e, t, n, r) {
              return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | r) / 1e3;
            }
            var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return n
              ? n[3]
                ? t(n[1], n[2], n[3].replace(":", ""), n[4])
                : n[1] > 59
                ? t(n[1], n[2], 0, n[4])
                : t(0, n[1], n[2], n[4])
              : null;
          }
          function S() {
            this.values = x(null);
          }
          function T(e, t, n, r) {
            var o = r ? e.split(r) : [e];
            for (var i in o)
              if ("string" == typeof o[i]) {
                var A = o[i].split(n);
                2 === A.length && t(A[0], A[1]);
              }
          }
          function L(e, t, n) {
            var r = e;
            function o() {
              var t = I(e);
              if (null === t)
                throw new k(k.Errors.BadTimeStamp, "Malformed timestamp: " + r);
              return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
            }
            function i() {
              e = e.replace(/^\s+/, "");
            }
            if ((i(), (t.startTime = o()), i(), "--\x3e" !== e.substr(0, 3)))
              throw new k(
                k.Errors.BadTimeStamp,
                "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
                  r
              );
            (e = e.substr(3)),
              i(),
              (t.endTime = o()),
              i(),
              (function (e, t) {
                var r = new S();
                T(
                  e,
                  function (e, t) {
                    switch (e) {
                      case "region":
                        for (var o = n.length - 1; o >= 0; o--)
                          if (n[o].id === t) {
                            r.set(e, n[o].region);
                            break;
                          }
                        break;
                      case "vertical":
                        r.alt(e, t, ["rl", "lr"]);
                        break;
                      case "line":
                        var i = t.split(","),
                          A = i[0];
                        r.integer(e, A),
                          r.percent(e, A) && r.set("snapToLines", !1),
                          r.alt(e, A, ["auto"]),
                          2 === i.length &&
                            r.alt("lineAlign", i[1], [
                              "start",
                              "middle",
                              "end",
                            ]);
                        break;
                      case "position":
                        (i = t.split(",")),
                          r.percent(e, i[0]),
                          2 === i.length &&
                            r.alt("positionAlign", i[1], [
                              "start",
                              "middle",
                              "end",
                            ]);
                        break;
                      case "size":
                        r.percent(e, t);
                        break;
                      case "align":
                        r.alt(e, t, [
                          "start",
                          "middle",
                          "end",
                          "left",
                          "right",
                        ]);
                    }
                  },
                  /:/,
                  /\s/
                );
              })(e);
          }
          (k.prototype = x(Error.prototype)),
            (k.prototype.constructor = k),
            (k.Errors = {
              BadSignature: { code: 0, message: "Malformed WebVTT signature." },
              BadTimeStamp: { code: 1, message: "Malformed time stamp." },
            }),
            (S.prototype = {
              set: function (e, t) {
                this.get(e) || "" === t || (this.values[e] = t);
              },
              get: function (e, t, n) {
                return n
                  ? this.has(e)
                    ? this.values[e]
                    : t[n]
                  : this.has(e)
                  ? this.values[e]
                  : t;
              },
              has: function (e) {
                return e in this.values;
              },
              alt: function (e, t, n) {
                for (var r = 0; r < n.length; ++r)
                  if (t === n[r]) {
                    this.set(e, t);
                    break;
                  }
              },
              integer: function (e, t) {
                /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
              },
              percent: function (e, t) {
                return (
                  !!(
                    t.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
                    (t = parseFloat(t)) >= 0 &&
                    t <= 100
                  ) && (this.set(e, t), !0)
                );
              },
            });
          var R = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&lrm;": "‎",
              "&rlm;": "‏",
              "&nbsp;": " ",
            },
            Q = {
              c: "span",
              i: "i",
              b: "b",
              u: "u",
              ruby: "ruby",
              rt: "rt",
              v: "span",
              lang: "span",
            },
            M = { v: "title", lang: "lang" },
            O = { rt: "ruby" };
          function D(e, t) {
            function n() {
              if (!t) return null;
              var e,
                n = t.match(/^([^<]*)(<[^>]+>?)?/);
              return (e = n[1] ? n[1] : n[2]), (t = t.substr(e.length)), e;
            }
            function r(e) {
              return R[e];
            }
            function o(e) {
              for (; (p = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)); )
                e = e.replace(p[0], r);
              return e;
            }
            function i(e, t) {
              return !O[t.localName] || O[t.localName] === e.localName;
            }
            function A(t, n) {
              var r = Q[t];
              if (!r) return null;
              var o = e.document.createElement(r);
              o.localName = r;
              var i = M[t];
              return i && n && (o[i] = n.trim()), o;
            }
            for (
              var a, s = e.document.createElement("div"), l = s, c = [];
              null !== (a = n());

            )
              if ("<" !== a[0]) l.appendChild(e.document.createTextNode(o(a)));
              else {
                if ("/" === a[1]) {
                  c.length &&
                    c[c.length - 1] === a.substr(2).replace(">", "") &&
                    (c.pop(), (l = l.parentNode));
                  continue;
                }
                var u,
                  f = I(a.substr(1, a.length - 2));
                if (f) {
                  (u = e.document.createProcessingInstruction("timestamp", f)),
                    l.appendChild(u);
                  continue;
                }
                var p = a.match(
                  /^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/
                );
                if (!p) continue;
                if (!(u = A(p[1], p[3]))) continue;
                if (!i(l, u)) continue;
                p[2] && (u.className = p[2].substr(1).replace(".", " ")),
                  c.push(p[1]),
                  l.appendChild(u),
                  (l = u);
              }
            return s;
          }
          var F = [
            1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494,
            1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505,
            1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521,
            1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569,
            1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580,
            1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591,
            1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602,
            1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647,
            1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659,
            1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670,
            1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681,
            1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692,
            1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703,
            1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714,
            1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725,
            1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736,
            1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747,
            1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790,
            1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801,
            1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814,
            1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825,
            1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836,
            1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876,
            1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887,
            1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898,
            1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909,
            1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920,
            1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931,
            1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942,
            1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953,
            1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989,
            1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3,
            2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
            2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
            2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051,
            2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062,
            2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096,
            2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107,
            2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119,
            2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130,
            2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212,
            2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287,
            64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296,
            64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306,
            64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316,
            64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329,
            64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338,
            64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347,
            64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356,
            64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365,
            64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374,
            64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383,
            64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392,
            64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401,
            64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410,
            64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419,
            64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428,
            64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437,
            64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446,
            64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472,
            64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481,
            64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490,
            64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499,
            64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508,
            64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517,
            64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526,
            64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535,
            64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544,
            64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553,
            64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562,
            64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571,
            64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580,
            64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589,
            64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598,
            64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607,
            64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616,
            64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625,
            64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634,
            64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643,
            64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652,
            64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661,
            64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670,
            64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679,
            64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688,
            64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697,
            64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706,
            64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715,
            64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724,
            64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733,
            64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742,
            64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751,
            64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760,
            64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769,
            64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778,
            64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787,
            64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796,
            64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805,
            64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814,
            64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823,
            64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850,
            64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859,
            64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868,
            64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877,
            64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886,
            64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895,
            64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904,
            64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915,
            64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924,
            64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933,
            64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942,
            64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951,
            64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960,
            64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009,
            65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018,
            65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143,
            65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152,
            65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161,
            65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170,
            65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179,
            65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188,
            65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197,
            65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206,
            65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215,
            65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224,
            65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233,
            65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242,
            65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251,
            65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260,
            65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269,
            65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585,
            67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597,
            67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606,
            67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615,
            67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624,
            67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633,
            67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648,
            67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657,
            67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666,
            67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676,
            67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845,
            67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854,
            67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863,
            67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876,
            67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885,
            67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894,
            67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972,
            67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981,
            67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990,
            67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3,
            68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009,
            68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018,
            68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112,
            68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123,
            68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132,
            68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141,
            68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162,
            68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179,
            68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195,
            68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204,
            68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213,
            68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222,
            68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359,
            68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368,
            68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377,
            68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386,
            68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395,
            68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404,
            68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423,
            68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432,
            68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443,
            68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452,
            68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461,
            68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475,
            68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612,
            68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621,
            68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630,
            68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639,
            68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648,
            68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657,
            68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666,
            68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675,
            68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467,
            126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476,
            126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484,
            126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492,
            126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505,
            126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513,
            126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530,
            126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546,
            126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562,
            126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574,
            126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583,
            126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594,
            126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603,
            126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611,
            126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619,
            126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633,
            126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642,
            126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650,
            126651, 1114109,
          ];
          function P() {}
          function U(e, t, n) {
            var r =
                "undefined" != typeof navigator &&
                /MSIE\s8\.0/.test(navigator.userAgent),
              o = "rgba(255, 255, 255, 1)",
              i = "rgba(0, 0, 0, 0.8)",
              A = "";
            void 0 !== B &&
              ((o = B.fontSet), (i = B.backgroundSet), (A = B.edgeSet)),
              r && ((o = "rgb(255, 255, 255)"), (i = "rgb(0, 0, 0)")),
              P.call(this),
              (this.cue = t),
              (this.cueDiv = D(e, t.text));
            var a = {
              color: o,
              backgroundColor: i,
              textShadow: A,
              position: "relative",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "inline",
            };
            r ||
              ((a.writingMode =
                "" === t.vertical
                  ? "horizontal-tb"
                  : "lr" === t.vertical
                  ? "vertical-lr"
                  : "vertical-rl"),
              (a.unicodeBidi = "plaintext")),
              this.applyStyles(a, this.cueDiv),
              (this.div = e.document.createElement("div")),
              (a = {
                textAlign: "middle" === t.align ? "center" : t.align,
                font: n.font,
                whiteSpace: "pre-line",
                position: "absolute",
              }),
              r ||
                ((a.direction = (function (e) {
                  var t,
                    n = [],
                    r = "";
                  if (!e || !e.childNodes) return "ltr";
                  function o(e, t) {
                    for (var n = t.childNodes.length - 1; n >= 0; n--)
                      e.push(t.childNodes[n]);
                  }
                  function i(e) {
                    if (!e || !e.length) return null;
                    var t = e.pop(),
                      n = t.textContent || t.innerText;
                    if (n) {
                      var r = n.match(/^.*(\n|\r)/);
                      return r ? ((e.length = 0), r[0]) : n;
                    }
                    return "ruby" === t.tagName
                      ? i(e)
                      : t.childNodes
                      ? (o(e, t), i(e))
                      : void 0;
                  }
                  for (o(n, e); (r = i(n)); )
                    for (var A = 0; A < r.length; A++) {
                      t = r.charCodeAt(A);
                      for (var a = 0; a < F.length; a++)
                        if (F[a] === t) return "rtl";
                    }
                  return "ltr";
                })(this.cueDiv)),
                (a.writingMode =
                  "" === t.vertical
                    ? "horizontal-tb"
                    : "lr" === t.vertical
                    ? "vertical-lr"
                    : ("vertical-rl".stylesunicodeBidi = "plaintext"))),
              this.applyStyles(a),
              this.div.appendChild(this.cueDiv);
            var s = 0;
            switch (t.positionAlign) {
              case "start":
                s = t.position;
                break;
              case "middle":
                s = t.position - t.size / 2;
                break;
              case "end":
                s = t.position - t.size;
            }
            "" === t.vertical
              ? this.applyStyles({
                  left: this.formatStyle(s, "%"),
                  width: this.formatStyle(t.size, "%"),
                })
              : this.applyStyles({
                  top: this.formatStyle(s, "%"),
                  height: this.formatStyle(t.size, "%"),
                }),
              (this.move = function (e) {
                this.applyStyles({
                  top: this.formatStyle(e.top, "px"),
                  bottom: this.formatStyle(e.bottom, "px"),
                  left: this.formatStyle(e.left, "px"),
                  right: this.formatStyle(e.right, "px"),
                  height: this.formatStyle(e.height, "px"),
                  width: this.formatStyle(e.width, "px"),
                });
              });
          }
          function N(e) {
            var t,
              n,
              r,
              o,
              i =
                "undefined" != typeof navigator &&
                /MSIE\s8\.0/.test(navigator.userAgent);
            if (e.div) {
              (n = e.div.offsetHeight),
                (r = e.div.offsetWidth),
                (o = e.div.offsetTop);
              var A =
                (A = e.div.childNodes) &&
                (A = A[0]) &&
                A.getClientRects &&
                A.getClientRects();
              (e = e.div.getBoundingClientRect()),
                (t = A
                  ? Math.max((A[0] && A[0].height) || 0, e.height / A.length)
                  : 0);
            }
            (this.left = e.left),
              (this.right = e.right),
              (this.top = e.top || o),
              (this.height = e.height || n),
              (this.bottom = e.bottom || o + (e.height || n)),
              (this.width = e.width || r),
              (this.lineHeight = void 0 !== t ? t : e.lineHeight),
              i && !this.lineHeight && (this.lineHeight = 13);
          }
          function W(e, t, n, r) {
            var o = new N(t),
              i = t.cue,
              A = (function (e) {
                if (
                  "number" == typeof e.line &&
                  (e.snapToLines || (e.line >= 0 && e.line <= 100))
                )
                  return e.line;
                if (
                  !e.track ||
                  !e.track.textTrackList ||
                  !e.track.textTrackList.mediaElement
                )
                  return -1;
                for (
                  var t = e.track, n = t.textTrackList, r = 0, o = 0;
                  o < n.length && n[o] !== t;
                  o++
                )
                  "showing" === n[o].mode && r++;
                return -1 * ++r;
              })(i),
              a = [];
            if (i.snapToLines) {
              var s;
              switch (i.vertical) {
                case "":
                  (a = ["+y", "-y"]), (s = "height");
                  break;
                case "rl":
                  (a = ["+x", "-x"]), (s = "width");
                  break;
                case "lr":
                  (a = ["-x", "+x"]), (s = "width");
              }
              var l = o.lineHeight,
                c = l * Math.round(A),
                u = n[s] + l,
                f = a[0];
              Math.abs(c) > u &&
                ((c = c < 0 ? -1 : 1), (c *= Math.ceil(u / l) * l)),
                A < 0 &&
                  ((c += "" === i.vertical ? n.height : n.width),
                  (a = a.reverse())),
                o.move(f, c);
            } else {
              var p = (o.lineHeight / n.height) * 100;
              switch (i.lineAlign) {
                case "middle":
                  A -= p / 2;
                  break;
                case "end":
                  A -= p;
              }
              switch (i.vertical) {
                case "":
                  t.applyStyles({ top: t.formatStyle(A, "%") });
                  break;
                case "rl":
                  t.applyStyles({ left: t.formatStyle(A, "%") });
                  break;
                case "lr":
                  t.applyStyles({ right: t.formatStyle(A, "%") });
              }
              (a = ["+y", "-x", "+x", "-y"]), (o = new N(t));
            }
            var d = (function (e, t) {
              for (var o, i = new N(e), A = 1, a = 0; a < t.length; a++) {
                for (
                  ;
                  e.overlapsOppositeAxis(n, t[a]) ||
                  (e.within(n) && e.overlapsAny(r));

                )
                  e.move(t[a]);
                if (e.within(n)) return e;
                var s = e.intersectPercentage(n);
                A > s && ((o = new N(e)), (A = s)), (e = new N(i));
              }
              return o || i;
            })(o, a);
            t.move(d.toCSSCompatValues(n));
          }
          (P.prototype.applyStyles = function (e, t) {
            for (var n in ((t = t || this.div), e))
              e.hasOwnProperty(n) && (t.style[n] = e[n]);
          }),
            (P.prototype.formatStyle = function (e, t) {
              return 0 === e ? 0 : e + t;
            }),
            (U.prototype = x(P.prototype)),
            (U.prototype.constructor = U),
            (N.prototype.move = function (e, t) {
              switch (((t = void 0 !== t ? t : this.lineHeight), e)) {
                case "+x":
                  (this.left += t), (this.right += t);
                  break;
                case "-x":
                  (this.left -= t), (this.right -= t);
                  break;
                case "+y":
                  (this.top += t), (this.bottom += t);
                  break;
                case "-y":
                  (this.top -= t), (this.bottom -= t);
              }
            }),
            (N.prototype.overlaps = function (e) {
              return (
                this.left < e.right &&
                this.right > e.left &&
                this.top < e.bottom &&
                this.bottom > e.top
              );
            }),
            (N.prototype.overlapsAny = function (e) {
              for (var t = 0; t < e.length; t++)
                if (this.overlaps(e[t])) return !0;
              return !1;
            }),
            (N.prototype.within = function (e) {
              return (
                this.top >= e.top &&
                this.bottom <= e.bottom &&
                this.left >= e.left &&
                this.right <= e.right
              );
            }),
            (N.prototype.overlapsOppositeAxis = function (e, t) {
              switch (t) {
                case "+x":
                  return this.left < e.left;
                case "-x":
                  return this.right > e.right;
                case "+y":
                  return this.top < e.top;
                case "-y":
                  return this.bottom > e.bottom;
              }
            }),
            (N.prototype.intersectPercentage = function (e) {
              return (
                (Math.max(
                  0,
                  Math.min(this.right, e.right) - Math.max(this.left, e.left)
                ) *
                  Math.max(
                    0,
                    Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)
                  )) /
                (this.height * this.width)
              );
            }),
            (N.prototype.toCSSCompatValues = function (e) {
              return {
                top: this.top - e.top,
                bottom: e.bottom - this.bottom,
                left: this.left - e.left,
                right: e.right - this.right,
                height: this.height,
                width: this.width,
              };
            }),
            (N.getSimpleBoxPosition = function (e) {
              var t = e.div
                  ? e.div.offsetHeight
                  : e.tagName
                  ? e.offsetHeight
                  : 0,
                n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
                r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
              return {
                left: (e = e.div
                  ? e.div.getBoundingClientRect()
                  : e.tagName
                  ? e.getBoundingClientRect()
                  : e).left,
                right: e.right,
                top: e.top || r,
                height: e.height || t,
                bottom: e.bottom || r + (e.height || t),
                width: e.width || n,
              };
            }),
            (y.StringDecoder = function () {
              return {
                decode: function (e) {
                  if (!e) return "";
                  if ("string" != typeof e)
                    throw new Error("Error - expected string data.");
                  return decodeURIComponent(encodeURIComponent(e));
                },
              };
            }),
            (y.convertCueToDOMTree = function (e, t) {
              return e && t ? D(e, t) : null;
            }),
            (y.processCues = function (e, t, n) {
              if (!e || !t || !n) return null;
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              var r = e.document.createElement("div");
              if (
                ((r.style.position = "absolute"),
                (r.style.left = "0"),
                (r.style.right = "0"),
                (r.style.top = "0"),
                (r.style.bottom = "0"),
                (r.style.margin = "1.5%"),
                n.appendChild(r),
                (function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (e[t].hasBeenReset || !e[t].displayState) return !0;
                  return !1;
                })(t))
              ) {
                var o = [],
                  i = N.getSimpleBoxPosition(r),
                  A = {
                    font:
                      (Math.round(0.05 * i.height * 100) / 100) * w +
                      "px sans-serif",
                  };
                !(function () {
                  for (var n, a, s = 0; s < t.length; s++)
                    (a = t[s]),
                      (n = new U(e, a, A)),
                      r.appendChild(n.div),
                      W(0, n, i, o),
                      (a.displayState = n.div),
                      o.push(N.getSimpleBoxPosition(n));
                })();
              } else
                for (var a = 0; a < t.length; a++)
                  r.appendChild(t[a].displayState);
            }),
            ((y.Parser = function (e, t) {
              (this.window = e),
                (this.state = "INITIAL"),
                (this.buffer = ""),
                (this.decoder = t || new TextDecoder("utf8")),
                (this.regionList = []);
            }).prototype = {
              reportOrThrowError: function (e) {
                if (!(e instanceof k)) throw e;
                this.onparsingerror && this.onparsingerror(e);
              },
              parse: function (e, t) {
                var n = this;
                function r() {
                  for (
                    var e = n.buffer, t = 0;
                    t < e.length && "\r" !== e[t] && "\n" !== e[t];

                  )
                    ++t;
                  var r = e.substr(0, t);
                  return (
                    "\r" === e[t] && ++t,
                    "\n" === e[t] && ++t,
                    (n.buffer = e.substr(t)),
                    r
                  );
                }
                e && (n.buffer += n.decoder.decode(e, { stream: !0 }));
                try {
                  var o;
                  if ("INITIAL" === n.state) {
                    if (!/\r\n|\n/.test(n.buffer)) return this;
                    var i = (o = r()).match(/^WEBVTT([ \t].*)?$/);
                    if (!i || !i[0]) throw new k(k.Errors.BadSignature);
                    n.state = "HEADER";
                  }
                  for (var A = !1; n.buffer; ) {
                    if (!/\r\n|\n/.test(n.buffer)) return this;
                    switch ((A ? (A = !1) : (o = r()), n.state)) {
                      case "HEADER":
                        /:/.test(o)
                          ? T(
                              o,
                              function (e, t) {
                                switch (e) {
                                  case "Region":
                                    !(function (e) {
                                      var t = new S();
                                      if (
                                        (T(
                                          e,
                                          function (e, n) {
                                            switch (e) {
                                              case "id":
                                                t.set(e, n);
                                                break;
                                              case "width":
                                                t.percent(e, n);
                                                break;
                                              case "lines":
                                                t.integer(e, n);
                                                break;
                                              case "regionanchor":
                                              case "viewportanchor":
                                                var r = n.split(",");
                                                if (2 !== r.length) break;
                                                var o = new S();
                                                if (
                                                  (o.percent("x", r[0]),
                                                  o.percent("y", r[1]),
                                                  !o.has("x") || !o.has("y"))
                                                )
                                                  break;
                                                t.set(e + "X", o.get("x")),
                                                  t.set(e + "Y", o.get("y"));
                                                break;
                                              case "scroll":
                                                t.alt(e, n, ["up"]);
                                            }
                                          },
                                          /=/,
                                          /\s/
                                        ),
                                        t.has("id"))
                                      ) {
                                        var r = new C();
                                        (r.width = t.get("width", 100)),
                                          (r.lines = t.get("lines", 3)),
                                          (r.regionAnchorX = t.get(
                                            "regionanchorX",
                                            0
                                          )),
                                          (r.regionAnchorY = t.get(
                                            "regionanchorY",
                                            100
                                          )),
                                          (r.viewportAnchorX = t.get(
                                            "viewportanchorX",
                                            0
                                          )),
                                          (r.viewportAnchorY = t.get(
                                            "viewportanchorY",
                                            100
                                          )),
                                          (r.scroll = t.get("scroll", "")),
                                          n.onregion && n.onregion(r),
                                          n.regionList.push({
                                            id: t.get("id"),
                                            region: r,
                                          });
                                      }
                                    })(t);
                                }
                              },
                              /:/
                            )
                          : o || (n.state = "ID");
                        continue;
                      case "NOTE":
                        o || (n.state = "ID");
                        continue;
                      case "ID":
                        if (/^NOTE($|[ \t])/.test(o)) {
                          n.state = "NOTE";
                          break;
                        }
                        if (!o) continue;
                        if (
                          ((n.cue = new h(0, 0, "")),
                          (n.state = "CUE"),
                          -1 === o.indexOf("--\x3e"))
                        ) {
                          n.cue.id = o;
                          continue;
                        }
                      case "CUE":
                        try {
                          L(o, n.cue, n.regionList);
                        } catch (e) {
                          n.reportOrThrowError(e),
                            (n.cue = null),
                            (n.state = "BADCUE");
                          continue;
                        }
                        n.state = "CUETEXT";
                        continue;
                      case "CUETEXT":
                        var a = -1 !== o.indexOf("--\x3e");
                        if (!o || (a && (A = !0))) {
                          n.oncue && n.oncue(n.cue),
                            (n.cue = null),
                            (n.state = "ID");
                          continue;
                        }
                        n.cue.text && (n.cue.text += "\n"), (n.cue.text += o);
                        continue;
                      case "BADCUE":
                        o || (n.state = "ID");
                        continue;
                    }
                  }
                  if (!t)
                    return (
                      "CUETEXT" === n.state &&
                        n.cue &&
                        n.oncue &&
                        n.oncue(n.cue),
                      n.flush(),
                      this
                    );
                } catch (e) {
                  n.reportOrThrowError(e),
                    "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue),
                    (n.cue = null),
                    (n.state = "INITIAL" === n.state ? "BADWEBVTT" : "BADCUE");
                }
                return this;
              },
              flush: function () {
                var e = this;
                try {
                  if (
                    ((e.buffer += e.decoder.decode()),
                    (e.cue || "HEADER" === e.state) &&
                      ((e.buffer += "\n\n"), e.parse(null, !0)),
                    "INITIAL" === e.state)
                  )
                    throw new k(k.Errors.BadSignature);
                } catch (t) {
                  e.reportOrThrowError(t);
                }
                return e.onflush && e.onflush(), this;
              },
            });
          var j = y,
            Y = function () {
              var e = "";
              screen.width &&
                (e +=
                  (screen.width ? screen.width : "") +
                  " x " +
                  (screen.height ? screen.height : ""));
              var t,
                n,
                r,
                o = navigator.appVersion,
                i = navigator.userAgent,
                A = navigator.appName,
                a = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10);
              -1 != (n = i.indexOf("Opera")) &&
                ((A = "Opera"),
                (a = i.substring(n + 6)),
                -1 != (n = i.indexOf("Version")) && (a = i.substring(n + 8))),
                -1 != (n = i.indexOf("OPR"))
                  ? ((A = "Opera"), (a = i.substring(n + 4)))
                  : -1 != (n = i.indexOf("SamsungBrowser"))
                  ? ((A = "SamsungBrowser"), (a = i.substring(n + 15)))
                  : -1 != (n = i.indexOf("Edge"))
                  ? ((A = "Microsoft Edge"), (a = i.substring(n + 5)))
                  : -1 != (n = i.indexOf("MSIE"))
                  ? ((A = "Microsoft Internet Explorer"),
                    (a = i.substring(n + 5)),
                    -1 !== i.indexOf("Trident/") &&
                      -1 !== i.indexOf("rv:") &&
                      (a = i.substring(i.indexOf("rv:") + 3)))
                  : -1 != (n = i.indexOf("Chrome"))
                  ? ((A = "Chrome"), (a = i.substring(n + 7)))
                  : -1 != (n = i.indexOf("CriOS"))
                  ? ((A = "Chrome"), (a = i.substring(n + 6)))
                  : -1 != (n = i.indexOf("Firefox"))
                  ? ((A = "Firefox"), (a = i.substring(n + 8)))
                  : -1 != (n = i.indexOf("FxiOS"))
                  ? ((A = "Firefox"), (a = i.substring(n + 6)))
                  : -1 != (n = i.indexOf("Safari"))
                  ? ((A = "Safari"),
                    (a = i.substring(n + 7)),
                    -1 != (n = i.indexOf("Version")) &&
                      (a = i.substring(n + 8)))
                  : -1 !== i.indexOf("Trident/")
                  ? ((A = "Microsoft Internet Explorer"),
                    (a = i.substring(i.indexOf("rv:") + 3)))
                  : (t = i.lastIndexOf(" ") + 1) < (n = i.lastIndexOf("/")) &&
                    ((A = i.substring(t, n)),
                    (a = i.substring(n + 1)),
                    A.toLowerCase() == A.toUpperCase() &&
                      (A = navigator.appName)),
                i.indexOf(" wv"),
                -1 != (r = a.indexOf(";")) && (a = a.substring(0, r)),
                -1 != (r = a.indexOf(" ")) && (a = a.substring(0, r)),
                -1 != (r = a.indexOf(")")) && (a = a.substring(0, r)),
                (s = parseInt("" + a, 10)),
                isNaN(s) &&
                  ((a = "" + parseFloat(navigator.appVersion)),
                  (s = parseInt(navigator.appVersion, 10)));
              var l = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),
                c = !!navigator.cookieEnabled;
              void 0 !== navigator.cookieEnabled ||
                c ||
                ((document.cookie = "testcookie"),
                (c = -1 != document.cookie.indexOf("testcookie")));
              var u = "-",
                f = [
                  { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
                  { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
                  { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
                  { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
                  { s: "Windows Vista", r: /Windows NT 6.0/ },
                  { s: "Windows Server 2003", r: /Windows NT 5.2/ },
                  { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
                  { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
                  { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
                  { s: "Windows 98", r: /(Windows 98|Win98)/ },
                  { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
                  {
                    s: "Windows NT 4.0",
                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
                  },
                  { s: "Windows CE", r: /Windows CE/ },
                  { s: "Windows 3.11", r: /Win16/ },
                  { s: "Android", r: /Android/ },
                  { s: "Open BSD", r: /OpenBSD/ },
                  { s: "Sun OS", r: /SunOS/ },
                  { s: "Linux", r: /(Linux|X11)/ },
                  { s: "iOS", r: /(iPhone|iPad|iPod)/ },
                  { s: "Mac OS XI", r: /Mac OS X 11/ },
                  { s: "Mac OS X", r: /Mac OS X 10/ },
                  { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                  { s: "QNX", r: /QNX/ },
                  { s: "UNIX", r: /UNIX/ },
                  { s: "BeOS", r: /BeOS/ },
                  { s: "OS/2", r: /OS\/2/ },
                  {
                    s: "Search Bot",
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
                  },
                ];
              for (var p in f) {
                var d = f[p];
                if (d.r.test(i)) {
                  u = d.s;
                  break;
                }
              }
              var g = "-";
              switch (
                (/Windows/.test(u) &&
                  ((g = /Windows (.*)/.exec(u)[1]), (u = "Windows")),
                u)
              ) {
                case "Mac OS XI":
                  g = /Mac OS X (11[\.\_\d]+)/.exec(i)[1];
                  break;
                case "Mac OS X":
                  g = /Mac OS X (10[\.\_\d]+)/.exec(i)[1];
                  break;
                case "Android":
                  g = /Android ([\.\_\d]+)/.exec(i)[1];
                  break;
                case "iOS":
                  g =
                    (g = /OS (\d+)_(\d+)_?(\d+)?/.exec(o))[1] +
                    "." +
                    g[2] +
                    "." +
                    (0 | g[3]);
              }
              return {
                screen: e,
                browser: A,
                browserVersion: a,
                browserMajorVersion: s,
                mobile: l,
                ua: i,
                os: u,
                osVersion: g,
                cookies: c,
              };
            },
            G = /<sync|<\/body|<\/sami/i,
            z = /\r\n?|\n/g,
            V = /<[a-z]*[^>]*<[a-z]*/g,
            _ = /<sync[^>]+?start[^=]*=[^0-9]*([0-9]*)["^0-9"]*/i,
            H = /<br[^>]*>/gi,
            J = function (e, t) {
              return (
                (t = (
                  ((t || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) ||
                  []
                ).join("")),
                e
                  .replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, "")
                  .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, function (e, n) {
                    return t.indexOf("<" + n.toLowerCase() + ">") > -1 ? e : "";
                  })
              );
            },
            Z = function (e) {
              return e.sort(function (e, t) {
                var n;
                return 0 == (n = e.start - t.start) ? e.end - t.end : n;
              });
            },
            K = function () {
              var e = {},
                t = function (e) {
                  return e.map(function (e) {
                    return new h(e.start, e.end, e.text);
                  });
                };
              return (
                (e.load = function (e, n, r, o) {
                  fetch(e.file)
                    .then(function (e) {
                      e.ok
                        ? e
                            .text()
                            .then(function (e) {
                              var o = [],
                                i = [];
                              if (e.indexOf("WEBVTT") >= 0) {
                                OvenPlayerConsole.log("WEBVTT LOADED");
                                var a = new j.Parser(window, j.StringDecoder());
                                (i = []),
                                  (a.oncue = function (e) {
                                    i.push(e);
                                  }),
                                  (a.onflush = function () {
                                    r(i);
                                  }),
                                  a.parse(e);
                              } else if (e.indexOf("SAMI") >= 0) {
                                OvenPlayerConsole.log("SAMI LOADED");
                                var s = (function (e, t) {
                                  var n, r, o, i, A, a, s, l, c, u;
                                  if (
                                    ((s = function () {
                                      var t,
                                        n,
                                        r,
                                        A,
                                        s,
                                        l,
                                        c,
                                        f,
                                        p,
                                        d,
                                        g,
                                        h,
                                        v,
                                        m,
                                        C,
                                        y;
                                      for (
                                        n = function (e) {
                                          var n;
                                          return (
                                            ((n = new Error(e)).line = c),
                                            (n.context = t),
                                            o.push(n)
                                          );
                                        },
                                          c = 1,
                                          p = [],
                                          v = {},
                                          h = e;
                                        (d = h.search()), !(f <= 0 || d < 0);

                                      )
                                        (f = h.slice(d + 1).search(G) + 1),
                                          (t =
                                            f > 0
                                              ? h.slice(d, d + f)
                                              : h.slice(d)),
                                          (c +=
                                            (null !=
                                            (m = h.slice(0, d).match(z))
                                              ? m.length
                                              : void 0) || 0),
                                          V.test(t) && n("ERROR_BROKEN_TAGS"),
                                          (h = h.slice(d + f)),
                                          (null ===
                                            (g = +(null != (C = t.match(_))
                                              ? parseFloat(C[1] / 1e3)
                                              : void 0)) ||
                                            g < 0) &&
                                            n("ERROR_INVALID_TIME"),
                                          (s = i(t)) ||
                                            n("ERROR_INVALID_LANGUAGE"),
                                          (c +=
                                            (null != (y = t.match(z))
                                              ? y.length
                                              : void 0) || 0),
                                          (t = (t = t.replace(z, "")).replace(
                                            H,
                                            "\n"
                                          )),
                                          (A = {
                                            start: g,
                                            text: "",
                                            contents: (r = J(t).trim()),
                                          }),
                                          s && (A.text = r),
                                          v[s] || (v[s] = []),
                                          A.start && v[s].push(A);
                                      u =
                                        u ||
                                        (function () {
                                          var e,
                                            t,
                                            n = window.navigator,
                                            r = [
                                              "language",
                                              "browserLanguage",
                                              "systemLanguage",
                                              "userLanguage",
                                            ];
                                          if (Array.isArray(n.languages))
                                            for (
                                              e = 0;
                                              e < n.languages.length;
                                              e++
                                            )
                                              if (
                                                (t = n.languages[e]) &&
                                                t.length
                                              )
                                                return t;
                                          for (e = 0; e < r.length; e++)
                                            if ((t = n[r[e]]) && t.length)
                                              return t;
                                          return null;
                                        })();
                                      var b = Object.keys(v);
                                      return (
                                        b &&
                                          b.length > 0 &&
                                          ((l =
                                            b.indexOf(u) > -1
                                              ? v[u]
                                              : v[
                                                  b.filter(function (e) {
                                                    return "undefined" !== e;
                                                  })[0]
                                                ]),
                                          (l = Z(l)),
                                          (l = a(l)),
                                          (p = p.concat(l))),
                                        Z(p)
                                      );
                                    }),
                                    (i = function (e) {
                                      var t, r;
                                      if (e)
                                        for (t in n)
                                          if ((r = n[t]).reClassName.test(e))
                                            return r.lang;
                                    }),
                                    (a = function (e) {
                                      var t, n, o;
                                      for (t = e.length; t--; )
                                        (n = e[t]),
                                          null != (o = e[t - 1]) &&
                                            (o.end = n.start),
                                          n.contents && "&nbsp;" !== n.contents
                                            ? (delete e[t].contents,
                                              n.end || (n.end = n.start + r))
                                            : e.splice(t, 1);
                                      return e;
                                    }),
                                    (o = []),
                                    (n = {
                                      KRCC: {
                                        lang: "ko",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(KRCC)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      KOCC: {
                                        lang: "ko",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(KOCC)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      KR: {
                                        lang: "ko",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(KR)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      ENCC: {
                                        lang: "en",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(ENCC)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      EGCC: {
                                        lang: "en",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(EGCC)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      EN: {
                                        lang: "en",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(EN)['\"S]?",
                                          "i"
                                        ),
                                      },
                                      JPCC: {
                                        lang: "ja",
                                        reClassName: new RegExp(
                                          "class[^=]*?=[\"'S]*(JPCC)['\"S]?",
                                          "i"
                                        ),
                                      },
                                    }),
                                    null != t ? t.definedLangs : void 0)
                                  )
                                    for (A in (c = t.definedLangs))
                                      (l = c[A]), (n[A] = l);
                                  return (
                                    (r =
                                      (null != t ? t.duration : void 0) || 10),
                                    (u = t.fixedLang),
                                    (e = e.trim()),
                                    { result: s(), errors: o }
                                  );
                                })(e, { fixedLang: n });
                                (i = t(s.result)), r(i);
                              } else
                                OvenPlayerConsole.log("SRT LOADED"),
                                  (o = (function (e) {
                                    var t = [],
                                      n = (e = A(e)).split("\r\n\r\n");
                                    1 === n.length && (n = e.split("\n\n"));
                                    for (var r = 0; r < n.length; r++)
                                      if ("WEBVTT" !== n[r]) {
                                        var o = c(n[r]);
                                        o.text && t.push(o);
                                      }
                                    return t;
                                  })(e)),
                                  (i = t(o)),
                                  r(i);
                            })
                            .catch(function (e) {
                              o(e);
                            })
                        : o(e.status);
                    })
                    .catch(function (e) {
                      o(e);
                    });
                }),
                e
              );
            },
            X = "idle",
            q = "complete",
            $ = "paused",
            ee = "playing",
            te = "error",
            ne = "loading",
            re = "stalled",
            oe = "adLoaded",
            ie = "adPlaying",
            Ae = "adPaused",
            ae = "adComplete",
            se = "adError",
            le = "html5",
            ce = "webrtc",
            ue = "dash",
            fe = "hls",
            pe = "rtmp",
            de = "ready",
            ge = "destroy",
            he = "playlistChanged",
            ve = "allPlaylistEnded",
            me = "unstableNetwork",
            Ce = "error",
            ye = "stateChanged",
            be = "pause",
            we = "play",
            Ee = "clicked",
            Be = "resized",
            xe = "fullscreenChanged",
            ke = "warning",
            Ie = "adChanged",
            Se = "adTime",
            Te = "bufferChanged",
            Le = "time",
            Re = "volumeChanged",
            Qe = "mute",
            Me = "metaChanged",
            Oe = "sourceChanged",
            De = "qualityLevelChanged",
            Fe = "cueChanged",
            Pe = "captionChanged",
            Ue = "timeDisplayModeChanged",
            Ne = "p2pMode",
            We = { codes: "" },
            je = [
              {
                lang: "en",
                ui: {
                  context: "About OvenPlayer",
                  controls: {
                    live: "Live Streaming",
                    low_latency_live: "Sub-Second Latency Streaming",
                    low_latency_p2p: "Sub-Second Latency P2P",
                  },
                  playlist: "Playlist",
                  setting: {
                    title: "Settings",
                    speed: "Speed",
                    speedUnit: "x",
                    source: "Source",
                    quality: "Quality",
                    caption: "Caption",
                    display: "Display",
                  },
                },
                api: {
                  message: {
                    muted_play: "Please touch here to turn on the sound.",
                  },
                  error: {
                    100: {
                      code: 100,
                      message: "Can not load due to unknown reasons.",
                      reason: "Can not load due to unknown reasons.",
                    },
                    101: {
                      code: 101,
                      message: "Can not load due to playable media not found.",
                      reason: "Can not load due to playable media not found.",
                    },
                    102: {
                      code: 102,
                      message:
                        "Flash fetching process aborted. </br><a href='http://www.adobe.com/go/getflashplayer' target='_self'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'></a>",
                      reason:
                        "It looks like not found swf or your environment is localhost.",
                    },
                    103: {
                      code: 103,
                      message:
                        "Can not load due to dash.js. Please use the latest dash.js.",
                      reason: "dash.js version is old.",
                    },
                    104: {
                      code: 104,
                      message: "Can not load due to google ima for Ads. ",
                      reason: "Please check the google ima library.",
                    },
                    105: {
                      code: 105,
                      message: "Error initializing DASH.",
                      reason: "Error initializing DASH.",
                    },
                    106: {
                      code: 106,
                      message: "Error initializing HLS.",
                      reason: "Error initializing HLS.",
                    },
                    300: {
                      code: 300,
                      message: "Can not play due to unknown reasons.",
                      reason: "Can not play due to unknown reasons.",
                    },
                    301: {
                      code: 301,
                      message: "Fetching process aborted by user.",
                      reason: "Fetching process aborted by user.",
                    },
                    302: {
                      code: 302,
                      message:
                        "Some of the media could not be downloaded due to a network error.",
                      reason: "Error occurred when downloading.",
                    },
                    303: {
                      code: 303,
                      message:
                        "Unable to load media. This may be due to a server or network error, or due to an unsupported format.",
                      reason: "Error occurred when decoding.",
                    },
                    304: {
                      code: 304,
                      message:
                        "Media playback has been canceled. It looks like your media is corrupted or your browser does not support the features your media uses.",
                      reason: "Media playback not supported.",
                    },
                    305: {
                      code: 305,
                      message: "Can not load captions due to unknown reasons.",
                      reason: "Can not load captions due to unknown reasons.",
                    },
                    306: {
                      code: 306,
                      message:
                        "Unable to load media. This may be due to a server or network error, or due to an unsupported format.",
                      reason:
                        "The server cannot or will not process the request.",
                    },
                    307: {
                      code: 307,
                      message:
                        "Unable to load media. This may be due to a server or network error, or due to an unsupported format.",
                      reason: "The server refused the request.",
                    },
                    308: {
                      code: 308,
                      message:
                        "Unable to load media. This may be due to a server or network error, or due to an unsupported format.",
                      reason: "The server do not accept the request.",
                    },
                    501: {
                      code: 501,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebSocket connection failed.",
                    },
                    502: {
                      code: 502,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebRTC addIceCandidate failed.",
                    },
                    503: {
                      code: 503,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebRTC setRemoteDescription failed.",
                    },
                    504: {
                      code: 504,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebRTC peer createOffer failed.",
                    },
                    505: {
                      code: 505,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebRTC setLocalDescription failed.",
                    },
                    506: {
                      code: 506,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "WebRTC internal error.",
                    },
                    510: {
                      code: 510,
                      message:
                        "Network connection is unstable. Check the network connection.",
                      reason: "Network is slow.",
                    },
                    511: {
                      code: 511,
                      message:
                        "Connection with low-latency(OME) terminated unexpectedly.",
                      reason: "Unexpected end of connection.",
                    },
                    512: {
                      code: 512,
                      message:
                        "Connection with low-latency(OME) server failed.",
                      reason: "Connection timeout.",
                    },
                  },
                },
              },
              {
                lang: "ko",
                ui: {
                  context: "오븐플레이어에 관하여",
                  controls: {
                    live: "라이브",
                    low_latency_live: "초저지연 라이브",
                    low_latency_p2p: "초저지연 P2P",
                  },
                  playlist: "플레이리스트",
                  setting: {
                    title: "설정",
                    speed: "재생 속도",
                    speedUnit: "x",
                    source: "소스",
                    quality: "품질",
                    caption: "자막",
                    display: "표시",
                  },
                },
                api: {
                  message: { muted_play: "눌러서 소리 켜기" },
                  error: {
                    100: {
                      code: 100,
                      message: "알 수 없는 이유로 로드 할 수 없습니다.",
                      reason: "알 수 없는 이유로 로드 할 수 없습니다.",
                    },
                    101: {
                      code: 101,
                      message:
                        "지원되는 미디어를 찾지 못해 로드 할 수 없습니다.",
                      reason: "Can not load due to playable media not found.",
                    },
                    102: {
                      code: 102,
                      message:
                        "플레시 로드가 중단 되었습니다. </br><a href='http://www.adobe.com/go/getflashplayer' target='_self'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'></a>",
                      reason:
                        "It looks like not found swf or your environment is localhost.",
                    },
                    103: {
                      code: 103,
                      message:
                        "DashJS로 인해 로드 할 수 없습니다. 최신 dash.js를 사용해 주세요.",
                      reason: "dash.js version is old.",
                    },
                    104: {
                      code: 104,
                      message:
                        "Google IMA 라이브러리가 없어 로드 할 수 없습니다.",
                      reason: "Please check the google ima library.",
                    },
                    105: {
                      code: 105,
                      message: "DASH 초기화 중 오류가 발생했습니다.",
                      reason: "Error initializing DASH.",
                    },
                    106: {
                      code: 106,
                      message: "HLS 초기화 중 오류가 발생했습니다.",
                      reason: "Error initializing HLS.",
                    },
                    300: {
                      code: 300,
                      message: "알 수 없는 이유로 재생할 수 없습니다.",
                      reason: "Can not play due to unknown reasons.",
                    },
                    301: {
                      code: 301,
                      message: "사용자에 의한 프로세스 중단.",
                      reason: "Fetching process aborted by user.",
                    },
                    302: {
                      code: 302,
                      message:
                        "네트워크 오류로 인해 일부 미디어를 다운로드 할 수 없습니다.",
                      reason: "Error occurred when downloading.",
                    },
                    303: {
                      code: 303,
                      message:
                        "미디어를 로드 할 수 없습니다. 서버 또는 네트워크 오류 또는 지원되지 않는 형식으로 인해 발생할 수 있습니다.",
                      reason: "Error occurred when decoding.",
                    },
                    304: {
                      code: 304,
                      message:
                        "미디어 재생이 취소되었습니다. 미디어가 손상되었거나 브라우저가 미디어에서 사용하는 기능을 지원하지 않는 것 같습니다.",
                      reason: "Media playback not supported.",
                    },
                    305: {
                      code: 305,
                      message: "알 수 없는 이유로 자막을 로드 할 수 없습니다.",
                      reason: "Can not load captions due to unknown reasons.",
                    },
                    306: {
                      code: 306,
                      message:
                        "미디어를 로드 할 수 없습니다. 서버 또는 네트워크 오류 또는 지원되지 않는 형식으로 인해 발생할 수 있습니다.",
                      reason:
                        "The server cannot or will not process the request.",
                    },
                    307: {
                      code: 307,
                      message:
                        "미디어를 로드 할 수 없습니다. 서버 또는 네트워크 오류 또는 지원되지 않는 형식으로 인해 발생할 수 있습니다.",
                      reason: "The server refused the request.",
                    },
                    308: {
                      code: 308,
                      message:
                        "미디어를 로드 할 수 없습니다. 서버 또는 네트워크 오류 또는 지원되지 않는 형식으로 인해 발생할 수 있습니다.",
                      reason: "The server do not accept the request.",
                    },
                    501: {
                      code: 501,
                      message: "웹소켓 연결 실패",
                      reason: "WebSocket connection failed.",
                    },
                    502: {
                      code: 502,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "WebRTC addIceCandidate failed.",
                    },
                    503: {
                      code: 503,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "WebRTC setRemoteDescription failed.",
                    },
                    504: {
                      code: 504,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "WebRTC peer createOffer failed.",
                    },
                    505: {
                      code: 505,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "WebRTC setLocalDescription failed.",
                    },
                    506: {
                      code: 506,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "WebRTC internal error.",
                    },
                    510: {
                      code: 510,
                      message:
                        "네트워크 연결이 불안정합니다. 네트워크 연결을 확인하십시오.",
                      reason: "Network is slow.",
                    },
                    511: {
                      code: 511,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "Unexpected end of connection.",
                    },
                    512: {
                      code: 512,
                      message: "저지연(OME) 서버와 연결에 실패했습니다.",
                      reason: "Connection timeout.",
                    },
                  },
                },
              },
              {
                lang: "pl",
                ui: {
                  context: "O OvenPlayer",
                  controls: {
                    live: "Transmisja na żywo",
                    low_latency_live: "Transmisja z niskim opóźnieniem",
                    low_latency_p2p: "Transmisja z niskim opóźnieniem P2P",
                  },
                  playlist: "Playlista",
                  setting: {
                    title: "Ustawienia",
                    speed: "Prędkość",
                    speedUnit: "x",
                    source: "Źrodło",
                    quality: "Jakość",
                    caption: "Podtytuł",
                    display: "Wyświetlacz",
                  },
                },
                api: {
                  message: {
                    muted_play: "Naciśnij tutaj, aby aktywować dźwięk",
                  },
                  error: {
                    100: {
                      code: 100,
                      message: "Nie można załadować z nieznanego powodu.",
                      reason: "Can not load due to unknown reasons.",
                    },
                    101: {
                      code: 101,
                      message:
                        "Nie można załadować, ponieważ nie znaleziono multimediów, który można odtworzyć.",
                      reason: "Can not load due to playable media not found.",
                    },
                    102: {
                      code: 102,
                      message:
                        "Flash fetching process aborted. </br><a href='http://www.adobe.com/go/getflashplayer' target='_self'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'></a>",
                      reason:
                        "It looks like not found swf or your environment is localhost.",
                    },
                    103: {
                      code: 103,
                      message:
                        "Nie można załadować, ponieważ wersja dash.js jest za stara.",
                      reason: "dash.js version is old.",
                    },
                    104: {
                      code: 104,
                      message: "Can not load due to google ima for Ads. ",
                      reason: "Please check the google ima library.",
                    },
                    105: {
                      code: 105,
                      message: "Nie można załadować, nie znaleziono DASH.",
                      reason: "Error initializing DASH.",
                    },
                    106: {
                      code: 106,
                      message: "Nie można załadować, nie znaleziono hlsjs.",
                      reason: "Error initializing HLS",
                    },
                    300: {
                      code: 300,
                      message: "Nie można odtworzyć z nieznanego powodu.",
                      reason: "Can not play due to unknown reasons.",
                    },
                    301: {
                      code: 301,
                      message: "Proces pobierania przerwany przez użytkownika.",
                      reason: "Fetching process aborted by user.",
                    },
                    302: {
                      code: 302,
                      message:
                        "Nie udało się pobrać niektórych multimediów z powodu błędu sieci.",
                      reason: "Error occurred when downloading.",
                    },
                    303: {
                      code: 303,
                      message:
                        "Nie udało się załadować niektórych multimediów. Może być to spowodowane problemem z serwerem, siecią lub niewspieranym formatem.",
                      reason: "Error occurred when decoding.",
                    },
                    304: {
                      code: 304,
                      message:
                        "Odtwarzanie zostało anulowane. Wygląda na to, że plik jest uszkodzony lub Twoja przeglądarka nie obsługuje tego pliku.",
                      reason: "Media playback not supported.",
                    },
                    305: {
                      code: 305,
                      message: "Nie można wczytać napisów z nieznanego powodu.",
                      reason: "Can not load captions due to unknown reasons.",
                    },
                    306: {
                      code: 306,
                      message:
                        "Nie udało się załadować niektórych multimediów. Może być to spowodowane problemem z serwerem, siecią lub niewspieranym formatem.",
                      reason:
                        "The server cannot or will not process the request.",
                    },
                    307: {
                      code: 307,
                      message:
                        "Nie udało się załadować niektórych multimediów. Może być to spowodowane problemem z serwerem, siecią lub niewspieranym formatem.",
                      reason: "The server refused the request.",
                    },
                    308: {
                      code: 308,
                      message:
                        "Nie udało się załadować niektórych multimediów. Może być to spowodowane problemem z serwerem, siecią lub niewspieranym formatem.",
                      reason: "The server do not accept the request.",
                    },
                    501: {
                      code: 501,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebSocket connection failed.",
                    },
                    502: {
                      code: 502,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebRTC addIceCandidate failed.",
                    },
                    503: {
                      code: 503,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebRTC setRemoteDescription failed.",
                    },
                    504: {
                      code: 504,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebRTC peer createOffer failed.",
                    },
                    505: {
                      code: 505,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebRTC setLocalDescription failed.",
                    },
                    506: {
                      code: 506,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "WebRTC internal error.",
                    },
                    510: {
                      code: 510,
                      message:
                        "Połączenie sieciowe jest niestabilne. Sprawdź swoją sieć.",
                      reason: "Network is slow.",
                    },
                    511: {
                      code: 511,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nieoczekiwanie zakończone.",
                      reason: "Unexpected end of connection.",
                    },
                    512: {
                      code: 512,
                      message:
                        "Połączenie z serwerem niskiego opóźnienia (OME) nie powiodło się.",
                      reason: "Connection timeout.",
                    },
                  },
                },
              },
            ],
            Ye = function (e) {
              return "subtitles" === e || "captions" === e;
            },
            Ge = function (e) {
              var t = e,
                n = [],
                r = function (e, t, n) {
                  var r = 0,
                    o = e.length;
                  for (r = 0; r < o; r++) {
                    var i = e[r];
                    i.listener.apply(i.context || n, t);
                  }
                };
              return (
                (t.on = function (e, r, o) {
                  return (
                    (n[e] || (n[e] = [])).push({ listener: r, context: o }), t
                  );
                }),
                (t.trigger = function (e) {
                  if (!n) return !1;
                  var o = [].slice.call(arguments, 1),
                    i = n[e],
                    A = n.all;
                  i && r(i, o, t), A && r(A, arguments, t);
                }),
                (t.off = function (e, r, o) {
                  if (!n) return !1;
                  if (!e && !r && !o) return (n = []), t;
                  for (
                    var i = e ? [e] : Object.keys(n), A = 0, a = i.length;
                    A < a;
                    A++
                  ) {
                    e = i[A];
                    var s = n[e];
                    if (s) {
                      var l = (n[e] = []);
                      if (r || o)
                        for (var c = 0, u = s.length; c < u; c++) {
                          var f = s[c];
                          ((r &&
                            r !== f.listener &&
                            r !== f.listener.listener &&
                            r !== f.listener._listener) ||
                            (o && o !== f.context)) &&
                            l.push(f);
                        }
                      l.length || delete n[e];
                    }
                  }
                  return t;
                }),
                (t.once = function (e, n, r) {
                  var o = 0,
                    i = function r() {
                      o++ || (t.off(e, r), n.apply(t, arguments));
                    };
                  return (i._listener = n), t.on(e, i, r);
                }),
                t
              );
            },
            ze =
              (n(1001),
              function e(t) {
                var n = {},
                  r = null,
                  o = function (e, t) {
                    var n = e.querySelectorAll(t);
                    return n.length > 1 ? n : n[0];
                  };
                return (r =
                  i().isElement(t) ||
                  i().every(t, function (e) {
                    return i().isElement(e);
                  })
                    ? t
                    : "document" === t
                    ? document
                    : "window" === t
                    ? window
                    : o(document, t))
                  ? ((n.show = function () {
                      r.style.display = "block";
                    }),
                    (n.hide = function () {
                      r.style.display = "none";
                    }),
                    (n.addClass = function (e) {
                      r.classList
                        ? r.classList.add(e)
                        : -1 === r.className.split(" ").indexOf(e) &&
                          (r.className += " " + e);
                    }),
                    (n.after = function (e) {
                      r.insertAdjacentHTML("afterend", e);
                    }),
                    (n.append = function (e) {
                      r.appendChild(e);
                    }),
                    (n.before = function (e) {
                      r.insertAdjacentHTML("beforebegin", e);
                    }),
                    (n.children = function () {
                      return r.children || [];
                    }),
                    (n.contains = function (e) {
                      return r !== e && r.contains(e);
                    }),
                    (n.empty = function () {
                      r.innerHTML = "";
                    }),
                    (n.find = function (t) {
                      return e(o(r, t));
                    }),
                    (n.css = function (e, t) {
                      if (!t) return r.style[e];
                      r.length > 0
                        ? r.forEach(function (n) {
                            n.style[e] = t;
                          })
                        : (r.style[e] = t);
                    }),
                    (n.removeClass = function (e) {
                      r.classList
                        ? r.classList.remove(e)
                        : (r.className = r.className.replace(
                            new RegExp(
                              "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                              "gi"
                            ),
                            " "
                          ));
                    }),
                    (n.removeAttribute = function (e) {
                      r.removeAttribute(e);
                    }),
                    (n.text = function (e) {
                      if (void 0 === e) return r.textContent;
                      r.textContent = e;
                    }),
                    (n.html = function (e) {
                      r.innerHTML = e;
                    }),
                    (n.hasClass = function (e) {
                      return r.classList
                        ? r.classList.contains(e)
                        : new RegExp("(^| )" + e + "( |$)", "gi").test(r.name);
                    }),
                    (n.is = function (e) {
                      return r === e;
                    }),
                    (n.offset = function () {
                      var e = r.getBoundingClientRect();
                      return {
                        top: e.top + document.body.scrollTop,
                        left: e.left + document.body.scrollLeft,
                      };
                    }),
                    (n.width = function () {
                      return r.clientWidth;
                    }),
                    (n.height = function () {
                      return r.clientHeight;
                    }),
                    (n.attr = function (e) {
                      return r.getAttribute(e);
                    }),
                    (n.replace = function (e) {
                      r.replaceWith(e);
                    }),
                    (n.remove = function () {
                      r.length > 1
                        ? r.parentElement.removeChild(r)
                        : r.remove();
                    }),
                    (n.removeChild = function (e) {
                      if (e) r.removeChild(e);
                      else
                        for (; r.hasChildNodes(); ) r.removeChild(r.firstChild);
                    }),
                    (n.get = function () {
                      return r;
                    }),
                    (n.closest = function (t) {
                      r.closest = function (e) {
                        var t = r;
                        do {
                          if (t.matches(e)) return t;
                          t = t.parentElement || t.parentNode;
                        } while (null !== t && 1 === t.nodeType);
                        return null;
                      };
                      var n = r.closest(t);
                      return n ? e(n) : null;
                    }),
                    n)
                  : null;
              }),
            Ve = function (e, t) {
              if (e) return 0 == e.indexOf("rtmp:") || "rtmp" == t;
            },
            _e = function (e, t) {
              return (
                !!e &&
                (0 === e.indexOf("ws:") ||
                  0 === e.indexOf("wss:") ||
                  "webrtc" === t)
              );
            },
            He = function (e, t) {
              if (e)
                return (
                  "hls" === t ||
                  "m3u8" === t ||
                  "application/vnd.apple.mpegurl" === t ||
                  "m3u8" == a(e)
                );
            },
            Je = function (e, t) {
              if (e)
                return (
                  "mpd" === t ||
                  "dash" === t ||
                  "application/dash+xml" === t ||
                  "mpd" == a(e)
                );
            },
            Ze = function (e) {
              if (!e) return null;
              var t = null;
              if ("string" == typeof e) t = document.getElementById(e);
              else {
                if (!e.nodeType) return null;
                t = e;
              }
              return t;
            },
            Ke = function () {
              var e = {};
              OvenPlayerConsole.log("SupportChecker loaded.");
              var t = Y(),
                n = [
                  {
                    name: "html5",
                    checkSupport: function (e) {
                      var n = document.createElement("video");
                      if (!n.canPlayType) return !1;
                      var r = e.file,
                        o = e.type;
                      if (!o) return !1;
                      var i =
                        e.mimeType ||
                        {
                          aac: "audio/mp4",
                          mp4: "video/mp4",
                          f4v: "video/mp4",
                          m4v: "video/mp4",
                          mov: "video/mp4",
                          mp3: "audio/mpeg",
                          mpeg: "audio/mpeg",
                          ogv: "video/ogg",
                          ogg: "video/ogg",
                          oga: "video/ogg",
                          vorbis: "video/ogg",
                          webm: "video/webm",
                          f4a: "video/aac",
                          m3u8: "application/vnd.apple.mpegurl",
                          m3u: "application/vnd.apple.mpegurl",
                          hls: "application/vnd.apple.mpegurl",
                        }[o];
                      return !(
                        (He(r, o) &&
                          ("Microsoft Edge" === t.browser ||
                            "Android" === t.os)) ||
                        Ve(r, o) ||
                        _e(r, o) ||
                        !i ||
                        !n.canPlayType(i)
                      );
                    },
                  },
                  {
                    name: "webrtc",
                    checkSupport: function (e) {
                      if (!document.createElement("video").canPlayType)
                        return !1;
                      if (Ve(t, n)) return !1;
                      var t = e.file,
                        n = e.type;
                      return !!_e(t, n);
                    },
                  },
                  {
                    name: "dash",
                    checkSupport: function (e) {
                      var t = e.file,
                        n = e.type;
                      return (
                        !Ve(t, n) &&
                        !(
                          "function" !=
                            typeof (
                              window.MediaSource || window.WebKitMediaSource
                            ) || !Je(t, n)
                        )
                      );
                    },
                  },
                  {
                    name: "hls",
                    checkSupport: function (e) {
                      document.createElement("video");
                      var t,
                        n,
                        r,
                        o,
                        i = e.file,
                        A = e.type;
                      return (
                        !Ve(i, A) &&
                        ((t = (function () {
                          if ("undefined" != typeof window)
                            return (
                              window.MediaSource || window.WebKitMediaSource
                            );
                        })()),
                        (n = window.SourceBuffer || window.WebKitSourceBuffer),
                        (r =
                          t &&
                          "function" == typeof t.isTypeSupported &&
                          t.isTypeSupported(
                            'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
                          )),
                        (o =
                          !n ||
                          (n.prototype &&
                            "function" == typeof n.prototype.appendBuffer &&
                            "function" == typeof n.prototype.remove)),
                        !!r && !!o)
                      );
                    },
                  },
                  {
                    name: "rtmp",
                    checkSupport: function (e) {
                      var n = e.file,
                        r = e.type;
                      return !(
                        !Ve(n, r) ||
                        !(function () {
                          var e = !1;
                          if ("ActiveXObject" in window)
                            try {
                              e = !!new ActiveXObject(
                                "ShockwaveFlash.ShockwaveFlash"
                              );
                            } catch (t) {
                              e = !1;
                            }
                          else
                            e =
                              !!navigator.mimeTypes[
                                "application/x-shockwave-flash"
                              ];
                          return e;
                        })() ||
                        "Microsoft Edge" === t.browser ||
                        "Android" === t.os ||
                        "iOS" === t.os ||
                        "Safari" === t.browser
                      );
                    },
                  },
                ];
              return (
                (e.findProviderNameBySource = function (e) {
                  OvenPlayerConsole.log(
                    "SupportChecker : findProviderNameBySource()",
                    e
                  );
                  for (
                    var t = e === Object(e) ? e : {}, r = 0;
                    r < n.length;
                    r++
                  )
                    if (n[r].checkSupport(t)) return n[r].name;
                }),
                (e.findProviderNamesByPlaylist = function (t) {
                  OvenPlayerConsole.log(
                    "SupportChecker : findProviderNamesByPlaylist()",
                    t
                  );
                  var n = [],
                    r = t;
                  if (r && r.sources) {
                    for (var o = 0; o < r.sources.length; o++) {
                      var i = r.sources[o];
                      if (i) {
                        var A = e.findProviderNameBySource(i);
                        A && n.push(A);
                      }
                    }
                    return n;
                  }
                  return null;
                }),
                e
              );
            },
            Xe =
              "data:video/mp4;base64, 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",
            qe = function (e, t) {
              t && (t.setState(te), t.pause(), t.trigger(Ce, e));
            },
            $e = function (e, t) {
              var n = 0;
              if (e)
                if (-1 === t.getSourceIndex()) {
                  for (var r = 0; r < e.length; r++)
                    if (e[r].default) {
                      n = r;
                      break;
                    }
                } else n = t.getSourceIndex();
              return n;
            },
            et = function (e, t, n, r, o) {
              var i,
                A = "admanagerLoadingTimeout",
                a = "",
                s = "",
                l = {},
                c = !1,
                u = !1,
                f = { started: !1, active: !1, isVideoEnded: !1 },
                p = null,
                d = null,
                g = null,
                h = null,
                v = null,
                m = null,
                C = null,
                y = !1,
                b = !1,
                w = n.getBrowser(),
                E = "Android" === w.os || "iOS" === w.os;
              OvenPlayerConsole.log("IMA : started ", "isMobile : ", E, r);
              try {
                (a = google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED),
                  (s = google.ima.AdErrorEvent.Type.AD_ERROR),
                  google.ima.settings.setLocale(n.getLanguage()),
                  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                  (d = function (e) {
                    console.log(
                      e.getError().getVastErrorCode(),
                      e.getError().getMessage()
                    ),
                      (u = !0);
                    var n = e.getError().getInnerError();
                    n && console.log(n.getErrorCode(), n.getMessage()),
                      t.trigger(se, {
                        code: e.getError().getVastErrorCode(),
                        message: e.getError().getMessage(),
                      }),
                      (f.active = !1),
                      (f.started = !0),
                      t.play();
                  }),
                  (p = function (n) {
                    OvenPlayerConsole.log("IMA : OnManagerLoaded ");
                    var r = new google.ima.AdsRenderingSettings();
                    (r.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                      v &&
                        (OvenPlayerConsole.log("IMA : destroy adsManager----"),
                        m.destroy(),
                        (m = null),
                        v.destroy(),
                        (v = null)),
                      (v = n.getAdsManager(e, r)),
                      (m = (function (e, t, n, r) {
                        var o = {},
                          i = {},
                          A = null,
                          a = google.ima.AdEvent.Type.AD_BUFFERING,
                          s = google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                          l = google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                          c = google.ima.AdErrorEvent.Type.AD_ERROR,
                          u = google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                          f = google.ima.AdEvent.Type.CLICK,
                          p = google.ima.AdEvent.Type.SKIPPED,
                          d = google.ima.AdEvent.Type.COMPLETE,
                          g = google.ima.AdEvent.Type.FIRST_QUARTILE,
                          h = google.ima.AdEvent.Type.LOADED,
                          v = google.ima.AdEvent.Type.MIDPOINT,
                          m = google.ima.AdEvent.Type.PAUSED,
                          C = google.ima.AdEvent.Type.RESUMED,
                          y = google.ima.AdEvent.Type.STARTED,
                          b = google.ima.AdEvent.Type.USER_CLOSE,
                          w = google.ima.AdEvent.Type.THIRD_QUARTILE,
                          E = !1,
                          B = null;
                        return (
                          OvenPlayerConsole.log("IMA : Listener Created"),
                          (i[s] = function (e) {
                            OvenPlayerConsole.log("IMA LISTENER : ", e.type),
                              n.started && ((n.active = !0), t.pause());
                          }),
                          (i[l] = function (e) {
                            OvenPlayerConsole.log("IMA LISTENER : ", e.type),
                              (n.active = !1),
                              !n.started ||
                                (0 !== t.getPosition() && n.isVideoEnded) ||
                                t.play();
                          }),
                          (i[c] = function (e) {
                            (E = !0), r(e);
                          }),
                          (i[u] = function (e) {
                            OvenPlayerConsole.log("IMA LISTENER : ", e.type),
                              (E = !0),
                              n.isVideoEnded && t.setState(q);
                          }),
                          (i[f] = function (e) {
                            OvenPlayerConsole.log(e.type),
                              t.trigger(Ee, { type: "adclick" });
                          }),
                          (i[g] = function (e) {
                            OvenPlayerConsole.log(e.type);
                          }),
                          (i[a] = function (e) {
                            OvenPlayerConsole.log("AD_BUFFERING", e.type);
                          }),
                          (i[h] = function (n) {
                            OvenPlayerConsole.log(n.type);
                            var r = e.getRemainingTime(),
                              o = n.getAd();
                            t.trigger(oe, {
                              remaining: r,
                              isLinear: o.isLinear(),
                            });
                          }),
                          (i[v] = function (e) {
                            OvenPlayerConsole.log(e.type);
                          }),
                          (i[m] = function (e) {
                            OvenPlayerConsole.log(e.type), t.setState(Ae);
                          }),
                          (i[C] = function (e) {
                            OvenPlayerConsole.log(e.type), t.setState(ie);
                          }),
                          (i[y] = function (r) {
                            OvenPlayerConsole.log(r.type);
                            var o = r.getAd();
                            B = o;
                            var i = {
                              isLinear: o.isLinear(),
                              duration: o.getDuration(),
                              skipTimeOffset: o.getSkipTimeOffset(),
                            };
                            t.trigger(Ie, i),
                              o.isLinear()
                                ? (t.setState(ie),
                                  (n.started = !0),
                                  (A = setInterval(function () {
                                    var n = e.getRemainingTime(),
                                      r = o.getDuration();
                                    t.trigger(Se, {
                                      duration: r,
                                      skipTimeOffset: o.getSkipTimeOffset(),
                                      remaining: n,
                                      position: r - n,
                                      skippable: e.getAdSkippableState(),
                                    });
                                  }, 300)))
                                : t.play();
                          }),
                          (i[d] = function (e) {
                            OvenPlayerConsole.log(e.type),
                              e.getAd().isLinear() && clearInterval(A),
                              t.trigger(ae);
                          }),
                          (i[p] = function (e) {
                            OvenPlayerConsole.log(e.type),
                              e.getAd().isLinear() && clearInterval(A),
                              t.trigger(ae);
                          }),
                          (i[b] = function (e) {
                            OvenPlayerConsole.log(e.type),
                              e.getAd().isLinear() && clearInterval(A),
                              t.trigger(ae);
                          }),
                          (i[w] = function (e) {
                            OvenPlayerConsole.log(e.type);
                          }),
                          Object.keys(i).forEach(function (t) {
                            e.removeEventListener(t, i[t]),
                              e.addEventListener(t, i[t]);
                          }),
                          (o.setAdCompleteCallback = function (e) {}),
                          (o.isAllAdComplete = function () {
                            return E;
                          }),
                          (o.isLinearAd = function () {
                            return !B || B.isLinear();
                          }),
                          (o.destroy = function () {
                            OvenPlayerConsole.log(
                              "IMAEventListener : destroy()"
                            ),
                              Object.keys(i).forEach(function (t) {
                                e.removeEventListener(t, i[t]);
                              });
                          }),
                          o
                        );
                      })(v, t, f, d)),
                      OvenPlayerConsole.log(
                        "IMA : created admanager and listner "
                      ),
                      (c = !0);
                  });
                var B =
                  ((i = document.createElement("div")).setAttribute(
                    "class",
                    "op-ads"
                  ),
                  i.setAttribute("id", "op-ads"),
                  n.getContainer().append(i),
                  i);
                (g = new google.ima.AdDisplayContainer(B, e)),
                  (h = new google.ima.AdsLoader(g)).addEventListener(a, p, !1),
                  h.addEventListener(s, d, !1),
                  OvenPlayerConsole.log("IMA : adDisplayContainer initialized"),
                  t.on(
                    Re,
                    function (e) {
                      v &&
                        (e.mute ? v.setVolume(0) : v.setVolume(e.volume / 100));
                    },
                    l
                  );
                var x = function () {
                  C &&
                    (OvenPlayerConsole.log(
                      "IMA : setADWillAutoPlay ",
                      "autoplayAllowed",
                      y,
                      "autoplayRequiresMuted",
                      b
                    ),
                    C.setAdWillAutoPlay(y),
                    C.setAdWillPlayMuted(b),
                    b &&
                      t.trigger(ke, {
                        message: "Please touch here to turn on the sound.",
                        timer: 1e4,
                        iconClass: "volume-mute",
                        onClickCallback: function () {
                          t.setMute(!1);
                        },
                      }));
                };
                return (
                  (l.isActive = function () {
                    return f.active;
                  }),
                  (l.started = function () {
                    return f.started;
                  }),
                  (l.play = function () {
                    return f.started
                      ? new Promise(function (e, t) {
                          try {
                            v.resume(), e();
                          } catch (e) {
                            t(e);
                          }
                        })
                      : (g.initialize(),
                        new Promise(function (o, i) {
                          var a = 0,
                            s = function e() {
                              a++,
                                c
                                  ? (OvenPlayerConsole.log("IMA : ad start!"),
                                    v.init(
                                      "100%",
                                      "100%",
                                      google.ima.ViewMode.NORMAL
                                    ),
                                    v.start(),
                                    (f.started = !0),
                                    o())
                                  : u
                                  ? i(new Error(A))
                                  : a < 150
                                  ? setTimeout(e, 100)
                                  : i(new Error(A));
                            };
                          (function () {
                            OvenPlayerConsole.log(
                              "IMA : checkAutoplaySupport() "
                            );
                            var n = document.createElement("video");
                            n.setAttribute("playsinline", "true"),
                              (n.src = Xe),
                              n.load(),
                              E && t.getName() !== ue && e.load();
                            var r = function (e, t) {
                              (y = e), (b = t), n.pause(), n.remove(), x();
                            };
                            return new Promise(function (e, t) {
                              if (n.play) {
                                var o = n.play();
                                void 0 !== o
                                  ? o
                                      .then(function () {
                                        OvenPlayerConsole.log(
                                          "IMA : auto play allowed."
                                        ),
                                          r(!0, !1),
                                          e();
                                      })
                                      .catch(function (t) {
                                        OvenPlayerConsole.log(
                                          "IMA : auto play failed",
                                          t.message
                                        ),
                                          r(!1, !1),
                                          e();
                                      })
                                  : (OvenPlayerConsole.log(
                                      "IMA : promise not support"
                                    ),
                                    r(!0, !1),
                                    e());
                              } else OvenPlayerConsole.log("IMA : !temporarySupportCheckVideo.play"), r(!0, !1), e();
                            });
                          })().then(function () {
                            n.isAutoStart() && !y
                              ? (OvenPlayerConsole.log(
                                  "IMA : autoplayAllowed : false"
                                ),
                                (f.started = !1),
                                i(new Error("autoplayNotAllowed")))
                              : ((c = !1),
                                OvenPlayerConsole.log(
                                  "IMA : initRequest() AutoPlay Support : ",
                                  "autoplayAllowed",
                                  y,
                                  "autoplayRequiresMuted",
                                  b
                                ),
                                ((C =
                                  new google.ima.AdsRequest()).forceNonLinearFullSlot =
                                  !1),
                                x(),
                                (C.adTagUrl = r),
                                h.requestAds(C),
                                OvenPlayerConsole.log(
                                  "IMA : requestAds Complete"
                                ),
                                s());
                          });
                        }));
                  }),
                  (l.pause = function () {
                    v.pause();
                  }),
                  (l.videoEndedCallback = function (e) {
                    !m || (!m.isAllAdComplete() && m.isLinearAd())
                      ? u
                        ? e()
                        : ((f.isVideoEnded = !0), h.contentComplete())
                      : e();
                  }),
                  (l.destroy = function () {
                    h &&
                      (h.removeEventListener(a, p),
                      h.removeEventListener(s, d)),
                      v && v.destroy(),
                      g && g.destroy(),
                      m && m.destroy();
                    var e = ze(n.getContainer()).find(".op-ads");
                    e && e.remove(), t.off(Re, null, l);
                  }),
                  l
                );
              } catch (e) {
                return null;
              }
            };
          function tt(e) {
            return (tt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function nt(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function rt(e, t, n) {
            return t && nt(e.prototype, t), n && nt(e, n), e;
          }
          function ot(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && it(e, t);
          }
          function it(e, t) {
            return (it =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function At(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = st(e);
              if (t) {
                var o = st(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return at(this, n);
            };
          }
          function at(e, t) {
            if (t && ("object" === tt(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          }
          function st(e) {
            return (st = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function lt(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          var ct = function e() {
              lt(this, e),
                (this.id = null),
                (this.sequence = null),
                (this.system = null),
                (this.title = null),
                (this.description = null),
                (this.advertiser = null),
                (this.pricing = null),
                (this.survey = null),
                (this.errorURLTemplates = []),
                (this.impressionURLTemplates = []),
                (this.creatives = []),
                (this.extensions = []);
            },
            ut = function e() {
              lt(this, e), (this.attributes = {}), (this.children = []);
            },
            ft = function e() {
              lt(this, e),
                (this.name = null),
                (this.value = null),
                (this.attributes = {});
            },
            pt = function e() {
              lt(this, e),
                (this.id = null),
                (this.width = 0),
                (this.height = 0),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.altText = null),
                (this.companionClickThroughURLTemplate = null),
                (this.companionClickTrackingURLTemplates = []),
                (this.trackingEvents = {});
            },
            dt = function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              lt(this, e),
                (this.id = t.id || null),
                (this.adId = t.adId || null),
                (this.sequence = t.sequence || null),
                (this.apiFramework = t.apiFramework || null),
                (this.trackingEvents = {});
            },
            gt = (function (e) {
              ot(n, e);
              var t = At(n);
              function n() {
                var e,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  lt(this, n),
                  ((e = t.call(this, r)).type = "companion"),
                  (e.variations = []),
                  e
                );
              }
              return n;
            })(dt);
          function ht(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = [];
            for (var r in (t.ASSETURI && (t.ASSETURI = vt(t.ASSETURI)),
            t.CONTENTPLAYHEAD && (t.CONTENTPLAYHEAD = vt(t.CONTENTPLAYHEAD)),
            t.ERRORCODE &&
              !/^[0-9]{3}$/.test(t.ERRORCODE) &&
              (t.ERRORCODE = 900),
            (t.CACHEBUSTING = mt(Math.round(1e8 * Math.random()).toString())),
            (t.TIMESTAMP = vt(new Date().toISOString())),
            (t.RANDOM = t.random = t.CACHEBUSTING),
            e)) {
              var o = e[r];
              if ("string" == typeof o) {
                for (var i in t) {
                  var A = t[i],
                    a = "[".concat(i, "]"),
                    s = "%%".concat(i, "%%");
                  o = (o = o.replace(a, A)).replace(s, A);
                }
                n.push(o);
              }
            }
            return n;
          }
          function vt(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
              return "%".concat(e.charCodeAt(0).toString(16));
            });
          }
          function mt(e) {
            return e.length < 8
              ? Ct(0, 8 - e.length, !1)
                  .map(function (e) {
                    return "0";
                  })
                  .join("") + e
              : e;
          }
          function Ct(e, t, n) {
            for (
              var r = [], o = e < t, i = n ? (o ? t + 1 : t - 1) : t, A = e;
              o ? A < i : A > i;
              o ? A++ : A--
            )
              r.push(A);
            return r;
          }
          var yt = {
              track: function (e, t) {
                ht(e, t).forEach(function (e) {
                  "undefined" != typeof window &&
                    null !== window &&
                    (new Image().src = e);
                });
              },
              resolveURLTemplates: ht,
              encodeURIComponentRFC3986: vt,
              leftpad: mt,
              range: Ct,
              isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
              },
              flatten: function e(t) {
                return t.reduce(function (t, n) {
                  return t.concat(Array.isArray(n) ? e(n) : n);
                }, []);
              },
            },
            bt = function (e, t) {
              var n = e.childNodes;
              for (var r in n) {
                var o = n[r];
                if (o.nodeName === t) return o;
              }
            },
            wt = function (e, t) {
              var n = [],
                r = e.childNodes;
              for (var o in r) {
                var i = r[o];
                i.nodeName === t && n.push(i);
              }
              return n;
            },
            Et = function (e, t) {
              if (!t) return e;
              if (0 === e.indexOf("//")) {
                var n = location.protocol;
                return "".concat(n).concat(e);
              }
              return -1 === e.indexOf("://")
                ? "".concat(t.slice(0, t.lastIndexOf("/")), "/").concat(e)
                : e;
            },
            Bt = function (e) {
              return -1 !== ["true", "TRUE", "1"].indexOf(e);
            },
            xt = function (e) {
              return e && (e.textContent || e.text || "").trim();
            },
            kt = function (e, t, n) {
              var r = t.getAttribute(e);
              r && n.setAttribute(e, r);
            },
            It = function (e) {
              if (null == e) return -1;
              if (yt.isNumeric(e)) return parseInt(e);
              var t = e.split(":");
              if (3 !== t.length) return -1;
              var n = t[2].split("."),
                r = parseInt(n[0]);
              2 === n.length && (r += parseFloat("0.".concat(n[1])));
              var o = parseInt(60 * t[1]),
                i = parseInt(60 * t[0] * 60);
              return isNaN(i) || isNaN(o) || isNaN(r) || o > 3600 || r > 60
                ? -1
                : i + o + r;
            },
            St = function (e) {
              var t = [],
                n = null;
              return (
                e.forEach(function (r, o) {
                  if (
                    (r.sequence && (r.sequence = parseInt(r.sequence, 10)),
                    r.sequence > 1)
                  ) {
                    var i = e[o - 1];
                    if (i && i.sequence === r.sequence - 1)
                      return void (n && n.push(r));
                    delete r.sequence;
                  }
                  (n = [r]), t.push(n);
                }),
                t
              );
            },
            Tt = function (e, t) {
              (e.errorURLTemplates = t.errorURLTemplates.concat(
                e.errorURLTemplates
              )),
                (e.impressionURLTemplates = t.impressionURLTemplates.concat(
                  e.impressionURLTemplates
                )),
                (e.extensions = t.extensions.concat(e.extensions)),
                e.creatives.forEach(function (e) {
                  if (t.trackingEvents && t.trackingEvents[e.type])
                    for (var n in t.trackingEvents[e.type]) {
                      var r = t.trackingEvents[e.type][n];
                      e.trackingEvents[n] || (e.trackingEvents[n] = []),
                        (e.trackingEvents[n] = e.trackingEvents[n].concat(r));
                    }
                }),
                t.videoClickTrackingURLTemplates &&
                  t.videoClickTrackingURLTemplates.length &&
                  e.creatives.forEach(function (e) {
                    "linear" === e.type &&
                      (e.videoClickTrackingURLTemplates =
                        e.videoClickTrackingURLTemplates.concat(
                          t.videoClickTrackingURLTemplates
                        ));
                  }),
                t.videoCustomClickURLTemplates &&
                  t.videoCustomClickURLTemplates.length &&
                  e.creatives.forEach(function (e) {
                    "linear" === e.type &&
                      (e.videoCustomClickURLTemplates =
                        e.videoCustomClickURLTemplates.concat(
                          t.videoCustomClickURLTemplates
                        ));
                  }),
                t.videoClickThroughURLTemplate &&
                  e.creatives.forEach(function (e) {
                    "linear" === e.type &&
                      null == e.videoClickThroughURLTemplate &&
                      (e.videoClickThroughURLTemplate =
                        t.videoClickThroughURLTemplate);
                  });
            };
          function Lt(e, t) {
            var n = new gt(t);
            return (
              wt(e, "Companion").forEach(function (e) {
                var t = new pt();
                (t.id = e.getAttribute("id") || null),
                  (t.width = e.getAttribute("width")),
                  (t.height = e.getAttribute("height")),
                  (t.companionClickTrackingURLTemplates = []),
                  wt(e, "HTMLResource").forEach(function (e) {
                    (t.type = e.getAttribute("creativeType") || "text/html"),
                      (t.htmlResource = xt(e));
                  }),
                  wt(e, "IFrameResource").forEach(function (e) {
                    (t.type = e.getAttribute("creativeType") || 0),
                      (t.iframeResource = xt(e));
                  }),
                  wt(e, "StaticResource").forEach(function (n) {
                    (t.type = n.getAttribute("creativeType") || 0),
                      wt(e, "AltText").forEach(function (e) {
                        t.altText = xt(e);
                      }),
                      (t.staticResource = xt(n));
                  }),
                  wt(e, "TrackingEvents").forEach(function (e) {
                    wt(e, "Tracking").forEach(function (e) {
                      var n = e.getAttribute("event"),
                        r = xt(e);
                      n &&
                        r &&
                        (null == t.trackingEvents[n] &&
                          (t.trackingEvents[n] = []),
                        t.trackingEvents[n].push(r));
                    });
                  }),
                  wt(e, "CompanionClickTracking").forEach(function (e) {
                    t.companionClickTrackingURLTemplates.push(xt(e));
                  }),
                  (t.companionClickThroughURLTemplate = xt(
                    bt(e, "CompanionClickThrough")
                  )),
                  (t.companionClickTrackingURLTemplate = xt(
                    bt(e, "CompanionClickTracking")
                  )),
                  n.variations.push(t);
              }),
              n
            );
          }
          var Rt = (function (e) {
              ot(n, e);
              var t = At(n);
              function n() {
                var e,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  lt(this, n),
                  ((e = t.call(this, r)).type = "linear"),
                  (e.duration = 0),
                  (e.skipDelay = null),
                  (e.mediaFiles = []),
                  (e.videoClickThroughURLTemplate = null),
                  (e.videoClickTrackingURLTemplates = []),
                  (e.videoCustomClickURLTemplates = []),
                  (e.adParameters = null),
                  (e.icons = []),
                  e
                );
              }
              return n;
            })(dt),
            Qt = function e() {
              lt(this, e),
                (this.program = null),
                (this.height = 0),
                (this.width = 0),
                (this.xPosition = 0),
                (this.yPosition = 0),
                (this.apiFramework = null),
                (this.offset = null),
                (this.duration = 0),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.iconClickThroughURLTemplate = null),
                (this.iconClickTrackingURLTemplates = []),
                (this.iconViewTrackingURLTemplate = null);
            },
            Mt = function e() {
              lt(this, e),
                (this.id = null),
                (this.fileURL = null),
                (this.deliveryType = "progressive"),
                (this.mimeType = null),
                (this.codec = null),
                (this.bitrate = 0),
                (this.minBitrate = 0),
                (this.maxBitrate = 0),
                (this.width = 0),
                (this.height = 0),
                (this.apiFramework = null),
                (this.scalable = null),
                (this.maintainAspectRatio = null);
            };
          function Ot(e, t) {
            var n,
              r = new Rt(t);
            r.duration = It(xt(bt(e, "Duration")));
            var o = e.getAttribute("skipoffset");
            if (null == o) r.skipDelay = null;
            else if ("%" === o.charAt(o.length - 1) && -1 !== r.duration) {
              var i = parseInt(o, 10);
              r.skipDelay = r.duration * (i / 100);
            } else r.skipDelay = It(o);
            var A = bt(e, "VideoClicks");
            A &&
              ((r.videoClickThroughURLTemplate = xt(bt(A, "ClickThrough"))),
              wt(A, "ClickTracking").forEach(function (e) {
                r.videoClickTrackingURLTemplates.push(xt(e));
              }),
              wt(A, "CustomClick").forEach(function (e) {
                r.videoCustomClickURLTemplates.push(xt(e));
              }));
            var a = bt(e, "AdParameters");
            a && (r.adParameters = xt(a)),
              wt(e, "TrackingEvents").forEach(function (e) {
                wt(e, "Tracking").forEach(function (e) {
                  var t = e.getAttribute("event"),
                    o = xt(e);
                  if (t && o) {
                    if ("progress" === t) {
                      if (!(n = e.getAttribute("offset"))) return;
                      t =
                        "%" === n.charAt(n.length - 1)
                          ? "progress-".concat(n)
                          : "progress-".concat(Math.round(It(n)));
                    }
                    null == r.trackingEvents[t] && (r.trackingEvents[t] = []),
                      r.trackingEvents[t].push(o);
                  }
                });
              }),
              wt(e, "MediaFiles").forEach(function (e) {
                wt(e, "MediaFile").forEach(function (e) {
                  var t = new Mt();
                  (t.id = e.getAttribute("id")),
                    (t.fileURL = xt(e)),
                    (t.deliveryType = e.getAttribute("delivery")),
                    (t.codec = e.getAttribute("codec")),
                    (t.mimeType = e.getAttribute("type")),
                    (t.apiFramework = e.getAttribute("apiFramework")),
                    (t.bitrate = parseInt(e.getAttribute("bitrate") || 0)),
                    (t.minBitrate = parseInt(
                      e.getAttribute("minBitrate") || 0
                    )),
                    (t.maxBitrate = parseInt(
                      e.getAttribute("maxBitrate") || 0
                    )),
                    (t.width = parseInt(e.getAttribute("width") || 0)),
                    (t.height = parseInt(e.getAttribute("height") || 0));
                  var n = e.getAttribute("scalable");
                  n &&
                    "string" == typeof n &&
                    ("true" === (n = n.toLowerCase())
                      ? (t.scalable = !0)
                      : "false" === n && (t.scalable = !1));
                  var o = e.getAttribute("maintainAspectRatio");
                  o &&
                    "string" == typeof o &&
                    ("true" === (o = o.toLowerCase())
                      ? (t.maintainAspectRatio = !0)
                      : "false" === o && (t.maintainAspectRatio = !1)),
                    r.mediaFiles.push(t);
                });
              });
            var s = bt(e, "Icons");
            return (
              s &&
                wt(s, "Icon").forEach(function (e) {
                  var t = new Qt();
                  (t.program = e.getAttribute("program")),
                    (t.height = parseInt(e.getAttribute("height") || 0)),
                    (t.width = parseInt(e.getAttribute("width") || 0)),
                    (t.xPosition = (function (e) {
                      return -1 !== ["left", "right"].indexOf(e)
                        ? e
                        : parseInt(e || 0);
                    })(e.getAttribute("xPosition"))),
                    (t.yPosition = (function (e) {
                      return -1 !== ["top", "bottom"].indexOf(e)
                        ? e
                        : parseInt(e || 0);
                    })(e.getAttribute("yPosition"))),
                    (t.apiFramework = e.getAttribute("apiFramework")),
                    (t.offset = It(e.getAttribute("offset"))),
                    (t.duration = It(e.getAttribute("duration"))),
                    wt(e, "HTMLResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || "text/html"),
                        (t.htmlResource = xt(e));
                    }),
                    wt(e, "IFrameResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.iframeResource = xt(e));
                    }),
                    wt(e, "StaticResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.staticResource = xt(e));
                    });
                  var n = bt(e, "IconClicks");
                  n &&
                    ((t.iconClickThroughURLTemplate = xt(
                      bt(n, "IconClickThrough")
                    )),
                    wt(n, "IconClickTracking").forEach(function (e) {
                      t.iconClickTrackingURLTemplates.push(xt(e));
                    })),
                    (t.iconViewTrackingURLTemplate = xt(
                      bt(e, "IconViewTracking")
                    )),
                    r.icons.push(t);
                }),
              r
            );
          }
          var Dt,
            Ft = (function (e) {
              ot(n, e);
              var t = At(n);
              function n() {
                var e,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  lt(this, n),
                  ((e = t.call(this, r)).type = "nonlinear"),
                  (e.variations = []),
                  e
                );
              }
              return n;
            })(dt),
            Pt = function e() {
              lt(this, e),
                (this.id = null),
                (this.width = 0),
                (this.height = 0),
                (this.expandedWidth = 0),
                (this.expandedHeight = 0),
                (this.scalable = !0),
                (this.maintainAspectRatio = !0),
                (this.minSuggestedDuration = 0),
                (this.apiFramework = "static"),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.nonlinearClickThroughURLTemplate = null),
                (this.nonlinearClickTrackingURLTemplates = []),
                (this.adParameters = null);
            };
          function Ut(e, t) {
            var n = new Ft(t);
            return (
              wt(e, "TrackingEvents").forEach(function (e) {
                var t, r;
                wt(e, "Tracking").forEach(function (e) {
                  (t = e.getAttribute("event")),
                    (r = xt(e)),
                    t &&
                      r &&
                      (null == n.trackingEvents[t] &&
                        (n.trackingEvents[t] = []),
                      n.trackingEvents[t].push(r));
                });
              }),
              wt(e, "NonLinear").forEach(function (e) {
                var t = new Pt();
                (t.id = e.getAttribute("id") || null),
                  (t.width = e.getAttribute("width")),
                  (t.height = e.getAttribute("height")),
                  (t.expandedWidth = e.getAttribute("expandedWidth")),
                  (t.expandedHeight = e.getAttribute("expandedHeight")),
                  (t.scalable = Bt(e.getAttribute("scalable"))),
                  (t.maintainAspectRatio = Bt(
                    e.getAttribute("maintainAspectRatio")
                  )),
                  (t.minSuggestedDuration = It(
                    e.getAttribute("minSuggestedDuration")
                  )),
                  (t.apiFramework = e.getAttribute("apiFramework")),
                  wt(e, "HTMLResource").forEach(function (e) {
                    (t.type = e.getAttribute("creativeType") || "text/html"),
                      (t.htmlResource = xt(e));
                  }),
                  wt(e, "IFrameResource").forEach(function (e) {
                    (t.type = e.getAttribute("creativeType") || 0),
                      (t.iframeResource = xt(e));
                  }),
                  wt(e, "StaticResource").forEach(function (e) {
                    (t.type = e.getAttribute("creativeType") || 0),
                      (t.staticResource = xt(e));
                  });
                var r = bt(e, "AdParameters");
                r && (t.adParameters = xt(r)),
                  (t.nonlinearClickThroughURLTemplate = xt(
                    bt(e, "NonLinearClickThrough")
                  )),
                  wt(e, "NonLinearClickTracking").forEach(function (e) {
                    t.nonlinearClickTrackingURLTemplates.push(xt(e));
                  }),
                  n.variations.push(t);
              }),
              n
            );
          }
          function Nt(e) {
            var t = e.childNodes;
            for (var n in t) {
              var r = t[n];
              if (-1 !== ["Wrapper", "InLine"].indexOf(r.nodeName)) {
                if (
                  (kt("id", e, r),
                  kt("sequence", e, r),
                  "Wrapper" === r.nodeName)
                )
                  return jt(r);
                if ("InLine" === r.nodeName) return Wt(r);
              }
            }
          }
          function Wt(e) {
            var t = e.childNodes,
              n = new ct();
            for (var r in ((n.id = e.getAttribute("id") || null),
            (n.sequence = e.getAttribute("sequence") || null),
            t)) {
              var o = t[r];
              switch (o.nodeName) {
                case "Error":
                  n.errorURLTemplates.push(xt(o));
                  break;
                case "Impression":
                  n.impressionURLTemplates.push(xt(o));
                  break;
                case "Creatives":
                  wt(o, "Creative").forEach(function (e) {
                    var t = {
                      id: e.getAttribute("id") || null,
                      adId: Gt(e),
                      sequence: e.getAttribute("sequence") || null,
                      apiFramework: e.getAttribute("apiFramework") || null,
                    };
                    for (var r in e.childNodes) {
                      var o = e.childNodes[r];
                      switch (o.nodeName) {
                        case "Linear":
                          var i = Ot(o, t);
                          i && n.creatives.push(i);
                          break;
                        case "NonLinearAds":
                          var A = Ut(o, t);
                          A && n.creatives.push(A);
                          break;
                        case "CompanionAds":
                          var a = Lt(o, t);
                          a && n.creatives.push(a);
                      }
                    }
                  });
                  break;
                case "Extensions":
                  Yt(n.extensions, wt(o, "Extension"));
                  break;
                case "AdSystem":
                  n.system = {
                    value: xt(o),
                    version: o.getAttribute("version") || null,
                  };
                  break;
                case "AdTitle":
                  n.title = xt(o);
                  break;
                case "Description":
                  n.description = xt(o);
                  break;
                case "Advertiser":
                  n.advertiser = xt(o);
                  break;
                case "Pricing":
                  n.pricing = {
                    value: xt(o),
                    model: o.getAttribute("model") || null,
                    currency: o.getAttribute("currency") || null,
                  };
                  break;
                case "Survey":
                  n.survey = xt(o);
              }
            }
            return n;
          }
          function jt(e) {
            var t = Wt(e),
              n = bt(e, "VASTAdTagURI");
            if (
              (n
                ? (t.nextWrapperURL = xt(n))
                : (n = bt(e, "VASTAdTagURL")) &&
                  (t.nextWrapperURL = xt(bt(n, "URL"))),
              t.creatives.forEach(function (e) {
                if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
                  if (e.trackingEvents) {
                    t.trackingEvents || (t.trackingEvents = {}),
                      t.trackingEvents[e.type] ||
                        (t.trackingEvents[e.type] = {});
                    var n = function (n) {
                      var r = e.trackingEvents[n];
                      t.trackingEvents[e.type][n] ||
                        (t.trackingEvents[e.type][n] = []),
                        r.forEach(function (r) {
                          t.trackingEvents[e.type][n].push(r);
                        });
                    };
                    for (var r in e.trackingEvents) n(r);
                  }
                  e.videoClickTrackingURLTemplates &&
                    (t.videoClickTrackingURLTemplates ||
                      (t.videoClickTrackingURLTemplates = []),
                    e.videoClickTrackingURLTemplates.forEach(function (e) {
                      t.videoClickTrackingURLTemplates.push(e);
                    })),
                    e.videoClickThroughURLTemplate &&
                      (t.videoClickThroughURLTemplate =
                        e.videoClickThroughURLTemplate),
                    e.videoCustomClickURLTemplates &&
                      (t.videoCustomClickURLTemplates ||
                        (t.videoCustomClickURLTemplates = []),
                      e.videoCustomClickURLTemplates.forEach(function (e) {
                        t.videoCustomClickURLTemplates.push(e);
                      }));
                }
              }),
              t.nextWrapperURL)
            )
              return t;
          }
          function Yt(e, t) {
            t.forEach(function (t) {
              var n = new ut(),
                r = t.attributes,
                o = t.childNodes;
              if (t.attributes)
                for (var i in r) {
                  var A = r[i];
                  A.nodeName &&
                    A.nodeValue &&
                    (n.attributes[A.nodeName] = A.nodeValue);
                }
              for (var a in o) {
                var s = o[a],
                  l = xt(s);
                if ("#comment" !== s.nodeName && "" !== l) {
                  var c = new ft();
                  if (((c.name = s.nodeName), (c.value = l), s.attributes)) {
                    var u = s.attributes;
                    for (var f in u) {
                      var p = u[f];
                      c.attributes[p.nodeName] = p.nodeValue;
                    }
                  }
                  n.children.push(c);
                }
              }
              e.push(n);
            });
          }
          function Gt(e) {
            return (
              e.getAttribute("AdID") ||
              e.getAttribute("adID") ||
              e.getAttribute("adId") ||
              null
            );
          }
          function zt() {}
          function Vt() {
            Vt.init.call(this);
          }
          function _t(e) {
            return void 0 === e._maxListeners
              ? Vt.defaultMaxListeners
              : e._maxListeners;
          }
          function Ht(e, t, n) {
            if (t) e.call(n);
            else
              for (var r = e.length, o = tn(e, r), i = 0; i < r; ++i)
                o[i].call(n);
          }
          function Jt(e, t, n, r) {
            if (t) e.call(n, r);
            else
              for (var o = e.length, i = tn(e, o), A = 0; A < o; ++A)
                i[A].call(n, r);
          }
          function Zt(e, t, n, r, o) {
            if (t) e.call(n, r, o);
            else
              for (var i = e.length, A = tn(e, i), a = 0; a < i; ++a)
                A[a].call(n, r, o);
          }
          function Kt(e, t, n, r, o, i) {
            if (t) e.call(n, r, o, i);
            else
              for (var A = e.length, a = tn(e, A), s = 0; s < A; ++s)
                a[s].call(n, r, o, i);
          }
          function Xt(e, t, n, r) {
            if (t) e.apply(n, r);
            else
              for (var o = e.length, i = tn(e, o), A = 0; A < o; ++A)
                i[A].apply(n, r);
          }
          function qt(e, t, n, r) {
            var o, i, A;
            if ("function" != typeof n)
              throw new TypeError('"listener" argument must be a function');
            if (
              ((i = e._events)
                ? (i.newListener &&
                    (e.emit("newListener", t, n.listener ? n.listener : n),
                    (i = e._events)),
                  (A = i[t]))
                : ((i = e._events = new zt()), (e._eventsCount = 0)),
              A)
            ) {
              if (
                ("function" == typeof A
                  ? (A = i[t] = r ? [n, A] : [A, n])
                  : r
                  ? A.unshift(n)
                  : A.push(n),
                !A.warned && (o = _t(e)) && o > 0 && A.length > o)
              ) {
                A.warned = !0;
                var a = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    A.length +
                    " " +
                    t +
                    " listeners added. Use emitter.setMaxListeners() to increase limit"
                );
                (a.name = "MaxListenersExceededWarning"),
                  (a.emitter = e),
                  (a.type = t),
                  (a.count = A.length),
                  (function (e) {
                    "function" == typeof console.warn
                      ? console.warn(e)
                      : console.log(e);
                  })(a);
              }
            } else (A = i[t] = n), ++e._eventsCount;
            return e;
          }
          function $t(e, t, n) {
            var r = !1;
            function o() {
              e.removeListener(t, o), r || ((r = !0), n.apply(e, arguments));
            }
            return (o.listener = n), o;
          }
          function en(e) {
            var t = this._events;
            if (t) {
              var n = t[e];
              if ("function" == typeof n) return 1;
              if (n) return n.length;
            }
            return 0;
          }
          function tn(e, t) {
            for (var n = new Array(t); t--; ) n[t] = e[t];
            return n;
          }
          (zt.prototype = Object.create(null)),
            (Vt.EventEmitter = Vt),
            (Vt.usingDomains = !1),
            (Vt.prototype.domain = void 0),
            (Vt.prototype._events = void 0),
            (Vt.prototype._maxListeners = void 0),
            (Vt.defaultMaxListeners = 10),
            (Vt.init = function () {
              (this.domain = null),
                Vt.usingDomains &&
                  (!Dt.active ||
                    this instanceof Dt.Domain ||
                    (this.domain = Dt.active)),
                (this._events &&
                  this._events !== Object.getPrototypeOf(this)._events) ||
                  ((this._events = new zt()), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (Vt.prototype.setMaxListeners = function (e) {
              if ("number" != typeof e || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
              return (this._maxListeners = e), this;
            }),
            (Vt.prototype.getMaxListeners = function () {
              return _t(this);
            }),
            (Vt.prototype.emit = function (e) {
              var t,
                n,
                r,
                o,
                i,
                A,
                a,
                s = "error" === e;
              if ((A = this._events)) s = s && null == A.error;
              else if (!s) return !1;
              if (((a = this.domain), s)) {
                if (((t = arguments[1]), !a)) {
                  if (t instanceof Error) throw t;
                  var l = new Error(
                    'Uncaught, unspecified "error" event. (' + t + ")"
                  );
                  throw ((l.context = t), l);
                }
                return (
                  t || (t = new Error('Uncaught, unspecified "error" event')),
                  (t.domainEmitter = this),
                  (t.domain = a),
                  (t.domainThrown = !1),
                  a.emit("error", t),
                  !1
                );
              }
              if (!(n = A[e])) return !1;
              var c = "function" == typeof n;
              switch ((r = arguments.length)) {
                case 1:
                  Ht(n, c, this);
                  break;
                case 2:
                  Jt(n, c, this, arguments[1]);
                  break;
                case 3:
                  Zt(n, c, this, arguments[1], arguments[2]);
                  break;
                case 4:
                  Kt(n, c, this, arguments[1], arguments[2], arguments[3]);
                  break;
                default:
                  for (o = new Array(r - 1), i = 1; i < r; i++)
                    o[i - 1] = arguments[i];
                  Xt(n, c, this, o);
              }
              return !0;
            }),
            (Vt.prototype.addListener = function (e, t) {
              return qt(this, e, t, !1);
            }),
            (Vt.prototype.on = Vt.prototype.addListener),
            (Vt.prototype.prependListener = function (e, t) {
              return qt(this, e, t, !0);
            }),
            (Vt.prototype.once = function (e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.on(e, $t(this, e, t)), this;
            }),
            (Vt.prototype.prependOnceListener = function (e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.prependListener(e, $t(this, e, t)), this;
            }),
            (Vt.prototype.removeListener = function (e, t) {
              var n, r, o, i, A;
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              if (!(r = this._events)) return this;
              if (!(n = r[e])) return this;
              if (n === t || (n.listener && n.listener === t))
                0 == --this._eventsCount
                  ? (this._events = new zt())
                  : (delete r[e],
                    r.removeListener &&
                      this.emit("removeListener", e, n.listener || t));
              else if ("function" != typeof n) {
                for (o = -1, i = n.length; i-- > 0; )
                  if (n[i] === t || (n[i].listener && n[i].listener === t)) {
                    (A = n[i].listener), (o = i);
                    break;
                  }
                if (o < 0) return this;
                if (1 === n.length) {
                  if (((n[0] = void 0), 0 == --this._eventsCount))
                    return (this._events = new zt()), this;
                  delete r[e];
                } else
                  !(function (e, t) {
                    for (
                      var n = t, r = n + 1, o = e.length;
                      r < o;
                      n += 1, r += 1
                    )
                      e[n] = e[r];
                    e.pop();
                  })(n, o);
                r.removeListener && this.emit("removeListener", e, A || t);
              }
              return this;
            }),
            (Vt.prototype.removeAllListeners = function (e) {
              var t, n;
              if (!(n = this._events)) return this;
              if (!n.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = new zt()), (this._eventsCount = 0))
                    : n[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = new zt())
                        : delete n[e]),
                  this
                );
              if (0 === arguments.length) {
                for (var r, o = Object.keys(n), i = 0; i < o.length; ++i)
                  "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = new zt()),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = n[e])) this.removeListener(e, t);
              else if (t)
                do {
                  this.removeListener(e, t[t.length - 1]);
                } while (t[0]);
              return this;
            }),
            (Vt.prototype.listeners = function (e) {
              var t,
                n = this._events;
              return n && (t = n[e])
                ? "function" == typeof t
                  ? [t.listener || t]
                  : (function (e) {
                      for (
                        var t = new Array(e.length), n = 0;
                        n < t.length;
                        ++n
                      )
                        t[n] = e[n].listener || e[n];
                      return t;
                    })(t)
                : [];
            }),
            (Vt.listenerCount = function (e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : en.call(e, t);
            }),
            (Vt.prototype.listenerCount = en),
            (Vt.prototype.eventNames = function () {
              return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
            });
          var nn = function (e, t, n) {
              var r =
                "function" == typeof window.ActiveXObject
                  ? new window.ActiveXObject("Microsoft.XMLDOM")
                  : void 0;
              if (!r)
                return n(
                  new Error(
                    "FlashURLHandler: Microsoft.XMLDOM format not supported"
                  )
                );
              (r.async = !1),
                request.open("GET", e),
                (request.timeout = t.timeout || 0),
                (request.withCredentials = t.withCredentials || !1),
                request.send(),
                (request.onprogress = function () {}),
                (request.onload = function () {
                  r.loadXML(request.responseText), n(null, r);
                });
            },
            rn = function () {
              return window.XDomainRequest && (e = new XDomainRequest()), !!e;
              var e;
            },
            on = function (e, t, n) {
              n(
                new Error(
                  "Please bundle the library for node to use the node urlHandler"
                )
              );
            };
          function An() {
            try {
              var e = new window.XMLHttpRequest();
              return "withCredentials" in e ? e : null;
            } catch (e) {
              return (
                console.log("Error in XHRURLHandler support check:", e), null
              );
            }
          }
          var an,
            sn,
            ln = function (e, t, n) {
              if (
                "https:" === window.location.protocol &&
                0 === e.indexOf("http://")
              )
                return n(
                  new Error("XHRURLHandler: Cannot go from HTTPS to HTTP.")
                );
              try {
                var r = An();
                r.open("GET", e),
                  (r.timeout = t.timeout || 0),
                  (r.withCredentials = t.withCredentials || !1),
                  r.overrideMimeType && r.overrideMimeType("text/xml"),
                  (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      (200 === r.status
                        ? n(null, r.responseXML)
                        : n(new Error("XHRURLHandler: ".concat(r.statusText))));
                  }),
                  r.send();
              } catch (e) {
                n(new Error("XHRURLHandler: Unexpected error"));
              }
            },
            cn = function () {
              return !!An();
            },
            un = {
              get: function (e, t, n) {
                return (
                  n || ("function" == typeof t && (n = t), (t = {})),
                  "undefined" == typeof window || null === window
                    ? on(e, t, n)
                    : cn()
                    ? ln(e, t, n)
                    : rn()
                    ? nn(e, t, n)
                    : n(
                        new Error(
                          "Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"
                        )
                      )
                );
              },
            },
            fn = function e() {
              lt(this, e), (this.ads = []), (this.errorURLTemplates = []);
            },
            pn = { ERRORCODE: 900, extensions: [] },
            dn = (function (e) {
              ot(n, e);
              var t = At(n);
              function n() {
                var e;
                return (
                  lt(this, n),
                  ((e = t.call(this)).remainingAds = []),
                  (e.parentURLs = []),
                  (e.errorURLTemplates = []),
                  (e.rootErrorURLTemplates = []),
                  (e.maxWrapperDepth = null),
                  (e.URLTemplateFilters = []),
                  (e.fetchingOptions = {}),
                  e
                );
              }
              return (
                rt(n, [
                  {
                    key: "addURLTemplateFilter",
                    value: function (e) {
                      "function" == typeof e && this.URLTemplateFilters.push(e);
                    },
                  },
                  {
                    key: "removeURLTemplateFilter",
                    value: function () {
                      this.URLTemplateFilters.pop();
                    },
                  },
                  {
                    key: "countURLTemplateFilters",
                    value: function () {
                      return this.URLTemplateFilters.length;
                    },
                  },
                  {
                    key: "clearURLTemplateFilters",
                    value: function () {
                      this.URLTemplateFilters = [];
                    },
                  },
                  {
                    key: "trackVastError",
                    value: function (e, t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 2 ? n - 2 : 0),
                          o = 2;
                        o < n;
                        o++
                      )
                        r[o - 2] = arguments[o];
                      this.emit(
                        "VAST-error",
                        Object.assign.apply(Object, [pn, t].concat(r))
                      ),
                        yt.track(e, t);
                    },
                  },
                  {
                    key: "getErrorURLTemplates",
                    value: function () {
                      return this.rootErrorURLTemplates.concat(
                        this.errorURLTemplates
                      );
                    },
                  },
                  {
                    key: "fetchVAST",
                    value: function (e, t, n) {
                      var r = this;
                      return new Promise(function (o, i) {
                        r.URLTemplateFilters.forEach(function (t) {
                          e = t(e);
                        }),
                          r.parentURLs.push(e),
                          r.emit("VAST-resolving", {
                            url: e,
                            wrapperDepth: t,
                            originalUrl: n,
                          }),
                          r.urlHandler.get(
                            e,
                            r.fetchingOptions,
                            function (t, n) {
                              r.emit("VAST-resolved", { url: e, error: t }),
                                t ? i(t) : o(n);
                            }
                          );
                      });
                    },
                  },
                  {
                    key: "initParsingStatus",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (this.rootURL = ""),
                        (this.remainingAds = []),
                        (this.parentURLs = []),
                        (this.errorURLTemplates = []),
                        (this.rootErrorURLTemplates = []),
                        (this.maxWrapperDepth = e.wrapperLimit || 10),
                        (this.fetchingOptions = {
                          timeout: e.timeout,
                          withCredentials: e.withCredentials,
                        }),
                        (this.urlHandler = e.urlhandler || un);
                    },
                  },
                  {
                    key: "getRemainingAds",
                    value: function (e) {
                      var t = this;
                      if (0 === this.remainingAds.length)
                        return Promise.reject(
                          new Error(
                            "No more ads are available for the given VAST"
                          )
                        );
                      var n = e
                        ? yt.flatten(this.remainingAds)
                        : this.remainingAds.shift();
                      return (
                        (this.errorURLTemplates = []),
                        (this.parentURLs = []),
                        this.resolveAds(n, {
                          wrapperDepth: 0,
                          originalUrl: this.rootURL,
                        }).then(function (e) {
                          return t.buildVASTResponse(e);
                        })
                      );
                    },
                  },
                  {
                    key: "getAndParseVAST",
                    value: function (e) {
                      var t = this,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      return (
                        this.initParsingStatus(n),
                        (this.rootURL = e),
                        this.fetchVAST(e).then(function (r) {
                          return (
                            (n.originalUrl = e),
                            (n.isRootVAST = !0),
                            t.parse(r, n).then(function (e) {
                              return t.buildVASTResponse(e);
                            })
                          );
                        })
                      );
                    },
                  },
                  {
                    key: "parseVAST",
                    value: function (e) {
                      var t = this,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      return (
                        this.initParsingStatus(n),
                        (n.isRootVAST = !0),
                        this.parse(e, n).then(function (e) {
                          return t.buildVASTResponse(e);
                        })
                      );
                    },
                  },
                  {
                    key: "buildVASTResponse",
                    value: function (e) {
                      var t = new fn();
                      return (
                        (t.ads = e),
                        (t.errorURLTemplates = this.getErrorURLTemplates()),
                        this.completeWrapperResolving(t),
                        t
                      );
                    },
                  },
                  {
                    key: "parse",
                    value: function (e, t) {
                      var n = t.resolveAll,
                        r = void 0 === n || n,
                        o = t.wrapperSequence,
                        i = void 0 === o ? null : o,
                        A = t.originalUrl,
                        a = void 0 === A ? null : A,
                        s = t.wrapperDepth,
                        l = void 0 === s ? 0 : s,
                        c = t.isRootVAST,
                        u = void 0 !== c && c;
                      if (
                        !e ||
                        !e.documentElement ||
                        "VAST" !== e.documentElement.nodeName
                      )
                        return Promise.reject(
                          new Error("Invalid VAST XMLDocument")
                        );
                      var f = [],
                        p = e.documentElement.childNodes;
                      for (var d in p) {
                        var g = p[d];
                        if ("Error" === g.nodeName) {
                          var h = xt(g);
                          u
                            ? this.rootErrorURLTemplates.push(h)
                            : this.errorURLTemplates.push(h);
                        }
                        if ("Ad" === g.nodeName) {
                          var v = Nt(g);
                          v
                            ? f.push(v)
                            : this.trackVastError(this.getErrorURLTemplates(), {
                                ERRORCODE: 101,
                              });
                        }
                      }
                      var m = f.length,
                        C = f[m - 1];
                      return (
                        1 === m &&
                          null != i &&
                          C &&
                          !C.sequence &&
                          (C.sequence = i),
                        !1 === r &&
                          ((this.remainingAds = St(f)),
                          (f = this.remainingAds.shift())),
                        this.resolveAds(f, { wrapperDepth: l, originalUrl: a })
                      );
                    },
                  },
                  {
                    key: "resolveAds",
                    value: function () {
                      var e = this,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = n.wrapperDepth,
                        o = n.originalUrl,
                        i = [];
                      return (
                        t.forEach(function (t) {
                          var n = e.resolveWrappers(t, r, o);
                          i.push(n);
                        }),
                        Promise.all(i).then(function (t) {
                          var n = yt.flatten(t);
                          if (!n && e.remainingAds.length > 0) {
                            var i = e.remainingAds.shift();
                            return e.resolveAds(i, {
                              wrapperDepth: r,
                              originalUrl: o,
                            });
                          }
                          return n;
                        })
                      );
                    },
                  },
                  {
                    key: "resolveWrappers",
                    value: function (e, t, n) {
                      var r = this;
                      return new Promise(function (o, i) {
                        if ((t++, !e.nextWrapperURL))
                          return delete e.nextWrapperURL, o(e);
                        if (
                          t >= r.maxWrapperDepth ||
                          -1 !== r.parentURLs.indexOf(e.nextWrapperURL)
                        )
                          return (
                            (e.errorCode = 302), delete e.nextWrapperURL, o(e)
                          );
                        e.nextWrapperURL = Et(e.nextWrapperURL, n);
                        var A = e.sequence;
                        (n = e.nextWrapperURL),
                          r
                            .fetchVAST(e.nextWrapperURL, t, n)
                            .then(function (i) {
                              return r
                                .parse(i, {
                                  originalUrl: n,
                                  wrapperSequence: A,
                                  wrapperDepth: t,
                                })
                                .then(function (t) {
                                  if ((delete e.nextWrapperURL, 0 === t.length))
                                    return (e.creatives = []), o(e);
                                  t.forEach(function (t) {
                                    t && Tt(t, e);
                                  }),
                                    o(t);
                                });
                            })
                            .catch(function (t) {
                              (e.errorCode = 301),
                                (e.errorMessage = t.message),
                                o(e);
                            });
                      });
                    },
                  },
                  {
                    key: "completeWrapperResolving",
                    value: function (e) {
                      if (0 === e.ads.length)
                        this.trackVastError(e.errorURLTemplates, {
                          ERRORCODE: 303,
                        });
                      else
                        for (var t = e.ads.length - 1; t >= 0; t--) {
                          var n = e.ads[t];
                          (n.errorCode || 0 === n.creatives.length) &&
                            (this.trackVastError(
                              n.errorURLTemplates.concat(e.errorURLTemplates),
                              { ERRORCODE: n.errorCode || 303 },
                              { ERRORMESSAGE: n.errorMessage || "" },
                              { extensions: n.extensions },
                              { system: n.system }
                            ),
                            e.ads.splice(t, 1));
                        }
                    },
                  },
                ]),
                n
              );
            })(Vt),
            gn = null,
            hn = {
              data: {},
              length: 0,
              getItem: function (e) {
                return this.data[e];
              },
              setItem: function (e, t) {
                (this.data[e] = t),
                  (this.length = Object.keys(this.data).length);
              },
              removeItem: function (e) {
                delete data[e], (this.length = Object.keys(this.data).length);
              },
              clear: function () {
                (this.data = {}), (this.length = 0);
              },
            },
            vn = (function () {
              function e() {
                lt(this, e), (this.storage = this.initStorage());
              }
              return (
                rt(e, [
                  {
                    key: "initStorage",
                    value: function () {
                      if (gn) return gn;
                      try {
                        gn =
                          "undefined" != typeof window && null !== window
                            ? window.localStorage || window.sessionStorage
                            : null;
                      } catch (e) {
                        gn = null;
                      }
                      return (
                        (gn && !this.isStorageDisabled(gn)) ||
                          (gn = hn).clear(),
                        gn
                      );
                    },
                  },
                  {
                    key: "isStorageDisabled",
                    value: function (e) {
                      var t = "__VASTStorage__";
                      try {
                        if ((e.setItem(t, t), e.getItem(t) !== t))
                          return e.removeItem(t), !0;
                      } catch (e) {
                        return !0;
                      }
                      return e.removeItem(t), !1;
                    },
                  },
                  {
                    key: "getItem",
                    value: function (e) {
                      return this.storage.getItem(e);
                    },
                  },
                  {
                    key: "setItem",
                    value: function (e, t) {
                      return this.storage.setItem(e, t);
                    },
                  },
                  {
                    key: "removeItem",
                    value: function (e) {
                      return this.storage.removeItem(e);
                    },
                  },
                  {
                    key: "clear",
                    value: function () {
                      return this.storage.clear();
                    },
                  },
                ]),
                e
              );
            })(),
            mn = (function () {
              function e(t, n, r) {
                lt(this, e),
                  (this.cappingFreeLunch = t || 0),
                  (this.cappingMinimumTimeInterval = n || 0),
                  (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
                  (this.vastParser = new dn()),
                  (this.storage = r || new vn()),
                  void 0 === this.lastSuccessfulAd &&
                    (this.lastSuccessfulAd = 0),
                  void 0 === this.totalCalls && (this.totalCalls = 0),
                  void 0 === this.totalCallsTimeout &&
                    (this.totalCallsTimeout = 0);
              }
              return (
                rt(e, [
                  {
                    key: "getParser",
                    value: function () {
                      return this.vastParser;
                    },
                  },
                  {
                    key: "lastSuccessfulAd",
                    get: function () {
                      return this.storage.getItem(
                        "vast-client-last-successful-ad"
                      );
                    },
                    set: function (e) {
                      this.storage.setItem("vast-client-last-successful-ad", e);
                    },
                  },
                  {
                    key: "totalCalls",
                    get: function () {
                      return this.storage.getItem("vast-client-total-calls");
                    },
                    set: function (e) {
                      this.storage.setItem("vast-client-total-calls", e);
                    },
                  },
                  {
                    key: "totalCallsTimeout",
                    get: function () {
                      return this.storage.getItem(
                        "vast-client-total-calls-timeout"
                      );
                    },
                    set: function (e) {
                      this.storage.setItem(
                        "vast-client-total-calls-timeout",
                        e
                      );
                    },
                  },
                  {
                    key: "hasRemainingAds",
                    value: function () {
                      return this.vastParser.remainingAds.length > 0;
                    },
                  },
                  {
                    key: "getNextAds",
                    value: function (e) {
                      return this.vastParser.getRemainingAds(e);
                    },
                  },
                  {
                    key: "get",
                    value: function (e) {
                      var t = this,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = Date.now();
                      return (
                        (n = Object.assign(
                          this.defaultOptions,
                          n
                        )).hasOwnProperty("resolveAll") || (n.resolveAll = !1),
                        this.totalCallsTimeout < r
                          ? ((this.totalCalls = 1),
                            (this.totalCallsTimeout = r + 36e5))
                          : this.totalCalls++,
                        new Promise(function (o, i) {
                          if (t.cappingFreeLunch >= t.totalCalls)
                            return i(
                              new Error(
                                "VAST call canceled – FreeLunch capping not reached yet "
                                  .concat(t.totalCalls, "/")
                                  .concat(t.cappingFreeLunch)
                              )
                            );
                          var A = r - t.lastSuccessfulAd;
                          if (A < 0) t.lastSuccessfulAd = 0;
                          else if (A < t.cappingMinimumTimeInterval)
                            return i(
                              new Error(
                                "VAST call canceled – (".concat(
                                  t.cappingMinimumTimeInterval,
                                  ")ms minimum interval reached"
                                )
                              )
                            );
                          t.vastParser
                            .getAndParseVAST(e, n)
                            .then(function (e) {
                              return o(e);
                            })
                            .catch(function (e) {
                              return i(e);
                            });
                        })
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            Cn = (function (e) {
              ot(n, e);
              var t = At(n);
              function n(e, r, o) {
                var i,
                  A =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null;
                for (var a in (lt(this, n),
                ((i = t.call(this)).ad = r),
                (i.creative = o),
                (i.variation = A),
                (i.muted = !1),
                (i.impressed = !1),
                (i.skippable = !1),
                (i.trackingEvents = {}),
                (i._alreadyTriggeredQuartiles = {}),
                (i.emitAlwaysEvents = [
                  "creativeView",
                  "start",
                  "firstQuartile",
                  "midpoint",
                  "thirdQuartile",
                  "complete",
                  "resume",
                  "pause",
                  "rewind",
                  "skip",
                  "closeLinear",
                  "close",
                ]),
                i.creative.trackingEvents)) {
                  var s = i.creative.trackingEvents[a];
                  i.trackingEvents[a] = s.slice(0);
                }
                return (
                  i.creative instanceof Rt
                    ? i._initLinearTracking()
                    : i._initVariationTracking(),
                  e &&
                    i.on("start", function () {
                      e.lastSuccessfulAd = Date.now();
                    }),
                  i
                );
              }
              return (
                rt(n, [
                  {
                    key: "_initLinearTracking",
                    value: function () {
                      (this.linear = !0),
                        (this.skipDelay = this.creative.skipDelay),
                        this.setDuration(this.creative.duration),
                        (this.clickThroughURLTemplate =
                          this.creative.videoClickThroughURLTemplate),
                        (this.clickTrackingURLTemplates =
                          this.creative.videoClickTrackingURLTemplates);
                    },
                  },
                  {
                    key: "_initVariationTracking",
                    value: function () {
                      if (
                        ((this.linear = !1),
                        (this.skipDelay = -1),
                        this.variation)
                      ) {
                        for (var e in this.variation.trackingEvents) {
                          var t = this.variation.trackingEvents[e];
                          this.trackingEvents[e]
                            ? (this.trackingEvents[e] = this.trackingEvents[
                                e
                              ].concat(t.slice(0)))
                            : (this.trackingEvents[e] = t.slice(0));
                        }
                        this.variation instanceof Pt
                          ? ((this.clickThroughURLTemplate =
                              this.variation.nonlinearClickThroughURLTemplate),
                            (this.clickTrackingURLTemplates =
                              this.variation.nonlinearClickTrackingURLTemplates),
                            this.setDuration(
                              this.variation.minSuggestedDuration
                            ))
                          : this.variation instanceof pt &&
                            ((this.clickThroughURLTemplate =
                              this.variation.companionClickThroughURLTemplate),
                            (this.clickTrackingURLTemplates =
                              this.variation.companionClickTrackingURLTemplates));
                      }
                    },
                  },
                  {
                    key: "setDuration",
                    value: function (e) {
                      (this.assetDuration = e),
                        (this.quartiles = {
                          firstQuartile:
                            Math.round(25 * this.assetDuration) / 100,
                          midpoint: Math.round(50 * this.assetDuration) / 100,
                          thirdQuartile:
                            Math.round(75 * this.assetDuration) / 100,
                        });
                    },
                  },
                  {
                    key: "setProgress",
                    value: function (e) {
                      var t = this,
                        n = this.skipDelay || -1;
                      if (
                        (-1 === n ||
                          this.skippable ||
                          (n > e
                            ? this.emit("skip-countdown", n - e)
                            : ((this.skippable = !0),
                              this.emit("skip-countdown", 0))),
                        this.assetDuration > 0)
                      ) {
                        var r = [];
                        if (e > 0) {
                          var o = Math.round((e / this.assetDuration) * 100);
                          for (var i in (r.push("start"),
                          r.push("progress-".concat(o, "%")),
                          r.push("progress-".concat(Math.round(e))),
                          this.quartiles))
                            this.isQuartileReached(i, this.quartiles[i], e) &&
                              (r.push(i),
                              (this._alreadyTriggeredQuartiles[i] = !0));
                        }
                        r.forEach(function (e) {
                          t.track(e, !0);
                        }),
                          e < this.progress && this.track("rewind");
                      }
                      this.progress = e;
                    },
                  },
                  {
                    key: "isQuartileReached",
                    value: function (e, t, n) {
                      var r = !1;
                      return (
                        t <= n &&
                          !this._alreadyTriggeredQuartiles[e] &&
                          (r = !0),
                        r
                      );
                    },
                  },
                  {
                    key: "setMuted",
                    value: function (e) {
                      this.muted !== e && this.track(e ? "mute" : "unmute"),
                        (this.muted = e);
                    },
                  },
                  {
                    key: "setPaused",
                    value: function (e) {
                      this.paused !== e && this.track(e ? "pause" : "resume"),
                        (this.paused = e);
                    },
                  },
                  {
                    key: "setFullscreen",
                    value: function (e) {
                      this.fullscreen !== e &&
                        this.track(e ? "fullscreen" : "exitFullscreen"),
                        (this.fullscreen = e);
                    },
                  },
                  {
                    key: "setExpand",
                    value: function (e) {
                      this.expanded !== e &&
                        this.track(e ? "expand" : "collapse"),
                        (this.expanded = e);
                    },
                  },
                  {
                    key: "setSkipDelay",
                    value: function (e) {
                      "number" == typeof e && (this.skipDelay = e);
                    },
                  },
                  {
                    key: "trackImpression",
                    value: function () {
                      this.impressed ||
                        ((this.impressed = !0),
                        this.trackURLs(this.ad.impressionURLTemplates),
                        this.track("creativeView"));
                    },
                  },
                  {
                    key: "errorWithCode",
                    value: function (e) {
                      this.trackURLs(this.ad.errorURLTemplates, {
                        ERRORCODE: e,
                      });
                    },
                  },
                  {
                    key: "complete",
                    value: function () {
                      this.track("complete");
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      this.track(this.linear ? "closeLinear" : "close");
                    },
                  },
                  {
                    key: "skip",
                    value: function () {
                      this.track("skip"), (this.trackingEvents = []);
                    },
                  },
                  {
                    key: "click",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      this.clickTrackingURLTemplates &&
                        this.clickTrackingURLTemplates.length &&
                        this.trackURLs(this.clickTrackingURLTemplates);
                      var t = this.clickThroughURLTemplate || e;
                      if (t) {
                        var n = this.linear
                            ? { CONTENTPLAYHEAD: this.progressFormatted() }
                            : {},
                          r = yt.resolveURLTemplates([t], n)[0];
                        this.emit("clickthrough", r);
                      }
                    },
                  },
                  {
                    key: "track",
                    value: function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      "closeLinear" === e &&
                        !this.trackingEvents[e] &&
                        this.trackingEvents.close &&
                        (e = "close");
                      var n = this.trackingEvents[e],
                        r = this.emitAlwaysEvents.indexOf(e) > -1;
                      n
                        ? (this.emit(e, ""), this.trackURLs(n))
                        : r && this.emit(e, ""),
                        t &&
                          (delete this.trackingEvents[e],
                          r &&
                            this.emitAlwaysEvents.splice(
                              this.emitAlwaysEvents.indexOf(e),
                              1
                            ));
                    },
                  },
                  {
                    key: "trackURLs",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      this.linear &&
                        (this.creative &&
                          this.creative.mediaFiles &&
                          this.creative.mediaFiles[0] &&
                          this.creative.mediaFiles[0].fileURL &&
                          (t.ASSETURI = this.creative.mediaFiles[0].fileURL),
                        (t.CONTENTPLAYHEAD = this.progressFormatted())),
                        yt.track(e, t);
                    },
                  },
                  {
                    key: "progressFormatted",
                    value: function () {
                      var e = parseInt(this.progress),
                        t = e / 3600;
                      t.length < 2 && (t = "0".concat(t));
                      var n = (e / 60) % 60;
                      n.length < 2 && (n = "0".concat(n));
                      var r = e % 60;
                      return (
                        r.length < 2 && (r = "0".concat(n)),
                        ""
                          .concat(t, ":")
                          .concat(n, ":")
                          .concat(r, ".")
                          .concat(parseInt(100 * (this.progress - e)))
                      );
                    },
                  },
                ]),
                n
              );
            })(Vt),
            yn = function (e, t, n, r) {
              var o,
                i = {},
                A = {
                  started: !1,
                  active: !1,
                  isVideoEnded: !1,
                  lang: n.getLanguage(),
                },
                a = null,
                s = "",
                l = null,
                c = "",
                u = "",
                f = !1,
                p = n.getBrowser(),
                d = "Android" === p.os || "iOS" === p.os;
              (o = document.createElement("div")).setAttribute(
                "class",
                "op-ads"
              ),
                o.setAttribute("id", "op-ads"),
                n.getContainer().append(o),
                (l = document.createElement("video")).setAttribute(
                  "playsinline",
                  "true"
                ),
                l.setAttribute("title", "Advertisement"),
                l.setAttribute("class", "op-ads-vast-video"),
                (u = document.createElement("div")).setAttribute(
                  "class",
                  "op-ads-button"
                ),
                (c = document.createElement("div")).setAttribute(
                  "class",
                  "op-ads-textview"
                ),
                u.append(c),
                o.append(l),
                o.append(u),
                (s = o);
              var g = new mn(),
                h = null,
                v = null,
                m = function (e) {
                  console.log(e),
                    (l.style.display = "none"),
                    t.trigger(se, { code: e.code, message: e.message }),
                    (A.active = !1),
                    (A.started = !0),
                    t.play();
                };
              return (
                (i.isActive = function () {
                  return A.active;
                }),
                (i.started = function () {
                  return A.started;
                }),
                (i.play = function () {
                  return A.started
                    ? l.play()
                    : new Promise(function (o, i) {
                        !(function s() {
                          t.metaLoaded()
                            ? (OvenPlayerConsole.log(
                                "VAST : main contents meta loaded."
                              ),
                              (function () {
                                OvenPlayerConsole.log(
                                  "VAST : checkAutoplaySupport() "
                                );
                                var n = document.createElement("video");
                                n.setAttribute("playsinline", "true"),
                                  (n.src = Xe),
                                  n.load(),
                                  l.load(),
                                  d && t.getName() !== ue && e.load();
                                var r = function (e, t) {
                                  (f = e), n.pause(), n.remove();
                                };
                                return new Promise(function (e, t) {
                                  if (n.play) {
                                    var o = n.play();
                                    void 0 !== o
                                      ? o
                                          .then(function () {
                                            OvenPlayerConsole.log(
                                              "VAST : auto play allowed."
                                            ),
                                              r(!0),
                                              e();
                                          })
                                          .catch(function (t) {
                                            OvenPlayerConsole.log(
                                              "VAST : auto play failed",
                                              t.message
                                            ),
                                              r(!1),
                                              e();
                                          })
                                      : (OvenPlayerConsole.log(
                                          "VAST : promise not support"
                                        ),
                                        r(!0),
                                        e());
                                  } else OvenPlayerConsole.log("VAST : !temporarySupportCheckVideo.play"), r(!0), e();
                                });
                              })().then(function () {
                                n.isAutoStart() && !f
                                  ? (OvenPlayerConsole.log(
                                      "VAST : autoplayAllowed : false"
                                    ),
                                    (A.started = !1),
                                    i(new Error("autoplayNotAllowed")))
                                  : (g
                                      .get(r)
                                      .then(function (n) {
                                        if (
                                          (OvenPlayerConsole.log(
                                            "VAST : initRequest()"
                                          ),
                                          !(v = n.ads[0]))
                                        )
                                          throw {
                                            code: 401,
                                            message:
                                              "File not found. Unable to find Linear/MediaFile from URI.",
                                          };
                                        (h = new Cn(g, v, v.creatives[0])),
                                          OvenPlayerConsole.log(
                                            "VAST : created ad tracker."
                                          ),
                                          (a = (function (e, t, n, r, o, i, A) {
                                            var a = {},
                                              s = {},
                                              l = ze(i),
                                              c = ze(o),
                                              u = ze(e);
                                            n.on(
                                              Re,
                                              function (t) {
                                                t.mute
                                                  ? (e.muted = !0)
                                                  : ((e.muted = !1),
                                                    (e.volume =
                                                      t.volume / 100));
                                              },
                                              s
                                            );
                                            var f = function () {
                                                (r.active = !1),
                                                  c.hide(),
                                                  !r.started ||
                                                    (0 !== n.getPosition() &&
                                                      r.isVideoEnded) ||
                                                    (u.hide(), n.play()),
                                                  n.trigger(ae);
                                              },
                                              p = function (n) {
                                                l.hasClass("videoAdUiAction") &&
                                                  (t.skip(), e.pause(), f());
                                              };
                                            return (
                                              i.addEventListener(
                                                "click",
                                                p,
                                                !1
                                              ),
                                              (a.error = function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : error.",
                                                  e.error
                                                ),
                                                  console.log(
                                                    "VAST : listener : error.",
                                                    e.error
                                                  );
                                                var n = {},
                                                  r =
                                                    (e.error && e.error.code) ||
                                                    0;
                                                2 === r
                                                  ? ((n.code = 402),
                                                    (n.message =
                                                      "Timeout of MediaFile URI."))
                                                  : 3 === r
                                                  ? ((n.code = 405),
                                                    (n.message =
                                                      "Problem displaying MediaFile. Video player found a MediaFile with supported type but couldn’t display it. MediaFile may include: unsupported codecs, different MIME type than MediaFile@type, unsupported delivery method, etc."))
                                                  : 4 === r
                                                  ? ((n.code = 403),
                                                    (n.message =
                                                      "Couldn’t find MediaFile that is supported by this video player, based on the attributes of the MediaFile element."))
                                                  : ((n.code = 400),
                                                    (n.message =
                                                      "General Linear error. Video player is unable to display the Linear Ad.")),
                                                  t.errorWithCode(n.code),
                                                  A("405");
                                              }),
                                              (a.canplay = function () {}),
                                              (a.ended = function () {
                                                t.complete(), f();
                                              }),
                                              (a.click = function (e) {
                                                t.click();
                                              }),
                                              (a.play = function () {
                                                t.setPaused(!1);
                                              }),
                                              (a.pause = function () {
                                                t.setPaused(!0);
                                              }),
                                              (a.timeupdate = function (r) {
                                                t.setProgress(
                                                  r.target.currentTime
                                                ),
                                                  n.trigger(Se, {
                                                    duration: e.duration,
                                                    position: e.currentTime,
                                                  });
                                              }),
                                              (a.volumechange = function (e) {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : Ad Video Volumechange."
                                                ),
                                                  t.setMuted(e.target.muted);
                                              }),
                                              (a.loadedmetadata = function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : Ad CONTENT LOADED ."
                                                ),
                                                  ee === n.getState() &&
                                                    n.pause(),
                                                  t.trackImpression(),
                                                  n.trigger(oe, {
                                                    remaining: e.duration,
                                                    isLinear: !0,
                                                  }),
                                                  e.play();
                                              }),
                                              t.on("skip", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : skipped"
                                                );
                                              }),
                                              t.on("mute", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : muted"
                                                );
                                              }),
                                              t.on("unmute", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : unmuted"
                                                );
                                              }),
                                              t.on("resume", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : vastTracker resumed."
                                                ),
                                                  r.started && n.setState(ie);
                                              }),
                                              t.on("pause", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : vastTracker paused."
                                                ),
                                                  n.setState(Ae);
                                              }),
                                              t.on(
                                                "clickthrough",
                                                function (e) {
                                                  OvenPlayerConsole.log(
                                                    "VAST : listener : clickthrough :",
                                                    e
                                                  ),
                                                    window.open(e, "_blank");
                                                }
                                              ),
                                              t.on(
                                                "skip-countdown",
                                                function (e) {
                                                  0 === e
                                                    ? ("ko" === r.lang
                                                        ? l.html(
                                                            "광고 건너뛰기<i class='op-con op-arrow-right btn-right'></i>"
                                                          )
                                                        : l.html(
                                                            "Ad Skip<i class='op-con op-arrow-right btn-right'></i>"
                                                          ),
                                                      l.addClass(
                                                        "videoAdUiAction"
                                                      ))
                                                    : "ko" === r.lang
                                                    ? l.html(
                                                        parseInt(e) +
                                                          1 +
                                                          "초 후에 이 광고를 건너뛸 수 있습니다."
                                                      )
                                                    : l.html(
                                                        "You can skip this ad in " +
                                                          (parseInt(e) + 1)
                                                      );
                                                }
                                              ),
                                              t.on("rewind", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : rewind"
                                                );
                                              }),
                                              t.on("start", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : started"
                                                ),
                                                  (r.started = !0),
                                                  (r.active = !0),
                                                  u.show(),
                                                  c.show(),
                                                  n.trigger(Ie, {
                                                    isLinear: !0,
                                                  }),
                                                  n.setState(ie);
                                              }),
                                              t.on(
                                                "firstQuartile",
                                                function () {
                                                  OvenPlayerConsole.log(
                                                    "VAST : listener : firstQuartile"
                                                  );
                                                }
                                              ),
                                              t.on("midpoint", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : midpoint"
                                                );
                                              }),
                                              t.on(
                                                "thirdQuartile",
                                                function () {
                                                  OvenPlayerConsole.log(
                                                    "VAST : listener : thirdQuartile"
                                                  );
                                                }
                                              ),
                                              t.on("creativeView", function () {
                                                OvenPlayerConsole.log(
                                                  "VAST : listener : creativeView"
                                                );
                                              }),
                                              Object.keys(a).forEach(function (
                                                t
                                              ) {
                                                e.removeEventListener(t, a[t]),
                                                  e.addEventListener(t, a[t]);
                                              }),
                                              (s.destroy = function () {
                                                OvenPlayerConsole.log(
                                                  "EventListener : destroy()"
                                                ),
                                                  i.removeEventListener(
                                                    "click",
                                                    p,
                                                    !1
                                                  ),
                                                  Object.keys(a).forEach(
                                                    function (t) {
                                                      e.removeEventListener(
                                                        t,
                                                        a[t]
                                                      );
                                                    }
                                                  );
                                              }),
                                              s
                                            );
                                          })(l, h, t, A, u, c, m));
                                        var r = "";
                                        v.creatives &&
                                          v.creatives.length > 0 &&
                                          v.creatives[0].mediaFiles &&
                                          v.creatives[0].mediaFiles.length >
                                            0 &&
                                          v.creatives[0].mediaFiles[0]
                                            .fileURL &&
                                          ((r =
                                            v.creatives[0].mediaFiles[0]
                                              .fileURL),
                                          OvenPlayerConsole.log(
                                            "VAST : media url : ",
                                            r
                                          )),
                                          (l.src = r),
                                          (l.volume = e.volume),
                                          (l.muted = e.muted);
                                      })
                                      .catch(function (e) {
                                        m(e);
                                      }),
                                    o());
                              }))
                            : setTimeout(s, 100);
                        })();
                      });
                }),
                (i.pause = function () {
                  l.pause();
                }),
                (i.videoEndedCallback = function (e) {
                  e(), (A.isVideoEnded = !0);
                }),
                (i.destroy = function () {
                  a && (a.destroy(), (a = null)),
                    (h = null),
                    (g = null),
                    s.remove();
                }),
                i
              );
            },
            bn = function (e, t, n) {
              OvenPlayerConsole.log("[Provider] loaded. ");
              var r = {};
              Ge(r);
              var o = e.element,
                i = null,
                A = null;
              e.adTagUrl &&
                (OvenPlayerConsole.log(
                  "[Provider] Ad Client - ",
                  t.getAdClient()
                ),
                (i =
                  "vast" === t.getAdClient()
                    ? yn(o, r, t, e.adTagUrl)
                    : et(o, r, t, e.adTagUrl)) ||
                  console.log("Can not load due to google ima for Ads.")),
                (A = (function (e, t, n, r) {
                  var o = {};
                  OvenPlayerConsole.log("EventListener loaded.", e, t);
                  var i = {},
                    A = -1,
                    a = e;
                  return (
                    (o.canplay = function () {
                      t.setCanSeek(!0),
                        t.trigger("bufferFull"),
                        OvenPlayerConsole.log("EventListener : on canplay");
                    }),
                    (o.durationchange = function () {
                      o.progress(),
                        OvenPlayerConsole.log(
                          "EventListener : on durationchange"
                        ),
                        t.trigger("durationChanged");
                    }),
                    (o.ended = function () {
                      OvenPlayerConsole.log("EventListener : on ended"),
                        a.pause(),
                        t.getState() !== X &&
                          t.getState() !== q &&
                          t.getState() !== te &&
                          (n
                            ? n(function () {
                                t.setState(q);
                              })
                            : t.setState(q));
                    }),
                    (o.loadeddata = function () {}),
                    (o.loadedmetadata = function () {
                      var e = t.getSources(),
                        n = t.getCurrentSource(),
                        r = n > -1 ? e[n].type : "",
                        o = {
                          duration: t.isLive() ? 1 / 0 : a.duration,
                          type: r,
                        };
                      t.setMetaLoaded(),
                        OvenPlayerConsole.log(
                          "EventListener : on loadedmetadata",
                          o
                        ),
                        t.trigger(Me, o);
                    }),
                    (o.pause = function () {
                      return (
                        t.getState() !== q &&
                        t.getState() !== te &&
                        !a.ended &&
                        !a.error &&
                        a.currentTime !== a.duration &&
                        (OvenPlayerConsole.log("EventListener : on pause"),
                        void t.setState($))
                      );
                    }),
                    (o.loadstart = function () {
                      r &&
                        !r.getConfig().showBigPlayButton &&
                        r.getConfig().autoStart &&
                        t.setState(ne);
                    }),
                    (o.play = function () {
                      (A = -1),
                        a.paused || t.getState() === ee || t.setState(ne);
                    }),
                    (o.playing = function () {
                      OvenPlayerConsole.log("EventListener : on playing"),
                        A < 0 && t.setState(ee);
                    }),
                    (o.progress = function () {
                      var e = a.buffered;
                      if (!e) return !1;
                      var n,
                        r = a.duration,
                        o = a.currentTime,
                        i =
                          ((n = (e.length > 0 ? e.end(e.length - 1) : 0) / r),
                          Math.max(Math.min(n, 1), 0));
                      t.setBuffer(100 * i),
                        t.trigger(Te, {
                          bufferPercent: 100 * i,
                          position: o,
                          duration: r,
                        }),
                        OvenPlayerConsole.log(
                          "EventListener : on progress",
                          100 * i
                        );
                    }),
                    (o.timeupdate = function () {
                      var e = a.currentTime,
                        n = a.duration;
                      if (!isNaN(n)) {
                        if (e > n) return a.pause(), void t.setState(q);
                        var r =
                          t.getSources()[t.getCurrentSource()].sectionStart;
                        r && e < r && t.getState() === ee && t.seek(r);
                        var o = t.getSources()[t.getCurrentSource()].sectionEnd;
                        if (o && e > o && t.getState() === ee)
                          return t.stop(), void t.setState(q);
                        n > 9e15 && (n = 1 / 0),
                          t.isSeeking() ||
                            a.paused ||
                            (t.getState() !== re &&
                              t.getState() !== ne &&
                              t.getState() !== ie) ||
                            (function (e, t) {
                              return e.toFixed(2) === t.toFixed(2);
                            })(A, e) ||
                            ((A = -1), t.setState(ee)),
                          r && r > 0 && (e -= r) < 0 && (e = 0),
                          o && (n = o),
                          r && (n -= r),
                          (t.getState() === ee || t.isSeeking()) &&
                            t.trigger(Le, { position: e, duration: n });
                      }
                    }),
                    (o.seeking = function () {
                      t.setSeeking(!0),
                        OvenPlayerConsole.log(
                          "EventListener : on seeking",
                          a.currentTime
                        ),
                        t.trigger("seek", { position: a.currentTime });
                    }),
                    (o.seeked = function () {
                      t.isSeeking() &&
                        (OvenPlayerConsole.log("EventListener : on seeked"),
                        t.setSeeking(!1),
                        t.trigger("seeked"));
                    }),
                    (o.stalled = function () {
                      OvenPlayerConsole.log("EventListener : on stalled");
                    }),
                    (o.waiting = function () {
                      OvenPlayerConsole.log(
                        "EventListener : on waiting",
                        t.getState()
                      ),
                        t.isSeeking()
                          ? t.setState(ne)
                          : t.getState() === ee &&
                            ((A = a.currentTime), t.setState(re));
                    }),
                    (o.volumechange = function () {
                      OvenPlayerConsole.log(
                        "EventListener : on volumechange",
                        Math.round(100 * a.volume)
                      ),
                        t.trigger(Re, {
                          volume: Math.round(100 * a.volume),
                          mute: a.muted,
                        });
                    }),
                    (o.error = function () {
                      var e =
                        { 0: 300, 1: 301, 2: 302, 3: 303, 4: 304 }[
                          (a.error && a.error.code) || 0
                        ] || 0;
                      OvenPlayerConsole.log("EventListener : on error", e),
                        qe(We.codes[e], t);
                    }),
                    Object.keys(o).forEach(function (e) {
                      a.removeEventListener(e, o[e]),
                        a.addEventListener(e, o[e]);
                    }),
                    (i.destroy = function () {
                      OvenPlayerConsole.log("EventListener : destroy()"),
                        Object.keys(o).forEach(function (e) {
                          a.removeEventListener(e, o[e]);
                        });
                    }),
                    i
                  );
                })(o, r, i ? i.videoEndedCallback : null, t)),
                (o.playbackRate = o.defaultPlaybackRate = t.getPlaybackRate());
              var a = function (i) {
                var A = e.sources[e.currentSource];
                if (
                  ((e.framerate = A.framerate),
                  r.setVolume(t.getVolume()),
                  e.framerate || t.setTimecodeMode(!0),
                  n)
                )
                  n(A, i);
                else {
                  OvenPlayerConsole.log(
                    "source loaded : ",
                    A,
                    "lastPlayPosition : " + i
                  );
                  var a = o.src;
                  A.file !== a &&
                    ((o.src = A.file), (a || "" === a) && o.load()),
                    r.on(Me, function () {
                      i > 0 && r.seek(i);
                    });
                }
              };
              return (
                (r.getName = function () {
                  return e.name;
                }),
                (r.getMse = function () {
                  return e.mse;
                }),
                (r.getMediaElement = function () {
                  return e.element;
                }),
                (r.canSeek = function () {
                  return e.canSeek;
                }),
                (r.setCanSeek = function (t) {
                  e.canSeek = t;
                }),
                (r.isSeeking = function () {
                  return e.seeking;
                }),
                (r.setSeeking = function (t) {
                  e.seeking = t;
                }),
                (r.setMetaLoaded = function () {
                  e.isLoaded = !0;
                }),
                (r.metaLoaded = function () {
                  return e.isLoaded;
                }),
                (r.setState = function (t) {
                  if (e.state !== t) {
                    var n = e.state;
                    if (
                      (OvenPlayerConsole.log("Provider : setState()", t),
                      n === ie && (t === te || t === X))
                    )
                      return !1;
                    switch (
                      (OvenPlayerConsole.log("Provider : triggerSatatus", t), t)
                    ) {
                      case q:
                        r.trigger("complete");
                        break;
                      case $:
                        r.trigger(be, { prevState: e.state, newstate: $ });
                        break;
                      case Ae:
                        r.trigger(be, { prevState: e.state, newstate: Ae });
                        break;
                      case ee:
                        r.trigger(we, { prevState: e.state, newstate: ee });
                        break;
                      case ie:
                        r.trigger(we, { prevState: e.state, newstate: ie });
                    }
                    (e.state = t),
                      r.trigger(ye, { prevstate: n, newstate: e.state });
                  }
                }),
                (r.getState = function () {
                  return e.state;
                }),
                (r.setBuffer = function (t) {
                  e.buffer = t;
                }),
                (r.getBuffer = function () {
                  return e.buffer;
                }),
                (r.isLive = function () {
                  return !!e.isLive || o.duration === 1 / 0;
                }),
                (r.getDuration = function () {
                  return r.isLive() ? 1 / 0 : o.duration;
                }),
                (r.getPosition = function () {
                  return o ? o.currentTime : 0;
                }),
                (r.setVolume = function (e) {
                  if (!o) return !1;
                  (o.volume = e / 100), t.setVolume(e);
                }),
                (r.getVolume = function () {
                  return t.getVolume();
                }),
                (r.setMute = function (e) {
                  if (!o) return !1;
                  if (void 0 === e) {
                    var n = t.isMute();
                    (o.muted = !n),
                      t.setMute(!n),
                      r.trigger(Qe, { mute: t.isMute() });
                  } else
                    (o.muted = e),
                      t.setMute(e),
                      r.trigger(Qe, { mute: t.isMute() });
                  return o.muted;
                }),
                (r.getMute = function () {
                  return t.isMute();
                }),
                (r.preload = function (n, o) {
                  return (
                    (e.sources = n),
                    (e.currentSource = $e(n, t)),
                    a(o || 0),
                    new Promise(function (e, n) {
                      t.isMute() && r.setMute(!0),
                        t.getVolume() && r.setVolume(t.getVolume()),
                        e();
                    })
                  );
                }),
                (r.load = function (n) {
                  (e.sources = n), (e.currentSource = $e(n, t)), a(0);
                }),
                (r.play = function () {
                  if ((OvenPlayerConsole.log("Provider : play()"), !o))
                    return !1;
                  if (r.getState() !== ee)
                    if ((i && i.isActive()) || (i && !i.started()))
                      i.play()
                        .then(function (e) {
                          OvenPlayerConsole.log("Provider : ads play success");
                        })
                        .catch(function (e) {
                          OvenPlayerConsole.log("Provider : ads play fail", e);
                        });
                    else {
                      var e = o.play();
                      void 0 !== e
                        ? e
                            .then(function () {
                              OvenPlayerConsole.log(
                                "Provider : video play success"
                              );
                            })
                            .catch(function (e) {
                              OvenPlayerConsole.log(
                                "Provider : video play error",
                                e.message
                              );
                            })
                        : OvenPlayerConsole.log(
                            "Provider : video play success (ie)"
                          );
                    }
                }),
                (r.pause = function () {
                  if ((OvenPlayerConsole.log("Provider : pause()"), !o))
                    return !1;
                  r.getState() === ee
                    ? o.pause()
                    : r.getState() === ie && i.pause();
                }),
                (r.seek = function (e) {
                  if (!o) return !1;
                  o.currentTime = e;
                }),
                (r.setPlaybackRate = function (e) {
                  return (
                    !!o &&
                    (r.trigger("playbackRateChanged", { playbackRate: e }),
                    (o.playbackRate = o.defaultPlaybackRate = e))
                  );
                }),
                (r.getPlaybackRate = function () {
                  return o ? o.playbackRate : 0;
                }),
                (r.getSources = function () {
                  return o
                    ? e.sources.map(function (e, t) {
                        var n = {
                          file: e.file,
                          type: e.type,
                          label: e.label,
                          index: t,
                          sectionStart: e.sectionStart,
                          sectionEnd: e.sectionEnd,
                          gridThumbnail: e.gridThumbnail,
                        };
                        return e.lowLatency && (n.lowLatency = e.lowLatency), n;
                      })
                    : [];
                }),
                (r.getCurrentSource = function () {
                  return e.currentSource;
                }),
                (r.setCurrentSource = function (n, i) {
                  if (n > -1 && e.sources && e.sources.length > n)
                    return (
                      OvenPlayerConsole.log("source changed : " + n),
                      (e.currentSource = n),
                      r.trigger(Oe, { currentSource: n }),
                      t.setSourceIndex(n),
                      r.setState(X),
                      i && a(o.currentTime || 0),
                      e.currentSource
                    );
                }),
                (r.getQualityLevels = function () {
                  return o ? e.qualityLevels : [];
                }),
                (r.getCurrentQuality = function () {
                  return o ? e.currentQuality : null;
                }),
                (r.setCurrentQuality = function (e) {}),
                (r.isAutoQuality = function () {}),
                (r.setAutoQuality = function (e) {}),
                (r.getFramerate = function () {
                  return e.framerate;
                }),
                (r.setFramerate = function (t) {
                  return (e.framerate = t);
                }),
                (r.seekFrame = function (t) {
                  var n = e.framerate,
                    i = (o.currentTime * n + t) / n;
                  (i += 1e-5), r.pause(), r.seek(i);
                }),
                (r.stop = function () {
                  if (!o) return !1;
                  for (
                    OvenPlayerConsole.log("CORE : stop() "),
                      o.removeAttribute("preload"),
                      o.removeAttribute("src");
                    o.firstChild;

                  )
                    o.removeChild(o.firstChild);
                  r.pause(), r.setState(X);
                }),
                (r.destroy = function () {
                  if (!o) return !1;
                  r.stop(),
                    A.destroy(),
                    i && (i.destroy(), (i = null)),
                    r.off(),
                    OvenPlayerConsole.log(
                      "CORE : destroy() player stop, listener, event destroied"
                    );
                }),
                (r.super = function (e) {
                  var t = r[e];
                  return function () {
                    return t.apply(r, arguments);
                  };
                }),
                r
              );
            },
            wn = function (e, t, n) {
              var r = bn(
                  {
                    name: le,
                    element: e,
                    mse: null,
                    listener: null,
                    isLoaded: !1,
                    canSeek: !1,
                    isLive: !1,
                    seeking: !1,
                    state: X,
                    buffer: 0,
                    framerate: 0,
                    currentQuality: -1,
                    currentSource: -1,
                    qualityLevels: [],
                    sources: [],
                    adTagUrl: n,
                  },
                  t,
                  null
                ),
                o = r.super("destroy");
              return (
                OvenPlayerConsole.log("HTML5 PROVIDER LOADED."),
                (r.destroy = function () {
                  OvenPlayerConsole.log("HTML5 : PROVIDER DESTROYED."), o();
                }),
                r
              );
            },
            En = function (e, t, n, r, o, A, a, s) {
              var l = {},
                c = {},
                u = null,
                f = !1,
                p = null,
                d = null,
                g = {},
                h = !1,
                v = !1,
                m = null,
                C = !1;
              a.getConfig().webrtcConfig &&
                !0 === a.getConfig().webrtcConfig.recoverPacketLoss &&
                (v = !0);
              var y = !0;
              a.getConfig().webrtcConfig &&
                !1 === a.getConfig().webrtcConfig.generatePublicCandidate &&
                (y = a.getConfig().webrtcConfig.generatePublicCandidate);
              var b,
                w = Y();
              function E(e) {
                var t = null;
                return (
                  d && e === d.id
                    ? (t = d.peerConnection)
                    : g[e] && (t = g[e].peerConnection),
                  t
                );
              }
              function B(e) {
                e.statisticsTimer && clearTimeout(e.statisticsTimer),
                  e.status ||
                    ((e.status = {}),
                    (e.status.lostPacketsArr = []),
                    (e.status.slotLength = 8),
                    (e.status.prevPacketsLost = 0),
                    (e.status.avg8Losses = 0),
                    (e.status.avgMoreThanThresholdCount = 0),
                    (e.status.threshold = 40));
                var t = e.status.lostPacketsArr,
                  n = e.status.slotLength,
                  r = e.status.prevPacketsLost,
                  o = e.status.avg8Losses,
                  A = e.status.threshold;
                e.statisticsTimer = setTimeout(function () {
                  if (!e.peerConnection) return !1;
                  e.peerConnection.getStats().then(function (s) {
                    s &&
                      a.getConfig().autoFallback &&
                      s &&
                      (s.forEach(function (a) {
                        if (
                          "inbound-rtp" === a.type &&
                          "video" === a.kind &&
                          !a.isRemote
                        ) {
                          var s = parseInt(a.packetsLost) - parseInt(r);
                          t.push(parseInt(a.packetsLost) - parseInt(r)),
                            t.length > n && t.shift(),
                            t.length === n &&
                              ((o =
                                i().reduce(
                                  t,
                                  function (e, t) {
                                    return e + t;
                                  },
                                  0
                                ) / n),
                              OvenPlayerConsole.log(
                                "Last8 LOST PACKET AVG  : " + o,
                                "Current Packet LOST: " + s,
                                "Total Packet Lost: " + a.packetsLost,
                                t
                              ),
                              o > A
                                ? ((e.status.avgMoreThanThresholdCount =
                                    e.status.avgMoreThanThresholdCount + 1),
                                  e.status.avgMoreThanThresholdCount >= 60 &&
                                    (OvenPlayerConsole.log(
                                      "NETWORK UNSTABLED!!! "
                                    ),
                                    Q(We.codes[510])))
                                : (e.status.avgMoreThanThresholdCount = 0)),
                            (e.status.prevPacketsLost = a.packetsLost);
                        }
                      }),
                      B(e));
                  });
                }, 2e3);
              }
              function x(e, o, A, s, c) {
                var f = {};
                if (
                  a.getConfig().webrtcConfig &&
                  a.getConfig().webrtcConfig.iceServers
                )
                  (f.iceServers = a.getConfig().webrtcConfig.iceServers),
                    a.getConfig().webrtcConfig.iceTransportPolicy &&
                      (f.iceTransportPolicy =
                        a.getConfig().webrtcConfig.iceTransportPolicy);
                else if (c) {
                  f.iceServers = [];
                  for (var g = 0; g < c.length; g++) {
                    var m = c[g],
                      C = {};
                    C.urls = m.urls;
                    for (var y = !1, b = I(t), w = 0; w < C.urls.length; w++)
                      if (C.urls[w].indexOf(b) > -1) {
                        y = !0;
                        break;
                      }
                    if (!y && C.urls.length > 0) {
                      var E = i().clone(C.urls[0]),
                        x = S(E);
                      b && x && C.urls.push(E.replace(x, b));
                    }
                    (C.username = m.username || m.user_name),
                      (C.credential = m.credential),
                      f.iceServers.push(C);
                  }
                  f.iceTransportPolicy = "relay";
                } else f = l;
                OvenPlayerConsole.log("Main Peer Connection Config : ", f);
                var k = null;
                try {
                  k = new RTCPeerConnection(f);
                } catch (e) {
                  var T = We.codes[506];
                  return (T.error = e), void Q(T);
                }
                (d = { id: e, peerId: o, peerConnection: k }),
                  k
                    .setRemoteDescription(new RTCSessionDescription(A))
                    .then(function () {
                      k.createAnswer()
                        .then(function (t) {
                          var n = (function (e) {
                            for (
                              var t = e.split("\r\n"), n = -1, r = 0;
                              r < t.length - 1;
                              r++
                            )
                              if (
                                ((t[r] = t[r].toLowerCase()),
                                t[r].indexOf("a=rtpmap") > -1 &&
                                  t[r].indexOf("opus") > -1)
                              ) {
                                n = t[r].split(" ")[0].split(":")[1];
                                break;
                              }
                            return n;
                          })(A.sdp);
                          n > -1 &&
                            (function (e, t) {
                              for (
                                var n = e.split("\r\n"), r = !1, o = 0;
                                o < n.length - 1;
                                o++
                              )
                                if (
                                  ((n[o] = n[o].toLowerCase()),
                                  n[o].indexOf("a=fmtp:" + t) > -1)
                                ) {
                                  n[o].indexOf("stereo=1") > -1 && (r = !0);
                                  break;
                                }
                              return r;
                            })(A.sdp, n) &&
                            (t.sdp = (function (e, t) {
                              for (
                                var n = e.split("\r\n"), r = 0;
                                r < n.length - 1;
                                r++
                              )
                                if (n[r].indexOf("a=fmtp:" + t) > -1) {
                                  -1 === n[r].indexOf("stereo=1") &&
                                    (n[r] = n[r] + ";stereo=1");
                                  break;
                                }
                              return n.join("\r\n");
                            })(t.sdp, n)),
                            OvenPlayerConsole.log("Local SDP", t),
                            M(u, {
                              id: e,
                              peer_id: o,
                              command: "answer",
                              sdp: t,
                            }),
                            OvenPlayerConsole.log(
                              "create Host Answer : success"
                            ),
                            k
                              .setLocalDescription(t)
                              .then(function () {})
                              .catch(function (e) {
                                var t = We.codes[505];
                                (t.error = e), Q(t);
                              });
                        })
                        .catch(function (e) {
                          var t = We.codes[504];
                          (t.error = e), Q(t);
                        });
                    })
                    .catch(function (e) {
                      var t = We.codes[503];
                      (t.error = e), Q(t);
                    }),
                  s && L(k, s),
                  (k.onicecandidate = function (t) {
                    t.candidate &&
                      (OvenPlayerConsole.log(
                        "WebRTCLoader send candidate to server : ",
                        t.candidate
                      ),
                      M(u, {
                        id: e,
                        peer_id: o,
                        command: "candidate",
                        candidates: [t.candidate],
                      }));
                  }),
                  (k.onconnectionstatechange = function (e) {
                    OvenPlayerConsole.log(
                      "[on connection state change]",
                      k.connectionState,
                      e
                    ),
                      "connected" === k.connectionState && r && r();
                  }),
                  (k.onicecandidateerror = function (e) {}),
                  (k.onicegatheringstatechange = function (e) {}),
                  (k.oniceconnectionstatechange = function (e) {
                    OvenPlayerConsole.log(
                      "[on ice connection state change]",
                      k.iceConnectionState,
                      e
                    ),
                      "connected" === k.iceConnectionState && r && r(),
                      ("disconnected" === k.iceConnectionState ||
                        "closed" === k.iceConnectionState) &&
                        (h || (d && Q(We.codes[511])));
                  }),
                  (k.ontrack = function (e) {
                    if (
                      (OvenPlayerConsole.log("stream received."),
                      OvenPlayerConsole.log("Recovery On Packet Loss :", v),
                      v && B(d),
                      (p = e.streams[0]),
                      n(e.streams[0]),
                      a.getConfig().webrtcConfig &&
                        a.getConfig().webrtcConfig.playoutDelayHint)
                    )
                      for (
                        var t = a.getConfig().webrtcConfig.playoutDelayHint,
                          r = d.peerConnection.getReceivers(),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var i = r[o];
                        "audio" === i.track.kind
                          ? ((i.playoutDelayHint = t),
                            (i.jitterBufferDelayHint = t))
                          : (i.playoutDelayHint = t),
                          OvenPlayerConsole.log(
                            "WebRTC playoutDelayHint",
                            i,
                            t
                          );
                      }
                  });
              }
              function k(e, t) {
                if (p) {
                  var n = new RTCPeerConnection(l);
                  (g[t] = { id: t, peerId: e, peerConnection: n }),
                    n.addStream(p),
                    n.createOffer(
                      function (r) {
                        n.setLocalDescription(r),
                          M(u, {
                            id: e,
                            peer_id: t,
                            sdp: r,
                            command: "offer_p2p",
                          });
                      },
                      function (e) {},
                      {}
                    ),
                    (n.onicecandidate = function (n) {
                      n.candidate &&
                        (OvenPlayerConsole.log(
                          "WebRTCLoader send candidate to server : " +
                            n.candidate
                        ),
                        M(u, {
                          id: e,
                          peer_id: t,
                          command: "candidate_p2p",
                          candidates: [n.candidate],
                        }));
                    });
                } else
                  setTimeout(function () {
                    k(e, t);
                  }, 100);
              }
              function I(e) {
                var t,
                  n = "";
                return (
                  (t = e.match(
                    /^(?:wss?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
                  )) && (n = t[1]),
                  n
                );
              }
              function S(e) {
                var t,
                  n = "";
                return (
                  (t = e.match(
                    new RegExp(
                      "\\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b",
                      "gi"
                    )
                  )) && (n = t[0]),
                  n
                );
              }
              function T(e) {
                var n = i().clone(e),
                  r = I(t),
                  o = S(n.candidate);
                return new Promise(function (e, t) {
                  ("" !== o && o !== r) || e(null),
                    "Firefox" !== w.browser || S(r)
                      ? ((n.candidate = n.candidate.replace(o, r)), e(n))
                      : e(null);
                });
              }
              function L(e, t) {
                for (var n = 0; n < t.length; n++)
                  if (t[n] && t[n].candidate) {
                    var r = t[n];
                    if (
                      (e
                        .addIceCandidate(new RTCIceCandidate(r))
                        .then(function () {
                          OvenPlayerConsole.log("addIceCandidate : success");
                        })
                        .catch(function (e) {
                          var t = We.codes[502];
                          (t.error = e), Q(t);
                        }),
                      y)
                    ) {
                      var o = T(r);
                      o &&
                        o.then(function (t) {
                          t &&
                            e
                              .addIceCandidate(new RTCIceCandidate(t))
                              .then(function () {
                                OvenPlayerConsole.log(
                                  "cloned addIceCandidate : success"
                                );
                              })
                              .catch(function (e) {
                                var t = We.codes[502];
                                (t.error = e), Q(t);
                              });
                        });
                    }
                  }
              }
              function R() {
                try {
                  ((u = new WebSocket(t)).onopen = function () {
                    (f = !0), M(u, { command: "request_offer" });
                  }),
                    (u.onmessage = function (t) {
                      var n = JSON.parse(t.data);
                      if (n.error) {
                        var r = We.codes[501];
                        return (r.error = n.error), void Q(r);
                      }
                      if (
                        0 !== Object.keys(n).length ||
                        n.constructor !== Object
                      )
                        if ("ping" !== n.command) {
                          if ("offer" === n.command) {
                            var o = n.iceServers || n.ice_servers;
                            x(n.id, n.peer_id, n.sdp, n.candidates, o),
                              0 === n.peer_id
                                ? e.trigger(Ne, !1)
                                : e.trigger(Ne, !0);
                          }
                          if (
                            ("request_offer_p2p" === n.command &&
                              k(n.id, n.peer_id),
                            "answer_p2p" === n.command &&
                              E(n.peer_id)
                                .setRemoteDescription(
                                  new RTCSessionDescription(n.sdp)
                                )
                                .then(function (e) {})
                                .catch(function (e) {
                                  var t = We.codes[503];
                                  (t.error = e), Q(t);
                                }),
                            "candidate" === n.command &&
                              L(E(n.id), n.candidates),
                            "candidate_p2p" === n.command &&
                              L(E(n.peer_id), n.candidates),
                            "notification" === n.command)
                          ) {
                            if ("playlist" === n.type) {
                              var i = n.message.renditions;
                              m = n.message;
                              for (var A = 0; A < i.length; A++) {
                                var a = i[A];
                                s.qualityLevels.push({
                                  bitrate: a.video_track.video.bitrate,
                                  height: a.video_track.video.height,
                                  width: a.video_track.video.width,
                                  index: A,
                                  label: a.name,
                                });
                              }
                              (s.currentQuality = 0), (C = n.message.auto);
                            }
                            if ("rendition_changed" === n.type) {
                              var l = n.message;
                              n.auto && (C = n.auto);
                              for (
                                var c = -1, f = 0;
                                f < m.renditions.length;
                                f++
                              )
                                if (l.rendition_name === m.renditions[f].name) {
                                  (c = f), (s.currentQuality = f);
                                  break;
                                }
                              e.trigger(De, {
                                isAuto: C,
                                currentQuality: c,
                                type: "render",
                              });
                            }
                          }
                          "stop" === n.command &&
                            (d.peerId === n.peer_id
                              ? ((p = null),
                                d.peerConnection.close(),
                                (d = null),
                                e.pause(),
                                M(u, { command: "request_offer" }))
                              : g[n.peer_id] &&
                                (g[n.peer_id].peerConnection.close(),
                                delete g[n.peer_id]));
                        } else M(u, { command: "pong" });
                      else OvenPlayerConsole.log("Empty Message");
                    }),
                    (u.onclose = function (e) {
                      if (!h) {
                        if (r && !f) return void Q();
                        var t = We.codes[501];
                        d && (t = We.codes[511]), Q(t);
                      }
                    }),
                    (u.onerror = function (e) {});
                } catch (e) {
                  Q(e);
                }
              }
              function Q(t) {
                if (
                  (OvenPlayerConsole.log("WebRTC Loader closePeer()"),
                  t || (h = !0),
                  d &&
                    (d.statisticsTimer && clearTimeout(d.statisticsTimer),
                    (p = null),
                    OvenPlayerConsole.log("Closing main peer connection..."),
                    d.peerConnection && d.peerConnection.close(),
                    (d.peerConnection = null),
                    (d = null)),
                  Object.keys(g).length > 0)
                ) {
                  for (var n in g) {
                    var r = g[n].peerConnection;
                    r &&
                      (OvenPlayerConsole.log(
                        "Closing client peer connection..."
                      ),
                      r.close(),
                      (r = null));
                  }
                  g = {};
                }
                u
                  ? (OvenPlayerConsole.log("Closing websocket connection..."),
                    OvenPlayerConsole.log("Send Signaling : Stop."),
                    1 === u.readyState &&
                      ((h = !0),
                      d && M(u, { command: "stop", id: d.id }),
                      u.close()))
                  : (h = !1),
                  (u = null),
                  t && (o && o(t), A(t, e));
              }
              function M(e, t) {
                e && e.send(JSON.stringify(t));
              }
              return (
                (b = window.onbeforeunload),
                (window.onbeforeunload = function (e) {
                  b && b(e),
                    OvenPlayerConsole.log(
                      "This calls auto when browser closed."
                    ),
                    Q();
                }),
                (e.setCurrentQuality = function (e) {
                  if (!m) return -1;
                  var t = m.renditions[e];
                  return t
                    ? (M(u, {
                        command: "change_rendition",
                        id: d.id,
                        rendition_name: t.name,
                        auto: !1,
                      }),
                      (C = !1),
                      (s.currentQuality = e),
                      s.currentQuality)
                    : s.currentQuality;
                }),
                (e.isAutoQuality = function () {
                  return C;
                }),
                (e.setAutoQuality = function (e) {
                  M(u, { command: "change_rendition", id: d.id, auto: e }),
                    (C = e);
                }),
                (c.connect = function () {
                  OvenPlayerConsole.log("WebRTCLoader connecting..."),
                    OvenPlayerConsole.log("WebRTCLoader url : " + t),
                    R();
                }),
                (c.destroy = function () {
                  (h = !0), Q();
                }),
                c
              );
            },
            Bn = function (e, t, n) {
              var r = {},
                o = null,
                i = null,
                A = null,
                a = null,
                s = null,
                l = {
                  name: ce,
                  element: e,
                  mse: null,
                  listener: null,
                  isLoaded: !1,
                  canSeek: !1,
                  isLive: !1,
                  seeking: !1,
                  state: X,
                  buffer: 0,
                  framerate: 0,
                  currentQuality: -1,
                  currentSource: -1,
                  qualityLevels: [],
                  sources: [],
                  adTagUrl: n,
                },
                c = 1e4,
                u = 0,
                f = null,
                p = !1;
              function d() {
                if (_e(a.file, a.type)) {
                  clearTimeout(f),
                    OvenPlayerConsole.log("WEBRTC : onBeforeLoad : ", a),
                    o && (o.destroy(), (o = null));
                  var n = null,
                    i = null;
                  u > 0 &&
                    ((n = function () {
                      clearTimeout(f);
                    }),
                    (i = function () {
                      clearTimeout(f), performance.now(), (p = !0);
                    })),
                    (o = En(
                      r,
                      a.file,
                      function (t) {
                        if (
                          (e.srcObject && (e.srcObject = null),
                          s && (s.close(), (s = null)),
                          (e.srcObject = t),
                          t.getAudioTracks().length > 0)
                        ) {
                          var n =
                            window.AudioContext || window.webkitAudioContext;
                          (function (e) {
                            var t =
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                                  navigator.userAgent
                                ),
                              n =
                                (/iPhone|iPad|iPod/i.test(navigator.userAgent),
                                !1);
                            t &&
                              "suspended" === e.state &&
                              document.addEventListener(
                                "touchend",
                                function () {
                                  n ||
                                    "running" === e.state ||
                                    (e.resume(), (n = !0));
                                }
                              );
                          })((s = new n())),
                            s.createMediaStreamSource(t);
                        }
                      },
                      i,
                      n,
                      qe,
                      t,
                      l
                    )),
                    performance.now(),
                    o.connect(),
                    u > 0 &&
                      (r.once(ye, function (e) {
                        p || (e.newstate === X && (clearTimeout(f), g()));
                      }),
                      r.once(Ce, function () {
                        p = !1;
                      }),
                      (f = setTimeout(function () {
                        if (u > 0) p || (g(), d());
                        else {
                          g();
                          var e = We.codes[512];
                          qe(e, r);
                        }
                        u--;
                      }, c)));
                }
              }
              function g() {
                o && (o.destroy(), (o = null), (e.srcObject = null));
              }
              return (
                (r = bn(l, t, function (e) {
                  var n = t.getConfig();
                  n.webrtcConfig &&
                    ("number" == typeof n.webrtcConfig.connectionTimeout &&
                      n.webrtcConfig.connectionTimeout > 0 &&
                      (c = n.webrtcConfig.connectionTimeout),
                    "number" == typeof n.webrtcConfig.timeoutMaxRetry &&
                      n.webrtcConfig.timeoutMaxRetry > 0 &&
                      (u = n.webrtcConfig.timeoutMaxRetry)),
                    (a = e),
                    d();
                })),
                (i = r.super("destroy")),
                (A = r.super("play")),
                OvenPlayerConsole.log("WEBRTC PROVIDER LOADED."),
                (r.destroy = function () {
                  clearTimeout(f),
                    g(),
                    OvenPlayerConsole.log("WEBRTC :  PROVIDER DESTROYED."),
                    i();
                }),
                (r.play = function () {
                  u > 0 && !p && d(), A();
                }),
                r
              );
            },
            xn = function (e, t, n) {
              var r = t ? 1e3 : 1024;
              if (Math.abs(e) < r) return e + " B";
              var o = n || "B",
                i = [
                  "k" + o,
                  "M" + o,
                  "G" + o,
                  "T" + o,
                  "P" + o,
                  "E" + o,
                  "Z" + o,
                  "Y" + o,
                ],
                A = -1;
              do {
                (e /= r), ++A;
              } while (Math.abs(e) >= r && A < i.length - 1);
              return e.toFixed(1) + i[A];
            },
            kn = function (e, t, n) {
              var r = {},
                o = null,
                A = null,
                a = null,
                s = 0,
                l = "";
              try {
                if (dashjs.Version < "3.0.0") throw We.codes[103];
                var c = function (e) {
                    o.updateSettings({
                      streaming: { abr: { autoSwitchBitrate: { video: e } } },
                    });
                  },
                  u = function () {
                    return o.getSettings().streaming.abr.autoSwitchBitrate
                      .video;
                  };
                (o = dashjs.MediaPlayer().create()).initialize(e, null, !1),
                  (window.op_dash = o);
                var f = {
                  name: ue,
                  element: e,
                  mse: o,
                  listener: null,
                  isLoaded: !1,
                  canSeek: !1,
                  isLive: !1,
                  seeking: !1,
                  state: X,
                  buffer: 0,
                  framerate: 0,
                  currentQuality: -1,
                  currentSource: -1,
                  qualityLevels: [],
                  sources: [],
                  adTagUrl: n,
                };
                (r = bn(f, t, function (e, n) {
                  OvenPlayerConsole.log(
                    "DASH : Attach File : ",
                    e,
                    "lastPlayPosition : " + n
                  ),
                    c(!0),
                    (l = e.file),
                    !0 === e.lowLatency
                      ? (o.updateSettings({
                          streaming: { lowLatencyEnabled: e.lowLatency },
                        }),
                        t.getConfig().lowLatencyMpdLiveDelay &&
                          "number" ==
                            typeof t.getConfig().lowLatencyMpdLiveDelay &&
                          o.updateSettings({
                            streaming: {
                              liveDelay: t.getConfig().lowLatencyMpdLiveDelay,
                            },
                          }))
                      : o.updateSettings({
                          streaming: {
                            lowLatencyEnabled: !1,
                            liveDelay: void 0,
                          },
                        }),
                    o.updateSettings({
                      debug: { logLevel: dashjs.Debug.LOG_LEVEL_NONE },
                    });
                  var i = t.getConfig().dashConfig;
                  i && o.updateSettings(i),
                    r.trigger("dashPrepared", o),
                    o.attachSource(l),
                    (s = n);
                })),
                  (A = r.super("play")),
                  (a = r.super("destroy")),
                  OvenPlayerConsole.log("DASH PROVIDER LOADED."),
                  o.on(dashjs.MediaPlayer.events.ERROR, function (e) {
                    var t = We.codes[302];
                    (t.error = e), qe(t, r);
                  }),
                  o.on(
                    dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED,
                    function (e) {
                      e &&
                        e.mediaType &&
                        "video" === e.mediaType &&
                        r.trigger(De, {
                          isAuto: u(),
                          currentQuality: f.currentQuality,
                          type: "request",
                        });
                    }
                  ),
                  o.on(
                    dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED,
                    function (e) {
                      e &&
                        e.mediaType &&
                        "video" === e.mediaType &&
                        ((f.currentQuality = e.newQuality),
                        r.trigger(De, {
                          isAuto: u(),
                          currentQuality: e.newQuality,
                          type: "render",
                        }));
                    }
                  ),
                  o.on(
                    dashjs.MediaPlayer.events.PLAYBACK_METADATA_LOADED,
                    function (e) {
                      OvenPlayerConsole.log(
                        "DASH : PLAYBACK_METADATA_LOADED  : ",
                        o.getQualityFor("video"),
                        o.getBitrateInfoListFor("video"),
                        o.getBitrateInfoListFor("video")[
                          o.getQualityFor("video")
                        ]
                      );
                      var t = o.getBitrateInfoListFor("video");
                      f.currentQuality = o.getQualityFor("video");
                      for (var n = 0; n < t.length; n++)
                        i().findWhere(f.qualityLevels, {
                          bitrate: t[n].bitrate,
                          height: t[n].height,
                          width: t[n].width,
                        }) ||
                          f.qualityLevels.push({
                            bitrate: t[n].bitrate,
                            height: t[n].height,
                            width: t[n].width,
                            index: t[n].qualityIndex,
                            label:
                              t[n].width +
                              "x" +
                              t[n].height +
                              ", " +
                              xn(t[n].bitrate, !0, "bps"),
                          });
                      o.isDynamic() && (f.isLive = !0),
                        s && !f.isLive && o.seek(s);
                    }
                  ),
                  (r.play = function (e) {
                    r.getState() === ie || r.getState() === Ae || A(e);
                  }),
                  (r.setCurrentQuality = function (e) {
                    return (
                      r.getState() !== ee && r.play(),
                      (f.currentQuality = e),
                      u() && c(!1),
                      o.setQualityFor("video", e),
                      f.currentQuality
                    );
                  }),
                  (r.isAutoQuality = function () {
                    return u();
                  }),
                  (r.setAutoQuality = function (e) {
                    c(e);
                  }),
                  (r.destroy = function () {
                    o.destroy ? o.destroy() : o.reset(),
                      (o = null),
                      r.trigger("dashDestroyed"),
                      OvenPlayerConsole.log("DASH : PROVIDER DESTROYED."),
                      a();
                  });
              } catch (e) {
                if (e && e.code && 103 === e.code) throw e;
                var p = We.codes[105];
                throw ((p.error = e), p);
              }
              return r;
            },
            In = function (e, t, n) {
              var r = {},
                o = null,
                i = null,
                A = null,
                a = null,
                s = !1;
              try {
                var l = {
                    debug: !1,
                    maxBufferLength: 20,
                    maxMaxBufferLength: 30,
                  },
                  c = t.getConfig().hlsConfig;
                if (c) for (var u in c) l[u] = c[u];
                (o = new Hls(l)), (window.op_hls = o), o.attachMedia(e);
                var f = {
                  name: fe,
                  element: e,
                  mse: o,
                  listener: null,
                  isLoaded: !1,
                  canSeek: !1,
                  isLive: !1,
                  seeking: !1,
                  state: X,
                  buffer: 0,
                  framerate: 0,
                  currentQuality: -1,
                  currentSource: -1,
                  qualityLevels: [],
                  sources: [],
                  adTagUrl: n,
                };
                ((r = bn(f, t, function (e, t) {
                  OvenPlayerConsole.log(
                    "HLS : onExtendedLoad : ",
                    e,
                    "lastPlayPosition : " + t
                  ),
                    r.trigger("hlsPrepared", o),
                    o.loadSource(e.file),
                    o.once(Hls.Events.MANIFEST_LOADED, function (e, t) {
                      for (var n = 0; n < o.levels.length; n++) {
                        var r = o.levels[n];
                        f.qualityLevels.push({
                          bitrate: r.bitrate,
                          height: r.height,
                          width: r.width,
                          index: n,
                          label:
                            r.width +
                            "x" +
                            r.height +
                            ", " +
                            xn(r.bitrate, !0, "bps"),
                        });
                      }
                      f.currentQuality = o.firstLevel;
                    }),
                    o.once(Hls.Events.LEVEL_LOADED, function (e, n) {
                      (s = !0),
                        a && (clearTimeout(a), (a = null)),
                        n.details.live
                          ? (f.isLive = !0)
                          : t && t >= 0 && r.seek(t);
                    }),
                    o.on(Hls.Events.LEVEL_SWITCHED, function (e, t) {
                      (f.currentQuality = t.level),
                        r.trigger(De, {
                          isAuto: o.autoLevelEnabled,
                          currentQuality: f.currentQuality,
                          type: "render",
                        });
                    }),
                    o.on(Hls.Events.ERROR, function (t, n) {
                      if (
                        n &&
                        n.networkDetails &&
                        202 === n.networkDetails.status
                      )
                        return (
                          a && (clearTimeout(a), (a = null)),
                          r.setState(ne),
                          void (a = setTimeout(function () {
                            o && (r.stop(), o.stopLoad(), o.loadSource(e.file));
                          }, 1e3))
                        );
                      if (n.fatal) {
                        var i = 302;
                        n && n.networkDetails && 400 === n.networkDetails.status
                          ? (i = 306)
                          : n &&
                            n.networkDetails &&
                            403 === n.networkDetails.status
                          ? (i = 307)
                          : n &&
                            n.networkDetails &&
                            406 === n.networkDetails.status &&
                            (i = 308);
                        var A = We.codes[i];
                        (A.error = n.details), qe(A, r);
                      }
                    }),
                    r.on(ye, function (e) {
                      s ||
                        e.prevstate !== ne ||
                        e.newstate !== X ||
                        (a && (clearTimeout(a), (a = null)), o && o.stopLoad());
                    });
                })).setCurrentQuality = function (e) {
                  return (
                    (o.currentLevel = e),
                    (f.currentQuality = e),
                    f.currentQuality
                  );
                }),
                  (r.isAutoQuality = function () {
                    return o.autoLevelEnabled;
                  }),
                  (r.setAutoQuality = function (e) {
                    o.currentLevel = e ? -1 : o.currentLevel;
                  }),
                  (i = r.super("stop")),
                  (r.stop = function () {
                    a && (clearTimeout(a), (a = null)), o && o.stopLoad(), i();
                  }),
                  (A = r.super("destroy")),
                  (r.destroy = function () {
                    a && (clearTimeout(a), (a = null)),
                      o && (o.destroy(), r.trigger("hlsDestroyed")),
                      (o = null),
                      OvenPlayerConsole.log("HLS : PROVIDER DESTROYED."),
                      A();
                  }),
                  OvenPlayerConsole.log("HLS PROVIDER LOADED.");
              } catch (e) {
                var p = We.codes[106];
                throw ((p.error = e), p);
              }
              return r;
            },
            Sn = function (e) {
              var t = {};
              Ge(t), OvenPlayerConsole.log("API loaded.");
              var n = (function (e) {
                  var t = {},
                    n = { playlist: [], currentIndex: 0 },
                    r = Ke();
                  OvenPlayerConsole.log("PlaylistManager loaded.");
                  var o = function (e) {
                    if (e && (e.file || e.host || e.application || e.stream)) {
                      var t = Object.assign({}, { default: !1 }, e);
                      (t.file = A("" + t.file)),
                        t.host &&
                          t.application &&
                          t.stream &&
                          ((t.file =
                            t.host +
                            "/" +
                            t.application +
                            "/stream/" +
                            t.stream),
                          delete t.host,
                          delete t.application,
                          delete t.stream);
                      var n = /^[^/]+\/(?:x-)?([^/]+)$/;
                      if (
                        (n.test(t.type) &&
                          ((t.mimeType = t.type),
                          (t.type = t.type.replace(n, "$1"))),
                        Ve(t.file)
                          ? (t.type = "rtmp")
                          : _e(t.file)
                          ? (t.type = "webrtc")
                          : He(t.file, t.type)
                          ? (t.type = "hls")
                          : Je(t.file, t.type)
                          ? (t.type = "dash")
                          : t.type || (t.type = a(t.file)),
                        t.lowLatency && (t.lowLatency = t.lowLatency),
                        t.type)
                      ) {
                        switch (t.type) {
                          case "m3u8":
                          case "vnd.apple.mpegurl":
                            t.type = "hls";
                            break;
                          case "m4a":
                            t.type = "aac";
                            break;
                          case "smil":
                            t.type = "rtmp";
                        }
                        return (
                          Object.keys(t).forEach(function (e) {
                            "" === t[e] && delete t[e];
                          }),
                          t
                        );
                      }
                    }
                  };
                  return (
                    (t.initPlaylist = function (e, t) {
                      OvenPlayerConsole.log(
                        "PlaylistManager setPlaylist() ",
                        e
                      );
                      var A =
                        (i().isArray(e) ? e : [e])
                          .map(function (e) {
                            i().isArray(e.tracks) || delete e.tracks;
                            var n = Object.assign(
                              {},
                              { sources: [], tracks: [], title: "" },
                              e
                            );
                            n.sources !== Object(n.sources) ||
                              i().isArray(n.sources) ||
                              (n.sources = [o(n.sources)]),
                              (i().isArray(n.sources) &&
                                0 !== n.sources.length) ||
                                (n.sources = [o(n)]),
                              (i().isArray(n.sources) &&
                                0 !== n.sources.length) ||
                                (e.levels
                                  ? (n.sources = e.levels)
                                  : (n.sources = [o(e)]));
                            for (var A = 0; A < n.sources.length; A++) {
                              var a,
                                s = n.sources[A];
                              if (s) {
                                var l = s.default;
                                (s.default = !!l && "true" === l.toString()),
                                  n.sources[A].label ||
                                    (n.sources[A].label =
                                      n.sources[A].type + "-" + A.toString()),
                                  (a = o(n.sources[A])),
                                  r.findProviderNameBySource(a)
                                    ? (n.sources[A] = a)
                                    : (n.sources[A] = null);
                              }
                            }
                            return (
                              (n.sources = n.sources.filter(function (e) {
                                return !!e;
                              })),
                              !n.title &&
                                n.sources[0] &&
                                n.sources[0].label &&
                                (n.title = n.sources[0].label),
                              t.isCurrentProtocolOnly() &&
                                (n.sources = (function (e) {
                                  if (e) {
                                    var t = n.sources[0].type;
                                    return i().filter(e, { type: t });
                                  }
                                })(n.sources)),
                              i().isArray(n.tracks) || (n.tracks = []),
                              i().isArray(n.captions) &&
                                ((n.tracks = n.tracks.concat(n.captions)),
                                delete n.captions),
                              (n.tracks = n.tracks
                                .map(function (e) {
                                  return (
                                    !(!e || !e.file) &&
                                    Object.assign(
                                      {},
                                      { kind: "captions", default: !1 },
                                      e
                                    )
                                  );
                                })
                                .filter(function (e) {
                                  return !!e;
                                })),
                              n
                            );
                          })
                          .filter(function (e) {
                            return e.sources && e.sources.length > 0;
                          }) || [];
                      return (n.playlist = A), A;
                    }),
                    (t.getPlaylist = function () {
                      return (
                        OvenPlayerConsole.log(
                          "PlaylistManager getPlaylist() ",
                          n.playlist
                        ),
                        n.playlist
                      );
                    }),
                    (t.getCurrentPlayList = function () {
                      return n.playlist[n.currentIndex]
                        ? n.playlist[n.currentIndex]
                        : [];
                    }),
                    (t.getCurrentPlaylistIndex = function () {
                      return n.currentIndex;
                    }),
                    (t.setCurrentPlaylist = function (t) {
                      return (
                        n.playlist[t] &&
                          ((n.currentIndex = t), e.trigger(he, n.currentIndex)),
                        n.currentIndex
                      );
                    }),
                    (t.getCurrentSources = function () {
                      return n.playlist[n.currentIndex]
                        ? (OvenPlayerConsole.log(
                            "PlaylistManager getCurrentSources() ",
                            n.playlist[n.currentIndex].sources
                          ),
                          n.playlist[n.currentIndex].sources)
                        : null;
                    }),
                    (t.getCurrentAdTag = function () {
                      if (n.playlist[n.currentIndex])
                        return n.playlist[n.currentIndex].adTagUrl || "";
                    }),
                    t
                  );
                })(t),
                o = (function () {
                  var e = Ke(),
                    t = {},
                    n = {};
                  OvenPlayerConsole.log("ProviderController loaded.");
                  var r = function (e, n) {
                      t[e] ||
                        (OvenPlayerConsole.log(
                          "ProviderController _registerProvider() ",
                          e
                        ),
                        (t[e] = n));
                    },
                    o = {
                      html5: function () {
                        var e = wn;
                        return r(le, e), { name: le, provider: e };
                      },
                      webrtc: function () {
                        var e = Bn;
                        return r(ce, e), { name: ce, provider: e };
                      },
                      dash: function () {
                        var e = kn;
                        return r(ue, e), { name: ue, provider: e };
                      },
                      hls: function () {
                        var e = In;
                        return r(fe, e), { name: fe, provider: e };
                      },
                    };
                  return (
                    (n.loadProviders = function (t) {
                      var n = e.findProviderNamesByPlaylist(t);
                      return (
                        OvenPlayerConsole.log(
                          "ProviderController loadProviders() ",
                          n
                        ),
                        n
                          ? Promise.all(
                              n
                                .filter(function (e) {
                                  return !!o[e];
                                })
                                .map(function (e) {
                                  return o[e]();
                                })
                            )
                          : Promise.reject(We.codes[101])
                      );
                    }),
                    (n.findByName = function (e) {
                      return (
                        OvenPlayerConsole.log(
                          "ProviderController findByName() ",
                          e
                        ),
                        t[e]
                      );
                    }),
                    (n.getProviderBySource = function (t) {
                      var r = e.findProviderNameBySource(t);
                      return (
                        OvenPlayerConsole.log(
                          "ProviderController getProviderBySource() ",
                          r
                        ),
                        n.findByName(r)
                      );
                    }),
                    (n.isSameProvider = function (t, n) {
                      return (
                        OvenPlayerConsole.log(
                          "ProviderController isSameProvider() ",
                          e.findProviderNameBySource(t),
                          e.findProviderNameBySource(n)
                        ),
                        e.findProviderNameBySource(t) ===
                          e.findProviderNameBySource(n)
                      );
                    }),
                    n
                  );
                })(),
                s = Y(),
                l = (function (e, t) {
                  var n = {},
                    r = ze(e),
                    o = "";
                  return (
                    OvenPlayerConsole.log("MediaManager loaded. browser : ", t),
                    (n.createMedia = function (e, t) {
                      return (
                        n.empty(),
                        (i = t.isLoop()),
                        (A = t.isAutoStart()),
                        (o = document.createElement("video")).setAttribute(
                          "disableremoteplayback",
                          ""
                        ),
                        o.setAttribute("webkit-playsinline", "true"),
                        o.setAttribute("playsinline", "true"),
                        i && o.setAttribute("loop", ""),
                        A && o.setAttribute("autoplay", ""),
                        r.append(o),
                        o
                      );
                      var i, A;
                    }),
                    (n.createAdContainer = function () {
                      var e = document.createElement("div");
                      return e.setAttribute("class", "op-ads"), r.append(e), e;
                    }),
                    (n.empty = function () {
                      OvenPlayerConsole.log("MediaManager removeElement()"),
                        r.removeChild(o),
                        (o = null);
                    }),
                    (n.destroy = function () {
                      r.removeChild(), (r = null), (o = null);
                    }),
                    n
                  );
                })(e, s),
                c = "",
                u = "",
                f = "",
                p = function (e) {
                  OvenPlayerConsole.log("runNextPlaylist");
                  var r = e,
                    o = !!n.getPlaylist()[r];
                  u.setSourceIndex(0),
                    u.setVolume(c.getVolume()),
                    o ? (n.setCurrentPlaylist(r), d()) : t.trigger(ve, null);
                },
                d = function (e) {
                  return o
                    .loadProviders(n.getCurrentPlayList())
                    .then(function (e) {
                      if (e.length < 1) throw We.codes[101];
                      c && (c.destroy(), (c = null)),
                        f && (f.destroy(), (f = null)),
                        (f = (function (e, t) {
                          var n = {},
                            r = [],
                            o = -1,
                            A = K(),
                            a = !0;
                          OvenPlayerConsole.log("Caption Manager >> ", t);
                          var s = function (e, t) {
                              return (
                                (e.data = t || []),
                                (e.name = e.label || e.name || e.language),
                                (e.id = (function (e, t) {
                                  var n,
                                    o = e.kind || "cc";
                                  return (
                                    (n =
                                      e.default || e.defaulttrack
                                        ? "default"
                                        : e.id || o + t),
                                    a && (l(r.length || 0), (a = !1)),
                                    n
                                  );
                                })(e, r.length)),
                                r.push(e),
                                e.id
                              );
                            },
                            l = function (t) {
                              (o = t), e.trigger(Pe, o);
                            };
                          if (
                            e.getConfig().playlist &&
                            e.getConfig().playlist.length > 0
                          ) {
                            var c = e.getConfig().playlist[t];
                            if (c && c.tracks && c.tracks.length > 0)
                              for (
                                var u = function (t) {
                                    var n = c.tracks[t];
                                    Ye(n.kind) &&
                                      !i().findWhere(n, { file: n.file }) &&
                                      A.load(
                                        n,
                                        n.lang,
                                        function (e) {
                                          e && e.length > 0 && s(n, e);
                                        },
                                        function (t) {
                                          var n = We.codes[305];
                                          (n.error = t), e.trigger(Ce, n);
                                        }
                                      );
                                  },
                                  f = 0;
                                f < c.tracks.length;
                                f++
                              )
                                u(f);
                          }
                          return (
                            e.on(Le, function (t) {
                              var n = t.position;
                              if (o > -1 && r[o]) {
                                var A = i().filter(r[o].data, function (e) {
                                  return (
                                    n >= e.startTime &&
                                    (!e.endTime || n) <= e.endTime
                                  );
                                });
                                A && A.length > 0 && e.trigger(Fe, A[0]);
                              }
                            }),
                            (n.flushCaptionList = function (e) {
                              (r = []), l(e);
                            }),
                            (n.getCaptionList = function () {
                              return r || [];
                            }),
                            (n.getCurrentCaption = function () {
                              return o;
                            }),
                            (n.setCurrentCaption = function (e) {
                              if (!(e > -2 && e < r.length)) return null;
                              l(e);
                            }),
                            (n.addCaption = function (t) {
                              Ye(t.kind) &&
                                !i().findWhere(A, { file: t.file }) &&
                                A.load(
                                  t,
                                  function (e) {
                                    e && e.length > 0 && s(t, e);
                                  },
                                  function (t) {
                                    var n = errors[305];
                                    (n.error = t), e.trigger(Ce, n);
                                  }
                                );
                            }),
                            (n.removeCaption = function (e) {
                              return e > -1 && e < r.length
                                ? (r.splice(e, 1), r)
                                : null;
                            }),
                            (n.destroy = function () {
                              (r = []), (A = null), e.off(Le, null, n);
                            }),
                            n
                          );
                        })(t, n.getCurrentPlaylistIndex())),
                        OvenPlayerConsole.log("API : init() captions");
                      var r = $e(n.getCurrentSources(), u),
                        o = e[r].name;
                      OvenPlayerConsole.log("API : init() provider", o),
                        (c = e[r].provider(
                          l.createMedia(o, u),
                          u,
                          n.getCurrentAdTag()
                        )),
                        o === pe &&
                          Object.assign(
                            t,
                            (function (e) {
                              return {
                                externalCallbackCreep: function (t) {
                                  return t.name && t.data
                                    ? e.triggerEventFromExternal(t.name, t.data)
                                    : null;
                                },
                              };
                            })(c)
                          ),
                        c.on("all", function (e, r) {
                          if (
                            e === Ce &&
                            u.getConfig().autoFallback &&
                            t.getCurrentSource() + 1 < t.getSources().length
                          )
                            return (
                              t.pause(),
                              void t.setCurrentSource(t.getCurrentSource() + 1)
                            );
                          "complete" === e &&
                            p(n.getCurrentPlaylistIndex() + 1),
                            e === Me && u.isAutoStart() && t.play(),
                            t.trigger(e, r);
                        });
                    })
                    .then(function () {
                      c.preload(n.getCurrentSources(), e)
                        .then(function () {})
                        .catch(function (e) {
                          if (e && e.code && We.codes[e.code])
                            t.trigger(Ce, We.codes[e.code]);
                          else {
                            var n = We.codes[100];
                            (n.error = e), t.trigger(Ce, n);
                          }
                        });
                    })
                    .catch(function (e) {
                      if (e && e.code && We.codes[e.code])
                        t.trigger(Ce, We.codes[e.code]);
                      else {
                        var n = We.codes[100];
                        (n.error = e), t.trigger(Ce, n);
                      }
                    });
                };
              return (
                (t.init = function (r) {
                  r || (r = {}),
                    (r.mediaContainer = e),
                    (r.browser = s),
                    (u = (function (e, t) {
                      OvenPlayerConsole.log("Configurator loaded.", e);
                      var n = (function (e) {
                        !(function (e) {
                          Object.keys(e).forEach(function (t) {
                            "id" !== t &&
                              (e[t] = (function (e) {
                                if (void 0 === e) return null;
                                if ("string" == typeof e && e.length < 6) {
                                  var t = e.toLowerCase();
                                  if ("true" === t) return !0;
                                  if ("false" === t) return !1;
                                  if (
                                    !isNaN(Number(e)) &&
                                    !isNaN(parseFloat(e))
                                  )
                                    return Number(e);
                                }
                                return e;
                              })(e[t]));
                          });
                        })(e);
                        var t = Object.assign(
                            {},
                            {
                              mediaContainer: "",
                              playbackRates: [2, 1.5, 1, 0.5, 0.25],
                              playbackRate: 1,
                              mute: !1,
                              volume: 100,
                              loop: !1,
                              controls: !0,
                              autoStart: !1,
                              autoFallback: !0,
                              timecode: !0,
                              sourceIndex: -1,
                              browser: "",
                              hidePlaylistIcon: !1,
                              rtmpBufferTime: 1,
                              rtmpBufferTimeMax: 3,
                              adClient: "googleima",
                              currentProtocolOnly: !1,
                              systemText: null,
                              lang: "en",
                              loadingRetryCount: 0,
                              expandFullScreenUI: !0,
                              fullscreenOption: null,
                              showBigPlayButton: !0,
                            },
                            e
                          ),
                          n = [];
                        t.systemText &&
                          (n = i().isArray(t.systemText)
                            ? t.systemText
                            : [t.systemText]);
                        for (var r = 0; r < n.length; r++)
                          if (n[r].lang) {
                            var o = i().findWhere(je, { lang: n[r].lang });
                            o
                              ? Object.assign(o, n[r])
                              : (((o = i().findWhere(je, { lang: "en" })).lang =
                                  n[r].lang),
                                je.push(Object.assign(n[r], o)));
                          }
                        t.systemText = i().findWhere(je, { lang: t.lang });
                        var A = t.playbackRates;
                        (A = A.filter(function (e) {
                          return i().isNumber(e) && e >= 0.25 && e <= 4;
                        }).map(function (e) {
                          return Math.round(4 * e) / 4;
                        })).indexOf(1) < 0 && A.push(1),
                          A.sort(),
                          (t.playbackRates = A),
                          (t.rtmpBufferTime =
                            t.rtmpBufferTime > 10 ? 10 : t.rtmpBufferTime),
                          (t.rtmpBufferTimeMax =
                            t.rtmpBufferTimeMax > 50
                              ? 50
                              : t.rtmpBufferTimeMax),
                          t.playbackRates.indexOf(t.playbackRate) < 0 &&
                            (t.playbackRate = 1);
                        var a = t.playlist;
                        if (a)
                          i().isArray(a.playlist) &&
                            ((t.feedData = a), (t.playlist = a.playlist));
                        else {
                          var s = i().pick(t, [
                            "title",
                            "description",
                            "type",
                            "image",
                            "file",
                            "sources",
                            "tracks",
                            "host",
                            "application",
                            "stream",
                            "adTagUrl",
                          ]);
                          t.playlist = [s];
                        }
                        return delete t.duration, t;
                      })(e);
                      return {
                        getConfig: function () {
                          return n;
                        },
                        getAdClient: function () {
                          return n.adClient;
                        },
                        setConfig: function (e, t) {
                          n[e] = t;
                        },
                        getContainer: function () {
                          return n.mediaContainer;
                        },
                        getPlaybackRate: function () {
                          return n.playbackRate;
                        },
                        setPlaybackRate: function (e) {
                          return (n.playbackRate = e), e;
                        },
                        getQualityLabel: function () {
                          return n.qualityLabel;
                        },
                        setQualityLabel: function (e) {
                          n.qualityLabel = e;
                        },
                        isCurrentProtocolOnly: function () {
                          return n.currentProtocolOnly;
                        },
                        getSourceIndex: function () {
                          return n.sourceIndex;
                        },
                        setSourceIndex: function (e) {
                          n.sourceIndex = e;
                        },
                        setTimecodeMode: function (e) {
                          n.timecode !== e &&
                            ((n.timecode = e), t.trigger(Ue, e));
                        },
                        isTimecodeMode: function () {
                          return n.timecode;
                        },
                        getRtmpBufferTime: function () {
                          return n.rtmpBufferTime;
                        },
                        getRtmpBufferTimeMax: function () {
                          return n.rtmpBufferTimeMax;
                        },
                        setMute: function (e) {
                          n.mute = e;
                        },
                        isMute: function () {
                          return n.mute;
                        },
                        getVolume: function () {
                          return n.volume;
                        },
                        setVolume: function (e) {
                          n.volume = e;
                        },
                        isLoop: function () {
                          return n.loop;
                        },
                        isAutoStart: function () {
                          return n.autoStart;
                        },
                        isControls: function () {
                          return n.controls;
                        },
                        getPlaybackRates: function () {
                          return n.playbackRates;
                        },
                        getBrowser: function () {
                          return n.browser;
                        },
                        getSystemText: function () {
                          return n.systemText;
                        },
                        getLanguage: function () {
                          return n.lang;
                        },
                        getPlaylist: function () {
                          return n.playlist;
                        },
                        setPlaylist: function (e) {
                          return (
                            i().isArray(e)
                              ? (n.playlist = e)
                              : (n.playlist = [e]),
                            n.playlist
                          );
                        },
                      };
                    })(r, t)),
                    OvenPlayerConsole.log("API : init()"),
                    OvenPlayerConsole.log("API : init() config : ", u),
                    (We.codes = u.getSystemText().api.error),
                    n.initPlaylist(u.getPlaylist(), u),
                    OvenPlayerConsole.log(
                      "API : init() sources : ",
                      n.getCurrentSources()
                    ),
                    d(),
                    setTimeout(function () {
                      t.trigger(de);
                    });
                }),
                (t.getProviderName = function () {
                  return c ? c.getName() : null;
                }),
                (t.getMseInstance = function () {
                  return c ? c.getMse() : null;
                }),
                (t.getConfig = function () {
                  return (
                    OvenPlayerConsole.log("API : getConfig()", u.getConfig()),
                    u.getConfig()
                  );
                }),
                (t.getBrowser = function () {
                  return u.getBrowser();
                }),
                (t.setTimecodeMode = function (e) {
                  OvenPlayerConsole.log("API : setTimecodeMode()", e),
                    u.setTimecodeMode(e);
                }),
                (t.isTimecodeMode = function () {
                  return (
                    OvenPlayerConsole.log("API : isTimecodeMode()"),
                    u.isTimecodeMode()
                  );
                }),
                (t.getFramerate = function () {
                  if ((OvenPlayerConsole.log("API : getFramerate()"), c))
                    return c.getFramerate();
                }),
                (t.seekFrame = function (e) {
                  return c
                    ? (OvenPlayerConsole.log("API : seekFrame()", e),
                      c.seekFrame(e))
                    : null;
                }),
                (t.getDuration = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getDuration()",
                        c.getDuration()
                      ),
                      c.getDuration())
                    : null;
                }),
                (t.getPosition = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getPosition()",
                        c.getPosition()
                      ),
                      c.getPosition())
                    : null;
                }),
                (t.getVolume = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getVolume()",
                        c.getVolume()
                      ),
                      c.getVolume())
                    : null;
                }),
                (t.setVolume = function (e) {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : setVolume() " + e),
                    c.setVolume(e);
                }),
                (t.setMute = function (e) {
                  return c
                    ? (OvenPlayerConsole.log("API : setMute() " + e),
                      c.setMute(e))
                    : null;
                }),
                (t.getMute = function () {
                  return c
                    ? (OvenPlayerConsole.log("API : getMute() " + c.getMute()),
                      c.getMute())
                    : null;
                }),
                (t.load = function (e) {
                  return (
                    OvenPlayerConsole.log("API : load() ", e),
                    e &&
                      (u.setSourceIndex(0),
                      c &&
                        c.getQualityLevels().length > 0 &&
                        c.setCurrentQuality(0),
                      "sources" in e
                        ? u.setPlaylist(e)
                        : u.setPlaylist({ sources: e }),
                      n.initPlaylist(u.getPlaylist(), u)),
                    d()
                  );
                }),
                (t.play = function () {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : play() "),
                    c.metaLoaded() || u.isAutoStart()
                      ? c.play()
                      : t.once(Me, function () {
                          c.play();
                        });
                }),
                (t.pause = function () {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : pause() "), c.pause();
                }),
                (t.seek = function (e) {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : seek() " + e), c.seek(e);
                }),
                (t.setPlaybackRate = function (e) {
                  return c
                    ? (OvenPlayerConsole.log("API : setPlaybackRate() ", e),
                      c.setPlaybackRate(u.setPlaybackRate(e)))
                    : null;
                }),
                (t.getPlaybackRate = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getPlaybackRate() ",
                        c.getPlaybackRate()
                      ),
                      c.getPlaybackRate())
                    : null;
                }),
                (t.getPlaylist = function () {
                  return (
                    OvenPlayerConsole.log(
                      "API : getPlaylist() ",
                      n.getPlaylist()
                    ),
                    n.getPlaylist()
                  );
                }),
                (t.getCurrentPlaylist = function () {
                  return (
                    OvenPlayerConsole.log(
                      "API : getCurrentPlaylist() ",
                      n.getCurrentPlaylistIndex()
                    ),
                    n.getCurrentPlaylistIndex()
                  );
                }),
                (t.setCurrentPlaylist = function (e) {
                  OvenPlayerConsole.log("API : setCurrentPlaylist() ", e), p(e);
                }),
                (t.getSources = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getSources() ",
                        c.getSources()
                      ),
                      c.getSources())
                    : null;
                }),
                (t.getCurrentSource = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getCurrentSource() ",
                        c.getCurrentSource()
                      ),
                      c.getCurrentSource())
                    : null;
                }),
                (t.setCurrentSource = function (e) {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : setCurrentSource() ", e);
                  var n = c.getPosition();
                  return (
                    u.setSourceIndex(e),
                    d(n).then(function () {
                      t.trigger(Oe, { currentSource: e });
                    }),
                    e
                  );
                }),
                (t.getQualityLevels = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getQualityLevels() ",
                        c.getQualityLevels()
                      ),
                      c.getQualityLevels())
                    : null;
                }),
                (t.getCurrentQuality = function () {
                  return c
                    ? (OvenPlayerConsole.log(
                        "API : getCurrentQuality() ",
                        c.getCurrentQuality()
                      ),
                      c.getCurrentQuality())
                    : null;
                }),
                (t.setCurrentQuality = function (e) {
                  return c
                    ? (OvenPlayerConsole.log("API : setCurrentQuality() ", e),
                      c.setCurrentQuality(e))
                    : null;
                }),
                (t.isAutoQuality = function () {
                  return c
                    ? (OvenPlayerConsole.log("API : isAutoQuality()"),
                      c.isAutoQuality())
                    : null;
                }),
                (t.setAutoQuality = function (e) {
                  return c
                    ? (OvenPlayerConsole.log("API : setAutoQuality() ", e),
                      c.setAutoQuality(e))
                    : null;
                }),
                (t.getCaptionList = function () {
                  return f
                    ? (OvenPlayerConsole.log(
                        "API : getCaptionList() ",
                        f.getCaptionList()
                      ),
                      f.getCaptionList())
                    : null;
                }),
                (t.getCurrentCaption = function () {
                  return f
                    ? (OvenPlayerConsole.log(
                        "API : getCurrentCaption() ",
                        f.getCurrentCaption()
                      ),
                      f.getCurrentCaption())
                    : null;
                }),
                (t.setCurrentCaption = function (e) {
                  if (!f) return null;
                  OvenPlayerConsole.log("API : setCurrentCaption() ", e),
                    f.setCurrentCaption(e);
                }),
                (t.addCaption = function (e) {
                  return f
                    ? (OvenPlayerConsole.log("API : addCaption() "),
                      f.addCaption(e))
                    : null;
                }),
                (t.removeCaption = function (e) {
                  return f
                    ? (OvenPlayerConsole.log("API : removeCaption() ", e),
                      f.removeCaption(e))
                    : null;
                }),
                (t.getBuffer = function () {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : getBuffer() ", c.getBuffer()),
                    c.getBuffer();
                }),
                (t.getState = function () {
                  return c
                    ? (OvenPlayerConsole.log("API : getState() ", c.getState()),
                      c.getState())
                    : null;
                }),
                (t.stop = function () {
                  if (!c) return null;
                  OvenPlayerConsole.log("API : stop() "), c.stop();
                }),
                (t.remove = function () {
                  OvenPlayerConsole.log("API : remove() "),
                    f && (f.destroy(), (f = null)),
                    c && (c.destroy(), (c = null)),
                    l && (l.destroy(), (l = null)),
                    t.trigger(ge),
                    t.off(),
                    (o = null),
                    (n = null),
                    (u = null),
                    OvenPlayerConsole.log(
                      "API : remove() - currentProvider, providerController, playlistManager, playerConfig, api event destroed. "
                    ),
                    Tn.removePlayer(t);
                }),
                (t.getMediaElement = function () {
                  return c.getMediaElement();
                }),
                (t.getVersion = function () {
                  return r;
                }),
                t
              );
            },
            Tn =
              ((sn = (an = {}).playerList = []),
              (an.create = function (e, t) {
                (window.OvenPlayerConsole &&
                  0 !== Object.keys(window.OvenPlayerConsole).length) ||
                  ((window.OvenPlayerConsole = {}),
                  (OvenPlayerConsole.log = function () {}));
                var n = Ze(e),
                  r = Sn(n);
                return r.init(t), sn.push(r), r;
              }),
              (an.getPlayerList = function () {
                return sn;
              }),
              (an.getPlayerByContainerId = function (e) {
                for (var t = 0; t < sn.length; t++)
                  if (sn[t].getContainerId() === e) return sn[t];
                return null;
              }),
              (an.getPlayerByIndex = function (e) {
                return sn[e] || null;
              }),
              (an.removePlayer = function (e) {
                for (var t = 0; t < sn.length; t++)
                  sn[t] === e && sn.splice(t, 1);
              }),
              (an.generateWebrtcUrls = function (e) {
                return (i().isArray(e) ? e : [e]).map(function (e, t) {
                  if (e.host && _e(e.host) && e.application && e.stream)
                    return {
                      file: e.host + "/" + e.application + "/" + e.stream,
                      type: "webrtc",
                      label: e.label ? e.label : "webrtc-" + (t + 1),
                    };
                });
              }),
              (an.debug = function (e) {
                return (
                  (window.OvenPlayerConsole = e
                    ? { log: window.console.log }
                    : { log: function () {} }),
                  e
                );
              }),
              an),
            Ln = function (e, t) {
              var n =
                '<div id="' +
                t.id +
                '" class="op-setting-panel ' +
                (t.isRoot ? "animated fadeIn" : "") +
                '" style="max-height: ' +
                t.height +
                'px"><div class="op-setting-title-container"><div class="op-setting-title" tabindex="0">' +
                (t.isRoot
                  ? ""
                  : '<span class="op-setting-title-previcon">&lt;</span>') +
                '<span class="op-setting-title-title">' +
                t.title +
                '</span></div></div><div class="op-setting-item-container">';
              return (
                i().forEach(t.body, function (e) {
                  n += Rn(e, t.useCheck);
                }),
                (n += "</div></div>")
              );
            },
            Rn = function (e, t) {
              return (
                '<div class="op-setting-item" op-panel-type="' +
                e.panelType +
                '" op-data-value="' +
                e.value +
                '">' +
                (t
                  ? '<span class="op-setting-item-checked ' +
                    (e.isCheck ? "op-show" : "") +
                    '">&#x2713;</span>'
                  : "") +
                '<span class="op-setting-item-title">' +
                e.title +
                "</span>" +
                (e.hasNext
                  ? '<span class="op-setting-item-nexticon">&gt;</span><span class="op-setting-item-value">' +
                    e.description +
                    "</span>"
                  : "") +
                "</div>"
              );
            },
            Qn = function (e, t) {
              return (
                '<div class="op-playlist-card '
                  .concat(t ? "active" : "", '" data-index="')
                  .concat(e.index, '">') +
                '<div class="op-playlist-card-thumbnail '
                  .concat(e.image ? "" : "empty", '">')
                  .concat(
                    e.image
                      ? "<img src=".concat(e.image, ">")
                      : '<i class="op-con op-empty-video"></i>',
                    " "
                  )
                  .concat(
                    e.duration
                      ? '<span class="op-badge">'.concat(
                          s(e.duration),
                          "</span>"
                        )
                      : "",
                    " </div>"
                  ) +
                '<div class="op-playlist-card-title">'.concat(
                  e.title,
                  "</div>"
                ) +
                "</div>"
              );
            },
            Mn = {
              TextViewTemplate: function (e) {
                return (
                  '<div class="textView" style="padding : 5px; background: red; position : absolute; top: 0;">' +
                  "<h3>".concat(e, "</h3>") +
                  '<button type="button" class="btn">button</button></div>'
                );
              },
              ViewTemplate: function (e, t) {
                return (
                  '<div class="ovenplayer op-wrapper" tabindex="-1" '.concat(
                    t ? 'id = "'.concat(t, '"') : "",
                    ">"
                  ) +
                  '<div class="op-ratio"></div><div class="op-player op-clear"><div class="op-core-ui-wrapper op-clear"><div class="op-media-element-container op-clear"></div><div class="op-ui op-clear"></div></div></div></div>'
                );
              },
              HelpersTemplate: function (e, t) {
                return '<div class="op-helpers-container"></div>';
              },
              BigButtonTemplate: function (e, t) {
                return (
                  '<div class="op-bigbutton-container ">' +
                  "".concat(
                    t === ee ? '<i class="op-con op-pause-big"></i>' : ""
                  ) +
                  "".concat(
                    t === $
                      ? '<i class="op-bigbutton op-con op-play-big"></i>'
                      : ""
                  ) +
                  "".concat(
                    t === X
                      ? '<i class="op-bigbutton op-con op-play-big"></i>'
                      : ""
                  ) +
                  "".concat(
                    t === q
                      ? '<i class="op-bigbutton op-con op-replay-big"></i>'
                      : ""
                  ) +
                  "</div>"
                );
              },
              ThumbnailTemplate: function (e, t) {
                return (
                  '<div class="op-thumbnail-container"><div class="op-thumbnail-wrapper">' +
                  "".concat(
                    t.title
                      ? '<div class="op-thumbnail-header">'.concat(
                          t.title,
                          "</div>"
                        )
                      : ""
                  ) +
                  "</div></div>"
                );
              },
              WaterMarkTemplate: function (e, t) {
                return (
                  '<div class="op-watermark-container"><div class="op-watermark">' +
                  "".concat(
                    t.waterMark.image
                      ? '<img src="'.concat(t.waterMark.image, '">')
                      : ""
                  ) +
                  "".concat(
                    t.waterMark.text
                      ? '<span class="op-watermark-text">'.concat(
                          t.waterMark.text,
                          "</span>"
                        )
                      : ""
                  ) +
                  "</div></div>"
                );
              },
              MessageBoxTemplate: function (e, t) {
                return (
                  '<div class="op-message-box op-clear '.concat(
                    !0 === t.dontClose ? "op-message-box-default-cursor" : "",
                    '">'
                  ) +
                  '<div class="op-message-container ">' +
                  '<div class="op-message-text">'.concat(t.message) +
                  "".concat(
                    t.description
                      ? '<div class="op-message-description">'.concat(
                          t.description,
                          "</div>"
                        )
                      : ""
                  ) +
                  "</div>" +
                  "".concat(
                    t.iconClass
                      ? '<div class="op-message-icon"><i class="op-con '.concat(
                          t.iconClass,
                          '"></i></div>'
                        )
                      : ""
                  ) +
                  "</div></div>"
                );
              },
              SpinnerTemplate: function (e) {
                return '<div class="op-spinner-container"><div class="op-spinner"></div></div>';
              },
              ContextPanelTemplate: function (e) {
                return (
                  '<div class="op-context-panel animated fadeIn"><div class="op-context-item" tabindex="1">' +
                  '<span class="op-context-item-text">'
                    .concat(e.context, " ")
                    .concat(r, "</span>") +
                  "</div></div>"
                );
              },
              CaptionViewerTemplate: function (e) {
                return '<div class="op-caption-viewer">    <div class="op-caption-text-container">        <pre class="op-caption-text"></pre>      </div></div>';
              },
              ControlsTemplate: function (e, t) {
                return (
                  '<div class="op-controls-container op-clear"><div class="op-bottom-panel op-clear"><div class="op-gradient-bottom op-clear"></div><div class="op-controls op-clear"><div class="op-left-controls op-clear"></div><div class="op-right-controls op-clear">' +
                  '<div class="playlist-holder op-navigators op-clear">'.concat(
                    t
                      ? '<button class="op-button op-playlist-button"><i class="op-con op-playlist-icon"></i></button>'
                      : "",
                    "</div>"
                  ) +
                  '<div class="setting-holder op-navigators op-clear"></div><div class="fullscreen-holder op-navigators op-clear"></div></div></div><div class="op-progressbar-container op-clear"></div></div></div>'
                );
              },
              VolumeButtonTemplate: function (e) {
                return '<div class="op-navigators op-volume-controller"><button class="op-button op-volume-button"><i class="op-con op-volume-max"></i><i class="op-con op-volume-small"></i><i class="op-con op-volume-mute"></i></button><div class="op-volume-slider-container"><div class="op-volume-silder"><div class="op-volume-slider-bg"></div><div class="op-volume-slider-value"></div><div class="op-volume-slider-handle"></div></div></div></div>';
              },
              ProgressBarTemplate: function (e) {
                return '<div class="op-progressbar" tabindex="0"><div class="op-progressbar-padding"></div><div class="op-progress-list"><div class="op-load-progress"></div><div class="op-play-progress op-play-background-color"></div><div class="op-hover-progress"></div></div><div class="op-progressbar-knob-container"><div class="op-progressbar-knob op-play-background-color"></div></div><span class="op-progressbar-preview"></span><span class="op-progressbar-time">00:00</span></div>';
              },
              PlayButtonTemplate: function (e) {
                return '<div class="op-navigators op-play-controller"><button class="op-button op-play-button" type="button"><i class="op-con op-play"></i><i class="op-con op-pause" style="display: none;"></i><i class="op-con op-replay" style="display: none;"></i></button><button class="op-button op-seek-button op-seek-button-back" type="button"><i class="op-con op-seek-back"></i><span class="op-seek-back-text">10</span></button><button class="op-button op-seek-button op-seek-button-forward" type="button"><i class="op-con op-seek-forward"></i><span class="op-seek-forward-text">10</span></button></div>';
              },
              SettingButtonTemplate: function (e) {
                return '<button class="op-button op-setting-button"><i class="op-con op-setting"></i></button>';
              },
              FrameButtonsTemplate: function (e) {
                return '<div class="op-frame-buttons"><button class="op-button op-frame-button" op-data-value="-5"><div class="frame-icon"><span class="btn-text">-5f</span></div></button><button class="op-button op-frame-button" op-data-value="-1"><div class="frame-icon"><span class="btn-text">-1f</span></div></button><button class="op-button op-frame-button" op-data-value="+1"><div class="frame-icon reverse"><span class="btn-text">+1f</span></div></button><button class="op-button op-frame-button" op-data-value="+5"><div class="frame-icon reverse"><span class="btn-text">+5f</span></div></button></div>';
              },
              TimeDisplayTemplate: function (e, t) {
                return (
                  '<div class="op-navigators op-time-display">' +
                  (t.duration === 1 / 0
                    ? '<span class="op-live-badge" disabled="disabled">' +
                      ("webrtc" === t.type
                        ? t.isP2P
                          ? '<span class="op-live-badge-lowlatency">'.concat(
                              e.controls.low_latency_p2p,
                              "</span>"
                            )
                          : '<span class="op-live-badge-lowlatency">'.concat(
                              e.controls.low_latency_live,
                              "</span>"
                            )
                        : "<span>".concat(e.controls.live, "</span>")) +
                      "</span>"
                    : '<span class="op-time-current">00:00</span><span class="op-time-separator"> / </span><span class="op-time-duration">00:00</span>') +
                  "</div>"
                );
              },
              FullScreenButtonTemplate: function (e) {
                return '<button class="op-button op-fullscreen-button"><i class="op-con op-fullscreen-expand"></i><i class="op-con op-fullscreen-compress"></i></button>';
              },
              PanelsTemplate: Ln,
              SpeedPanelTemplate: Ln,
              SourcePanelTemplate: Ln,
              QualityPanelTemplate: Ln,
              CaptionPanelTemplate: Ln,
              TimeDisplayPanelTemplate: Ln,
              PlaylistPanelTemplate: function (e, t) {
                return (
                  '<div class="op-playlist" tabindex="0">' +
                  '<div class="op-playlist-header">'.concat(
                    e.playlist,
                    ' <i class="op-con op-close-icon btn-close"></i></div>'
                  ) +
                  '<div class="op-playlist-body"><div class="op-playlist-body-container"><div class="op-playlist-body-center"><div class="op-playlist-body-row"></div></div></div><div class="op-playlist-body-arrows"><i class="op-con op-arrow-left btn-left"></i><i class="op-con op-arrow-right btn-right"></i></div></div></div>'
                );
              },
            },
            On = function (e, t, n, r, o, A, a, s) {
              var l,
                c = i().isElement(e) ? ze(e) : e,
                u = {},
                f = null,
                p = {};
              p.data = r;
              var d = function (e) {
                var t = document.createElement("div");
                return (t.innerHTML = e), (l = ze(t.firstChild)), t.firstChild;
              };
              return (
                n && n.systemText && (f = n.systemText.ui),
                s
                  ? c.replace(d(Mn[t + "Template"](f, r)))
                  : c.append(d(Mn[t + "Template"](f, r))),
                A && A(l, p),
                Object.keys(o).forEach(function (e) {
                  var t = e.split(" "),
                    n = t[0].replace(/ /gi, ""),
                    r = t[1].replace(/ /gi, ""),
                    i = "";
                  if (
                    ((i =
                      "document" === r || "window" === r || "body" === r
                        ? ze(r)
                        : l.find(r) ||
                          (l.hasClass(r.replace(".", "")) ? l : null)),
                    !(n && r && i))
                  )
                    return !1;
                  var A = Object.keys(u).length++,
                    a = function (t) {
                      return o[e](t, l, p);
                    };
                  u[A] = { name: n, target: r, callback: a };
                  var s = null;
                  n.indexOf("touch") > -1 && (s = { passive: !0 });
                  var c = i.get().length;
                  if (c > 1)
                    for (var f = i.get(), d = 0; d < c; d++)
                      f[d].addEventListener(n, a, s);
                  else i.get().addEventListener(n, a, s);
                }),
                (p.destroy = function () {
                  Object.keys(u).forEach(function (e) {
                    var t = u[e],
                      n = "",
                      r = (n =
                        "document" === t.target ||
                        "window" === t.target ||
                        "body" === t.target
                          ? ze(t.target)
                          : l.find(t.target) ||
                            (l.hasClass(t.target.replace(".", ""))
                              ? l
                              : null)).get().length;
                    if (r > 1)
                      for (var o = n.get(), i = 0; i < r; i++)
                        o[i].removeEventListener(t.name, t.callback);
                    else n.get().removeEventListener(t.name, t.callback);
                    delete u[e];
                  }),
                    l &&
                      (s
                        ? (l.removeChild(), l.removeAttribute("class"))
                        : l.remove()),
                    a && a(p);
                }),
                p
              );
            },
            Dn = function (e, t, n, r, o, i, A, a) {
              var s = "",
                l = { message: n, description: r, iconClass: i, dontClose: a },
                c = {
                  "click .op-message-text": function (e, t, n) {
                    e.stopPropagation(),
                      a || (s && clearTimeout(s), A && A(), n.destroy());
                  },
                  "click .op-con": function (e, t, n) {
                    e.preventDefault(),
                      a || (s && clearTimeout(s), A && A(), n.destroy());
                  },
                };
              return On(
                e,
                "MessageBox",
                t.getConfig(),
                l,
                c,
                function (e, t) {
                  o &&
                    (s = setTimeout(function () {
                      t.destroy();
                    }, o || 5e3));
                },
                function () {}
              );
            },
            Fn = function (e, t) {
              var n,
                r,
                o = !1,
                A = "",
                a = "",
                s = "",
                l = null,
                c = t.getConfig().image || t.getConfig().title,
                u =
                  (t.getConfig().waterMark && t.getConfig().waterMark.image) ||
                  (t.getConfig().waterMark && t.getConfig().waterMark.text),
                f = !1;
              return On(
                e,
                "Helpers",
                t.getConfig(),
                null,
                {},
                function (e, p) {
                  var d = !1,
                    g = -1;
                  function h(n) {
                    t.getConfig().showBigPlayButton &&
                      ((t.getState() !== X && t.getState() !== q) ||
                        (a && a.destroy(),
                        A && A.destroy(),
                        (A = (function (e, t, n) {
                          var r = {
                            "click .op-bigbutton-container": function (e) {
                              e.preventDefault(), e.stopPropagation();
                              var n = t.getState(),
                                r = t.getPlaylist(),
                                o = t.getCurrentPlaylist();
                              n === X || n === $
                                ? t.play()
                                : n === te
                                ? t.setCurrentSource(t.getCurrentSource())
                                : n === q &&
                                  r.length === o + 1 &&
                                  (t.seek(0), t.play());
                            },
                          };
                          return On(
                            e,
                            "BigButton",
                            t.getConfig(),
                            n,
                            r,
                            function (e, t, n) {},
                            function () {}
                          );
                        })(e, t, n))));
                  }
                  function v() {
                    var r = t.getMediaElement();
                    r && (r.poster = ""),
                      t.getConfig().image && (r.poster = t.getConfig().image),
                      n && n.destroy(),
                      (n = (function (e, t, n) {
                        return On(
                          e,
                          "Thumbnail",
                          t.getConfig(),
                          n,
                          {},
                          function (e, t) {},
                          function () {}
                        );
                      })(e, t, t.getConfig()));
                  }
                  (s = (function (e, t) {
                    var n = "";
                    return Object.assign(
                      On(
                        e,
                        "Spinner",
                        t.getConfig(),
                        null,
                        {},
                        function (e, t) {
                          n = e;
                        },
                        function () {}
                      ),
                      {
                        show: function (e) {
                          e ? n.show() : n.hide();
                        },
                      }
                    );
                  })(e, t)),
                    (function (e, t, n) {
                      ze(t.getContainerElement()),
                        On(
                          e,
                          "CaptionViewer",
                          t.getConfig(),
                          n,
                          {},
                          function (e, n, r) {
                            var o = !1,
                              i = 0;
                            t.on(
                              Pe,
                              function (t) {
                                t > -1
                                  ? (o = !1)
                                  : ((o = !0),
                                    e.find(".op-caption-text").text(""));
                              },
                              r
                            ),
                              t.on(
                                Fe,
                                function (t) {
                                  if (!o && t && t.text) {
                                    var n = t.endTime - t.startTime;
                                    i && clearTimeout(i),
                                      e.find(".op-caption-text").html(t.text),
                                      n &&
                                        (i = setTimeout(function () {
                                          e.find(".op-caption-text").text("");
                                        }, 1e3 * n));
                                  }
                                },
                                r
                              );
                          },
                          function (n) {
                            e.find(".op-caption-text").text(""),
                              t.off(Pe, null, n),
                              t.off(Fe, null, n);
                          }
                        );
                    })(e, t),
                    t.on(
                      de,
                      function () {
                        c && v(),
                          u &&
                            (r && r.destroy(),
                            (r = (function (e, t, n) {
                              var r = null,
                                o = null;
                              return On(
                                e,
                                "WaterMark",
                                t.getConfig(),
                                n,
                                {},
                                function (e, n) {
                                  (r = e.find(".op-watermark")),
                                    (o = e.find(".op-watermark-text"));
                                  var A = t.getConfig().waterMark,
                                    a = A.position || "top-right",
                                    s = A.y || "5%",
                                    l = A.x || "2.8125%";
                                  r.css(a.split("-")[0], s),
                                    r.css(a.split("-")[1], l);
                                  var c = A.width || "auto",
                                    u = A.height || "auto";
                                  r.css("width", c), r.css("height", u);
                                  var f = A.opacity || 0.7;
                                  r.css("opacity", f),
                                    A.text &&
                                      A.font &&
                                      i().each(A.font, function (e, t) {
                                        o.css(t, e);
                                      });
                                },
                                function () {}
                              );
                            })(e, t, t.getConfig()))),
                          o || (h($), (o = !0));
                      },
                      p
                    ),
                    t.on(
                      ke,
                      function (n) {
                        n.message &&
                          (A && A.destroy(),
                          a && a.destroy(),
                          (l = Dn(
                            e,
                            t,
                            n.message,
                            null,
                            n.timer,
                            n.iconClass,
                            n.onClickCallback,
                            !1
                          )),
                          t.once(
                            Qe,
                            function (e) {
                              !e.mute && l && l.destroy();
                            },
                            p
                          ));
                      },
                      p
                    ),
                    t.on(
                      ye,
                      function (e) {
                        e &&
                          e.newstate &&
                          (e.newstate === X && a && a.destroy(),
                          e.newstate === ee || e.newstate === ie
                            ? ((f = !1),
                              a && a.destroy(),
                              A && A.destroy(),
                              n && n.destroy(),
                              d || s.show(!1))
                            : e.newstate === q
                            ? (s.show(!1), h(e.newstate))
                            : e.newstate === re ||
                              e.newstate === ne ||
                              "adLoading" === e.newstate
                            ? ((f = !1),
                              a && a.destroy(),
                              A && A.destroy(),
                              s.show(!0))
                            : d || s.show(!1));
                      },
                      p
                    ),
                    t.on(Oe, function () {
                      c && v();
                    }),
                    t.on(
                      De,
                      function (e) {
                        if (e.currentQuality < 0) return !1;
                        e.isAuto
                          ? ((d = !1), s.show(!1))
                          : "request" === e.type
                          ? ((g = e.currentQuality), (d = !0), s.show(!0))
                          : "render" === e.type &&
                            g === e.currentQuality &&
                            ((d = !1), s.show(!1));
                      },
                      p
                    ),
                    t.on(
                      Ce,
                      function (n) {
                        if (
                          (510 === n.code && (f = !0),
                          101 === n.code &&
                            0 === t.getPlaylist().length &&
                            (f = !0),
                          !f)
                        ) {
                          var r = "",
                            o = "";
                          A && A.destroy(),
                            n && n.code && n.code >= 100 && n.code < 1e3
                              ? ((r = n.message),
                                100 === n.code && (o = n.error.toString()))
                              : (r = "Can not play due to unknown reasons."),
                            OvenPlayerConsole.log("error occured : ", n),
                            (function (n, r, o, i, s, l) {
                              A && A.destroy(),
                                a && a.destroy(),
                                (a = Dn(
                                  e,
                                  t,
                                  n,
                                  r,
                                  null,
                                  "op-warning",
                                  null,
                                  !0
                                ));
                            })(r, o);
                        }
                      },
                      p
                    ),
                    t.on(
                      me,
                      function (e) {
                        var n =
                          "Because the network connection is unstable, the following media source will be played.";
                        t.getCurrentSource() + 1 ===
                          t.getQualityLevels().length &&
                          (n =
                            "Network connection is unstable. Check the network connection."),
                          OvenPlayerConsole.log(n);
                      },
                      p
                    ),
                    t.on(
                      ve,
                      function () {
                        c && v();
                      },
                      p
                    );
                },
                function (e) {
                  t.off(de, null, e),
                    t.off(ye, null, e),
                    t.off(ke, null, e),
                    t.off(Ce, null, e),
                    t.off(me, null, e),
                    t.off(ve, null, e),
                    t.off(he, null, e);
                }
              );
            },
            Pn = [],
            Un = function () {
              var e = {},
                t = function () {
                  for (var e = 0; e < Pn.length; e++) Pn[e].data.setFront(!1);
                  Pn.length && Pn[Pn.length - 1].data.setFront(!0);
                };
              return (
                (e.clear = function () {
                  i().each(Pn, function (e) {
                    e.destroy();
                  }),
                    (Pn = []),
                    t();
                }),
                (e.removeLastItem = function () {
                  Pn.pop().destroy(), t();
                }),
                (e.add = function (e) {
                  Pn.push(e), t();
                }),
                (e.size = function () {
                  return Pn.length;
                }),
                e
              );
            },
            Nn = {
              speed: "Speed",
              speedUnit: "x",
              source: "Source",
              quality: "Quality",
              caption: "Caption",
              display: "Display",
            },
            Wn = function (e, t, n) {
              var r = ze(t.getContainerElement()),
                o = Un(),
                A = t.getConfig();
              function a(e, t) {
                var n = {
                  id: "panel-" + new Date().getTime(),
                  title: "",
                  body: [],
                  useCheck: !0,
                  panelType: t,
                  height: r.height() - r.find(".op-bottom-panel").height(),
                };
                if (((n.title = Nn[t]), "speed" === t))
                  for (
                    var o = e.getConfig().playbackRates,
                      i = e.getPlaybackRate(),
                      A = 0;
                    A < o.length;
                    A++
                  ) {
                    var a = {
                      title: o[A] + Nn.speedUnit,
                      isCheck: i === o[A],
                      value: o[A],
                      description: o[A],
                      panelType: t,
                    };
                    n.body.push(a);
                  }
                else if ("source" === t)
                  for (var s = e.getSources(), l = 0; l < s.length; l++) {
                    var c = {
                      title: s[l].label,
                      isCheck: e.getCurrentSource() === l,
                      value: l,
                      panelType: t,
                    };
                    n.body.push(c);
                  }
                else if ("quality" === t) {
                  var u = e.getQualityLevels();
                  n.body.push({
                    title: "AUTO",
                    isCheck: e.isAutoQuality(),
                    value: "AUTO",
                    panelType: t,
                  });
                  for (var f = 0; f < u.length; f++) {
                    var p = {
                      title: u[f].label,
                      isCheck: e.getCurrentQuality() === f,
                      value: f,
                      panelType: t,
                    };
                    n.body.push(p);
                  }
                } else if ("caption" === t) {
                  var d = e.getCaptionList();
                  n.body.push({
                    title: "OFF",
                    isCheck: -1 === e.getCurrentCaption(),
                    value: -1,
                    panelType: t,
                  });
                  for (var g = 0; g < d.length; g++) {
                    var h = {
                      title: d[g].label,
                      isCheck: e.getCurrentCaption() === g,
                      value: g,
                      panelType: t,
                    };
                    n.body.push(h);
                  }
                } else if ("display" === t)
                  for (
                    var v = ["Play time", "Framecode"], m = 0;
                    m < v.length;
                    m++
                  ) {
                    var C = {
                      title: v[m],
                      isCheck: e.isTimecodeMode()
                        ? "Play time" === v[m]
                        : "Framecode" === v[m],
                      value: v[m],
                      panelType: t,
                    };
                    n.body.push(C);
                  }
                return n;
              }
              A &&
                A.systemText &&
                Object.keys(Nn).forEach(function (e) {
                  Nn[e] = A.systemText.ui.setting[e];
                }),
                (n.setFront = function (e) {
                  e
                    ? r.find("#" + n.id).removeClass("background")
                    : r.find("#" + n.id).addClass("background");
                });
              var s = {
                "click .op-setting-item": function (A, s, l) {
                  if (
                    (A.preventDefault(),
                    r.find("#" + n.id).hasClass("background"))
                  )
                    return !1;
                  var c = ze(A.currentTarget).attr("op-panel-type"),
                    u = null;
                  "speed" === c
                    ? (u = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = Un();
                        n.setFront = function (e) {
                          e
                            ? r.find("#" + n.id).removeClass("background")
                            : r.find("#" + n.id).addClass("background");
                        };
                        var i = {
                          "click .op-setting-item": function (e, n, r) {
                            e.preventDefault();
                            var i = ze(e.currentTarget).attr("op-data-value");
                            t.setPlaybackRate(parseFloat(i)), o.clear();
                          },
                          "click .op-setting-title": function (e, t, n) {
                            e.preventDefault(), o.removeLastItem();
                          },
                        };
                        return On(
                          e,
                          "SpeedPanel",
                          t.getConfig(),
                          n,
                          i,
                          function (e, t) {},
                          function (e) {}
                        );
                      })(e, t, a(t, c)))
                    : "source" === c
                    ? (u = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = Un();
                        n.setFront = function (e) {
                          e
                            ? r.find("#" + n.id).removeClass("background")
                            : r.find("#" + n.id).addClass("background");
                        };
                        var i = {
                          "click .op-setting-item": function (e, n, r) {
                            e.preventDefault();
                            var i = ze(e.currentTarget).attr("op-data-value");
                            t.setCurrentSource(parseInt(i)), o.clear();
                          },
                          "click .op-setting-title": function (e, t, n) {
                            e.preventDefault(), o.removeLastItem();
                          },
                        };
                        return On(
                          e,
                          "SourcePanel",
                          t.getConfig(),
                          n,
                          i,
                          function (e, t) {},
                          function (e) {}
                        );
                      })(e, t, a(t, c)))
                    : "quality" === c
                    ? (u = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = Un();
                        n.setFront = function (e) {
                          e
                            ? r.find("#" + n.id).removeClass("background")
                            : r.find("#" + n.id).addClass("background");
                        };
                        var A = {
                          "click .op-setting-item": function (e, n, r) {
                            e.preventDefault();
                            var i = ze(e.currentTarget).attr("op-data-value");
                            "AUTO" === i
                              ? t.setAutoQuality(!t.isAutoQuality())
                              : t.setCurrentQuality(parseInt(i)),
                              o.clear();
                          },
                          "click .op-setting-title": function (e, t, n) {
                            e.preventDefault(), o.removeLastItem();
                          },
                        };
                        return On(
                          e,
                          "QualityPanel",
                          t.getConfig(),
                          n,
                          A,
                          function (e, n) {
                            t.on(
                              De,
                              function (e) {
                                var t = e.currentQuality;
                                "render" === e.type &&
                                  i().forEach(
                                    r
                                      .find("#" + n.data.id)
                                      .find(".op-setting-item")
                                      .get(),
                                    function (n) {
                                      var r = ze(n);
                                      r
                                        .find(".op-setting-item-checked")
                                        .hasClass("op-show") &&
                                        r
                                          .find(".op-setting-item-checked")
                                          .removeClass("op-show"),
                                        t ===
                                          parseInt(r.attr("op-data-value")) &&
                                          r
                                            .find(".op-setting-item-checked")
                                            .addClass("op-show"),
                                        e.isAuto &&
                                          "AUTO" === r.attr("op-data-value") &&
                                          r
                                            .find(".op-setting-item-checked")
                                            .addClass("op-show");
                                    }
                                  );
                              },
                              n
                            );
                          },
                          function (e) {
                            t.off(De, null, e);
                          }
                        );
                      })(e, t, a(t, c)))
                    : "caption" === c
                    ? (u = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = Un();
                        n.setFront = function (e) {
                          e
                            ? r.find("#" + n.id).removeClass("background")
                            : r.find("#" + n.id).addClass("background");
                        };
                        var i = {
                          "click .op-setting-item": function (e, n, r) {
                            e.preventDefault();
                            var i = ze(e.currentTarget).attr("op-data-value");
                            t.setCurrentCaption(parseFloat(i)), o.clear();
                          },
                          "click .op-setting-title": function (e, t, n) {
                            e.preventDefault(), o.removeLastItem();
                          },
                        };
                        return On(
                          e,
                          "CaptionPanel",
                          t.getConfig(),
                          n,
                          i,
                          function (e, t) {},
                          function (e) {}
                        );
                      })(e, t, a(t, c)))
                    : "display" === c &&
                      (u = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = Un();
                        n.setFront = function (e) {
                          e
                            ? r.find("#" + n.id).removeClass("background")
                            : r.find("#" + n.id).addClass("background");
                        };
                        var i = {
                          "click .op-setting-item": function (e, n, r) {
                            e.preventDefault();
                            var i = ze(e.currentTarget).attr("op-data-value");
                            t.setTimecodeMode("Play time" === i), o.clear();
                          },
                          "click .op-setting-title": function (e, t, n) {
                            e.preventDefault(), o.removeLastItem();
                          },
                        };
                        return On(
                          e,
                          "TimeDisplayPanel",
                          t.getConfig(),
                          n,
                          i,
                          function (e, t) {},
                          function (e) {}
                        );
                      })(e, t, a(t, c))),
                    o.add(u);
                },
                "click .op-setting-title": function (e, t, i) {
                  if (
                    (e.preventDefault(),
                    r.find("#" + n.id).hasClass("background"))
                  )
                    return !1;
                  o.removeLastItem();
                },
              };
              return On(
                e,
                "Panels",
                t.getConfig(),
                n,
                s,
                function (e, n) {
                  r.find(".op-setting-panel") &&
                    r
                      .find(".op-setting-panel")
                      .css(
                        "max-height",
                        r.height() - r.find(".op-bottom-panel").height() + "px"
                      ),
                    t.on(
                      De,
                      function (e) {
                        var o = e.currentQuality;
                        "render" === e.type &&
                          r.find("#" + n.data.id).find(".op-setting-item") &&
                          i().forEach(
                            r
                              .find("#" + n.data.id)
                              .find(".op-setting-item")
                              .get() || [],
                            function (e) {
                              var n = ze(e);
                              if ("quality" === n.attr("op-panel-type")) {
                                var r = t.getQualityLevels()[o];
                                n.find(".op-setting-item-value").text(
                                  r.width +
                                    "x" +
                                    r.height +
                                    ", " +
                                    xn(r.bitrate, !0, "bps")
                                );
                              }
                            }
                          );
                      },
                      n
                    );
                },
                function (e) {
                  t.off(De, null, e);
                }
              );
            },
            jn = {
              speed: "Speed",
              speedUnit: "x",
              source: "Source",
              quality: "Quality",
              caption: "Caption",
              display: "Display",
            },
            Yn = function (e, t) {
              var n,
                r = "",
                o = "",
                i = "",
                A = "",
                a = "",
                l = "",
                c = !1,
                u = !1,
                f = !1,
                p = t.getConfig().browser,
                d = "Android" === p.os,
                g = "iOS" === p.os,
                h = ze(t.getContainerElement()),
                v = {};
              (c = t.getPlaylist().length > 1),
                !0 === t.getConfig().hidePlaylistIcon && (c = !1);
              var m = {
                "mouseleave .op-controls": function (e, t, n) {
                  e.preventDefault(),
                    r.setMouseDown(!1),
                    t.find(".op-volume-slider-container").removeClass("active");
                },
                "click .op-playlist-button": function (e, n, r) {
                  e.preventDefault(),
                    (function (e, t) {
                      var n = ze(t.getContainerElement()),
                        r = "",
                        o = t.getPlaylist(),
                        i = o.length,
                        A = 6,
                        a = 0,
                        s = [];
                      function l(e) {
                        var n,
                          a,
                          l = Math.ceil(i / A),
                          c = t.getCurrentPlaylist();
                        (s = o.slice(e * A, e * A + A)),
                          r.find(".op-playlist-body-row").removeChild(),
                          r.find(".op-arrow-left").removeClass("disable"),
                          r.find(".op-arrow-right").removeClass("disable");
                        for (var u = 0; u < s.length; u++) {
                          var f = e * A + u;
                          (s[u].index = f),
                            r
                              .find(".op-playlist-body-row")
                              .get()
                              .append(
                                ((n = Qn(s[u], c === f)),
                                (a = void 0),
                                ((a = document.createElement("div")).innerHTML =
                                  n),
                                a.firstChild)
                              );
                        }
                        0 === e && r.find(".op-arrow-left").addClass("disable"),
                          e + 1 === l &&
                            r.find(".op-arrow-right").addClass("disable");
                      }
                      function c() {
                        var e = t.getCurrentPlaylist();
                        return Math.ceil((e + 1) / A) - 1;
                      }
                      n.width() > 576 ? (A = 6) : n.width() <= 576 && (A = 1);
                      var u = {
                        "click .btn-close": function (e, t, n) {
                          e.preventDefault(), n.destroy();
                        },
                        "click .op-arrow-left": function (e, t, n) {
                          e.preventDefault(),
                            ze(e.target).hasClass("disable") || l(--a);
                        },
                        "click .op-arrow-right": function (e, t, n) {
                          e.preventDefault(),
                            ze(e.target).hasClass("disable") || l(++a);
                        },
                      };
                      On(
                        e,
                        "PlaylistPanel",
                        t.getConfig(),
                        o,
                        u,
                        function (e, n) {
                          (r = e),
                            l((a = c())),
                            t.on(
                              Be,
                              function (e) {
                                "xsmall" === e && 6 === A
                                  ? ((A = 1), l((a = c())))
                                  : ("small" !== e &&
                                      "medium" !== e &&
                                      "large" !== e) ||
                                    1 !== A ||
                                    ((A = 6), l((a = c())));
                              },
                              n
                            ),
                            t.on(
                              he,
                              function (e) {
                                l((a = c()));
                              },
                              n
                            ),
                            e.get().addEventListener(
                              "click",
                              function (e) {
                                for (var n = e.target; n; ) {
                                  if (ze(n).hasClass("op-playlist-card"))
                                    return void t.setCurrentPlaylist(
                                      parseInt(ze(n).attr("data-index"))
                                    );
                                  n = n.parentElement;
                                }
                              },
                              !0
                            );
                        },
                        function (e) {
                          t.off(Be, null, e), t.off(he, null, e);
                        }
                      );
                    })(n, t);
                },
              };
              return On(
                e,
                "Controls",
                t.getConfig(),
                c,
                m,
                function (e, c) {
                  function p(n) {
                    A && A.destroy(),
                      (A = (function (e, t, n) {
                        var r = ze(t.getContainerElement());
                        t.getConfig().disableSeekUI &&
                          e.addClass("op-progressbar-container-disabled");
                        var o = 0,
                          i = !1,
                          A = Un(),
                          a = "",
                          l = 0,
                          c = "",
                          u = "",
                          f = "",
                          p = "",
                          d = "",
                          g = "",
                          h = 0,
                          v = "",
                          m = "",
                          C = t.getBrowser().mobile;
                        function y(e) {
                          var t = c.width(),
                            n = t * e;
                          f.css("width", n + "px"), p.css("left", n + "px");
                          var r = (t - h) * e;
                          d.css("left", r + "px"), (o = n);
                        }
                        function b(e) {
                          var t = c.width() * e;
                          p.css("width", (0 === e ? e : t - o) + "px");
                        }
                        function w(e) {
                          var t = c.width(),
                            n = c.offset().left,
                            r = e.pageX;
                          e.touches && (r = e.pageX || e.touches[0].clientX);
                          var o = (r - n) / t;
                          return o < 0 ? 0 : o > 1 ? 1 : o;
                        }
                        function E(e, n) {
                          if (A.size() > 0 || -1 === e)
                            return v.hide(), void m.hide();
                          v.show(), m.show();
                          var r = t.getDuration() * e;
                          t.isTimecodeMode()
                            ? v.text(s(r))
                            : v.text(Math.round(r * t.getFramerate()));
                          var o = v.width(),
                            i = c.width(),
                            l = i * e,
                            u = n.pageX - c.offset().left;
                          n.touches &&
                            (u =
                              (n.pageX || n.touches[0].clientX) -
                              c.offset().left);
                          var f = function (e) {
                              return u < e / 2
                                ? 0
                                : i - u < e / 2
                                ? i - e
                                : l - e / 2;
                            },
                            p = f(o);
                          if (
                            (v.css("left", p + "px"),
                            t.getSources()[t.getCurrentSource()].gridThumbnail)
                          ) {
                            var d =
                                t.getConfig().gridThumbnail.thumbnailInterval,
                              g =
                                t.getConfig().gridThumbnail
                                  .originalThumbnailWidth,
                              h =
                                t.getConfig().gridThumbnail
                                  .originalThumbnailHeight,
                              C = t.getConfig().gridThumbnail.columnCount,
                              y = t.getConfig().gridThumbnail.rowCount,
                              b = t.getConfig().gridThumbnail.resizeScale;
                            m.css("width", g * b + "px"),
                              m.css("height", h * b + "px"),
                              m.css(
                                "background-size",
                                g * b * C + "px " + h * b * y + "px"
                              );
                            var w = Math.floor(r / d),
                              E = Math.floor(w / (C * y)),
                              B = Math.floor((w % (C * y)) / C),
                              x = (w % (C * y)) % C,
                              k = -1 * x * g * b,
                              I = -1 * B * h * b;
                            OvenPlayerConsole.log(
                              "Grid Thumbnail:",
                              w + ": " + E + "(" + B + ", " + x + ")"
                            );
                            var S =
                              t.getSources()[t.getCurrentSource()]
                                .gridThumbnail[E];
                            a !== S &&
                              (m.css("background-image", "url(" + S + ")"),
                              (a = S)),
                              m.css(
                                "background-position",
                                "left " + k + "px top " + I + "px"
                              );
                            var T = f(g * b);
                            m.css("left", T + "px");
                          } else m.hide();
                        }
                        function B(e) {
                          var n = (l || 0) * e,
                            r =
                              t.getSources()[t.getCurrentSource()].sectionStart;
                          r && r > 0 && (n += r), t.seek(n);
                        }
                        var x = {
                          "touchstart .op-progressbar": function (e) {
                            if (n) return !1;
                            i = !0;
                            var t = w(e);
                            if (-1 === t) return !1;
                            y(t), b(0), B(t);
                          },
                          "touchmove .op-progressbar": function (e) {
                            if (i) {
                              var t = w(e);
                              if (-1 === t) return !1;
                              y(t), b(0), B(t), E(t, e);
                            }
                          },
                          "touchend .op-progressbar": function (e) {
                            i && (i = !1),
                              r.removeClass("op-progressbar-hover"),
                              v.hide(),
                              m.hide();
                          },
                          "mouseenter .op-progressbar": function (e, t, o) {
                            e.preventDefault(),
                              C ||
                                (n || v.show(),
                                r.addClass("op-progressbar-hover"));
                          },
                          "mouseleave .op-progressbar": function (e, t, n) {
                            e.preventDefault(),
                              r.removeClass("op-progressbar-hover"),
                              v.hide(),
                              m.hide(),
                              b(0);
                          },
                          "mousedown .op-progressbar": function (e, t, r) {
                            if ((e.preventDefault(), n || C)) return !1;
                            i = !0;
                            var o = w(e);
                            if (-1 === o) return !1;
                            y(o), b(0), B(o);
                          },
                          "mousemove .op-progressbar": function (e, t, r) {
                            if ((e.preventDefault(), !i && !n && !C)) {
                              var o = w(e);
                              b(o), E(o, e);
                            }
                            if (i && !C) {
                              var A = w(e);
                              if (-1 === A) return !1;
                              y(A), b(0), B(A), E(A, e);
                            }
                          },
                          "mouseup .op-progressbar": function (e, t, n) {
                            e.preventDefault(),
                              i &&
                                !C &&
                                ((i = !1),
                                r.removeClass("op-progressbar-hover"));
                          },
                        };
                        return (
                          t.getConfig().disableSeekUI && (x = {}),
                          On(
                            e,
                            "ProgressBar",
                            t.getConfig(),
                            null,
                            x,
                            function (e, r) {
                              (c = e),
                                (u = e.find(".op-load-progress")),
                                (f = e.find(".op-play-progress")),
                                (p = e.find(".op-hover-progress")),
                                (d = e.find(".op-progressbar-knob-container")),
                                (g = e.find(".op-progressbar-knob")),
                                (h = g.width()),
                                (v = e.find(".op-progressbar-time")),
                                (m = e.find(".op-progressbar-preview")),
                                n
                                  ? t.on(
                                      Se,
                                      function (e) {
                                        e &&
                                          e.duration &&
                                          e.position &&
                                          (y(e.position / e.duration),
                                          e.duration);
                                      },
                                      r
                                    )
                                  : (t.on(
                                      Le,
                                      function (e) {
                                        e &&
                                          e.duration &&
                                          e.position &&
                                          ((l = e.duration),
                                          y(e.position / e.duration));
                                      },
                                      r
                                    ),
                                    t.on(
                                      Te,
                                      function (e) {
                                        var t, n;
                                        e &&
                                          e.bufferPercent &&
                                          ((t = e.bufferPercent / 100),
                                          (n = c.width() * t),
                                          u.css("width", n + "px"));
                                      },
                                      r
                                    ));
                            },
                            function (e) {
                              n
                                ? t.off(Se, null, e)
                                : (t.off(Le, null, e), t.off(Te, null, e));
                            }
                          )
                        );
                      })(e.find(".op-progressbar-container"), t, n));
                  }
                  function m() {
                    i && i.destroy(),
                      (i = (function (e, t) {
                        var n = Un(),
                          r = {
                            "click .op-setting-button": function (e, r, o) {
                              e.preventDefault();
                              var i = r.closest(".op-controls-container");
                              if (n.size() > 0) n.clear();
                              else {
                                var A = (function (e) {
                                  var t = {
                                      id: "panel-" + new Date().getTime(),
                                      title: "Settings",
                                      body: [],
                                      isRoot: !0,
                                      panelType: "",
                                    },
                                    n = e.getConfig();
                                  n &&
                                    n.systemText &&
                                    (Object.keys(jn).forEach(function (e) {
                                      jn[e] = n.systemText.ui.setting[e];
                                    }),
                                    (t.title = n.systemText.ui.setting.title));
                                  var r = e.getSources(),
                                    o =
                                      r && r.length > 0
                                        ? r[e.getCurrentSource()]
                                        : null,
                                    i = e.getQualityLevels(),
                                    A =
                                      i && i.length > 0
                                        ? i[e.getCurrentQuality()]
                                        : null,
                                    a = e.getCaptionList(),
                                    s = e.getCurrentCaption(),
                                    l = e.getFramerate();
                                  if (
                                    e.getDuration() !== 1 / 0 &&
                                    o &&
                                    o.type !== pe
                                  ) {
                                    var c = {
                                      title: jn.speed,
                                      value: e.getPlaybackRate() + jn.speedUnit,
                                      description:
                                        e.getPlaybackRate() + jn.speedUnit,
                                      panelType: "speed",
                                      hasNext: !0,
                                    };
                                    t.body.push(c);
                                  }
                                  if (r && r.length > 0) {
                                    var u = {
                                      title: jn.source,
                                      value: o ? o.label : "Default",
                                      description: o ? o.label : "Default",
                                      panelType: "source",
                                      hasNext: !0,
                                    };
                                    t.body.push(u);
                                  }
                                  if (i && i.length > 0) {
                                    var f = {
                                      title: jn.quality,
                                      value: A ? A.label : "Default",
                                      description: A ? A.label : "Default",
                                      panelType: "quality",
                                      hasNext: !0,
                                    };
                                    t.body.push(f);
                                  }
                                  if (a && a.length > 0) {
                                    var p = {
                                      title: jn.caption,
                                      value: a[s] ? a[s].label : "OFF",
                                      description: a[s] ? a[s].label : "OFF",
                                      panelType: "caption",
                                      hasNext: !0,
                                    };
                                    t.body.push(p);
                                  }
                                  if (l > 0) {
                                    var d = {
                                      title: jn.display,
                                      value: e.isTimecodeMode()
                                        ? "Play time"
                                        : "Framecode",
                                      description: e.isTimecodeMode()
                                        ? "Play time"
                                        : "Framecode",
                                      panelType: "display",
                                      hasNext: !0,
                                    };
                                    t.body.push(d);
                                  }
                                  return t;
                                })(t);
                                n.add(Wn(i, t, A));
                              }
                            },
                          };
                        return On(
                          e,
                          "SettingButton",
                          t.getConfig(),
                          null,
                          r,
                          function (e, t) {},
                          function (e) {}
                        );
                      })(e.find(".setting-holder"), t));
                  }
                  function C() {
                    l ||
                      (l = (function (e, t) {
                        var n = ze(t.getContainerElement()),
                          r = "",
                          o = "",
                          i = !1,
                          A = (t.getConfig(), t.getBrowser()),
                          a = "iOS" === A.os,
                          s = (A.os, ""),
                          l = !1,
                          c = {
                            onfullscreenchange: "fullscreenchange",
                            onmozfullscreenchange: "mozfullscreenchange",
                            onwebkitfullscreenchange: "webkitfullscreenchange",
                            MSFullscreenChange: "MSFullscreenChange",
                          };
                        function u() {
                          var e = !1,
                            t =
                              document.fullscreenElement ||
                              document.webkitFullscreenElement ||
                              document.mozFullScreenElement ||
                              document.msFullscreenElement;
                          return t && n.get() === t && (e = !0), e;
                        }
                        function f() {
                          OvenPlayerConsole.log("FULLSCREEN STATE : ", u()),
                            u()
                              ? (n.addClass("op-fullscreen"),
                                (i = !0),
                                r.hide(),
                                o.show())
                              : (n.removeClass("op-fullscreen"),
                                (i = !1),
                                r.show(),
                                o.hide());
                        }
                        function p() {
                          OvenPlayerConsole.log(
                            "afterFullScreenChangedCallback () "
                          ),
                            f(),
                            t.trigger(xe, i);
                        }
                        function d() {
                          i
                            ? (n.removeClass("op-fullscreen"),
                              (i = !1),
                              r.show(),
                              o.hide())
                            : (n.addClass("op-fullscreen"),
                              (i = !0),
                              r.hide(),
                              o.show()),
                            t.trigger(xe, i);
                        }
                        function g() {
                          var e;
                          !i || (a && !u())
                            ? (function () {
                                var e,
                                  r = "",
                                  o = n.get(),
                                  A = n.find("video")
                                    ? n.find("video").get()
                                    : o,
                                  s = null;
                                if (a) {
                                  if (A.length > 1)
                                    for (var c = 0; c < A.length; c++) {
                                      var u = A[c].getAttribute("title");
                                      u && "Advertisement" === u
                                        ? (s = A[c])
                                        : (e = A[c]);
                                    }
                                  else e = A;
                                  (s && t.getState() === oe) ||
                                  t.getState() === ie ||
                                  t.getState() === Ae
                                    ? s.webkitEnterFullScreen &&
                                      ((r = s.webkitEnterFullScreen()),
                                      (i = !0))
                                    : e.webkitEnterFullScreen &&
                                      ((r = e.webkitEnterFullScreen()),
                                      (i = !0));
                                } else if (o.requestFullscreen) {
                                  var f = t.getConfig().fullscreenOption;
                                  r = o.requestFullscreen(f);
                                } else
                                  o.webkitRequestFullScreen
                                    ? (r = o.webkitRequestFullScreen())
                                    : o.mozRequestFullScreen
                                    ? (r = o.mozRequestFullScreen())
                                    : o.msRequestFullscreen &&
                                      (r = o.msRequestFullscreen());
                                r &&
                                  r
                                    .then(function () {
                                      (i = !0), (l = !1);
                                    })
                                    .catch(function (e) {
                                      (l = !0), d();
                                    });
                              })()
                            : l
                            ? d()
                            : ((e = ""),
                              document.exitFullscreen
                                ? (e = document.exitFullscreen())
                                : document.webkitExitFullscreen
                                ? (e = document.webkitExitFullscreen())
                                : document.webkitExitFullScreen
                                ? (e = document.webkitExitFullScreen())
                                : document.mozCancelFullScreen
                                ? (e = document.mozCancelFullScreen())
                                : document.msExitFullscreen &&
                                  (e = document.msExitFullscreen()),
                              e &&
                                e
                                  .then(function () {
                                    i = !1;
                                  })
                                  .catch(function (e) {}));
                        }
                        t.toggleFullScreen = g;
                        var h = {
                          "click .op-fullscreen-button": function (e, n, r) {
                            e.preventDefault(),
                              t.trigger("fullscreenRequested", null),
                              g();
                          },
                        };
                        return On(
                          e,
                          "FullScreenButton",
                          t.getConfig(),
                          null,
                          h,
                          function (e, A) {
                            var l, u;
                            (r = e.find(".op-fullscreen-expand")),
                              (o = e.find(".op-fullscreen-compress")),
                              f(),
                              (l = n.get()),
                              (u = ""),
                              l.requestFullscreen
                                ? (u = c.onfullscreenchange)
                                : l.webkitRequestFullScreen
                                ? (u = c.onwebkitfullscreenchange)
                                : l.mozRequestFullScreen
                                ? (u = c.onmozfullscreenchange)
                                : l.msRequestFullscreen
                                ? (u = c.MSFullscreenChange)
                                : Object.keys(c).forEach(function (e) {
                                    document[e] && (u = c[e]);
                                  }),
                              (s = u) && document.addEventListener(s, p, !1),
                              t.on(
                                Ie,
                                function (e) {
                                  var t,
                                    r = n.find("video")
                                      ? n.find("video").get()
                                      : n.get();
                                  if (e.isLinear && a && i) {
                                    if (r.length > 1)
                                      for (var o = 0; o < r.length; o++) {
                                        var A = r[o].getAttribute("title");
                                        A && "Advertisement" === A
                                          ? r[o]
                                          : (t = r[o]);
                                      }
                                    else t = r;
                                    t &&
                                      t.webkitExitFullscreen &&
                                      (t.webkitExitFullscreen(), (i = !1));
                                  }
                                },
                                A
                              );
                          },
                          function (e) {
                            t.getConfig() &&
                              !t.getConfig().expandFullScreenUI &&
                              s &&
                              document.removeEventListener(s, p),
                              t.off(Ie, null, e);
                          }
                        );
                      })(e.find(".fullscreen-holder"), t));
                  }
                  function y(n) {
                    n.duration > 9e15 && (n.duration = 1 / 0);
                    var r = t.getSources()[t.getCurrentSource()].sectionStart,
                      o = t.getSources()[t.getCurrentSource()].sectionEnd;
                    o && (n.duration = o),
                      r && (n.duration = n.duration - r),
                      (function (n) {
                        a && a.destroy(),
                          (a = (function (e, t, n) {
                            var r = "",
                              o = "";
                            function i(e) {
                              return s(e);
                            }
                            return On(
                              e,
                              "TimeDisplay",
                              t.getConfig(),
                              n,
                              {},
                              function (e, A) {
                                var a = t.isTimecodeMode();
                                (r = e.find(".op-time-current")),
                                  (o = e.find(".op-time-duration")),
                                  n.duration !== 1 / 0 &&
                                    (a
                                      ? o.text(i(n.duration))
                                      : o.text(
                                          Math.round(
                                            n.duration * t.getFramerate()
                                          ) +
                                            " (" +
                                            t.getFramerate() +
                                            "fps)"
                                        ),
                                    t.on(
                                      Ue,
                                      function (e) {
                                        (a = e)
                                          ? o.text(i(n.duration))
                                          : o.text(
                                              Math.round(
                                                n.duration * t.getFramerate()
                                              ) +
                                                " (" +
                                                t.getFramerate() +
                                                "fps)"
                                            );
                                      },
                                      A
                                    ),
                                    t.on(
                                      Le,
                                      function (e) {
                                        a
                                          ? r.text(i(e.position))
                                          : r.text(
                                              Math.round(
                                                e.position * t.getFramerate()
                                              )
                                            );
                                      },
                                      A
                                    ));
                              },
                              function (e) {
                                t.off(Ue, null, e), t.off(Le, null, e);
                              }
                            );
                          })(e.find(".op-left-controls"), t, n));
                      })(n),
                      C(),
                      t.getFramerate && t.getFramerate(),
                      n.duration === 1 / 0
                        ? (OvenPlayerConsole.log("[[[[LIVE MODE]]]]"),
                          A && A.destroy())
                        : p(!1),
                      (u = !0);
                  }
                  function b() {
                    a && a.destroy(),
                      A && A.destroy(),
                      m(),
                      C(),
                      h.removeClass("linear-ad");
                  }
                  (o = (function (e, t) {
                    var n = "",
                      r = "",
                      o = "",
                      i = "",
                      A = "",
                      a = "",
                      s = "",
                      l = {
                        "click .op-play-button": function (e, n, r) {
                          e.preventDefault();
                          var o = t.getState(),
                            i = t.getPlaylist(),
                            A = t.getCurrentPlaylist();
                          o === X
                            ? t.play()
                            : o === ee || o === ie
                            ? t.pause()
                            : o === ne || o === re
                            ? t.stop()
                            : o === $ || o === Ae
                            ? t.play()
                            : o === te
                            ? t.setCurrentSource(t.getCurrentSource())
                            : o === q &&
                              i.length === A + 1 &&
                              (t.seek(0), t.play());
                        },
                        "click .op-seek-button-back": function (e, n, r) {
                          var o = t.getConfig().seekControlInterval;
                          o || (o = 10);
                          var i = t.getPosition() - o;
                          i < 0 && (i = 0), t.seek(i);
                        },
                        "click .op-seek-button-forward": function (e, n, r) {
                          var o = t.getConfig().seekControlInterval;
                          o || (o = 10);
                          var i = t.getPosition() + o;
                          i > t.getDuration() && (i = t.getDuration()),
                            t.seek(i);
                        },
                      };
                    return On(
                      e,
                      "PlayButton",
                      t.getConfig(),
                      null,
                      l,
                      function (e, l) {
                        (n = e.find(".op-play-button .op-play")),
                          (r = e.find(".op-play-button .op-pause")),
                          (o = e.find(".op-play-button .op-replay")),
                          (i = e.find(".op-seek-button-back")),
                          (A = e.find(".op-seek-button-forward")),
                          (a = e.find(".op-seek-back-text")),
                          (s = e.find(".op-seek-forward-text")),
                          t.on(
                            ye,
                            function (e) {
                              var t;
                              e &&
                                e.newstate &&
                                ((t = e.newstate),
                                n.hide(),
                                r.hide(),
                                o.hide(),
                                t === ee || t === ie || t === ne || t === re
                                  ? r.show()
                                  : t === $ || t === Ae
                                  ? n.show()
                                  : t === q
                                  ? o.show()
                                  : n.show());
                            },
                            l
                          ),
                          t.getConfig().showSeekControl || (i.hide(), A.hide());
                        var c = t.getConfig().seekControlInterval;
                        c ? (a.text(c), s.text(c)) : (a.text(10), s.text(10));
                      },
                      function (e) {
                        t.off(ye, null, e);
                      }
                    );
                  })(e.find(".op-left-controls"), t)),
                    (r = (function (e, t) {
                      var n = "",
                        r = "",
                        o = "",
                        i = "",
                        A = "",
                        a = "",
                        s = "",
                        l = !1,
                        c = 0,
                        u =
                          "iOS" === t.getBrowser().os ||
                          "Android" === t.getBrowser().os;
                      function f(e) {
                        t.getMute() && (e = 0),
                          (function (e) {
                            A.hide(),
                              a.hide(),
                              s.hide(),
                              e >= 70
                                ? A.show()
                                : e < 70 && e > 0
                                ? a.show()
                                : 0 == e
                                ? s.show()
                                : A.show();
                          })(e);
                        var n = (c * e) / 100;
                        o.css("left", n + "px"), i.css("width", n + "px");
                      }
                      function p(e) {
                        var t =
                          (((e.pageX || e.touches[0].clientX) -
                            r.offset().left) /
                            70) *
                          100;
                        return t < 0 && (t = 0), t > 100 && (t = 100), t;
                      }
                      var d = {
                          "click .op-volume-button": function (e, n, r) {
                            e.preventDefault(),
                              u ||
                                (0 === t.getVolume()
                                  ? (t.setMute(!1), t.setVolume(100))
                                  : t.setMute());
                          },
                          "mouseenter .op-volume-button": function (e, t, r) {
                            e.preventDefault(), u || n.addClass("active");
                          },
                          "mouseleave .op-volume-silder": function (e, t, n) {
                            e.preventDefault(), (l = !1);
                          },
                          "mousedown .op-volume-silder": function (e, n, r) {
                            e.preventDefault(),
                              (l = !0),
                              t.setMute(!1),
                              t.setVolume(p(e));
                          },
                          "mouseup .op-volume-silder": function (e, t, n) {
                            e.preventDefault(), (l = !1);
                          },
                          "mousemove .op-volume-silder": function (e, n, r) {
                            if ((e.preventDefault(), !l)) return !1;
                            t.setVolume(p(e));
                          },
                          "touchstart .op-volume-button": function (e) {
                            u && (t.getMute() ? t.setMute(!1) : t.setMute(!0));
                          },
                        },
                        g = On(
                          e,
                          "VolumeButton",
                          t.getConfig(),
                          null,
                          d,
                          function (e, l) {
                            (n = e.find(".op-volume-slider-container")),
                              t.getBrowser().mobile && n.hide(),
                              (r = e.find(".op-volume-silder")),
                              (o = e.find(".op-volume-slider-handle")),
                              (i = e.find(".op-volume-slider-value")),
                              (A = e.find(".op-volume-max")),
                              (a = e.find(".op-volume-small")),
                              (s = e.find(".op-volume-mute")),
                              (c = 64),
                              o.css("left", c + "px"),
                              f(t.getVolume()),
                              t.on(
                                de,
                                function () {
                                  f(t.getVolume());
                                },
                                l
                              ),
                              t.on(
                                Re,
                                function (e) {
                                  f(e.volume);
                                },
                                l
                              ),
                              t.on(
                                Qe,
                                function (e) {
                                  e.mute ? f(0) : f(t.getVolume());
                                },
                                l
                              );
                          },
                          function (e) {
                            t.off(de, null, e),
                              t.off(Re, null, e),
                              t.off(Qe, null, e);
                          }
                        );
                      return (
                        (g.setMouseDown = function (e) {
                          l = e;
                        }),
                        g
                      );
                    })(e.find(".op-left-controls"), t));
                  var w = t.getPlaylist(),
                    E = t.getCurrentPlaylist();
                  (w && w[E] && w[E].adTagUrl) || m(),
                    C(),
                    t.on(
                      de,
                      function () {
                        e.show();
                      },
                      c
                    ),
                    t.on(
                      Me,
                      function (e) {
                        (n = e.duration), (v = e), (e.isP2P = f), y(e);
                      },
                      c
                    ),
                    t.on(
                      Le,
                      function (e) {
                        (d ||
                          (t &&
                            t.getProviderName &&
                            "rtmp" === t.getProviderName())) &&
                          !n &&
                          v &&
                          v.duration !== e.duration &&
                          ((v = e), y(e));
                      },
                      c
                    ),
                    t.on(
                      Be,
                      function (e) {
                        h.find(".op-setting-panel") &&
                          h
                            .find(".op-setting-panel")
                            .css(
                              "max-height",
                              h.height() -
                                h.find(".op-bottom-panel").height() +
                                "px"
                            );
                      },
                      c
                    ),
                    t.on(
                      Ne,
                      function (e) {
                        f = e;
                      },
                      c
                    ),
                    t.on(
                      we,
                      function () {
                        if (!u) {
                          var n = "";
                          t.getSources().length > 0 &&
                            t.getSources()[t.getCurrentSource()] &&
                            t.getSources()[t.getCurrentSource()].type &&
                            (n = t.getSources()[t.getCurrentSource()].type),
                            y({ isP2P: f, duration: t.getDuration(), type: n });
                        }
                        e.show();
                      },
                      c
                    ),
                    t.on(
                      Ce,
                      function (t) {
                        e.show();
                      },
                      c
                    ),
                    t.on(
                      Ie,
                      function (e) {
                        e.isLinear
                          ? (h.addClass("linear-ad"),
                            p(!0),
                            a && a.destroy(),
                            i && i.destroy(),
                            g && l && l.destroy())
                          : h.removeClass("linear-ad");
                      },
                      c
                    ),
                    t.on(
                      ae,
                      function () {
                        b();
                      },
                      c
                    ),
                    t.on(
                      se,
                      function () {
                        b();
                      },
                      c
                    ),
                    t.on(
                      Oe,
                      function () {
                        b();
                      },
                      c
                    );
                },
                function (e) {
                  t.off(Me, null, e),
                    t.off(Le, null, e),
                    t.off(ae, null, e),
                    t.off(Ie, null, e),
                    t.off(Ne, null, e),
                    t.off(se, null, e),
                    t.off(Be, null, e),
                    t.off(Oe, null, e),
                    a && a.destroy(),
                    o && o.destroy(),
                    A && A.destroy(),
                    l && l.destroy(),
                    r && r.destroy();
                }
              );
            },
            Gn = n(5655),
            zn = n.n(Gn),
            Vn = n(3379),
            _n = n.n(Vn),
            Hn = n(7795),
            Jn = n.n(Hn),
            Zn = n(569),
            Kn = n.n(Zn),
            Xn = n(3565),
            qn = n.n(Xn),
            $n = n(9216),
            er = n.n($n),
            tr = n(4589),
            nr = n.n(tr),
            rr = n(2021),
            or = {};
          (or.styleTagTransform = nr()),
            (or.setAttributes = qn()),
            (or.insert = Kn().bind(null, "head")),
            (or.domAPI = Jn()),
            (or.insertStyleElement = er()),
            _n()(rr.Z, or),
            rr.Z && rr.Z.locals && rr.Z.locals;
          var ir,
            Ar = function (e) {
              var t,
                n = "",
                r = "",
                o = "",
                i = "",
                A = null,
                a = "",
                s = X,
                l = !1,
                c = Un(),
                u = "",
                f = "",
                p = {};
              function d(e, n) {
                if ((a && (clearTimeout(a), (a = null)), e)) {
                  if (c.size() > 0) return !1;
                  t.addClass("op-autohide");
                } else
                  t.removeClass("op-autohide"),
                    n &&
                      (a = setTimeout(function () {
                        if (c.size() > 0) return !1;
                        t.addClass("op-autohide");
                      }, 3e3));
              }
              function g() {
                var e = s;
                e === X || e === $ || e === q
                  ? (e === q && A.seek(0), A.play())
                  : e === ee && A.pause();
              }
              function h(e, t) {
                var n,
                  r = A.getDuration(),
                  o = A.getPosition();
                (n = t ? Math.max(o - e, 0) : Math.min(o + e, r)), A.seek(n);
              }
              function v(e) {
                var t,
                  n = A.getVolume();
                (t = e ? Math.min(n + 5, 100) : Math.max(n - 5, 0)),
                  A.setVolume(t);
              }
              function m() {
                var e = t.width();
                e < 576
                  ? ((u = "xsmall"),
                    t.addClass("xsmall"),
                    e < 490 && t.addClass("xxsmall"))
                  : e < 768
                  ? ((u = "small"), t.addClass("small"))
                  : e < 992
                  ? ((u = "medium"), t.addClass("medium"))
                  : ((u = "large"), t.addClass("large"));
              }
              var C = {
                "click .ovenplayer": function (e, t, n) {
                  if ((A && A.trigger(Ee, e), i))
                    return e.preventDefault(), i.destroy(), (i = null), !1;
                  if (
                    !ze(e.target).closest(".op-controls-container") &&
                    !ze(e.target).closest(".op-setting-panel")
                  ) {
                    if (c.size() > 0) return e.preventDefault(), c.clear(), !1;
                    A.getDuration() === 1 / 0 || A.getBrowser().mobile || g();
                  }
                },
                "dblclick .ovenplayer": function (e, t, n) {
                  A &&
                    A.getConfig().expandFullScreenUI &&
                    A.toggleFullScreen &&
                    (ze(e.target).closest(".op-controls-container") ||
                      ze(e.target).closest(".op-setting-panel") ||
                      A.toggleFullScreen());
                },
                "touchstart .ovenplayer": function (e, t, n) {
                  s === ee ||
                  s === X ||
                  s === ne ||
                  (s === ie && "xsmall" === u)
                    ? d(!1, !0)
                    : d(!1);
                },
                "mouseenter .ovenplayer": function (e, t, n) {
                  e.preventDefault(),
                    s === ee ||
                    s === X ||
                    s === ne ||
                    (s === ie && "xsmall" === u)
                      ? d(!1, !0)
                      : d(!1);
                },
                "mousemove .ovenplayer": function (e, t, n) {
                  e.preventDefault(),
                    s === ee ||
                    s === X ||
                    s === ne ||
                    (s === ie && "xsmall" === u)
                      ? d(!1, !0)
                      : d(!1);
                },
                "mouseleave .ovenplayer": function (e, t, n) {
                  e.preventDefault(),
                    (s === ee ||
                      s === X ||
                      s === ne ||
                      (s === ie && "xsmall" === u)) &&
                      d(!0);
                },
                "keydown .ovenplayer": function (e, t, n) {
                  var r = A.getFramerate();
                  switch (e.keyCode) {
                    case 16:
                      e.preventDefault(), (l = !0);
                      break;
                    case 32:
                      e.preventDefault(), g();
                      break;
                    case 37:
                      e.preventDefault(),
                        A.getConfig().disableSeekUI ||
                          (l && r ? A.seekFrame(-1) : h(5, !0));
                      break;
                    case 39:
                      e.preventDefault(),
                        A.getConfig().disableSeekUI ||
                          (l && r ? A.seekFrame(1) : h(5, !1));
                      break;
                    case 38:
                      e.preventDefault(), v(!0);
                      break;
                    case 40:
                      e.preventDefault(), v(!1);
                  }
                },
                "keyup .ovenplayer": function (e, t, n) {
                  switch (e.keyCode) {
                    case 16:
                      e.preventDefault(), (l = !1);
                  }
                },
                "contextmenu .ovenplayer": function (e, n, r) {
                  if (
                    (e.stopPropagation(), !ze(e.currentTarget).find("object"))
                  )
                    return (
                      e.preventDefault(),
                      (o = e.pageX),
                      (a = e.pageY),
                      i && (i.destroy(), (i = null)),
                      (i = (function (e, t, n) {
                        var r = ze(t.getContainerElement()),
                          o = {
                            "click .op-context-item": function (e, t, n) {
                              e.preventDefault(),
                                window.open(
                                  "https://github.com/AirenSoft/OvenPlayer",
                                  "_blank"
                                );
                            },
                          };
                        return On(
                          e,
                          "ContextPanel",
                          t.getConfig(),
                          n,
                          o,
                          function (e, t) {
                            var o = e.width(),
                              i = e.height(),
                              A = Math.min(
                                n.pageX - r.offset().left,
                                r.width() - o
                              ),
                              a = Math.min(
                                n.pageY - r.offset().top,
                                r.height() - i
                              );
                            e.css("left", A + "px"), e.css("top", a + "px");
                          },
                          function () {}
                        );
                      })(t, A, { pageX: o, pageY: a })),
                      !1
                    );
                  var o, a;
                },
              };
              return (
                ((p = On(
                  e,
                  "View",
                  null,
                  e.id,
                  C,
                  function (e, r) {
                    (t = e),
                      (n = r),
                      m(),
                      (f = u),
                      new (zn())(t.get(), function () {
                        t.removeClass("large"),
                          t.removeClass("medium"),
                          t.removeClass("small"),
                          t.removeClass("xsmall"),
                          t.removeClass("xxsmall"),
                          m(),
                          u !== f && ((f = u), A && A.trigger(Be, f));
                      });
                  },
                  function () {
                    o && (o.destroy(), (o = null)),
                      r && (r.destroy(), (r = null));
                  },
                  !0
                )).getMediaElementContainer = function () {
                  return t.find(".op-media-element-container").get();
                }),
                (p.setApi = function (e) {
                  ((A = e).getContainerElement = function () {
                    return t.get();
                  }),
                    (A.getContainerId = function () {
                      return t.get().id;
                    }),
                    A.on(de, function (n) {
                      r || (r = Yn(t.find(".op-ui"), e)),
                        i || t.addClass("op-no-controls");
                    }),
                    A.on(Ce, function (e) {
                      if (A) {
                        var t = A.getSources() || [];
                        r && t.length;
                      }
                    }),
                    A.on(ge, function (e) {
                      n.destroy();
                    }),
                    A.on(we, function (n) {
                      !r && i && (r = Yn(t.find(".op-ui"), e));
                    }),
                    A.on(ye, function (e) {
                      e &&
                        e.newstate &&
                        ((s = e.newstate),
                        e.newstate === ee ||
                        (e.newstate === ie && "xsmall" === u)
                          ? d(!1, !0)
                          : d(!1));
                    });
                  var i = A.getConfig() && A.getConfig().controls;
                  (o = Fn(t.find(".op-ui"), e)), (r = Yn(t.find(".op-ui"), e));
                  var a = A.getConfig().aspectRatio;
                  if (a && 2 === a.split(":").length) {
                    var l = 1 * a.split(":")[0],
                      c = ((1 * a.split(":")[1]) / l) * 100;
                    t.find(".op-ratio").css("padding-bottom", c + "%");
                  }
                  A.showControls = function (e) {
                    e
                      ? (t.removeClass("op-no-controls"), d(!1, !0))
                      : t.addClass("op-no-controls");
                  };
                }),
                p
              );
            },
            ar =
              ((ir = {}),
              Object.assign(ir, Tn),
              (ir.create = function (e, t) {
                console.log("[OvenPlayer] v.0.10.23");
                var n = Ze(e),
                  r = Ar(n),
                  o = Tn.create(r.getMediaElementContainer(), t);
                return r.setApi(o), o;
              }),
              ir);
        },
        1001: function () {
          !(function (e) {
            "use strict";
            if ("window" in e && "document" in e) {
              document.querySelectorAll ||
                (document.querySelectorAll = function (e) {
                  var t,
                    n = document.createElement("style"),
                    r = [];
                  for (
                    document.documentElement.firstChild.appendChild(n),
                      document._qsa = [],
                      n.styleSheet.cssText =
                        e +
                        "{x-qsa:expression(document._qsa && document._qsa.push(this))}",
                      window.scrollBy(0, 0),
                      n.parentNode.removeChild(n);
                    document._qsa.length;

                  )
                    (t = document._qsa.shift()).style.removeAttribute("x-qsa"),
                      r.push(t);
                  return (document._qsa = null), r;
                }),
                document.querySelector ||
                  (document.querySelector = function (e) {
                    var t = document.querySelectorAll(e);
                    return t.length ? t[0] : null;
                  }),
                document.getElementsByClassName ||
                  (document.getElementsByClassName = function (e) {
                    return (
                      (e = String(e).replace(/^|\s+/g, ".")),
                      document.querySelectorAll(e)
                    );
                  }),
                (e.Node =
                  e.Node ||
                  function () {
                    throw TypeError("Illegal constructor");
                  }),
                [
                  ["ELEMENT_NODE", 1],
                  ["ATTRIBUTE_NODE", 2],
                  ["TEXT_NODE", 3],
                  ["CDATA_SECTION_NODE", 4],
                  ["ENTITY_REFERENCE_NODE", 5],
                  ["ENTITY_NODE", 6],
                  ["PROCESSING_INSTRUCTION_NODE", 7],
                  ["COMMENT_NODE", 8],
                  ["DOCUMENT_NODE", 9],
                  ["DOCUMENT_TYPE_NODE", 10],
                  ["DOCUMENT_FRAGMENT_NODE", 11],
                  ["NOTATION_NODE", 12],
                ].forEach(function (t) {
                  t[0] in e.Node || (e.Node[t[0]] = t[1]);
                }),
                (e.DOMException =
                  e.DOMException ||
                  function () {
                    throw TypeError("Illegal constructor");
                  }),
                [
                  ["INDEX_SIZE_ERR", 1],
                  ["DOMSTRING_SIZE_ERR", 2],
                  ["HIERARCHY_REQUEST_ERR", 3],
                  ["WRONG_DOCUMENT_ERR", 4],
                  ["INVALID_CHARACTER_ERR", 5],
                  ["NO_DATA_ALLOWED_ERR", 6],
                  ["NO_MODIFICATION_ALLOWED_ERR", 7],
                  ["NOT_FOUND_ERR", 8],
                  ["NOT_SUPPORTED_ERR", 9],
                  ["INUSE_ATTRIBUTE_ERR", 10],
                  ["INVALID_STATE_ERR", 11],
                  ["SYNTAX_ERR", 12],
                  ["INVALID_MODIFICATION_ERR", 13],
                  ["NAMESPACE_ERR", 14],
                  ["INVALID_ACCESS_ERR", 15],
                ].forEach(function (t) {
                  t[0] in e.DOMException || (e.DOMException[t[0]] = t[1]);
                }),
                (function () {
                  function t(e, t, n) {
                    if ("function" == typeof t) {
                      "DOMContentLoaded" === e && (e = "load");
                      var r = this,
                        o = function (e) {
                          (e._timeStamp = Date.now()),
                            (e._currentTarget = r),
                            t.call(this, e),
                            (e._currentTarget = null);
                        };
                      (this["_" + e + t] = o), this.attachEvent("on" + e, o);
                    }
                  }
                  function n(e, t, n) {
                    if ("function" == typeof t) {
                      "DOMContentLoaded" === e && (e = "load");
                      var r = this["_" + e + t];
                      r &&
                        (this.detachEvent("on" + e, r),
                        (this["_" + e + t] = null));
                    }
                  }
                  "Element" in e &&
                    !Element.prototype.addEventListener &&
                    Object.defineProperty &&
                    ((Event.CAPTURING_PHASE = 1),
                    (Event.AT_TARGET = 2),
                    (Event.BUBBLING_PHASE = 3),
                    Object.defineProperties(Event.prototype, {
                      CAPTURING_PHASE: {
                        get: function () {
                          return 1;
                        },
                      },
                      AT_TARGET: {
                        get: function () {
                          return 2;
                        },
                      },
                      BUBBLING_PHASE: {
                        get: function () {
                          return 3;
                        },
                      },
                      target: {
                        get: function () {
                          return this.srcElement;
                        },
                      },
                      currentTarget: {
                        get: function () {
                          return this._currentTarget;
                        },
                      },
                      eventPhase: {
                        get: function () {
                          return this.srcElement === this.currentTarget
                            ? Event.AT_TARGET
                            : Event.BUBBLING_PHASE;
                        },
                      },
                      bubbles: {
                        get: function () {
                          switch (this.type) {
                            case "click":
                            case "dblclick":
                            case "mousedown":
                            case "mouseup":
                            case "mouseover":
                            case "mousemove":
                            case "mouseout":
                            case "mousewheel":
                            case "keydown":
                            case "keypress":
                            case "keyup":
                            case "resize":
                            case "scroll":
                            case "select":
                            case "change":
                            case "submit":
                            case "reset":
                              return !0;
                          }
                          return !1;
                        },
                      },
                      cancelable: {
                        get: function () {
                          switch (this.type) {
                            case "click":
                            case "dblclick":
                            case "mousedown":
                            case "mouseup":
                            case "mouseover":
                            case "mouseout":
                            case "mousewheel":
                            case "keydown":
                            case "keypress":
                            case "keyup":
                            case "submit":
                              return !0;
                          }
                          return !1;
                        },
                      },
                      timeStamp: {
                        get: function () {
                          return this._timeStamp;
                        },
                      },
                      stopPropagation: {
                        value: function () {
                          this.cancelBubble = !0;
                        },
                      },
                      preventDefault: {
                        value: function () {
                          this.returnValue = !1;
                        },
                      },
                      defaultPrevented: {
                        get: function () {
                          return !1 === this.returnValue;
                        },
                      },
                    }),
                    [Window, HTMLDocument, Element].forEach(function (e) {
                      (e.prototype.addEventListener = t),
                        (e.prototype.removeEventListener = n);
                    }));
                })(),
                (function () {
                  function t(e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                    var n = document.createEvent("CustomEvent");
                    return (
                      n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    );
                  }
                  ("CustomEvent" in e && "function" == typeof e.CustomEvent) ||
                    ((t.prototype = e.Event.prototype), (e.CustomEvent = t));
                })(),
                (window.addEvent = function (e, t, n) {
                  e.addEventListener
                    ? e.addEventListener(t, n, !1)
                    : e.attachEvent &&
                      ((e["e" + t + n] = n),
                      (e[t + n] = function () {
                        var r = window.event;
                        (r.currentTarget = e),
                          (r.preventDefault = function () {
                            r.returnValue = !1;
                          }),
                          (r.stopPropagation = function () {
                            r.cancelBubble = !0;
                          }),
                          (r.target = r.srcElement),
                          (r.timeStamp = Date.now()),
                          e["e" + t + n].call(this, r);
                      }),
                      e.attachEvent("on" + t, e[t + n]));
                }),
                (window.removeEvent = function (e, t, n) {
                  e.removeEventListener
                    ? e.removeEventListener(t, n, !1)
                    : e.detachEvent &&
                      (e.detachEvent("on" + t, e[t + n]),
                      (e[t + n] = null),
                      (e["e" + t + n] = null));
                }),
                (function () {
                  function t(e, t) {
                    function n(e) {
                      return e.length ? e.split(/\s+/g) : [];
                    }
                    function r(e, t) {
                      var r = n(t),
                        o = r.indexOf(e);
                      return -1 !== o && r.splice(o, 1), r.join(" ");
                    }
                    if (
                      (Object.defineProperties(this, {
                        length: {
                          get: function () {
                            return n(e[t]).length;
                          },
                        },
                        item: {
                          value: function (r) {
                            var o = n(e[t]);
                            return 0 <= r && r < o.length ? o[r] : null;
                          },
                        },
                        contains: {
                          value: function (r) {
                            if (0 === (r = String(r)).length)
                              throw SyntaxError();
                            if (/\s/.test(r))
                              throw Error("InvalidCharacterError");
                            return -1 !== n(e[t]).indexOf(r);
                          },
                        },
                        add: {
                          value: function () {
                            var r = Array.prototype.slice
                              .call(arguments)
                              .map(String);
                            if (
                              r.some(function (e) {
                                return 0 === e.length;
                              })
                            )
                              throw SyntaxError();
                            if (
                              r.some(function (e) {
                                return /\s/.test(e);
                              })
                            )
                              throw Error("InvalidCharacterError");
                            try {
                              var o = e[t],
                                i = n(o);
                              if (
                                0 ===
                                (r = r.filter(function (e) {
                                  return -1 === i.indexOf(e);
                                })).length
                              )
                                return;
                              0 === o.length || /\s$/.test(o) || (o += " "),
                                (o += r.join(" ")),
                                (e[t] = o);
                            } finally {
                              var A = n(e[t]).length;
                              this.length !== A && (this.length = A);
                            }
                          },
                        },
                        remove: {
                          value: function () {
                            var o = Array.prototype.slice
                              .call(arguments)
                              .map(String);
                            if (
                              o.some(function (e) {
                                return 0 === e.length;
                              })
                            )
                              throw SyntaxError();
                            if (
                              o.some(function (e) {
                                return /\s/.test(e);
                              })
                            )
                              throw Error("InvalidCharacterError");
                            try {
                              var i = e[t];
                              o.forEach(function (e) {
                                i = r(e, i);
                              }),
                                (e[t] = i);
                            } finally {
                              var A = n(e[t]).length;
                              this.length !== A && (this.length = A);
                            }
                          },
                        },
                        toggle: {
                          value: function (o) {
                            var i = arguments[1];
                            try {
                              if (0 === (o = String(o)).length)
                                throw SyntaxError();
                              if (/\s/.test(o))
                                throw Error("InvalidCharacterError");
                              var A = n(e[t]),
                                a = A.indexOf(o);
                              if (-1 !== a && (!i || void 0 === i))
                                return (e[t] = r(o, e[t])), !1;
                              if (-1 !== a && i) return !0;
                              var s = e[t];
                              return (
                                0 === s.length || /\s$/.test(s) || (s += " "),
                                (s += o),
                                (e[t] = s),
                                !0
                              );
                            } finally {
                              var l = n(e[t]).length;
                              this.length !== l && (this.length = l);
                            }
                          },
                        },
                        toString: {
                          value: function () {
                            return e[t];
                          },
                        },
                      }),
                      "length" in this)
                    )
                      for (var o = 0; o < 100; ++o)
                        Object.defineProperty(this, String(o), {
                          get: (function (e) {
                            return function () {
                              return this.item(e);
                            };
                          })(o),
                        });
                    else this.length = n(e[t]).length;
                  }
                  function n(t, n) {
                    "Element" in e &&
                      Element.prototype &&
                      Object.defineProperty &&
                      Object.defineProperty(Element.prototype, t, { get: n });
                  }
                  "classList" in document.createElement("span")
                    ? (window.getClassList = function (e) {
                        return e.classList;
                      })
                    : ((window.getClassList = function (e) {
                        return new t(e, "className");
                      }),
                      n("classList", function () {
                        return new t(this, "className");
                      })),
                    "relList" in document.createElement("link")
                      ? (window.getRelList = function (e) {
                          return e.relList;
                        })
                      : ((window.getRelList = function (e) {
                          return new t(e, "rel");
                        }),
                        n("relList", function () {
                          return new t(this, "rel");
                        })),
                    (function () {
                      if ("DOMTokenList" in e) {
                        var t = document.createElement("span");
                        "classList" in t &&
                          (t.classList.toggle("x", !1),
                          t.classList.contains("x") &&
                            (e.DOMTokenList.prototype.toggle = function (e) {
                              var t = arguments[1];
                              if (void 0 === t) {
                                var n = !this.contains(e);
                                return this[n ? "add" : "remove"](e), n;
                              }
                              return this[(t = !!t) ? "add" : "remove"](e), t;
                            }));
                      }
                    })(),
                    "previousElementSibling" in document.documentElement ||
                      n("previousElementSibling", function () {
                        for (
                          var e = this.previousSibling;
                          e && e.nodeType !== Node.ELEMENT_NODE;

                        )
                          e = e.previousSibling;
                        return e;
                      }),
                    "nextElementSibling" in document.documentElement ||
                      n("nextElementSibling", function () {
                        for (
                          var e = this.nextSibling;
                          e && e.nodeType !== Node.ELEMENT_NODE;

                        )
                          e = e.nextSibling;
                        return e;
                      });
                })(),
                "Element" in e &&
                  !Element.prototype.matches &&
                  (Element.prototype.msMatchesSelector
                    ? (Element.prototype.matches =
                        Element.prototype.msMatchesSelector)
                    : Element.prototype.oMatchesSelector
                    ? (Element.prototype.matches =
                        Element.prototype.oMatchesSelector)
                    : Element.prototype.mozMatchesSelector
                    ? (Element.prototype.matches =
                        Element.prototype.mozMatchesSelector)
                    : Element.prototype.webkitMatchesSelector
                    ? (Element.prototype.matches =
                        Element.prototype.webkitMatchesSelector)
                    : document.querySelectorAll &&
                      (Element.prototype.matches = function (e) {
                        for (
                          var t = (
                              this.document || this.ownerDocument
                            ).querySelectorAll(e),
                            n = t.length;
                          --n >= 0 && t.item(n) !== this;

                        );
                        return n > -1;
                      })),
                window.Element &&
                  !Element.prototype.closest &&
                  (Element.prototype.closest = function (e) {
                    var t,
                      n = (
                        this.document || this.ownerDocument
                      ).querySelectorAll(e),
                      r = this;
                    do {
                      for (t = n.length; --t >= 0 && n.item(t) !== r; );
                    } while (t < 0 && (r = r.parentElement));
                    return r;
                  });
              var t = {
                prepend: function () {
                  var e = [].slice.call(arguments);
                  (e = o(e)), this.insertBefore(e, this.firstChild);
                },
                append: function () {
                  var e = [].slice.call(arguments);
                  (e = o(e)), this.appendChild(e);
                },
              };
              r(e.Document || e.HTMLDocument, t),
                r(e.DocumentFragment, t),
                r(e.Element, t);
              var n = {
                before: function () {
                  var e = [].slice.call(arguments),
                    t = this.parentNode;
                  if (t) {
                    for (var n = this.previousSibling; -1 !== e.indexOf(n); )
                      n = n.previousSibling;
                    var r = o(e);
                    t.insertBefore(r, n ? n.nextSibling : t.firstChild);
                  }
                },
                after: function () {
                  var e = [].slice.call(arguments),
                    t = this.parentNode;
                  if (t) {
                    for (var n = this.nextSibling; -1 !== e.indexOf(n); )
                      n = n.nextSibling;
                    var r = o(e);
                    t.insertBefore(r, n);
                  }
                },
                replaceWith: function () {
                  var e = [].slice.call(arguments),
                    t = this.parentNode;
                  if (t) {
                    for (var n = this.nextSibling; -1 !== e.indexOf(n); )
                      n = n.nextSibling;
                    var r = o(e);
                    this.parentNode === t
                      ? t.replaceChild(r, this)
                      : t.insertBefore(r, n);
                  }
                },
                remove: function () {
                  this.parentNode && this.parentNode.removeChild(this);
                },
              };
              r(e.DocumentType, n), r(e.Element, n), r(e.CharacterData, n);
            }
            function r(e, t) {
              e &&
                Object.keys(t).forEach(function (n) {
                  if (!(n in e) && !(n in e.prototype))
                    try {
                      Object.defineProperty(
                        e.prototype,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      );
                    } catch (r) {
                      e[n] = t[n];
                    }
                });
            }
            function o(e) {
              var t = null;
              return (
                1 ===
                (e = e.map(function (e) {
                  return e instanceof Node ? e : document.createTextNode(e);
                })).length
                  ? (t = e[0])
                  : ((t = document.createDocumentFragment()),
                    e.forEach(function (e) {
                      t.appendChild(e);
                    })),
                t
              );
            }
          })(self);
        },
        5655: function (e, t) {
          var n, r;
          (r = this),
            void 0 ===
              (n = function () {
                return (r.returnExportsGlobal = (function () {
                  "use strict";
                  function e() {
                    var e, t;
                    (this.q = []),
                      (this.add = function (e) {
                        this.q.push(e);
                      }),
                      (this.call = function () {
                        for (e = 0, t = this.q.length; t > e; e++)
                          this.q[e].call();
                      });
                  }
                  function t(t, r) {
                    if (t.resizedAttached) {
                      if (t.resizedAttached)
                        return void t.resizedAttached.add(r);
                    } else
                      (t.resizedAttached = new e()), t.resizedAttached.add(r);
                    (t.resizeSensor = document.createElement("div")),
                      (t.resizeSensor.className = "resize-sensor");
                    var o =
                        "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",
                      i =
                        "position: absolute; left: 0; top: 0; transition: 0s;";
                    (t.resizeSensor.style.cssText = o),
                      (t.resizeSensor.innerHTML =
                        '<div class="resize-sensor-expand" style="' +
                        o +
                        '"><div style="' +
                        i +
                        '"></div></div><div class="resize-sensor-shrink" style="' +
                        o +
                        '"><div style="' +
                        i +
                        ' width: 200%; height: 200%"></div></div>'),
                      t.appendChild(t.resizeSensor),
                      "static" ==
                        (function (e, t) {
                          return e.currentStyle
                            ? e.currentStyle[t]
                            : window.getComputedStyle
                            ? window
                                .getComputedStyle(e, null)
                                .getPropertyValue(t)
                            : e.style[t];
                        })(t, "position") && (t.style.position = "relative");
                    var A = t.resizeSensor.childNodes[0],
                      a = A.childNodes[0],
                      s = t.resizeSensor.childNodes[1],
                      l = function () {
                        (a.style.width = "100000px"),
                          (a.style.height = "100000px"),
                          (A.scrollLeft = 1e5),
                          (A.scrollTop = 1e5),
                          (s.scrollLeft = 1e5),
                          (s.scrollTop = 1e5);
                      };
                    l();
                    var c = !1;
                    n(function e() {
                      t.resizedAttached &&
                        (c && (t.resizedAttached.call(), (c = !1)), n(e));
                    });
                    var u,
                      f,
                      p,
                      d,
                      g = function () {
                        ((p = t.offsetWidth) != u ||
                          (d = t.offsetHeight) != f) &&
                          ((c = !0), (u = p), (f = d)),
                          l();
                      },
                      h = function (e, t, n) {
                        e.attachEvent
                          ? e.attachEvent("on" + t, n)
                          : e.addEventListener(t, n);
                      };
                    h(A, "scroll", g), h(s, "scroll", g);
                  }
                  var n =
                      window.requestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      function (e) {
                        return window.setTimeout(e, 20);
                      },
                    r = function (e, n) {
                      var r = Object.prototype.toString.call(e),
                        o = (this._isCollectionTyped =
                          "[object Array]" === r ||
                          "[object NodeList]" === r ||
                          "[object HTMLCollection]" === r ||
                          ("undefined" != typeof jQuery &&
                            e instanceof window.jQuery) ||
                          ("undefined" != typeof Elements &&
                            e instanceof window.Elements));
                      if (((this._element = e), o))
                        for (var i = 0, A = e.length; A > i; i++) t(e[i], n);
                      else t(e, n);
                    };
                  return (
                    (r.prototype.detach = function () {
                      var e = this._isCollectionTyped,
                        t = this._element;
                      if (e)
                        for (var n = 0, o = t.length; o > n; n++)
                          r.detach(t[n]);
                      else r.detach(t);
                    }),
                    (r.detach = function (e) {
                      e.resizeSensor &&
                        (e.removeChild(e.resizeSensor),
                        delete e.resizeSensor,
                        delete e.resizedAttached);
                    }),
                    r
                  );
                })());
              }.apply(t, [])) || (e.exports = n);
        },
        741: function (e, t, n) {
          var r, o, i;
          function A(e) {
            return (A =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          (i = function () {
            var e = "1.13.1",
              t =
                ("object" ==
                  ("undefined" == typeof self ? "undefined" : A(self)) &&
                  self.self === self &&
                  self) ||
                ("object" == (void 0 === n.g ? "undefined" : A(n.g)) &&
                  n.g.global === n.g &&
                  n.g) ||
                Function("return this")() ||
                {},
              r = Array.prototype,
              o = Object.prototype,
              i = "undefined" != typeof Symbol ? Symbol.prototype : null,
              a = r.push,
              s = r.slice,
              l = o.toString,
              c = o.hasOwnProperty,
              u = "undefined" != typeof ArrayBuffer,
              f = "undefined" != typeof DataView,
              p = Array.isArray,
              d = Object.keys,
              g = Object.create,
              h = u && ArrayBuffer.isView,
              v = isNaN,
              m = isFinite,
              C = !{ toString: null }.propertyIsEnumerable("toString"),
              y = [
                "valueOf",
                "isPrototypeOf",
                "toString",
                "propertyIsEnumerable",
                "hasOwnProperty",
                "toLocaleString",
              ],
              b = Math.pow(2, 53) - 1;
            function w(e, t) {
              return (
                (t = null == t ? e.length - 1 : +t),
                function () {
                  for (
                    var n = Math.max(arguments.length - t, 0),
                      r = Array(n),
                      o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o + t];
                  switch (t) {
                    case 0:
                      return e.call(this, r);
                    case 1:
                      return e.call(this, arguments[0], r);
                    case 2:
                      return e.call(this, arguments[0], arguments[1], r);
                  }
                  var i = Array(t + 1);
                  for (o = 0; o < t; o++) i[o] = arguments[o];
                  return (i[t] = r), e.apply(this, i);
                }
              );
            }
            function E(e) {
              var t = A(e);
              return "function" === t || ("object" === t && !!e);
            }
            function B(e) {
              return void 0 === e;
            }
            function x(e) {
              return !0 === e || !1 === e || "[object Boolean]" === l.call(e);
            }
            function k(e) {
              var t = "[object " + e + "]";
              return function (e) {
                return l.call(e) === t;
              };
            }
            var I = k("String"),
              S = k("Number"),
              T = k("Date"),
              L = k("RegExp"),
              R = k("Error"),
              Q = k("Symbol"),
              M = k("ArrayBuffer"),
              O = k("Function"),
              D = t.document && t.document.childNodes;
            "object" !=
              ("undefined" == typeof Int8Array ? "undefined" : A(Int8Array)) &&
              "function" != typeof D &&
              (O = function (e) {
                return "function" == typeof e || !1;
              });
            var F = O,
              P = k("Object"),
              U = f && P(new DataView(new ArrayBuffer(8))),
              N = "undefined" != typeof Map && P(new Map()),
              W = k("DataView"),
              j = U
                ? function (e) {
                    return null != e && F(e.getInt8) && M(e.buffer);
                  }
                : W,
              Y = p || k("Array");
            function G(e, t) {
              return null != e && c.call(e, t);
            }
            var z = k("Arguments");
            !(function () {
              z(arguments) ||
                (z = function (e) {
                  return G(e, "callee");
                });
            })();
            var V = z;
            function _(e) {
              return S(e) && v(e);
            }
            function H(e) {
              return function () {
                return e;
              };
            }
            function J(e) {
              return function (t) {
                var n = e(t);
                return "number" == typeof n && n >= 0 && n <= b;
              };
            }
            function Z(e) {
              return function (t) {
                return null == t ? void 0 : t[e];
              };
            }
            var K = Z("byteLength"),
              X = J(K),
              q =
                /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,
              $ = u
                ? function (e) {
                    return h ? h(e) && !j(e) : X(e) && q.test(l.call(e));
                  }
                : H(!1),
              ee = Z("length");
            function te(e, t) {
              t = (function (e) {
                for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
                return {
                  contains: function (e) {
                    return t[e];
                  },
                  push: function (n) {
                    return (t[n] = !0), e.push(n);
                  },
                };
              })(t);
              var n = y.length,
                r = e.constructor,
                i = (F(r) && r.prototype) || o,
                A = "constructor";
              for (G(e, A) && !t.contains(A) && t.push(A); n--; )
                (A = y[n]) in e && e[A] !== i[A] && !t.contains(A) && t.push(A);
            }
            function ne(e) {
              if (!E(e)) return [];
              if (d) return d(e);
              var t = [];
              for (var n in e) G(e, n) && t.push(n);
              return C && te(e, t), t;
            }
            function re(e, t) {
              var n = ne(t),
                r = n.length;
              if (null == e) return !r;
              for (var o = Object(e), i = 0; i < r; i++) {
                var A = n[i];
                if (t[A] !== o[A] || !(A in o)) return !1;
              }
              return !0;
            }
            function oe(e) {
              return e instanceof oe
                ? e
                : this instanceof oe
                ? void (this._wrapped = e)
                : new oe(e);
            }
            function ie(e) {
              return new Uint8Array(e.buffer || e, e.byteOffset || 0, K(e));
            }
            (oe.VERSION = e),
              (oe.prototype.value = function () {
                return this._wrapped;
              }),
              (oe.prototype.valueOf = oe.prototype.toJSON = oe.prototype.value),
              (oe.prototype.toString = function () {
                return String(this._wrapped);
              });
            var Ae = "[object DataView]";
            function ae(e, t, n, r) {
              if (e === t) return 0 !== e || 1 / e == 1 / t;
              if (null == e || null == t) return !1;
              if (e != e) return t != t;
              var o = A(e);
              return (
                ("function" === o || "object" === o || "object" == A(t)) &&
                (function e(t, n, r, o) {
                  t instanceof oe && (t = t._wrapped),
                    n instanceof oe && (n = n._wrapped);
                  var a = l.call(t);
                  if (a !== l.call(n)) return !1;
                  if (U && "[object Object]" == a && j(t)) {
                    if (!j(n)) return !1;
                    a = Ae;
                  }
                  switch (a) {
                    case "[object RegExp]":
                    case "[object String]":
                      return "" + t == "" + n;
                    case "[object Number]":
                      return +t != +t
                        ? +n != +n
                        : 0 == +t
                        ? 1 / +t == 1 / n
                        : +t == +n;
                    case "[object Date]":
                    case "[object Boolean]":
                      return +t == +n;
                    case "[object Symbol]":
                      return i.valueOf.call(t) === i.valueOf.call(n);
                    case "[object ArrayBuffer]":
                    case Ae:
                      return e(ie(t), ie(n), r, o);
                  }
                  var s = "[object Array]" === a;
                  if (!s && $(t)) {
                    if (K(t) !== K(n)) return !1;
                    if (t.buffer === n.buffer && t.byteOffset === n.byteOffset)
                      return !0;
                    s = !0;
                  }
                  if (!s) {
                    if ("object" != A(t) || "object" != A(n)) return !1;
                    var c = t.constructor,
                      u = n.constructor;
                    if (
                      c !== u &&
                      !(F(c) && c instanceof c && F(u) && u instanceof u) &&
                      "constructor" in t &&
                      "constructor" in n
                    )
                      return !1;
                  }
                  o = o || [];
                  for (var f = (r = r || []).length; f--; )
                    if (r[f] === t) return o[f] === n;
                  if ((r.push(t), o.push(n), s)) {
                    if ((f = t.length) !== n.length) return !1;
                    for (; f--; ) if (!ae(t[f], n[f], r, o)) return !1;
                  } else {
                    var p,
                      d = ne(t);
                    if (((f = d.length), ne(n).length !== f)) return !1;
                    for (; f--; )
                      if (!G(n, (p = d[f])) || !ae(t[p], n[p], r, o)) return !1;
                  }
                  return r.pop(), o.pop(), !0;
                })(e, t, n, r)
              );
            }
            function se(e) {
              if (!E(e)) return [];
              var t = [];
              for (var n in e) t.push(n);
              return C && te(e, t), t;
            }
            function le(e) {
              var t = ee(e);
              return function (n) {
                if (null == n) return !1;
                var r = se(n);
                if (ee(r)) return !1;
                for (var o = 0; o < t; o++) if (!F(n[e[o]])) return !1;
                return e !== de || !F(n[ce]);
              };
            }
            var ce = "forEach",
              ue = ["clear", "delete"],
              fe = ["get", "has", "set"],
              pe = ue.concat(ce, fe),
              de = ue.concat(fe),
              ge = ["add"].concat(ue, ce, "has"),
              he = N ? le(pe) : k("Map"),
              ve = N ? le(de) : k("WeakMap"),
              me = N ? le(ge) : k("Set"),
              Ce = k("WeakSet");
            function ye(e) {
              for (var t = ne(e), n = t.length, r = Array(n), o = 0; o < n; o++)
                r[o] = e[t[o]];
              return r;
            }
            function be(e) {
              for (var t = {}, n = ne(e), r = 0, o = n.length; r < o; r++)
                t[e[n[r]]] = n[r];
              return t;
            }
            function we(e) {
              var t = [];
              for (var n in e) F(e[n]) && t.push(n);
              return t.sort();
            }
            function Ee(e, t) {
              return function (n) {
                var r = arguments.length;
                if ((t && (n = Object(n)), r < 2 || null == n)) return n;
                for (var o = 1; o < r; o++)
                  for (
                    var i = arguments[o], A = e(i), a = A.length, s = 0;
                    s < a;
                    s++
                  ) {
                    var l = A[s];
                    (t && void 0 !== n[l]) || (n[l] = i[l]);
                  }
                return n;
              };
            }
            var Be = Ee(se),
              xe = Ee(ne),
              ke = Ee(se, !0);
            function Ie(e) {
              if (!E(e)) return {};
              if (g) return g(e);
              var t = function () {};
              t.prototype = e;
              var n = new t();
              return (t.prototype = null), n;
            }
            function Se(e) {
              return E(e) ? (Y(e) ? e.slice() : Be({}, e)) : e;
            }
            function Te(e) {
              return Y(e) ? e : [e];
            }
            function Le(e) {
              return oe.toPath(e);
            }
            function Re(e, t) {
              for (var n = t.length, r = 0; r < n; r++) {
                if (null == e) return;
                e = e[t[r]];
              }
              return n ? e : void 0;
            }
            function Qe(e, t, n) {
              var r = Re(e, Le(t));
              return B(r) ? n : r;
            }
            function Me(e) {
              return e;
            }
            function Oe(e) {
              return (
                (e = xe({}, e)),
                function (t) {
                  return re(t, e);
                }
              );
            }
            function De(e) {
              return (
                (e = Le(e)),
                function (t) {
                  return Re(t, e);
                }
              );
            }
            function Fe(e, t, n) {
              if (void 0 === t) return e;
              switch (null == n ? 3 : n) {
                case 1:
                  return function (n) {
                    return e.call(t, n);
                  };
                case 3:
                  return function (n, r, o) {
                    return e.call(t, n, r, o);
                  };
                case 4:
                  return function (n, r, o, i) {
                    return e.call(t, n, r, o, i);
                  };
              }
              return function () {
                return e.apply(t, arguments);
              };
            }
            function Pe(e, t, n) {
              return null == e
                ? Me
                : F(e)
                ? Fe(e, t, n)
                : E(e) && !Y(e)
                ? Oe(e)
                : De(e);
            }
            function Ue(e, t) {
              return Pe(e, t, 1 / 0);
            }
            function Ne(e, t, n) {
              return oe.iteratee !== Ue ? oe.iteratee(e, t) : Pe(e, t, n);
            }
            function We() {}
            function je(e, t) {
              return (
                null == t && ((t = e), (e = 0)),
                e + Math.floor(Math.random() * (t - e + 1))
              );
            }
            (oe.toPath = Te), (oe.iteratee = Ue);
            var Ye =
              Date.now ||
              function () {
                return new Date().getTime();
              };
            function Ge(e) {
              var t = function (t) {
                  return e[t];
                },
                n = "(?:" + ne(e).join("|") + ")",
                r = RegExp(n),
                o = RegExp(n, "g");
              return function (e) {
                return (
                  (e = null == e ? "" : "" + e), r.test(e) ? e.replace(o, t) : e
                );
              };
            }
            var ze = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
              },
              Ve = Ge(ze),
              _e = Ge(be(ze)),
              He = (oe.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g,
              }),
              Je = /(.)^/,
              Ze = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              Ke = /\\|'|\r|\n|\u2028|\u2029/g;
            function Xe(e) {
              return "\\" + Ze[e];
            }
            var qe = /^\s*(\w|\$)+\s*$/,
              $e = 0;
            function et(e, t, n, r, o) {
              if (!(r instanceof t)) return e.apply(n, o);
              var i = Ie(e.prototype),
                A = e.apply(i, o);
              return E(A) ? A : i;
            }
            var tt = w(function (e, t) {
              var n = tt.placeholder;
              return function r() {
                for (var o = 0, i = t.length, A = Array(i), a = 0; a < i; a++)
                  A[a] = t[a] === n ? arguments[o++] : t[a];
                for (; o < arguments.length; ) A.push(arguments[o++]);
                return et(e, r, this, this, A);
              };
            });
            tt.placeholder = oe;
            var nt = w(function (e, t, n) {
                if (!F(e))
                  throw new TypeError("Bind must be called on a function");
                var r = w(function (o) {
                  return et(e, r, t, this, n.concat(o));
                });
                return r;
              }),
              rt = J(ee);
            function ot(e, t, n, r) {
              if (((r = r || []), t || 0 === t)) {
                if (t <= 0) return r.concat(e);
              } else t = 1 / 0;
              for (var o = r.length, i = 0, A = ee(e); i < A; i++) {
                var a = e[i];
                if (rt(a) && (Y(a) || V(a)))
                  if (t > 1) ot(a, t - 1, n, r), (o = r.length);
                  else for (var s = 0, l = a.length; s < l; ) r[o++] = a[s++];
                else n || (r[o++] = a);
              }
              return r;
            }
            var it = w(function (e, t) {
                var n = (t = ot(t, !1, !1)).length;
                if (n < 1)
                  throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var r = t[n];
                  e[r] = nt(e[r], e);
                }
                return e;
              }),
              At = w(function (e, t, n) {
                return setTimeout(function () {
                  return e.apply(null, n);
                }, t);
              }),
              at = tt(At, oe, 1);
            function st(e) {
              return function () {
                return !e.apply(this, arguments);
              };
            }
            function lt(e, t) {
              var n;
              return function () {
                return (
                  --e > 0 && (n = t.apply(this, arguments)),
                  e <= 1 && (t = null),
                  n
                );
              };
            }
            var ct = tt(lt, 2);
            function ut(e, t, n) {
              t = Ne(t, n);
              for (var r, o = ne(e), i = 0, A = o.length; i < A; i++)
                if (t(e[(r = o[i])], r, e)) return r;
            }
            function ft(e) {
              return function (t, n, r) {
                n = Ne(n, r);
                for (
                  var o = ee(t), i = e > 0 ? 0 : o - 1;
                  i >= 0 && i < o;
                  i += e
                )
                  if (n(t[i], i, t)) return i;
                return -1;
              };
            }
            var pt = ft(1),
              dt = ft(-1);
            function gt(e, t, n, r) {
              for (var o = (n = Ne(n, r, 1))(t), i = 0, A = ee(e); i < A; ) {
                var a = Math.floor((i + A) / 2);
                n(e[a]) < o ? (i = a + 1) : (A = a);
              }
              return i;
            }
            function ht(e, t, n) {
              return function (r, o, i) {
                var A = 0,
                  a = ee(r);
                if ("number" == typeof i)
                  e > 0
                    ? (A = i >= 0 ? i : Math.max(i + a, A))
                    : (a = i >= 0 ? Math.min(i + 1, a) : i + a + 1);
                else if (n && i && a) return r[(i = n(r, o))] === o ? i : -1;
                if (o != o)
                  return (i = t(s.call(r, A, a), _)) >= 0 ? i + A : -1;
                for (i = e > 0 ? A : a - 1; i >= 0 && i < a; i += e)
                  if (r[i] === o) return i;
                return -1;
              };
            }
            var vt = ht(1, pt, gt),
              mt = ht(-1, dt);
            function Ct(e, t, n) {
              var r = (rt(e) ? pt : ut)(e, t, n);
              if (void 0 !== r && -1 !== r) return e[r];
            }
            function yt(e, t, n) {
              var r, o;
              if (((t = Fe(t, n)), rt(e)))
                for (r = 0, o = e.length; r < o; r++) t(e[r], r, e);
              else {
                var i = ne(e);
                for (r = 0, o = i.length; r < o; r++) t(e[i[r]], i[r], e);
              }
              return e;
            }
            function bt(e, t, n) {
              t = Ne(t, n);
              for (
                var r = !rt(e) && ne(e),
                  o = (r || e).length,
                  i = Array(o),
                  A = 0;
                A < o;
                A++
              ) {
                var a = r ? r[A] : A;
                i[A] = t(e[a], a, e);
              }
              return i;
            }
            function wt(e) {
              var t = function (t, n, r, o) {
                var i = !rt(t) && ne(t),
                  A = (i || t).length,
                  a = e > 0 ? 0 : A - 1;
                for (
                  o || ((r = t[i ? i[a] : a]), (a += e));
                  a >= 0 && a < A;
                  a += e
                ) {
                  var s = i ? i[a] : a;
                  r = n(r, t[s], s, t);
                }
                return r;
              };
              return function (e, n, r, o) {
                var i = arguments.length >= 3;
                return t(e, Fe(n, o, 4), r, i);
              };
            }
            var Et = wt(1),
              Bt = wt(-1);
            function xt(e, t, n) {
              var r = [];
              return (
                (t = Ne(t, n)),
                yt(e, function (e, n, o) {
                  t(e, n, o) && r.push(e);
                }),
                r
              );
            }
            function kt(e, t, n) {
              t = Ne(t, n);
              for (
                var r = !rt(e) && ne(e), o = (r || e).length, i = 0;
                i < o;
                i++
              ) {
                var A = r ? r[i] : i;
                if (!t(e[A], A, e)) return !1;
              }
              return !0;
            }
            function It(e, t, n) {
              t = Ne(t, n);
              for (
                var r = !rt(e) && ne(e), o = (r || e).length, i = 0;
                i < o;
                i++
              ) {
                var A = r ? r[i] : i;
                if (t(e[A], A, e)) return !0;
              }
              return !1;
            }
            function St(e, t, n, r) {
              return (
                rt(e) || (e = ye(e)),
                ("number" != typeof n || r) && (n = 0),
                vt(e, t, n) >= 0
              );
            }
            var Tt = w(function (e, t, n) {
              var r, o;
              return (
                F(t)
                  ? (o = t)
                  : ((t = Le(t)), (r = t.slice(0, -1)), (t = t[t.length - 1])),
                bt(e, function (e) {
                  var i = o;
                  if (!i) {
                    if ((r && r.length && (e = Re(e, r)), null == e)) return;
                    i = e[t];
                  }
                  return null == i ? i : i.apply(e, n);
                })
              );
            });
            function Lt(e, t) {
              return bt(e, De(t));
            }
            function Rt(e, t, n) {
              var r,
                o,
                i = -1 / 0,
                a = -1 / 0;
              if (
                null == t ||
                ("number" == typeof t && "object" != A(e[0]) && null != e)
              )
                for (var s = 0, l = (e = rt(e) ? e : ye(e)).length; s < l; s++)
                  null != (r = e[s]) && r > i && (i = r);
              else
                (t = Ne(t, n)),
                  yt(e, function (e, n, r) {
                    ((o = t(e, n, r)) > a || (o === -1 / 0 && i === -1 / 0)) &&
                      ((i = e), (a = o));
                  });
              return i;
            }
            function Qt(e, t, n) {
              if (null == t || n)
                return rt(e) || (e = ye(e)), e[je(e.length - 1)];
              var r = rt(e) ? Se(e) : ye(e),
                o = ee(r);
              t = Math.max(Math.min(t, o), 0);
              for (var i = o - 1, A = 0; A < t; A++) {
                var a = je(A, i),
                  s = r[A];
                (r[A] = r[a]), (r[a] = s);
              }
              return r.slice(0, t);
            }
            function Mt(e, t) {
              return function (n, r, o) {
                var i = t ? [[], []] : {};
                return (
                  (r = Ne(r, o)),
                  yt(n, function (t, o) {
                    var A = r(t, o, n);
                    e(i, t, A);
                  }),
                  i
                );
              };
            }
            var Ot = Mt(function (e, t, n) {
                G(e, n) ? e[n].push(t) : (e[n] = [t]);
              }),
              Dt = Mt(function (e, t, n) {
                e[n] = t;
              }),
              Ft = Mt(function (e, t, n) {
                G(e, n) ? e[n]++ : (e[n] = 1);
              }),
              Pt = Mt(function (e, t, n) {
                e[n ? 0 : 1].push(t);
              }, !0),
              Ut =
                /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
            function Nt(e, t, n) {
              return t in n;
            }
            var Wt = w(function (e, t) {
                var n = {},
                  r = t[0];
                if (null == e) return n;
                F(r)
                  ? (t.length > 1 && (r = Fe(r, t[1])), (t = se(e)))
                  : ((r = Nt), (t = ot(t, !1, !1)), (e = Object(e)));
                for (var o = 0, i = t.length; o < i; o++) {
                  var A = t[o],
                    a = e[A];
                  r(a, A, e) && (n[A] = a);
                }
                return n;
              }),
              jt = w(function (e, t) {
                var n,
                  r = t[0];
                return (
                  F(r)
                    ? ((r = st(r)), t.length > 1 && (n = t[1]))
                    : ((t = bt(ot(t, !1, !1), String)),
                      (r = function (e, n) {
                        return !St(t, n);
                      })),
                  Wt(e, r, n)
                );
              });
            function Yt(e, t, n) {
              return s.call(
                e,
                0,
                Math.max(0, e.length - (null == t || n ? 1 : t))
              );
            }
            function Gt(e, t, n) {
              return null == e || e.length < 1
                ? null == t || n
                  ? void 0
                  : []
                : null == t || n
                ? e[0]
                : Yt(e, e.length - t);
            }
            function zt(e, t, n) {
              return s.call(e, null == t || n ? 1 : t);
            }
            var Vt = w(function (e, t) {
                return (
                  (t = ot(t, !0, !0)),
                  xt(e, function (e) {
                    return !St(t, e);
                  })
                );
              }),
              _t = w(function (e, t) {
                return Vt(e, t);
              });
            function Ht(e, t, n, r) {
              x(t) || ((r = n), (n = t), (t = !1)), null != n && (n = Ne(n, r));
              for (var o = [], i = [], A = 0, a = ee(e); A < a; A++) {
                var s = e[A],
                  l = n ? n(s, A, e) : s;
                t && !n
                  ? ((A && i === l) || o.push(s), (i = l))
                  : n
                  ? St(i, l) || (i.push(l), o.push(s))
                  : St(o, s) || o.push(s);
              }
              return o;
            }
            var Jt = w(function (e) {
              return Ht(ot(e, !0, !0));
            });
            function Zt(e) {
              for (
                var t = (e && Rt(e, ee).length) || 0, n = Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = Lt(e, r);
              return n;
            }
            var Kt = w(Zt);
            function Xt(e, t) {
              return e._chain ? oe(t).chain() : t;
            }
            function qt(e) {
              return (
                yt(we(e), function (t) {
                  var n = (oe[t] = e[t]);
                  oe.prototype[t] = function () {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), Xt(this, n.apply(oe, e));
                  };
                }),
                oe
              );
            }
            yt(
              ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = r[e];
                oe.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n &&
                      (t.apply(n, arguments),
                      ("shift" !== e && "splice" !== e) ||
                        0 !== n.length ||
                        delete n[0]),
                    Xt(this, n)
                  );
                };
              }
            ),
              yt(["concat", "join", "slice"], function (e) {
                var t = r[e];
                oe.prototype[e] = function () {
                  var e = this._wrapped;
                  return null != e && (e = t.apply(e, arguments)), Xt(this, e);
                };
              });
            var $t = qt({
              __proto__: null,
              VERSION: e,
              restArguments: w,
              isObject: E,
              isNull: function (e) {
                return null === e;
              },
              isUndefined: B,
              isBoolean: x,
              isElement: function (e) {
                return !(!e || 1 !== e.nodeType);
              },
              isString: I,
              isNumber: S,
              isDate: T,
              isRegExp: L,
              isError: R,
              isSymbol: Q,
              isArrayBuffer: M,
              isDataView: j,
              isArray: Y,
              isFunction: F,
              isArguments: V,
              isFinite: function (e) {
                return !Q(e) && m(e) && !isNaN(parseFloat(e));
              },
              isNaN: _,
              isTypedArray: $,
              isEmpty: function (e) {
                if (null == e) return !0;
                var t = ee(e);
                return "number" == typeof t && (Y(e) || I(e) || V(e))
                  ? 0 === t
                  : 0 === ee(ne(e));
              },
              isMatch: re,
              isEqual: function (e, t) {
                return ae(e, t);
              },
              isMap: he,
              isWeakMap: ve,
              isSet: me,
              isWeakSet: Ce,
              keys: ne,
              allKeys: se,
              values: ye,
              pairs: function (e) {
                for (
                  var t = ne(e), n = t.length, r = Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = [t[o], e[t[o]]];
                return r;
              },
              invert: be,
              functions: we,
              methods: we,
              extend: Be,
              extendOwn: xe,
              assign: xe,
              defaults: ke,
              create: function (e, t) {
                var n = Ie(e);
                return t && xe(n, t), n;
              },
              clone: Se,
              tap: function (e, t) {
                return t(e), e;
              },
              get: Qe,
              has: function (e, t) {
                for (var n = (t = Le(t)).length, r = 0; r < n; r++) {
                  var o = t[r];
                  if (!G(e, o)) return !1;
                  e = e[o];
                }
                return !!n;
              },
              mapObject: function (e, t, n) {
                t = Ne(t, n);
                for (var r = ne(e), o = r.length, i = {}, A = 0; A < o; A++) {
                  var a = r[A];
                  i[a] = t(e[a], a, e);
                }
                return i;
              },
              identity: Me,
              constant: H,
              noop: We,
              toPath: Te,
              property: De,
              propertyOf: function (e) {
                return null == e
                  ? We
                  : function (t) {
                      return Qe(e, t);
                    };
              },
              matcher: Oe,
              matches: Oe,
              times: function (e, t, n) {
                var r = Array(Math.max(0, e));
                t = Fe(t, n, 1);
                for (var o = 0; o < e; o++) r[o] = t(o);
                return r;
              },
              random: je,
              now: Ye,
              escape: Ve,
              unescape: _e,
              templateSettings: He,
              template: function (e, t, n) {
                !t && n && (t = n), (t = ke({}, t, oe.templateSettings));
                var r = RegExp(
                    [
                      (t.escape || Je).source,
                      (t.interpolate || Je).source,
                      (t.evaluate || Je).source,
                    ].join("|") + "|$",
                    "g"
                  ),
                  o = 0,
                  i = "__p+='";
                e.replace(r, function (t, n, r, A, a) {
                  return (
                    (i += e.slice(o, a).replace(Ke, Xe)),
                    (o = a + t.length),
                    n
                      ? (i +=
                          "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                      : r
                      ? (i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                      : A && (i += "';\n" + A + "\n__p+='"),
                    t
                  );
                }),
                  (i += "';\n");
                var A,
                  a = t.variable;
                if (a) {
                  if (!qe.test(a))
                    throw new Error("variable is not a bare identifier: " + a);
                } else (i = "with(obj||{}){\n" + i + "}\n"), (a = "obj");
                i =
                  "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                  i +
                  "return __p;\n";
                try {
                  A = new Function(a, "_", i);
                } catch (e) {
                  throw ((e.source = i), e);
                }
                var s = function (e) {
                  return A.call(this, e, oe);
                };
                return (s.source = "function(" + a + "){\n" + i + "}"), s;
              },
              result: function (e, t, n) {
                var r = (t = Le(t)).length;
                if (!r) return F(n) ? n.call(e) : n;
                for (var o = 0; o < r; o++) {
                  var i = null == e ? void 0 : e[t[o]];
                  void 0 === i && ((i = n), (o = r)),
                    (e = F(i) ? i.call(e) : i);
                }
                return e;
              },
              uniqueId: function (e) {
                var t = ++$e + "";
                return e ? e + t : t;
              },
              chain: function (e) {
                var t = oe(e);
                return (t._chain = !0), t;
              },
              iteratee: Ue,
              partial: tt,
              bind: nt,
              bindAll: it,
              memoize: function (e, t) {
                var n = function n(r) {
                  var o = n.cache,
                    i = "" + (t ? t.apply(this, arguments) : r);
                  return G(o, i) || (o[i] = e.apply(this, arguments)), o[i];
                };
                return (n.cache = {}), n;
              },
              delay: At,
              defer: at,
              throttle: function (e, t, n) {
                var r,
                  o,
                  i,
                  A,
                  a = 0;
                n || (n = {});
                var s = function () {
                    (a = !1 === n.leading ? 0 : Ye()),
                      (r = null),
                      (A = e.apply(o, i)),
                      r || (o = i = null);
                  },
                  l = function () {
                    var l = Ye();
                    a || !1 !== n.leading || (a = l);
                    var c = t - (l - a);
                    return (
                      (o = this),
                      (i = arguments),
                      c <= 0 || c > t
                        ? (r && (clearTimeout(r), (r = null)),
                          (a = l),
                          (A = e.apply(o, i)),
                          r || (o = i = null))
                        : r || !1 === n.trailing || (r = setTimeout(s, c)),
                      A
                    );
                  };
                return (
                  (l.cancel = function () {
                    clearTimeout(r), (a = 0), (r = o = i = null);
                  }),
                  l
                );
              },
              debounce: function (e, t, n) {
                var r,
                  o,
                  i,
                  A,
                  a,
                  s = function s() {
                    var l = Ye() - o;
                    t > l
                      ? (r = setTimeout(s, t - l))
                      : ((r = null),
                        n || (A = e.apply(a, i)),
                        r || (i = a = null));
                  },
                  l = w(function (l) {
                    return (
                      (a = this),
                      (i = l),
                      (o = Ye()),
                      r || ((r = setTimeout(s, t)), n && (A = e.apply(a, i))),
                      A
                    );
                  });
                return (
                  (l.cancel = function () {
                    clearTimeout(r), (r = i = a = null);
                  }),
                  l
                );
              },
              wrap: function (e, t) {
                return tt(t, e);
              },
              negate: st,
              compose: function () {
                var e = arguments,
                  t = e.length - 1;
                return function () {
                  for (var n = t, r = e[t].apply(this, arguments); n--; )
                    r = e[n].call(this, r);
                  return r;
                };
              },
              after: function (e, t) {
                return function () {
                  if (--e < 1) return t.apply(this, arguments);
                };
              },
              before: lt,
              once: ct,
              findKey: ut,
              findIndex: pt,
              findLastIndex: dt,
              sortedIndex: gt,
              indexOf: vt,
              lastIndexOf: mt,
              find: Ct,
              detect: Ct,
              findWhere: function (e, t) {
                return Ct(e, Oe(t));
              },
              each: yt,
              forEach: yt,
              map: bt,
              collect: bt,
              reduce: Et,
              foldl: Et,
              inject: Et,
              reduceRight: Bt,
              foldr: Bt,
              filter: xt,
              select: xt,
              reject: function (e, t, n) {
                return xt(e, st(Ne(t)), n);
              },
              every: kt,
              all: kt,
              some: It,
              any: It,
              contains: St,
              includes: St,
              include: St,
              invoke: Tt,
              pluck: Lt,
              where: function (e, t) {
                return xt(e, Oe(t));
              },
              max: Rt,
              min: function (e, t, n) {
                var r,
                  o,
                  i = 1 / 0,
                  a = 1 / 0;
                if (
                  null == t ||
                  ("number" == typeof t && "object" != A(e[0]) && null != e)
                )
                  for (
                    var s = 0, l = (e = rt(e) ? e : ye(e)).length;
                    s < l;
                    s++
                  )
                    null != (r = e[s]) && r < i && (i = r);
                else
                  (t = Ne(t, n)),
                    yt(e, function (e, n, r) {
                      ((o = t(e, n, r)) < a || (o === 1 / 0 && i === 1 / 0)) &&
                        ((i = e), (a = o));
                    });
                return i;
              },
              shuffle: function (e) {
                return Qt(e, 1 / 0);
              },
              sample: Qt,
              sortBy: function (e, t, n) {
                var r = 0;
                return (
                  (t = Ne(t, n)),
                  Lt(
                    bt(e, function (e, n, o) {
                      return { value: e, index: r++, criteria: t(e, n, o) };
                    }).sort(function (e, t) {
                      var n = e.criteria,
                        r = t.criteria;
                      if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (n < r || void 0 === r) return -1;
                      }
                      return e.index - t.index;
                    }),
                    "value"
                  )
                );
              },
              groupBy: Ot,
              indexBy: Dt,
              countBy: Ft,
              partition: Pt,
              toArray: function (e) {
                return e
                  ? Y(e)
                    ? s.call(e)
                    : I(e)
                    ? e.match(Ut)
                    : rt(e)
                    ? bt(e, Me)
                    : ye(e)
                  : [];
              },
              size: function (e) {
                return null == e ? 0 : rt(e) ? e.length : ne(e).length;
              },
              pick: Wt,
              omit: jt,
              first: Gt,
              head: Gt,
              take: Gt,
              initial: Yt,
              last: function (e, t, n) {
                return null == e || e.length < 1
                  ? null == t || n
                    ? void 0
                    : []
                  : null == t || n
                  ? e[e.length - 1]
                  : zt(e, Math.max(0, e.length - t));
              },
              rest: zt,
              tail: zt,
              drop: zt,
              compact: function (e) {
                return xt(e, Boolean);
              },
              flatten: function (e, t) {
                return ot(e, t, !1);
              },
              without: _t,
              uniq: Ht,
              unique: Ht,
              union: Jt,
              intersection: function (e) {
                for (
                  var t = [], n = arguments.length, r = 0, o = ee(e);
                  r < o;
                  r++
                ) {
                  var i = e[r];
                  if (!St(t, i)) {
                    var A;
                    for (A = 1; A < n && St(arguments[A], i); A++);
                    A === n && t.push(i);
                  }
                }
                return t;
              },
              difference: Vt,
              unzip: Zt,
              transpose: Zt,
              zip: Kt,
              object: function (e, t) {
                for (var n = {}, r = 0, o = ee(e); r < o; r++)
                  t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                return n;
              },
              range: function (e, t, n) {
                null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                for (
                  var r = Math.max(Math.ceil((t - e) / n), 0),
                    o = Array(r),
                    i = 0;
                  i < r;
                  i++, e += n
                )
                  o[i] = e;
                return o;
              },
              chunk: function (e, t) {
                if (null == t || t < 1) return [];
                for (var n = [], r = 0, o = e.length; r < o; )
                  n.push(s.call(e, r, (r += t)));
                return n;
              },
              mixin: qt,
              default: oe,
            });
            return ($t._ = $t), $t;
          }),
            "object" == A(t)
              ? (e.exports = i())
              : void 0 ===
                  (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) ||
                (e.exports = o);
        },
        3099: function (e) {
          e.exports = function (e) {
            if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
            return e;
          };
        },
        6077: function (e, t, n) {
          var r = n(111);
          e.exports = function (e) {
            if (!r(e) && null !== e)
              throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
          };
        },
        1223: function (e, t, n) {
          var r = n(5112),
            o = n(30),
            i = n(3070),
            A = r("unscopables"),
            a = Array.prototype;
          null == a[A] && i.f(a, A, { configurable: !0, value: o(null) }),
            (e.exports = function (e) {
              a[A][e] = !0;
            });
        },
        1530: function (e, t, n) {
          "use strict";
          var r = n(8710).charAt;
          e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
          };
        },
        5787: function (e) {
          e.exports = function (e, t, n) {
            if (!(e instanceof t))
              throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
          };
        },
        9670: function (e, t, n) {
          var r = n(111);
          e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
          };
        },
        4019: function (e) {
          e.exports =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        },
        260: function (e, t, n) {
          "use strict";
          var r,
            o,
            i,
            A = n(4019),
            a = n(9781),
            s = n(7854),
            l = n(111),
            c = n(6656),
            u = n(648),
            f = n(8880),
            p = n(1320),
            d = n(3070).f,
            g = n(9518),
            h = n(7674),
            v = n(5112),
            m = n(9711),
            C = s.Int8Array,
            y = C && C.prototype,
            b = s.Uint8ClampedArray,
            w = b && b.prototype,
            E = C && g(C),
            B = y && g(y),
            x = Object.prototype,
            k = x.isPrototypeOf,
            I = v("toStringTag"),
            S = m("TYPED_ARRAY_TAG"),
            T = m("TYPED_ARRAY_CONSTRUCTOR"),
            L = A && !!h && "Opera" !== u(s.opera),
            R = !1,
            Q = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8,
            },
            M = { BigInt64Array: 8, BigUint64Array: 8 },
            O = function (e) {
              if (!l(e)) return !1;
              var t = u(e);
              return c(Q, t) || c(M, t);
            };
          for (r in Q) (i = (o = s[r]) && o.prototype) ? f(i, T, o) : (L = !1);
          for (r in M) (i = (o = s[r]) && o.prototype) && f(i, T, o);
          if (
            (!L || "function" != typeof E || E === Function.prototype) &&
            ((E = function () {
              throw TypeError("Incorrect invocation");
            }),
            L)
          )
            for (r in Q) s[r] && h(s[r], E);
          if ((!L || !B || B === x) && ((B = E.prototype), L))
            for (r in Q) s[r] && h(s[r].prototype, B);
          if ((L && g(w) !== B && h(w, B), a && !c(B, I)))
            for (r in ((R = !0),
            d(B, I, {
              get: function () {
                return l(this) ? this[S] : void 0;
              },
            }),
            Q))
              s[r] && f(s[r], S, r);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: L,
            TYPED_ARRAY_CONSTRUCTOR: T,
            TYPED_ARRAY_TAG: R && S,
            aTypedArray: function (e) {
              if (O(e)) return e;
              throw TypeError("Target is not a typed array");
            },
            aTypedArrayConstructor: function (e) {
              if (h && !k.call(E, e))
                throw TypeError("Target is not a typed array constructor");
              return e;
            },
            exportTypedArrayMethod: function (e, t, n) {
              if (a) {
                if (n)
                  for (var r in Q) {
                    var o = s[r];
                    if (o && c(o.prototype, e))
                      try {
                        delete o.prototype[e];
                      } catch (e) {}
                  }
                (B[e] && !n) || p(B, e, n ? t : (L && y[e]) || t);
              }
            },
            exportTypedArrayStaticMethod: function (e, t, n) {
              var r, o;
              if (a) {
                if (h) {
                  if (n)
                    for (r in Q)
                      if ((o = s[r]) && c(o, e))
                        try {
                          delete o[e];
                        } catch (e) {}
                  if (E[e] && !n) return;
                  try {
                    return p(E, e, n ? t : (L && E[e]) || t);
                  } catch (e) {}
                }
                for (r in Q) !(o = s[r]) || (o[e] && !n) || p(o, e, t);
              }
            },
            isView: function (e) {
              if (!l(e)) return !1;
              var t = u(e);
              return "DataView" === t || c(Q, t) || c(M, t);
            },
            isTypedArray: O,
            TypedArray: E,
            TypedArrayPrototype: B,
          };
        },
        3331: function (e, t, n) {
          "use strict";
          var r = n(7854),
            o = n(9781),
            i = n(4019),
            A = n(8880),
            a = n(2248),
            s = n(7293),
            l = n(5787),
            c = n(9958),
            u = n(7466),
            f = n(7067),
            p = n(1179),
            d = n(9518),
            g = n(7674),
            h = n(8006).f,
            v = n(3070).f,
            m = n(1285),
            C = n(8003),
            y = n(9909),
            b = y.get,
            w = y.set,
            E = "ArrayBuffer",
            B = "DataView",
            x = "Wrong index",
            k = r.ArrayBuffer,
            I = k,
            S = r.DataView,
            T = S && S.prototype,
            L = Object.prototype,
            R = r.RangeError,
            Q = p.pack,
            M = p.unpack,
            O = function (e) {
              return [255 & e];
            },
            D = function (e) {
              return [255 & e, (e >> 8) & 255];
            },
            F = function (e) {
              return [
                255 & e,
                (e >> 8) & 255,
                (e >> 16) & 255,
                (e >> 24) & 255,
              ];
            },
            P = function (e) {
              return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
            },
            U = function (e) {
              return Q(e, 23, 4);
            },
            N = function (e) {
              return Q(e, 52, 8);
            },
            W = function (e, t) {
              v(e.prototype, t, {
                get: function () {
                  return b(this)[t];
                },
              });
            },
            j = function (e, t, n, r) {
              var o = f(n),
                i = b(e);
              if (o + t > i.byteLength) throw R(x);
              var A = b(i.buffer).bytes,
                a = o + i.byteOffset,
                s = A.slice(a, a + t);
              return r ? s : s.reverse();
            },
            Y = function (e, t, n, r, o, i) {
              var A = f(n),
                a = b(e);
              if (A + t > a.byteLength) throw R(x);
              for (
                var s = b(a.buffer).bytes,
                  l = A + a.byteOffset,
                  c = r(+o),
                  u = 0;
                u < t;
                u++
              )
                s[l + u] = c[i ? u : t - u - 1];
            };
          if (i) {
            if (
              !s(function () {
                k(1);
              }) ||
              !s(function () {
                new k(-1);
              }) ||
              s(function () {
                return new k(), new k(1.5), new k(NaN), k.name != E;
              })
            ) {
              for (
                var G,
                  z = ((I = function (e) {
                    return l(this, I), new k(f(e));
                  }).prototype = k.prototype),
                  V = h(k),
                  _ = 0;
                V.length > _;

              )
                (G = V[_++]) in I || A(I, G, k[G]);
              z.constructor = I;
            }
            g && d(T) !== L && g(T, L);
            var H = new S(new I(2)),
              J = T.setInt8;
            H.setInt8(0, 2147483648),
              H.setInt8(1, 2147483649),
              (!H.getInt8(0) && H.getInt8(1)) ||
                a(
                  T,
                  {
                    setInt8: function (e, t) {
                      J.call(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                      J.call(this, e, (t << 24) >> 24);
                    },
                  },
                  { unsafe: !0 }
                );
          } else
            (I = function (e) {
              l(this, I, E);
              var t = f(e);
              w(this, { bytes: m.call(new Array(t), 0), byteLength: t }),
                o || (this.byteLength = t);
            }),
              (S = function (e, t, n) {
                l(this, S, B), l(e, I, B);
                var r = b(e).byteLength,
                  i = c(t);
                if (i < 0 || i > r) throw R("Wrong offset");
                if (i + (n = void 0 === n ? r - i : u(n)) > r)
                  throw R("Wrong length");
                w(this, { buffer: e, byteLength: n, byteOffset: i }),
                  o ||
                    ((this.buffer = e),
                    (this.byteLength = n),
                    (this.byteOffset = i));
              }),
              o &&
                (W(I, "byteLength"),
                W(S, "buffer"),
                W(S, "byteLength"),
                W(S, "byteOffset")),
              a(S.prototype, {
                getInt8: function (e) {
                  return (j(this, 1, e)[0] << 24) >> 24;
                },
                getUint8: function (e) {
                  return j(this, 1, e)[0];
                },
                getInt16: function (e) {
                  var t = j(
                    this,
                    2,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                  return (((t[1] << 8) | t[0]) << 16) >> 16;
                },
                getUint16: function (e) {
                  var t = j(
                    this,
                    2,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                  return (t[1] << 8) | t[0];
                },
                getInt32: function (e) {
                  return P(
                    j(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
                  );
                },
                getUint32: function (e) {
                  return (
                    P(
                      j(
                        this,
                        4,
                        e,
                        arguments.length > 1 ? arguments[1] : void 0
                      )
                    ) >>> 0
                  );
                },
                getFloat32: function (e) {
                  return M(
                    j(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                    23
                  );
                },
                getFloat64: function (e) {
                  return M(
                    j(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                    52
                  );
                },
                setInt8: function (e, t) {
                  Y(this, 1, e, O, t);
                },
                setUint8: function (e, t) {
                  Y(this, 1, e, O, t);
                },
                setInt16: function (e, t) {
                  Y(
                    this,
                    2,
                    e,
                    D,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setUint16: function (e, t) {
                  Y(
                    this,
                    2,
                    e,
                    D,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setInt32: function (e, t) {
                  Y(
                    this,
                    4,
                    e,
                    F,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setUint32: function (e, t) {
                  Y(
                    this,
                    4,
                    e,
                    F,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setFloat32: function (e, t) {
                  Y(
                    this,
                    4,
                    e,
                    U,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setFloat64: function (e, t) {
                  Y(
                    this,
                    8,
                    e,
                    N,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
              });
          C(I, E), C(S, B), (e.exports = { ArrayBuffer: I, DataView: S });
        },
        1048: function (e, t, n) {
          "use strict";
          var r = n(7908),
            o = n(1400),
            i = n(7466),
            A = Math.min;
          e.exports =
            [].copyWithin ||
            function (e, t) {
              var n = r(this),
                a = i(n.length),
                s = o(e, a),
                l = o(t, a),
                c = arguments.length > 2 ? arguments[2] : void 0,
                u = A((void 0 === c ? a : o(c, a)) - l, a - s),
                f = 1;
              for (
                l < s && s < l + u && ((f = -1), (l += u - 1), (s += u - 1));
                u-- > 0;

              )
                l in n ? (n[s] = n[l]) : delete n[s], (s += f), (l += f);
              return n;
            };
        },
        1285: function (e, t, n) {
          "use strict";
          var r = n(7908),
            o = n(1400),
            i = n(7466);
          e.exports = function (e) {
            for (
              var t = r(this),
                n = i(t.length),
                A = arguments.length,
                a = o(A > 1 ? arguments[1] : void 0, n),
                s = A > 2 ? arguments[2] : void 0,
                l = void 0 === s ? n : o(s, n);
              l > a;

            )
              t[a++] = e;
            return t;
          };
        },
        8533: function (e, t, n) {
          "use strict";
          var r = n(2092).forEach,
            o = n(2133)("forEach");
          e.exports = o
            ? [].forEach
            : function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
              };
        },
        7745: function (e) {
          e.exports = function (e, t) {
            for (var n = 0, r = t.length, o = new e(r); r > n; ) o[n] = t[n++];
            return o;
          };
        },
        8457: function (e, t, n) {
          "use strict";
          var r = n(9974),
            o = n(7908),
            i = n(3411),
            A = n(7659),
            a = n(7466),
            s = n(6135),
            l = n(1246);
          e.exports = function (e) {
            var t,
              n,
              c,
              u,
              f,
              p,
              d = o(e),
              g = "function" == typeof this ? this : Array,
              h = arguments.length,
              v = h > 1 ? arguments[1] : void 0,
              m = void 0 !== v,
              C = l(d),
              y = 0;
            if (
              (m && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
              null == C || (g == Array && A(C)))
            )
              for (n = new g((t = a(d.length))); t > y; y++)
                (p = m ? v(d[y], y) : d[y]), s(n, y, p);
            else
              for (
                f = (u = C.call(d)).next, n = new g();
                !(c = f.call(u)).done;
                y++
              )
                (p = m ? i(u, v, [c.value, y], !0) : c.value), s(n, y, p);
            return (n.length = y), n;
          };
        },
        1318: function (e, t, n) {
          var r = n(5656),
            o = n(7466),
            i = n(1400),
            A = function (e) {
              return function (t, n, A) {
                var a,
                  s = r(t),
                  l = o(s.length),
                  c = i(A, l);
                if (e && n != n) {
                  for (; l > c; ) if ((a = s[c++]) != a) return !0;
                } else
                  for (; l > c; c++)
                    if ((e || c in s) && s[c] === n) return e || c || 0;
                return !e && -1;
              };
            };
          e.exports = { includes: A(!0), indexOf: A(!1) };
        },
        2092: function (e, t, n) {
          var r = n(9974),
            o = n(8361),
            i = n(7908),
            A = n(7466),
            a = n(5417),
            s = [].push,
            l = function (e) {
              var t = 1 == e,
                n = 2 == e,
                l = 3 == e,
                c = 4 == e,
                u = 6 == e,
                f = 7 == e,
                p = 5 == e || u;
              return function (d, g, h, v) {
                for (
                  var m,
                    C,
                    y = i(d),
                    b = o(y),
                    w = r(g, h, 3),
                    E = A(b.length),
                    B = 0,
                    x = v || a,
                    k = t ? x(d, E) : n || f ? x(d, 0) : void 0;
                  E > B;
                  B++
                )
                  if ((p || B in b) && ((C = w((m = b[B]), B, y)), e))
                    if (t) k[B] = C;
                    else if (C)
                      switch (e) {
                        case 3:
                          return !0;
                        case 5:
                          return m;
                        case 6:
                          return B;
                        case 2:
                          s.call(k, m);
                      }
                    else
                      switch (e) {
                        case 4:
                          return !1;
                        case 7:
                          s.call(k, m);
                      }
                return u ? -1 : l || c ? c : k;
              };
            };
          e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterReject: l(7),
          };
        },
        6583: function (e, t, n) {
          "use strict";
          var r = n(5656),
            o = n(9958),
            i = n(7466),
            A = n(2133),
            a = Math.min,
            s = [].lastIndexOf,
            l = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
            c = A("lastIndexOf"),
            u = l || !c;
          e.exports = u
            ? function (e) {
                if (l) return s.apply(this, arguments) || 0;
                var t = r(this),
                  n = i(t.length),
                  A = n - 1;
                for (
                  arguments.length > 1 && (A = a(A, o(arguments[1]))),
                    A < 0 && (A = n + A);
                  A >= 0;
                  A--
                )
                  if (A in t && t[A] === e) return A || 0;
                return -1;
              }
            : s;
        },
        1194: function (e, t, n) {
          var r = n(7293),
            o = n(5112),
            i = n(7392),
            A = o("species");
          e.exports = function (e) {
            return (
              i >= 51 ||
              !r(function () {
                var t = [];
                return (
                  ((t.constructor = {})[A] = function () {
                    return { foo: 1 };
                  }),
                  1 !== t[e](Boolean).foo
                );
              })
            );
          };
        },
        2133: function (e, t, n) {
          "use strict";
          var r = n(7293);
          e.exports = function (e, t) {
            var n = [][e];
            return (
              !!n &&
              r(function () {
                n.call(
                  null,
                  t ||
                    function () {
                      throw 1;
                    },
                  1
                );
              })
            );
          };
        },
        3671: function (e, t, n) {
          var r = n(3099),
            o = n(7908),
            i = n(8361),
            A = n(7466),
            a = function (e) {
              return function (t, n, a, s) {
                r(n);
                var l = o(t),
                  c = i(l),
                  u = A(l.length),
                  f = e ? u - 1 : 0,
                  p = e ? -1 : 1;
                if (a < 2)
                  for (;;) {
                    if (f in c) {
                      (s = c[f]), (f += p);
                      break;
                    }
                    if (((f += p), e ? f < 0 : u <= f))
                      throw TypeError(
                        "Reduce of empty array with no initial value"
                      );
                  }
                for (; e ? f >= 0 : u > f; f += p)
                  f in c && (s = n(s, c[f], f, l));
                return s;
              };
            };
          e.exports = { left: a(!1), right: a(!0) };
        },
        4362: function (e) {
          var t = Math.floor,
            n = function (e, i) {
              var A = e.length,
                a = t(A / 2);
              return A < 8
                ? r(e, i)
                : o(n(e.slice(0, a), i), n(e.slice(a), i), i);
            },
            r = function (e, t) {
              for (var n, r, o = e.length, i = 1; i < o; ) {
                for (r = i, n = e[i]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
                r !== i++ && (e[r] = n);
              }
              return e;
            },
            o = function (e, t, n) {
              for (
                var r = e.length, o = t.length, i = 0, A = 0, a = [];
                i < r || A < o;

              )
                i < r && A < o
                  ? a.push(n(e[i], t[A]) <= 0 ? e[i++] : t[A++])
                  : a.push(i < r ? e[i++] : t[A++]);
              return a;
            };
          e.exports = n;
        },
        7475: function (e, t, n) {
          var r = n(111),
            o = n(3157),
            i = n(5112)("species");
          e.exports = function (e) {
            var t;
            return (
              o(e) &&
                ("function" != typeof (t = e.constructor) ||
                (t !== Array && !o(t.prototype))
                  ? r(t) && null === (t = t[i]) && (t = void 0)
                  : (t = void 0)),
              void 0 === t ? Array : t
            );
          };
        },
        5417: function (e, t, n) {
          var r = n(7475);
          e.exports = function (e, t) {
            return new (r(e))(0 === t ? 0 : t);
          };
        },
        3411: function (e, t, n) {
          var r = n(9670),
            o = n(9212);
          e.exports = function (e, t, n, i) {
            try {
              return i ? t(r(n)[0], n[1]) : t(n);
            } catch (t) {
              throw (o(e), t);
            }
          };
        },
        7072: function (e, t, n) {
          var r = n(5112)("iterator"),
            o = !1;
          try {
            var i = 0,
              A = {
                next: function () {
                  return { done: !!i++ };
                },
                return: function () {
                  o = !0;
                },
              };
            (A[r] = function () {
              return this;
            }),
              Array.from(A, function () {
                throw 2;
              });
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
              var i = {};
              (i[r] = function () {
                return {
                  next: function () {
                    return { done: (n = !0) };
                  },
                };
              }),
                e(i);
            } catch (e) {}
            return n;
          };
        },
        4326: function (e) {
          var t = {}.toString;
          e.exports = function (e) {
            return t.call(e).slice(8, -1);
          };
        },
        648: function (e, t, n) {
          var r = n(1694),
            o = n(4326),
            i = n(5112)("toStringTag"),
            A =
              "Arguments" ==
              o(
                (function () {
                  return arguments;
                })()
              );
          e.exports = r
            ? o
            : function (e) {
                var t, n, r;
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (e, t) {
                      try {
                        return e[t];
                      } catch (e) {}
                    })((t = Object(e)), i))
                  ? n
                  : A
                  ? o(t)
                  : "Object" == (r = o(t)) && "function" == typeof t.callee
                  ? "Arguments"
                  : r;
              };
        },
        5631: function (e, t, n) {
          "use strict";
          var r = n(3070).f,
            o = n(30),
            i = n(2248),
            A = n(9974),
            a = n(5787),
            s = n(408),
            l = n(654),
            c = n(6340),
            u = n(9781),
            f = n(2423).fastKey,
            p = n(9909),
            d = p.set,
            g = p.getterFor;
          e.exports = {
            getConstructor: function (e, t, n, l) {
              var c = e(function (e, r) {
                  a(e, c, t),
                    d(e, {
                      type: t,
                      index: o(null),
                      first: void 0,
                      last: void 0,
                      size: 0,
                    }),
                    u || (e.size = 0),
                    null != r && s(r, e[l], { that: e, AS_ENTRIES: n });
                }),
                p = g(t),
                h = function (e, t, n) {
                  var r,
                    o,
                    i = p(e),
                    A = v(e, t);
                  return (
                    A
                      ? (A.value = n)
                      : ((i.last = A =
                          {
                            index: (o = f(t, !0)),
                            key: t,
                            value: n,
                            previous: (r = i.last),
                            next: void 0,
                            removed: !1,
                          }),
                        i.first || (i.first = A),
                        r && (r.next = A),
                        u ? i.size++ : e.size++,
                        "F" !== o && (i.index[o] = A)),
                    e
                  );
                },
                v = function (e, t) {
                  var n,
                    r = p(e),
                    o = f(t);
                  if ("F" !== o) return r.index[o];
                  for (n = r.first; n; n = n.next) if (n.key == t) return n;
                };
              return (
                i(c.prototype, {
                  clear: function () {
                    for (var e = p(this), t = e.index, n = e.first; n; )
                      (n.removed = !0),
                        n.previous && (n.previous = n.previous.next = void 0),
                        delete t[n.index],
                        (n = n.next);
                    (e.first = e.last = void 0),
                      u ? (e.size = 0) : (this.size = 0);
                  },
                  delete: function (e) {
                    var t = this,
                      n = p(t),
                      r = v(t, e);
                    if (r) {
                      var o = r.next,
                        i = r.previous;
                      delete n.index[r.index],
                        (r.removed = !0),
                        i && (i.next = o),
                        o && (o.previous = i),
                        n.first == r && (n.first = o),
                        n.last == r && (n.last = i),
                        u ? n.size-- : t.size--;
                    }
                    return !!r;
                  },
                  forEach: function (e) {
                    for (
                      var t,
                        n = p(this),
                        r = A(
                          e,
                          arguments.length > 1 ? arguments[1] : void 0,
                          3
                        );
                      (t = t ? t.next : n.first);

                    )
                      for (r(t.value, t.key, this); t && t.removed; )
                        t = t.previous;
                  },
                  has: function (e) {
                    return !!v(this, e);
                  },
                }),
                i(
                  c.prototype,
                  n
                    ? {
                        get: function (e) {
                          var t = v(this, e);
                          return t && t.value;
                        },
                        set: function (e, t) {
                          return h(this, 0 === e ? 0 : e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return h(this, (e = 0 === e ? 0 : e), e);
                        },
                      }
                ),
                u &&
                  r(c.prototype, "size", {
                    get: function () {
                      return p(this).size;
                    },
                  }),
                c
              );
            },
            setStrong: function (e, t, n) {
              var r = t + " Iterator",
                o = g(t),
                i = g(r);
              l(
                e,
                t,
                function (e, t) {
                  d(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0,
                  });
                },
                function () {
                  for (
                    var e = i(this), t = e.kind, n = e.last;
                    n && n.removed;

                  )
                    n = n.previous;
                  return e.target && (e.last = n = n ? n.next : e.state.first)
                    ? "keys" == t
                      ? { value: n.key, done: !1 }
                      : "values" == t
                      ? { value: n.value, done: !1 }
                      : { value: [n.key, n.value], done: !1 }
                    : ((e.target = void 0), { value: void 0, done: !0 });
                },
                n ? "entries" : "values",
                !n,
                !0
              ),
                c(t);
            },
          };
        },
        9320: function (e, t, n) {
          "use strict";
          var r = n(2248),
            o = n(2423).getWeakData,
            i = n(9670),
            A = n(111),
            a = n(5787),
            s = n(408),
            l = n(2092),
            c = n(6656),
            u = n(9909),
            f = u.set,
            p = u.getterFor,
            d = l.find,
            g = l.findIndex,
            h = 0,
            v = function (e) {
              return e.frozen || (e.frozen = new m());
            },
            m = function () {
              this.entries = [];
            },
            C = function (e, t) {
              return d(e.entries, function (e) {
                return e[0] === t;
              });
            };
          (m.prototype = {
            get: function (e) {
              var t = C(this, e);
              if (t) return t[1];
            },
            has: function (e) {
              return !!C(this, e);
            },
            set: function (e, t) {
              var n = C(this, e);
              n ? (n[1] = t) : this.entries.push([e, t]);
            },
            delete: function (e) {
              var t = g(this.entries, function (t) {
                return t[0] === e;
              });
              return ~t && this.entries.splice(t, 1), !!~t;
            },
          }),
            (e.exports = {
              getConstructor: function (e, t, n, l) {
                var u = e(function (e, r) {
                    a(e, u, t),
                      f(e, { type: t, id: h++, frozen: void 0 }),
                      null != r && s(r, e[l], { that: e, AS_ENTRIES: n });
                  }),
                  d = p(t),
                  g = function (e, t, n) {
                    var r = d(e),
                      A = o(i(t), !0);
                    return !0 === A ? v(r).set(t, n) : (A[r.id] = n), e;
                  };
                return (
                  r(u.prototype, {
                    delete: function (e) {
                      var t = d(this);
                      if (!A(e)) return !1;
                      var n = o(e);
                      return !0 === n
                        ? v(t).delete(e)
                        : n && c(n, t.id) && delete n[t.id];
                    },
                    has: function (e) {
                      var t = d(this);
                      if (!A(e)) return !1;
                      var n = o(e);
                      return !0 === n ? v(t).has(e) : n && c(n, t.id);
                    },
                  }),
                  r(
                    u.prototype,
                    n
                      ? {
                          get: function (e) {
                            var t = d(this);
                            if (A(e)) {
                              var n = o(e);
                              return !0 === n
                                ? v(t).get(e)
                                : n
                                ? n[t.id]
                                : void 0;
                            }
                          },
                          set: function (e, t) {
                            return g(this, e, t);
                          },
                        }
                      : {
                          add: function (e) {
                            return g(this, e, !0);
                          },
                        }
                  ),
                  u
                );
              },
            });
        },
        7710: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7854),
            i = n(4705),
            A = n(1320),
            a = n(2423),
            s = n(408),
            l = n(5787),
            c = n(111),
            u = n(7293),
            f = n(7072),
            p = n(8003),
            d = n(9587);
          e.exports = function (e, t, n) {
            var g = -1 !== e.indexOf("Map"),
              h = -1 !== e.indexOf("Weak"),
              v = g ? "set" : "add",
              m = o[e],
              C = m && m.prototype,
              y = m,
              b = {},
              w = function (e) {
                var t = C[e];
                A(
                  C,
                  e,
                  "add" == e
                    ? function (e) {
                        return t.call(this, 0 === e ? 0 : e), this;
                      }
                    : "delete" == e
                    ? function (e) {
                        return !(h && !c(e)) && t.call(this, 0 === e ? 0 : e);
                      }
                    : "get" == e
                    ? function (e) {
                        return h && !c(e)
                          ? void 0
                          : t.call(this, 0 === e ? 0 : e);
                      }
                    : "has" == e
                    ? function (e) {
                        return !(h && !c(e)) && t.call(this, 0 === e ? 0 : e);
                      }
                    : function (e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this;
                      }
                );
              };
            if (
              i(
                e,
                "function" != typeof m ||
                  !(
                    h ||
                    (C.forEach &&
                      !u(function () {
                        new m().entries().next();
                      }))
                  )
              )
            )
              (y = n.getConstructor(t, e, g, v)), a.enable();
            else if (i(e, !0)) {
              var E = new y(),
                B = E[v](h ? {} : -0, 1) != E,
                x = u(function () {
                  E.has(1);
                }),
                k = f(function (e) {
                  new m(e);
                }),
                I =
                  !h &&
                  u(function () {
                    for (var e = new m(), t = 5; t--; ) e[v](t, t);
                    return !e.has(-0);
                  });
              k ||
                (((y = t(function (t, n) {
                  l(t, y, e);
                  var r = d(new m(), t, y);
                  return null != n && s(n, r[v], { that: r, AS_ENTRIES: g }), r;
                })).prototype = C),
                (C.constructor = y)),
                (x || I) && (w("delete"), w("has"), g && w("get")),
                (I || B) && w(v),
                h && C.clear && delete C.clear;
            }
            return (
              (b[e] = y),
              r({ global: !0, forced: y != m }, b),
              p(y, e),
              h || n.setStrong(y, e, g),
              y
            );
          };
        },
        9920: function (e, t, n) {
          var r = n(6656),
            o = n(3887),
            i = n(1236),
            A = n(3070);
          e.exports = function (e, t) {
            for (var n = o(t), a = A.f, s = i.f, l = 0; l < n.length; l++) {
              var c = n[l];
              r(e, c) || a(e, c, s(t, c));
            }
          };
        },
        4964: function (e, t, n) {
          var r = n(5112)("match");
          e.exports = function (e) {
            var t = /./;
            try {
              "/./"[e](t);
            } catch (n) {
              try {
                return (t[r] = !1), "/./"[e](t);
              } catch (e) {}
            }
            return !1;
          };
        },
        8544: function (e, t, n) {
          var r = n(7293);
          e.exports = !r(function () {
            function e() {}
            return (
              (e.prototype.constructor = null),
              Object.getPrototypeOf(new e()) !== e.prototype
            );
          });
        },
        4230: function (e, t, n) {
          var r = n(4488),
            o = n(1340),
            i = /"/g;
          e.exports = function (e, t, n, A) {
            var a = o(r(e)),
              s = "<" + t;
            return (
              "" !== n &&
                (s += " " + n + '="' + o(A).replace(i, "&quot;") + '"'),
              s + ">" + a + "</" + t + ">"
            );
          };
        },
        4994: function (e, t, n) {
          "use strict";
          var r = n(3383).IteratorPrototype,
            o = n(30),
            i = n(9114),
            A = n(8003),
            a = n(7497),
            s = function () {
              return this;
            };
          e.exports = function (e, t, n) {
            var l = t + " Iterator";
            return (
              (e.prototype = o(r, { next: i(1, n) })),
              A(e, l, !1, !0),
              (a[l] = s),
              e
            );
          };
        },
        8880: function (e, t, n) {
          var r = n(9781),
            o = n(3070),
            i = n(9114);
          e.exports = r
            ? function (e, t, n) {
                return o.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                return (e[t] = n), e;
              };
        },
        9114: function (e) {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
          };
        },
        6135: function (e, t, n) {
          "use strict";
          var r = n(4948),
            o = n(3070),
            i = n(9114);
          e.exports = function (e, t, n) {
            var A = r(t);
            A in e ? o.f(e, A, i(0, n)) : (e[A] = n);
          };
        },
        5573: function (e, t, n) {
          "use strict";
          var r = n(7293),
            o = n(6650).start,
            i = Math.abs,
            A = Date.prototype,
            a = A.getTime,
            s = A.toISOString;
          e.exports =
            r(function () {
              return (
                "0385-07-25T07:06:39.999Z" != s.call(new Date(-50000000000001))
              );
            }) ||
            !r(function () {
              s.call(new Date(NaN));
            })
              ? function () {
                  if (!isFinite(a.call(this)))
                    throw RangeError("Invalid time value");
                  var e = this,
                    t = e.getUTCFullYear(),
                    n = e.getUTCMilliseconds(),
                    r = t < 0 ? "-" : t > 9999 ? "+" : "";
                  return (
                    r +
                    o(i(t), r ? 6 : 4, 0) +
                    "-" +
                    o(e.getUTCMonth() + 1, 2, 0) +
                    "-" +
                    o(e.getUTCDate(), 2, 0) +
                    "T" +
                    o(e.getUTCHours(), 2, 0) +
                    ":" +
                    o(e.getUTCMinutes(), 2, 0) +
                    ":" +
                    o(e.getUTCSeconds(), 2, 0) +
                    "." +
                    o(n, 3, 0) +
                    "Z"
                  );
                }
              : s;
        },
        8709: function (e, t, n) {
          "use strict";
          var r = n(9670),
            o = n(2140);
          e.exports = function (e) {
            if ((r(this), "string" === e || "default" === e)) e = "string";
            else if ("number" !== e) throw TypeError("Incorrect hint");
            return o(this, e);
          };
        },
        654: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4994),
            i = n(9518),
            A = n(7674),
            a = n(8003),
            s = n(8880),
            l = n(1320),
            c = n(5112),
            u = n(1913),
            f = n(7497),
            p = n(3383),
            d = p.IteratorPrototype,
            g = p.BUGGY_SAFARI_ITERATORS,
            h = c("iterator"),
            v = "keys",
            m = "values",
            C = "entries",
            y = function () {
              return this;
            };
          e.exports = function (e, t, n, c, p, b, w) {
            o(n, t, c);
            var E,
              B,
              x,
              k = function (e) {
                if (e === p && R) return R;
                if (!g && e in T) return T[e];
                switch (e) {
                  case v:
                  case m:
                  case C:
                    return function () {
                      return new n(this, e);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              I = t + " Iterator",
              S = !1,
              T = e.prototype,
              L = T[h] || T["@@iterator"] || (p && T[p]),
              R = (!g && L) || k(p),
              Q = ("Array" == t && T.entries) || L;
            if (
              (Q &&
                ((E = i(Q.call(new e()))),
                d !== Object.prototype &&
                  E.next &&
                  (u ||
                    i(E) === d ||
                    (A ? A(E, d) : "function" != typeof E[h] && s(E, h, y)),
                  a(E, I, !0, !0),
                  u && (f[I] = y))),
              p == m &&
                L &&
                L.name !== m &&
                ((S = !0),
                (R = function () {
                  return L.call(this);
                })),
              (u && !w) || T[h] === R || s(T, h, R),
              (f[t] = R),
              p)
            )
              if (
                ((B = { values: k(m), keys: b ? R : k(v), entries: k(C) }), w)
              )
                for (x in B) (g || S || !(x in T)) && l(T, x, B[x]);
              else r({ target: t, proto: !0, forced: g || S }, B);
            return B;
          };
        },
        7235: function (e, t, n) {
          var r = n(857),
            o = n(6656),
            i = n(6061),
            A = n(3070).f;
          e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = {});
            o(t, e) || A(t, e, { value: i.f(e) });
          };
        },
        9781: function (e, t, n) {
          var r = n(7293);
          e.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        317: function (e, t, n) {
          var r = n(7854),
            o = n(111),
            i = r.document,
            A = o(i) && o(i.createElement);
          e.exports = function (e) {
            return A ? i.createElement(e) : {};
          };
        },
        8324: function (e) {
          e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        8886: function (e, t, n) {
          var r = n(8113).match(/firefox\/(\d+)/i);
          e.exports = !!r && +r[1];
        },
        7871: function (e) {
          e.exports = "object" == typeof window;
        },
        256: function (e, t, n) {
          var r = n(8113);
          e.exports = /MSIE|Trident/.test(r);
        },
        1528: function (e, t, n) {
          var r = n(8113),
            o = n(7854);
          e.exports = /ipad|iphone|ipod/i.test(r) && void 0 !== o.Pebble;
        },
        8334: function (e, t, n) {
          var r = n(8113);
          e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
        },
        5268: function (e, t, n) {
          var r = n(4326),
            o = n(7854);
          e.exports = "process" == r(o.process);
        },
        1036: function (e, t, n) {
          var r = n(8113);
          e.exports = /web0s(?!.*chrome)/i.test(r);
        },
        8113: function (e, t, n) {
          var r = n(5005);
          e.exports = r("navigator", "userAgent") || "";
        },
        7392: function (e, t, n) {
          var r,
            o,
            i = n(7854),
            A = n(8113),
            a = i.process,
            s = i.Deno,
            l = (a && a.versions) || (s && s.version),
            c = l && l.v8;
          c
            ? (o = (r = c.split("."))[0] < 4 ? 1 : r[0] + r[1])
            : A &&
              (!(r = A.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
              (r = A.match(/Chrome\/(\d+)/)) &&
              (o = r[1]),
            (e.exports = o && +o);
        },
        8008: function (e, t, n) {
          var r = n(8113).match(/AppleWebKit\/(\d+)\./);
          e.exports = !!r && +r[1];
        },
        748: function (e) {
          e.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        2109: function (e, t, n) {
          var r = n(7854),
            o = n(1236).f,
            i = n(8880),
            A = n(1320),
            a = n(3505),
            s = n(9920),
            l = n(4705);
          e.exports = function (e, t) {
            var n,
              c,
              u,
              f,
              p,
              d = e.target,
              g = e.global,
              h = e.stat;
            if ((n = g ? r : h ? r[d] || a(d, {}) : (r[d] || {}).prototype))
              for (c in t) {
                if (
                  ((f = t[c]),
                  (u = e.noTargetGet ? (p = o(n, c)) && p.value : n[c]),
                  !l(g ? c : d + (h ? "." : "#") + c, e.forced) && void 0 !== u)
                ) {
                  if (typeof f == typeof u) continue;
                  s(f, u);
                }
                (e.sham || (u && u.sham)) && i(f, "sham", !0), A(n, c, f, e);
              }
          };
        },
        7293: function (e) {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        7007: function (e, t, n) {
          "use strict";
          n(4916);
          var r = n(1320),
            o = n(2261),
            i = n(7293),
            A = n(5112),
            a = n(8880),
            s = A("species"),
            l = RegExp.prototype;
          e.exports = function (e, t, n, c) {
            var u = A(e),
              f = !i(function () {
                var t = {};
                return (
                  (t[u] = function () {
                    return 7;
                  }),
                  7 != ""[e](t)
                );
              }),
              p =
                f &&
                !i(function () {
                  var t = !1,
                    n = /a/;
                  return (
                    "split" === e &&
                      (((n = {}).constructor = {}),
                      (n.constructor[s] = function () {
                        return n;
                      }),
                      (n.flags = ""),
                      (n[u] = /./[u])),
                    (n.exec = function () {
                      return (t = !0), null;
                    }),
                    n[u](""),
                    !t
                  );
                });
            if (!f || !p || n) {
              var d = /./[u],
                g = t(u, ""[e], function (e, t, n, r, i) {
                  var A = t.exec;
                  return A === o || A === l.exec
                    ? f && !i
                      ? { done: !0, value: d.call(t, n, r) }
                      : { done: !0, value: e.call(n, t, r) }
                    : { done: !1 };
                });
              r(String.prototype, e, g[0]), r(l, u, g[1]);
            }
            c && a(l[u], "sham", !0);
          };
        },
        6790: function (e, t, n) {
          "use strict";
          var r = n(3157),
            o = n(7466),
            i = n(9974),
            A = function (e, t, n, a, s, l, c, u) {
              for (var f, p = s, d = 0, g = !!c && i(c, u, 3); d < a; ) {
                if (d in n) {
                  if (((f = g ? g(n[d], d, t) : n[d]), l > 0 && r(f)))
                    p = A(e, t, f, o(f.length), p, l - 1) - 1;
                  else {
                    if (p >= 9007199254740991)
                      throw TypeError("Exceed the acceptable array length");
                    e[p] = f;
                  }
                  p++;
                }
                d++;
              }
              return p;
            };
          e.exports = A;
        },
        6677: function (e, t, n) {
          var r = n(7293);
          e.exports = !r(function () {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        },
        9974: function (e, t, n) {
          var r = n(3099);
          e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
              case 0:
                return function () {
                  return e.call(t);
                };
              case 1:
                return function (n) {
                  return e.call(t, n);
                };
              case 2:
                return function (n, r) {
                  return e.call(t, n, r);
                };
              case 3:
                return function (n, r, o) {
                  return e.call(t, n, r, o);
                };
            }
            return function () {
              return e.apply(t, arguments);
            };
          };
        },
        7065: function (e, t, n) {
          "use strict";
          var r = n(3099),
            o = n(111),
            i = [].slice,
            A = {},
            a = function (e, t, n) {
              if (!(t in A)) {
                for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                A[t] = Function("C,a", "return new C(" + r.join(",") + ")");
              }
              return A[t](e, n);
            };
          e.exports =
            Function.bind ||
            function (e) {
              var t = r(this),
                n = i.call(arguments, 1),
                A = function () {
                  var r = n.concat(i.call(arguments));
                  return this instanceof A ? a(t, r.length, r) : t.apply(e, r);
                };
              return o(t.prototype) && (A.prototype = t.prototype), A;
            };
        },
        5005: function (e, t, n) {
          var r = n(7854),
            o = function (e) {
              return "function" == typeof e ? e : void 0;
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t];
          };
        },
        1246: function (e, t, n) {
          var r = n(648),
            o = n(7497),
            i = n(5112)("iterator");
          e.exports = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
          };
        },
        8554: function (e, t, n) {
          var r = n(9670),
            o = n(1246);
          e.exports = function (e) {
            var t = o(e);
            if ("function" != typeof t)
              throw TypeError(String(e) + " is not iterable");
            return r(t.call(e));
          };
        },
        647: function (e, t, n) {
          var r = n(7908),
            o = Math.floor,
            i = "".replace,
            A = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            a = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, n, s, l, c) {
            var u = n + e.length,
              f = s.length,
              p = a;
            return (
              void 0 !== l && ((l = r(l)), (p = A)),
              i.call(c, p, function (r, i) {
                var A;
                switch (i.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e;
                  case "`":
                    return t.slice(0, n);
                  case "'":
                    return t.slice(u);
                  case "<":
                    A = l[i.slice(1, -1)];
                    break;
                  default:
                    var a = +i;
                    if (0 === a) return r;
                    if (a > f) {
                      var c = o(a / 10);
                      return 0 === c
                        ? r
                        : c <= f
                        ? void 0 === s[c - 1]
                          ? i.charAt(1)
                          : s[c - 1] + i.charAt(1)
                        : r;
                    }
                    A = s[a - 1];
                }
                return void 0 === A ? "" : A;
              })
            );
          };
        },
        7854: function (e, t, n) {
          var r = function (e) {
            return e && e.Math == Math && e;
          };
          e.exports =
            r("object" == typeof globalThis && globalThis) ||
            r("object" == typeof window && window) ||
            r("object" == typeof self && self) ||
            r("object" == typeof n.g && n.g) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        6656: function (e, t, n) {
          var r = n(7908),
            o = {}.hasOwnProperty;
          e.exports =
            Object.hasOwn ||
            function (e, t) {
              return o.call(r(e), t);
            };
        },
        3501: function (e) {
          e.exports = {};
        },
        842: function (e, t, n) {
          var r = n(7854);
          e.exports = function (e, t) {
            var n = r.console;
            n &&
              n.error &&
              (1 === arguments.length ? n.error(e) : n.error(e, t));
          };
        },
        490: function (e, t, n) {
          var r = n(5005);
          e.exports = r("document", "documentElement");
        },
        4664: function (e, t, n) {
          var r = n(9781),
            o = n(7293),
            i = n(317);
          e.exports =
            !r &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        1179: function (e) {
          var t = Math.abs,
            n = Math.pow,
            r = Math.floor,
            o = Math.log,
            i = Math.LN2;
          e.exports = {
            pack: function (e, A, a) {
              var s,
                l,
                c,
                u = new Array(a),
                f = 8 * a - A - 1,
                p = (1 << f) - 1,
                d = p >> 1,
                g = 23 === A ? n(2, -24) - n(2, -77) : 0,
                h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
                v = 0;
              for (
                (e = t(e)) != e || e === 1 / 0
                  ? ((l = e != e ? 1 : 0), (s = p))
                  : ((s = r(o(e) / i)),
                    e * (c = n(2, -s)) < 1 && (s--, (c *= 2)),
                    (e += s + d >= 1 ? g / c : g * n(2, 1 - d)) * c >= 2 &&
                      (s++, (c /= 2)),
                    s + d >= p
                      ? ((l = 0), (s = p))
                      : s + d >= 1
                      ? ((l = (e * c - 1) * n(2, A)), (s += d))
                      : ((l = e * n(2, d - 1) * n(2, A)), (s = 0)));
                A >= 8;
                u[v++] = 255 & l, l /= 256, A -= 8
              );
              for (
                s = (s << A) | l, f += A;
                f > 0;
                u[v++] = 255 & s, s /= 256, f -= 8
              );
              return (u[--v] |= 128 * h), u;
            },
            unpack: function (e, t) {
              var r,
                o = e.length,
                i = 8 * o - t - 1,
                A = (1 << i) - 1,
                a = A >> 1,
                s = i - 7,
                l = o - 1,
                c = e[l--],
                u = 127 & c;
              for (c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
              for (
                r = u & ((1 << -s) - 1), u >>= -s, s += t;
                s > 0;
                r = 256 * r + e[l], l--, s -= 8
              );
              if (0 === u) u = 1 - a;
              else {
                if (u === A) return r ? NaN : c ? -1 / 0 : 1 / 0;
                (r += n(2, t)), (u -= a);
              }
              return (c ? -1 : 1) * r * n(2, u - t);
            },
          };
        },
        8361: function (e, t, n) {
          var r = n(7293),
            o = n(4326),
            i = "".split;
          e.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (e) {
                return "String" == o(e) ? i.call(e, "") : Object(e);
              }
            : Object;
        },
        9587: function (e, t, n) {
          var r = n(111),
            o = n(7674);
          e.exports = function (e, t, n) {
            var i, A;
            return (
              o &&
                "function" == typeof (i = t.constructor) &&
                i !== n &&
                r((A = i.prototype)) &&
                A !== n.prototype &&
                o(e, A),
              e
            );
          };
        },
        2788: function (e, t, n) {
          var r = n(5465),
            o = Function.toString;
          "function" != typeof r.inspectSource &&
            (r.inspectSource = function (e) {
              return o.call(e);
            }),
            (e.exports = r.inspectSource);
        },
        2423: function (e, t, n) {
          var r = n(2109),
            o = n(3501),
            i = n(111),
            A = n(6656),
            a = n(3070).f,
            s = n(8006),
            l = n(1156),
            c = n(9711),
            u = n(6677),
            f = !1,
            p = c("meta"),
            d = 0,
            g =
              Object.isExtensible ||
              function () {
                return !0;
              },
            h = function (e) {
              a(e, p, { value: { objectID: "O" + d++, weakData: {} } });
            },
            v = (e.exports = {
              enable: function () {
                (v.enable = function () {}), (f = !0);
                var e = s.f,
                  t = [].splice,
                  n = {};
                (n[p] = 1),
                  e(n).length &&
                    ((s.f = function (n) {
                      for (var r = e(n), o = 0, i = r.length; o < i; o++)
                        if (r[o] === p) {
                          t.call(r, o, 1);
                          break;
                        }
                      return r;
                    }),
                    r(
                      { target: "Object", stat: !0, forced: !0 },
                      { getOwnPropertyNames: l.f }
                    ));
              },
              fastKey: function (e, t) {
                if (!i(e))
                  return "symbol" == typeof e
                    ? e
                    : ("string" == typeof e ? "S" : "P") + e;
                if (!A(e, p)) {
                  if (!g(e)) return "F";
                  if (!t) return "E";
                  h(e);
                }
                return e[p].objectID;
              },
              getWeakData: function (e, t) {
                if (!A(e, p)) {
                  if (!g(e)) return !0;
                  if (!t) return !1;
                  h(e);
                }
                return e[p].weakData;
              },
              onFreeze: function (e) {
                return u && f && g(e) && !A(e, p) && h(e), e;
              },
            });
          o[p] = !0;
        },
        9909: function (e, t, n) {
          var r,
            o,
            i,
            A = n(8536),
            a = n(7854),
            s = n(111),
            l = n(8880),
            c = n(6656),
            u = n(5465),
            f = n(6200),
            p = n(3501),
            d = "Object already initialized",
            g = a.WeakMap;
          if (A || u.state) {
            var h = u.state || (u.state = new g()),
              v = h.get,
              m = h.has,
              C = h.set;
            (r = function (e, t) {
              if (m.call(h, e)) throw new TypeError(d);
              return (t.facade = e), C.call(h, e, t), t;
            }),
              (o = function (e) {
                return v.call(h, e) || {};
              }),
              (i = function (e) {
                return m.call(h, e);
              });
          } else {
            var y = f("state");
            (p[y] = !0),
              (r = function (e, t) {
                if (c(e, y)) throw new TypeError(d);
                return (t.facade = e), l(e, y, t), t;
              }),
              (o = function (e) {
                return c(e, y) ? e[y] : {};
              }),
              (i = function (e) {
                return c(e, y);
              });
          }
          e.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : r(e, {});
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!s(t) || (n = o(t)).type !== e)
                  throw TypeError("Incompatible receiver, " + e + " required");
                return n;
              };
            },
          };
        },
        7659: function (e, t, n) {
          var r = n(5112),
            o = n(7497),
            i = r("iterator"),
            A = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (o.Array === e || A[i] === e);
          };
        },
        3157: function (e, t, n) {
          var r = n(4326);
          e.exports =
            Array.isArray ||
            function (e) {
              return "Array" == r(e);
            };
        },
        5032: function (e, t, n) {
          var r = n(6656);
          e.exports = function (e) {
            return void 0 !== e && (r(e, "value") || r(e, "writable"));
          };
        },
        4705: function (e, t, n) {
          var r = n(7293),
            o = /#|\.prototype\./,
            i = function (e, t) {
              var n = a[A(e)];
              return (
                n == l || (n != s && ("function" == typeof t ? r(t) : !!t))
              );
            },
            A = (i.normalize = function (e) {
              return String(e).replace(o, ".").toLowerCase();
            }),
            a = (i.data = {}),
            s = (i.NATIVE = "N"),
            l = (i.POLYFILL = "P");
          e.exports = i;
        },
        8730: function (e, t, n) {
          var r = n(111),
            o = Math.floor;
          e.exports = function (e) {
            return !r(e) && isFinite(e) && o(e) === e;
          };
        },
        111: function (e) {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
          };
        },
        1913: function (e) {
          e.exports = !1;
        },
        7850: function (e, t, n) {
          var r = n(111),
            o = n(4326),
            i = n(5112)("match");
          e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
          };
        },
        2190: function (e, t, n) {
          var r = n(5005),
            o = n(3307);
          e.exports = o
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                var t = r("Symbol");
                return "function" == typeof t && Object(e) instanceof t;
              };
        },
        408: function (e, t, n) {
          var r = n(9670),
            o = n(7659),
            i = n(7466),
            A = n(9974),
            a = n(1246),
            s = n(9212),
            l = function (e, t) {
              (this.stopped = e), (this.result = t);
            };
          e.exports = function (e, t, n) {
            var c,
              u,
              f,
              p,
              d,
              g,
              h,
              v = n && n.that,
              m = !(!n || !n.AS_ENTRIES),
              C = !(!n || !n.IS_ITERATOR),
              y = !(!n || !n.INTERRUPTED),
              b = A(t, v, 1 + m + y),
              w = function (e) {
                return c && s(c), new l(!0, e);
              },
              E = function (e) {
                return m
                  ? (r(e), y ? b(e[0], e[1], w) : b(e[0], e[1]))
                  : y
                  ? b(e, w)
                  : b(e);
              };
            if (C) c = e;
            else {
              if ("function" != typeof (u = a(e)))
                throw TypeError("Target is not iterable");
              if (o(u)) {
                for (f = 0, p = i(e.length); p > f; f++)
                  if ((d = E(e[f])) && d instanceof l) return d;
                return new l(!1);
              }
              c = u.call(e);
            }
            for (g = c.next; !(h = g.call(c)).done; ) {
              try {
                d = E(h.value);
              } catch (e) {
                throw (s(c), e);
              }
              if ("object" == typeof d && d && d instanceof l) return d;
            }
            return new l(!1);
          };
        },
        9212: function (e, t, n) {
          var r = n(9670);
          e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return r(t.call(e)).value;
          };
        },
        3383: function (e, t, n) {
          "use strict";
          var r,
            o,
            i,
            A = n(7293),
            a = n(9518),
            s = n(8880),
            l = n(6656),
            c = n(5112),
            u = n(1913),
            f = c("iterator"),
            p = !1;
          [].keys &&
            ("next" in (i = [].keys())
              ? (o = a(a(i))) !== Object.prototype && (r = o)
              : (p = !0));
          var d =
            null == r ||
            A(function () {
              var e = {};
              return r[f].call(e) !== e;
            });
          d && (r = {}),
            (u && !d) ||
              l(r, f) ||
              s(r, f, function () {
                return this;
              }),
            (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
        },
        7497: function (e) {
          e.exports = {};
        },
        6736: function (e) {
          var t = Math.expm1,
            n = Math.exp;
          e.exports =
            !t ||
            t(10) > 22025.465794806718 ||
            t(10) < 22025.465794806718 ||
            -2e-17 != t(-2e-17)
              ? function (e) {
                  return 0 == (e = +e)
                    ? e
                    : e > -1e-6 && e < 1e-6
                    ? e + (e * e) / 2
                    : n(e) - 1;
                }
              : t;
        },
        6130: function (e, t, n) {
          var r = n(4310),
            o = Math.abs,
            i = Math.pow,
            A = i(2, -52),
            a = i(2, -23),
            s = i(2, 127) * (2 - a),
            l = i(2, -126);
          e.exports =
            Math.fround ||
            function (e) {
              var t,
                n,
                i = o(e),
                c = r(e);
              return i < l
                ? c * (i / l / a + 1 / A - 1 / A) * l * a
                : (n = (t = (1 + a / A) * i) - (t - i)) > s || n != n
                ? c * (1 / 0)
                : c * n;
            };
        },
        6513: function (e) {
          var t = Math.log;
          e.exports =
            Math.log1p ||
            function (e) {
              return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : t(1 + e);
            };
        },
        4310: function (e) {
          e.exports =
            Math.sign ||
            function (e) {
              return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
            };
        },
        5948: function (e, t, n) {
          var r,
            o,
            i,
            A,
            a,
            s,
            l,
            c,
            u = n(7854),
            f = n(1236).f,
            p = n(261).set,
            d = n(8334),
            g = n(1528),
            h = n(1036),
            v = n(5268),
            m = u.MutationObserver || u.WebKitMutationObserver,
            C = u.document,
            y = u.process,
            b = u.Promise,
            w = f(u, "queueMicrotask"),
            E = w && w.value;
          E ||
            ((r = function () {
              var e, t;
              for (v && (e = y.domain) && e.exit(); o; ) {
                (t = o.fn), (o = o.next);
                try {
                  t();
                } catch (e) {
                  throw (o ? A() : (i = void 0), e);
                }
              }
              (i = void 0), e && e.enter();
            }),
            d || v || h || !m || !C
              ? !g && b && b.resolve
                ? (((l = b.resolve(void 0)).constructor = b),
                  (c = l.then),
                  (A = function () {
                    c.call(l, r);
                  }))
                : (A = v
                    ? function () {
                        y.nextTick(r);
                      }
                    : function () {
                        p.call(u, r);
                      })
              : ((a = !0),
                (s = C.createTextNode("")),
                new m(r).observe(s, { characterData: !0 }),
                (A = function () {
                  s.data = a = !a;
                }))),
            (e.exports =
              E ||
              function (e) {
                var t = { fn: e, next: void 0 };
                i && (i.next = t), o || ((o = t), A()), (i = t);
              });
        },
        3366: function (e, t, n) {
          var r = n(7854);
          e.exports = r.Promise;
        },
        133: function (e, t, n) {
          var r = n(7392),
            o = n(7293);
          e.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var e = Symbol();
              return (
                !String(e) ||
                !(Object(e) instanceof Symbol) ||
                (!Symbol.sham && r && r < 41)
              );
            });
        },
        590: function (e, t, n) {
          var r = n(7293),
            o = n(5112),
            i = n(1913),
            A = o("iterator");
          e.exports = !r(function () {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
              t = e.searchParams,
              n = "";
            return (
              (e.pathname = "c%20d"),
              t.forEach(function (e, r) {
                t.delete("b"), (n += r + e);
              }),
              (i && !e.toJSON) ||
                !t.sort ||
                "http://a/c%20d?a=1&c=3" !== e.href ||
                "3" !== t.get("c") ||
                "a=1" !== String(new URLSearchParams("?a=1")) ||
                !t[A] ||
                "a" !== new URL("https://a@b").username ||
                "b" !==
                  new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
                "xn--e1aybc" !== new URL("http://тест").host ||
                "#%D0%B1" !== new URL("http://a#б").hash ||
                "a1c3" !== n ||
                "x" !== new URL("http://x", void 0).host
            );
          });
        },
        8536: function (e, t, n) {
          var r = n(7854),
            o = n(2788),
            i = r.WeakMap;
          e.exports = "function" == typeof i && /native code/.test(o(i));
        },
        8523: function (e, t, n) {
          "use strict";
          var r = n(3099),
            o = function (e) {
              var t, n;
              (this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n)
                  throw TypeError("Bad Promise constructor");
                (t = e), (n = r);
              })),
                (this.resolve = r(t)),
                (this.reject = r(n));
            };
          e.exports.f = function (e) {
            return new o(e);
          };
        },
        3929: function (e, t, n) {
          var r = n(7850);
          e.exports = function (e) {
            if (r(e))
              throw TypeError("The method doesn't accept regular expressions");
            return e;
          };
        },
        7023: function (e, t, n) {
          var r = n(7854).isFinite;
          e.exports =
            Number.isFinite ||
            function (e) {
              return "number" == typeof e && r(e);
            };
        },
        2814: function (e, t, n) {
          var r = n(7854),
            o = n(1340),
            i = n(3111).trim,
            A = n(1361),
            a = r.parseFloat,
            s = 1 / a(A + "-0") != -1 / 0;
          e.exports = s
            ? function (e) {
                var t = i(o(e)),
                  n = a(t);
                return 0 === n && "-" == t.charAt(0) ? -0 : n;
              }
            : a;
        },
        3009: function (e, t, n) {
          var r = n(7854),
            o = n(1340),
            i = n(3111).trim,
            A = n(1361),
            a = r.parseInt,
            s = /^[+-]?0[Xx]/,
            l = 8 !== a(A + "08") || 22 !== a(A + "0x16");
          e.exports = l
            ? function (e, t) {
                var n = i(o(e));
                return a(n, t >>> 0 || (s.test(n) ? 16 : 10));
              }
            : a;
        },
        1574: function (e, t, n) {
          "use strict";
          var r = n(9781),
            o = n(7293),
            i = n(1956),
            A = n(5181),
            a = n(5296),
            s = n(7908),
            l = n(8361),
            c = Object.assign,
            u = Object.defineProperty;
          e.exports =
            !c ||
            o(function () {
              if (
                r &&
                1 !==
                  c(
                    { b: 1 },
                    c(
                      u({}, "a", {
                        enumerable: !0,
                        get: function () {
                          u(this, "b", { value: 3, enumerable: !1 });
                        },
                      }),
                      { b: 2 }
                    )
                  ).b
              )
                return !0;
              var e = {},
                t = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
              return (
                (e[n] = 7),
                o.split("").forEach(function (e) {
                  t[e] = e;
                }),
                7 != c({}, e)[n] || i(c({}, t)).join("") != o
              );
            })
              ? function (e, t) {
                  for (
                    var n = s(e), o = arguments.length, c = 1, u = A.f, f = a.f;
                    o > c;

                  )
                    for (
                      var p,
                        d = l(arguments[c++]),
                        g = u ? i(d).concat(u(d)) : i(d),
                        h = g.length,
                        v = 0;
                      h > v;

                    )
                      (p = g[v++]), (r && !f.call(d, p)) || (n[p] = d[p]);
                  return n;
                }
              : c;
        },
        30: function (e, t, n) {
          var r,
            o = n(9670),
            i = n(6048),
            A = n(748),
            a = n(3501),
            s = n(490),
            l = n(317),
            c = n(6200)("IE_PROTO"),
            u = function () {},
            f = function (e) {
              return "<script>" + e + "</script>";
            },
            p = function (e) {
              e.write(f("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            },
            d = function () {
              try {
                r = new ActiveXObject("htmlfile");
              } catch (e) {}
              var e, t;
              d =
                "undefined" != typeof document
                  ? document.domain && r
                    ? p(r)
                    : (((t = l("iframe")).style.display = "none"),
                      s.appendChild(t),
                      (t.src = String("javascript:")),
                      (e = t.contentWindow.document).open(),
                      e.write(f("document.F=Object")),
                      e.close(),
                      e.F)
                  : p(r);
              for (var n = A.length; n--; ) delete d.prototype[A[n]];
              return d();
            };
          (a[c] = !0),
            (e.exports =
              Object.create ||
              function (e, t) {
                var n;
                return (
                  null !== e
                    ? ((u.prototype = o(e)),
                      (n = new u()),
                      (u.prototype = null),
                      (n[c] = e))
                    : (n = d()),
                  void 0 === t ? n : i(n, t)
                );
              });
        },
        6048: function (e, t, n) {
          var r = n(9781),
            o = n(3070),
            i = n(9670),
            A = n(1956);
          e.exports = r
            ? Object.defineProperties
            : function (e, t) {
                i(e);
                for (var n, r = A(t), a = r.length, s = 0; a > s; )
                  o.f(e, (n = r[s++]), t[n]);
                return e;
              };
        },
        3070: function (e, t, n) {
          var r = n(9781),
            o = n(4664),
            i = n(9670),
            A = n(4948),
            a = Object.defineProperty;
          t.f = r
            ? a
            : function (e, t, n) {
                if ((i(e), (t = A(t)), i(n), o))
                  try {
                    return a(e, t, n);
                  } catch (e) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e;
              };
        },
        1236: function (e, t, n) {
          var r = n(9781),
            o = n(5296),
            i = n(9114),
            A = n(5656),
            a = n(4948),
            s = n(6656),
            l = n(4664),
            c = Object.getOwnPropertyDescriptor;
          t.f = r
            ? c
            : function (e, t) {
                if (((e = A(e)), (t = a(t)), l))
                  try {
                    return c(e, t);
                  } catch (e) {}
                if (s(e, t)) return i(!o.f.call(e, t), e[t]);
              };
        },
        1156: function (e, t, n) {
          var r = n(5656),
            o = n(8006).f,
            i = {}.toString,
            A =
              "object" == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [];
          e.exports.f = function (e) {
            return A && "[object Window]" == i.call(e)
              ? (function (e) {
                  try {
                    return o(e);
                  } catch (e) {
                    return A.slice();
                  }
                })(e)
              : o(r(e));
          };
        },
        8006: function (e, t, n) {
          var r = n(6324),
            o = n(748).concat("length", "prototype");
          t.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return r(e, o);
            };
        },
        5181: function (e, t) {
          t.f = Object.getOwnPropertySymbols;
        },
        9518: function (e, t, n) {
          var r = n(6656),
            o = n(7908),
            i = n(6200),
            A = n(8544),
            a = i("IE_PROTO"),
            s = Object.prototype;
          e.exports = A
            ? Object.getPrototypeOf
            : function (e) {
                return (
                  (e = o(e)),
                  r(e, a)
                    ? e[a]
                    : "function" == typeof e.constructor &&
                      e instanceof e.constructor
                    ? e.constructor.prototype
                    : e instanceof Object
                    ? s
                    : null
                );
              };
        },
        6324: function (e, t, n) {
          var r = n(6656),
            o = n(5656),
            i = n(1318).indexOf,
            A = n(3501);
          e.exports = function (e, t) {
            var n,
              a = o(e),
              s = 0,
              l = [];
            for (n in a) !r(A, n) && r(a, n) && l.push(n);
            for (; t.length > s; )
              r(a, (n = t[s++])) && (~i(l, n) || l.push(n));
            return l;
          };
        },
        1956: function (e, t, n) {
          var r = n(6324),
            o = n(748);
          e.exports =
            Object.keys ||
            function (e) {
              return r(e, o);
            };
        },
        5296: function (e, t) {
          "use strict";
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o = r && !n.call({ 1: 2 }, 1);
          t.f = o
            ? function (e) {
                var t = r(this, e);
                return !!t && t.enumerable;
              }
            : n;
        },
        9026: function (e, t, n) {
          "use strict";
          var r = n(1913),
            o = n(7854),
            i = n(7293),
            A = n(8008);
          e.exports =
            r ||
            !i(function () {
              if (!(A && A < 535)) {
                var e = Math.random();
                __defineSetter__.call(null, e, function () {}), delete o[e];
              }
            });
        },
        7674: function (e, t, n) {
          var r = n(9670),
            o = n(6077);
          e.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var e,
                    t = !1,
                    n = {};
                  try {
                    (e = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set).call(n, []),
                      (t = n instanceof Array);
                  } catch (e) {}
                  return function (n, i) {
                    return r(n), o(i), t ? e.call(n, i) : (n.__proto__ = i), n;
                  };
                })()
              : void 0);
        },
        4699: function (e, t, n) {
          var r = n(9781),
            o = n(1956),
            i = n(5656),
            A = n(5296).f,
            a = function (e) {
              return function (t) {
                for (
                  var n, a = i(t), s = o(a), l = s.length, c = 0, u = [];
                  l > c;

                )
                  (n = s[c++]),
                    (r && !A.call(a, n)) || u.push(e ? [n, a[n]] : a[n]);
                return u;
              };
            };
          e.exports = { entries: a(!0), values: a(!1) };
        },
        288: function (e, t, n) {
          "use strict";
          var r = n(1694),
            o = n(648);
          e.exports = r
            ? {}.toString
            : function () {
                return "[object " + o(this) + "]";
              };
        },
        2140: function (e, t, n) {
          var r = n(111);
          e.exports = function (e, t) {
            var n, o;
            if (
              "string" === t &&
              "function" == typeof (n = e.toString) &&
              !r((o = n.call(e)))
            )
              return o;
            if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e))))
              return o;
            if (
              "string" !== t &&
              "function" == typeof (n = e.toString) &&
              !r((o = n.call(e)))
            )
              return o;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        3887: function (e, t, n) {
          var r = n(5005),
            o = n(8006),
            i = n(5181),
            A = n(9670);
          e.exports =
            r("Reflect", "ownKeys") ||
            function (e) {
              var t = o.f(A(e)),
                n = i.f;
              return n ? t.concat(n(e)) : t;
            };
        },
        857: function (e, t, n) {
          var r = n(7854);
          e.exports = r;
        },
        2534: function (e) {
          e.exports = function (e) {
            try {
              return { error: !1, value: e() };
            } catch (e) {
              return { error: !0, value: e };
            }
          };
        },
        9478: function (e, t, n) {
          var r = n(9670),
            o = n(111),
            i = n(8523);
          e.exports = function (e, t) {
            if ((r(e), o(t) && t.constructor === e)) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise;
          };
        },
        2248: function (e, t, n) {
          var r = n(1320);
          e.exports = function (e, t, n) {
            for (var o in t) r(e, o, t[o], n);
            return e;
          };
        },
        1320: function (e, t, n) {
          var r = n(7854),
            o = n(8880),
            i = n(6656),
            A = n(3505),
            a = n(2788),
            s = n(9909),
            l = s.get,
            c = s.enforce,
            u = String(String).split("String");
          (e.exports = function (e, t, n, a) {
            var s,
              l = !!a && !!a.unsafe,
              f = !!a && !!a.enumerable,
              p = !!a && !!a.noTargetGet;
            "function" == typeof n &&
              ("string" != typeof t || i(n, "name") || o(n, "name", t),
              (s = c(n)).source ||
                (s.source = u.join("string" == typeof t ? t : ""))),
              e !== r
                ? (l ? !p && e[t] && (f = !0) : delete e[t],
                  f ? (e[t] = n) : o(e, t, n))
                : f
                ? (e[t] = n)
                : A(t, n);
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && l(this).source) || a(this);
          });
        },
        7651: function (e, t, n) {
          var r = n(4326),
            o = n(2261);
          e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
              var i = n.call(e, t);
              if ("object" != typeof i)
                throw TypeError(
                  "RegExp exec method returned something other than an Object or null"
                );
              return i;
            }
            if ("RegExp" !== r(e))
              throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t);
          };
        },
        2261: function (e, t, n) {
          "use strict";
          var r,
            o,
            i = n(1340),
            A = n(7066),
            a = n(2999),
            s = n(2309),
            l = n(30),
            c = n(9909).get,
            u = n(9441),
            f = n(8173),
            p = RegExp.prototype.exec,
            d = s("native-string-replace", String.prototype.replace),
            g = p,
            h =
              ((r = /a/),
              (o = /b*/g),
              p.call(r, "a"),
              p.call(o, "a"),
              0 !== r.lastIndex || 0 !== o.lastIndex),
            v = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            m = void 0 !== /()??/.exec("")[1];
          (h || m || v || u || f) &&
            (g = function (e) {
              var t,
                n,
                r,
                o,
                a,
                s,
                u,
                f = this,
                C = c(f),
                y = i(e),
                b = C.raw;
              if (b)
                return (
                  (b.lastIndex = f.lastIndex),
                  (t = g.call(b, y)),
                  (f.lastIndex = b.lastIndex),
                  t
                );
              var w = C.groups,
                E = v && f.sticky,
                B = A.call(f),
                x = f.source,
                k = 0,
                I = y;
              if (
                (E &&
                  (-1 === (B = B.replace("y", "")).indexOf("g") && (B += "g"),
                  (I = y.slice(f.lastIndex)),
                  f.lastIndex > 0 &&
                    (!f.multiline ||
                      (f.multiline && "\n" !== y.charAt(f.lastIndex - 1))) &&
                    ((x = "(?: " + x + ")"), (I = " " + I), k++),
                  (n = new RegExp("^(?:" + x + ")", B))),
                m && (n = new RegExp("^" + x + "$(?!\\s)", B)),
                h && (r = f.lastIndex),
                (o = p.call(E ? n : f, I)),
                E
                  ? o
                    ? ((o.input = o.input.slice(k)),
                      (o[0] = o[0].slice(k)),
                      (o.index = f.lastIndex),
                      (f.lastIndex += o[0].length))
                    : (f.lastIndex = 0)
                  : h &&
                    o &&
                    (f.lastIndex = f.global ? o.index + o[0].length : r),
                m &&
                  o &&
                  o.length > 1 &&
                  d.call(o[0], n, function () {
                    for (a = 1; a < arguments.length - 2; a++)
                      void 0 === arguments[a] && (o[a] = void 0);
                  }),
                o && w)
              )
                for (o.groups = s = l(null), a = 0; a < w.length; a++)
                  s[(u = w[a])[0]] = o[u[1]];
              return o;
            }),
            (e.exports = g);
        },
        7066: function (e, t, n) {
          "use strict";
          var r = n(9670);
          e.exports = function () {
            var e = r(this),
              t = "";
            return (
              e.global && (t += "g"),
              e.ignoreCase && (t += "i"),
              e.multiline && (t += "m"),
              e.dotAll && (t += "s"),
              e.unicode && (t += "u"),
              e.sticky && (t += "y"),
              t
            );
          };
        },
        2999: function (e, t, n) {
          var r = n(7293),
            o = n(7854).RegExp;
          (t.UNSUPPORTED_Y = r(function () {
            var e = o("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          })),
            (t.BROKEN_CARET = r(function () {
              var e = o("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            }));
        },
        9441: function (e, t, n) {
          var r = n(7293),
            o = n(7854).RegExp;
          e.exports = r(function () {
            var e = o(".", "s");
            return !(e.dotAll && e.exec("\n") && "s" === e.flags);
          });
        },
        8173: function (e, t, n) {
          var r = n(7293),
            o = n(7854).RegExp;
          e.exports = r(function () {
            var e = o("(?<a>b)", "g");
            return (
              "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            );
          });
        },
        4488: function (e) {
          e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
          };
        },
        1150: function (e) {
          e.exports =
            Object.is ||
            function (e, t) {
              return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
        },
        3505: function (e, t, n) {
          var r = n(7854);
          e.exports = function (e, t) {
            try {
              Object.defineProperty(r, e, {
                value: t,
                configurable: !0,
                writable: !0,
              });
            } catch (n) {
              r[e] = t;
            }
            return t;
          };
        },
        6340: function (e, t, n) {
          "use strict";
          var r = n(5005),
            o = n(3070),
            i = n(5112),
            A = n(9781),
            a = i("species");
          e.exports = function (e) {
            var t = r(e),
              n = o.f;
            A &&
              t &&
              !t[a] &&
              n(t, a, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        8003: function (e, t, n) {
          var r = n(3070).f,
            o = n(6656),
            i = n(5112)("toStringTag");
          e.exports = function (e, t, n) {
            e &&
              !o((e = n ? e : e.prototype), i) &&
              r(e, i, { configurable: !0, value: t });
          };
        },
        6200: function (e, t, n) {
          var r = n(2309),
            o = n(9711),
            i = r("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = o(e));
          };
        },
        5465: function (e, t, n) {
          var r = n(7854),
            o = n(3505),
            i = "__core-js_shared__",
            A = r[i] || o(i, {});
          e.exports = A;
        },
        2309: function (e, t, n) {
          var r = n(1913),
            o = n(5465);
          (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: "3.16.3",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
          });
        },
        6707: function (e, t, n) {
          var r = n(9670),
            o = n(3099),
            i = n(5112)("species");
          e.exports = function (e, t) {
            var n,
              A = r(e).constructor;
            return void 0 === A || null == (n = r(A)[i]) ? t : o(n);
          };
        },
        3429: function (e, t, n) {
          var r = n(7293);
          e.exports = function (e) {
            return r(function () {
              var t = ""[e]('"');
              return t !== t.toLowerCase() || t.split('"').length > 3;
            });
          };
        },
        8710: function (e, t, n) {
          var r = n(9958),
            o = n(1340),
            i = n(4488),
            A = function (e) {
              return function (t, n) {
                var A,
                  a,
                  s = o(i(t)),
                  l = r(n),
                  c = s.length;
                return l < 0 || l >= c
                  ? e
                    ? ""
                    : void 0
                  : (A = s.charCodeAt(l)) < 55296 ||
                    A > 56319 ||
                    l + 1 === c ||
                    (a = s.charCodeAt(l + 1)) < 56320 ||
                    a > 57343
                  ? e
                    ? s.charAt(l)
                    : A
                  : e
                  ? s.slice(l, l + 2)
                  : a - 56320 + ((A - 55296) << 10) + 65536;
              };
            };
          e.exports = { codeAt: A(!1), charAt: A(!0) };
        },
        7061: function (e, t, n) {
          var r = n(8113);
          e.exports =
            /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
              r
            );
        },
        6650: function (e, t, n) {
          var r = n(7466),
            o = n(1340),
            i = n(8415),
            A = n(4488),
            a = Math.ceil,
            s = function (e) {
              return function (t, n, s) {
                var l,
                  c,
                  u = o(A(t)),
                  f = u.length,
                  p = void 0 === s ? " " : o(s),
                  d = r(n);
                return d <= f || "" == p
                  ? u
                  : ((l = d - f),
                    (c = i.call(p, a(l / p.length))).length > l &&
                      (c = c.slice(0, l)),
                    e ? u + c : c + u);
              };
            };
          e.exports = { start: s(!1), end: s(!0) };
        },
        3197: function (e) {
          "use strict";
          var t = 2147483647,
            n = /[^\0-\u007E]/,
            r = /[.\u3002\uFF0E\uFF61]/g,
            o = "Overflow: input needs wider integers to process",
            i = Math.floor,
            A = String.fromCharCode,
            a = function (e) {
              return e + 22 + 75 * (e < 26);
            },
            s = function (e, t, n) {
              var r = 0;
              for (e = n ? i(e / 700) : e >> 1, e += i(e / t); e > 455; r += 36)
                e = i(e / 35);
              return i(r + (36 * e) / (e + 38));
            },
            l = function (e) {
              var n,
                r,
                l = [],
                c = (e = (function (e) {
                  for (var t = [], n = 0, r = e.length; n < r; ) {
                    var o = e.charCodeAt(n++);
                    if (o >= 55296 && o <= 56319 && n < r) {
                      var i = e.charCodeAt(n++);
                      56320 == (64512 & i)
                        ? t.push(((1023 & o) << 10) + (1023 & i) + 65536)
                        : (t.push(o), n--);
                    } else t.push(o);
                  }
                  return t;
                })(e)).length,
                u = 128,
                f = 0,
                p = 72;
              for (n = 0; n < e.length; n++) (r = e[n]) < 128 && l.push(A(r));
              var d = l.length,
                g = d;
              for (d && l.push("-"); g < c; ) {
                var h = t;
                for (n = 0; n < e.length; n++)
                  (r = e[n]) >= u && r < h && (h = r);
                var v = g + 1;
                if (h - u > i((t - f) / v)) throw RangeError(o);
                for (f += (h - u) * v, u = h, n = 0; n < e.length; n++) {
                  if ((r = e[n]) < u && ++f > t) throw RangeError(o);
                  if (r == u) {
                    for (var m = f, C = 36; ; C += 36) {
                      var y = C <= p ? 1 : C >= p + 26 ? 26 : C - p;
                      if (m < y) break;
                      var b = m - y,
                        w = 36 - y;
                      l.push(A(a(y + (b % w)))), (m = i(b / w));
                    }
                    l.push(A(a(m))), (p = s(f, v, g == d)), (f = 0), ++g;
                  }
                }
                ++f, ++u;
              }
              return l.join("");
            };
          e.exports = function (e) {
            var t,
              o,
              i = [],
              A = e.toLowerCase().replace(r, ".").split(".");
            for (t = 0; t < A.length; t++)
              (o = A[t]), i.push(n.test(o) ? "xn--" + l(o) : o);
            return i.join(".");
          };
        },
        8415: function (e, t, n) {
          "use strict";
          var r = n(9958),
            o = n(1340),
            i = n(4488);
          e.exports = function (e) {
            var t = o(i(this)),
              n = "",
              A = r(e);
            if (A < 0 || A == 1 / 0)
              throw RangeError("Wrong number of repetitions");
            for (; A > 0; (A >>>= 1) && (t += t)) 1 & A && (n += t);
            return n;
          };
        },
        6091: function (e, t, n) {
          var r = n(7293),
            o = n(1361);
          e.exports = function (e) {
            return r(function () {
              return !!o[e]() || "​᠎" != "​᠎"[e]() || o[e].name !== e;
            });
          };
        },
        3111: function (e, t, n) {
          var r = n(4488),
            o = n(1340),
            i = "[" + n(1361) + "]",
            A = RegExp("^" + i + i + "*"),
            a = RegExp(i + i + "*$"),
            s = function (e) {
              return function (t) {
                var n = o(r(t));
                return (
                  1 & e && (n = n.replace(A, "")),
                  2 & e && (n = n.replace(a, "")),
                  n
                );
              };
            };
          e.exports = { start: s(1), end: s(2), trim: s(3) };
        },
        261: function (e, t, n) {
          var r,
            o,
            i,
            A,
            a = n(7854),
            s = n(7293),
            l = n(9974),
            c = n(490),
            u = n(317),
            f = n(8334),
            p = n(5268),
            d = a.setImmediate,
            g = a.clearImmediate,
            h = a.process,
            v = a.MessageChannel,
            m = a.Dispatch,
            C = 0,
            y = {};
          try {
            r = a.location;
          } catch (e) {}
          var b = function (e) {
              if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t();
              }
            },
            w = function (e) {
              return function () {
                b(e);
              };
            },
            E = function (e) {
              b(e.data);
            },
            B = function (e) {
              a.postMessage(String(e), r.protocol + "//" + r.host);
            };
          (d && g) ||
            ((d = function (e) {
              for (var t = [], n = arguments.length, r = 1; n > r; )
                t.push(arguments[r++]);
              return (
                (y[++C] = function () {
                  ("function" == typeof e ? e : Function(e)).apply(void 0, t);
                }),
                o(C),
                C
              );
            }),
            (g = function (e) {
              delete y[e];
            }),
            p
              ? (o = function (e) {
                  h.nextTick(w(e));
                })
              : m && m.now
              ? (o = function (e) {
                  m.now(w(e));
                })
              : v && !f
              ? ((A = (i = new v()).port2),
                (i.port1.onmessage = E),
                (o = l(A.postMessage, A, 1)))
              : a.addEventListener &&
                "function" == typeof postMessage &&
                !a.importScripts &&
                r &&
                "file:" !== r.protocol &&
                !s(B)
              ? ((o = B), a.addEventListener("message", E, !1))
              : (o =
                  "onreadystatechange" in u("script")
                    ? function (e) {
                        c.appendChild(u("script")).onreadystatechange =
                          function () {
                            c.removeChild(this), b(e);
                          };
                      }
                    : function (e) {
                        setTimeout(w(e), 0);
                      })),
            (e.exports = { set: d, clear: g });
        },
        863: function (e, t, n) {
          var r = n(4326);
          e.exports = function (e) {
            if ("number" != typeof e && "Number" != r(e))
              throw TypeError("Incorrect invocation");
            return +e;
          };
        },
        1400: function (e, t, n) {
          var r = n(9958),
            o = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? o(n + t, 0) : i(n, t);
          };
        },
        7067: function (e, t, n) {
          var r = n(9958),
            o = n(7466);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = r(e),
              n = o(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n;
          };
        },
        5656: function (e, t, n) {
          var r = n(8361),
            o = n(4488);
          e.exports = function (e) {
            return r(o(e));
          };
        },
        9958: function (e) {
          var t = Math.ceil,
            n = Math.floor;
          e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
          };
        },
        7466: function (e, t, n) {
          var r = n(9958),
            o = Math.min;
          e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
          };
        },
        7908: function (e, t, n) {
          var r = n(4488);
          e.exports = function (e) {
            return Object(r(e));
          };
        },
        4590: function (e, t, n) {
          var r = n(3002);
          e.exports = function (e, t) {
            var n = r(e);
            if (n % t) throw RangeError("Wrong offset");
            return n;
          };
        },
        3002: function (e, t, n) {
          var r = n(9958);
          e.exports = function (e) {
            var t = r(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t;
          };
        },
        7593: function (e, t, n) {
          var r = n(111),
            o = n(2190),
            i = n(2140),
            A = n(5112)("toPrimitive");
          e.exports = function (e, t) {
            if (!r(e) || o(e)) return e;
            var n,
              a = e[A];
            if (void 0 !== a) {
              if (
                (void 0 === t && (t = "default"),
                (n = a.call(e, t)),
                !r(n) || o(n))
              )
                return n;
              throw TypeError("Can't convert object to primitive value");
            }
            return void 0 === t && (t = "number"), i(e, t);
          };
        },
        4948: function (e, t, n) {
          var r = n(7593),
            o = n(2190);
          e.exports = function (e) {
            var t = r(e, "string");
            return o(t) ? t : String(t);
          };
        },
        1694: function (e, t, n) {
          var r = {};
          (r[n(5112)("toStringTag")] = "z"),
            (e.exports = "[object z]" === String(r));
        },
        1340: function (e, t, n) {
          var r = n(2190);
          e.exports = function (e) {
            if (r(e))
              throw TypeError("Cannot convert a Symbol value to a string");
            return String(e);
          };
        },
        9843: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7854),
            i = n(9781),
            A = n(3832),
            a = n(260),
            s = n(3331),
            l = n(5787),
            c = n(9114),
            u = n(8880),
            f = n(8730),
            p = n(7466),
            d = n(7067),
            g = n(4590),
            h = n(4948),
            v = n(6656),
            m = n(648),
            C = n(111),
            y = n(2190),
            b = n(30),
            w = n(7674),
            E = n(8006).f,
            B = n(7321),
            x = n(2092).forEach,
            k = n(6340),
            I = n(3070),
            S = n(1236),
            T = n(9909),
            L = n(9587),
            R = T.get,
            Q = T.set,
            M = I.f,
            O = S.f,
            D = Math.round,
            F = o.RangeError,
            P = s.ArrayBuffer,
            U = s.DataView,
            N = a.NATIVE_ARRAY_BUFFER_VIEWS,
            W = a.TYPED_ARRAY_CONSTRUCTOR,
            j = a.TYPED_ARRAY_TAG,
            Y = a.TypedArray,
            G = a.TypedArrayPrototype,
            z = a.aTypedArrayConstructor,
            V = a.isTypedArray,
            _ = "BYTES_PER_ELEMENT",
            H = "Wrong length",
            J = function (e, t) {
              for (var n = 0, r = t.length, o = new (z(e))(r); r > n; )
                o[n] = t[n++];
              return o;
            },
            Z = function (e, t) {
              M(e, t, {
                get: function () {
                  return R(this)[t];
                },
              });
            },
            K = function (e) {
              var t;
              return (
                e instanceof P ||
                "ArrayBuffer" == (t = m(e)) ||
                "SharedArrayBuffer" == t
              );
            },
            X = function (e, t) {
              return V(e) && !y(t) && t in e && f(+t) && t >= 0;
            },
            q = function (e, t) {
              return (t = h(t)), X(e, t) ? c(2, e[t]) : O(e, t);
            },
            $ = function (e, t, n) {
              return (
                (t = h(t)),
                !(X(e, t) && C(n) && v(n, "value")) ||
                v(n, "get") ||
                v(n, "set") ||
                n.configurable ||
                (v(n, "writable") && !n.writable) ||
                (v(n, "enumerable") && !n.enumerable)
                  ? M(e, t, n)
                  : ((e[t] = n.value), e)
              );
            };
          i
            ? (N ||
                ((S.f = q),
                (I.f = $),
                Z(G, "buffer"),
                Z(G, "byteOffset"),
                Z(G, "byteLength"),
                Z(G, "length")),
              r(
                { target: "Object", stat: !0, forced: !N },
                { getOwnPropertyDescriptor: q, defineProperty: $ }
              ),
              (e.exports = function (e, t, n) {
                var i = e.match(/\d+$/)[0] / 8,
                  a = e + (n ? "Clamped" : "") + "Array",
                  s = "get" + e,
                  c = "set" + e,
                  f = o[a],
                  h = f,
                  v = h && h.prototype,
                  m = {},
                  y = function (e, t) {
                    M(e, t, {
                      get: function () {
                        return (function (e, t) {
                          var n = R(e);
                          return n.view[s](t * i + n.byteOffset, !0);
                        })(this, t);
                      },
                      set: function (e) {
                        return (function (e, t, r) {
                          var o = R(e);
                          n &&
                            (r = (r = D(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                            o.view[c](t * i + o.byteOffset, r, !0);
                        })(this, t, e);
                      },
                      enumerable: !0,
                    });
                  };
                N
                  ? A &&
                    ((h = t(function (e, t, n, r) {
                      return (
                        l(e, h, a),
                        L(
                          C(t)
                            ? K(t)
                              ? void 0 !== r
                                ? new f(t, g(n, i), r)
                                : void 0 !== n
                                ? new f(t, g(n, i))
                                : new f(t)
                              : V(t)
                              ? J(h, t)
                              : B.call(h, t)
                            : new f(d(t)),
                          e,
                          h
                        )
                      );
                    })),
                    w && w(h, Y),
                    x(E(f), function (e) {
                      e in h || u(h, e, f[e]);
                    }),
                    (h.prototype = v))
                  : ((h = t(function (e, t, n, r) {
                      l(e, h, a);
                      var o,
                        A,
                        s,
                        c = 0,
                        u = 0;
                      if (C(t)) {
                        if (!K(t)) return V(t) ? J(h, t) : B.call(h, t);
                        (o = t), (u = g(n, i));
                        var f = t.byteLength;
                        if (void 0 === r) {
                          if (f % i) throw F(H);
                          if ((A = f - u) < 0) throw F(H);
                        } else if ((A = p(r) * i) + u > f) throw F(H);
                        s = A / i;
                      } else (s = d(t)), (o = new P((A = s * i)));
                      for (
                        Q(e, {
                          buffer: o,
                          byteOffset: u,
                          byteLength: A,
                          length: s,
                          view: new U(o),
                        });
                        c < s;

                      )
                        y(e, c++);
                    })),
                    w && w(h, Y),
                    (v = h.prototype = b(G))),
                  v.constructor !== h && u(v, "constructor", h),
                  u(v, W, h),
                  j && u(v, j, a),
                  (m[a] = h),
                  r({ global: !0, forced: h != f, sham: !N }, m),
                  _ in h || u(h, _, i),
                  _ in v || u(v, _, i),
                  k(a);
              }))
            : (e.exports = function () {});
        },
        3832: function (e, t, n) {
          var r = n(7854),
            o = n(7293),
            i = n(7072),
            A = n(260).NATIVE_ARRAY_BUFFER_VIEWS,
            a = r.ArrayBuffer,
            s = r.Int8Array;
          e.exports =
            !A ||
            !o(function () {
              s(1);
            }) ||
            !o(function () {
              new s(-1);
            }) ||
            !i(function (e) {
              new s(), new s(null), new s(1.5), new s(e);
            }, !0) ||
            o(function () {
              return 1 !== new s(new a(2), 1, void 0).length;
            });
        },
        3074: function (e, t, n) {
          var r = n(7745),
            o = n(6304);
          e.exports = function (e, t) {
            return r(o(e), t);
          };
        },
        7321: function (e, t, n) {
          var r = n(7908),
            o = n(7466),
            i = n(1246),
            A = n(7659),
            a = n(9974),
            s = n(260).aTypedArrayConstructor;
          e.exports = function (e) {
            var t,
              n,
              l,
              c,
              u,
              f,
              p = r(e),
              d = arguments.length,
              g = d > 1 ? arguments[1] : void 0,
              h = void 0 !== g,
              v = i(p);
            if (null != v && !A(v))
              for (f = (u = v.call(p)).next, p = []; !(c = f.call(u)).done; )
                p.push(c.value);
            for (
              h && d > 2 && (g = a(g, arguments[2], 2)),
                n = o(p.length),
                l = new (s(this))(n),
                t = 0;
              n > t;
              t++
            )
              l[t] = h ? g(p[t], t) : p[t];
            return l;
          };
        },
        6304: function (e, t, n) {
          var r = n(260),
            o = n(6707),
            i = r.TYPED_ARRAY_CONSTRUCTOR,
            A = r.aTypedArrayConstructor;
          e.exports = function (e) {
            return A(o(e, e[i]));
          };
        },
        9711: function (e) {
          var t = 0,
            n = Math.random();
          e.exports = function (e) {
            return (
              "Symbol(" +
              String(void 0 === e ? "" : e) +
              ")_" +
              (++t + n).toString(36)
            );
          };
        },
        3307: function (e, t, n) {
          var r = n(133);
          e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        6061: function (e, t, n) {
          var r = n(5112);
          t.f = r;
        },
        5112: function (e, t, n) {
          var r = n(7854),
            o = n(2309),
            i = n(6656),
            A = n(9711),
            a = n(133),
            s = n(3307),
            l = o("wks"),
            c = r.Symbol,
            u = s ? c : (c && c.withoutSetter) || A;
          e.exports = function (e) {
            return (
              (i(l, e) && (a || "string" == typeof l[e])) ||
                (a && i(c, e) ? (l[e] = c[e]) : (l[e] = u("Symbol." + e))),
              l[e]
            );
          };
        },
        1361: function (e) {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        9170: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9518),
            i = n(7674),
            A = n(30),
            a = n(8880),
            s = n(9114),
            l = n(408),
            c = n(1340),
            u = function (e, t) {
              var n = this;
              if (!(n instanceof u)) return new u(e, t);
              i && (n = i(new Error(void 0), o(n))),
                void 0 !== t && a(n, "message", c(t));
              var r = [];
              return l(e, r.push, { that: r }), a(n, "errors", r), n;
            };
          (u.prototype = A(Error.prototype, {
            constructor: s(5, u),
            message: s(5, ""),
            name: s(5, "AggregateError"),
          })),
            r({ global: !0 }, { AggregateError: u });
        },
        8264: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7854),
            i = n(3331),
            A = n(6340),
            a = i.ArrayBuffer;
          r({ global: !0, forced: o.ArrayBuffer !== a }, { ArrayBuffer: a }),
            A("ArrayBuffer");
        },
        6938: function (e, t, n) {
          var r = n(2109),
            o = n(260);
          r(
            {
              target: "ArrayBuffer",
              stat: !0,
              forced: !o.NATIVE_ARRAY_BUFFER_VIEWS,
            },
            { isView: o.isView }
          );
        },
        9575: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293),
            i = n(3331),
            A = n(9670),
            a = n(1400),
            s = n(7466),
            l = n(6707),
            c = i.ArrayBuffer,
            u = i.DataView,
            f = c.prototype.slice;
          r(
            {
              target: "ArrayBuffer",
              proto: !0,
              unsafe: !0,
              forced: o(function () {
                return !new c(2).slice(1, void 0).byteLength;
              }),
            },
            {
              slice: function (e, t) {
                if (void 0 !== f && void 0 === t) return f.call(A(this), e);
                for (
                  var n = A(this).byteLength,
                    r = a(e, n),
                    o = a(void 0 === t ? n : t, n),
                    i = new (l(this, c))(s(o - r)),
                    p = new u(this),
                    d = new u(i),
                    g = 0;
                  r < o;

                )
                  d.setUint8(g++, p.getUint8(r++));
                return i;
              },
            }
          );
        },
        2222: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293),
            i = n(3157),
            A = n(111),
            a = n(7908),
            s = n(7466),
            l = n(6135),
            c = n(5417),
            u = n(1194),
            f = n(5112),
            p = n(7392),
            d = f("isConcatSpreadable"),
            g = 9007199254740991,
            h = "Maximum allowed index exceeded",
            v =
              p >= 51 ||
              !o(function () {
                var e = [];
                return (e[d] = !1), e.concat()[0] !== e;
              }),
            m = u("concat"),
            C = function (e) {
              if (!A(e)) return !1;
              var t = e[d];
              return void 0 !== t ? !!t : i(e);
            };
          r(
            { target: "Array", proto: !0, forced: !v || !m },
            {
              concat: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  A = a(this),
                  u = c(A, 0),
                  f = 0;
                for (t = -1, r = arguments.length; t < r; t++)
                  if (C((i = -1 === t ? A : arguments[t]))) {
                    if (f + (o = s(i.length)) > g) throw TypeError(h);
                    for (n = 0; n < o; n++, f++) n in i && l(u, f, i[n]);
                  } else {
                    if (f >= g) throw TypeError(h);
                    l(u, f++, i);
                  }
                return (u.length = f), u;
              },
            }
          );
        },
        545: function (e, t, n) {
          var r = n(2109),
            o = n(1048),
            i = n(1223);
          r({ target: "Array", proto: !0 }, { copyWithin: o }), i("copyWithin");
        },
        6541: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).every;
          r(
            { target: "Array", proto: !0, forced: !n(2133)("every") },
            {
              every: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        3290: function (e, t, n) {
          var r = n(2109),
            o = n(1285),
            i = n(1223);
          r({ target: "Array", proto: !0 }, { fill: o }), i("fill");
        },
        7327: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).filter;
          r(
            { target: "Array", proto: !0, forced: !n(1194)("filter") },
            {
              filter: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        4553: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).findIndex,
            i = n(1223),
            A = "findIndex",
            a = !0;
          A in [] &&
            Array(1).findIndex(function () {
              a = !1;
            }),
            r(
              { target: "Array", proto: !0, forced: a },
              {
                findIndex: function (e) {
                  return o(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
            i(A);
        },
        9826: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).find,
            i = n(1223),
            A = "find",
            a = !0;
          A in [] &&
            Array(1).find(function () {
              a = !1;
            }),
            r(
              { target: "Array", proto: !0, forced: a },
              {
                find: function (e) {
                  return o(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
            i(A);
        },
        6535: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(6790),
            i = n(7908),
            A = n(7466),
            a = n(3099),
            s = n(5417);
          r(
            { target: "Array", proto: !0 },
            {
              flatMap: function (e) {
                var t,
                  n = i(this),
                  r = A(n.length);
                return (
                  a(e),
                  ((t = s(n, 0)).length = o(
                    t,
                    n,
                    n,
                    r,
                    0,
                    1,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  )),
                  t
                );
              },
            }
          );
        },
        4944: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(6790),
            i = n(7908),
            A = n(7466),
            a = n(9958),
            s = n(5417);
          r(
            { target: "Array", proto: !0 },
            {
              flat: function () {
                var e = arguments.length ? arguments[0] : void 0,
                  t = i(this),
                  n = A(t.length),
                  r = s(t, 0);
                return (
                  (r.length = o(r, t, t, n, 0, void 0 === e ? 1 : a(e))), r
                );
              },
            }
          );
        },
        9554: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(8533);
          r(
            { target: "Array", proto: !0, forced: [].forEach != o },
            { forEach: o }
          );
        },
        1038: function (e, t, n) {
          var r = n(2109),
            o = n(8457);
          r(
            {
              target: "Array",
              stat: !0,
              forced: !n(7072)(function (e) {
                Array.from(e);
              }),
            },
            { from: o }
          );
        },
        6699: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1318).includes,
            i = n(1223);
          r(
            { target: "Array", proto: !0 },
            {
              includes: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
            i("includes");
        },
        2772: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1318).indexOf,
            i = n(2133),
            A = [].indexOf,
            a = !!A && 1 / [1].indexOf(1, -0) < 0,
            s = i("indexOf");
          r(
            { target: "Array", proto: !0, forced: a || !s },
            {
              indexOf: function (e) {
                return a
                  ? A.apply(this, arguments) || 0
                  : o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        9753: function (e, t, n) {
          n(2109)({ target: "Array", stat: !0 }, { isArray: n(3157) });
        },
        6992: function (e, t, n) {
          "use strict";
          var r = n(5656),
            o = n(1223),
            i = n(7497),
            A = n(9909),
            a = n(654),
            s = "Array Iterator",
            l = A.set,
            c = A.getterFor(s);
          (e.exports = a(
            Array,
            "Array",
            function (e, t) {
              l(this, { type: s, target: r(e), index: 0, kind: t });
            },
            function () {
              var e = c(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
              return !t || r >= t.length
                ? ((e.target = void 0), { value: void 0, done: !0 })
                : "keys" == n
                ? { value: r, done: !1 }
                : "values" == n
                ? { value: t[r], done: !1 }
                : { value: [r, t[r]], done: !1 };
            },
            "values"
          )),
            (i.Arguments = i.Array),
            o("keys"),
            o("values"),
            o("entries");
        },
        9600: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(8361),
            i = n(5656),
            A = n(2133),
            a = [].join,
            s = o != Object,
            l = A("join", ",");
          r(
            { target: "Array", proto: !0, forced: s || !l },
            {
              join: function (e) {
                return a.call(i(this), void 0 === e ? "," : e);
              },
            }
          );
        },
        4986: function (e, t, n) {
          var r = n(2109),
            o = n(6583);
          r(
            { target: "Array", proto: !0, forced: o !== [].lastIndexOf },
            { lastIndexOf: o }
          );
        },
        1249: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).map;
          r(
            { target: "Array", proto: !0, forced: !n(1194)("map") },
            {
              map: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        6572: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293),
            i = n(6135);
          r(
            {
              target: "Array",
              stat: !0,
              forced: o(function () {
                function e() {}
                return !(Array.of.call(e) instanceof e);
              }),
            },
            {
              of: function () {
                for (
                  var e = 0,
                    t = arguments.length,
                    n = new ("function" == typeof this ? this : Array)(t);
                  t > e;

                )
                  i(n, e, arguments[e++]);
                return (n.length = t), n;
              },
            }
          );
        },
        6644: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3671).right,
            i = n(2133),
            A = n(7392),
            a = n(5268);
          r(
            {
              target: "Array",
              proto: !0,
              forced: !i("reduceRight") || (!a && A > 79 && A < 83),
            },
            {
              reduceRight: function (e) {
                return o(
                  this,
                  e,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        5827: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3671).left,
            i = n(2133),
            A = n(7392),
            a = n(5268);
          r(
            {
              target: "Array",
              proto: !0,
              forced: !i("reduce") || (!a && A > 79 && A < 83),
            },
            {
              reduce: function (e) {
                return o(
                  this,
                  e,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        5069: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3157),
            i = [].reverse,
            A = [1, 2];
          r(
            {
              target: "Array",
              proto: !0,
              forced: String(A) === String(A.reverse()),
            },
            {
              reverse: function () {
                return o(this) && (this.length = this.length), i.call(this);
              },
            }
          );
        },
        7042: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(111),
            i = n(3157),
            A = n(1400),
            a = n(7466),
            s = n(5656),
            l = n(6135),
            c = n(5112),
            u = n(1194)("slice"),
            f = c("species"),
            p = [].slice,
            d = Math.max;
          r(
            { target: "Array", proto: !0, forced: !u },
            {
              slice: function (e, t) {
                var n,
                  r,
                  c,
                  u = s(this),
                  g = a(u.length),
                  h = A(e, g),
                  v = A(void 0 === t ? g : t, g);
                if (
                  i(u) &&
                  ("function" != typeof (n = u.constructor) ||
                  (n !== Array && !i(n.prototype))
                    ? o(n) && null === (n = n[f]) && (n = void 0)
                    : (n = void 0),
                  n === Array || void 0 === n)
                )
                  return p.call(u, h, v);
                for (
                  r = new (void 0 === n ? Array : n)(d(v - h, 0)), c = 0;
                  h < v;
                  h++, c++
                )
                  h in u && l(r, c, u[h]);
                return (r.length = c), r;
              },
            }
          );
        },
        5212: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2092).some;
          r(
            { target: "Array", proto: !0, forced: !n(2133)("some") },
            {
              some: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        2707: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3099),
            i = n(7908),
            A = n(7466),
            a = n(1340),
            s = n(7293),
            l = n(4362),
            c = n(2133),
            u = n(8886),
            f = n(256),
            p = n(7392),
            d = n(8008),
            g = [],
            h = g.sort,
            v = s(function () {
              g.sort(void 0);
            }),
            m = s(function () {
              g.sort(null);
            }),
            C = c("sort"),
            y = !s(function () {
              if (p) return p < 70;
              if (!(u && u > 3)) {
                if (f) return !0;
                if (d) return d < 603;
                var e,
                  t,
                  n,
                  r,
                  o = "";
                for (e = 65; e < 76; e++) {
                  switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      n = 3;
                      break;
                    case 68:
                    case 71:
                      n = 4;
                      break;
                    default:
                      n = 2;
                  }
                  for (r = 0; r < 47; r++) g.push({ k: t + r, v: n });
                }
                for (
                  g.sort(function (e, t) {
                    return t.v - e.v;
                  }),
                    r = 0;
                  r < g.length;
                  r++
                )
                  (t = g[r].k.charAt(0)),
                    o.charAt(o.length - 1) !== t && (o += t);
                return "DGBEFHACIJK" !== o;
              }
            });
          r(
            { target: "Array", proto: !0, forced: v || !m || !C || !y },
            {
              sort: function (e) {
                void 0 !== e && o(e);
                var t = i(this);
                if (y) return void 0 === e ? h.call(t) : h.call(t, e);
                var n,
                  r,
                  s = [],
                  c = A(t.length);
                for (r = 0; r < c; r++) r in t && s.push(t[r]);
                for (
                  n = (s = l(
                    s,
                    (function (e) {
                      return function (t, n) {
                        return void 0 === n
                          ? -1
                          : void 0 === t
                          ? 1
                          : void 0 !== e
                          ? +e(t, n) || 0
                          : a(t) > a(n)
                          ? 1
                          : -1;
                      };
                    })(e)
                  )).length,
                    r = 0;
                  r < n;

                )
                  t[r] = s[r++];
                for (; r < c; ) delete t[r++];
                return t;
              },
            }
          );
        },
        8706: function (e, t, n) {
          n(6340)("Array");
        },
        561: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1400),
            i = n(9958),
            A = n(7466),
            a = n(7908),
            s = n(5417),
            l = n(6135),
            c = n(1194)("splice"),
            u = Math.max,
            f = Math.min,
            p = 9007199254740991,
            d = "Maximum allowed length exceeded";
          r(
            { target: "Array", proto: !0, forced: !c },
            {
              splice: function (e, t) {
                var n,
                  r,
                  c,
                  g,
                  h,
                  v,
                  m = a(this),
                  C = A(m.length),
                  y = o(e, C),
                  b = arguments.length;
                if (
                  (0 === b
                    ? (n = r = 0)
                    : 1 === b
                    ? ((n = 0), (r = C - y))
                    : ((n = b - 2), (r = f(u(i(t), 0), C - y))),
                  C + n - r > p)
                )
                  throw TypeError(d);
                for (c = s(m, r), g = 0; g < r; g++)
                  (h = y + g) in m && l(c, g, m[h]);
                if (((c.length = r), n < r)) {
                  for (g = y; g < C - r; g++)
                    (v = g + n), (h = g + r) in m ? (m[v] = m[h]) : delete m[v];
                  for (g = C; g > C - r + n; g--) delete m[g - 1];
                } else if (n > r)
                  for (g = C - r; g > y; g--)
                    (v = g + n - 1),
                      (h = g + r - 1) in m ? (m[v] = m[h]) : delete m[v];
                for (g = 0; g < n; g++) m[g + y] = arguments[g + 2];
                return (m.length = C - r + n), c;
              },
            }
          );
        },
        9244: function (e, t, n) {
          n(1223)("flatMap");
        },
        3792: function (e, t, n) {
          n(1223)("flat");
        },
        6716: function (e, t, n) {
          var r = n(2109),
            o = n(3331);
          r({ global: !0, forced: !n(4019) }, { DataView: o.DataView });
        },
        3016: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293)(function () {
              return 120 !== new Date(16e11).getYear();
            }),
            i = Date.prototype.getFullYear;
          r(
            { target: "Date", proto: !0, forced: o },
            {
              getYear: function () {
                return i.call(this) - 1900;
              },
            }
          );
        },
        3843: function (e, t, n) {
          n(2109)(
            { target: "Date", stat: !0 },
            {
              now: function () {
                return new Date().getTime();
              },
            }
          );
        },
        1801: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9958),
            i = Date.prototype.getTime,
            A = Date.prototype.setFullYear;
          r(
            { target: "Date", proto: !0 },
            {
              setYear: function (e) {
                i.call(this);
                var t = o(e),
                  n = 0 <= t && t <= 99 ? t + 1900 : t;
                return A.call(this, n);
              },
            }
          );
        },
        9550: function (e, t, n) {
          n(2109)(
            { target: "Date", proto: !0 },
            { toGMTString: Date.prototype.toUTCString }
          );
        },
        8733: function (e, t, n) {
          var r = n(2109),
            o = n(5573);
          r(
            {
              target: "Date",
              proto: !0,
              forced: Date.prototype.toISOString !== o,
            },
            { toISOString: o }
          );
        },
        5735: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293),
            i = n(7908),
            A = n(7593);
          r(
            {
              target: "Date",
              proto: !0,
              forced: o(function () {
                return (
                  null !== new Date(NaN).toJSON() ||
                  1 !==
                    Date.prototype.toJSON.call({
                      toISOString: function () {
                        return 1;
                      },
                    })
                );
              }),
            },
            {
              toJSON: function (e) {
                var t = i(this),
                  n = A(t, "number");
                return "number" != typeof n || isFinite(n)
                  ? t.toISOString()
                  : null;
              },
            }
          );
        },
        6078: function (e, t, n) {
          var r = n(8880),
            o = n(8709),
            i = n(5112)("toPrimitive"),
            A = Date.prototype;
          i in A || r(A, i, o);
        },
        3710: function (e, t, n) {
          var r = n(1320),
            o = Date.prototype,
            i = "Invalid Date",
            A = o.toString,
            a = o.getTime;
          String(new Date(NaN)) != i &&
            r(o, "toString", function () {
              var e = a.call(this);
              return e == e ? A.call(this) : i;
            });
        },
        2130: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1340),
            i = /[\w*+\-./@]/,
            A = function (e, t) {
              for (var n = e.toString(16); n.length < t; ) n = "0" + n;
              return n;
            };
          r(
            { global: !0 },
            {
              escape: function (e) {
                for (var t, n, r = o(e), a = "", s = r.length, l = 0; l < s; )
                  (t = r.charAt(l++)),
                    i.test(t)
                      ? (a += t)
                      : (a +=
                          (n = t.charCodeAt(0)) < 256
                            ? "%" + A(n, 2)
                            : "%u" + A(n, 4).toUpperCase());
                return a;
              },
            }
          );
        },
        4812: function (e, t, n) {
          n(2109)({ target: "Function", proto: !0 }, { bind: n(7065) });
        },
        4855: function (e, t, n) {
          "use strict";
          var r = n(111),
            o = n(3070),
            i = n(9518),
            A = n(5112)("hasInstance"),
            a = Function.prototype;
          A in a ||
            o.f(a, A, {
              value: function (e) {
                if ("function" != typeof this || !r(e)) return !1;
                if (!r(this.prototype)) return e instanceof this;
                for (; (e = i(e)); ) if (this.prototype === e) return !0;
                return !1;
              },
            });
        },
        8309: function (e, t, n) {
          var r = n(9781),
            o = n(3070).f,
            i = Function.prototype,
            A = i.toString,
            a = /^\s*function ([^ (]*)/,
            s = "name";
          r &&
            !(s in i) &&
            o(i, s, {
              configurable: !0,
              get: function () {
                try {
                  return A.call(this).match(a)[1];
                } catch (e) {
                  return "";
                }
              },
            });
        },
        5837: function (e, t, n) {
          n(2109)({ global: !0 }, { globalThis: n(7854) });
        },
        8862: function (e, t, n) {
          var r = n(2109),
            o = n(5005),
            i = n(7293),
            A = o("JSON", "stringify"),
            a = /[\uD800-\uDFFF]/g,
            s = /^[\uD800-\uDBFF]$/,
            l = /^[\uDC00-\uDFFF]$/,
            c = function (e, t, n) {
              var r = n.charAt(t - 1),
                o = n.charAt(t + 1);
              return (s.test(e) && !l.test(o)) || (l.test(e) && !s.test(r))
                ? "\\u" + e.charCodeAt(0).toString(16)
                : e;
            },
            u = i(function () {
              return (
                '"\\udf06\\ud834"' !== A("\udf06\ud834") ||
                '"\\udead"' !== A("\udead")
              );
            });
          A &&
            r(
              { target: "JSON", stat: !0, forced: u },
              {
                stringify: function (e, t, n) {
                  var r = A.apply(null, arguments);
                  return "string" == typeof r ? r.replace(a, c) : r;
                },
              }
            );
        },
        3706: function (e, t, n) {
          var r = n(7854);
          n(8003)(r.JSON, "JSON", !0);
        },
        1532: function (e, t, n) {
          "use strict";
          var r = n(7710),
            o = n(5631);
          e.exports = r(
            "Map",
            function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0);
              };
            },
            o
          );
        },
        9752: function (e, t, n) {
          var r = n(2109),
            o = n(6513),
            i = Math.acosh,
            A = Math.log,
            a = Math.sqrt,
            s = Math.LN2;
          r(
            {
              target: "Math",
              stat: !0,
              forced:
                !i ||
                710 != Math.floor(i(Number.MAX_VALUE)) ||
                i(1 / 0) != 1 / 0,
            },
            {
              acosh: function (e) {
                return (e = +e) < 1
                  ? NaN
                  : e > 94906265.62425156
                  ? A(e) + s
                  : o(e - 1 + a(e - 1) * a(e + 1));
              },
            }
          );
        },
        2376: function (e, t, n) {
          var r = n(2109),
            o = Math.asinh,
            i = Math.log,
            A = Math.sqrt;
          r(
            { target: "Math", stat: !0, forced: !(o && 1 / o(0) > 0) },
            {
              asinh: function e(t) {
                return isFinite((t = +t)) && 0 != t
                  ? t < 0
                    ? -e(-t)
                    : i(t + A(t * t + 1))
                  : t;
              },
            }
          );
        },
        3181: function (e, t, n) {
          var r = n(2109),
            o = Math.atanh,
            i = Math.log;
          r(
            { target: "Math", stat: !0, forced: !(o && 1 / o(-0) < 0) },
            {
              atanh: function (e) {
                return 0 == (e = +e) ? e : i((1 + e) / (1 - e)) / 2;
              },
            }
          );
        },
        3484: function (e, t, n) {
          var r = n(2109),
            o = n(4310),
            i = Math.abs,
            A = Math.pow;
          r(
            { target: "Math", stat: !0 },
            {
              cbrt: function (e) {
                return o((e = +e)) * A(i(e), 1 / 3);
              },
            }
          );
        },
        2388: function (e, t, n) {
          var r = n(2109),
            o = Math.floor,
            i = Math.log,
            A = Math.LOG2E;
          r(
            { target: "Math", stat: !0 },
            {
              clz32: function (e) {
                return (e >>>= 0) ? 31 - o(i(e + 0.5) * A) : 32;
              },
            }
          );
        },
        8621: function (e, t, n) {
          var r = n(2109),
            o = n(6736),
            i = Math.cosh,
            A = Math.abs,
            a = Math.E;
          r(
            { target: "Math", stat: !0, forced: !i || i(710) === 1 / 0 },
            {
              cosh: function (e) {
                var t = o(A(e) - 1) + 1;
                return (t + 1 / (t * a * a)) * (a / 2);
              },
            }
          );
        },
        403: function (e, t, n) {
          var r = n(2109),
            o = n(6736);
          r(
            { target: "Math", stat: !0, forced: o != Math.expm1 },
            { expm1: o }
          );
        },
        4755: function (e, t, n) {
          n(2109)({ target: "Math", stat: !0 }, { fround: n(6130) });
        },
        5438: function (e, t, n) {
          var r = n(2109),
            o = Math.hypot,
            i = Math.abs,
            A = Math.sqrt;
          r(
            {
              target: "Math",
              stat: !0,
              forced: !!o && o(1 / 0, NaN) !== 1 / 0,
            },
            {
              hypot: function (e, t) {
                for (
                  var n, r, o = 0, a = 0, s = arguments.length, l = 0;
                  a < s;

                )
                  l < (n = i(arguments[a++]))
                    ? ((o = o * (r = l / n) * r + 1), (l = n))
                    : (o += n > 0 ? (r = n / l) * r : n);
                return l === 1 / 0 ? 1 / 0 : l * A(o);
              },
            }
          );
        },
        332: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = Math.imul;
          r(
            {
              target: "Math",
              stat: !0,
              forced: o(function () {
                return -5 != i(4294967295, 5) || 2 != i.length;
              }),
            },
            {
              imul: function (e, t) {
                var n = 65535,
                  r = +e,
                  o = +t,
                  i = n & r,
                  A = n & o;
                return (
                  0 |
                  (i * A +
                    ((((n & (r >>> 16)) * A + i * (n & (o >>> 16))) << 16) >>>
                      0))
                );
              },
            }
          );
        },
        658: function (e, t, n) {
          var r = n(2109),
            o = Math.log,
            i = Math.LOG10E;
          r(
            { target: "Math", stat: !0 },
            {
              log10: function (e) {
                return o(e) * i;
              },
            }
          );
        },
        197: function (e, t, n) {
          n(2109)({ target: "Math", stat: !0 }, { log1p: n(6513) });
        },
        4914: function (e, t, n) {
          var r = n(2109),
            o = Math.log,
            i = Math.LN2;
          r(
            { target: "Math", stat: !0 },
            {
              log2: function (e) {
                return o(e) / i;
              },
            }
          );
        },
        2420: function (e, t, n) {
          n(2109)({ target: "Math", stat: !0 }, { sign: n(4310) });
        },
        160: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(6736),
            A = Math.abs,
            a = Math.exp,
            s = Math.E;
          r(
            {
              target: "Math",
              stat: !0,
              forced: o(function () {
                return -2e-17 != Math.sinh(-2e-17);
              }),
            },
            {
              sinh: function (e) {
                return A((e = +e)) < 1
                  ? (i(e) - i(-e)) / 2
                  : (a(e - 1) - a(-e - 1)) * (s / 2);
              },
            }
          );
        },
        970: function (e, t, n) {
          var r = n(2109),
            o = n(6736),
            i = Math.exp;
          r(
            { target: "Math", stat: !0 },
            {
              tanh: function (e) {
                var t = o((e = +e)),
                  n = o(-e);
                return t == 1 / 0
                  ? 1
                  : n == 1 / 0
                  ? -1
                  : (t - n) / (i(e) + i(-e));
              },
            }
          );
        },
        2703: function (e, t, n) {
          n(8003)(Math, "Math", !0);
        },
        3689: function (e, t, n) {
          var r = n(2109),
            o = Math.ceil,
            i = Math.floor;
          r(
            { target: "Math", stat: !0 },
            {
              trunc: function (e) {
                return (e > 0 ? i : o)(e);
              },
            }
          );
        },
        9653: function (e, t, n) {
          "use strict";
          var r = n(9781),
            o = n(7854),
            i = n(4705),
            A = n(1320),
            a = n(6656),
            s = n(4326),
            l = n(9587),
            c = n(2190),
            u = n(7593),
            f = n(7293),
            p = n(30),
            d = n(8006).f,
            g = n(1236).f,
            h = n(3070).f,
            v = n(3111).trim,
            m = "Number",
            C = o.Number,
            y = C.prototype,
            b = s(p(y)) == m,
            w = function (e) {
              if (c(e))
                throw TypeError("Cannot convert a Symbol value to a number");
              var t,
                n,
                r,
                o,
                i,
                A,
                a,
                s,
                l = u(e, "number");
              if ("string" == typeof l && l.length > 2)
                if (43 === (t = (l = v(l)).charCodeAt(0)) || 45 === t) {
                  if (88 === (n = l.charCodeAt(2)) || 120 === n) return NaN;
                } else if (48 === t) {
                  switch (l.charCodeAt(1)) {
                    case 66:
                    case 98:
                      (r = 2), (o = 49);
                      break;
                    case 79:
                    case 111:
                      (r = 8), (o = 55);
                      break;
                    default:
                      return +l;
                  }
                  for (A = (i = l.slice(2)).length, a = 0; a < A; a++)
                    if ((s = i.charCodeAt(a)) < 48 || s > o) return NaN;
                  return parseInt(i, r);
                }
              return +l;
            };
          if (i(m, !C(" 0o1") || !C("0b1") || C("+0x1"))) {
            for (
              var E,
                B = function (e) {
                  var t = arguments.length < 1 ? 0 : e,
                    n = this;
                  return n instanceof B &&
                    (b
                      ? f(function () {
                          y.valueOf.call(n);
                        })
                      : s(n) != m)
                    ? l(new C(w(t)), n, B)
                    : w(t);
                },
                x = r
                  ? d(C)
                  : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                      ","
                    ),
                k = 0;
              x.length > k;
              k++
            )
              a(C, (E = x[k])) && !a(B, E) && h(B, E, g(C, E));
            (B.prototype = y), (y.constructor = B), A(o, m, B);
          }
        },
        3299: function (e, t, n) {
          n(2109)(
            { target: "Number", stat: !0 },
            { EPSILON: Math.pow(2, -52) }
          );
        },
        5192: function (e, t, n) {
          n(2109)({ target: "Number", stat: !0 }, { isFinite: n(7023) });
        },
        3161: function (e, t, n) {
          n(2109)({ target: "Number", stat: !0 }, { isInteger: n(8730) });
        },
        4048: function (e, t, n) {
          n(2109)(
            { target: "Number", stat: !0 },
            {
              isNaN: function (e) {
                return e != e;
              },
            }
          );
        },
        8285: function (e, t, n) {
          var r = n(2109),
            o = n(8730),
            i = Math.abs;
          r(
            { target: "Number", stat: !0 },
            {
              isSafeInteger: function (e) {
                return o(e) && i(e) <= 9007199254740991;
              },
            }
          );
        },
        4363: function (e, t, n) {
          n(2109)(
            { target: "Number", stat: !0 },
            { MAX_SAFE_INTEGER: 9007199254740991 }
          );
        },
        5994: function (e, t, n) {
          n(2109)(
            { target: "Number", stat: !0 },
            { MIN_SAFE_INTEGER: -9007199254740991 }
          );
        },
        1874: function (e, t, n) {
          var r = n(2109),
            o = n(2814);
          r(
            { target: "Number", stat: !0, forced: Number.parseFloat != o },
            { parseFloat: o }
          );
        },
        9494: function (e, t, n) {
          var r = n(2109),
            o = n(3009);
          r(
            { target: "Number", stat: !0, forced: Number.parseInt != o },
            { parseInt: o }
          );
        },
        6977: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9958),
            i = n(863),
            A = n(8415),
            a = n(7293),
            s = (1).toFixed,
            l = Math.floor,
            c = function (e, t, n) {
              return 0 === t
                ? n
                : t % 2 == 1
                ? c(e, t - 1, n * e)
                : c(e * e, t / 2, n);
            },
            u = function (e, t, n) {
              for (var r = -1, o = n; ++r < 6; )
                (o += t * e[r]), (e[r] = o % 1e7), (o = l(o / 1e7));
            },
            f = function (e, t) {
              for (var n = 6, r = 0; --n >= 0; )
                (r += e[n]), (e[n] = l(r / t)), (r = (r % t) * 1e7);
            },
            p = function (e) {
              for (var t = 6, n = ""; --t >= 0; )
                if ("" !== n || 0 === t || 0 !== e[t]) {
                  var r = String(e[t]);
                  n = "" === n ? r : n + A.call("0", 7 - r.length) + r;
                }
              return n;
            };
          r(
            {
              target: "Number",
              proto: !0,
              forced:
                (s &&
                  ("0.000" !== (8e-5).toFixed(3) ||
                    "1" !== (0.9).toFixed(0) ||
                    "1.25" !== (1.255).toFixed(2) ||
                    "1000000000000000128" !==
                      (0xde0b6b3a7640080).toFixed(0))) ||
                !a(function () {
                  s.call({});
                }),
            },
            {
              toFixed: function (e) {
                var t,
                  n,
                  r,
                  a,
                  s = i(this),
                  l = o(e),
                  d = [0, 0, 0, 0, 0, 0],
                  g = "",
                  h = "0";
                if (l < 0 || l > 20)
                  throw RangeError("Incorrect fraction digits");
                if (s != s) return "NaN";
                if (s <= -1e21 || s >= 1e21) return String(s);
                if ((s < 0 && ((g = "-"), (s = -s)), s > 1e-21))
                  if (
                    ((n =
                      (t =
                        (function (e) {
                          for (var t = 0, n = e; n >= 4096; )
                            (t += 12), (n /= 4096);
                          for (; n >= 2; ) (t += 1), (n /= 2);
                          return t;
                        })(s * c(2, 69, 1)) - 69) < 0
                        ? s * c(2, -t, 1)
                        : s / c(2, t, 1)),
                    (n *= 4503599627370496),
                    (t = 52 - t) > 0)
                  ) {
                    for (u(d, 0, n), r = l; r >= 7; ) u(d, 1e7, 0), (r -= 7);
                    for (u(d, c(10, r, 1), 0), r = t - 1; r >= 23; )
                      f(d, 1 << 23), (r -= 23);
                    f(d, 1 << r), u(d, 1, 1), f(d, 2), (h = p(d));
                  } else
                    u(d, 0, n), u(d, 1 << -t, 0), (h = p(d) + A.call("0", l));
                return l > 0
                  ? g +
                      ((a = h.length) <= l
                        ? "0." + A.call("0", l - a) + h
                        : h.slice(0, a - l) + "." + h.slice(a - l))
                  : g + h;
              },
            }
          );
        },
        5147: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7293),
            i = n(863),
            A = (1).toPrecision;
          r(
            {
              target: "Number",
              proto: !0,
              forced:
                o(function () {
                  return "1" !== A.call(1, void 0);
                }) ||
                !o(function () {
                  A.call({});
                }),
            },
            {
              toPrecision: function (e) {
                return void 0 === e ? A.call(i(this)) : A.call(i(this), e);
              },
            }
          );
        },
        9601: function (e, t, n) {
          var r = n(2109),
            o = n(1574);
          r(
            { target: "Object", stat: !0, forced: Object.assign !== o },
            { assign: o }
          );
        },
        8011: function (e, t, n) {
          n(2109)(
            { target: "Object", stat: !0, sham: !n(9781) },
            { create: n(30) }
          );
        },
        9595: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9781),
            i = n(9026),
            A = n(7908),
            a = n(3099),
            s = n(3070);
          o &&
            r(
              { target: "Object", proto: !0, forced: i },
              {
                __defineGetter__: function (e, t) {
                  s.f(A(this), e, {
                    get: a(t),
                    enumerable: !0,
                    configurable: !0,
                  });
                },
              }
            );
        },
        3321: function (e, t, n) {
          var r = n(2109),
            o = n(9781);
          r(
            { target: "Object", stat: !0, forced: !o, sham: !o },
            { defineProperties: n(6048) }
          );
        },
        9070: function (e, t, n) {
          var r = n(2109),
            o = n(9781);
          r(
            { target: "Object", stat: !0, forced: !o, sham: !o },
            { defineProperty: n(3070).f }
          );
        },
        5500: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9781),
            i = n(9026),
            A = n(7908),
            a = n(3099),
            s = n(3070);
          o &&
            r(
              { target: "Object", proto: !0, forced: i },
              {
                __defineSetter__: function (e, t) {
                  s.f(A(this), e, {
                    set: a(t),
                    enumerable: !0,
                    configurable: !0,
                  });
                },
              }
            );
        },
        9720: function (e, t, n) {
          var r = n(2109),
            o = n(4699).entries;
          r(
            { target: "Object", stat: !0 },
            {
              entries: function (e) {
                return o(e);
              },
            }
          );
        },
        3371: function (e, t, n) {
          var r = n(2109),
            o = n(6677),
            i = n(7293),
            A = n(111),
            a = n(2423).onFreeze,
            s = Object.freeze;
          r(
            {
              target: "Object",
              stat: !0,
              forced: i(function () {
                s(1);
              }),
              sham: !o,
            },
            {
              freeze: function (e) {
                return s && A(e) ? s(a(e)) : e;
              },
            }
          );
        },
        8559: function (e, t, n) {
          var r = n(2109),
            o = n(408),
            i = n(6135);
          r(
            { target: "Object", stat: !0 },
            {
              fromEntries: function (e) {
                var t = {};
                return (
                  o(
                    e,
                    function (e, n) {
                      i(t, e, n);
                    },
                    { AS_ENTRIES: !0 }
                  ),
                  t
                );
              },
            }
          );
        },
        5003: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(5656),
            A = n(1236).f,
            a = n(9781),
            s = o(function () {
              A(1);
            });
          r(
            { target: "Object", stat: !0, forced: !a || s, sham: !a },
            {
              getOwnPropertyDescriptor: function (e, t) {
                return A(i(e), t);
              },
            }
          );
        },
        9337: function (e, t, n) {
          var r = n(2109),
            o = n(9781),
            i = n(3887),
            A = n(5656),
            a = n(1236),
            s = n(6135);
          r(
            { target: "Object", stat: !0, sham: !o },
            {
              getOwnPropertyDescriptors: function (e) {
                for (
                  var t, n, r = A(e), o = a.f, l = i(r), c = {}, u = 0;
                  l.length > u;

                )
                  void 0 !== (n = o(r, (t = l[u++]))) && s(c, t, n);
                return c;
              },
            }
          );
        },
        6210: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(1156).f;
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                return !Object.getOwnPropertyNames(1);
              }),
            },
            { getOwnPropertyNames: i }
          );
        },
        489: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(7908),
            A = n(9518),
            a = n(8544);
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                A(1);
              }),
              sham: !a,
            },
            {
              getPrototypeOf: function (e) {
                return A(i(e));
              },
            }
          );
        },
        1825: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(111),
            A = Object.isExtensible;
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                A(1);
              }),
            },
            {
              isExtensible: function (e) {
                return !!i(e) && (!A || A(e));
              },
            }
          );
        },
        8410: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(111),
            A = Object.isFrozen;
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                A(1);
              }),
            },
            {
              isFrozen: function (e) {
                return !i(e) || (!!A && A(e));
              },
            }
          );
        },
        2200: function (e, t, n) {
          var r = n(2109),
            o = n(7293),
            i = n(111),
            A = Object.isSealed;
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                A(1);
              }),
            },
            {
              isSealed: function (e) {
                return !i(e) || (!!A && A(e));
              },
            }
          );
        },
        3304: function (e, t, n) {
          n(2109)({ target: "Object", stat: !0 }, { is: n(1150) });
        },
        7941: function (e, t, n) {
          var r = n(2109),
            o = n(7908),
            i = n(1956);
          r(
            {
              target: "Object",
              stat: !0,
              forced: n(7293)(function () {
                i(1);
              }),
            },
            {
              keys: function (e) {
                return i(o(e));
              },
            }
          );
        },
        4869: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9781),
            i = n(9026),
            A = n(7908),
            a = n(4948),
            s = n(9518),
            l = n(1236).f;
          o &&
            r(
              { target: "Object", proto: !0, forced: i },
              {
                __lookupGetter__: function (e) {
                  var t,
                    n = A(this),
                    r = a(e);
                  do {
                    if ((t = l(n, r))) return t.get;
                  } while ((n = s(n)));
                },
              }
            );
        },
        3952: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9781),
            i = n(9026),
            A = n(7908),
            a = n(4948),
            s = n(9518),
            l = n(1236).f;
          o &&
            r(
              { target: "Object", proto: !0, forced: i },
              {
                __lookupSetter__: function (e) {
                  var t,
                    n = A(this),
                    r = a(e);
                  do {
                    if ((t = l(n, r))) return t.set;
                  } while ((n = s(n)));
                },
              }
            );
        },
        7227: function (e, t, n) {
          var r = n(2109),
            o = n(111),
            i = n(2423).onFreeze,
            A = n(6677),
            a = n(7293),
            s = Object.preventExtensions;
          r(
            {
              target: "Object",
              stat: !0,
              forced: a(function () {
                s(1);
              }),
              sham: !A,
            },
            {
              preventExtensions: function (e) {
                return s && o(e) ? s(i(e)) : e;
              },
            }
          );
        },
        514: function (e, t, n) {
          var r = n(2109),
            o = n(111),
            i = n(2423).onFreeze,
            A = n(6677),
            a = n(7293),
            s = Object.seal;
          r(
            {
              target: "Object",
              stat: !0,
              forced: a(function () {
                s(1);
              }),
              sham: !A,
            },
            {
              seal: function (e) {
                return s && o(e) ? s(i(e)) : e;
              },
            }
          );
        },
        8304: function (e, t, n) {
          n(2109)({ target: "Object", stat: !0 }, { setPrototypeOf: n(7674) });
        },
        1539: function (e, t, n) {
          var r = n(1694),
            o = n(1320),
            i = n(288);
          r || o(Object.prototype, "toString", i, { unsafe: !0 });
        },
        6833: function (e, t, n) {
          var r = n(2109),
            o = n(4699).values;
          r(
            { target: "Object", stat: !0 },
            {
              values: function (e) {
                return o(e);
              },
            }
          );
        },
        4678: function (e, t, n) {
          var r = n(2109),
            o = n(2814);
          r({ global: !0, forced: parseFloat != o }, { parseFloat: o });
        },
        1058: function (e, t, n) {
          var r = n(2109),
            o = n(3009);
          r({ global: !0, forced: parseInt != o }, { parseInt: o });
        },
        7922: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3099),
            i = n(8523),
            A = n(2534),
            a = n(408);
          r(
            { target: "Promise", stat: !0 },
            {
              allSettled: function (e) {
                var t = this,
                  n = i.f(t),
                  r = n.resolve,
                  s = n.reject,
                  l = A(function () {
                    var n = o(t.resolve),
                      i = [],
                      A = 0,
                      s = 1;
                    a(e, function (e) {
                      var o = A++,
                        a = !1;
                      i.push(void 0),
                        s++,
                        n.call(t, e).then(
                          function (e) {
                            a ||
                              ((a = !0),
                              (i[o] = { status: "fulfilled", value: e }),
                              --s || r(i));
                          },
                          function (e) {
                            a ||
                              ((a = !0),
                              (i[o] = { status: "rejected", reason: e }),
                              --s || r(i));
                          }
                        );
                    }),
                      --s || r(i);
                  });
                return l.error && s(l.value), n.promise;
              },
            }
          );
        },
        4668: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3099),
            i = n(5005),
            A = n(8523),
            a = n(2534),
            s = n(408),
            l = "No one promise resolved";
          r(
            { target: "Promise", stat: !0 },
            {
              any: function (e) {
                var t = this,
                  n = A.f(t),
                  r = n.resolve,
                  c = n.reject,
                  u = a(function () {
                    var n = o(t.resolve),
                      A = [],
                      a = 0,
                      u = 1,
                      f = !1;
                    s(e, function (e) {
                      var o = a++,
                        s = !1;
                      A.push(void 0),
                        u++,
                        n.call(t, e).then(
                          function (e) {
                            s || f || ((f = !0), r(e));
                          },
                          function (e) {
                            s ||
                              f ||
                              ((s = !0),
                              (A[o] = e),
                              --u || c(new (i("AggregateError"))(A, l)));
                          }
                        );
                    }),
                      --u || c(new (i("AggregateError"))(A, l));
                  });
                return u.error && c(u.value), n.promise;
              },
            }
          );
        },
        7727: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1913),
            i = n(3366),
            A = n(7293),
            a = n(5005),
            s = n(6707),
            l = n(9478),
            c = n(1320);
          if (
            (r(
              {
                target: "Promise",
                proto: !0,
                real: !0,
                forced:
                  !!i &&
                  A(function () {
                    i.prototype.finally.call(
                      { then: function () {} },
                      function () {}
                    );
                  }),
              },
              {
                finally: function (e) {
                  var t = s(this, a("Promise")),
                    n = "function" == typeof e;
                  return this.then(
                    n
                      ? function (n) {
                          return l(t, e()).then(function () {
                            return n;
                          });
                        }
                      : e,
                    n
                      ? function (n) {
                          return l(t, e()).then(function () {
                            throw n;
                          });
                        }
                      : e
                  );
                },
              }
            ),
            !o && "function" == typeof i)
          ) {
            var u = a("Promise").prototype.finally;
            i.prototype.finally !== u &&
              c(i.prototype, "finally", u, { unsafe: !0 });
          }
        },
        8674: function (e, t, n) {
          "use strict";
          var r,
            o,
            i,
            A,
            a = n(2109),
            s = n(1913),
            l = n(7854),
            c = n(5005),
            u = n(3366),
            f = n(1320),
            p = n(2248),
            d = n(7674),
            g = n(8003),
            h = n(6340),
            v = n(111),
            m = n(3099),
            C = n(5787),
            y = n(2788),
            b = n(408),
            w = n(7072),
            E = n(6707),
            B = n(261).set,
            x = n(5948),
            k = n(9478),
            I = n(842),
            S = n(8523),
            T = n(2534),
            L = n(9909),
            R = n(4705),
            Q = n(5112),
            M = n(7871),
            O = n(5268),
            D = n(7392),
            F = Q("species"),
            P = "Promise",
            U = L.get,
            N = L.set,
            W = L.getterFor(P),
            j = u && u.prototype,
            Y = u,
            G = j,
            z = l.TypeError,
            V = l.document,
            _ = l.process,
            H = S.f,
            J = H,
            Z = !!(V && V.createEvent && l.dispatchEvent),
            K = "function" == typeof PromiseRejectionEvent,
            X = "unhandledrejection",
            q = !1,
            $ = R(P, function () {
              var e = y(Y),
                t = e !== String(Y);
              if (!t && 66 === D) return !0;
              if (s && !G.finally) return !0;
              if (D >= 51 && /native code/.test(e)) return !1;
              var n = new Y(function (e) {
                  e(1);
                }),
                r = function (e) {
                  e(
                    function () {},
                    function () {}
                  );
                };
              return (
                ((n.constructor = {})[F] = r),
                !(q = n.then(function () {}) instanceof r) || (!t && M && !K)
              );
            }),
            ee =
              $ ||
              !w(function (e) {
                Y.all(e).catch(function () {});
              }),
            te = function (e) {
              var t;
              return !(!v(e) || "function" != typeof (t = e.then)) && t;
            },
            ne = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                x(function () {
                  for (
                    var r = e.value, o = 1 == e.state, i = 0;
                    n.length > i;

                  ) {
                    var A,
                      a,
                      s,
                      l = n[i++],
                      c = o ? l.ok : l.fail,
                      u = l.resolve,
                      f = l.reject,
                      p = l.domain;
                    try {
                      c
                        ? (o || (2 === e.rejection && Ae(e), (e.rejection = 1)),
                          !0 === c
                            ? (A = r)
                            : (p && p.enter(),
                              (A = c(r)),
                              p && (p.exit(), (s = !0))),
                          A === l.promise
                            ? f(z("Promise-chain cycle"))
                            : (a = te(A))
                            ? a.call(A, u, f)
                            : u(A))
                        : f(r);
                    } catch (e) {
                      p && !s && p.exit(), f(e);
                    }
                  }
                  (e.reactions = []),
                    (e.notified = !1),
                    t && !e.rejection && oe(e);
                });
              }
            },
            re = function (e, t, n) {
              var r, o;
              Z
                ? (((r = V.createEvent("Event")).promise = t),
                  (r.reason = n),
                  r.initEvent(e, !1, !0),
                  l.dispatchEvent(r))
                : (r = { promise: t, reason: n }),
                !K && (o = l["on" + e])
                  ? o(r)
                  : e === X && I("Unhandled promise rejection", n);
            },
            oe = function (e) {
              B.call(l, function () {
                var t,
                  n = e.facade,
                  r = e.value;
                if (
                  ie(e) &&
                  ((t = T(function () {
                    O ? _.emit("unhandledRejection", r, n) : re(X, n, r);
                  })),
                  (e.rejection = O || ie(e) ? 2 : 1),
                  t.error)
                )
                  throw t.value;
              });
            },
            ie = function (e) {
              return 1 !== e.rejection && !e.parent;
            },
            Ae = function (e) {
              B.call(l, function () {
                var t = e.facade;
                O
                  ? _.emit("rejectionHandled", t)
                  : re("rejectionhandled", t, e.value);
              });
            },
            ae = function (e, t, n) {
              return function (r) {
                e(t, r, n);
              };
            },
            se = function (e, t, n) {
              e.done ||
                ((e.done = !0),
                n && (e = n),
                (e.value = t),
                (e.state = 2),
                ne(e, !0));
            },
            le = function (e, t, n) {
              if (!e.done) {
                (e.done = !0), n && (e = n);
                try {
                  if (e.facade === t)
                    throw z("Promise can't be resolved itself");
                  var r = te(t);
                  r
                    ? x(function () {
                        var n = { done: !1 };
                        try {
                          r.call(t, ae(le, n, e), ae(se, n, e));
                        } catch (t) {
                          se(n, t, e);
                        }
                      })
                    : ((e.value = t), (e.state = 1), ne(e, !1));
                } catch (t) {
                  se({ done: !1 }, t, e);
                }
              }
            };
          if (
            $ &&
            ((G = (Y = function (e) {
              C(this, Y, P), m(e), r.call(this);
              var t = U(this);
              try {
                e(ae(le, t), ae(se, t));
              } catch (e) {
                se(t, e);
              }
            }).prototype),
            ((r = function (e) {
              N(this, {
                type: P,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0,
              });
            }).prototype = p(G, {
              then: function (e, t) {
                var n = W(this),
                  r = H(E(this, Y));
                return (
                  (r.ok = "function" != typeof e || e),
                  (r.fail = "function" == typeof t && t),
                  (r.domain = O ? _.domain : void 0),
                  (n.parent = !0),
                  n.reactions.push(r),
                  0 != n.state && ne(n, !1),
                  r.promise
                );
              },
              catch: function (e) {
                return this.then(void 0, e);
              },
            })),
            (o = function () {
              var e = new r(),
                t = U(e);
              (this.promise = e),
                (this.resolve = ae(le, t)),
                (this.reject = ae(se, t));
            }),
            (S.f = H =
              function (e) {
                return e === Y || e === i ? new o(e) : J(e);
              }),
            !s && "function" == typeof u && j !== Object.prototype)
          ) {
            (A = j.then),
              q ||
                (f(
                  j,
                  "then",
                  function (e, t) {
                    var n = this;
                    return new Y(function (e, t) {
                      A.call(n, e, t);
                    }).then(e, t);
                  },
                  { unsafe: !0 }
                ),
                f(j, "catch", G.catch, { unsafe: !0 }));
            try {
              delete j.constructor;
            } catch (e) {}
            d && d(j, G);
          }
          a({ global: !0, wrap: !0, forced: $ }, { Promise: Y }),
            g(Y, P, !1, !0),
            h(P),
            (i = c(P)),
            a(
              { target: P, stat: !0, forced: $ },
              {
                reject: function (e) {
                  var t = H(this);
                  return t.reject.call(void 0, e), t.promise;
                },
              }
            ),
            a(
              { target: P, stat: !0, forced: s || $ },
              {
                resolve: function (e) {
                  return k(s && this === i ? Y : this, e);
                },
              }
            ),
            a(
              { target: P, stat: !0, forced: ee },
              {
                all: function (e) {
                  var t = this,
                    n = H(t),
                    r = n.resolve,
                    o = n.reject,
                    i = T(function () {
                      var n = m(t.resolve),
                        i = [],
                        A = 0,
                        a = 1;
                      b(e, function (e) {
                        var s = A++,
                          l = !1;
                        i.push(void 0),
                          a++,
                          n.call(t, e).then(function (e) {
                            l || ((l = !0), (i[s] = e), --a || r(i));
                          }, o);
                      }),
                        --a || r(i);
                    });
                  return i.error && o(i.value), n.promise;
                },
                race: function (e) {
                  var t = this,
                    n = H(t),
                    r = n.reject,
                    o = T(function () {
                      var o = m(t.resolve);
                      b(e, function (e) {
                        o.call(t, e).then(n.resolve, r);
                      });
                    });
                  return o.error && r(o.value), n.promise;
                },
              }
            );
        },
        224: function (e, t, n) {
          var r = n(2109),
            o = n(5005),
            i = n(3099),
            A = n(9670),
            a = n(7293),
            s = o("Reflect", "apply"),
            l = Function.apply;
          r(
            {
              target: "Reflect",
              stat: !0,
              forced: !a(function () {
                s(function () {});
              }),
            },
            {
              apply: function (e, t, n) {
                return i(e), A(n), s ? s(e, t, n) : l.call(e, t, n);
              },
            }
          );
        },
        2419: function (e, t, n) {
          var r = n(2109),
            o = n(5005),
            i = n(3099),
            A = n(9670),
            a = n(111),
            s = n(30),
            l = n(7065),
            c = n(7293),
            u = o("Reflect", "construct"),
            f = c(function () {
              function e() {}
              return !(u(function () {}, [], e) instanceof e);
            }),
            p = !c(function () {
              u(function () {});
            }),
            d = f || p;
          r(
            { target: "Reflect", stat: !0, forced: d, sham: d },
            {
              construct: function (e, t) {
                i(e), A(t);
                var n = arguments.length < 3 ? e : i(arguments[2]);
                if (p && !f) return u(e, t, n);
                if (e == n) {
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                  }
                  var r = [null];
                  return r.push.apply(r, t), new (l.apply(e, r))();
                }
                var o = n.prototype,
                  c = s(a(o) ? o : Object.prototype),
                  d = Function.apply.call(e, c, t);
                return a(d) ? d : c;
              },
            }
          );
        },
        9596: function (e, t, n) {
          var r = n(2109),
            o = n(9781),
            i = n(9670),
            A = n(4948),
            a = n(3070);
          r(
            {
              target: "Reflect",
              stat: !0,
              forced: n(7293)(function () {
                Reflect.defineProperty(a.f({}, 1, { value: 1 }), 1, {
                  value: 2,
                });
              }),
              sham: !o,
            },
            {
              defineProperty: function (e, t, n) {
                i(e);
                var r = A(t);
                i(n);
                try {
                  return a.f(e, r, n), !0;
                } catch (e) {
                  return !1;
                }
              },
            }
          );
        },
        2586: function (e, t, n) {
          var r = n(2109),
            o = n(9670),
            i = n(1236).f;
          r(
            { target: "Reflect", stat: !0 },
            {
              deleteProperty: function (e, t) {
                var n = i(o(e), t);
                return !(n && !n.configurable) && delete e[t];
              },
            }
          );
        },
        5683: function (e, t, n) {
          var r = n(2109),
            o = n(9781),
            i = n(9670),
            A = n(1236);
          r(
            { target: "Reflect", stat: !0, sham: !o },
            {
              getOwnPropertyDescriptor: function (e, t) {
                return A.f(i(e), t);
              },
            }
          );
        },
        9361: function (e, t, n) {
          var r = n(2109),
            o = n(9670),
            i = n(9518);
          r(
            { target: "Reflect", stat: !0, sham: !n(8544) },
            {
              getPrototypeOf: function (e) {
                return i(o(e));
              },
            }
          );
        },
        4819: function (e, t, n) {
          var r = n(2109),
            o = n(111),
            i = n(9670),
            A = n(5032),
            a = n(1236),
            s = n(9518);
          r(
            { target: "Reflect", stat: !0 },
            {
              get: function e(t, n) {
                var r,
                  l,
                  c = arguments.length < 3 ? t : arguments[2];
                return i(t) === c
                  ? t[n]
                  : (r = a.f(t, n))
                  ? A(r)
                    ? r.value
                    : void 0 === r.get
                    ? void 0
                    : r.get.call(c)
                  : o((l = s(t)))
                  ? e(l, n, c)
                  : void 0;
              },
            }
          );
        },
        1037: function (e, t, n) {
          n(2109)(
            { target: "Reflect", stat: !0 },
            {
              has: function (e, t) {
                return t in e;
              },
            }
          );
        },
        5898: function (e, t, n) {
          var r = n(2109),
            o = n(9670),
            i = Object.isExtensible;
          r(
            { target: "Reflect", stat: !0 },
            {
              isExtensible: function (e) {
                return o(e), !i || i(e);
              },
            }
          );
        },
        7556: function (e, t, n) {
          n(2109)({ target: "Reflect", stat: !0 }, { ownKeys: n(3887) });
        },
        4361: function (e, t, n) {
          var r = n(2109),
            o = n(5005),
            i = n(9670);
          r(
            { target: "Reflect", stat: !0, sham: !n(6677) },
            {
              preventExtensions: function (e) {
                i(e);
                try {
                  var t = o("Object", "preventExtensions");
                  return t && t(e), !0;
                } catch (e) {
                  return !1;
                }
              },
            }
          );
        },
        9532: function (e, t, n) {
          var r = n(2109),
            o = n(9670),
            i = n(6077),
            A = n(7674);
          A &&
            r(
              { target: "Reflect", stat: !0 },
              {
                setPrototypeOf: function (e, t) {
                  o(e), i(t);
                  try {
                    return A(e, t), !0;
                  } catch (e) {
                    return !1;
                  }
                },
              }
            );
        },
        3593: function (e, t, n) {
          var r = n(2109),
            o = n(9670),
            i = n(111),
            A = n(5032),
            a = n(7293),
            s = n(3070),
            l = n(1236),
            c = n(9518),
            u = n(9114);
          r(
            {
              target: "Reflect",
              stat: !0,
              forced: a(function () {
                var e = function () {},
                  t = s.f(new e(), "a", { configurable: !0 });
                return !1 !== Reflect.set(e.prototype, "a", 1, t);
              }),
            },
            {
              set: function e(t, n, r) {
                var a,
                  f,
                  p,
                  d = arguments.length < 4 ? t : arguments[3],
                  g = l.f(o(t), n);
                if (!g) {
                  if (i((f = c(t)))) return e(f, n, r, d);
                  g = u(0);
                }
                if (A(g)) {
                  if (!1 === g.writable || !i(d)) return !1;
                  if ((a = l.f(d, n))) {
                    if (a.get || a.set || !1 === a.writable) return !1;
                    (a.value = r), s.f(d, n, a);
                  } else s.f(d, n, u(0, r));
                } else {
                  if (void 0 === (p = g.set)) return !1;
                  p.call(d, r);
                }
                return !0;
              },
            }
          );
        },
        1299: function (e, t, n) {
          var r = n(2109),
            o = n(7854),
            i = n(8003);
          r({ global: !0 }, { Reflect: {} }), i(o.Reflect, "Reflect", !0);
        },
        4603: function (e, t, n) {
          var r = n(9781),
            o = n(7854),
            i = n(4705),
            A = n(9587),
            a = n(8880),
            s = n(3070).f,
            l = n(8006).f,
            c = n(7850),
            u = n(1340),
            f = n(7066),
            p = n(2999),
            d = n(1320),
            g = n(7293),
            h = n(6656),
            v = n(9909).enforce,
            m = n(6340),
            C = n(5112),
            y = n(9441),
            b = n(8173),
            w = C("match"),
            E = o.RegExp,
            B = E.prototype,
            x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            k = /a/g,
            I = /a/g,
            S = new E(k) !== k,
            T = p.UNSUPPORTED_Y;
          if (
            i(
              "RegExp",
              r &&
                (!S ||
                  T ||
                  y ||
                  b ||
                  g(function () {
                    return (
                      (I[w] = !1), E(k) != k || E(I) == I || "/a/i" != E(k, "i")
                    );
                  }))
            )
          ) {
            for (
              var L = function (e, t) {
                  var n,
                    r,
                    o,
                    i,
                    s,
                    l,
                    p = this instanceof L,
                    d = c(e),
                    g = void 0 === t,
                    m = [],
                    C = e;
                  if (!p && d && g && e.constructor === L) return e;
                  if (
                    ((d || e instanceof L) &&
                      ((e = e.source),
                      g && (t = ("flags" in C) ? C.flags : f.call(C))),
                    (e = void 0 === e ? "" : u(e)),
                    (t = void 0 === t ? "" : u(t)),
                    (C = e),
                    y &&
                      ("dotAll" in k) &&
                      (r = !!t && t.indexOf("s") > -1) &&
                      (t = t.replace(/s/g, "")),
                    (n = t),
                    T &&
                      ("sticky" in k) &&
                      (o = !!t && t.indexOf("y") > -1) &&
                      (t = t.replace(/y/g, "")),
                    b &&
                      ((e = (i = (function (e) {
                        for (
                          var t,
                            n = e.length,
                            r = 0,
                            o = "",
                            i = [],
                            A = {},
                            a = !1,
                            s = !1,
                            l = 0,
                            c = "";
                          r <= n;
                          r++
                        ) {
                          if ("\\" === (t = e.charAt(r))) t += e.charAt(++r);
                          else if ("]" === t) a = !1;
                          else if (!a)
                            switch (!0) {
                              case "[" === t:
                                a = !0;
                                break;
                              case "(" === t:
                                x.test(e.slice(r + 1)) && ((r += 2), (s = !0)),
                                  (o += t),
                                  l++;
                                continue;
                              case ">" === t && s:
                                if ("" === c || h(A, c))
                                  throw new SyntaxError(
                                    "Invalid capture group name"
                                  );
                                (A[c] = !0), i.push([c, l]), (s = !1), (c = "");
                                continue;
                            }
                          s ? (c += t) : (o += t);
                        }
                        return [o, i];
                      })(e))[0]),
                      (m = i[1])),
                    (s = A(E(e, t), p ? this : B, L)),
                    (r || o || m.length) &&
                      ((l = v(s)),
                      r &&
                        ((l.dotAll = !0),
                        (l.raw = L(
                          (function (e) {
                            for (
                              var t, n = e.length, r = 0, o = "", i = !1;
                              r <= n;
                              r++
                            )
                              "\\" !== (t = e.charAt(r))
                                ? i || "." !== t
                                  ? ("[" === t
                                      ? (i = !0)
                                      : "]" === t && (i = !1),
                                    (o += t))
                                  : (o += "[\\s\\S]")
                                : (o += t + e.charAt(++r));
                            return o;
                          })(e),
                          n
                        ))),
                      o && (l.sticky = !0),
                      m.length && (l.groups = m)),
                    e !== C)
                  )
                    try {
                      a(s, "source", "" === C ? "(?:)" : C);
                    } catch (e) {}
                  return s;
                },
                R = function (e) {
                  (e in L) ||
                    s(L, e, {
                      configurable: !0,
                      get: function () {
                        return E[e];
                      },
                      set: function (t) {
                        E[e] = t;
                      },
                    });
                },
                Q = l(E),
                M = 0;
              Q.length > M;

            )
              R(Q[M++]);
            (B.constructor = L), (L.prototype = B), d(o, "RegExp", L);
          }
          m("RegExp");
        },
        8450: function (e, t, n) {
          var r = n(9781),
            o = n(9441),
            i = n(3070).f,
            A = n(9909).get,
            a = RegExp.prototype;
          r &&
            o &&
            i(a, "dotAll", {
              configurable: !0,
              get: function () {
                if (this !== a) {
                  if (this instanceof RegExp) return !!A(this).dotAll;
                  throw TypeError("Incompatible receiver, RegExp required");
                }
              },
            });
        },
        4916: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(2261);
          r(
            { target: "RegExp", proto: !0, forced: /./.exec !== o },
            { exec: o }
          );
        },
        2087: function (e, t, n) {
          var r = n(9781),
            o = n(3070),
            i = n(7066),
            A = n(7293);
          r &&
            A(function () {
              return (
                "sy" !==
                Object.getOwnPropertyDescriptor(
                  RegExp.prototype,
                  "flags"
                ).get.call({ dotAll: !0, sticky: !0 })
              );
            }) &&
            o.f(RegExp.prototype, "flags", { configurable: !0, get: i });
        },
        8386: function (e, t, n) {
          var r = n(9781),
            o = n(2999).UNSUPPORTED_Y,
            i = n(3070).f,
            A = n(9909).get,
            a = RegExp.prototype;
          r &&
            o &&
            i(a, "sticky", {
              configurable: !0,
              get: function () {
                if (this !== a) {
                  if (this instanceof RegExp) return !!A(this).sticky;
                  throw TypeError("Incompatible receiver, RegExp required");
                }
              },
            });
        },
        7601: function (e, t, n) {
          "use strict";
          n(4916);
          var r,
            o,
            i = n(2109),
            A = n(111),
            a =
              ((r = !1),
              ((o = /[ac]/).exec = function () {
                return (r = !0), /./.exec.apply(this, arguments);
              }),
              !0 === o.test("abc") && r),
            s = /./.test;
          i(
            { target: "RegExp", proto: !0, forced: !a },
            {
              test: function (e) {
                if ("function" != typeof this.exec) return s.call(this, e);
                var t = this.exec(e);
                if (null !== t && !A(t))
                  throw new Error(
                    "RegExp exec method returned something other than an Object or null"
                  );
                return !!t;
              },
            }
          );
        },
        9714: function (e, t, n) {
          "use strict";
          var r = n(1320),
            o = n(9670),
            i = n(1340),
            A = n(7293),
            a = n(7066),
            s = "toString",
            l = RegExp.prototype,
            c = l.toString,
            u = A(function () {
              return "/a/b" != c.call({ source: "a", flags: "b" });
            }),
            f = c.name != s;
          (u || f) &&
            r(
              RegExp.prototype,
              s,
              function () {
                var e = o(this),
                  t = i(e.source),
                  n = e.flags;
                return (
                  "/" +
                  t +
                  "/" +
                  i(
                    void 0 === n && e instanceof RegExp && !("flags" in l)
                      ? a.call(e)
                      : n
                  )
                );
              },
              { unsafe: !0 }
            );
        },
        189: function (e, t, n) {
          "use strict";
          var r = n(7710),
            o = n(5631);
          e.exports = r(
            "Set",
            function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0);
              };
            },
            o
          );
        },
        5218: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("anchor") },
            {
              anchor: function (e) {
                return o(this, "a", "name", e);
              },
            }
          );
        },
        4475: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("big") },
            {
              big: function () {
                return o(this, "big", "", "");
              },
            }
          );
        },
        7929: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("blink") },
            {
              blink: function () {
                return o(this, "blink", "", "");
              },
            }
          );
        },
        915: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("bold") },
            {
              bold: function () {
                return o(this, "b", "", "");
              },
            }
          );
        },
        9841: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(8710).codeAt;
          r(
            { target: "String", proto: !0 },
            {
              codePointAt: function (e) {
                return o(this, e);
              },
            }
          );
        },
        7852: function (e, t, n) {
          "use strict";
          var r,
            o = n(2109),
            i = n(1236).f,
            A = n(7466),
            a = n(1340),
            s = n(3929),
            l = n(4488),
            c = n(4964),
            u = n(1913),
            f = "".endsWith,
            p = Math.min,
            d = c("endsWith");
          o(
            {
              target: "String",
              proto: !0,
              forced: !(
                (!u &&
                  !d &&
                  ((r = i(String.prototype, "endsWith")), r && !r.writable)) ||
                d
              ),
            },
            {
              endsWith: function (e) {
                var t = a(l(this));
                s(e);
                var n = arguments.length > 1 ? arguments[1] : void 0,
                  r = A(t.length),
                  o = void 0 === n ? r : p(A(n), r),
                  i = a(e);
                return f ? f.call(t, i, o) : t.slice(o - i.length, o) === i;
              },
            }
          );
        },
        9253: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("fixed") },
            {
              fixed: function () {
                return o(this, "tt", "", "");
              },
            }
          );
        },
        2125: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("fontcolor") },
            {
              fontcolor: function (e) {
                return o(this, "font", "color", e);
              },
            }
          );
        },
        8830: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("fontsize") },
            {
              fontsize: function (e) {
                return o(this, "font", "size", e);
              },
            }
          );
        },
        4953: function (e, t, n) {
          var r = n(2109),
            o = n(1400),
            i = String.fromCharCode,
            A = String.fromCodePoint;
          r(
            { target: "String", stat: !0, forced: !!A && 1 != A.length },
            {
              fromCodePoint: function (e) {
                for (var t, n = [], r = arguments.length, A = 0; r > A; ) {
                  if (((t = +arguments[A++]), o(t, 1114111) !== t))
                    throw RangeError(t + " is not a valid code point");
                  n.push(
                    t < 65536
                      ? i(t)
                      : i(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
                  );
                }
                return n.join("");
              },
            }
          );
        },
        2023: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3929),
            i = n(4488),
            A = n(1340);
          r(
            { target: "String", proto: !0, forced: !n(4964)("includes") },
            {
              includes: function (e) {
                return !!~A(i(this)).indexOf(
                  A(o(e)),
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        8734: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("italics") },
            {
              italics: function () {
                return o(this, "i", "", "");
              },
            }
          );
        },
        8783: function (e, t, n) {
          "use strict";
          var r = n(8710).charAt,
            o = n(1340),
            i = n(9909),
            A = n(654),
            a = "String Iterator",
            s = i.set,
            l = i.getterFor(a);
          A(
            String,
            "String",
            function (e) {
              s(this, { type: a, string: o(e), index: 0 });
            },
            function () {
              var e,
                t = l(this),
                n = t.string,
                o = t.index;
              return o >= n.length
                ? { value: void 0, done: !0 }
                : ((e = r(n, o)),
                  (t.index += e.length),
                  { value: e, done: !1 });
            }
          );
        },
        9254: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("link") },
            {
              link: function (e) {
                return o(this, "a", "href", e);
              },
            }
          );
        },
        6373: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4994),
            i = n(4488),
            A = n(7466),
            a = n(1340),
            s = n(3099),
            l = n(9670),
            c = n(4326),
            u = n(7850),
            f = n(7066),
            p = n(8880),
            d = n(7293),
            g = n(5112),
            h = n(6707),
            v = n(1530),
            m = n(9909),
            C = n(1913),
            y = g("matchAll"),
            b = "RegExp String Iterator",
            w = m.set,
            E = m.getterFor(b),
            B = RegExp.prototype,
            x = B.exec,
            k = "".matchAll,
            I =
              !!k &&
              !d(function () {
                "a".matchAll(/./);
              }),
            S = o(
              function (e, t, n, r) {
                w(this, {
                  type: b,
                  regexp: e,
                  string: t,
                  global: n,
                  unicode: r,
                  done: !1,
                });
              },
              "RegExp String",
              function () {
                var e = E(this);
                if (e.done) return { value: void 0, done: !0 };
                var t = e.regexp,
                  n = e.string,
                  r = (function (e, t) {
                    var n,
                      r = e.exec;
                    if ("function" == typeof r) {
                      if ("object" != typeof (n = r.call(e, t)))
                        throw TypeError("Incorrect exec result");
                      return n;
                    }
                    return x.call(e, t);
                  })(t, n);
                return null === r
                  ? { value: void 0, done: (e.done = !0) }
                  : e.global
                  ? ("" === a(r[0]) &&
                      (t.lastIndex = v(n, A(t.lastIndex), e.unicode)),
                    { value: r, done: !1 })
                  : ((e.done = !0), { value: r, done: !1 });
              }
            ),
            T = function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                c = l(this),
                u = a(e);
              return (
                (t = h(c, RegExp)),
                void 0 === (n = c.flags) &&
                  c instanceof RegExp &&
                  !("flags" in B) &&
                  (n = f.call(c)),
                (r = void 0 === n ? "" : a(n)),
                (o = new t(t === RegExp ? c.source : c, r)),
                (i = !!~r.indexOf("g")),
                (s = !!~r.indexOf("u")),
                (o.lastIndex = A(c.lastIndex)),
                new S(o, u, i, s)
              );
            };
          r(
            { target: "String", proto: !0, forced: I },
            {
              matchAll: function (e) {
                var t,
                  n,
                  r,
                  o = i(this);
                if (null != e) {
                  if (
                    u(e) &&
                    !~a(i("flags" in B ? e.flags : f.call(e))).indexOf("g")
                  )
                    throw TypeError(
                      "`.matchAll` does not allow non-global regexes"
                    );
                  if (I) return k.apply(o, arguments);
                  if (
                    (void 0 === (n = e[y]) && C && "RegExp" == c(e) && (n = T),
                    null != n)
                  )
                    return s(n).call(e, o);
                } else if (I) return k.apply(o, arguments);
                return (
                  (t = a(o)),
                  (r = new RegExp(e, "g")),
                  C ? T.call(r, t) : r[y](t)
                );
              },
            }
          ),
            C || y in B || p(B, y, T);
        },
        4723: function (e, t, n) {
          "use strict";
          var r = n(7007),
            o = n(9670),
            i = n(7466),
            A = n(1340),
            a = n(4488),
            s = n(1530),
            l = n(7651);
          r("match", function (e, t, n) {
            return [
              function (t) {
                var n = a(this),
                  r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](A(n));
              },
              function (e) {
                var r = o(this),
                  a = A(e),
                  c = n(t, r, a);
                if (c.done) return c.value;
                if (!r.global) return l(r, a);
                var u = r.unicode;
                r.lastIndex = 0;
                for (var f, p = [], d = 0; null !== (f = l(r, a)); ) {
                  var g = A(f[0]);
                  (p[d] = g),
                    "" === g && (r.lastIndex = s(a, i(r.lastIndex), u)),
                    d++;
                }
                return 0 === d ? null : p;
              },
            ];
          });
        },
        6528: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(6650).end;
          r(
            { target: "String", proto: !0, forced: n(7061) },
            {
              padEnd: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        3112: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(6650).start;
          r(
            { target: "String", proto: !0, forced: n(7061) },
            {
              padStart: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        8992: function (e, t, n) {
          var r = n(2109),
            o = n(5656),
            i = n(7466),
            A = n(1340);
          r(
            { target: "String", stat: !0 },
            {
              raw: function (e) {
                for (
                  var t = o(e.raw),
                    n = i(t.length),
                    r = arguments.length,
                    a = [],
                    s = 0;
                  n > s;

                )
                  a.push(A(t[s++])), s < r && a.push(A(arguments[s]));
                return a.join("");
              },
            }
          );
        },
        2481: function (e, t, n) {
          n(2109)({ target: "String", proto: !0 }, { repeat: n(8415) });
        },
        8757: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4488),
            i = n(7850),
            A = n(1340),
            a = n(7066),
            s = n(647),
            l = n(5112),
            c = n(1913),
            u = l("replace"),
            f = RegExp.prototype,
            p = Math.max,
            d = function (e, t, n) {
              return n > e.length ? -1 : "" === t ? n : e.indexOf(t, n);
            };
          r(
            { target: "String", proto: !0 },
            {
              replaceAll: function (e, t) {
                var n,
                  r,
                  l,
                  g,
                  h,
                  v,
                  m,
                  C,
                  y = o(this),
                  b = 0,
                  w = 0,
                  E = "";
                if (null != e) {
                  if (
                    (n = i(e)) &&
                    !~A(o("flags" in f ? e.flags : a.call(e))).indexOf("g")
                  )
                    throw TypeError(
                      "`.replaceAll` does not allow non-global regexes"
                    );
                  if (void 0 !== (r = e[u])) return r.call(e, y, t);
                  if (c && n) return A(y).replace(e, t);
                }
                for (
                  l = A(y),
                    g = A(e),
                    (h = "function" == typeof t) || (t = A(t)),
                    v = g.length,
                    m = p(1, v),
                    b = d(l, g, 0);
                  -1 !== b;

                )
                  (C = h ? A(t(g, b, l)) : s(g, l, b, [], void 0, t)),
                    (E += l.slice(w, b) + C),
                    (w = b + v),
                    (b = d(l, g, b + m));
                return w < l.length && (E += l.slice(w)), E;
              },
            }
          );
        },
        5306: function (e, t, n) {
          "use strict";
          var r = n(7007),
            o = n(7293),
            i = n(9670),
            A = n(9958),
            a = n(7466),
            s = n(1340),
            l = n(4488),
            c = n(1530),
            u = n(647),
            f = n(7651),
            p = n(5112)("replace"),
            d = Math.max,
            g = Math.min,
            h = "$0" === "a".replace(/./, "$0"),
            v = !!/./[p] && "" === /./[p]("a", "$0");
          r(
            "replace",
            function (e, t, n) {
              var r = v ? "$" : "$0";
              return [
                function (e, n) {
                  var r = l(this),
                    o = null == e ? void 0 : e[p];
                  return void 0 !== o ? o.call(e, r, n) : t.call(s(r), e, n);
                },
                function (e, o) {
                  var l = i(this),
                    p = s(e);
                  if (
                    "string" == typeof o &&
                    -1 === o.indexOf(r) &&
                    -1 === o.indexOf("$<")
                  ) {
                    var h = n(t, l, p, o);
                    if (h.done) return h.value;
                  }
                  var v = "function" == typeof o;
                  v || (o = s(o));
                  var m = l.global;
                  if (m) {
                    var C = l.unicode;
                    l.lastIndex = 0;
                  }
                  for (var y = []; ; ) {
                    var b = f(l, p);
                    if (null === b) break;
                    if ((y.push(b), !m)) break;
                    "" === s(b[0]) && (l.lastIndex = c(p, a(l.lastIndex), C));
                  }
                  for (var w, E = "", B = 0, x = 0; x < y.length; x++) {
                    b = y[x];
                    for (
                      var k = s(b[0]),
                        I = d(g(A(b.index), p.length), 0),
                        S = [],
                        T = 1;
                      T < b.length;
                      T++
                    )
                      S.push(void 0 === (w = b[T]) ? w : String(w));
                    var L = b.groups;
                    if (v) {
                      var R = [k].concat(S, I, p);
                      void 0 !== L && R.push(L);
                      var Q = s(o.apply(void 0, R));
                    } else Q = u(k, p, I, S, L, o);
                    I >= B && ((E += p.slice(B, I) + Q), (B = I + k.length));
                  }
                  return E + p.slice(B);
                },
              ];
            },
            !!o(function () {
              var e = /./;
              return (
                (e.exec = function () {
                  var e = [];
                  return (e.groups = { a: "7" }), e;
                }),
                "7" !== "".replace(e, "$<a>")
              );
            }) ||
              !h ||
              v
          );
        },
        4765: function (e, t, n) {
          "use strict";
          var r = n(7007),
            o = n(9670),
            i = n(4488),
            A = n(1150),
            a = n(1340),
            s = n(7651);
          r("search", function (e, t, n) {
            return [
              function (t) {
                var n = i(this),
                  r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](a(n));
              },
              function (e) {
                var r = o(this),
                  i = a(e),
                  l = n(t, r, i);
                if (l.done) return l.value;
                var c = r.lastIndex;
                A(c, 0) || (r.lastIndex = 0);
                var u = s(r, i);
                return (
                  A(r.lastIndex, c) || (r.lastIndex = c),
                  null === u ? -1 : u.index
                );
              },
            ];
          });
        },
        7268: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("small") },
            {
              small: function () {
                return o(this, "small", "", "");
              },
            }
          );
        },
        3123: function (e, t, n) {
          "use strict";
          var r = n(7007),
            o = n(7850),
            i = n(9670),
            A = n(4488),
            a = n(6707),
            s = n(1530),
            l = n(7466),
            c = n(1340),
            u = n(7651),
            f = n(2261),
            p = n(2999),
            d = n(7293),
            g = p.UNSUPPORTED_Y,
            h = [].push,
            v = Math.min,
            m = 4294967295;
          r(
            "split",
            function (e, t, n) {
              var r;
              return (
                (r =
                  "c" == "abbc".split(/(b)*/)[1] ||
                  4 != "test".split(/(?:)/, -1).length ||
                  2 != "ab".split(/(?:ab)*/).length ||
                  4 != ".".split(/(.?)(.?)/).length ||
                  ".".split(/()()/).length > 1 ||
                  "".split(/.?/).length
                    ? function (e, n) {
                        var r = c(A(this)),
                          i = void 0 === n ? m : n >>> 0;
                        if (0 === i) return [];
                        if (void 0 === e) return [r];
                        if (!o(e)) return t.call(r, e, i);
                        for (
                          var a,
                            s,
                            l,
                            u = [],
                            p =
                              (e.ignoreCase ? "i" : "") +
                              (e.multiline ? "m" : "") +
                              (e.unicode ? "u" : "") +
                              (e.sticky ? "y" : ""),
                            d = 0,
                            g = new RegExp(e.source, p + "g");
                          (a = f.call(g, r)) &&
                          !(
                            (s = g.lastIndex) > d &&
                            (u.push(r.slice(d, a.index)),
                            a.length > 1 &&
                              a.index < r.length &&
                              h.apply(u, a.slice(1)),
                            (l = a[0].length),
                            (d = s),
                            u.length >= i)
                          );

                        )
                          g.lastIndex === a.index && g.lastIndex++;
                        return (
                          d === r.length
                            ? (!l && g.test("")) || u.push("")
                            : u.push(r.slice(d)),
                          u.length > i ? u.slice(0, i) : u
                        );
                      }
                    : "0".split(void 0, 0).length
                    ? function (e, n) {
                        return void 0 === e && 0 === n
                          ? []
                          : t.call(this, e, n);
                      }
                    : t),
                [
                  function (t, n) {
                    var o = A(this),
                      i = null == t ? void 0 : t[e];
                    return void 0 !== i ? i.call(t, o, n) : r.call(c(o), t, n);
                  },
                  function (e, o) {
                    var A = i(this),
                      f = c(e),
                      p = n(r, A, f, o, r !== t);
                    if (p.done) return p.value;
                    var d = a(A, RegExp),
                      h = A.unicode,
                      C =
                        (A.ignoreCase ? "i" : "") +
                        (A.multiline ? "m" : "") +
                        (A.unicode ? "u" : "") +
                        (g ? "g" : "y"),
                      y = new d(g ? "^(?:" + A.source + ")" : A, C),
                      b = void 0 === o ? m : o >>> 0;
                    if (0 === b) return [];
                    if (0 === f.length) return null === u(y, f) ? [f] : [];
                    for (var w = 0, E = 0, B = []; E < f.length; ) {
                      y.lastIndex = g ? 0 : E;
                      var x,
                        k = u(y, g ? f.slice(E) : f);
                      if (
                        null === k ||
                        (x = v(l(y.lastIndex + (g ? E : 0)), f.length)) === w
                      )
                        E = s(f, E, h);
                      else {
                        if ((B.push(f.slice(w, E)), B.length === b)) return B;
                        for (var I = 1; I <= k.length - 1; I++)
                          if ((B.push(k[I]), B.length === b)) return B;
                        E = w = x;
                      }
                    }
                    return B.push(f.slice(w)), B;
                  },
                ]
              );
            },
            !!d(function () {
              var e = /(?:)/,
                t = e.exec;
              e.exec = function () {
                return t.apply(this, arguments);
              };
              var n = "ab".split(e);
              return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
            }),
            g
          );
        },
        6755: function (e, t, n) {
          "use strict";
          var r,
            o = n(2109),
            i = n(1236).f,
            A = n(7466),
            a = n(1340),
            s = n(3929),
            l = n(4488),
            c = n(4964),
            u = n(1913),
            f = "".startsWith,
            p = Math.min,
            d = c("startsWith");
          o(
            {
              target: "String",
              proto: !0,
              forced: !(
                (!u &&
                  !d &&
                  ((r = i(String.prototype, "startsWith")),
                  r && !r.writable)) ||
                d
              ),
            },
            {
              startsWith: function (e) {
                var t = a(l(this));
                s(e);
                var n = A(
                    p(arguments.length > 1 ? arguments[1] : void 0, t.length)
                  ),
                  r = a(e);
                return f ? f.call(t, r, n) : t.slice(n, n + r.length) === r;
              },
            }
          );
        },
        7397: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("strike") },
            {
              strike: function () {
                return o(this, "strike", "", "");
              },
            }
          );
        },
        86: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("sub") },
            {
              sub: function () {
                return o(this, "sub", "", "");
              },
            }
          );
        },
        3650: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4488),
            i = n(9958),
            A = n(1340),
            a = "".slice,
            s = Math.max,
            l = Math.min;
          r(
            { target: "String", proto: !0 },
            {
              substr: function (e, t) {
                var n,
                  r,
                  c = A(o(this)),
                  u = c.length,
                  f = i(e);
                return (
                  f === 1 / 0 && (f = 0),
                  f < 0 && (f = s(u + f, 0)),
                  (n = void 0 === t ? u : i(t)) <= 0 ||
                  n === 1 / 0 ||
                  f >= (r = l(f + n, u))
                    ? ""
                    : a.call(c, f, r)
                );
              },
            }
          );
        },
        623: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(4230);
          r(
            { target: "String", proto: !0, forced: n(3429)("sup") },
            {
              sup: function () {
                return o(this, "sup", "", "");
              },
            }
          );
        },
        8702: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3111).end,
            i = n(6091)("trimEnd"),
            A = i
              ? function () {
                  return o(this);
                }
              : "".trimEnd;
          r(
            { target: "String", proto: !0, forced: i },
            { trimEnd: A, trimRight: A }
          );
        },
        5674: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3111).start,
            i = n(6091)("trimStart"),
            A = i
              ? function () {
                  return o(this);
                }
              : "".trimStart;
          r(
            { target: "String", proto: !0, forced: i },
            { trimStart: A, trimLeft: A }
          );
        },
        3210: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(3111).trim;
          r(
            { target: "String", proto: !0, forced: n(6091)("trim") },
            {
              trim: function () {
                return o(this);
              },
            }
          );
        },
        2443: function (e, t, n) {
          n(7235)("asyncIterator");
        },
        1817: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(9781),
            i = n(7854),
            A = n(6656),
            a = n(111),
            s = n(3070).f,
            l = n(9920),
            c = i.Symbol;
          if (
            o &&
            "function" == typeof c &&
            (!("description" in c.prototype) || void 0 !== c().description)
          ) {
            var u = {},
              f = function () {
                var e =
                    arguments.length < 1 || void 0 === arguments[0]
                      ? void 0
                      : String(arguments[0]),
                  t = this instanceof f ? new c(e) : void 0 === e ? c() : c(e);
                return "" === e && (u[t] = !0), t;
              };
            l(f, c);
            var p = (f.prototype = c.prototype);
            p.constructor = f;
            var d = p.toString,
              g = "Symbol(test)" == String(c("test")),
              h = /^Symbol\((.*)\)[^)]+$/;
            s(p, "description", {
              configurable: !0,
              get: function () {
                var e = a(this) ? this.valueOf() : this,
                  t = d.call(e);
                if (A(u, e)) return "";
                var n = g ? t.slice(7, -1) : t.replace(h, "$1");
                return "" === n ? void 0 : n;
              },
            }),
              r({ global: !0, forced: !0 }, { Symbol: f });
          }
        },
        2401: function (e, t, n) {
          n(7235)("hasInstance");
        },
        8722: function (e, t, n) {
          n(7235)("isConcatSpreadable");
        },
        2165: function (e, t, n) {
          n(7235)("iterator");
        },
        2526: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(7854),
            i = n(5005),
            A = n(1913),
            a = n(9781),
            s = n(133),
            l = n(7293),
            c = n(6656),
            u = n(3157),
            f = n(111),
            p = n(2190),
            d = n(9670),
            g = n(7908),
            h = n(5656),
            v = n(4948),
            m = n(1340),
            C = n(9114),
            y = n(30),
            b = n(1956),
            w = n(8006),
            E = n(1156),
            B = n(5181),
            x = n(1236),
            k = n(3070),
            I = n(5296),
            S = n(8880),
            T = n(1320),
            L = n(2309),
            R = n(6200),
            Q = n(3501),
            M = n(9711),
            O = n(5112),
            D = n(6061),
            F = n(7235),
            P = n(8003),
            U = n(9909),
            N = n(2092).forEach,
            W = R("hidden"),
            j = "Symbol",
            Y = O("toPrimitive"),
            G = U.set,
            z = U.getterFor(j),
            V = Object.prototype,
            _ = o.Symbol,
            H = i("JSON", "stringify"),
            J = x.f,
            Z = k.f,
            K = E.f,
            X = I.f,
            q = L("symbols"),
            $ = L("op-symbols"),
            ee = L("string-to-symbol-registry"),
            te = L("symbol-to-string-registry"),
            ne = L("wks"),
            re = o.QObject,
            oe = !re || !re.prototype || !re.prototype.findChild,
            ie =
              a &&
              l(function () {
                return (
                  7 !=
                  y(
                    Z({}, "a", {
                      get: function () {
                        return Z(this, "a", { value: 7 }).a;
                      },
                    })
                  ).a
                );
              })
                ? function (e, t, n) {
                    var r = J(V, t);
                    r && delete V[t], Z(e, t, n), r && e !== V && Z(V, t, r);
                  }
                : Z,
            Ae = function (e, t) {
              var n = (q[e] = y(_.prototype));
              return (
                G(n, { type: j, tag: e, description: t }),
                a || (n.description = t),
                n
              );
            },
            ae = function (e, t, n) {
              e === V && ae($, t, n), d(e);
              var r = v(t);
              return (
                d(n),
                c(q, r)
                  ? (n.enumerable
                      ? (c(e, W) && e[W][r] && (e[W][r] = !1),
                        (n = y(n, { enumerable: C(0, !1) })))
                      : (c(e, W) || Z(e, W, C(1, {})), (e[W][r] = !0)),
                    ie(e, r, n))
                  : Z(e, r, n)
              );
            },
            se = function (e, t) {
              d(e);
              var n = h(t),
                r = b(n).concat(fe(n));
              return (
                N(r, function (t) {
                  (a && !le.call(n, t)) || ae(e, t, n[t]);
                }),
                e
              );
            },
            le = function (e) {
              var t = v(e),
                n = X.call(this, t);
              return (
                !(this === V && c(q, t) && !c($, t)) &&
                (!(
                  n ||
                  !c(this, t) ||
                  !c(q, t) ||
                  (c(this, W) && this[W][t])
                ) ||
                  n)
              );
            },
            ce = function (e, t) {
              var n = h(e),
                r = v(t);
              if (n !== V || !c(q, r) || c($, r)) {
                var o = J(n, r);
                return (
                  !o || !c(q, r) || (c(n, W) && n[W][r]) || (o.enumerable = !0),
                  o
                );
              }
            },
            ue = function (e) {
              var t = K(h(e)),
                n = [];
              return (
                N(t, function (e) {
                  c(q, e) || c(Q, e) || n.push(e);
                }),
                n
              );
            },
            fe = function (e) {
              var t = e === V,
                n = K(t ? $ : h(e)),
                r = [];
              return (
                N(n, function (e) {
                  !c(q, e) || (t && !c(V, e)) || r.push(q[e]);
                }),
                r
              );
            };
          s ||
            (T(
              (_ = function () {
                if (this instanceof _)
                  throw TypeError("Symbol is not a constructor");
                var e =
                    arguments.length && void 0 !== arguments[0]
                      ? m(arguments[0])
                      : void 0,
                  t = M(e),
                  n = function (e) {
                    this === V && n.call($, e),
                      c(this, W) && c(this[W], t) && (this[W][t] = !1),
                      ie(this, t, C(1, e));
                  };
                return (
                  a && oe && ie(V, t, { configurable: !0, set: n }), Ae(t, e)
                );
              }).prototype,
              "toString",
              function () {
                return z(this).tag;
              }
            ),
            T(_, "withoutSetter", function (e) {
              return Ae(M(e), e);
            }),
            (I.f = le),
            (k.f = ae),
            (x.f = ce),
            (w.f = E.f = ue),
            (B.f = fe),
            (D.f = function (e) {
              return Ae(O(e), e);
            }),
            a &&
              (Z(_.prototype, "description", {
                configurable: !0,
                get: function () {
                  return z(this).description;
                },
              }),
              A || T(V, "propertyIsEnumerable", le, { unsafe: !0 }))),
            r({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: _ }),
            N(b(ne), function (e) {
              F(e);
            }),
            r(
              { target: j, stat: !0, forced: !s },
              {
                for: function (e) {
                  var t = m(e);
                  if (c(ee, t)) return ee[t];
                  var n = _(t);
                  return (ee[t] = n), (te[n] = t), n;
                },
                keyFor: function (e) {
                  if (!p(e)) throw TypeError(e + " is not a symbol");
                  if (c(te, e)) return te[e];
                },
                useSetter: function () {
                  oe = !0;
                },
                useSimple: function () {
                  oe = !1;
                },
              }
            ),
            r(
              { target: "Object", stat: !0, forced: !s, sham: !a },
              {
                create: function (e, t) {
                  return void 0 === t ? y(e) : se(y(e), t);
                },
                defineProperty: ae,
                defineProperties: se,
                getOwnPropertyDescriptor: ce,
              }
            ),
            r(
              { target: "Object", stat: !0, forced: !s },
              { getOwnPropertyNames: ue, getOwnPropertySymbols: fe }
            ),
            r(
              {
                target: "Object",
                stat: !0,
                forced: l(function () {
                  B.f(1);
                }),
              },
              {
                getOwnPropertySymbols: function (e) {
                  return B.f(g(e));
                },
              }
            ),
            H &&
              r(
                {
                  target: "JSON",
                  stat: !0,
                  forced:
                    !s ||
                    l(function () {
                      var e = _();
                      return (
                        "[null]" != H([e]) ||
                        "{}" != H({ a: e }) ||
                        "{}" != H(Object(e))
                      );
                    }),
                },
                {
                  stringify: function (e, t, n) {
                    for (var r, o = [e], i = 1; arguments.length > i; )
                      o.push(arguments[i++]);
                    if (((r = t), (f(t) || void 0 !== e) && !p(e)))
                      return (
                        u(t) ||
                          (t = function (e, t) {
                            if (
                              ("function" == typeof r &&
                                (t = r.call(this, e, t)),
                              !p(t))
                            )
                              return t;
                          }),
                        (o[1] = t),
                        H.apply(null, o)
                      );
                  },
                }
              ),
            _.prototype[Y] || S(_.prototype, Y, _.prototype.valueOf),
            P(_, j),
            (Q[W] = !0);
        },
        6066: function (e, t, n) {
          n(7235)("matchAll");
        },
        9007: function (e, t, n) {
          n(7235)("match");
        },
        3510: function (e, t, n) {
          n(7235)("replace");
        },
        1840: function (e, t, n) {
          n(7235)("search");
        },
        6982: function (e, t, n) {
          n(7235)("species");
        },
        2159: function (e, t, n) {
          n(7235)("split");
        },
        6649: function (e, t, n) {
          n(7235)("toPrimitive");
        },
        9341: function (e, t, n) {
          n(7235)("toStringTag");
        },
        543: function (e, t, n) {
          n(7235)("unscopables");
        },
        2990: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(1048),
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("copyWithin", function (e, t) {
            return o.call(
              i(this),
              e,
              t,
              arguments.length > 2 ? arguments[2] : void 0
            );
          });
        },
        8927: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).every,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("every", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3105: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(1285),
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("fill", function (e) {
            return o.apply(i(this), arguments);
          });
        },
        5035: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).filter,
            i = n(3074),
            A = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("filter", function (e) {
            var t = o(A(this), e, arguments.length > 1 ? arguments[1] : void 0);
            return i(this, t);
          });
        },
        7174: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).findIndex,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("findIndex", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        4345: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).find,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("find", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        4197: function (e, t, n) {
          n(9843)("Float32", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        6495: function (e, t, n) {
          n(9843)("Float64", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        2846: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).forEach,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("forEach", function (e) {
            o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        8145: function (e, t, n) {
          "use strict";
          var r = n(3832);
          (0, n(260).exportTypedArrayStaticMethod)("from", n(7321), r);
        },
        4731: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(1318).includes,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("includes", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        7209: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(1318).indexOf,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("indexOf", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        5109: function (e, t, n) {
          n(9843)("Int16", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        5125: function (e, t, n) {
          n(9843)("Int32", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        7145: function (e, t, n) {
          n(9843)("Int8", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        6319: function (e, t, n) {
          "use strict";
          var r = n(7854),
            o = n(260),
            i = n(6992),
            A = n(5112)("iterator"),
            a = r.Uint8Array,
            s = i.values,
            l = i.keys,
            c = i.entries,
            u = o.aTypedArray,
            f = o.exportTypedArrayMethod,
            p = a && a.prototype[A],
            d = !!p && ("values" == p.name || null == p.name),
            g = function () {
              return s.call(u(this));
            };
          f("entries", function () {
            return c.call(u(this));
          }),
            f("keys", function () {
              return l.call(u(this));
            }),
            f("values", g, !d),
            f(A, g, !d);
        },
        8867: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = r.aTypedArray,
            i = r.exportTypedArrayMethod,
            A = [].join;
          i("join", function (e) {
            return A.apply(o(this), arguments);
          });
        },
        7789: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(6583),
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("lastIndexOf", function (e) {
            return o.apply(i(this), arguments);
          });
        },
        3739: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).map,
            i = n(6304),
            A = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("map", function (e) {
            return o(
              A(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0,
              function (e, t) {
                return new (i(e))(t);
              }
            );
          });
        },
        5206: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(3832),
            i = r.aTypedArrayConstructor;
          (0, r.exportTypedArrayStaticMethod)(
            "of",
            function () {
              for (
                var e = 0, t = arguments.length, n = new (i(this))(t);
                t > e;

              )
                n[e] = arguments[e++];
              return n;
            },
            o
          );
        },
        4483: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(3671).right,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("reduceRight", function (e) {
            return o(
              i(this),
              e,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          });
        },
        9368: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(3671).left,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("reduce", function (e) {
            return o(
              i(this),
              e,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          });
        },
        2056: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = r.aTypedArray,
            i = r.exportTypedArrayMethod,
            A = Math.floor;
          i("reverse", function () {
            for (var e, t = this, n = o(t).length, r = A(n / 2), i = 0; i < r; )
              (e = t[i]), (t[i++] = t[--n]), (t[n] = e);
            return t;
          });
        },
        3462: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(7466),
            i = n(4590),
            A = n(7908),
            a = n(7293),
            s = r.aTypedArray;
          (0, r.exportTypedArrayMethod)(
            "set",
            function (e) {
              s(this);
              var t = i(arguments.length > 1 ? arguments[1] : void 0, 1),
                n = this.length,
                r = A(e),
                a = o(r.length),
                l = 0;
              if (a + t > n) throw RangeError("Wrong length");
              for (; l < a; ) this[t + l] = r[l++];
            },
            a(function () {
              new Int8Array(1).set({});
            })
          );
        },
        678: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(6304),
            i = n(7293),
            A = r.aTypedArray,
            a = r.exportTypedArrayMethod,
            s = [].slice;
          a(
            "slice",
            function (e, t) {
              for (
                var n = s.call(A(this), e, t),
                  r = o(this),
                  i = 0,
                  a = n.length,
                  l = new r(a);
                a > i;

              )
                l[i] = n[i++];
              return l;
            },
            i(function () {
              new Int8Array(1).slice();
            })
          );
        },
        7462: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(2092).some,
            i = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("some", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3824: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(7854),
            i = n(7293),
            A = n(3099),
            a = n(7466),
            s = n(4362),
            l = n(8886),
            c = n(256),
            u = n(7392),
            f = n(8008),
            p = r.aTypedArray,
            d = r.exportTypedArrayMethod,
            g = o.Uint16Array,
            h = g && g.prototype.sort,
            v =
              !!h &&
              !i(function () {
                var e = new g(2);
                e.sort(null), e.sort({});
              }),
            m =
              !!h &&
              !i(function () {
                if (u) return u < 74;
                if (l) return l < 67;
                if (c) return !0;
                if (f) return f < 602;
                var e,
                  t,
                  n = new g(516),
                  r = Array(516);
                for (e = 0; e < 516; e++)
                  (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
                for (
                  n.sort(function (e, t) {
                    return ((e / 4) | 0) - ((t / 4) | 0);
                  }),
                    e = 0;
                  e < 516;
                  e++
                )
                  if (n[e] !== r[e]) return !0;
              });
          d(
            "sort",
            function (e) {
              var t = this;
              if ((void 0 !== e && A(e), m)) return h.call(t, e);
              p(t);
              var n,
                r = a(t.length),
                o = Array(r);
              for (n = 0; n < r; n++) o[n] = t[n];
              for (
                o = s(
                  t,
                  (function (e) {
                    return function (t, n) {
                      return void 0 !== e
                        ? +e(t, n) || 0
                        : n != n
                        ? -1
                        : t != t
                        ? 1
                        : 0 === t && 0 === n
                        ? 1 / t > 0 && 1 / n < 0
                          ? 1
                          : -1
                        : t > n;
                    };
                  })(e)
                ),
                  n = 0;
                n < r;
                n++
              )
                t[n] = o[n];
              return t;
            },
            !m || v
          );
        },
        5021: function (e, t, n) {
          "use strict";
          var r = n(260),
            o = n(7466),
            i = n(1400),
            A = n(6304),
            a = r.aTypedArray;
          (0, r.exportTypedArrayMethod)("subarray", function (e, t) {
            var n = a(this),
              r = n.length,
              s = i(e, r);
            return new (A(n))(
              n.buffer,
              n.byteOffset + s * n.BYTES_PER_ELEMENT,
              o((void 0 === t ? r : i(t, r)) - s)
            );
          });
        },
        2974: function (e, t, n) {
          "use strict";
          var r = n(7854),
            o = n(260),
            i = n(7293),
            A = r.Int8Array,
            a = o.aTypedArray,
            s = o.exportTypedArrayMethod,
            l = [].toLocaleString,
            c = [].slice,
            u =
              !!A &&
              i(function () {
                l.call(new A(1));
              });
          s(
            "toLocaleString",
            function () {
              return l.apply(u ? c.call(a(this)) : a(this), arguments);
            },
            i(function () {
              return [1, 2].toLocaleString() != new A([1, 2]).toLocaleString();
            }) ||
              !i(function () {
                A.prototype.toLocaleString.call([1, 2]);
              })
          );
        },
        5016: function (e, t, n) {
          "use strict";
          var r = n(260).exportTypedArrayMethod,
            o = n(7293),
            i = n(7854).Uint8Array,
            A = (i && i.prototype) || {},
            a = [].toString,
            s = [].join;
          o(function () {
            a.call({});
          }) &&
            (a = function () {
              return s.call(this);
            });
          var l = A.toString != a;
          r("toString", a, l);
        },
        8255: function (e, t, n) {
          n(9843)("Uint16", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        9135: function (e, t, n) {
          n(9843)("Uint32", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        2472: function (e, t, n) {
          n(9843)("Uint8", function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          });
        },
        9743: function (e, t, n) {
          n(9843)(
            "Uint8",
            function (e) {
              return function (t, n, r) {
                return e(this, t, n, r);
              };
            },
            !0
          );
        },
        8221: function (e, t, n) {
          "use strict";
          var r = n(2109),
            o = n(1340),
            i = String.fromCharCode,
            A = /^[\da-f]{2}$/i,
            a = /^[\da-f]{4}$/i;
          r(
            { global: !0 },
            {
              unescape: function (e) {
                for (var t, n, r = o(e), s = "", l = r.length, c = 0; c < l; ) {
                  if ("%" === (t = r.charAt(c++)))
                    if ("u" === r.charAt(c)) {
                      if (((n = r.slice(c + 1, c + 5)), a.test(n))) {
                        (s += i(parseInt(n, 16))), (c += 5);
                        continue;
                      }
                    } else if (((n = r.slice(c, c + 2)), A.test(n))) {
                      (s += i(parseInt(n, 16))), (c += 2);
                      continue;
                    }
                  s += t;
                }
                return s;
              },
            }
          );
        },
        4129: function (e, t, n) {
          "use strict";
          var r,
            o = n(7854),
            i = n(2248),
            A = n(2423),
            a = n(7710),
            s = n(9320),
            l = n(111),
            c = n(9909).enforce,
            u = n(8536),
            f = !o.ActiveXObject && "ActiveXObject" in o,
            p = Object.isExtensible,
            d = function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0);
              };
            },
            g = (e.exports = a("WeakMap", d, s));
          if (u && f) {
            (r = s.getConstructor(d, "WeakMap", !0)), A.enable();
            var h = g.prototype,
              v = h.delete,
              m = h.has,
              C = h.get,
              y = h.set;
            i(h, {
              delete: function (e) {
                if (l(e) && !p(e)) {
                  var t = c(this);
                  return (
                    t.frozen || (t.frozen = new r()),
                    v.call(this, e) || t.frozen.delete(e)
                  );
                }
                return v.call(this, e);
              },
              has: function (e) {
                if (l(e) && !p(e)) {
                  var t = c(this);
                  return (
                    t.frozen || (t.frozen = new r()),
                    m.call(this, e) || t.frozen.has(e)
                  );
                }
                return m.call(this, e);
              },
              get: function (e) {
                if (l(e) && !p(e)) {
                  var t = c(this);
                  return (
                    t.frozen || (t.frozen = new r()),
                    m.call(this, e) ? C.call(this, e) : t.frozen.get(e)
                  );
                }
                return C.call(this, e);
              },
              set: function (e, t) {
                if (l(e) && !p(e)) {
                  var n = c(this);
                  n.frozen || (n.frozen = new r()),
                    m.call(this, e) ? y.call(this, e, t) : n.frozen.set(e, t);
                } else y.call(this, e, t);
                return this;
              },
            });
          }
        },
        8478: function (e, t, n) {
          "use strict";
          n(7710)(
            "WeakSet",
            function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0);
              };
            },
            n(9320)
          );
        },
        4747: function (e, t, n) {
          var r = n(7854),
            o = n(8324),
            i = n(8533),
            A = n(8880);
          for (var a in o) {
            var s = r[a],
              l = s && s.prototype;
            if (l && l.forEach !== i)
              try {
                A(l, "forEach", i);
              } catch (e) {
                l.forEach = i;
              }
          }
        },
        3948: function (e, t, n) {
          var r = n(7854),
            o = n(8324),
            i = n(6992),
            A = n(8880),
            a = n(5112),
            s = a("iterator"),
            l = a("toStringTag"),
            c = i.values;
          for (var u in o) {
            var f = r[u],
              p = f && f.prototype;
            if (p) {
              if (p[s] !== c)
                try {
                  A(p, s, c);
                } catch (e) {
                  p[s] = c;
                }
              if ((p[l] || A(p, l, u), o[u]))
                for (var d in i)
                  if (p[d] !== i[d])
                    try {
                      A(p, d, i[d]);
                    } catch (e) {
                      p[d] = i[d];
                    }
            }
          }
        },
        4633: function (e, t, n) {
          var r = n(2109),
            o = n(7854),
            i = n(261);
          r(
            {
              global: !0,
              bind: !0,
              enumerable: !0,
              forced: !o.setImmediate || !o.clearImmediate,
            },
            { setImmediate: i.set, clearImmediate: i.clear }
          );
        },
        5844: function (e, t, n) {
          var r = n(2109),
            o = n(7854),
            i = n(5948),
            A = n(5268),
            a = o.process;
          r(
            { global: !0, enumerable: !0, noTargetGet: !0 },
            {
              queueMicrotask: function (e) {
                var t = A && a.domain;
                i(t ? t.bind(e) : e);
              },
            }
          );
        },
        2564: function (e, t, n) {
          var r = n(2109),
            o = n(7854),
            i = n(8113),
            A = [].slice,
            a = function (e) {
              return function (t, n) {
                var r = arguments.length > 2,
                  o = r ? A.call(arguments, 2) : void 0;
                return e(
                  r
                    ? function () {
                        ("function" == typeof t ? t : Function(t)).apply(
                          this,
                          o
                        );
                      }
                    : t,
                  n
                );
              };
            };
          r(
            { global: !0, bind: !0, forced: /MSIE .\./.test(i) },
            { setTimeout: a(o.setTimeout), setInterval: a(o.setInterval) }
          );
        },
        1637: function (e, t, n) {
          "use strict";
          n(6992);
          var r = n(2109),
            o = n(5005),
            i = n(590),
            A = n(1320),
            a = n(2248),
            s = n(8003),
            l = n(4994),
            c = n(9909),
            u = n(5787),
            f = n(6656),
            p = n(9974),
            d = n(648),
            g = n(9670),
            h = n(111),
            v = n(1340),
            m = n(30),
            C = n(9114),
            y = n(8554),
            b = n(1246),
            w = n(5112),
            E = o("fetch"),
            B = o("Request"),
            x = B && B.prototype,
            k = o("Headers"),
            I = w("iterator"),
            S = "URLSearchParams",
            T = "URLSearchParamsIterator",
            L = c.set,
            R = c.getterFor(S),
            Q = c.getterFor(T),
            M = /\+/g,
            O = Array(4),
            D = function (e) {
              return (
                O[e - 1] ||
                (O[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
              );
            },
            F = function (e) {
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return e;
              }
            },
            P = function (e) {
              var t = e.replace(M, " "),
                n = 4;
              try {
                return decodeURIComponent(t);
              } catch (e) {
                for (; n; ) t = t.replace(D(n--), F);
                return t;
              }
            },
            U = /[!'()~]|%20/g,
            N = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
            },
            W = function (e) {
              return N[e];
            },
            j = function (e) {
              return encodeURIComponent(e).replace(U, W);
            },
            Y = function (e, t) {
              if (t)
                for (var n, r, o = t.split("&"), i = 0; i < o.length; )
                  (n = o[i++]).length &&
                    ((r = n.split("=")),
                    e.push({ key: P(r.shift()), value: P(r.join("=")) }));
            },
            G = function (e) {
              (this.entries.length = 0), Y(this.entries, e);
            },
            z = function (e, t) {
              if (e < t) throw TypeError("Not enough arguments");
            },
            V = l(
              function (e, t) {
                L(this, { type: T, iterator: y(R(e).entries), kind: t });
              },
              "Iterator",
              function () {
                var e = Q(this),
                  t = e.kind,
                  n = e.iterator.next(),
                  r = n.value;
                return (
                  n.done ||
                    (n.value =
                      "keys" === t
                        ? r.key
                        : "values" === t
                        ? r.value
                        : [r.key, r.value]),
                  n
                );
              }
            ),
            _ = function () {
              u(this, _, S);
              var e,
                t,
                n,
                r,
                o,
                i,
                A,
                a,
                s,
                l = arguments.length > 0 ? arguments[0] : void 0,
                c = this,
                p = [];
              if (
                (L(c, {
                  type: S,
                  entries: p,
                  updateURL: function () {},
                  updateSearchParams: G,
                }),
                void 0 !== l)
              )
                if (h(l))
                  if ("function" == typeof (e = b(l)))
                    for (n = (t = e.call(l)).next; !(r = n.call(t)).done; ) {
                      if (
                        (A = (i = (o = y(g(r.value))).next).call(o)).done ||
                        (a = i.call(o)).done ||
                        !i.call(o).done
                      )
                        throw TypeError("Expected sequence with length 2");
                      p.push({ key: v(A.value), value: v(a.value) });
                    }
                  else
                    for (s in l) f(l, s) && p.push({ key: s, value: v(l[s]) });
                else
                  Y(
                    p,
                    "string" == typeof l
                      ? "?" === l.charAt(0)
                        ? l.slice(1)
                        : l
                      : v(l)
                  );
            },
            H = _.prototype;
          if (
            (a(
              H,
              {
                append: function (e, t) {
                  z(arguments.length, 2);
                  var n = R(this);
                  n.entries.push({ key: v(e), value: v(t) }), n.updateURL();
                },
                delete: function (e) {
                  z(arguments.length, 1);
                  for (
                    var t = R(this), n = t.entries, r = v(e), o = 0;
                    o < n.length;

                  )
                    n[o].key === r ? n.splice(o, 1) : o++;
                  t.updateURL();
                },
                get: function (e) {
                  z(arguments.length, 1);
                  for (
                    var t = R(this).entries, n = v(e), r = 0;
                    r < t.length;
                    r++
                  )
                    if (t[r].key === n) return t[r].value;
                  return null;
                },
                getAll: function (e) {
                  z(arguments.length, 1);
                  for (
                    var t = R(this).entries, n = v(e), r = [], o = 0;
                    o < t.length;
                    o++
                  )
                    t[o].key === n && r.push(t[o].value);
                  return r;
                },
                has: function (e) {
                  z(arguments.length, 1);
                  for (var t = R(this).entries, n = v(e), r = 0; r < t.length; )
                    if (t[r++].key === n) return !0;
                  return !1;
                },
                set: function (e, t) {
                  z(arguments.length, 1);
                  for (
                    var n,
                      r = R(this),
                      o = r.entries,
                      i = !1,
                      A = v(e),
                      a = v(t),
                      s = 0;
                    s < o.length;
                    s++
                  )
                    (n = o[s]).key === A &&
                      (i ? o.splice(s--, 1) : ((i = !0), (n.value = a)));
                  i || o.push({ key: A, value: a }), r.updateURL();
                },
                sort: function () {
                  var e,
                    t,
                    n,
                    r = R(this),
                    o = r.entries,
                    i = o.slice();
                  for (o.length = 0, n = 0; n < i.length; n++) {
                    for (e = i[n], t = 0; t < n; t++)
                      if (o[t].key > e.key) {
                        o.splice(t, 0, e);
                        break;
                      }
                    t === n && o.push(e);
                  }
                  r.updateURL();
                },
                forEach: function (e) {
                  for (
                    var t,
                      n = R(this).entries,
                      r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                      o = 0;
                    o < n.length;

                  )
                    r((t = n[o++]).value, t.key, this);
                },
                keys: function () {
                  return new V(this, "keys");
                },
                values: function () {
                  return new V(this, "values");
                },
                entries: function () {
                  return new V(this, "entries");
                },
              },
              { enumerable: !0 }
            ),
            A(H, I, H.entries),
            A(
              H,
              "toString",
              function () {
                for (var e, t = R(this).entries, n = [], r = 0; r < t.length; )
                  (e = t[r++]), n.push(j(e.key) + "=" + j(e.value));
                return n.join("&");
              },
              { enumerable: !0 }
            ),
            s(_, S),
            r({ global: !0, forced: !i }, { URLSearchParams: _ }),
            !i && "function" == typeof k)
          ) {
            var J = function (e) {
              if (h(e)) {
                var t,
                  n = e.body;
                if (d(n) === S)
                  return (
                    (t = e.headers ? new k(e.headers) : new k()).has(
                      "content-type"
                    ) ||
                      t.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ),
                    m(e, { body: C(0, String(n)), headers: C(0, t) })
                  );
              }
              return e;
            };
            if (
              ("function" == typeof E &&
                r(
                  { global: !0, enumerable: !0, forced: !0 },
                  {
                    fetch: function (e) {
                      return E(e, arguments.length > 1 ? J(arguments[1]) : {});
                    },
                  }
                ),
              "function" == typeof B)
            ) {
              var Z = function (e) {
                return (
                  u(this, Z, "Request"),
                  new B(e, arguments.length > 1 ? J(arguments[1]) : {})
                );
              };
              (x.constructor = Z),
                (Z.prototype = x),
                r({ global: !0, forced: !0 }, { Request: Z });
            }
          }
          e.exports = { URLSearchParams: _, getState: R };
        },
        285: function (e, t, n) {
          "use strict";
          n(8783);
          var r,
            o = n(2109),
            i = n(9781),
            A = n(590),
            a = n(7854),
            s = n(6048),
            l = n(1320),
            c = n(5787),
            u = n(6656),
            f = n(1574),
            p = n(8457),
            d = n(8710).codeAt,
            g = n(3197),
            h = n(1340),
            v = n(8003),
            m = n(1637),
            C = n(9909),
            y = a.URL,
            b = m.URLSearchParams,
            w = m.getState,
            E = C.set,
            B = C.getterFor("URL"),
            x = Math.floor,
            k = Math.pow,
            I = "Invalid scheme",
            S = "Invalid host",
            T = "Invalid port",
            L = /[A-Za-z]/,
            R = /[\d+-.A-Za-z]/,
            Q = /\d/,
            M = /^0x/i,
            O = /^[0-7]+$/,
            D = /^\d+$/,
            F = /^[\dA-Fa-f]+$/,
            P = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
            U = /[\0\t\n\r #/:<>?@[\\\]^|]/,
            N = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
            W = /[\t\n\r]/g,
            j = function (e, t) {
              var n, r, o;
              if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return S;
                if (!(n = G(t.slice(1, -1)))) return S;
                e.host = n;
              } else if (X(e)) {
                if (((t = g(t)), P.test(t))) return S;
                if (null === (n = Y(t))) return S;
                e.host = n;
              } else {
                if (U.test(t)) return S;
                for (n = "", r = p(t), o = 0; o < r.length; o++)
                  n += Z(r[o], V);
                e.host = n;
              }
            },
            Y = function (e) {
              var t,
                n,
                r,
                o,
                i,
                A,
                a,
                s = e.split(".");
              if (
                (s.length && "" == s[s.length - 1] && s.pop(),
                (t = s.length) > 4)
              )
                return e;
              for (n = [], r = 0; r < t; r++) {
                if ("" == (o = s[r])) return e;
                if (
                  ((i = 10),
                  o.length > 1 &&
                    "0" == o.charAt(0) &&
                    ((i = M.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
                  "" === o)
                )
                  A = 0;
                else {
                  if (!(10 == i ? D : 8 == i ? O : F).test(o)) return e;
                  A = parseInt(o, i);
                }
                n.push(A);
              }
              for (r = 0; r < t; r++)
                if (((A = n[r]), r == t - 1)) {
                  if (A >= k(256, 5 - t)) return null;
                } else if (A > 255) return null;
              for (a = n.pop(), r = 0; r < n.length; r++)
                a += n[r] * k(256, 3 - r);
              return a;
            },
            G = function (e) {
              var t,
                n,
                r,
                o,
                i,
                A,
                a,
                s = [0, 0, 0, 0, 0, 0, 0, 0],
                l = 0,
                c = null,
                u = 0,
                f = function () {
                  return e.charAt(u);
                };
              if (":" == f()) {
                if (":" != e.charAt(1)) return;
                (u += 2), (c = ++l);
              }
              for (; f(); ) {
                if (8 == l) return;
                if (":" != f()) {
                  for (t = n = 0; n < 4 && F.test(f()); )
                    (t = 16 * t + parseInt(f(), 16)), u++, n++;
                  if ("." == f()) {
                    if (0 == n) return;
                    if (((u -= n), l > 6)) return;
                    for (r = 0; f(); ) {
                      if (((o = null), r > 0)) {
                        if (!("." == f() && r < 4)) return;
                        u++;
                      }
                      if (!Q.test(f())) return;
                      for (; Q.test(f()); ) {
                        if (((i = parseInt(f(), 10)), null === o)) o = i;
                        else {
                          if (0 == o) return;
                          o = 10 * o + i;
                        }
                        if (o > 255) return;
                        u++;
                      }
                      (s[l] = 256 * s[l] + o), (2 != ++r && 4 != r) || l++;
                    }
                    if (4 != r) return;
                    break;
                  }
                  if (":" == f()) {
                    if ((u++, !f())) return;
                  } else if (f()) return;
                  s[l++] = t;
                } else {
                  if (null !== c) return;
                  u++, (c = ++l);
                }
              }
              if (null !== c)
                for (A = l - c, l = 7; 0 != l && A > 0; )
                  (a = s[l]), (s[l--] = s[c + A - 1]), (s[c + --A] = a);
              else if (8 != l) return;
              return s;
            },
            z = function (e) {
              var t, n, r, o;
              if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++)
                  t.unshift(e % 256), (e = x(e / 256));
                return t.join(".");
              }
              if ("object" == typeof e) {
                for (
                  t = "",
                    r = (function (e) {
                      for (
                        var t = null, n = 1, r = null, o = 0, i = 0;
                        i < 8;
                        i++
                      )
                        0 !== e[i]
                          ? (o > n && ((t = r), (n = o)), (r = null), (o = 0))
                          : (null === r && (r = i), ++o);
                      return o > n && ((t = r), (n = o)), t;
                    })(e),
                    n = 0;
                  n < 8;
                  n++
                )
                  (o && 0 === e[n]) ||
                    (o && (o = !1),
                    r === n
                      ? ((t += n ? ":" : "::"), (o = !0))
                      : ((t += e[n].toString(16)), n < 7 && (t += ":")));
                return "[" + t + "]";
              }
              return e;
            },
            V = {},
            _ = f({}, V, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
            H = f({}, _, { "#": 1, "?": 1, "{": 1, "}": 1 }),
            J = f({}, H, {
              "/": 1,
              ":": 1,
              ";": 1,
              "=": 1,
              "@": 1,
              "[": 1,
              "\\": 1,
              "]": 1,
              "^": 1,
              "|": 1,
            }),
            Z = function (e, t) {
              var n = d(e, 0);
              return n > 32 && n < 127 && !u(t, e) ? e : encodeURIComponent(e);
            },
            K = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
            X = function (e) {
              return u(K, e.scheme);
            },
            q = function (e) {
              return "" != e.username || "" != e.password;
            },
            $ = function (e) {
              return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
            },
            ee = function (e, t) {
              var n;
              return (
                2 == e.length &&
                L.test(e.charAt(0)) &&
                (":" == (n = e.charAt(1)) || (!t && "|" == n))
              );
            },
            te = function (e) {
              var t;
              return (
                e.length > 1 &&
                ee(e.slice(0, 2)) &&
                (2 == e.length ||
                  "/" === (t = e.charAt(2)) ||
                  "\\" === t ||
                  "?" === t ||
                  "#" === t)
              );
            },
            ne = function (e) {
              var t = e.path,
                n = t.length;
              !n || ("file" == e.scheme && 1 == n && ee(t[0], !0)) || t.pop();
            },
            re = function (e) {
              return "." === e || "%2e" === e.toLowerCase();
            },
            oe = {},
            ie = {},
            Ae = {},
            ae = {},
            se = {},
            le = {},
            ce = {},
            ue = {},
            fe = {},
            pe = {},
            de = {},
            ge = {},
            he = {},
            ve = {},
            me = {},
            Ce = {},
            ye = {},
            be = {},
            we = {},
            Ee = {},
            Be = {},
            xe = function (e, t, n, o) {
              var i,
                A,
                a,
                s,
                l,
                c = n || oe,
                f = 0,
                d = "",
                g = !1,
                h = !1,
                v = !1;
              for (
                n ||
                  ((e.scheme = ""),
                  (e.username = ""),
                  (e.password = ""),
                  (e.host = null),
                  (e.port = null),
                  (e.path = []),
                  (e.query = null),
                  (e.fragment = null),
                  (e.cannotBeABaseURL = !1),
                  (t = t.replace(N, ""))),
                  t = t.replace(W, ""),
                  i = p(t);
                f <= i.length;

              ) {
                switch (((A = i[f]), c)) {
                  case oe:
                    if (!A || !L.test(A)) {
                      if (n) return I;
                      c = Ae;
                      continue;
                    }
                    (d += A.toLowerCase()), (c = ie);
                    break;
                  case ie:
                    if (A && (R.test(A) || "+" == A || "-" == A || "." == A))
                      d += A.toLowerCase();
                    else {
                      if (":" != A) {
                        if (n) return I;
                        (d = ""), (c = Ae), (f = 0);
                        continue;
                      }
                      if (
                        n &&
                        (X(e) != u(K, d) ||
                          ("file" == d && (q(e) || null !== e.port)) ||
                          ("file" == e.scheme && !e.host))
                      )
                        return;
                      if (((e.scheme = d), n))
                        return void (
                          X(e) &&
                          K[e.scheme] == e.port &&
                          (e.port = null)
                        );
                      (d = ""),
                        "file" == e.scheme
                          ? (c = ve)
                          : X(e) && o && o.scheme == e.scheme
                          ? (c = ae)
                          : X(e)
                          ? (c = ue)
                          : "/" == i[f + 1]
                          ? ((c = se), f++)
                          : ((e.cannotBeABaseURL = !0),
                            e.path.push(""),
                            (c = we));
                    }
                    break;
                  case Ae:
                    if (!o || (o.cannotBeABaseURL && "#" != A)) return I;
                    if (o.cannotBeABaseURL && "#" == A) {
                      (e.scheme = o.scheme),
                        (e.path = o.path.slice()),
                        (e.query = o.query),
                        (e.fragment = ""),
                        (e.cannotBeABaseURL = !0),
                        (c = Be);
                      break;
                    }
                    c = "file" == o.scheme ? ve : le;
                    continue;
                  case ae:
                    if ("/" != A || "/" != i[f + 1]) {
                      c = le;
                      continue;
                    }
                    (c = fe), f++;
                    break;
                  case se:
                    if ("/" == A) {
                      c = pe;
                      break;
                    }
                    c = be;
                    continue;
                  case le:
                    if (((e.scheme = o.scheme), A == r))
                      (e.username = o.username),
                        (e.password = o.password),
                        (e.host = o.host),
                        (e.port = o.port),
                        (e.path = o.path.slice()),
                        (e.query = o.query);
                    else if ("/" == A || ("\\" == A && X(e))) c = ce;
                    else if ("?" == A)
                      (e.username = o.username),
                        (e.password = o.password),
                        (e.host = o.host),
                        (e.port = o.port),
                        (e.path = o.path.slice()),
                        (e.query = ""),
                        (c = Ee);
                    else {
                      if ("#" != A) {
                        (e.username = o.username),
                          (e.password = o.password),
                          (e.host = o.host),
                          (e.port = o.port),
                          (e.path = o.path.slice()),
                          e.path.pop(),
                          (c = be);
                        continue;
                      }
                      (e.username = o.username),
                        (e.password = o.password),
                        (e.host = o.host),
                        (e.port = o.port),
                        (e.path = o.path.slice()),
                        (e.query = o.query),
                        (e.fragment = ""),
                        (c = Be);
                    }
                    break;
                  case ce:
                    if (!X(e) || ("/" != A && "\\" != A)) {
                      if ("/" != A) {
                        (e.username = o.username),
                          (e.password = o.password),
                          (e.host = o.host),
                          (e.port = o.port),
                          (c = be);
                        continue;
                      }
                      c = pe;
                    } else c = fe;
                    break;
                  case ue:
                    if (((c = fe), "/" != A || "/" != d.charAt(f + 1)))
                      continue;
                    f++;
                    break;
                  case fe:
                    if ("/" != A && "\\" != A) {
                      c = pe;
                      continue;
                    }
                    break;
                  case pe:
                    if ("@" == A) {
                      g && (d = "%40" + d), (g = !0), (a = p(d));
                      for (var m = 0; m < a.length; m++) {
                        var C = a[m];
                        if (":" != C || v) {
                          var y = Z(C, J);
                          v ? (e.password += y) : (e.username += y);
                        } else v = !0;
                      }
                      d = "";
                    } else if (
                      A == r ||
                      "/" == A ||
                      "?" == A ||
                      "#" == A ||
                      ("\\" == A && X(e))
                    ) {
                      if (g && "" == d) return "Invalid authority";
                      (f -= p(d).length + 1), (d = ""), (c = de);
                    } else d += A;
                    break;
                  case de:
                  case ge:
                    if (n && "file" == e.scheme) {
                      c = Ce;
                      continue;
                    }
                    if (":" != A || h) {
                      if (
                        A == r ||
                        "/" == A ||
                        "?" == A ||
                        "#" == A ||
                        ("\\" == A && X(e))
                      ) {
                        if (X(e) && "" == d) return S;
                        if (n && "" == d && (q(e) || null !== e.port)) return;
                        if ((s = j(e, d))) return s;
                        if (((d = ""), (c = ye), n)) return;
                        continue;
                      }
                      "[" == A ? (h = !0) : "]" == A && (h = !1), (d += A);
                    } else {
                      if ("" == d) return S;
                      if ((s = j(e, d))) return s;
                      if (((d = ""), (c = he), n == ge)) return;
                    }
                    break;
                  case he:
                    if (!Q.test(A)) {
                      if (
                        A == r ||
                        "/" == A ||
                        "?" == A ||
                        "#" == A ||
                        ("\\" == A && X(e)) ||
                        n
                      ) {
                        if ("" != d) {
                          var b = parseInt(d, 10);
                          if (b > 65535) return T;
                          (e.port = X(e) && b === K[e.scheme] ? null : b),
                            (d = "");
                        }
                        if (n) return;
                        c = ye;
                        continue;
                      }
                      return T;
                    }
                    d += A;
                    break;
                  case ve:
                    if (((e.scheme = "file"), "/" == A || "\\" == A)) c = me;
                    else {
                      if (!o || "file" != o.scheme) {
                        c = be;
                        continue;
                      }
                      if (A == r)
                        (e.host = o.host),
                          (e.path = o.path.slice()),
                          (e.query = o.query);
                      else if ("?" == A)
                        (e.host = o.host),
                          (e.path = o.path.slice()),
                          (e.query = ""),
                          (c = Ee);
                      else {
                        if ("#" != A) {
                          te(i.slice(f).join("")) ||
                            ((e.host = o.host),
                            (e.path = o.path.slice()),
                            ne(e)),
                            (c = be);
                          continue;
                        }
                        (e.host = o.host),
                          (e.path = o.path.slice()),
                          (e.query = o.query),
                          (e.fragment = ""),
                          (c = Be);
                      }
                    }
                    break;
                  case me:
                    if ("/" == A || "\\" == A) {
                      c = Ce;
                      break;
                    }
                    o &&
                      "file" == o.scheme &&
                      !te(i.slice(f).join("")) &&
                      (ee(o.path[0], !0)
                        ? e.path.push(o.path[0])
                        : (e.host = o.host)),
                      (c = be);
                    continue;
                  case Ce:
                    if (
                      A == r ||
                      "/" == A ||
                      "\\" == A ||
                      "?" == A ||
                      "#" == A
                    ) {
                      if (!n && ee(d)) c = be;
                      else if ("" == d) {
                        if (((e.host = ""), n)) return;
                        c = ye;
                      } else {
                        if ((s = j(e, d))) return s;
                        if (("localhost" == e.host && (e.host = ""), n)) return;
                        (d = ""), (c = ye);
                      }
                      continue;
                    }
                    d += A;
                    break;
                  case ye:
                    if (X(e)) {
                      if (((c = be), "/" != A && "\\" != A)) continue;
                    } else if (n || "?" != A)
                      if (n || "#" != A) {
                        if (A != r && ((c = be), "/" != A)) continue;
                      } else (e.fragment = ""), (c = Be);
                    else (e.query = ""), (c = Ee);
                    break;
                  case be:
                    if (
                      A == r ||
                      "/" == A ||
                      ("\\" == A && X(e)) ||
                      (!n && ("?" == A || "#" == A))
                    ) {
                      if (
                        (".." === (l = (l = d).toLowerCase()) ||
                        "%2e." === l ||
                        ".%2e" === l ||
                        "%2e%2e" === l
                          ? (ne(e),
                            "/" == A || ("\\" == A && X(e)) || e.path.push(""))
                          : re(d)
                          ? "/" == A || ("\\" == A && X(e)) || e.path.push("")
                          : ("file" == e.scheme &&
                              !e.path.length &&
                              ee(d) &&
                              (e.host && (e.host = ""),
                              (d = d.charAt(0) + ":")),
                            e.path.push(d)),
                        (d = ""),
                        "file" == e.scheme && (A == r || "?" == A || "#" == A))
                      )
                        for (; e.path.length > 1 && "" === e.path[0]; )
                          e.path.shift();
                      "?" == A
                        ? ((e.query = ""), (c = Ee))
                        : "#" == A && ((e.fragment = ""), (c = Be));
                    } else d += Z(A, H);
                    break;
                  case we:
                    "?" == A
                      ? ((e.query = ""), (c = Ee))
                      : "#" == A
                      ? ((e.fragment = ""), (c = Be))
                      : A != r && (e.path[0] += Z(A, V));
                    break;
                  case Ee:
                    n || "#" != A
                      ? A != r &&
                        ("'" == A && X(e)
                          ? (e.query += "%27")
                          : (e.query += "#" == A ? "%23" : Z(A, V)))
                      : ((e.fragment = ""), (c = Be));
                    break;
                  case Be:
                    A != r && (e.fragment += Z(A, _));
                }
                f++;
              }
            },
            ke = function (e) {
              var t,
                n,
                r = c(this, ke, "URL"),
                o = arguments.length > 1 ? arguments[1] : void 0,
                A = h(e),
                a = E(r, { type: "URL" });
              if (void 0 !== o)
                if (o instanceof ke) t = B(o);
                else if ((n = xe((t = {}), h(o)))) throw TypeError(n);
              if ((n = xe(a, A, null, t))) throw TypeError(n);
              var s = (a.searchParams = new b()),
                l = w(s);
              l.updateSearchParams(a.query),
                (l.updateURL = function () {
                  a.query = String(s) || null;
                }),
                i ||
                  ((r.href = Se.call(r)),
                  (r.origin = Te.call(r)),
                  (r.protocol = Le.call(r)),
                  (r.username = Re.call(r)),
                  (r.password = Qe.call(r)),
                  (r.host = Me.call(r)),
                  (r.hostname = Oe.call(r)),
                  (r.port = De.call(r)),
                  (r.pathname = Fe.call(r)),
                  (r.search = Pe.call(r)),
                  (r.searchParams = Ue.call(r)),
                  (r.hash = Ne.call(r)));
            },
            Ie = ke.prototype,
            Se = function () {
              var e = B(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                o = e.host,
                i = e.port,
                A = e.path,
                a = e.query,
                s = e.fragment,
                l = t + ":";
              return (
                null !== o
                  ? ((l += "//"),
                    q(e) && (l += n + (r ? ":" + r : "") + "@"),
                    (l += z(o)),
                    null !== i && (l += ":" + i))
                  : "file" == t && (l += "//"),
                (l += e.cannotBeABaseURL
                  ? A[0]
                  : A.length
                  ? "/" + A.join("/")
                  : ""),
                null !== a && (l += "?" + a),
                null !== s && (l += "#" + s),
                l
              );
            },
            Te = function () {
              var e = B(this),
                t = e.scheme,
                n = e.port;
              if ("blob" == t)
                try {
                  return new ke(t.path[0]).origin;
                } catch (e) {
                  return "null";
                }
              return "file" != t && X(e)
                ? t + "://" + z(e.host) + (null !== n ? ":" + n : "")
                : "null";
            },
            Le = function () {
              return B(this).scheme + ":";
            },
            Re = function () {
              return B(this).username;
            },
            Qe = function () {
              return B(this).password;
            },
            Me = function () {
              var e = B(this),
                t = e.host,
                n = e.port;
              return null === t ? "" : null === n ? z(t) : z(t) + ":" + n;
            },
            Oe = function () {
              var e = B(this).host;
              return null === e ? "" : z(e);
            },
            De = function () {
              var e = B(this).port;
              return null === e ? "" : String(e);
            },
            Fe = function () {
              var e = B(this),
                t = e.path;
              return e.cannotBeABaseURL
                ? t[0]
                : t.length
                ? "/" + t.join("/")
                : "";
            },
            Pe = function () {
              var e = B(this).query;
              return e ? "?" + e : "";
            },
            Ue = function () {
              return B(this).searchParams;
            },
            Ne = function () {
              var e = B(this).fragment;
              return e ? "#" + e : "";
            },
            We = function (e, t) {
              return { get: e, set: t, configurable: !0, enumerable: !0 };
            };
          if (
            (i &&
              s(Ie, {
                href: We(Se, function (e) {
                  var t = B(this),
                    n = h(e),
                    r = xe(t, n);
                  if (r) throw TypeError(r);
                  w(t.searchParams).updateSearchParams(t.query);
                }),
                origin: We(Te),
                protocol: We(Le, function (e) {
                  var t = B(this);
                  xe(t, h(e) + ":", oe);
                }),
                username: We(Re, function (e) {
                  var t = B(this),
                    n = p(h(e));
                  if (!$(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += Z(n[r], J);
                  }
                }),
                password: We(Qe, function (e) {
                  var t = B(this),
                    n = p(h(e));
                  if (!$(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += Z(n[r], J);
                  }
                }),
                host: We(Me, function (e) {
                  var t = B(this);
                  t.cannotBeABaseURL || xe(t, h(e), de);
                }),
                hostname: We(Oe, function (e) {
                  var t = B(this);
                  t.cannotBeABaseURL || xe(t, h(e), ge);
                }),
                port: We(De, function (e) {
                  var t = B(this);
                  $(t) || ("" == (e = h(e)) ? (t.port = null) : xe(t, e, he));
                }),
                pathname: We(Fe, function (e) {
                  var t = B(this);
                  t.cannotBeABaseURL || ((t.path = []), xe(t, h(e), ye));
                }),
                search: We(Pe, function (e) {
                  var t = B(this);
                  "" == (e = h(e))
                    ? (t.query = null)
                    : ("?" == e.charAt(0) && (e = e.slice(1)),
                      (t.query = ""),
                      xe(t, e, Ee)),
                    w(t.searchParams).updateSearchParams(t.query);
                }),
                searchParams: We(Ue),
                hash: We(Ne, function (e) {
                  var t = B(this);
                  "" != (e = h(e))
                    ? ("#" == e.charAt(0) && (e = e.slice(1)),
                      (t.fragment = ""),
                      xe(t, e, Be))
                    : (t.fragment = null);
                }),
              }),
            l(
              Ie,
              "toJSON",
              function () {
                return Se.call(this);
              },
              { enumerable: !0 }
            ),
            l(
              Ie,
              "toString",
              function () {
                return Se.call(this);
              },
              { enumerable: !0 }
            ),
            y)
          ) {
            var je = y.createObjectURL,
              Ye = y.revokeObjectURL;
            je &&
              l(ke, "createObjectURL", function (e) {
                return je.apply(y, arguments);
              }),
              Ye &&
                l(ke, "revokeObjectURL", function (e) {
                  return Ye.apply(y, arguments);
                });
          }
          v(ke, "URL"), o({ global: !0, forced: !A, sham: !i }, { URL: ke });
        },
        3753: function (e, t, n) {
          "use strict";
          n(2109)(
            { target: "URL", proto: !0, enumerable: !0 },
            {
              toJSON: function () {
                return URL.prototype.toString.call(this);
              },
            }
          );
        },
        8594: function (e, t, n) {
          n(2526),
            n(1817),
            n(2443),
            n(2401),
            n(8722),
            n(2165),
            n(9007),
            n(6066),
            n(3510),
            n(1840),
            n(6982),
            n(2159),
            n(6649),
            n(9341),
            n(543),
            n(9170),
            n(2222),
            n(545),
            n(6541),
            n(3290),
            n(7327),
            n(9826),
            n(4553),
            n(4944),
            n(6535),
            n(9554),
            n(1038),
            n(6699),
            n(2772),
            n(9753),
            n(6992),
            n(9600),
            n(4986),
            n(1249),
            n(6572),
            n(5827),
            n(6644),
            n(5069),
            n(7042),
            n(5212),
            n(2707),
            n(8706),
            n(561),
            n(3792),
            n(9244),
            n(8264),
            n(6938),
            n(9575),
            n(6716),
            n(3016),
            n(3843),
            n(1801),
            n(9550),
            n(8733),
            n(5735),
            n(6078),
            n(3710),
            n(2130),
            n(4812),
            n(4855),
            n(8309),
            n(5837),
            n(8862),
            n(3706),
            n(1532),
            n(9752),
            n(2376),
            n(3181),
            n(3484),
            n(2388),
            n(8621),
            n(403),
            n(4755),
            n(5438),
            n(332),
            n(658),
            n(197),
            n(4914),
            n(2420),
            n(160),
            n(970),
            n(2703),
            n(3689),
            n(9653),
            n(3299),
            n(5192),
            n(3161),
            n(4048),
            n(8285),
            n(4363),
            n(5994),
            n(1874),
            n(9494),
            n(6977),
            n(5147),
            n(9601),
            n(8011),
            n(9595),
            n(3321),
            n(9070),
            n(5500),
            n(9720),
            n(3371),
            n(8559),
            n(5003),
            n(9337),
            n(6210),
            n(489),
            n(3304),
            n(1825),
            n(8410),
            n(2200),
            n(7941),
            n(4869),
            n(3952),
            n(7227),
            n(514),
            n(8304),
            n(1539),
            n(6833),
            n(4678),
            n(1058),
            n(8674),
            n(7922),
            n(4668),
            n(7727),
            n(224),
            n(2419),
            n(9596),
            n(2586),
            n(4819),
            n(5683),
            n(9361),
            n(1037),
            n(5898),
            n(7556),
            n(4361),
            n(3593),
            n(9532),
            n(1299),
            n(4603),
            n(8450),
            n(4916),
            n(2087),
            n(8386),
            n(7601),
            n(9714),
            n(189),
            n(9841),
            n(7852),
            n(4953),
            n(2023),
            n(8783),
            n(4723),
            n(6373),
            n(6528),
            n(3112),
            n(8992),
            n(2481),
            n(5306),
            n(8757),
            n(4765),
            n(3123),
            n(6755),
            n(3650),
            n(3210),
            n(8702),
            n(5674),
            n(5218),
            n(4475),
            n(7929),
            n(915),
            n(9253),
            n(2125),
            n(8830),
            n(8734),
            n(9254),
            n(7268),
            n(7397),
            n(86),
            n(623),
            n(4197),
            n(6495),
            n(7145),
            n(5109),
            n(5125),
            n(2472),
            n(9743),
            n(8255),
            n(9135),
            n(2990),
            n(8927),
            n(3105),
            n(5035),
            n(4345),
            n(7174),
            n(2846),
            n(8145),
            n(4731),
            n(7209),
            n(6319),
            n(8867),
            n(7789),
            n(3739),
            n(5206),
            n(9368),
            n(4483),
            n(2056),
            n(3462),
            n(678),
            n(7462),
            n(3824),
            n(5021),
            n(2974),
            n(5016),
            n(8221),
            n(4129),
            n(8478),
            n(4747),
            n(3948),
            n(4633),
            n(5844),
            n(2564),
            n(285),
            n(3753),
            n(1637),
            n(857);
        },
        2021: function (e, t, n) {
          "use strict";
          var r = n(4015),
            o = n.n(r),
            i = n(3645),
            A = n.n(i),
            a = n(1667),
            s = n.n(a),
            l = new URL(n(8613), n.b),
            c = new URL(n(5442), n.b),
            u = new URL(n(5986), n.b),
            f = A()(o()),
            p = s()(l),
            d = s()(c),
            g = s()(u);
          f.push([
            e.id,
            '@charset "UTF-8";@keyframes op-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes op-slideOutDown{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes op-slideOutDown{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@-webkit-keyframes op-slideInUp{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);opacity:1}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes op-slideInUp{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);opacity:1}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@font-face{font-family:"frameIcon";src:url(' +
              p +
              ") format('truetype');font-weight:normal;font-style:normal}@font-face{font-family:'op-icons';src:url(" +
              d +
              ") format('truetype');font-weight:normal;font-style:normal}@font-face{font-family:'op-seek-icons';src:url(" +
              g +
              ') format(\'truetype\');font-weight:normal;font-style:normal}:root{--op-accent-color:#50e3c2}.op-wrapper.ovenplayer{position:relative;max-height:100%;overflow:hidden;zoom:1 !important;width:100%;display:block;font-family:Helvetica,Arial,sans-serif;background-color:#000;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;font-size:14px;font-weight:100;outline:0;-webkit-touch-callout:none;user-select:none}.op-wrapper.ovenplayer *{box-sizing:inherit}.op-wrapper.ovenplayer object{width:100%;height:100%;position:absolute}.op-wrapper.ovenplayer:before,.op-wrapper.ovenplayer:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.op-wrapper.ovenplayer *,.op-wrapper.ovenplayer *:before,.op-wrapper.ovenplayer *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.op-wrapper.ovenplayer.op-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:9999;margin:0;position:fixed}.op-wrapper.ovenplayer.op-fullscreen .op-watermark-container,.op-wrapper.ovenplayer.op-fullscreen .op-thumbnail-container{width:100vw;max-width:calc(100vh * 16 / 9);height:calc(100vw * 9 / 16);max-height:100vh;top:50%;left:50%;transform:translate(-50%, -50%)}.op-wrapper.ovenplayer.op-autohide{cursor:none}.op-wrapper.ovenplayer.op-autohide .op-bottom-panel{-webkit-animation-name:op-slideOutDown;animation-name:op-slideOutDown;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.op-wrapper.ovenplayer.op-autohide .op-progressbar-container,.op-wrapper.ovenplayer.op-autohide .op-controls .op-button{cursor:none}.op-wrapper.ovenplayer.op-autohide .op-caption-text-container{bottom:25px}.op-wrapper.ovenplayer.op-no-controls .op-controls-container{display:none !important}.op-wrapper.ovenplayer .op-ratio{padding-bottom:56.25%}.op-wrapper.ovenplayer ::-webkit-scrollbar{width:5px;height:8px}.op-wrapper.ovenplayer ::-webkit-scrollbar-button:start:decrement,.op-wrapper.ovenplayer ::-webkit-scrollbar-button:end:increment{display:block;height:3px;background:#2f2f3e}.op-wrapper.ovenplayer ::-webkit-scrollbar-track{background:#2f2f3e;-webkit-border-radius:10px;border-radius:10px}.op-wrapper.ovenplayer ::-webkit-scrollbar-thumb{height:50px;width:50px;background:#606071;-webkit-border-radius:8px;border-radius:8px}.op-wrapper.ovenplayer .op-clear{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Helvetica,Arial,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.op-player{position:absolute;top:0;height:100%;width:100%}.op-player .op-core-ui-wrapper{position:relative;height:100%}.op-player .op-media-element-container{position:absolute;left:0px;top:0px;width:100%;height:100%}.op-player .op-media-element-container video{position:absolute;left:0;top:0;width:100%;height:100%}.op-player .op-media-element-container object{width:100%;height:100%}.op-ads{position:absolute;height:100%;width:100%;padding-bottom:34px;top:0}.op-ads>div{position:absolute !important;width:100% !important;height:100% !important}.op-ads>div iframe{pointer-events:auto}.op-ads video.op-ads-vast-video{background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;z-index:1}.op-ads .op-ads-button{bottom:36px;cursor:default;margin-right:4px;pointer-events:auto;position:absolute;right:0;z-index:1;width:auto !important;height:auto !important;border-radius:4px;background-color:rgba(18,18,28,0.7);min-width:155px;display:none}.op-ads .op-ads-button .op-ads-textview{color:#e6e6e6;font-weight:normal;font-size:11px;padding:6px 12px;text-align:center;display:inline-block;width:100%;vertical-align:middle}.op-ads .op-ads-button .videoAdUiAction{padding:8px 24px;cursor:pointer;direction:ltr;font-weight:normal;font-size:20px;border:1px solid rgba(255,255,255,0.5)}.op-ads .op-ads-button .videoAdUiAction:hover{border-radius:4px;border:1px solid #fff}.op-ads .op-ads-button .videoAdUiAction i{display:inline-block;width:auto}.op-button{display:inline-block;border:none;background:transparent;padding:0;color:inherit;text-align:inherit;overflow:hidden;font-weight:100;text-indent:0 !important}.op-button:focus,.op-button{outline:0}i.op-con{font-family:"op-icons","op-seek-icons";font-style:normal;font-weight:normal;speak:none;font-size:inherit;width:auto;font-size:30px;line-height:30px;display:block;text-decoration:inherit;text-align:center;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}i.op-con.disable{color:#4f4f4f}i.op-con.op-close-icon::before{content:"\\e900"}i.op-con.op-pause-big::before{content:"\\e911"}i.op-con.op-fullscreen-compress::before{content:"\\e901"}i.op-con.op-fullscreen-expand::before{content:"\\e902"}i.op-con.op-arrow-left::before{content:"\\e903"}i.op-con.op-arrow-right::before{content:"\\e909"}i.op-con.op-empty-video::before{content:"\\e904"}i.op-con.op-play::before{content:"\\e906"}i.op-con.op-replay::before{content:"\\e908"}i.op-con.op-seek-back::before{content:"\\e920"}i.op-con.op-seek-forward::before{content:"\\e921"}i.op-con.op-playlist-icon::before{content:"\\e907"}i.op-con.op-replay-big::before{content:"\\e908"}i.op-con.op-setting::before{content:"\\e90A"}i.op-con.op-pause::before{content:"\\e90C"}i.op-con.op-volume-small{display:none;margin-top:-1px}i.op-con.op-volume-small::before{content:"\\e90D"}i.op-con.op-volume-mute{display:none}i.op-con.op-volume-mute::before{content:"\\e90E"}i.op-con.op-volume-max::before{content:"\\e90F"}i.op-con.op-play-big::before{content:"\\e910"}i.op-con.op-warning::before{content:"\\e912"}.op-badge{display:inline-block;padding:.75em .714em .714em .68em;font-size:1em;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.286em;background-color:#12121c}.op-playlist{position:absolute;width:100%;height:100%;left:0;top:0;padding:2.857em;background:#000;z-index:6}.op-playlist .op-badge{position:absolute;top:.857em;right:.857em;opacity:.7}.op-playlist .btn-left{float:left;font-size:2.857em}.op-playlist .btn-right{float:right;font-size:2.857em}.op-playlist .op-playlist-header{font-size:2.857em;font-weight:bold}.op-playlist .op-playlist-header:after{display:block;content:\'\';clear:both}.op-playlist .op-playlist-header .op-con.op-close-icon{float:right}.op-playlist .op-playlist-body{height:100%;overflow:hidden;position:relative}.op-playlist .op-playlist-body .op-playlist-body-arrows{margin-top:-15px;position:absolute;top:50%;height:30px;-ms-transform:translateY(-50%);transform:translateY(-50%);width:100%;left:0}.op-playlist .op-playlist-body .op-playlist-body-container{width:100%;height:100%;position:relative;margin-right:auto;margin-left:auto;max-width:992px}.op-playlist .op-playlist-body .op-playlist-body-container .op-playlist-body-center{margin:0;position:absolute;top:50%;padding-right:3em;padding-left:3em;-ms-transform:translateY(-50%);transform:translateY(-50%);width:100%}.op-playlist .op-playlist-body .op-playlist-body-row{margin-right:-15px;margin-left:-15px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card{padding-right:15px;padding-left:15px;margin:15px 0;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;cursor:pointer}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card.active{color:#50e3c2;color:var(--op-accent-color)}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card.active .op-playlist-card-thumbnail{border-color:#50e3c2;border-color:var(--op-accent-color)}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-thumbnail{position:relative;display:block;width:100%;padding:0;overflow:hidden;border:.214em solid transparent;background-color:#000}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-thumbnail img{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-thumbnail.empty{background-color:#bababa}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-thumbnail.empty>i{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#fff !important;font-size:1.6em !important}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-thumbnail::before{padding-top:56.25%;display:block;content:""}.op-playlist .op-playlist-body .op-playlist-body-row .op-playlist-card .op-playlist-card-title{margin-top:.857em;font-size:1.429em;padding:2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.op-message-box{position:absolute;top:0;left:0;width:100%;height:100%;z-index:4}.op-message-box .op-message-container{position:absolute;top:45%;margin-top:-35px;width:100%;padding:0 12px;text-align:center}.op-message-box .op-message-container .op-message-text{display:inline-block;background-color:rgba(18,18,28,0.3);padding:.8em 1.2em;word-wrap:break-word;max-width:80%;border-radius:4px;cursor:pointer}.op-message-box .op-message-container .op-message-text .op-message-description{font-size:12px;margin-top:12px;color:#999}.op-message-box .op-message-container .op-message-icon{display:inline-block;margin-top:12px;width:100%}.op-message-box .op-message-container .op-message-icon i.op-con{cursor:pointer;font-size:80px;width:80px;height:80px;line-height:80px;display:inline-block;text-shadow:2px 2px 7px rgba(0,0,0,0.8),0 0 1px #000}.op-message-box.op-message-box-default-cursor .op-message-container .op-message-text{cursor:default}.op-message-box.op-message-box-default-cursor .op-message-container .op-message-icon i.op-con{cursor:default}.op-bigbutton-container{cursor:pointer;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;z-index:5}.op-bigbutton-container .op-bigbutton{width:80px;height:80px;display:block;font-size:80px;line-height:80px;text-shadow:2px 2px 7px rgba(0,0,0,0.8),0 0 1px #000}.op-thumbnail-container{position:absolute;width:100%;height:100%;top:0;left:0;z-index:2;pointer-events:none}.op-thumbnail-container .op-thumbnail-wrapper{position:absolute;left:0;top:0;width:100%;height:100%}.op-thumbnail-container .op-thumbnail-wrapper img{width:100%;height:100%}.op-thumbnail-container .op-thumbnail-wrapper .op-thumbnail-header{position:absolute;left:1rem;top:1rem;padding:0 .5rem;font-size:2.857em;font-weight:bold;line-height:1.4;text-shadow:2px 2px 7px rgba(0,0,0,0.8),0 0 1px #000}.op-thumbnail-container .op-thumbnail-wrapper .op-thumbnail-header:after{display:block;content:\'\';clear:both}.op-watermark-container{position:absolute;width:100%;height:100%;top:0;left:0;z-index:3}.op-watermark-container .op-watermark{position:absolute;display:inline-block}.op-watermark-container .op-watermark img{width:100%;height:100%}.op-watermark-container .op-watermark .op-watermark-text{font-size:14px}.op-setting-panel{position:absolute;bottom:55px;right:12px;overflow-y:auto;max-height:100%;width:260px;user-select:none;background-color:rgba(28,28,28,0.9);text-shadow:0 0 2px rgba(0,0,0,0.5);z-index:8}.op-setting-panel.background{display:none}.op-setting-panel .op-setting-title,.op-setting-panel .op-setting-item{width:100%;height:38px;line-height:38px;cursor:pointer;outline:none;text-align:left}.op-setting-panel .op-setting-title-container .op-setting-title .op-setting-title-title{padding-left:12px;font-weight:bold}.op-setting-panel .op-setting-title-container .op-setting-title .op-setting-title-previcon{padding:0 0 0 12px;margin-right:-6px}.op-setting-panel .op-setting-item-container .op-setting-item:hover{background-color:rgba(255,255,255,0.1)}.op-setting-panel .op-setting-item-container .op-setting-item .op-setting-item-title{padding-left:12px}.op-setting-panel .op-setting-item-container .op-setting-item .op-setting-item-nexticon{float:right;padding-right:12px;margin-left:-6px}.op-setting-panel .op-setting-item-container .op-setting-item span.op-setting-item-value{float:right;padding-right:12px}.op-setting-panel .op-setting-item-container .op-setting-item .op-setting-item-checked{padding-left:12px;visibility:hidden}.op-setting-panel .op-setting-item-container .op-setting-item .op-setting-item-checked.op-show{visibility:visible}.op-controls-container{display:none}.op-controls-container .op-bottom-panel{position:absolute;left:0px;bottom:0px;width:100%;z-index:5;-webkit-animation-name:op-slideInUp;animation-name:op-slideInUp;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.op-controls-container .op-bottom-panel .op-gradient-bottom{position:absolute;width:100%;height:100%;background-color:rgba(18,18,18,0.5);pointer-events:none}.op-controls-container .op-bottom-panel .op-progressbar-container{display:block;position:relative;width:100%;height:4px;cursor:pointer;bottom:50px}.op-controls-container .op-bottom-panel .op-progressbar-container.op-progressbar-container-disabled{cursor:default}.op-controls-container .op-bottom-panel .op-progressbar-container .op-progressbar-padding{position:absolute;width:100%;height:15px;bottom:-5px}.op-controls-container .op-bottom-panel .op-controls{position:relative;width:100%;height:50px;text-align:left;overflow:hidden}.op-controls-container .op-bottom-panel .op-controls:after{content:\'\';clear:both}.op-controls-container .op-bottom-panel .op-controls .op-setting-button{position:relative;margin-right:12px}.op-controls-container .op-bottom-panel .op-controls .op-playlist-button{position:relative;margin-right:12px}.op-controls-container .op-bottom-panel .op-controls .op-navigators{float:left;height:30px;line-height:30px}.op-controls-container .op-bottom-panel .op-controls .op-left-controls{position:absolute;top:0;left:0;padding:14px 0 10px 0}.op-controls-container .op-bottom-panel .op-controls .op-left-controls:after{content:\'\';clear:both}.op-controls-container .op-bottom-panel .op-controls .op-right-controls{position:absolute;top:0;right:0;padding:14px 0 10px 0}.op-controls-container .op-bottom-panel .op-controls .op-right-controls:after{content:\'\';clear:both}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons{position:relative;display:inline-block;margin-left:14px;overflow:hidden;font-weight:100;height:30px}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons .op-frame-button{margin-right:6px;position:relative;text-align:center;color:#fff}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons .op-frame-button .frame-icon{position:relative}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons .op-frame-button .frame-icon.reverse:after{content:\'\\e900\'}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons .op-frame-button .frame-icon:after{font-family:\'frameIcon\' !important;speak:none;content:\'\\e901\';font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;font-size:2.4em;left:0;line-height:30px;height:30px}.op-controls-container .op-bottom-panel .op-controls .op-frame-buttons .op-frame-button .frame-icon .btn-text{font-weight:bold;font-size:.8em;line-height:30px;height:30px}.op-progressbar{position:absolute;bottom:0;left:0;width:100%;height:100%;outline:none;margin-top:10px}.op-progressbar .op-play-background-color{background-color:#50e3c2;background-color:var(--op-accent-color)}.op-progressbar .op-progress-list{position:relative;height:100%;background:rgba(255,255,255,0.2)}.op-progressbar .op-progress-list .op-load-progress,.op-progressbar .op-progress-list .op-play-progress,.op-progressbar .op-progress-list .op-hover-progress{position:absolute;left:0;bottom:0;width:100%;height:100%}.op-progressbar .op-progress-list .op-play-progress{width:0}.op-progressbar .op-progress-list .op-load-progress{width:0;background-color:rgba(255,255,255,0.5)}.op-progressbar .op-progress-list .op-hover-progress{left:0;width:0;background-color:rgba(255,255,255,0.6)}.op-progressbar .op-progressbar-knob-container{position:absolute;top:-5px;left:0}.op-progressbar .op-progressbar-knob-container .op-progressbar-knob{width:14px;height:14px;border-radius:7px}.op-progressbar .op-progressbar-time{display:none;position:absolute;bottom:15px;left:auto;width:auto;background-color:rgba(28,28,28,0.9);border-radius:2px;padding:5px 9px;font-size:.8em;line-height:15px;user-select:none;opacity:.7}.op-progressbar-hover .op-progressbar-time{display:inline-block}.op-on-error .op-progressbar-time{display:none}.op-progressbar-section-start,.op-progressbar-section-end{display:none;position:absolute;width:3px;height:14px;bottom:-5px;background-color:#50e3c2;background-color:var(--op-accent-color)}.op-progressbar-preview{position:absolute;display:none;bottom:50px;border:2px solid #fff;border-radius:2px;background-color:#000;z-index:9}.op-play-controller{margin-left:15px}.op-seek-button{position:relative;top:0px}.op-seek-button.op-seek-button-back{margin-left:12px}.op-seek-button.op-seek-button-forward{margin-left:6px}.op-seek-button i{padding-top:1px;font-size:26px}.op-seek-button span{position:absolute;top:10.5px;left:0;right:0;text-align:center;font-size:10px;line-height:10px;cursor:pointer}.op-volume-controller{display:inline-block;position:relative;margin-left:12px}.op-volume-controller:after{content:\'\';clear:both}.op-volume-controller .op-volume-button{float:left}@-webkit-keyframes slide{100%{left:0}}@keyframes slide{100%{left:0}}.op-volume-controller .op-volume-slider-container{float:left;opacity:0;position:relative;width:0px;margin-right:0;line-height:30px;height:30px;cursor:pointer;user-select:none;outline:none}.op-volume-controller .op-volume-slider-container.active{width:70px;opacity:1;margin-left:8px;-moz-transition:opacity .4s cubic-bezier(0, 0, .2, 1);-webkit-transition:opacity .4s cubic-bezier(0, 0, .2, 1);transition:opacity .4s cubic-bezier(0, 0, .2, 1)}.op-volume-controller .op-volume-slider-container .op-volume-silder{height:100%;position:relative}.op-volume-controller .op-volume-slider-container .op-volume-silder .op-volume-slider-bg,.op-volume-controller .op-volume-slider-container .op-volume-silder .op-volume-slider-value{position:absolute;display:block;left:0;top:50%;height:4px;margin-top:-2px;border-radius:10px}.op-volume-controller .op-volume-slider-container .op-volume-silder .op-volume-slider-bg{width:100%;background:#fff}.op-volume-controller .op-volume-slider-container .op-volume-silder .op-volume-slider-value{width:100%;background:#50e3c2;background:var(--op-accent-color);border-radius:10px 0 0 10px}.op-volume-controller .op-volume-slider-container .op-volume-silder .op-volume-slider-handle{position:absolute;top:50%;left:30px;width:12px;height:12px;border-radius:10px;margin-top:-6px;background:#fff}.op-time-display{float:left;position:relative;margin-left:14px;height:30px;line-height:30px;white-space:nowrap;vertical-align:top;font-size:14px;user-select:none}.op-time-display .op-live-badge{opacity:1;width:auto;display:inline-block}.op-time-display .op-live-badge:before{background:#ff0000;display:inline-block;position:relative;top:-2px;width:6px;height:6px;margin-right:5px;content:\'\';border-radius:6px}.op-time-display .op-live-badge .op-live-badge-lowlatency{display:inline-block;margin-right:5px}.op-context-panel{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;overflow:hidden;width:200px;padding:6px 0;z-index:8;background:rgba(28,28,28,0.9);text-shadow:0 0 2px rgba(0,0,0,0.5);font-weight:lighter;user-select:none}.op-context-panel:before,.op-context-panel:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.op-context-panel *,.op-context-panel *:before,.op-context-panel *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.op-context-panel .op-context-item{width:100%;height:38px;padding-left:12px;line-height:38px;cursor:pointer;outline:none;font-size:.8em;font-weight:lighter;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.op-context-panel .op-context-item:hover{background-color:rgba(255,255,255,0.1)}.op-fullscreen-button{position:relative;margin-right:15px}.op-fullscreen-button .op-fullscreen-compress{display:none}.op-spinner-container{position:absolute;top:50%;width:64px;left:50%;margin-left:-32px;margin-top:-32px;z-index:7;display:none}.op-spinner-container .op-spinner{display:inline-block;position:relative;width:64px;height:64px;border:4px solid transparent;border-top:4px solid #50e3c2;border-top:4px solid var(--op-accent-color);border-radius:50%;animation:spin 1.2s cubic-bezier(.5, 0, .5, 1) infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.op-caption-viewer .op-caption-text-container{position:absolute;bottom:60px;width:100%;padding:0 12px;text-align:center;-moz-transition:bottom .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:bottom .25s cubic-bezier(0, 0, .2, 1);transition:bottom .25s cubic-bezier(0, 0, .2, 1)}.op-caption-viewer .op-caption-text-container .op-caption-text{color:#fff;font-size:1em;line-height:1.2em;text-shadow:2px 2px 2px gray;padding:.1em .3em;user-select:none;word-break:break-word;white-space:pre-line;border:none;background:none}.op-caption-button{width:36px}.op-caption-button>i{font-size:18px;-moz-transition:color .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:color .25s cubic-bezier(0, 0, .2, 1);transition:color .25s cubic-bezier(0, 0, .2, 1)}.op-caption-active .op-caption-button>i{color:#F36446}.op-wrapper.ovenplayer.large{font-size:14px}.op-wrapper.ovenplayer.large .op-caption-text{font-size:2em;line-height:2em}.op-wrapper.ovenplayer.medium{font-size:12px}.op-wrapper.ovenplayer.medium .op-caption-text{font-size:1.4em;line-height:1.4em}.op-wrapper.ovenplayer.small{font-size:10px}.op-wrapper.ovenplayer.small .op-caption-text{font-size:1.4em;line-height:1.4em}.op-wrapper.ovenplayer.small .op-playlist{padding:1rem}.op-wrapper.ovenplayer.small .op-playlist .op-playlist-card{margin:5px 0}.op-wrapper.ovenplayer.xsmall{font-size:10px}.op-wrapper.ovenplayer.xsmall .op-bigbutton-container .op-bigbutton{width:60px;height:60px;font-size:60px;line-height:60px}.op-wrapper.ovenplayer.xsmall .op-caption-text{font-size:1.4em;line-height:1.4em}.op-wrapper.ovenplayer.xsmall .op-playlist{padding:1rem}.op-wrapper.ovenplayer.xsmall .op-playlist .op-playlist-header{font-size:2em}.op-wrapper.ovenplayer.xsmall .op-playlist .op-playlist-card{margin:5px 0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;padding:0 6em}.op-wrapper.ovenplayer.xsmall .op-playlist .op-playlist-card .op-playlist-card-title{margin-top:0}.op-wrapper.ovenplayer.xsmall .op-message-box .op-message-container{top:50%;font-weight:bold}.op-wrapper.ovenplayer.xsmall .op-message-box .op-message-container .op-message-icon{margin-top:0}.op-wrapper.ovenplayer.xsmall .op-message-box .op-message-container .op-message-icon .op-con{font-size:40px;width:40px;height:40px;line-height:40px}.op-wrapper.ovenplayer.xsmall .op-ads-button{bottom:22px}.op-wrapper.ovenplayer.xsmall .op-ads-button .videoAdUiAction{padding:4px;font-size:14px}.op-wrapper.ovenplayer.xxsmall .op-left-controls{max-width:240px;overflow:hidden}.op-wrapper.ovenplayer.xxsmall .op-live-badge-lowlatency{max-width:75px}.op-wrapper.ovenplayer.linear-ad .op-bottom-panel{height:34px}.op-wrapper.ovenplayer.linear-ad .op-bottom-panel .op-controls{top:4px}.op-wrapper.ovenplayer.linear-ad .op-bottom-panel .op-controls .op-left-controls{height:30px;padding:0}.op-wrapper.ovenplayer.linear-ad .op-bottom-panel .op-controls .op-right-controls{height:30px;padding:0}.op-wrapper.ovenplayer.linear-ad .op-ads{top:0;bottom:0}.op-wrapper.ovenplayer.linear-ad .op-button i.op-con{width:24px;height:24px;font-size:24px}.op-wrapper.ovenplayer.linear-ad .op-controls-container .op-bottom-panel .op-progressbar-container{bottom:50px}@keyframes fade{from{opacity:.3}55%{opacity:1}75%{opacity:1}to{opacity:.3}}@-webkit-keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;-webkit-transform:scale3d(.5, .5, .5);transform:scale3d(.5, .5, .5)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(.9, .9, .9);transform:scale3d(.9, .9, .9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(.97, .97, .97);transform:scale3d(.97, .97, .97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;-webkit-transform:scale3d(.3, .3, .3);transform:scale3d(.3, .3, .3)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(.9, .9, .9);transform:scale3d(.9, .9, .9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(.97, .97, .97);transform:scale3d(.97, .97, .97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.op-player .bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.op-player .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.op-player .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@media (prefers-reduced-motion){.op-player .animated{-webkit-animation:unset !important;animation:unset !important;-webkit-transition:none !important;transition:none !important}}@media only screen and (max-width:399px){.op-seek-button{display:none !important}}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/stylesheet/ovenplayer.less"],
              names: [],
              mappings:
                "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",
              sourcesContent: [
                '@charset "UTF-8";\n\n/**\n * @brief   Animation\n * */\n\n@keyframes op-spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes op-slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes op-slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@-webkit-keyframes op-slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes op-slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@font-face {\n  font-family: "frameIcon";\n  src: url("../assets/images/ic-player-frame-jump.ttf?rxg7gj") format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \'op-icons\';\n  src: url(\'../assets/fonts/fontello.ttf?13010392\') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \'op-seek-icons\';\n  src: url(\'../assets/fonts/seek-icons.ttf?13010392\') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * @brief   common style\n * */\n\n:root {\n  --op-accent-color: #50e3c2;\n}\n\n.op-wrapper.ovenplayer {\n  position: relative;\n  max-height: 100%;\n\n  overflow: hidden;\n  zoom: 1 !important;\n  width: 100%;\n  display: block;\n  font-family: Helvetica,Arial,sans-serif;\n  background-color: #000;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 100;\n  outline: 0;\n\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  * {\n    box-sizing: inherit;\n  }\n\n  object{\n    width:100%; height:100%;\n    position: absolute;\n  }\n\n  &:before, &:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  & *, & *:before, & *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  &.op-fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 9999;\n    margin: 0;\n    position: fixed;\n\n    .op-watermark-container,\n    .op-thumbnail-container {\n      width: 100vw;\n      max-width: calc(100vh * 16 / 9);\n      height: calc(100vw * 9 / 16);\n      max-height: 100vh;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n  }\n  &.op-autohide{\n    cursor: none;\n\n    .op-bottom-panel{\n\n      -webkit-animation-name: op-slideOutDown;\n      animation-name: op-slideOutDown;\n\n      -webkit-animation-duration: 0.2s;\n      animation-duration: 0.2s;\n      -webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n    }\n    .op-progressbar-container, .op-controls .op-button{\n      cursor: none;\n    }\n    .op-caption-text-container {\n      bottom: 25px;\n    }\n  }\n\n  &.op-no-controls {\n\n    .op-controls-container {\n      display: none !important;\n    }\n  }\n\n  .op-ratio {\n    padding-bottom: 56.25%; /*16:9*/\n  }\n  & ::-webkit-scrollbar {width:5px; height:8px;}\n  & ::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment {display: block; height:3px; background:#2f2f3e;}\n  & ::-webkit-scrollbar-track {background: #2f2f3e; -webkit-border-radius: 10px; border-radius:10px;}\n  & ::-webkit-scrollbar-thumb {height: 50px; width: 50px; background:#606071; -webkit-border-radius: 8px; border-radius: 8px;}\n\n  .op-clear{\n    color: inherit;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    float: none;\n    font-family: Helvetica,Arial,sans-serif;\n    font-size: 1em;\n    line-height: 1em;\n    list-style: none;\n    text-transform: none;\n    vertical-align: baseline;\n    border: 0;\n    font-variant: inherit;\n    font-stretch: inherit;\n    -webkit-tap-highlight-color: rgba(255,255,255,0);\n  }\n}\n\n.op-player {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width : 100%;\n\n\n\n  .op-core-ui-wrapper {\n    position : relative;\n    height: 100%;\n  }\n\n  .op-media-element-container {\n   /* display: block;\n    height: 100%;\n    width: auto;\n    position : relative;*/\n\n\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n\n    video {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height : 100%;\n    }\n    object {\n      width: 100%;\n      height : 100%;\n    }\n  }\n\n  .op-ui {\n    /*position : absolute;\n    bottom : 0px;\n    left : 0px;\n    width: 100%;\n    height: 100%;*/\n    .op-controls-container{}\n    .op-helpers-container{}\n  }\n}\n.op-ads{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  padding-bottom : 34px;\n  //pointer-events: none;\n  top:0;\n  &>div{\n    position: absolute !important;\n    width: 100% !important;\n    height: 100% !important;\n    iframe{\n      pointer-events :auto;\n    }\n  }\n\n  video.op-ads-vast-video{\n    background-color: rgb(0, 0, 0);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n  }\n\n  .op-ads-button{\n    bottom: 36px;\n    cursor: default;\n    margin-right: 4px;\n    pointer-events: auto;\n    position: absolute;\n    right: 0;\n    z-index: 1;\n    width: auto !important;\n    height: auto !important;\n    border-radius: 4px;\n    background-color: rgba(18, 18, 28, 0.7);\n    min-width: 155px;\n    display: none;\n\n    .op-ads-textview{\n      color: #e6e6e6;\n      //font-family: arial,sans-serif;\n      font-weight: normal;\n      font-size: 11px;\n      padding: 6px 12px;\n      text-align: center;\n      display: inline-block;\n      width: 100%;\n      vertical-align: middle;\n    }\n    .videoAdUiAction {\n      padding: 8px 24px;\n      cursor: pointer;\n      direction: ltr;\n      font-weight: normal;\n      font-size: 20px;\n      border : 1px solid rgba(255,255,255,0.5);\n      &:hover{\n        border-radius: 4px;\n        border : 1px solid rgba(255,255,255,1);\n      }\n      i{\n        display: inline-block;\n        width : auto;\n      }\n    }\n  }\n\n}\n\n/**\n * @brief   common components\n * */\n\n.op-button {\n  display: inline-block;\n  border: none;\n  background: transparent;\n  padding: 0;\n  color: inherit;\n  text-align: inherit;\n  overflow: hidden;\n  font-weight: 100;\n  text-indent: 0 !important;\n\n  &:focus, & {\n    outline: 0;\n  }\n}\n\ni.op-con{\n  font-family: "op-icons", "op-seek-icons";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n\n  font-size: inherit;\n  width: auto;\n  font-size : 30px;\n  line-height: 30px;\n\n  display: block;\n  text-decoration: inherit;\n  text-align: center;\n\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  cursor: pointer;\n\n  &.disable {\n    color : #4f4f4f;\n  }\n  &.op-close-icon{&::before{content: "\\e900";}}\n  &.op-pause-big{&::before{content: "\\e911";}}\n  &.op-fullscreen-compress{&::before{content: "\\e901";}}\n  &.op-fullscreen-expand{&::before{content: "\\e902";}}\n  &.op-arrow-left{&::before{content: "\\e903";}}\n  &.op-arrow-right{&::before{content: "\\e909";}}\n  &.op-empty-video{&::before{content: "\\e904";}}\n  &.op-play{&::before{content: "\\e906";}}\n  &.op-replay{&::before{content: "\\e908";}}\n  &.op-seek-back{&::before{content: "\\e920";}}\n  &.op-seek-forward{&::before{content: "\\e921";}}\n  &.op-playlist-icon{&::before{content: "\\e907";}}\n  &.op-replay-big{&::before{content: "\\e908";}}\n  &.op-setting{&::before{content: "\\e90A";}}\n  &.op-pause{&::before{content: "\\e90C";}}\n  &.op-volume-small{display:none;margin-top:-1px;&::before{content: "\\e90D";}}\n  &.op-volume-mute{display:none;&::before{content: "\\e90E";}}\n  &.op-volume-max{&::before{content: "\\e90F";}}\n  &.op-play-big{&::before{content: "\\e910";}}\n  &.op-warning{&::before{content: "\\e912";}}\n}\n.op-badge{\n  display: inline-block;\n  padding: .75em .714em .714em .680em;\n  font-size: 1em;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.286em;\n  background-color: #12121c;\n}\n.op-playlist {\n  position : absolute;\n  width : 100%;\n  height:100%;\n  left: 0;\n  top : 0;\n  padding: 2.857em;\n  background: #000;\n  z-index : 6;\n  .op-badge{\n    position: absolute;\n    top: 0.857em;\n    right: 0.857em;\n    opacity: 0.7;\n  }\n  .btn-left {\n    float : left;\n    font-size:2.857em;\n  }\n  .btn-right {\n    float : right;\n    font-size: 2.857em;\n  }\n\n  .op-playlist-header{\n    font-size: 2.857em;\n    font-weight: bold;\n    &:after{\n      display: block;\n      content: \'\';\n      clear: both;\n    }\n    .op-con.op-close-icon{\n      float : right;\n    }\n  }\n  .op-playlist-body{\n    height: 100%;\n    overflow: hidden;\n    position : relative;\n    .op-playlist-body-arrows{\n      margin-top: -15px;\n      position: absolute;\n      top: 50%;\n      height : 30px;\n      -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n      width: 100%;\n      left: 0;\n    }\n    .op-playlist-body-container{\n      width: 100%;\n      height : 100%;\n      position : relative;\n      margin-right : auto;\n      margin-left : auto;\n      max-width : 992px;\n      .op-playlist-body-center{\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        padding-right : 3em;\n        padding-left : 3em;\n        -ms-transform: translateY(-50%);\n        transform: translateY(-50%);\n        width: 100%;\n      }\n    }\n    .op-playlist-body-row{\n      margin-right: -15px;\n      margin-left: -15px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n\n\n      .op-playlist-card{\n        padding-right : 15px;\n        padding-left : 15px;\n        margin : 15px 0;\n        -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        -ms-flex: 0 0 33.333333%;\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n        cursor: pointer;\n\n        &.active {\n          color: #50e3c2;\n          color : var(--op-accent-color);\n          .op-playlist-card-thumbnail{\n            border-color : #50e3c2;\n            border-color : var(--op-accent-color);\n          }\n        }\n\n        .op-playlist-card-thumbnail{\n          position: relative;\n          display: block;\n          width: 100%;\n          padding: 0;\n          overflow: hidden;\n          border : 0.214em solid transparent;\n          background-color: #000;\n\n          img{\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border: 0;\n          }\n          &.empty {\n            background-color: #bababa;\n            &>i{\n              margin: 0;\n              position: absolute;\n              top: 50%;\n              left: 50%;\n              transform: translate(-50%, -50%);\n              color : #fff !important;\n              font-size : 1.6em !important;\n            }\n          }\n          &::before {\n            padding-top: 56.25%;\n            display: block;\n            content: "";\n          }\n        }\n        .op-playlist-card-title{\n          margin-top : 0.857em;\n          font-size: 1.429em;\n          padding: 2px 0;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n\n      }\n    }\n\n  }\n}\n\n\n/**\n * @brief   Message Box\n * */\n\n.op-message-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index : 4;\n  .op-message-container {\n    position: absolute;\n    top: 45%;\n    margin-top : -35px;\n    width: 100%;\n    padding: 0 12px;\n    text-align: center;\n\n    .op-message-text {\n      display: inline-block;\n      background-color: rgba(18,18,28,.3);\n      padding: 0.8em 1.2em;\n      word-wrap: break-word;\n      max-width : 80%;\n      border-radius: 4px;\n      cursor: pointer;\n      .op-message-description{\n        font-size : 12px;\n        margin-top: 12px;\n        color : #999;\n      }\n    }\n\n\n    .op-message-icon{\n      display: inline-block;\n      margin-top : 12px;\n      width: 100%;\n      i.op-con{\n        cursor: pointer;\n        font-size: 80px;\n        width : 80px;\n        height : 80px;\n        line-height : 80px;\n        display: inline-block;\n        text-shadow: 2px 2px 7px rgb(0 0 0 / 80%), 0px 0px 1px rgb(0 0 0);\n      }\n    }\n    /*.op-message-button{\n      display: inline-block;\n      padding : 1em;\n      margin-left : 0.4em;\n      background-color: rgba(28,28,28,.4);\n      cursor : pointer;\n    }*/\n  }\n}\n\n.op-message-box.op-message-box-default-cursor .op-message-container .op-message-text {\n  cursor: default;\n}\n\n.op-message-box.op-message-box-default-cursor .op-message-container .op-message-icon i.op-con {\n  cursor: default;\n}\n\n/**\n * @brief   Big button\n * */\n\n.op-bigbutton-container {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index : 5;\n  .op-bigbutton {\n    width: 80px;\n    height: 80px;\n    display: block;\n    font-size: 80px;\n    line-height: 80px;\n    text-shadow: 2px 2px 7px rgb(0 0 0 / 80%), 0px 0px 1px rgb(0 0 0);\n  }\n}\n\n/**\n * @brief   Thumbnail\n * */\n\n.op-thumbnail-container{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  //padding-bottom: 56.25%;\n  top: 0;\n  left: 0;\n  //transform: translate(-50%, -50%);\n  z-index : 2;\n  pointer-events: none;\n\n  .op-thumbnail-wrapper{\n    position: absolute;\n    left : 0;\n    top : 0;\n    width: 100%;\n    height : 100%;\n    img{\n      width:100%;\n      height:100%;\n    }\n    .op-thumbnail-header{\n      position: absolute;\n      left : 1rem;\n      top : 1rem;\n      padding: 0 0.5rem;\n      font-size: 2.857em;\n      font-weight: bold;\n      line-height: 1.4;\n      text-shadow: 2px 2px 7px rgb(0 0 0 / 80%), 0px 0px 1px rgb(0 0 0);\n      &:after{\n        display: block;\n        content: \'\';\n        clear: both;\n      }\n    }\n  }\n}\n\n/**\n * @brief   WaterMark\n * */\n\n.op-watermark-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  //padding-bottom: 56.25%;\n  top: 0;\n  left: 0;\n  //transform: translate(-50%, -50%);\n  z-index: 3;\n\n  .op-watermark {\n    position: absolute;\n    display: inline-block;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n\n    .op-watermark-text {\n      font-size: 14px;\n    }\n  }\n}\n\n/**\n * @brief   Setting panel\n * */\n\n.op-setting-panel {\n  position: absolute;\n  bottom: 55px;\n  right: 12px;\n  overflow-y : auto;\n  max-height:100%;\n  width: 260px;\n  //font-size: 0.8em;\n  user-select: none;\n  background-color: rgba(28,28,28,.9);\n  text-shadow: 0 0 2px rgba(0,0,0,.5);\n  z-index: 8;\n\n  &.background{\n    //opacity: 0;\n    //background-color: rgba(28,28,28,.0);\n    display: none;\n  }\n  .op-setting-title, .op-setting-item {\n    width: 100%;\n    height: 38px;\n    line-height: 38px;\n    cursor: pointer;\n    outline: none;\n    text-align: left;\n  }\n\n  .op-setting-title-container{\n    .op-setting-title{\n      .op-setting-title-title {\n        padding-left: 12px;\n        font-weight: bold;\n        //font-size: 0.9rem;\n      }\n      .op-setting-title-previcon {\n        padding: 0 0 0 12px;\n        margin-right: -6px;\n      }\n\n    }\n  }\n\n  .op-setting-item-container{\n    .op-setting-item{\n      &:hover {\n        background-color: rgba(255,255,255,.1);\n      }\n\n      .op-setting-item-title {\n        padding-left: 12px;\n      }\n      .op-setting-item-nexticon {\n        float: right;\n        padding-right: 12px;\n        margin-left: -6px;\n      }\n      span.op-setting-item-value {\n        float: right;\n        padding-right: 12px;\n      }\n      .op-setting-item-checked {\n        padding-left: 12px;\n        visibility: hidden;\n      }\n      .op-setting-item-checked.op-show {\n        visibility: visible;\n      }\n    }\n  }\n}\n\n\n\n/**\n * @brief   Controls (container)\n * */\n\n.op-controls-container{\n   display: none;\n  .op-bottom-panel {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    width : 100%;\n    z-index : 5;\n    .op-gradient-bottom {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(18, 18, 18, 0.5);\n      pointer-events: none;\n      /*-moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);\n      -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);\n      transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);*/\n    }\n    -webkit-animation-name: op-slideInUp;\n    animation-name: op-slideInUp;\n\n    -webkit-animation-duration: 0.5s;\n    animation-duration: 0.5s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n\n    .op-progressbar-container {\n      display: block;\n      position: relative;\n      width: 100%;\n      height: 4px;\n      cursor: pointer;\n      bottom: 50px;\n\n      &.op-progressbar-container-disabled {\n        cursor: default;\n      }\n\n      .op-progressbar-padding {\n        position: absolute;\n        width: 100%;\n        height: 15px;\n        bottom: -5px;\n      }\n    }\n\n\n    /*contols container*/\n    .op-controls {\n      position: relative;\n      width: 100%;\n      height: 50px;\n      text-align: left;\n      overflow: hidden;\n\n      &:after{\n        content: \'\';\n        clear: both;\n      }\n      .op-setting-button {\n        position: relative;\n        margin-right: 12px;\n      }\n      .op-playlist-button {\n        position: relative;\n        margin-right: 12px;\n      }\n\n      .op-navigators{\n        float : left;\n        height: 30px;\n        line-height: 30px;\n      }\n      .op-left-controls {\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: 14px 0 10px 0;\n        &:after{\n          content: \'\';\n          clear: both;\n        }\n      }\n      .op-right-controls {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 14px 0 10px 0;\n        &:after{\n          content: \'\';\n          clear: both;\n        }\n      }\n\n      /*maybe not use*/\n      .op-frame-buttons {\n        position: relative;\n        display: inline-block;\n        margin-left: 14px;\n        overflow: hidden;\n        font-weight: 100;\n        height: 30px;\n\n        .op-frame-button{\n          margin-right: 6px;\n          position: relative;\n          text-align: center;\n          color : #fff;\n          .frame-icon{\n            position: relative;\n\n            &.reverse{\n              &:after {\n                content: \'\\e900\';\n              }\n            }\n            &:after {\n              font-family: \'frameIcon\' !important;\n              speak: none;\n              content: \'\\e901\';\n              font-style: normal;\n              font-weight: normal;\n              font-variant: normal;\n              text-transform: none;\n\n              /* Better Font Rendering =========== */\n              -webkit-font-smoothing: antialiased;\n              -moz-osx-font-smoothing: grayscale;\n              position: absolute;\n              font-size: 2.4em;\n              left : 0;\n              line-height:30px;\n              height:30px;\n            }\n            .btn-text{\n              font-weight: bold;\n              font-size : 0.8em;\n              line-height:30px;\n              height:30px;\n            }\n\n          }\n\n        }\n\n      }\n    }\n  }\n\n}\n\n\n/**\n * @brief   Progressbar\n * */\n\n.op-progressbar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  margin-top : 10px;\n\n  .op-play-background-color {\n    background-color: #50e3c2; // for ie 11\n    background-color: var(--op-accent-color);\n  }\n\n  .op-progress-list {\n    position: relative;\n    height: 100%;\n    background: rgba(255,255,255,0.2);\n\n    .op-load-progress,\n    .op-play-progress,\n    .op-hover-progress {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .op-play-progress {\n      width: 0;\n    }\n    .op-load-progress {\n      width: 0;\n      background-color: rgba(255,255,255,.5);\n    }\n    .op-hover-progress {\n      left: 0;\n      width: 0;\n      background-color: rgba(255,255,255,.6);\n    }\n\n  }\n\n  .op-progressbar-knob-container {\n    position: absolute;\n    top: -5px;\n    left: 0;\n\n    .op-progressbar-knob {\n      width: 14px;\n      height: 14px;\n      border-radius: 7px;\n    }\n  }\n\n  .op-progressbar-time {\n    display: none;\n    position: absolute;\n    bottom: 15px;\n    left: auto;\n    width: auto;\n    background-color: rgba(28,28,28,0.9);\n    border-radius: 2px;\n    padding: 5px 9px;\n    font-size: 0.8em;\n    line-height: 15px;\n    user-select: none;\n    opacity: 0.7;\n  }\n\n\n}\n.op-progressbar-hover .op-progressbar-knob-container {\n\n}\n\n.op-progressbar-hover .op-progressbar-time {\n  display: inline-block;\n}\n\n.op-on-error .op-progressbar-time {\n  display: none;\n}\n\n.op-progressbar-section-start,\n.op-progressbar-section-end {\n  display: none;\n  position: absolute;\n  width: 3px;\n  height: 14px;\n  bottom: -5px;\n  background-color: #50e3c2;\n  background-color: var(--op-accent-color);\n}\n\n.op-progressbar-preview {\n  position: absolute;\n  display: none;\n  bottom: 50px;\n  border: 2px solid #fff;\n  border-radius: 2px;\n  background-color: #000;\n  z-index: 9;\n}\n\n.op-play-controller {\n  margin-left: 15px;\n}\n\n/**\n * @brief   Seek button\n * */\n\n.op-seek-button {\n  //display: none;\n  position: relative;\n  top: 0px;\n\n  &.op-seek-button-back {\n    margin-left: 12px;\n  }\n  &.op-seek-button-forward {\n    margin-left: 6px;\n  }\n\n  i {\n    padding-top: 1px;\n    font-size: 26px;\n  }\n\n  span {\n    position: absolute;\n    top: 10.5px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    font-size: 10px;\n    line-height: 10px;\n    cursor: pointer;\n  }\n}\n\n\n/**\n * @brief   Volume button\n * */\n.op-volume-controller {\n  display: inline-block;\n  position: relative;\n  margin-left: 12px;\n\n  &:after{\n    content: \'\';\n    clear: both;\n  }\n  .op-volume-button {\n    float : left;\n  }\n  @-webkit-keyframes slide {\n    100% { left: 0; }\n  }\n\n  @keyframes slide {\n    100% { left: 0; }\n  }\n\n  .op-volume-slider-container {\n    /*display: inline-block;*/\n    float : left;\n    opacity : 0;\n    position: relative;\n    width: 0px;\n    margin-right: 0;\n    line-height: 30px;\n    height: 30px;\n    cursor: pointer;\n    user-select: none;\n    outline: none;\n\n    &.active{\n      width: 70px;\n      opacity : 1;\n      margin-left: 8px;\n      -moz-transition: opacity .4s cubic-bezier(0.0,0.0,0.2,1);\n      -webkit-transition: opacity .4s cubic-bezier(0.0,0.0,0.2,1);\n      transition: opacity .4s cubic-bezier(0.0,0.0,0.2,1);\n    }\n\n    .op-volume-silder {\n      height: 100%;\n      position: relative;\n      .op-volume-slider-bg, .op-volume-slider-value {\n        position: absolute;\n        display: block;\n        left: 0;\n        top: 50%;\n        height: 4px;\n        margin-top: -2px;\n        border-radius: 10px;\n      }\n      .op-volume-slider-bg {\n        width: 100%;\n        background: #fff;\n      }\n      .op-volume-slider-value {\n        width: 100%;\n        background: #50e3c2;\n        background: var(--op-accent-color);\n        border-radius: 10px 0 0 10px;\n        //-moz-transition: width .2s cubic-bezier(0.0,0.0,0.2,1);\n        //-webkit-transition: width .2s cubic-bezier(0.0,0.0,0.2,1);\n        //transition: width .2s cubic-bezier(0.0,0.0,0.2,1);\n      }\n\n      .op-volume-slider-handle {\n        position: absolute;\n        top: 50%;\n        left: 30px;\n        width: 12px;\n        height: 12px;\n        border-radius: 10px;\n        margin-top: -6px;\n        background: #fff;\n        //-moz-transition: left .2s cubic-bezier(0.0,0.0,0.2,1);\n        //-webkit-transition: left .2s cubic-bezier(0.0,0.0,0.2,1);\n        //transition: left .2s cubic-bezier(0.0,0.0,0.2,1);\n      }\n    }\n  }\n}\n\n\n/**\n * @brief   Time Display\n * */\n\n.op-time-display {\n  float : left;\n  position: relative;\n  margin-left: 14px;\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  vertical-align: top;\n  font-size: 14px;\n  user-select: none; /*흠 이부분 어떻게 처리하지*/\n\n  .op-time-current,\n  .op-time-separator,\n  .op-time-duration {\n\n  }\n\n  .op-live-badge {\n    opacity: 1;\n    width: auto;\n    display: inline-block;\n\n    &:before {\n      background: #ff0000;\n      display: inline-block;\n      position: relative;\n      top: -2px;\n      width: 6px;\n      height: 6px;\n      margin-right: 5px;\n      content: \'\';\n      border-radius: 6px;\n    }\n    .op-live-badge-lowlatency {\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n\n}\n\n\n/**\n * @brief   Context Panel\n * */\n\n.op-context-panel {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  width: 200px;\n  padding: 6px 0;\n  z-index: 8;\n  background: rgba(28,28,28,0.9);\n  text-shadow: 0 0 2px rgba(0,0,0,.5);\n  font-weight : lighter;\n  user-select: none;\n\n  &:before, &:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  & *, & *:before, & *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  .op-context-item {\n    width: 100%;\n    height: 38px;\n    padding-left: 12px;\n    line-height: 38px;\n    cursor: pointer;\n    outline: none;\n    font-size: 0.8em;\n    font-weight: lighter;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    &:hover {\n      background-color: rgba(255,255,255,.1);\n    }\n  }\n\n}\n\n\n\n\n\n\n/**\n * @brief   FullScreen button\n * */\n\n.op-fullscreen-button {\n  position: relative;\n  margin-right: 15px;\n  .op-fullscreen-compress{display:none;}\n}\n\n/**\n * @brief   spinner\n * */\n\n.op-spinner-container {\n  position: absolute;\n  top: 50%;\n  width: 64px;\n  left: 50%;\n  margin-left: -32px;\n  margin-top: -32px;\n  z-index: 7;\n  display : none;\n\n\n  .op-spinner {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n\n    border: 4px solid transparent;\n    border-top: 4px solid #50e3c2;\n    border-top: 4px solid var(--op-accent-color);\n    border-radius: 50%;\n\n    animation: spin 1.2s  cubic-bezier(0.5, 0, 0.5, 1)  infinite;\n    @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  }\n\n}\n\n\n/**\n * @brief   caption.\n * */\n\n.op-caption-viewer {\n\n  .op-caption-text-container {\n    position: absolute;\n    bottom: 60px;\n    width: 100%;\n    padding: 0 12px;\n    text-align: center;\n    -moz-transition: bottom .25s cubic-bezier(0.0,0.0,0.2,1);\n    -webkit-transition: bottom .25s cubic-bezier(0.0,0.0,0.2,1);\n    transition: bottom .25s cubic-bezier(0.0,0.0,0.2,1);\n    .op-caption-text {\n      color: #fff;\n      font-size: 1em;\n      line-height: 1.2em;\n      text-shadow: 2px 2px 2px gray;\n      padding: .1em .3em;\n      user-select: none;\n      word-break: break-word;\n      white-space: pre-line;\n      border: none;\n      background: none;\n    }\n  }\n}\n\n.op-caption-button {\n  width: 36px;\n}\n\n.op-caption-button > i {\n  font-size: 18px;\n  -moz-transition: color .25s cubic-bezier(0.0,0.0,0.2,1);\n  -webkit-transition: color .25s cubic-bezier(0.0,0.0,0.2,1);\n  transition: color .25s cubic-bezier(0.0,0.0,0.2,1);\n}\n\n.op-caption-active .op-caption-button > i {\n  color: #F36446;\n}\n\n\n\n/*Responsive  */\n\n.op-wrapper.ovenplayer.large{\n  font-size : 14px;\n  .op-caption-text{\n    font-size : 2em;\n    line-height : 2em;\n  }\n\n}\n.op-wrapper.ovenplayer.medium{\n  font-size : 12px;\n  .op-caption-text{\n    font-size : 1.4em;\n    line-height : 1.4em;\n  }\n}\n.op-wrapper.ovenplayer.small{\n  font-size : 10px;\n  .op-caption-text{\n    font-size : 1.4em;\n    line-height : 1.4em;\n  }\n  .op-playlist{\n    padding : 1rem;\n    .op-playlist-card{\n      margin : 5px 0;\n    }\n  }\n\n}\n.op-wrapper.ovenplayer.xsmall{\n  font-size : 10px;\n  .op-bigbutton-container {\n\n    .op-bigbutton {\n      width: 60px;\n      height: 60px;\n      font-size: 60px;\n      line-height: 60px;\n    }\n  }\n\n  .op-caption-text{\n    font-size : 1.4em;\n    line-height : 1.4em;\n  }\n  .op-playlist{\n    padding : 1rem;\n    .op-playlist-header{\n      font-size : 2em;\n    }\n    .op-playlist-card{\n      margin : 5px 0;\n      -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n      max-width: 100%;\n      padding : 0 6em;\n\n      .op-playlist-card-title{\n        margin-top : 0;\n      }\n    }\n  }\n  .op-message-box{\n    .op-message-container{\n      top : 50%;\n      font-weight : bold;\n\n      .op-message-icon{\n        margin-top: 0;\n        .op-con{\n          font-size: 40px;\n          width : 40px;\n          height : 40px;\n          line-height : 40px;\n        }\n      }\n    }\n  }\n  .op-ads-button{\n    bottom: 22px;\n    .videoAdUiAction{\n      padding: 4px;\n      font-size: 14px;\n    }\n  }\n}\n\n.op-wrapper.ovenplayer.xxsmall{\n\n  .op-left-controls {\n    max-width: 240px; // for small layout\n    overflow: hidden; // for small layout\n  }\n\n  .op-live-badge-lowlatency {\n    max-width: 75px;\n  }\n}\n\n/*AD MODE*/\n.op-wrapper.ovenplayer.linear-ad{\n\n  .op-bottom-panel{\n    height : 34px;\n    .op-controls{\n\n      top: 4px;\n\n      .op-left-controls{\n        height: 30px;\n        padding : 0;\n      }\n      .op-right-controls{\n        height: 30px;\n        padding : 0;\n      }\n    }\n  }\n  .op-ads{\n    top: 0;\n    bottom : 0;\n  }\n\n  .op-button{\n    i.op-con{\n      width: 24px;\n      height: 24px;\n      font-size: 24px;\n    }\n  }\n  .op-right-controls{\n    .op-button{\n      //margin-top: -2px;\n    }\n  }\n\n  .op-controls-container .op-bottom-panel .op-progressbar-container {\n    bottom: 50px;\n  }\n}\n/**\n * @brief   Animation\n * */\n\n.op-player{\n  @keyframes fade {\n    from { opacity: 0.3; }\n    /*5% { opacity: 0.3; }*/\n    /*40% { opacity: 1; }*/\n    /*50% { opacity: 1; }*/\n    55% { opacity: 1; }\n    75% { opacity: 1; }\n    to { opacity: 0.3; }\n  }\n\n  @-webkit-keyframes bounceIn {\n    from,\n    20%,\n    40%,\n    60%,\n    80%,\n    to {\n      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    0% {\n      opacity: 0;\n      -webkit-transform: scale3d(0.5, 0.5, 0.5);\n      transform: scale3d(0.5, 0.5, 0.5);\n    }\n\n    20% {\n      -webkit-transform: scale3d(1.1, 1.1, 1.1);\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    40% {\n      -webkit-transform: scale3d(0.9, 0.9, 0.9);\n      transform: scale3d(0.9, 0.9, 0.9);\n    }\n\n    60% {\n      opacity: 1;\n      -webkit-transform: scale3d(1.03, 1.03, 1.03);\n      transform: scale3d(1.03, 1.03, 1.03);\n    }\n\n    80% {\n      -webkit-transform: scale3d(0.97, 0.97, 0.97);\n      transform: scale3d(0.97, 0.97, 0.97);\n    }\n\n    to {\n      opacity: 1;\n      -webkit-transform: scale3d(1, 1, 1);\n      transform: scale3d(1, 1, 1);\n    }\n  }\n\n  @keyframes bounceIn {\n    from,\n    20%,\n    40%,\n    60%,\n    80%,\n    to {\n      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    0% {\n      opacity: 0;\n      -webkit-transform: scale3d(0.3, 0.3, 0.3);\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    20% {\n      -webkit-transform: scale3d(1.1, 1.1, 1.1);\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n\n    40% {\n      -webkit-transform: scale3d(0.9, 0.9, 0.9);\n      transform: scale3d(0.9, 0.9, 0.9);\n    }\n\n    60% {\n      opacity: 1;\n      -webkit-transform: scale3d(1.03, 1.03, 1.03);\n      transform: scale3d(1.03, 1.03, 1.03);\n    }\n\n    80% {\n      -webkit-transform: scale3d(0.97, 0.97, 0.97);\n      transform: scale3d(0.97, 0.97, 0.97);\n    }\n\n    to {\n      opacity: 1;\n      -webkit-transform: scale3d(1, 1, 1);\n      transform: scale3d(1, 1, 1);\n    }\n  }\n\n  .bounceIn {\n    -webkit-animation-duration: 0.75s;\n    animation-duration: 0.75s;\n    -webkit-animation-name: bounceIn;\n    animation-name: bounceIn;\n  }\n  @-webkit-keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n  .fadeIn {\n    -webkit-animation-name: fadeIn;\n    animation-name: fadeIn;\n  }\n  .animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n  @media (prefers-reduced-motion) {\n    .animated {\n      -webkit-animation: unset !important;\n      animation: unset !important;\n      -webkit-transition: none !important;\n      transition: none !important;\n    }\n  }\n\n\n  /* Pulse Shrink */\n  /*.op-button {\n    //display: inline-block;\n    //vertical-align: middle;\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    transition-duration: 0.3s;\n    transition-property: transform;\n  }\n  .op-button:hover,\n  .op-button:focus,\n  .op-button:active {\n    transform: scale(1.1);\n  }*/\n}\n\n\n@media only screen and (max-width: 399px)  {\n  .op-seek-button {\n    display: none !important;\n  }\n}\n\n',
              ],
              sourceRoot: "",
            },
          ]),
            (t.Z = f);
        },
        3645: function (e) {
          "use strict";
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = e(t);
                  return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                }).join("");
              }),
              (t.i = function (e, n, r) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var o = {};
                if (r)
                  for (var i = 0; i < this.length; i++) {
                    var A = this[i][0];
                    null != A && (o[A] = !0);
                  }
                for (var a = 0; a < e.length; a++) {
                  var s = [].concat(e[a]);
                  (r && o[s[0]]) ||
                    (n &&
                      (s[2]
                        ? (s[2] = "".concat(n, " and ").concat(s[2]))
                        : (s[2] = n)),
                    t.push(s));
                }
              }),
              t
            );
          };
        },
        4015: function (e) {
          "use strict";
          function t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          e.exports = function (e) {
            var n,
              r,
              o =
                ((r = 4),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((n = e)) ||
                  (function (e, t) {
                    var n =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i = [],
                        A = !0,
                        a = !1;
                      try {
                        for (
                          n = n.call(e);
                          !(A = (r = n.next()).done) &&
                          (i.push(r.value), !t || i.length !== t);
                          A = !0
                        );
                      } catch (e) {
                        (a = !0), (o = e);
                      } finally {
                        try {
                          A || null == n.return || n.return();
                        } finally {
                          if (a) throw o;
                        }
                      }
                      return i;
                    }
                  })(n, r) ||
                  (function (e, n) {
                    if (e) {
                      if ("string" == typeof e) return t(e, n);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? t(e, n)
                          : void 0
                      );
                    }
                  })(n, r) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              i = o[1],
              A = o[3];
            if (!A) return i;
            if ("function" == typeof btoa) {
              var a = btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
                s =
                  "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                    a
                  ),
                l = "/*# ".concat(s, " */"),
                c = A.sources.map(function (e) {
                  return "/*# sourceURL="
                    .concat(A.sourceRoot || "")
                    .concat(e, " */");
                });
              return [i].concat(c).concat([l]).join("\n");
            }
            return [i].join("\n");
          };
        },
        1667: function (e) {
          "use strict";
          e.exports = function (e, t) {
            return (
              t || (t = {}),
              e
                ? ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  t.hash && (e += t.hash),
                  /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                    ? '"'.concat(
                        e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                        '"'
                      )
                    : e)
                : e
            );
          };
        },
        3379: function (e) {
          "use strict";
          var t = [];
          function n(e) {
            for (var n = -1, r = 0; r < t.length; r++)
              if (t[r].identifier === e) {
                n = r;
                break;
              }
            return n;
          }
          function r(e, r) {
            for (var i = {}, A = [], a = 0; a < e.length; a++) {
              var s = e[a],
                l = r.base ? s[0] + r.base : s[0],
                c = i[l] || 0,
                u = "".concat(l, " ").concat(c);
              i[l] = c + 1;
              var f = n(u),
                p = { css: s[1], media: s[2], sourceMap: s[3] };
              -1 !== f
                ? (t[f].references++, t[f].updater(p))
                : t.push({ identifier: u, updater: o(p, r), references: 1 }),
                A.push(u);
            }
            return A;
          }
          function o(e, t) {
            var n = t.domAPI(t);
            return (
              n.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap
                  )
                    return;
                  n.update((e = t));
                } else n.remove();
              }
            );
          }
          e.exports = function (e, o) {
            var i = r((e = e || []), (o = o || {}));
            return function (e) {
              e = e || [];
              for (var A = 0; A < i.length; A++) {
                var a = n(i[A]);
                t[a].references--;
              }
              for (var s = r(e, o), l = 0; l < i.length; l++) {
                var c = n(i[l]);
                0 === t[c].references && (t[c].updater(), t.splice(c, 1));
              }
              i = s;
            };
          };
        },
        569: function (e) {
          "use strict";
          var t = {};
          e.exports = function (e, n) {
            var r = (function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            })(e);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          };
        },
        9216: function (e) {
          "use strict";
          e.exports = function (e) {
            var t = document.createElement("style");
            return e.setAttributes(t, e.attributes), e.insert(t), t;
          };
        },
        3565: function (e, t, n) {
          "use strict";
          e.exports = function (e) {
            var t = n.nc;
            t && e.setAttribute("nonce", t);
          };
        },
        7795: function (e) {
          "use strict";
          e.exports = function (e) {
            var t = e.insertStyleElement(e);
            return {
              update: function (n) {
                !(function (e, t, n) {
                  var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                  o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                    i &&
                      "undefined" != typeof btoa &&
                      (r +=
                        "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                          btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                          " */"
                        )),
                    t.styleTagTransform(r, e);
                })(t, e, n);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        4589: function (e) {
          "use strict";
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        7147: function (e, t, n) {
          "use strict";
          var r =
              ("undefined" != typeof globalThis && globalThis) ||
              ("undefined" != typeof self && self) ||
              (void 0 !== r && r),
            o = "URLSearchParams" in r,
            i = "Symbol" in r && "iterator" in Symbol,
            A =
              "FileReader" in r &&
              "Blob" in r &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            a = "FormData" in r,
            s = "ArrayBuffer" in r;
          if (s)
            var l = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              c =
                ArrayBuffer.isView ||
                function (e) {
                  return e && l.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function u(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            )
              throw new TypeError(
                'Invalid character in header field name: "' + e + '"'
              );
            return e.toLowerCase();
          }
          function f(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function p(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              i &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function d(e) {
            (this.map = {}),
              e instanceof d
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function g(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function h(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function v(e) {
            var t = new FileReader(),
              n = h(t);
            return t.readAsArrayBuffer(e), n;
          }
          function m(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function C() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this.bodyUsed = this.bodyUsed),
                  (this._bodyInit = e),
                  e
                    ? "string" == typeof e
                      ? (this._bodyText = e)
                      : A && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : a && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : o && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : s && A && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = m(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                      ? (this._bodyArrayBuffer = m(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" == typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : o &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              A &&
                ((this.blob = function () {
                  var e = g(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? g(this) ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                          ? Promise.resolve(
                              this._bodyArrayBuffer.buffer.slice(
                                this._bodyArrayBuffer.byteOffset,
                                this._bodyArrayBuffer.byteOffset +
                                  this._bodyArrayBuffer.byteLength
                              )
                            )
                          : Promise.resolve(this._bodyArrayBuffer))
                    : this.blob().then(v);
                })),
              (this.text = function () {
                var e,
                  t,
                  n,
                  r = g(this);
                if (r) return r;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (n = h((t = new FileReader()))),
                    t.readAsText(e),
                    n
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          n = new Array(t.length),
                          r = 0;
                        r < t.length;
                        r++
                      )
                        n[r] = String.fromCharCode(t[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              a &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (d.prototype.append = function (e, t) {
            (e = u(e)), (t = f(t));
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t;
          }),
            (d.prototype.delete = function (e) {
              delete this.map[u(e)];
            }),
            (d.prototype.get = function (e) {
              return (e = u(e)), this.has(e) ? this.map[e] : null;
            }),
            (d.prototype.has = function (e) {
              return this.map.hasOwnProperty(u(e));
            }),
            (d.prototype.set = function (e, t) {
              this.map[u(e)] = f(t);
            }),
            (d.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (d.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                p(e)
              );
            }),
            (d.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                p(e)
              );
            }),
            (d.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                p(e)
              );
            }),
            i && (d.prototype[Symbol.iterator] = d.prototype.entries);
          var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function b(e, t) {
            if (!(this instanceof b))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var n,
              r,
              o = (t = t || {}).body;
            if (e instanceof b) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new d(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                o ||
                  null == e._bodyInit ||
                  ((o = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new d(t.headers)),
              (this.method =
                ((r = (n = t.method || this.method || "GET").toUpperCase()),
                y.indexOf(r) > -1 ? r : n)),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && o)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(o),
              !(
                ("GET" !== this.method && "HEAD" !== this.method) ||
                ("no-store" !== t.cache && "no-cache" !== t.cache)
              ))
            ) {
              var i = /([?&])_=[^&]*/;
              i.test(this.url)
                ? (this.url = this.url.replace(
                    i,
                    "$1_=" + new Date().getTime()
                  ))
                : (this.url +=
                    (/\?/.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime());
            }
          }
          function w(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var n = e.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              t
            );
          }
          function E(e, t) {
            if (!(this instanceof E))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                void 0 === t.statusText ? "" : "" + t.statusText),
              (this.headers = new d(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (b.prototype.clone = function () {
            return new b(this, { body: this._bodyInit });
          }),
            C.call(b.prototype),
            C.call(E.prototype),
            (E.prototype.clone = function () {
              return new E(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new d(this.headers),
                url: this.url,
              });
            }),
            (E.error = function () {
              var e = new E(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var B = [301, 302, 303, 307, 308];
          E.redirect = function (e, t) {
            if (-1 === B.indexOf(t))
              throw new RangeError("Invalid status code");
            return new E(null, { status: t, headers: { location: e } });
          };
          var x = r.DOMException;
          try {
            new x();
          } catch (e) {
            ((x = function (e, t) {
              (this.message = e), (this.name = t);
              var n = Error(e);
              this.stack = n.stack;
            }).prototype = Object.create(Error.prototype)),
              (x.prototype.constructor = x);
          }
          function k(e, t) {
            return new Promise(function (n, o) {
              var i = new b(e, t);
              if (i.signal && i.signal.aborted)
                return o(new x("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function l() {
                a.abort();
              }
              (a.onload = function () {
                var e,
                  t,
                  r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers:
                      ((e = a.getAllResponseHeaders() || ""),
                      (t = new d()),
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (e) {
                          return 0 === e.indexOf("\n")
                            ? e.substr(1, e.length)
                            : e;
                        })
                        .forEach(function (e) {
                          var n = e.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o);
                          }
                        }),
                      t),
                  };
                r.url =
                  "responseURL" in a
                    ? a.responseURL
                    : r.headers.get("X-Request-URL");
                var o = "response" in a ? a.response : a.responseText;
                setTimeout(function () {
                  n(new E(o, r));
                }, 0);
              }),
                (a.onerror = function () {
                  setTimeout(function () {
                    o(new TypeError("Network request failed"));
                  }, 0);
                }),
                (a.ontimeout = function () {
                  setTimeout(function () {
                    o(new TypeError("Network request failed"));
                  }, 0);
                }),
                (a.onabort = function () {
                  setTimeout(function () {
                    o(new x("Aborted", "AbortError"));
                  }, 0);
                }),
                a.open(
                  i.method,
                  (function (e) {
                    try {
                      return "" === e && r.location.href ? r.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(i.url),
                  !0
                ),
                "include" === i.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === i.credentials && (a.withCredentials = !1),
                "responseType" in a &&
                  (A
                    ? (a.responseType = "blob")
                    : s &&
                      i.headers.get("Content-Type") &&
                      -1 !==
                        i.headers
                          .get("Content-Type")
                          .indexOf("application/octet-stream") &&
                      (a.responseType = "arraybuffer")),
                !t || "object" != typeof t.headers || t.headers instanceof d
                  ? i.headers.forEach(function (e, t) {
                      a.setRequestHeader(t, e);
                    })
                  : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                      a.setRequestHeader(e, f(t.headers[e]));
                    }),
                i.signal &&
                  (i.signal.addEventListener("abort", l),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      i.signal.removeEventListener("abort", l);
                  })),
                a.send(void 0 === i._bodyInit ? null : i._bodyInit);
            });
          }
          (k.polyfill = !0),
            r.fetch ||
              ((r.fetch = k),
              (r.Headers = d),
              (r.Request = b),
              (r.Response = E));
        },
        5442: function (e) {
          "use strict";
          e.exports =
            "data:font/ttf;base64,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";
        },
        5986: function (e) {
          "use strict";
          e.exports =
            "data:font/ttf;base64,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";
        },
        8613: function (e) {
          "use strict";
          e.exports =
            "data:font/ttf;base64,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";
        },
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = (t[r] = { id: r, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), i.exports;
    }
    (n.m = e),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      }),
      (n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.b = document.baseURI || self.location.href),
      n(8594),
      n(7147);
    var r = n(6757);
    return r.default;
  })();
});
//# sourceMappingURL=ovenplayer.js.map
