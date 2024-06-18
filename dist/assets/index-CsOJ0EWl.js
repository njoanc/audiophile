function Ym(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const l in n)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(n, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => n[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) n(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = r(l);
    fetch(l.href, i);
  }
})();
function Gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Dd = { exports: {} },
  Hi = {},
  Ud = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yl = Symbol.for("react.element"),
  Zm = Symbol.for("react.portal"),
  Jm = Symbol.for("react.fragment"),
  eh = Symbol.for("react.strict_mode"),
  th = Symbol.for("react.profiler"),
  rh = Symbol.for("react.provider"),
  nh = Symbol.for("react.context"),
  lh = Symbol.for("react.forward_ref"),
  ih = Symbol.for("react.suspense"),
  oh = Symbol.for("react.memo"),
  sh = Symbol.for("react.lazy"),
  qu = Symbol.iterator;
function ah(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qu && e[qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bd = Object.assign,
  Wd = {};
function xn(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wd),
    (this.updater = r || Vd);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hd() {}
Hd.prototype = xn.prototype;
function Sa(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wd),
    (this.updater = r || Vd);
}
var Na = (Sa.prototype = new Hd());
Na.constructor = Sa;
Bd(Na, xn.prototype);
Na.isPureReactComponent = !0;
var Xu = Array.isArray,
  qd = Object.prototype.hasOwnProperty,
  Ea = { current: null },
  Xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, r) {
  var n,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qd.call(t, n) && !Xd.hasOwnProperty(n) && (l[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) l.children = r;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) l[n] === void 0 && (l[n] = s[n]);
  return {
    $$typeof: yl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ea.current,
  };
}
function uh(e, t) {
  return {
    $$typeof: yl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ba(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yl;
}
function ch(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Qu = /\/+/g;
function To(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ch("" + e.key)
    : t.toString(36);
}
function Ql(e, t, r, n, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yl:
          case Zm:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = n === "" ? "." + To(o, 0) : n),
      Xu(l)
        ? ((r = ""),
          e != null && (r = e.replace(Qu, "$&/") + "/"),
          Ql(l, t, r, "", function (c) {
            return c;
          }))
        : l != null &&
          (ba(l) &&
            (l = uh(
              l,
              r +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Qu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), Xu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = n + To(i, s);
      o += Ql(i, t, r, a, l);
    }
  else if (((a = ah(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = n + To(i, s++)), (o += Ql(i, t, r, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Cl(e, t, r) {
  if (e == null) return e;
  var n = [],
    l = 0;
  return (
    Ql(e, n, "", "", function (i) {
      return t.call(r, i, l++);
    }),
    n
  );
}
function dh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Kl = { transition: null },
  fh = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Kl,
    ReactCurrentOwner: Ea,
  };
function Kd() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: Cl,
  forEach: function (e, t, r) {
    Cl(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Cl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ba(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = xn;
B.Fragment = Jm;
B.Profiler = th;
B.PureComponent = Sa;
B.StrictMode = eh;
B.Suspense = ih;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fh;
B.act = Kd;
B.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Bd({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ea.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      qd.call(t, a) &&
        !Xd.hasOwnProperty(a) &&
        (n[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) n.children = r;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    n.children = s;
  }
  return { $$typeof: yl, type: e.type, key: l, ref: i, props: n, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: nh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rh, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Qd;
B.createFactory = function (e) {
  var t = Qd.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: lh, render: e };
};
B.isValidElement = ba;
B.lazy = function (e) {
  return { $$typeof: sh, _payload: { _status: -1, _result: e }, _init: dh };
};
B.memo = function (e, t) {
  return { $$typeof: oh, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Kl.transition;
  Kl.transition = {};
  try {
    e();
  } finally {
    Kl.transition = t;
  }
};
B.unstable_act = Kd;
B.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Fe.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
B.useId = function () {
  return Fe.current.useId();
};
B.useImperativeHandle = function (e, t, r) {
  return Fe.current.useImperativeHandle(e, t, r);
};
B.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
B.useReducer = function (e, t, r) {
  return Fe.current.useReducer(e, t, r);
};
B.useRef = function (e) {
  return Fe.current.useRef(e);
};
B.useState = function (e) {
  return Fe.current.useState(e);
};
B.useSyncExternalStore = function (e, t, r) {
  return Fe.current.useSyncExternalStore(e, t, r);
};
B.useTransition = function () {
  return Fe.current.useTransition();
};
B.version = "18.3.1";
Ud.exports = B;
var N = Ud.exports;
const ce = Gm(N),
  ph = Ym({ __proto__: null, default: ce }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh = N,
  hh = Symbol.for("react.element"),
  gh = Symbol.for("react.fragment"),
  yh = Object.prototype.hasOwnProperty,
  vh = mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yd(e, t, r) {
  var n,
    l = {},
    i = null,
    o = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) yh.call(t, n) && !xh.hasOwnProperty(n) && (l[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) l[n] === void 0 && (l[n] = t[n]);
  return {
    $$typeof: hh,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: vh.current,
  };
}
Hi.Fragment = gh;
Hi.jsx = Yd;
Hi.jsxs = Yd;
Dd.exports = Hi;
var u = Dd.exports,
  ks = {},
  Gd = { exports: {} },
  Ze = {},
  Zd = { exports: {} },
  Jd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, A) {
    var D = T.length;
    T.push(A);
    e: for (; 0 < D; ) {
      var ee = (D - 1) >>> 1,
        ue = T[ee];
      if (0 < l(ue, A)) (T[ee] = A), (T[D] = ue), (D = ee);
      else break e;
    }
  }
  function r(T) {
    return T.length === 0 ? null : T[0];
  }
  function n(T) {
    if (T.length === 0) return null;
    var A = T[0],
      D = T.pop();
    if (D !== A) {
      T[0] = D;
      e: for (var ee = 0, ue = T.length, Lr = ue >>> 1; ee < Lr; ) {
        var xt = 2 * (ee + 1) - 1,
          Nn = T[xt],
          ut = xt + 1,
          hr = T[ut];
        if (0 > l(Nn, D))
          ut < ue && 0 > l(hr, Nn)
            ? ((T[ee] = hr), (T[ut] = D), (ee = ut))
            : ((T[ee] = Nn), (T[xt] = D), (ee = xt));
        else if (ut < ue && 0 > l(hr, D)) (T[ee] = hr), (T[ut] = D), (ee = ut);
        else break e;
      }
    }
    return A;
  }
  function l(T, A) {
    var D = T.sortIndex - A.sortIndex;
    return D !== 0 ? D : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    c = [],
    d = 1,
    f = null,
    m = 3,
    v = !1,
    x = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var A = r(c); A !== null; ) {
      if (A.callback === null) n(c);
      else if (A.startTime <= T)
        n(c), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = r(c);
    }
  }
  function j(T) {
    if (((w = !1), g(T), !x))
      if (r(a) !== null) (x = !0), Me(b);
      else {
        var A = r(c);
        A !== null && Ce(j, A.startTime - T);
      }
  }
  function b(T, A) {
    (x = !1), w && ((w = !1), h(z), (z = -1)), (v = !0);
    var D = m;
    try {
      for (
        g(A), f = r(a);
        f !== null && (!(f.expirationTime > A) || (T && !oe()));

      ) {
        var ee = f.callback;
        if (typeof ee == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var ue = ee(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ue == "function" ? (f.callback = ue) : f === r(a) && n(a),
            g(A);
        } else n(a);
        f = r(a);
      }
      if (f !== null) var Lr = !0;
      else {
        var xt = r(c);
        xt !== null && Ce(j, xt.startTime - A), (Lr = !1);
      }
      return Lr;
    } finally {
      (f = null), (m = D), (v = !1);
    }
  }
  var O = !1,
    _ = null,
    z = -1,
    V = 5,
    $ = -1;
  function oe() {
    return !(e.unstable_now() - $ < V);
  }
  function U() {
    if (_ !== null) {
      var T = e.unstable_now();
      $ = T;
      var A = !0;
      try {
        A = _(!0, T);
      } finally {
        A ? W() : ((O = !1), (_ = null));
      }
    } else O = !1;
  }
  var W;
  if (typeof p == "function")
    W = function () {
      p(U);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      we = se.port2;
    (se.port1.onmessage = U),
      (W = function () {
        we.postMessage(null);
      });
  } else
    W = function () {
      E(U, 0);
    };
  function Me(T) {
    (_ = T), O || ((O = !0), W());
  }
  function Ce(T, A) {
    z = E(function () {
      T(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || v || ((x = !0), Me(b));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = m;
      }
      var D = m;
      m = A;
      try {
        return T();
      } finally {
        m = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var D = m;
      m = T;
      try {
        return A();
      } finally {
        m = D;
      }
    }),
    (e.unstable_scheduleCallback = function (T, A, D) {
      var ee = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? ee + D : ee))
          : (D = ee),
        T)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = D + ue),
        (T = {
          id: d++,
          callback: A,
          priorityLevel: T,
          startTime: D,
          expirationTime: ue,
          sortIndex: -1,
        }),
        D > ee
          ? ((T.sortIndex = D),
            t(c, T),
            r(a) === null &&
              T === r(c) &&
              (w ? (h(z), (z = -1)) : (w = !0), Ce(j, D - ee)))
          : ((T.sortIndex = ue), t(a, T), x || v || ((x = !0), Me(b))),
        T
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (T) {
      var A = m;
      return function () {
        var D = m;
        m = A;
        try {
          return T.apply(this, arguments);
        } finally {
          m = D;
        }
      };
    });
})(Jd);
Zd.exports = Jd;
var wh = Zd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh = N,
  Ye = wh;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ef = new Set(),
  Kn = {};
function Mr(e, t) {
  un(e, t), un(e + "Capture", t);
}
function un(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) ef.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  js = Object.prototype.hasOwnProperty,
  jh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ku = {},
  Yu = {};
function Sh(e) {
  return js.call(Yu, e)
    ? !0
    : js.call(Ku, e)
    ? !1
    : jh.test(e)
    ? (Yu[e] = !0)
    : ((Ku[e] = !0), !1);
}
function Nh(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Eh(e, t, r, n) {
  if (t === null || typeof t > "u" || Nh(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, r, n, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function Pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    be[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    be[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, Pa);
  be[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _a(e, t, r, n) {
  var l = be.hasOwnProperty(t) ? be[t] : null;
  (l !== null
    ? l.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Eh(t, r, l, n) && (r = null),
    n || l === null
      ? Sh(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : l.mustUseProperty
      ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
      : ((t = l.attributeName),
        (n = l.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var At = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pl = Symbol.for("react.element"),
  Ur = Symbol.for("react.portal"),
  Vr = Symbol.for("react.fragment"),
  Oa = Symbol.for("react.strict_mode"),
  Ss = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  rf = Symbol.for("react.context"),
  Ra = Symbol.for("react.forward_ref"),
  Ns = Symbol.for("react.suspense"),
  Es = Symbol.for("react.suspense_list"),
  za = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  nf = Symbol.for("react.offscreen"),
  Gu = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gu && e[Gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  Mo;
function Mn(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var Io = !1;
function $o(e, t) {
  if (!e || Io) return "";
  Io = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          n = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = n.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Io = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function bh(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $o(e.type, !1)), e;
    case 11:
      return (e = $o(e.type.render, !1)), e;
    case 1:
      return (e = $o(e.type, !0)), e;
    default:
      return "";
  }
}
function bs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Ur:
      return "Portal";
    case Ss:
      return "Profiler";
    case Oa:
      return "StrictMode";
    case Ns:
      return "Suspense";
    case Es:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rf:
        return (e.displayName || "Context") + ".Consumer";
      case tf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ra:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case za:
        return (
          (t = e.displayName || null), t !== null ? t : bs(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return bs(e(t));
        } catch {}
    }
  return null;
}
function Ch(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bs(t);
    case 8:
      return t === Oa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ar(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function lf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ph(e) {
  var t = lf(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var l = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (n = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _l(e) {
  e._valueTracker || (e._valueTracker = Ph(e));
}
function of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = lf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function ai(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cs(e, t) {
  var r = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Zu(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = ar(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function sf(e, t) {
  (t = t.checked), t != null && _a(e, "checked", t, !1);
}
function Ps(e, t) {
  sf(e, t);
  var r = ar(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _s(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && _s(e, t.type, ar(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ju(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function _s(e, t, r) {
  (t !== "number" || ai(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var In = Array.isArray;
function en(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + ar(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), n && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Os(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ec(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(C(92));
      if (In(r)) {
        if (1 < r.length) throw Error(C(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: ar(r) };
}
function af(e, t) {
  var r = ar(t.value),
    n = ar(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function tc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ol,
  cf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ol = Ol || document.createElement("div"),
          Ol.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ol.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _h = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  _h.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function df(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
    ? ("" + t).trim()
    : t + "px";
}
function ff(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        l = df(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, l) : (e[r] = l);
    }
}
var Oh = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zs(e, t) {
  if (t) {
    if (Oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ts(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ms = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Is = null,
  tn = null,
  rn = null;
function rc(e) {
  if ((e = wl(e))) {
    if (typeof Is != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Yi(t)), Is(e.stateNode, e.type, t));
  }
}
function pf(e) {
  tn ? (rn ? rn.push(e) : (rn = [e])) : (tn = e);
}
function mf() {
  if (tn) {
    var e = tn,
      t = rn;
    if (((rn = tn = null), rc(e), t)) for (e = 0; e < t.length; e++) rc(t[e]);
  }
}
function hf(e, t) {
  return e(t);
}
function gf() {}
var Lo = !1;
function yf(e, t, r) {
  if (Lo) return e(t, r);
  Lo = !0;
  try {
    return hf(e, t, r);
  } finally {
    (Lo = !1), (tn !== null || rn !== null) && (gf(), mf());
  }
}
function Gn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Yi(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(C(231, t, typeof r));
  return r;
}
var $s = !1;
if (Mt)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
      get: function () {
        $s = !0;
      },
    }),
      window.addEventListener("test", bn, bn),
      window.removeEventListener("test", bn, bn);
  } catch {
    $s = !1;
  }
function Rh(e, t, r, n, l, i, o, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (d) {
    this.onError(d);
  }
}
var Dn = !1,
  ui = null,
  ci = !1,
  Ls = null,
  zh = {
    onError: function (e) {
      (Dn = !0), (ui = e);
    },
  };
function Th(e, t, r, n, l, i, o, s, a) {
  (Dn = !1), (ui = null), Rh.apply(zh, arguments);
}
function Mh(e, t, r, n, l, i, o, s, a) {
  if ((Th.apply(this, arguments), Dn)) {
    if (Dn) {
      var c = ui;
      (Dn = !1), (ui = null);
    } else throw Error(C(198));
    ci || ((ci = !0), (Ls = c));
  }
}
function Ir(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function vf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nc(e) {
  if (Ir(e) !== e) throw Error(C(188));
}
function Ih(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ir(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((n = l.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === r) return nc(l), e;
        if (i === n) return nc(l), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (r.return !== n.return) (r = l), (n = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (r.alternate !== n) throw Error(C(190));
  }
  if (r.tag !== 3) throw Error(C(188));
  return r.stateNode.current === r ? e : t;
}
function xf(e) {
  return (e = Ih(e)), e !== null ? wf(e) : null;
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kf = Ye.unstable_scheduleCallback,
  lc = Ye.unstable_cancelCallback,
  $h = Ye.unstable_shouldYield,
  Lh = Ye.unstable_requestPaint,
  fe = Ye.unstable_now,
  Fh = Ye.unstable_getCurrentPriorityLevel,
  Ma = Ye.unstable_ImmediatePriority,
  jf = Ye.unstable_UserBlockingPriority,
  di = Ye.unstable_NormalPriority,
  Ah = Ye.unstable_LowPriority,
  Sf = Ye.unstable_IdlePriority,
  qi = null,
  Nt = null;
function Dh(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : Bh,
  Uh = Math.log,
  Vh = Math.LN2;
function Bh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uh(e) / Vh) | 0)) | 0;
}
var Rl = 64,
  zl = 4194304;
function $n(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (n = $n(s)) : ((i &= o), i !== 0 && (n = $n(i)));
  } else (o = r & ~l), o !== 0 ? (n = $n(o)) : i !== 0 && (n = $n(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & l) &&
    ((l = n & -n), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - gt(t)), (l = 1 << r), (n |= e[r]), (t &= ~l);
  return n;
}
function Wh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hh(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - gt(i),
      s = 1 << o,
      a = l[o];
    a === -1
      ? (!(s & r) || s & n) && (l[o] = Wh(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Fs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nf() {
  var e = Rl;
  return (Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e;
}
function Fo(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function vl(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = r);
}
function qh(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - gt(r),
      i = 1 << l;
    (t[l] = 0), (n[l] = -1), (e[l] = -1), (r &= ~i);
  }
}
function Ia(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - gt(r),
      l = 1 << n;
    (l & t) | (e[n] & t) && (e[n] |= t), (r &= ~l);
  }
}
var X = 0;
function Ef(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bf,
  $a,
  Cf,
  Pf,
  _f,
  As = !1,
  Tl = [],
  Gt = null,
  Zt = null,
  Jt = null,
  Zn = new Map(),
  Jn = new Map(),
  Bt = [],
  Xh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ic(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Cn(e, t, r, n, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wl(t)), t !== null && $a(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qh(e, t, r, n, l) {
  switch (t) {
    case "focusin":
      return (Gt = Cn(Gt, e, t, r, n, l)), !0;
    case "dragenter":
      return (Zt = Cn(Zt, e, t, r, n, l)), !0;
    case "mouseover":
      return (Jt = Cn(Jt, e, t, r, n, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Zn.set(i, Cn(Zn.get(i) || null, e, t, r, n, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Jn.set(i, Cn(Jn.get(i) || null, e, t, r, n, l)), !0
      );
  }
  return !1;
}
function Of(e) {
  var t = kr(e.target);
  if (t !== null) {
    var r = Ir(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = vf(r)), t !== null)) {
          (e.blockedOn = t),
            _f(e.priority, function () {
              Cf(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Ms = n), r.target.dispatchEvent(n), (Ms = null);
    } else return (t = wl(r)), t !== null && $a(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function oc(e, t, r) {
  Yl(e) && r.delete(t);
}
function Kh() {
  (As = !1),
    Gt !== null && Yl(Gt) && (Gt = null),
    Zt !== null && Yl(Zt) && (Zt = null),
    Jt !== null && Yl(Jt) && (Jt = null),
    Zn.forEach(oc),
    Jn.forEach(oc);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    As ||
      ((As = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Kh)));
}
function el(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Tl.length) {
    Pn(Tl[0], e);
    for (var r = 1; r < Tl.length; r++) {
      var n = Tl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Gt !== null && Pn(Gt, e),
      Zt !== null && Pn(Zt, e),
      Jt !== null && Pn(Jt, e),
      Zn.forEach(t),
      Jn.forEach(t),
      r = 0;
    r < Bt.length;
    r++
  )
    (n = Bt[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Bt.length && ((r = Bt[0]), r.blockedOn === null); )
    Of(r), r.blockedOn === null && Bt.shift();
}
var nn = At.ReactCurrentBatchConfig,
  pi = !0;
function Yh(e, t, r, n) {
  var l = X,
    i = nn.transition;
  nn.transition = null;
  try {
    (X = 1), La(e, t, r, n);
  } finally {
    (X = l), (nn.transition = i);
  }
}
function Gh(e, t, r, n) {
  var l = X,
    i = nn.transition;
  nn.transition = null;
  try {
    (X = 4), La(e, t, r, n);
  } finally {
    (X = l), (nn.transition = i);
  }
}
function La(e, t, r, n) {
  if (pi) {
    var l = Ds(e, t, r, n);
    if (l === null) Qo(e, t, n, mi, r), ic(e, n);
    else if (Qh(l, e, t, r, n)) n.stopPropagation();
    else if ((ic(e, n), t & 4 && -1 < Xh.indexOf(e))) {
      for (; l !== null; ) {
        var i = wl(l);
        if (
          (i !== null && bf(i),
          (i = Ds(e, t, r, n)),
          i === null && Qo(e, t, n, mi, r),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && n.stopPropagation();
    } else Qo(e, t, n, null, r);
  }
}
var mi = null;
function Ds(e, t, r, n) {
  if (((mi = null), (e = Ta(n)), (e = kr(e)), e !== null))
    if (((t = Ir(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = vf(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mi = e), null;
}
function Rf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fh()) {
        case Ma:
          return 1;
        case jf:
          return 4;
        case di:
        case Ah:
          return 16;
        case Sf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Fa = null,
  Gl = null;
function zf() {
  if (Gl) return Gl;
  var e,
    t = Fa,
    r = t.length,
    n,
    l = "value" in Xt ? Xt.value : Xt.textContent,
    i = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === l[i - n]; n++);
  return (Gl = l.slice(e, 1 < n ? 1 - n : void 0));
}
function Zl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ml() {
  return !0;
}
function sc() {
  return !1;
}
function Je(e) {
  function t(r, n, l, i, o) {
    (this._reactName = r),
      (this._targetInst = l),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ml
        : sc),
      (this.isPropagationStopped = sc),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ml));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ml));
      },
      persist: function () {},
      isPersistent: Ml,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = Je(wn),
  xl = ie({}, wn, { view: 0, detail: 0 }),
  Zh = Je(xl),
  Ao,
  Do,
  _n,
  Xi = ie({}, xl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Da,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Ao = e.screenX - _n.screenX), (Do = e.screenY - _n.screenY))
              : (Do = Ao = 0),
            (_n = e)),
          Ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Do;
    },
  }),
  ac = Je(Xi),
  Jh = ie({}, Xi, { dataTransfer: 0 }),
  eg = Je(Jh),
  tg = ie({}, xl, { relatedTarget: 0 }),
  Uo = Je(tg),
  rg = ie({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ng = Je(rg),
  lg = ie({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ig = Je(lg),
  og = ie({}, wn, { data: 0 }),
  uc = Je(og),
  sg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ag = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ug = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1;
}
function Da() {
  return cg;
}
var dg = ie({}, xl, {
    key: function (e) {
      if (e.key) {
        var t = sg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ag[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Da,
    charCode: function (e) {
      return e.type === "keypress" ? Zl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fg = Je(dg),
  pg = ie({}, Xi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cc = Je(pg),
  mg = ie({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Da,
  }),
  hg = Je(mg),
  gg = ie({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yg = Je(gg),
  vg = ie({}, Xi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xg = Je(vg),
  wg = [9, 13, 27, 32],
  Ua = Mt && "CompositionEvent" in window,
  Un = null;
Mt && "documentMode" in document && (Un = document.documentMode);
var kg = Mt && "TextEvent" in window && !Un,
  Tf = Mt && (!Ua || (Un && 8 < Un && 11 >= Un)),
  dc = " ",
  fc = !1;
function Mf(e, t) {
  switch (e) {
    case "keyup":
      return wg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function If(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Br = !1;
function jg(e, t) {
  switch (e) {
    case "compositionend":
      return If(t);
    case "keypress":
      return t.which !== 32 ? null : ((fc = !0), dc);
    case "textInput":
      return (e = t.data), e === dc && fc ? null : e;
    default:
      return null;
  }
}
function Sg(e, t) {
  if (Br)
    return e === "compositionend" || (!Ua && Mf(e, t))
      ? ((e = zf()), (Gl = Fa = Xt = null), (Br = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Tf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ng = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function pc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ng[e.type] : t === "textarea";
}
function $f(e, t, r, n) {
  pf(n),
    (t = hi(t, "onChange")),
    0 < t.length &&
      ((r = new Aa("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Vn = null,
  tl = null;
function Eg(e) {
  Xf(e, 0);
}
function Qi(e) {
  var t = qr(e);
  if (of(t)) return e;
}
function bg(e, t) {
  if (e === "change") return t;
}
var Lf = !1;
if (Mt) {
  var Vo;
  if (Mt) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var mc = document.createElement("div");
      mc.setAttribute("oninput", "return;"),
        (Bo = typeof mc.oninput == "function");
    }
    Vo = Bo;
  } else Vo = !1;
  Lf = Vo && (!document.documentMode || 9 < document.documentMode);
}
function hc() {
  Vn && (Vn.detachEvent("onpropertychange", Ff), (tl = Vn = null));
}
function Ff(e) {
  if (e.propertyName === "value" && Qi(tl)) {
    var t = [];
    $f(t, tl, e, Ta(e)), yf(Eg, t);
  }
}
function Cg(e, t, r) {
  e === "focusin"
    ? (hc(), (Vn = t), (tl = r), Vn.attachEvent("onpropertychange", Ff))
    : e === "focusout" && hc();
}
function Pg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qi(tl);
}
function _g(e, t) {
  if (e === "click") return Qi(t);
}
function Og(e, t) {
  if (e === "input" || e === "change") return Qi(t);
}
function Rg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Rg;
function rl(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var l = r[n];
    if (!js.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yc(e, t) {
  var r = gc(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = gc(r);
  }
}
function Af(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Af(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Df() {
  for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = ai(e.document);
  }
  return t;
}
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zg(e) {
  var t = Df(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Af(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Va(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = r.textContent.length,
          i = Math.min(n.start, l);
        (n = n.end === void 0 ? i : Math.min(n.end, l)),
          !e.extend && i > n && ((l = n), (n = i), (i = l)),
          (l = yc(r, i));
        var o = yc(r, n);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tg = Mt && "documentMode" in document && 11 >= document.documentMode,
  Wr = null,
  Us = null,
  Bn = null,
  Vs = !1;
function vc(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Vs ||
    Wr == null ||
    Wr !== ai(n) ||
    ((n = Wr),
    "selectionStart" in n && Va(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Bn && rl(Bn, n)) ||
      ((Bn = n),
      (n = hi(Us, "onSelect")),
      0 < n.length &&
        ((t = new Aa("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Wr))));
}
function Il(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Hr = {
    animationend: Il("Animation", "AnimationEnd"),
    animationiteration: Il("Animation", "AnimationIteration"),
    animationstart: Il("Animation", "AnimationStart"),
    transitionend: Il("Transition", "TransitionEnd"),
  },
  Wo = {},
  Uf = {};
Mt &&
  ((Uf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hr.animationend.animation,
    delete Hr.animationiteration.animation,
    delete Hr.animationstart.animation),
  "TransitionEvent" in window || delete Hr.transitionend.transition);
function Ki(e) {
  if (Wo[e]) return Wo[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Uf) return (Wo[e] = t[r]);
  return e;
}
var Vf = Ki("animationend"),
  Bf = Ki("animationiteration"),
  Wf = Ki("animationstart"),
  Hf = Ki("transitionend"),
  qf = new Map(),
  xc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dr(e, t) {
  qf.set(e, t), Mr(t, [e]);
}
for (var Ho = 0; Ho < xc.length; Ho++) {
  var qo = xc[Ho],
    Mg = qo.toLowerCase(),
    Ig = qo[0].toUpperCase() + qo.slice(1);
  dr(Mg, "on" + Ig);
}
dr(Vf, "onAnimationEnd");
dr(Bf, "onAnimationIteration");
dr(Wf, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(Hf, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $g = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function wc(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Mh(n, t, void 0, e), (e.currentTarget = null);
}
function Xf(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      l = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var s = n[o],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          wc(l, s, c), (i = a);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((s = n[o]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          wc(l, s, c), (i = a);
        }
    }
  }
  if (ci) throw ((e = Ls), (ci = !1), (Ls = null), e);
}
function G(e, t) {
  var r = t[Xs];
  r === void 0 && (r = t[Xs] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Qf(t, e, 2, !1), r.add(n));
}
function Xo(e, t, r) {
  var n = 0;
  t && (n |= 4), Qf(r, e, n, t);
}
var $l = "_reactListening" + Math.random().toString(36).slice(2);
function nl(e) {
  if (!e[$l]) {
    (e[$l] = !0),
      ef.forEach(function (r) {
        r !== "selectionchange" && ($g.has(r) || Xo(r, !1, e), Xo(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$l] || ((t[$l] = !0), Xo("selectionchange", !1, t));
  }
}
function Qf(e, t, r, n) {
  switch (Rf(t)) {
    case 1:
      var l = Yh;
      break;
    case 4:
      l = Gh;
      break;
    default:
      l = La;
  }
  (r = l.bind(null, t, r, e)),
    (l = void 0),
    !$s ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    n
      ? l !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: l })
        : e.addEventListener(t, r, !0)
      : l !== void 0
      ? e.addEventListener(t, r, { passive: l })
      : e.addEventListener(t, r, !1);
}
function Qo(e, t, r, n, l) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var s = n.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = kr(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            n = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  yf(function () {
    var c = i,
      d = Ta(r),
      f = [];
    e: {
      var m = qf.get(e);
      if (m !== void 0) {
        var v = Aa,
          x = e;
        switch (e) {
          case "keypress":
            if (Zl(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = fg;
            break;
          case "focusin":
            (x = "focus"), (v = Uo);
            break;
          case "focusout":
            (x = "blur"), (v = Uo);
            break;
          case "beforeblur":
          case "afterblur":
            v = Uo;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ac;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = eg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = hg;
            break;
          case Vf:
          case Bf:
          case Wf:
            v = ng;
            break;
          case Hf:
            v = yg;
            break;
          case "scroll":
            v = Zh;
            break;
          case "wheel":
            v = xg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ig;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = cc;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          h = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var j = g.stateNode;
          if (
            (g.tag === 5 &&
              j !== null &&
              ((g = j),
              h !== null && ((j = Gn(p, h)), j != null && w.push(ll(p, j, g)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((m = new v(m, x, null, r, d)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            r !== Ms &&
            (x = r.relatedTarget || r.fromElement) &&
            (kr(x) || x[It]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((x = r.relatedTarget || r.toElement),
              (v = c),
              (x = x ? kr(x) : null),
              x !== null &&
                ((E = Ir(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((v = null), (x = c)),
          v !== x)
        ) {
          if (
            ((w = ac),
            (j = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = cc),
              (j = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (E = v == null ? m : qr(v)),
            (g = x == null ? m : qr(x)),
            (m = new w(j, p + "leave", v, r, d)),
            (m.target = E),
            (m.relatedTarget = g),
            (j = null),
            kr(d) === c &&
              ((w = new w(h, p + "enter", x, r, d)),
              (w.target = g),
              (w.relatedTarget = E),
              (j = w)),
            (E = j),
            v && x)
          )
            t: {
              for (w = v, h = x, p = 0, g = w; g; g = Ar(g)) p++;
              for (g = 0, j = h; j; j = Ar(j)) g++;
              for (; 0 < p - g; ) (w = Ar(w)), p--;
              for (; 0 < g - p; ) (h = Ar(h)), g--;
              for (; p--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = Ar(w)), (h = Ar(h));
              }
              w = null;
            }
          else w = null;
          v !== null && kc(f, m, v, w, !1),
            x !== null && E !== null && kc(f, E, x, w, !0);
        }
      }
      e: {
        if (
          ((m = c ? qr(c) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var b = bg;
        else if (pc(m))
          if (Lf) b = Og;
          else {
            b = Pg;
            var O = Cg;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (b = _g);
        if (b && (b = b(e, c))) {
          $f(f, b, r, d);
          break e;
        }
        O && O(e, m, c),
          e === "focusout" &&
            (O = m._wrapperState) &&
            O.controlled &&
            m.type === "number" &&
            _s(m, "number", m.value);
      }
      switch (((O = c ? qr(c) : window), e)) {
        case "focusin":
          (pc(O) || O.contentEditable === "true") &&
            ((Wr = O), (Us = c), (Bn = null));
          break;
        case "focusout":
          Bn = Us = Wr = null;
          break;
        case "mousedown":
          Vs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vs = !1), vc(f, r, d);
          break;
        case "selectionchange":
          if (Tg) break;
        case "keydown":
        case "keyup":
          vc(f, r, d);
      }
      var _;
      if (Ua)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Br
          ? Mf(e, r) && (z = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Tf &&
          r.locale !== "ko" &&
          (Br || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && Br && (_ = zf())
            : ((Xt = d),
              (Fa = "value" in Xt ? Xt.value : Xt.textContent),
              (Br = !0))),
        (O = hi(c, z)),
        0 < O.length &&
          ((z = new uc(z, e, null, r, d)),
          f.push({ event: z, listeners: O }),
          _ ? (z.data = _) : ((_ = If(r)), _ !== null && (z.data = _)))),
        (_ = kg ? jg(e, r) : Sg(e, r)) &&
          ((c = hi(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new uc("onBeforeInput", "beforeinput", null, r, d)),
            f.push({ event: d, listeners: c }),
            (d.data = _)));
    }
    Xf(f, t);
  });
}
function ll(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function hi(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, r)),
      i != null && n.unshift(ll(e, i, l)),
      (i = Gn(e, t)),
      i != null && n.push(ll(e, i, l))),
      (e = e.return);
  }
  return n;
}
function Ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function kc(e, t, r, n, l) {
  for (var i = t._reactName, o = []; r !== null && r !== n; ) {
    var s = r,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === n) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Gn(r, i)), a != null && o.unshift(ll(r, a, s)))
        : l || ((a = Gn(r, i)), a != null && o.push(ll(r, a, s)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Lg = /\r\n?/g,
  Fg = /\u0000|\uFFFD/g;
function jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lg,
      `
`
    )
    .replace(Fg, "");
}
function Ll(e, t, r) {
  if (((t = jc(t)), jc(e) !== t && r)) throw Error(C(425));
}
function gi() {}
var Bs = null,
  Ws = null;
function Hs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qs = typeof setTimeout == "function" ? setTimeout : void 0,
  Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sc = typeof Promise == "function" ? Promise : void 0,
  Dg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sc < "u"
      ? function (e) {
          return Sc.resolve(null).then(e).catch(Ug);
        }
      : qs;
function Ug(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ko(e, t) {
  var r = t,
    n = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(l), el(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = l;
  } while (r);
  el(t);
}
function er(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Nc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + kn,
  il = "__reactProps$" + kn,
  It = "__reactContainer$" + kn,
  Xs = "__reactEvents$" + kn,
  Vg = "__reactListeners$" + kn,
  Bg = "__reactHandles$" + kn;
function kr(e) {
  var t = e[jt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[It] || r[jt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Nc(e); e !== null; ) {
          if ((r = e[jt])) return r;
          e = Nc(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[jt] || e[It]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Yi(e) {
  return e[il] || null;
}
var Qs = [],
  Xr = -1;
function fr(e) {
  return { current: e };
}
function J(e) {
  0 > Xr || ((e.current = Qs[Xr]), (Qs[Xr] = null), Xr--);
}
function Y(e, t) {
  Xr++, (Qs[Xr] = e.current), (e.current = t);
}
var ur = {},
  Te = fr(ur),
  Ve = fr(!1),
  Cr = ur;
function cn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return ur;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in r) l[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function yi() {
  J(Ve), J(Te);
}
function Ec(e, t, r) {
  if (Te.current !== ur) throw Error(C(168));
  Y(Te, t), Y(Ve, r);
}
function Kf(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var l in n) if (!(l in t)) throw Error(C(108, Ch(e) || "Unknown", l));
  return ie({}, r, n);
}
function vi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ur),
    (Cr = Te.current),
    Y(Te, e),
    Y(Ve, Ve.current),
    !0
  );
}
function bc(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(C(169));
  r
    ? ((e = Kf(e, t, Cr)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      J(Ve),
      J(Te),
      Y(Te, e))
    : J(Ve),
    Y(Ve, r);
}
var _t = null,
  Gi = !1,
  Yo = !1;
function Yf(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Wg(e) {
  (Gi = !0), Yf(e);
}
function pr() {
  if (!Yo && _t !== null) {
    Yo = !0;
    var e = 0,
      t = X;
    try {
      var r = _t;
      for (X = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (_t = null), (Gi = !1);
    } catch (l) {
      throw (_t !== null && (_t = _t.slice(e + 1)), kf(Ma, pr), l);
    } finally {
      (X = t), (Yo = !1);
    }
  }
  return null;
}
var Qr = [],
  Kr = 0,
  xi = null,
  wi = 0,
  rt = [],
  nt = 0,
  Pr = null,
  Ot = 1,
  Rt = "";
function gr(e, t) {
  (Qr[Kr++] = wi), (Qr[Kr++] = xi), (xi = e), (wi = t);
}
function Gf(e, t, r) {
  (rt[nt++] = Ot), (rt[nt++] = Rt), (rt[nt++] = Pr), (Pr = e);
  var n = Ot;
  e = Rt;
  var l = 32 - gt(n) - 1;
  (n &= ~(1 << l)), (r += 1);
  var i = 32 - gt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (l -= o),
      (Ot = (1 << (32 - gt(t) + l)) | (r << l) | n),
      (Rt = i + e);
  } else (Ot = (1 << i) | (r << l) | n), (Rt = e);
}
function Ba(e) {
  e.return !== null && (gr(e, 1), Gf(e, 1, 0));
}
function Wa(e) {
  for (; e === xi; )
    (xi = Qr[--Kr]), (Qr[Kr] = null), (wi = Qr[--Kr]), (Qr[Kr] = null);
  for (; e === Pr; )
    (Pr = rt[--nt]),
      (rt[nt] = null),
      (Rt = rt[--nt]),
      (rt[nt] = null),
      (Ot = rt[--nt]),
      (rt[nt] = null);
}
var Ke = null,
  Qe = null,
  re = !1,
  pt = null;
function Zf(e, t) {
  var r = lt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Cc(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Qe = er(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Pr !== null ? { id: Ot, overflow: Rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = lt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ke = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ys(e) {
  if (re) {
    var t = Qe;
    if (t) {
      var r = t;
      if (!Cc(e, t)) {
        if (Ks(e)) throw Error(C(418));
        t = er(r.nextSibling);
        var n = Ke;
        t && Cc(e, t)
          ? Zf(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e));
      }
    } else {
      if (Ks(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e);
    }
  }
}
function Pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Fl(e) {
  if (e !== Ke) return !1;
  if (!re) return Pc(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hs(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Ks(e)) throw (Jf(), Error(C(418)));
    for (; t; ) Zf(e, t), (t = er(t.nextSibling));
  }
  if ((Pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Qe = er(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ke ? er(e.stateNode.nextSibling) : null;
  return !0;
}
function Jf() {
  for (var e = Qe; e; ) e = er(e.nextSibling);
}
function dn() {
  (Qe = Ke = null), (re = !1);
}
function Ha(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Hg = At.ReactCurrentBatchConfig;
function On(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(C(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(C(147, e));
      var l = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!r._owner) throw Error(C(290, e));
  }
  return e;
}
function Al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _c(e) {
  var t = e._init;
  return t(e._payload);
}
function ep(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function r(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function n(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function l(h, p) {
    return (h = lr(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, g, j) {
    return p === null || p.tag !== 6
      ? ((p = ns(g, h.mode, j)), (p.return = h), p)
      : ((p = l(p, g)), (p.return = h), p);
  }
  function a(h, p, g, j) {
    var b = g.type;
    return b === Vr
      ? d(h, p, g.props.children, j, g.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === Ut &&
            _c(b) === p.type))
      ? ((j = l(p, g.props)), (j.ref = On(h, p, g)), (j.return = h), j)
      : ((j = ii(g.type, g.key, g.props, null, h.mode, j)),
        (j.ref = On(h, p, g)),
        (j.return = h),
        j);
  }
  function c(h, p, g, j) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ls(g, h.mode, j)), (p.return = h), p)
      : ((p = l(p, g.children || [])), (p.return = h), p);
  }
  function d(h, p, g, j, b) {
    return p === null || p.tag !== 7
      ? ((p = br(g, h.mode, j, b)), (p.return = h), p)
      : ((p = l(p, g)), (p.return = h), p);
  }
  function f(h, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ns("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pl:
          return (
            (g = ii(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = On(h, null, p)),
            (g.return = h),
            g
          );
        case Ur:
          return (p = ls(p, h.mode, g)), (p.return = h), p;
        case Ut:
          var j = p._init;
          return f(h, j(p._payload), g);
      }
      if (In(p) || En(p))
        return (p = br(p, h.mode, g, null)), (p.return = h), p;
      Al(h, p);
    }
    return null;
  }
  function m(h, p, g, j) {
    var b = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : s(h, p, "" + g, j);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pl:
          return g.key === b ? a(h, p, g, j) : null;
        case Ur:
          return g.key === b ? c(h, p, g, j) : null;
        case Ut:
          return (b = g._init), m(h, p, b(g._payload), j);
      }
      if (In(g) || En(g)) return b !== null ? null : d(h, p, g, j, null);
      Al(h, g);
    }
    return null;
  }
  function v(h, p, g, j, b) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (h = h.get(g) || null), s(p, h, "" + j, b);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Pl:
          return (h = h.get(j.key === null ? g : j.key) || null), a(p, h, j, b);
        case Ur:
          return (h = h.get(j.key === null ? g : j.key) || null), c(p, h, j, b);
        case Ut:
          var O = j._init;
          return v(h, p, g, O(j._payload), b);
      }
      if (In(j) || En(j)) return (h = h.get(g) || null), d(p, h, j, b, null);
      Al(p, j);
    }
    return null;
  }
  function x(h, p, g, j) {
    for (
      var b = null, O = null, _ = p, z = (p = 0), V = null;
      _ !== null && z < g.length;
      z++
    ) {
      _.index > z ? ((V = _), (_ = null)) : (V = _.sibling);
      var $ = m(h, _, g[z], j);
      if ($ === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && $.alternate === null && t(h, _),
        (p = i($, p, z)),
        O === null ? (b = $) : (O.sibling = $),
        (O = $),
        (_ = V);
    }
    if (z === g.length) return r(h, _), re && gr(h, z), b;
    if (_ === null) {
      for (; z < g.length; z++)
        (_ = f(h, g[z], j)),
          _ !== null &&
            ((p = i(_, p, z)), O === null ? (b = _) : (O.sibling = _), (O = _));
      return re && gr(h, z), b;
    }
    for (_ = n(h, _); z < g.length; z++)
      (V = v(_, h, z, g[z], j)),
        V !== null &&
          (e && V.alternate !== null && _.delete(V.key === null ? z : V.key),
          (p = i(V, p, z)),
          O === null ? (b = V) : (O.sibling = V),
          (O = V));
    return (
      e &&
        _.forEach(function (oe) {
          return t(h, oe);
        }),
      re && gr(h, z),
      b
    );
  }
  function w(h, p, g, j) {
    var b = En(g);
    if (typeof b != "function") throw Error(C(150));
    if (((g = b.call(g)), g == null)) throw Error(C(151));
    for (
      var O = (b = null), _ = p, z = (p = 0), V = null, $ = g.next();
      _ !== null && !$.done;
      z++, $ = g.next()
    ) {
      _.index > z ? ((V = _), (_ = null)) : (V = _.sibling);
      var oe = m(h, _, $.value, j);
      if (oe === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && oe.alternate === null && t(h, _),
        (p = i(oe, p, z)),
        O === null ? (b = oe) : (O.sibling = oe),
        (O = oe),
        (_ = V);
    }
    if ($.done) return r(h, _), re && gr(h, z), b;
    if (_ === null) {
      for (; !$.done; z++, $ = g.next())
        ($ = f(h, $.value, j)),
          $ !== null &&
            ((p = i($, p, z)), O === null ? (b = $) : (O.sibling = $), (O = $));
      return re && gr(h, z), b;
    }
    for (_ = n(h, _); !$.done; z++, $ = g.next())
      ($ = v(_, h, z, $.value, j)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? z : $.key),
          (p = i($, p, z)),
          O === null ? (b = $) : (O.sibling = $),
          (O = $));
    return (
      e &&
        _.forEach(function (U) {
          return t(h, U);
        }),
      re && gr(h, z),
      b
    );
  }
  function E(h, p, g, j) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Vr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Pl:
          e: {
            for (var b = g.key, O = p; O !== null; ) {
              if (O.key === b) {
                if (((b = g.type), b === Vr)) {
                  if (O.tag === 7) {
                    r(h, O.sibling),
                      (p = l(O, g.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  O.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Ut &&
                    _c(b) === O.type)
                ) {
                  r(h, O.sibling),
                    (p = l(O, g.props)),
                    (p.ref = On(h, O, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                r(h, O);
                break;
              } else t(h, O);
              O = O.sibling;
            }
            g.type === Vr
              ? ((p = br(g.props.children, h.mode, j, g.key)),
                (p.return = h),
                (h = p))
              : ((j = ii(g.type, g.key, g.props, null, h.mode, j)),
                (j.ref = On(h, p, g)),
                (j.return = h),
                (h = j));
          }
          return o(h);
        case Ur:
          e: {
            for (O = g.key; p !== null; ) {
              if (p.key === O)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  r(h, p.sibling),
                    (p = l(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  r(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ls(g, h.mode, j)), (p.return = h), (h = p);
          }
          return o(h);
        case Ut:
          return (O = g._init), E(h, p, O(g._payload), j);
      }
      if (In(g)) return x(h, p, g, j);
      if (En(g)) return w(h, p, g, j);
      Al(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (r(h, p.sibling), (p = l(p, g)), (p.return = h), (h = p))
          : (r(h, p), (p = ns(g, h.mode, j)), (p.return = h), (h = p)),
        o(h))
      : r(h, p);
  }
  return E;
}
var fn = ep(!0),
  tp = ep(!1),
  ki = fr(null),
  ji = null,
  Yr = null,
  qa = null;
function Xa() {
  qa = Yr = ji = null;
}
function Qa(e) {
  var t = ki.current;
  J(ki), (e._currentValue = t);
}
function Gs(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ln(e, t) {
  (ji = e),
    (qa = Yr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (qa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yr === null)) {
      if (ji === null) throw Error(C(308));
      (Yr = e), (ji.dependencies = { lanes: 0, firstContext: e });
    } else Yr = Yr.next = e;
  return t;
}
var jr = null;
function Ka(e) {
  jr === null ? (jr = [e]) : jr.push(e);
}
function rp(e, t, r, n) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Ka(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    $t(e, n)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Vt = !1;
function Ya(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function np(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), H & 2)) {
    var l = n.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (n.pending = t),
      $t(e, r)
    );
  }
  return (
    (l = n.interleaved),
    l === null ? ((t.next = t), Ka(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    $t(e, r)
  );
}
function Jl(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Ia(e, r);
  }
}
function Oc(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var l = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (r = r.next);
      } while (r !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Si(e, t, r, n) {
  var l = e.updateQueue;
  Vt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), o === null ? (i = c) : (o.next = c), (o = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== o &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = l.baseState;
    (o = 0), (d = c = a = null), (s = i);
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((n & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            w = s;
          switch (((m = t), (v = r), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(v, f, m);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (m = typeof x == "function" ? x.call(v, f, m) : x),
                m == null)
              )
                break e;
              f = ie({}, f, m);
              break e;
            case 2:
              Vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (a = f)) : (d = d.next = v),
          (o |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Or |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Rc(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        l = n.callback;
      if (l !== null) {
        if (((n.callback = null), (n = r), typeof l != "function"))
          throw Error(C(191, l));
        l.call(n);
      }
    }
}
var kl = {},
  Et = fr(kl),
  ol = fr(kl),
  sl = fr(kl);
function Sr(e) {
  if (e === kl) throw Error(C(174));
  return e;
}
function Ga(e, t) {
  switch ((Y(sl, t), Y(ol, e), Y(Et, kl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rs(t, e));
  }
  J(Et), Y(Et, t);
}
function pn() {
  J(Et), J(ol), J(sl);
}
function lp(e) {
  Sr(sl.current);
  var t = Sr(Et.current),
    r = Rs(t, e.type);
  t !== r && (Y(ol, e), Y(Et, r));
}
function Za(e) {
  ol.current === e && (J(Et), J(ol));
}
var ne = fr(0);
function Ni(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Go = [];
function Ja() {
  for (var e = 0; e < Go.length; e++)
    Go[e]._workInProgressVersionPrimary = null;
  Go.length = 0;
}
var ei = At.ReactCurrentDispatcher,
  Zo = At.ReactCurrentBatchConfig,
  _r = 0,
  le = null,
  ye = null,
  ke = null,
  Ei = !1,
  Wn = !1,
  al = 0,
  qg = 0;
function Pe() {
  throw Error(C(321));
}
function eu(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!vt(e[r], t[r])) return !1;
  return !0;
}
function tu(e, t, r, n, l, i) {
  if (
    ((_r = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ei.current = e === null || e.memoizedState === null ? Yg : Gg),
    (e = r(n, l)),
    Wn)
  ) {
    i = 0;
    do {
      if (((Wn = !1), (al = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (ke = ye = null),
        (t.updateQueue = null),
        (ei.current = Zg),
        (e = r(n, l));
    } while (Wn);
  }
  if (
    ((ei.current = bi),
    (t = ye !== null && ye.next !== null),
    (_r = 0),
    (ke = ye = le = null),
    (Ei = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function ru() {
  var e = al !== 0;
  return (al = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (le.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function st() {
  if (ye === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? le.memoizedState : ke.next;
  if (t !== null) (ke = t), (ye = e);
  else {
    if (e === null) throw Error(C(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      ke === null ? (le.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function ul(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jo(e) {
  var t = st(),
    r = t.queue;
  if (r === null) throw Error(C(311));
  r.lastRenderedReducer = e;
  var n = ye,
    l = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (n.baseQueue = l = i), (r.pending = null);
  }
  if (l !== null) {
    (i = l.next), (n = n.baseState);
    var s = (o = null),
      a = null,
      c = i;
    do {
      var d = c.lane;
      if ((_r & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (o = n)) : (a = a.next = f),
          (le.lanes |= d),
          (Or |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (o = n) : (a.next = s),
      vt(n, t.memoizedState) || (Ue = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = a),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (le.lanes |= i), (Or |= i), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function es(e) {
  var t = st(),
    r = t.queue;
  if (r === null) throw Error(C(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    l = r.pending,
    i = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    vt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function ip() {}
function op(e, t) {
  var r = le,
    n = st(),
    l = t(),
    i = !vt(n.memoizedState, l);
  if (
    (i && ((n.memoizedState = l), (Ue = !0)),
    (n = n.queue),
    nu(up.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      cl(9, ap.bind(null, r, n, l, t), void 0, null),
      je === null)
    )
      throw Error(C(349));
    _r & 30 || sp(r, t, l);
  }
  return l;
}
function sp(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function ap(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), cp(t) && dp(e);
}
function up(e, t, r) {
  return r(function () {
    cp(t) && dp(e);
  });
}
function cp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !vt(e, r);
  } catch {
    return !0;
  }
}
function dp(e) {
  var t = $t(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function zc(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ul,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kg.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function cl(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function fp() {
  return st().memoizedState;
}
function ti(e, t, r, n) {
  var l = kt();
  (le.flags |= e),
    (l.memoizedState = cl(1 | t, r, void 0, n === void 0 ? null : n));
}
function Zi(e, t, r, n) {
  var l = st();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (ye !== null) {
    var o = ye.memoizedState;
    if (((i = o.destroy), n !== null && eu(n, o.deps))) {
      l.memoizedState = cl(t, r, i, n);
      return;
    }
  }
  (le.flags |= e), (l.memoizedState = cl(1 | t, r, i, n));
}
function Tc(e, t) {
  return ti(8390656, 8, e, t);
}
function nu(e, t) {
  return Zi(2048, 8, e, t);
}
function pp(e, t) {
  return Zi(4, 2, e, t);
}
function mp(e, t) {
  return Zi(4, 4, e, t);
}
function hp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gp(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Zi(4, 4, hp.bind(null, t, e), r)
  );
}
function lu() {}
function yp(e, t) {
  var r = st();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && eu(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function vp(e, t) {
  var r = st();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && eu(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function xp(e, t, r) {
  return _r & 21
    ? (vt(r, t) || ((r = Nf()), (le.lanes |= r), (Or |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = r));
}
function Xg(e, t) {
  var r = X;
  (X = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = r), (Zo.transition = n);
  }
}
function wp() {
  return st().memoizedState;
}
function Qg(e, t, r) {
  var n = nr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kp(e))
  )
    jp(t, r);
  else if (((r = rp(e, t, r, n)), r !== null)) {
    var l = Le();
    yt(r, e, n, l), Sp(r, t, n);
  }
}
function Kg(e, t, r) {
  var n = nr(e),
    l = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (kp(e)) jp(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, r);
        if (((l.hasEagerState = !0), (l.eagerState = s), vt(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ka(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = rp(e, t, l, n)),
      r !== null && ((l = Le()), yt(r, e, n, l), Sp(r, t, n));
  }
}
function kp(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function jp(e, t) {
  Wn = Ei = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Sp(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Ia(e, r);
  }
}
var bi = {
    readContext: ot,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Yg = {
    readContext: ot,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: Tc,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ti(4194308, 4, hp.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ti(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ti(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = kt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Qg.bind(null, le, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zc,
    useDebugValue: lu,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = zc(!1),
        t = e[0];
      return (e = Xg.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = le,
        l = kt();
      if (re) {
        if (r === void 0) throw Error(C(407));
        r = r();
      } else {
        if (((r = t()), je === null)) throw Error(C(349));
        _r & 30 || sp(n, t, r);
      }
      l.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (l.queue = i),
        Tc(up.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        cl(9, ap.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = kt(),
        t = je.identifierPrefix;
      if (re) {
        var r = Rt,
          n = Ot;
        (r = (n & ~(1 << (32 - gt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = al++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = qg++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gg = {
    readContext: ot,
    useCallback: yp,
    useContext: ot,
    useEffect: nu,
    useImperativeHandle: gp,
    useInsertionEffect: pp,
    useLayoutEffect: mp,
    useMemo: vp,
    useReducer: Jo,
    useRef: fp,
    useState: function () {
      return Jo(ul);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var t = st();
      return xp(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Jo(ul)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: wp,
    unstable_isNewReconciler: !1,
  },
  Zg = {
    readContext: ot,
    useCallback: yp,
    useContext: ot,
    useEffect: nu,
    useImperativeHandle: gp,
    useInsertionEffect: pp,
    useLayoutEffect: mp,
    useMemo: vp,
    useReducer: es,
    useRef: fp,
    useState: function () {
      return es(ul);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var t = st();
      return ye === null ? (t.memoizedState = e) : xp(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = es(ul)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: wp,
    unstable_isNewReconciler: !1,
  };
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Zs(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ie({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Le(),
      l = nr(e),
      i = Tt(n, l);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = tr(e, i, l)),
      t !== null && (yt(t, e, l, n), Jl(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Le(),
      l = nr(e),
      i = Tt(n, l);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = tr(e, i, l)),
      t !== null && (yt(t, e, l, n), Jl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Le(),
      n = nr(e),
      l = Tt(r, n);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = tr(e, l, n)),
      t !== null && (yt(t, e, n, r), Jl(t, e, n));
  },
};
function Mc(e, t, r, n, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rl(r, n) || !rl(l, i)
      : !0
  );
}
function Np(e, t, r) {
  var n = !1,
    l = ur,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ot(i))
      : ((l = Be(t) ? Cr : Te.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? cn(e, l) : ur)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ic(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ji.enqueueReplaceState(t, t.state, null);
}
function Js(e, t, r, n) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), Ya(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ot(i))
    : ((i = Be(t) ? Cr : Te.current), (l.context = cn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zs(e, t, i, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ji.enqueueReplaceState(l, l.state, null),
      Si(e, r, l, n),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t) {
  try {
    var r = "",
      n = t;
    do (r += bh(n)), (n = n.return);
    while (n);
    var l = r;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ts(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ea(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Jg = typeof WeakMap == "function" ? WeakMap : Map;
function Ep(e, t, r) {
  (r = Tt(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Pi || ((Pi = !0), (ca = n)), ea(e, t);
    }),
    r
  );
}
function bp(e, t, r) {
  (r = Tt(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var l = t.value;
    (r.payload = function () {
      return n(l);
    }),
      (r.callback = function () {
        ea(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        ea(e, t),
          typeof n != "function" &&
            (rr === null ? (rr = new Set([this])) : rr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function $c(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Jg();
    var l = new Set();
    n.set(t, l);
  } else (l = n.get(t)), l === void 0 && ((l = new Set()), n.set(t, l));
  l.has(r) || (l.add(r), (e = py.bind(null, e, t, r)), t.then(e, e));
}
function Lc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fc(e, t, r, n, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), tr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var ey = At.ReactCurrentOwner,
  Ue = !1;
function Ie(e, t, r, n) {
  t.child = e === null ? tp(t, null, r, n) : fn(t, e.child, r, n);
}
function Ac(e, t, r, n, l) {
  r = r.render;
  var i = t.ref;
  return (
    ln(t, l),
    (n = tu(e, t, r, n, i, l)),
    (r = ru()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (re && r && Ba(t), (t.flags |= 1), Ie(e, t, n, l), t.child)
  );
}
function Dc(e, t, r, n, l) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !fu(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cp(e, t, i, n, l))
      : ((e = ii(r.type, null, n, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : rl), r(o, n) && e.ref === t.ref)
    )
      return Lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = lr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cp(e, t, r, n, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rl(i, n) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = n = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return ta(e, t, r, n, l);
}
function Pp(e, t, r) {
  var n = t.pendingProps,
    l = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Zr, Xe),
        (Xe |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Zr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        Y(Zr, Xe),
        (Xe |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Y(Zr, Xe),
      (Xe |= n);
  return Ie(e, t, l, r), t.child;
}
function _p(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ta(e, t, r, n, l) {
  var i = Be(r) ? Cr : Te.current;
  return (
    (i = cn(t, i)),
    ln(t, l),
    (r = tu(e, t, r, n, i, l)),
    (n = ru()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (re && n && Ba(t), (t.flags |= 1), Ie(e, t, r, l), t.child)
  );
}
function Uc(e, t, r, n, l) {
  if (Be(r)) {
    var i = !0;
    vi(t);
  } else i = !1;
  if ((ln(t, l), t.stateNode === null))
    ri(e, t), Np(t, r, n), Js(t, r, n, l), (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = ot(c))
      : ((c = Be(r) ? Cr : Te.current), (c = cn(t, c)));
    var d = r.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== n || a !== c) && Ic(t, o, n, c)),
      (Vt = !1);
    var m = t.memoizedState;
    (o.state = m),
      Si(t, n, o, l),
      (a = t.memoizedState),
      s !== n || m !== a || Ve.current || Vt
        ? (typeof d == "function" && (Zs(t, r, d, n), (a = t.memoizedState)),
          (s = Vt || Mc(t, r, s, n, m, a, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = a)),
          (o.props = n),
          (o.state = a),
          (o.context = c),
          (n = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (o = t.stateNode),
      np(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : dt(t.type, s)),
      (o.props = c),
      (f = t.pendingProps),
      (m = o.context),
      (a = r.contextType),
      typeof a == "object" && a !== null
        ? (a = ot(a))
        : ((a = Be(r) ? Cr : Te.current), (a = cn(t, a)));
    var v = r.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== f || m !== a) && Ic(t, o, n, a)),
      (Vt = !1),
      (m = t.memoizedState),
      (o.state = m),
      Si(t, n, o, l);
    var x = t.memoizedState;
    s !== f || m !== x || Ve.current || Vt
      ? (typeof v == "function" && (Zs(t, r, v, n), (x = t.memoizedState)),
        (c = Vt || Mc(t, r, c, n, m, x, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, x, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, x, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = x)),
        (o.props = n),
        (o.state = x),
        (o.context = a),
        (n = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return ra(e, t, r, n, i, l);
}
function ra(e, t, r, n, l, i) {
  _p(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return l && bc(t, r, !1), Lt(e, t, i);
  (n = t.stateNode), (ey.current = t);
  var s =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = fn(t, e.child, null, i)), (t.child = fn(t, null, s, i)))
      : Ie(e, t, s, i),
    (t.memoizedState = n.state),
    l && bc(t, r, !0),
    t.child
  );
}
function Op(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ec(e, t.context, !1),
    Ga(e, t.containerInfo);
}
function Vc(e, t, r, n, l) {
  return dn(), Ha(l), (t.flags |= 256), Ie(e, t, r, n), t.child;
}
var na = { dehydrated: null, treeContext: null, retryLane: 0 };
function la(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rp(e, t, r) {
  var n = t.pendingProps,
    l = ne.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Y(ne, l & 1),
    e === null)
  )
    return (
      Ys(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ro(o, n, 0, null)),
              (e = br(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = la(r)),
              (t.memoizedState = na),
              e)
            : iu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return ty(e, t, o, n, s, l, r);
  if (i) {
    (i = n.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== l
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = a),
          (t.deletions = null))
        : ((n = lr(l, a)), (n.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = lr(s, i)) : ((i = br(i, o, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? la(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = na),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = lr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function iu(e, t) {
  return (
    (t = ro({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, r, n) {
  return (
    n !== null && Ha(n),
    fn(t, e.child, null, r),
    (e = iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ty(e, t, r, n, l, i, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = ts(Error(C(422)))), Dl(e, t, o, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (l = t.mode),
        (n = ro({ mode: "visible", children: n.children }, l, 0, null)),
        (i = br(i, l, o, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && fn(t, e.child, null, o),
        (t.child.memoizedState = la(o)),
        (t.memoizedState = na),
        i);
  if (!(t.mode & 1)) return Dl(e, t, o, null);
  if (l.data === "$!") {
    if (((n = l.nextSibling && l.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(C(419))), (n = ts(i, n, void 0)), Dl(e, t, o, n);
  }
  if (((s = (o & e.childLanes) !== 0), Ue || s)) {
    if (((n = je), n !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (n.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), $t(e, l), yt(n, e, l, -1));
    }
    return du(), (n = ts(Error(C(421)))), Dl(e, t, o, n);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = my.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Qe = er(l.nextSibling)),
      (Ke = t),
      (re = !0),
      (pt = null),
      e !== null &&
        ((rt[nt++] = Ot),
        (rt[nt++] = Rt),
        (rt[nt++] = Pr),
        (Ot = e.id),
        (Rt = e.overflow),
        (Pr = t)),
      (t = iu(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Bc(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Gs(e.return, t, r);
}
function rs(e, t, r, n, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = l));
}
function zp(e, t, r) {
  var n = t.pendingProps,
    l = n.revealOrder,
    i = n.tail;
  if ((Ie(e, t, n.children, r), (n = ne.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bc(e, r, t);
        else if (e.tag === 19) Bc(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Y(ne, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate),
            e !== null && Ni(e) === null && (l = r),
            (r = r.sibling);
        (r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          rs(t, !1, l, r, i);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ni(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        rs(t, !0, r, null, i);
        break;
      case "together":
        rs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ri(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, r = lr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = lr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function ry(e, t, r) {
  switch (t.tag) {
    case 3:
      Op(t), dn();
      break;
    case 5:
      lp(t);
      break;
    case 1:
      Be(t.type) && vi(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        l = t.memoizedProps.value;
      Y(ki, n._currentValue), (n._currentValue = l);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Rp(e, t, r)
          : (Y(ne, ne.current & 1),
            (e = Lt(e, t, r)),
            e !== null ? e.sibling : null);
      Y(ne, ne.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return zp(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Y(ne, ne.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Pp(e, t, r);
  }
  return Lt(e, t, r);
}
var Tp, ia, Mp, Ip;
Tp = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
ia = function () {};
Mp = function (e, t, r, n) {
  var l = e.memoizedProps;
  if (l !== n) {
    (e = t.stateNode), Sr(Et.current);
    var i = null;
    switch (r) {
      case "input":
        (l = Cs(e, l)), (n = Cs(e, n)), (i = []);
        break;
      case "select":
        (l = ie({}, l, { value: void 0 })),
          (n = ie({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Os(e, l)), (n = Os(e, n)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = gi);
    }
    zs(r, n);
    var o;
    r = null;
    for (c in l)
      if (!n.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (o in s) s.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Kn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in n) {
      var a = n[c];
      if (
        ((s = l != null ? l[c] : void 0),
        n.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (r || (r = {}), (r[o] = a[o]));
          } else r || (i || (i = []), i.push(c, r)), (r = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && G("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(c, a));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ip = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Rn(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (n |= l.subtreeFlags & 14680064),
        (n |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (n |= l.subtreeFlags),
        (n |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function ny(e, t, r) {
  var n = t.pendingProps;
  switch ((Wa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Be(t.type) && yi(), _e(t), null;
    case 3:
      return (
        (n = t.stateNode),
        pn(),
        J(Ve),
        J(Te),
        Ja(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (pa(pt), (pt = null)))),
        ia(e, t),
        _e(t),
        null
      );
    case 5:
      Za(t);
      var l = Sr(sl.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Mp(e, t, r, n, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(C(166));
          return _e(t), null;
        }
        if (((e = Sr(Et.current)), Fl(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[jt] = t), (n[il] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              G("cancel", n), G("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", n);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) G(Ln[l], n);
              break;
            case "source":
              G("error", n);
              break;
            case "img":
            case "image":
            case "link":
              G("error", n), G("load", n);
              break;
            case "details":
              G("toggle", n);
              break;
            case "input":
              Zu(n, i), G("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                G("invalid", n);
              break;
            case "textarea":
              ec(n, i), G("invalid", n);
          }
          zs(r, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ll(n.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ll(n.textContent, s, e),
                    (l = ["children", "" + s]))
                : Kn.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  G("scroll", n);
            }
          switch (r) {
            case "input":
              _l(n), Ju(n, i, !0);
              break;
            case "textarea":
              _l(n), tc(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = gi);
          }
          (n = l), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uf(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" &&
                    ((o = e),
                    n.multiple
                      ? (o.multiple = !0)
                      : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[jt] = t),
            (e[il] = n),
            Tp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ts(r, n)), r)) {
              case "dialog":
                G("cancel", e), G("close", e), (l = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (l = n);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) G(Ln[l], e);
                l = n;
                break;
              case "source":
                G("error", e), (l = n);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (l = n);
                break;
              case "details":
                G("toggle", e), (l = n);
                break;
              case "input":
                Zu(e, n), (l = Cs(e, n)), G("invalid", e);
                break;
              case "option":
                l = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (l = ie({}, n, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                ec(e, n), (l = Os(e, n)), G("invalid", e);
                break;
              default:
                l = n;
            }
            zs(r, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? ff(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && cf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (r !== "textarea" || a !== "") && Yn(e, a)
                    : typeof a == "number" && Yn(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kn.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && G("scroll", e)
                      : a != null && _a(e, i, a, o));
              }
            switch (r) {
              case "input":
                _l(e), Ju(e, n, !1);
                break;
              case "textarea":
                _l(e), tc(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + ar(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? en(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      en(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = gi);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Ip(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(C(166));
        if (((r = Sr(sl.current)), Sr(Et.current), Fl(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[jt] = t),
            (i = n.nodeValue !== r) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ll(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ll(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[jt] = t),
            (t.stateNode = n);
      }
      return _e(t), null;
    case 13:
      if (
        (J(ne),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Qe !== null && t.mode & 1 && !(t.flags & 128))
          Jf(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = Fl(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[jt] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else pt !== null && (pa(pt), (pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? ve === 0 && (ve = 3) : du())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        pn(), ia(e, t), e === null && nl(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Qa(t.type._context), _e(t), null;
    case 17:
      return Be(t.type) && yi(), _e(t), null;
    case 19:
      if ((J(ne), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((n = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (n) Rn(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ni(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Y(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            fe() > hn &&
            ((t.flags |= 128), (n = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Ni(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !re)
            )
              return _e(t), null;
          } else
            2 * fe() - i.renderingStartTime > hn &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = i.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = fe()),
          (t.sibling = null),
          (r = ne.current),
          Y(ne, n ? (r & 1) | 2 : r & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        cu(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Xe & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ly(e, t) {
  switch ((Wa(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && yi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        J(Ve),
        J(Te),
        Ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Za(t), null;
    case 13:
      if ((J(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(ne), null;
    case 4:
      return pn(), null;
    case 10:
      return Qa(t.type._context), null;
    case 22:
    case 23:
      return cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ul = !1,
  Re = !1,
  iy = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Gr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ae(e, t, n);
      }
    else r.current = null;
}
function oa(e, t, r) {
  try {
    r();
  } catch (n) {
    ae(e, t, n);
  }
}
var Wc = !1;
function oy(e, t) {
  if (((Bs = pi), (e = Df()), Va(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var l = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            c = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              f !== r || (l !== 0 && f.nodeType !== 3) || (s = o + l),
                f !== i || (n !== 0 && f.nodeType !== 3) || (a = o + n),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (m = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (m === r && ++c === l && (s = o),
                m === i && ++d === n && (a = o),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = v;
          }
          r = s === -1 || a === -1 ? null : { start: s, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Ws = { focusedElem: e, selectionRange: r }, pi = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    E = x.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : dt(t.type, w),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (j) {
          ae(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (x = Wc), (Wc = !1), x;
}
function Hn(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var l = (n = n.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && oa(t, r, i);
      }
      l = l.next;
    } while (l !== n);
  }
}
function eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function sa(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $p(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $p(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jt], delete t[il], delete t[Xs], delete t[Vg], delete t[Bg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function aa(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = gi));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, r), e = e.sibling; e !== null; ) aa(e, t, r), (e = e.sibling);
}
function ua(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ua(e, t, r), e = e.sibling; e !== null; ) ua(e, t, r), (e = e.sibling);
}
var Ne = null,
  ft = !1;
function Dt(e, t, r) {
  for (r = r.child; r !== null; ) Fp(e, t, r), (r = r.sibling);
}
function Fp(e, t, r) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(qi, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Re || Gr(r, t);
    case 6:
      var n = Ne,
        l = ft;
      (Ne = null),
        Dt(e, t, r),
        (Ne = n),
        (ft = l),
        Ne !== null &&
          (ft
            ? ((e = Ne),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ne.removeChild(r.stateNode));
      break;
    case 18:
      Ne !== null &&
        (ft
          ? ((e = Ne),
            (r = r.stateNode),
            e.nodeType === 8
              ? Ko(e.parentNode, r)
              : e.nodeType === 1 && Ko(e, r),
            el(e))
          : Ko(Ne, r.stateNode));
      break;
    case 4:
      (n = Ne),
        (l = ft),
        (Ne = r.stateNode.containerInfo),
        (ft = !0),
        Dt(e, t, r),
        (Ne = n),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        l = n = n.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && oa(r, t, o),
            (l = l.next);
        } while (l !== n);
      }
      Dt(e, t, r);
      break;
    case 1:
      if (
        !Re &&
        (Gr(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          ae(r, t, s);
        }
      Dt(e, t, r);
      break;
    case 21:
      Dt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Re = (n = Re) || r.memoizedState !== null), Dt(e, t, r), (Re = n))
        : Dt(e, t, r);
      break;
    default:
      Dt(e, t, r);
  }
}
function qc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new iy()),
      t.forEach(function (n) {
        var l = hy.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(l, l));
      });
  }
}
function ct(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var l = r[n];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ne = s.stateNode), (ft = !1);
              break e;
            case 3:
              (Ne = s.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Ne = s.stateNode.containerInfo), (ft = !0);
              break e;
          }
          s = s.return;
        }
        if (Ne === null) throw Error(C(160));
        Fp(i, o, l), (Ne = null), (ft = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        ae(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ap(t, e), (t = t.sibling);
}
function Ap(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), wt(e), n & 4)) {
        try {
          Hn(3, e, e.return), eo(3, e);
        } catch (w) {
          ae(e, e.return, w);
        }
        try {
          Hn(5, e, e.return);
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      break;
    case 1:
      ct(t, e), wt(e), n & 512 && r !== null && Gr(r, r.return);
      break;
    case 5:
      if (
        (ct(t, e),
        wt(e),
        n & 512 && r !== null && Gr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      if (n & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = r !== null ? r.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && sf(l, i),
              Ts(s, o);
            var c = Ts(s, i);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                f = a[o + 1];
              d === "style"
                ? ff(l, f)
                : d === "dangerouslySetInnerHTML"
                ? cf(l, f)
                : d === "children"
                ? Yn(l, f)
                : _a(l, d, f, c);
            }
            switch (s) {
              case "input":
                Ps(l, i);
                break;
              case "textarea":
                af(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? en(l, !!i.multiple, v, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? en(l, !!i.multiple, i.defaultValue, !0)
                      : en(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[il] = i;
          } catch (w) {
            ae(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ct(t, e), wt(e), n & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), wt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          el(t.containerInfo);
        } catch (w) {
          ae(e, e.return, w);
        }
      break;
    case 4:
      ct(t, e), wt(e);
      break;
    case 13:
      ct(t, e),
        wt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (au = fe())),
        n & 4 && qc(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Re = (c = Re) || d), ct(t, e), (Re = c)) : ct(t, e),
        wt(e),
        n & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (I = e, d = e.child; d !== null; ) {
            for (f = I = d; I !== null; ) {
              switch (((m = I), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, m, m.return);
                  break;
                case 1:
                  Gr(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = m), (r = m.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      ae(n, r, w);
                    }
                  }
                  break;
                case 5:
                  Gr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Qc(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (I = v)) : Qc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = df("display", o)));
              } catch (w) {
                ae(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                ae(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), wt(e), n & 4 && qc(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Lp(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(C(160));
      }
      switch (n.tag) {
        case 5:
          var l = n.stateNode;
          n.flags & 32 && (Yn(l, ""), (n.flags &= -33));
          var i = Hc(e);
          ua(e, i, l);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            s = Hc(e);
          aa(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      ae(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sy(e, t, r) {
  (I = e), Dp(e);
}
function Dp(e, t, r) {
  for (var n = (e.mode & 1) !== 0; I !== null; ) {
    var l = I,
      i = l.child;
    if (l.tag === 22 && n) {
      var o = l.memoizedState !== null || Ul;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || Re;
        s = Ul;
        var c = Re;
        if (((Ul = o), (Re = a) && !c))
          for (I = l; I !== null; )
            (o = I),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Kc(l)
                : a !== null
                ? ((a.return = o), (I = a))
                : Kc(l);
        for (; i !== null; ) (I = i), Dp(i), (i = i.sibling);
        (I = l), (Ul = s), (Re = c);
      }
      Xc(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (I = i)) : Xc(e);
  }
}
function Xc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || eo(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Re)
                if (r === null) n.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : dt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    l,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Rc(t, i, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Rc(t, o, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && el(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Re || (t.flags & 512 && sa(t));
      } catch (m) {
        ae(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (I = r);
      break;
    }
    I = t.return;
  }
}
function Qc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (I = r);
      break;
    }
    I = t.return;
  }
}
function Kc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            eo(4, t);
          } catch (a) {
            ae(t, r, a);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var l = t.return;
            try {
              n.componentDidMount();
            } catch (a) {
              ae(t, l, a);
            }
          }
          var i = t.return;
          try {
            sa(t);
          } catch (a) {
            ae(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            sa(t);
          } catch (a) {
            ae(t, o, a);
          }
      }
    } catch (a) {
      ae(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var ay = Math.ceil,
  Ci = At.ReactCurrentDispatcher,
  ou = At.ReactCurrentOwner,
  it = At.ReactCurrentBatchConfig,
  H = 0,
  je = null,
  me = null,
  Ee = 0,
  Xe = 0,
  Zr = fr(0),
  ve = 0,
  dl = null,
  Or = 0,
  to = 0,
  su = 0,
  qn = null,
  De = null,
  au = 0,
  hn = 1 / 0,
  Pt = null,
  Pi = !1,
  ca = null,
  rr = null,
  Vl = !1,
  Qt = null,
  _i = 0,
  Xn = 0,
  da = null,
  ni = -1,
  li = 0;
function Le() {
  return H & 6 ? fe() : ni !== -1 ? ni : (ni = fe());
}
function nr(e) {
  return e.mode & 1
    ? H & 2 && Ee !== 0
      ? Ee & -Ee
      : Hg.transition !== null
      ? (li === 0 && (li = Nf()), li)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))),
        e)
    : 1;
}
function yt(e, t, r, n) {
  if (50 < Xn) throw ((Xn = 0), (da = null), Error(C(185)));
  vl(e, r, n),
    (!(H & 2) || e !== je) &&
      (e === je && (!(H & 2) && (to |= r), ve === 4 && Wt(e, Ee)),
      We(e, n),
      r === 1 && H === 0 && !(t.mode & 1) && ((hn = fe() + 500), Gi && pr()));
}
function We(e, t) {
  var r = e.callbackNode;
  Hh(e, t);
  var n = fi(e, e === je ? Ee : 0);
  if (n === 0)
    r !== null && lc(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && lc(r), t === 1))
      e.tag === 0 ? Wg(Yc.bind(null, e)) : Yf(Yc.bind(null, e)),
        Dg(function () {
          !(H & 6) && pr();
        }),
        (r = null);
    else {
      switch (Ef(n)) {
        case 1:
          r = Ma;
          break;
        case 4:
          r = jf;
          break;
        case 16:
          r = di;
          break;
        case 536870912:
          r = Sf;
          break;
        default:
          r = di;
      }
      r = Qp(r, Up.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Up(e, t) {
  if (((ni = -1), (li = 0), H & 6)) throw Error(C(327));
  var r = e.callbackNode;
  if (on() && e.callbackNode !== r) return null;
  var n = fi(e, e === je ? Ee : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Oi(e, n);
  else {
    t = n;
    var l = H;
    H |= 2;
    var i = Bp();
    (je !== e || Ee !== t) && ((Pt = null), (hn = fe() + 500), Er(e, t));
    do
      try {
        dy();
        break;
      } catch (s) {
        Vp(e, s);
      }
    while (!0);
    Xa(),
      (Ci.current = i),
      (H = l),
      me !== null ? (t = 0) : ((je = null), (Ee = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fs(e)), l !== 0 && ((n = l), (t = fa(e, l)))), t === 1)
    )
      throw ((r = dl), Er(e, 0), Wt(e, n), We(e, fe()), r);
    if (t === 6) Wt(e, n);
    else {
      if (
        ((l = e.current.alternate),
        !(n & 30) &&
          !uy(l) &&
          ((t = Oi(e, n)),
          t === 2 && ((i = Fs(e)), i !== 0 && ((n = i), (t = fa(e, i)))),
          t === 1))
      )
        throw ((r = dl), Er(e, 0), Wt(e, n), We(e, fe()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          yr(e, De, Pt);
          break;
        case 3:
          if (
            (Wt(e, n), (n & 130023424) === n && ((t = au + 500 - fe()), 10 < t))
          ) {
            if (fi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & n) !== n)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = qs(yr.bind(null, e, De, Pt), t);
            break;
          }
          yr(e, De, Pt);
          break;
        case 4:
          if ((Wt(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, l = -1; 0 < n; ) {
            var o = 31 - gt(n);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (n &= ~i);
          }
          if (
            ((n = l),
            (n = fe() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * ay(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = qs(yr.bind(null, e, De, Pt), n);
            break;
          }
          yr(e, De, Pt);
          break;
        case 5:
          yr(e, De, Pt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return We(e, fe()), e.callbackNode === r ? Up.bind(null, e) : null;
}
function fa(e, t) {
  var r = qn;
  return (
    e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256),
    (e = Oi(e, t)),
    e !== 2 && ((t = De), (De = r), t !== null && pa(t)),
    e
  );
}
function pa(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var l = r[n],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wt(e, t) {
  for (
    t &= ~su,
      t &= ~to,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - gt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Yc(e) {
  if (H & 6) throw Error(C(327));
  on();
  var t = fi(e, 0);
  if (!(t & 1)) return We(e, fe()), null;
  var r = Oi(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Fs(e);
    n !== 0 && ((t = n), (r = fa(e, n)));
  }
  if (r === 1) throw ((r = dl), Er(e, 0), Wt(e, t), We(e, fe()), r);
  if (r === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yr(e, De, Pt),
    We(e, fe()),
    null
  );
}
function uu(e, t) {
  var r = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = r), H === 0 && ((hn = fe() + 500), Gi && pr());
  }
}
function Rr(e) {
  Qt !== null && Qt.tag === 0 && !(H & 6) && on();
  var t = H;
  H |= 1;
  var r = it.transition,
    n = X;
  try {
    if (((it.transition = null), (X = 1), e)) return e();
  } finally {
    (X = n), (it.transition = r), (H = t), !(H & 6) && pr();
  }
}
function cu() {
  (Xe = Zr.current), J(Zr);
}
function Er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Ag(r)), me !== null))
    for (r = me.return; r !== null; ) {
      var n = r;
      switch ((Wa(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && yi();
          break;
        case 3:
          pn(), J(Ve), J(Te), Ja();
          break;
        case 5:
          Za(n);
          break;
        case 4:
          pn();
          break;
        case 13:
          J(ne);
          break;
        case 19:
          J(ne);
          break;
        case 10:
          Qa(n.type._context);
          break;
        case 22:
        case 23:
          cu();
      }
      r = r.return;
    }
  if (
    ((je = e),
    (me = e = lr(e.current, null)),
    (Ee = Xe = t),
    (ve = 0),
    (dl = null),
    (su = to = Or = 0),
    (De = qn = null),
    jr !== null)
  ) {
    for (t = 0; t < jr.length; t++)
      if (((r = jr[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var l = n.next,
          i = r.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (n.next = o);
        }
        r.pending = n;
      }
    jr = null;
  }
  return e;
}
function Vp(e, t) {
  do {
    var r = me;
    try {
      if ((Xa(), (ei.current = bi), Ei)) {
        for (var n = le.memoizedState; n !== null; ) {
          var l = n.queue;
          l !== null && (l.pending = null), (n = n.next);
        }
        Ei = !1;
      }
      if (
        ((_r = 0),
        (ke = ye = le = null),
        (Wn = !1),
        (al = 0),
        (ou.current = null),
        r === null || r.return === null)
      ) {
        (ve = 1), (dl = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = r.return,
          s = r,
          a = t;
        if (
          ((t = Ee),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = s,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Lc(o);
          if (v !== null) {
            (v.flags &= -257),
              Fc(v, o, s, i, t),
              v.mode & 1 && $c(i, c, t),
              (t = v),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              $c(i, c, t), du();
              break e;
            }
            a = Error(C(426));
          }
        } else if (re && s.mode & 1) {
          var E = Lc(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Fc(E, o, s, i, t),
              Ha(mn(a, s));
            break e;
          }
        }
        (i = a = mn(a, s)),
          ve !== 4 && (ve = 2),
          qn === null ? (qn = [i]) : qn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Ep(i, a, t);
              Oc(i, h);
              break e;
            case 1:
              s = a;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (rr === null || !rr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var j = bp(i, s, t);
                Oc(i, j);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hp(r);
    } catch (b) {
      (t = b), me === r && r !== null && (me = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Bp() {
  var e = Ci.current;
  return (Ci.current = bi), e === null ? bi : e;
}
function du() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    je === null || (!(Or & 268435455) && !(to & 268435455)) || Wt(je, Ee);
}
function Oi(e, t) {
  var r = H;
  H |= 2;
  var n = Bp();
  (je !== e || Ee !== t) && ((Pt = null), Er(e, t));
  do
    try {
      cy();
      break;
    } catch (l) {
      Vp(e, l);
    }
  while (!0);
  if ((Xa(), (H = r), (Ci.current = n), me !== null)) throw Error(C(261));
  return (je = null), (Ee = 0), ve;
}
function cy() {
  for (; me !== null; ) Wp(me);
}
function dy() {
  for (; me !== null && !$h(); ) Wp(me);
}
function Wp(e) {
  var t = Xp(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hp(e) : (me = t),
    (ou.current = null);
}
function Hp(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = ly(r, t)), r !== null)) {
        (r.flags &= 32767), (me = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (me = null);
        return;
      }
    } else if (((r = ny(r, t, Xe)), r !== null)) {
      me = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function yr(e, t, r) {
  var n = X,
    l = it.transition;
  try {
    (it.transition = null), (X = 1), fy(e, t, r, n);
  } finally {
    (it.transition = l), (X = n);
  }
  return null;
}
function fy(e, t, r, n) {
  do on();
  while (Qt !== null);
  if (H & 6) throw Error(C(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (qh(e, i),
    e === je && ((me = je = null), (Ee = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Vl ||
      ((Vl = !0),
      Qp(di, function () {
        return on(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var o = X;
    X = 1;
    var s = H;
    (H |= 4),
      (ou.current = null),
      oy(e, r),
      Ap(r, e),
      zg(Ws),
      (pi = !!Bs),
      (Ws = Bs = null),
      (e.current = r),
      sy(r),
      Lh(),
      (H = s),
      (X = o),
      (it.transition = i);
  } else e.current = r;
  if (
    (Vl && ((Vl = !1), (Qt = e), (_i = l)),
    (i = e.pendingLanes),
    i === 0 && (rr = null),
    Dh(r.stateNode),
    We(e, fe()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), n(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pi) throw ((Pi = !1), (e = ca), (ca = null), e);
  return (
    _i & 1 && e.tag !== 0 && on(),
    (i = e.pendingLanes),
    i & 1 ? (e === da ? Xn++ : ((Xn = 0), (da = e))) : (Xn = 0),
    pr(),
    null
  );
}
function on() {
  if (Qt !== null) {
    var e = Ef(_i),
      t = it.transition,
      r = X;
    try {
      if (((it.transition = null), (X = 16 > e ? 16 : e), Qt === null))
        var n = !1;
      else {
        if (((e = Qt), (Qt = null), (_i = 0), H & 6)) throw Error(C(331));
        var l = H;
        for (H |= 4, I = e.current; I !== null; ) {
          var i = I,
            o = i.child;
          if (I.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (I = c; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (I = f);
                  else
                    for (; I !== null; ) {
                      d = I;
                      var m = d.sibling,
                        v = d.return;
                      if (($p(d), d === c)) {
                        I = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (I = m);
                        break;
                      }
                      I = v;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (I = o);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (I = h);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          o = I;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (I = g);
          else
            e: for (o = p; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      eo(9, s);
                  }
                } catch (b) {
                  ae(s, s.return, b);
                }
              if (s === o) {
                I = null;
                break e;
              }
              var j = s.sibling;
              if (j !== null) {
                (j.return = s.return), (I = j);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((H = l), pr(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(qi, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (X = r), (it.transition = t);
    }
  }
  return !1;
}
function Gc(e, t, r) {
  (t = mn(r, t)),
    (t = Ep(e, t, 1)),
    (e = tr(e, t, 1)),
    (t = Le()),
    e !== null && (vl(e, 1, t), We(e, t));
}
function ae(e, t, r) {
  if (e.tag === 3) Gc(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gc(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (rr === null || !rr.has(n)))
        ) {
          (e = mn(r, e)),
            (e = bp(t, e, 1)),
            (t = tr(t, e, 1)),
            (e = Le()),
            t !== null && (vl(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function py(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & r),
    je === e &&
      (Ee & r) === r &&
      (ve === 4 || (ve === 3 && (Ee & 130023424) === Ee && 500 > fe() - au)
        ? Er(e, 0)
        : (su |= r)),
    We(e, t);
}
function qp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zl), (zl <<= 1), !(zl & 130023424) && (zl = 4194304))
      : (t = 1));
  var r = Le();
  (e = $t(e, t)), e !== null && (vl(e, t, r), We(e, r));
}
function my(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), qp(e, r);
}
function hy(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        l = e.memoizedState;
      l !== null && (r = l.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  n !== null && n.delete(t), qp(e, r);
}
var Xp;
Xp = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Ue = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Ue = !1), ry(e, t, r);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), re && t.flags & 1048576 && Gf(t, wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      ri(e, t), (e = t.pendingProps);
      var l = cn(t, Te.current);
      ln(t, r), (l = tu(null, t, n, e, l, r));
      var i = ru();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(n) ? ((i = !0), vi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ya(t),
            (l.updater = Ji),
            (t.stateNode = l),
            (l._reactInternals = t),
            Js(t, n, e, r),
            (t = ra(null, t, n, !0, i, r)))
          : ((t.tag = 0), re && i && Ba(t), Ie(null, t, l, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (ri(e, t),
          (e = t.pendingProps),
          (l = n._init),
          (n = l(n._payload)),
          (t.type = n),
          (l = t.tag = yy(n)),
          (e = dt(n, e)),
          l)
        ) {
          case 0:
            t = ta(null, t, n, e, r);
            break e;
          case 1:
            t = Uc(null, t, n, e, r);
            break e;
          case 11:
            t = Ac(null, t, n, e, r);
            break e;
          case 14:
            t = Dc(null, t, n, dt(n.type, e), r);
            break e;
        }
        throw Error(C(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (l = t.pendingProps),
        (l = t.elementType === n ? l : dt(n, l)),
        ta(e, t, n, l, r)
      );
    case 1:
      return (
        (n = t.type),
        (l = t.pendingProps),
        (l = t.elementType === n ? l : dt(n, l)),
        Uc(e, t, n, l, r)
      );
    case 3:
      e: {
        if ((Op(t), e === null)) throw Error(C(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          np(e, t),
          Si(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = mn(Error(C(423)), t)), (t = Vc(e, t, n, r, l));
            break e;
          } else if (n !== l) {
            (l = mn(Error(C(424)), t)), (t = Vc(e, t, n, r, l));
            break e;
          } else
            for (
              Qe = er(t.stateNode.containerInfo.firstChild),
                Ke = t,
                re = !0,
                pt = null,
                r = tp(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((dn(), n === l)) {
            t = Lt(e, t, r);
            break e;
          }
          Ie(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lp(t),
        e === null && Ys(t),
        (n = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Hs(n, l) ? (o = null) : i !== null && Hs(n, i) && (t.flags |= 32),
        _p(e, t),
        Ie(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && Ys(t), null;
    case 13:
      return Rp(e, t, r);
    case 4:
      return (
        Ga(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = fn(t, null, n, r)) : Ie(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (l = t.pendingProps),
        (l = t.elementType === n ? l : dt(n, l)),
        Ac(e, t, n, l, r)
      );
    case 7:
      return Ie(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          Y(ki, n._currentValue),
          (n._currentValue = o),
          i !== null)
        )
          if (vt(i.value, o)) {
            if (i.children === l.children && !Ve.current) {
              t = Lt(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === n) {
                    if (i.tag === 1) {
                      (a = Tt(-1, r & -r)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= r),
                      (a = i.alternate),
                      a !== null && (a.lanes |= r),
                      Gs(i.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= r),
                  (s = o.alternate),
                  s !== null && (s.lanes |= r),
                  Gs(o, r, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ie(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (n = t.pendingProps.children),
        ln(t, r),
        (l = ot(l)),
        (n = n(l)),
        (t.flags |= 1),
        Ie(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (l = dt(n, t.pendingProps)),
        (l = dt(n.type, l)),
        Dc(e, t, n, l, r)
      );
    case 15:
      return Cp(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (l = t.pendingProps),
        (l = t.elementType === n ? l : dt(n, l)),
        ri(e, t),
        (t.tag = 1),
        Be(n) ? ((e = !0), vi(t)) : (e = !1),
        ln(t, r),
        Np(t, n, l),
        Js(t, n, l, r),
        ra(null, t, n, !0, e, r)
      );
    case 19:
      return zp(e, t, r);
    case 22:
      return Pp(e, t, r);
  }
  throw Error(C(156, t.tag));
};
function Qp(e, t) {
  return kf(e, t);
}
function gy(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, r, n) {
  return new gy(e, t, r, n);
}
function fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yy(e) {
  if (typeof e == "function") return fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ra)) return 11;
    if (e === za) return 14;
  }
  return 2;
}
function lr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = lt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ii(e, t, r, n, l, i) {
  var o = 2;
  if (((n = e), typeof e == "function")) fu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vr:
        return br(r.children, l, i, t);
      case Oa:
        (o = 8), (l |= 8);
        break;
      case Ss:
        return (
          (e = lt(12, r, t, l | 2)), (e.elementType = Ss), (e.lanes = i), e
        );
      case Ns:
        return (e = lt(13, r, t, l)), (e.elementType = Ns), (e.lanes = i), e;
      case Es:
        return (e = lt(19, r, t, l)), (e.elementType = Es), (e.lanes = i), e;
      case nf:
        return ro(r, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case tf:
              o = 10;
              break e;
            case rf:
              o = 9;
              break e;
            case Ra:
              o = 11;
              break e;
            case za:
              o = 14;
              break e;
            case Ut:
              (o = 16), (n = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(o, r, t, l)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function br(e, t, r, n) {
  return (e = lt(7, e, n, t)), (e.lanes = r), e;
}
function ro(e, t, r, n) {
  return (
    (e = lt(22, e, n, t)),
    (e.elementType = nf),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ns(e, t, r) {
  return (e = lt(6, e, null, t)), (e.lanes = r), e;
}
function ls(e, t, r) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vy(e, t, r, n, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fo(0)),
    (this.expirationTimes = Fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fo(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function pu(e, t, r, n, l, i, o, s, a) {
  return (
    (e = new vy(e, t, r, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ya(i),
    e
  );
}
function xy(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ur,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Kp(e) {
  if (!e) return ur;
  e = e._reactInternals;
  e: {
    if (Ir(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Be(r)) return Kf(e, r, t);
  }
  return t;
}
function Yp(e, t, r, n, l, i, o, s, a) {
  return (
    (e = pu(r, n, !0, e, l, i, o, s, a)),
    (e.context = Kp(null)),
    (r = e.current),
    (n = Le()),
    (l = nr(r)),
    (i = Tt(n, l)),
    (i.callback = t ?? null),
    tr(r, i, l),
    (e.current.lanes = l),
    vl(e, l, n),
    We(e, n),
    e
  );
}
function no(e, t, r, n) {
  var l = t.current,
    i = Le(),
    o = nr(l);
  return (
    (r = Kp(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Tt(i, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = tr(l, t, o)),
    e !== null && (yt(e, l, o, i), Jl(e, l, o)),
    o
  );
}
function Ri(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function mu(e, t) {
  Zc(e, t), (e = e.alternate) && Zc(e, t);
}
function wy() {
  return null;
}
var Gp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hu(e) {
  this._internalRoot = e;
}
lo.prototype.render = hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  no(e, t, null, null);
};
lo.prototype.unmount = hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rr(function () {
      no(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pf();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Bt.length && t !== 0 && t < Bt[r].priority; r++);
    Bt.splice(r, 0, e), r === 0 && Of(e);
  }
};
function gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jc() {}
function ky(e, t, r, n, l) {
  if (l) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var c = Ri(o);
        i.call(c);
      };
    }
    var o = Yp(t, n, e, 0, null, !1, !1, "", Jc);
    return (
      (e._reactRootContainer = o),
      (e[It] = o.current),
      nl(e.nodeType === 8 ? e.parentNode : e),
      Rr(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var c = Ri(a);
      s.call(c);
    };
  }
  var a = pu(e, 0, !1, null, null, !1, !1, "", Jc);
  return (
    (e._reactRootContainer = a),
    (e[It] = a.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    Rr(function () {
      no(t, a, r, n);
    }),
    a
  );
}
function oo(e, t, r, n, l) {
  var i = r._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = Ri(o);
        s.call(a);
      };
    }
    no(t, o, e, l);
  } else o = ky(r, t, e, l, n);
  return Ri(o);
}
bf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = $n(t.pendingLanes);
        r !== 0 &&
          (Ia(t, r | 1), We(t, fe()), !(H & 6) && ((hn = fe() + 500), pr()));
      }
      break;
    case 13:
      Rr(function () {
        var n = $t(e, 1);
        if (n !== null) {
          var l = Le();
          yt(n, e, 1, l);
        }
      }),
        mu(e, 1);
  }
};
$a = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var r = Le();
      yt(t, e, 134217728, r);
    }
    mu(e, 134217728);
  }
};
Cf = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      r = $t(e, t);
    if (r !== null) {
      var n = Le();
      yt(r, e, t, n);
    }
    mu(e, t);
  }
};
Pf = function () {
  return X;
};
_f = function (e, t) {
  var r = X;
  try {
    return (X = e), t();
  } finally {
    X = r;
  }
};
Is = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ps(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var l = Yi(n);
            if (!l) throw Error(C(90));
            of(n), Ps(n, l);
          }
        }
      }
      break;
    case "textarea":
      af(e, r);
      break;
    case "select":
      (t = r.value), t != null && en(e, !!r.multiple, t, !1);
  }
};
hf = uu;
gf = Rr;
var jy = { usingClientEntryPoint: !1, Events: [wl, qr, Yi, pf, mf, uu] },
  zn = {
    findFiberByHostInstance: kr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Sy = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || wy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bl.isDisabled && Bl.supportsFiber)
    try {
      (qi = Bl.inject(Sy)), (Nt = Bl);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jy;
Ze.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gu(t)) throw Error(C(200));
  return xy(e, t, null, r);
};
Ze.createRoot = function (e, t) {
  if (!gu(e)) throw Error(C(299));
  var r = !1,
    n = "",
    l = Gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = pu(e, 1, !1, null, null, r, !1, n, l)),
    (e[It] = t.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    new hu(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = xf(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return Rr(e);
};
Ze.hydrate = function (e, t, r) {
  if (!io(t)) throw Error(C(200));
  return oo(null, e, t, !0, r);
};
Ze.hydrateRoot = function (e, t, r) {
  if (!gu(e)) throw Error(C(405));
  var n = (r != null && r.hydratedSources) || null,
    l = !1,
    i = "",
    o = Gp;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = Yp(t, null, e, 1, r ?? null, l, !1, i, o)),
    (e[It] = t.current),
    nl(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l);
  return new lo(t);
};
Ze.render = function (e, t, r) {
  if (!io(t)) throw Error(C(200));
  return oo(null, e, t, !1, r);
};
Ze.unmountComponentAtNode = function (e) {
  if (!io(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Rr(function () {
        oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = uu;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!io(r)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return oo(e, t, r, !1, n);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Zp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp);
    } catch (e) {
      console.error(e);
    }
}
Zp(), (Gd.exports = Ze);
var Jp = Gd.exports,
  ed = Jp;
(ks.createRoot = ed.createRoot), (ks.hydrateRoot = ed.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
var Kt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Kt || (Kt = {}));
const td = "popstate";
function Ny(e) {
  e === void 0 && (e = {});
  function t(n, l) {
    let { pathname: i, search: o, hash: s } = n.location;
    return ma(
      "",
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function r(n, l) {
    return typeof l == "string" ? l : zi(l);
  }
  return by(t, r, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function em(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ey() {
  return Math.random().toString(36).substr(2, 8);
}
function rd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ma(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    fl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jn(t) : t,
      { state: r, key: (t && t.key) || n || Ey() }
    )
  );
}
function zi(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function jn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function by(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = n,
    o = l.history,
    s = Kt.Pop,
    a = null,
    c = d();
  c == null && ((c = 0), o.replaceState(fl({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = Kt.Pop;
    let E = d(),
      h = E == null ? null : E - c;
    (c = E), a && a({ action: s, location: w.location, delta: h });
  }
  function m(E, h) {
    s = Kt.Push;
    let p = ma(w.location, E, h);
    c = d() + 1;
    let g = rd(p, c),
      j = w.createHref(p);
    try {
      o.pushState(g, "", j);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      l.location.assign(j);
    }
    i && a && a({ action: s, location: w.location, delta: 1 });
  }
  function v(E, h) {
    s = Kt.Replace;
    let p = ma(w.location, E, h);
    c = d();
    let g = rd(p, c),
      j = w.createHref(p);
    o.replaceState(g, "", j),
      i && a && a({ action: s, location: w.location, delta: 0 });
  }
  function x(E) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      p = typeof E == "string" ? E : zi(E);
    return (
      (p = p.replace(/ $/, "%20")),
      he(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(td, f),
        (a = E),
        () => {
          l.removeEventListener(td, f), (a = null);
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: x,
    encodeLocation(E) {
      let h = x(E);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: v,
    go(E) {
      return o.go(E);
    },
  };
  return w;
}
var nd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(nd || (nd = {}));
function Cy(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? jn(t) : t,
    l = yu(n.pathname || "/", r);
  if (l == null) return null;
  let i = tm(e);
  Py(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) {
    let a = Dy(l);
    o = Ly(i[s], a);
  }
  return o;
}
function tm(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let l = (i, o, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (he(
        a.relativePath.startsWith(n),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(n.length)));
    let c = ir([n, a.relativePath]),
      d = r.concat(a);
    i.children &&
      i.children.length > 0 &&
      (he(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      tm(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Iy(c, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let a of rm(i.path)) l(i, o, a);
    }),
    t
  );
}
function rm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    l = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return l ? [i, ""] : [i];
  let o = rm(n.join("/")),
    s = [];
  return (
    s.push(...o.map((a) => (a === "" ? i : [i, a].join("/")))),
    l && s.push(...o),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Py(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : $y(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const _y = /^:[\w-]+$/,
  Oy = 3,
  Ry = 2,
  zy = 1,
  Ty = 10,
  My = -2,
  ld = (e) => e === "*";
function Iy(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(ld) && (n += My),
    t && (n += Ry),
    r
      .filter((l) => !ld(l))
      .reduce((l, i) => l + (_y.test(i) ? Oy : i === "" ? zy : Ty), n)
  );
}
function $y(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, l) => n === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ly(e, t) {
  let { routesMeta: r } = e,
    n = {},
    l = "/",
    i = [];
  for (let o = 0; o < r.length; ++o) {
    let s = r[o],
      a = o === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      d = Fy(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        c
      );
    if (!d) return null;
    Object.assign(n, d.params);
    let f = s.route;
    i.push({
      params: n,
      pathname: ir([l, d.pathname]),
      pathnameBase: Wy(ir([l, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (l = ir([l, d.pathnameBase]));
  }
  return i;
}
function Fy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Ay(e.path, e.caseSensitive, e.end),
    l = t.match(r);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: n.reduce((c, d, f) => {
      let { paramName: m, isOptional: v } = d;
      if (m === "*") {
        let w = s[f] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = s[f];
      return (
        v && !x ? (c[m] = void 0) : (c[m] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Ay(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    em(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, a) => (
            n.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), n]
  );
}
function Dy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      em(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function yu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Uy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: l = "",
  } = typeof e == "string" ? jn(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Vy(r, t)) : t,
    search: Hy(n),
    hash: qy(l),
  };
}
function Vy(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function is(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function By(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function nm(e, t) {
  let r = By(e);
  return t
    ? r.map((n, l) => (l === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function lm(e, t, r, n) {
  n === void 0 && (n = !1);
  let l;
  typeof e == "string"
    ? (l = jn(e))
    : ((l = fl({}, e)),
      he(
        !l.pathname || !l.pathname.includes("?"),
        is("?", "pathname", "search", l)
      ),
      he(
        !l.pathname || !l.pathname.includes("#"),
        is("#", "pathname", "hash", l)
      ),
      he(!l.search || !l.search.includes("#"), is("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = r;
  else {
    let f = t.length - 1;
    if (!n && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      l.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let a = Uy(l, s),
    c = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && r.endsWith("/");
  return !a.pathname.endsWith("/") && (c || d) && (a.pathname += "/"), a;
}
const ir = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Wy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Xy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const im = ["post", "put", "patch", "delete"];
new Set(im);
const Qy = ["get", ...im];
new Set(Qy);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
const vu = N.createContext(null),
  Ky = N.createContext(null),
  $r = N.createContext(null),
  so = N.createContext(null),
  mr = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  om = N.createContext(null);
function Yy(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  jl() || he(!1);
  let { basename: n, navigator: l } = N.useContext($r),
    { hash: i, pathname: o, search: s } = am(e, { relative: r }),
    a = o;
  return (
    n !== "/" && (a = o === "/" ? n : ir([n, o])),
    l.createHref({ pathname: a, search: s, hash: i })
  );
}
function jl() {
  return N.useContext(so) != null;
}
function Sl() {
  return jl() || he(!1), N.useContext(so).location;
}
function sm(e) {
  N.useContext($r).static || N.useLayoutEffect(e);
}
function xu() {
  let { isDataRoute: e } = N.useContext(mr);
  return e ? cv() : Gy();
}
function Gy() {
  jl() || he(!1);
  let e = N.useContext(vu),
    { basename: t, future: r, navigator: n } = N.useContext($r),
    { matches: l } = N.useContext(mr),
    { pathname: i } = Sl(),
    o = JSON.stringify(nm(l, r.v7_relativeSplatPath)),
    s = N.useRef(!1);
  return (
    sm(() => {
      s.current = !0;
    }),
    N.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof c == "number") {
          n.go(c);
          return;
        }
        let f = lm(c, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : ir([t, f.pathname])),
          (d.replace ? n.replace : n.push)(f, d.state, d);
      },
      [t, n, o, i, e]
    )
  );
}
function Zy() {
  let { matches: e } = N.useContext(mr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function am(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = N.useContext($r),
    { matches: l } = N.useContext(mr),
    { pathname: i } = Sl(),
    o = JSON.stringify(nm(l, n.v7_relativeSplatPath));
  return N.useMemo(() => lm(e, JSON.parse(o), i, r === "path"), [e, o, i, r]);
}
function Jy(e, t) {
  return ev(e, t);
}
function ev(e, t, r, n) {
  jl() || he(!1);
  let { navigator: l } = N.useContext($r),
    { matches: i } = N.useContext(mr),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Sl(),
    d;
  if (t) {
    var f;
    let E = typeof t == "string" ? jn(t) : t;
    a === "/" || ((f = E.pathname) != null && f.startsWith(a)) || he(!1),
      (d = E);
  } else d = c;
  let m = d.pathname || "/",
    v = m;
  if (a !== "/") {
    let E = a.replace(/^\//, "").split("/");
    v = "/" + m.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let x = Cy(e, { pathname: v }),
    w = iv(
      x &&
        x.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: ir([
              a,
              l.encodeLocation
                ? l.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? a
                : ir([
                    a,
                    l.encodeLocation
                      ? l.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    );
  return t && w
    ? N.createElement(
        so.Provider,
        {
          value: {
            location: pl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Kt.Pop,
          },
        },
        w
      )
    : w;
}
function tv() {
  let e = uv(),
    t = Xy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? N.createElement("pre", { style: l }, r) : null,
    null
  );
}
const rv = N.createElement(tv, null);
class nv extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          mr.Provider,
          { value: this.props.routeContext },
          N.createElement(om.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lv(e) {
  let { routeContext: t, match: r, children: n } = e,
    l = N.useContext(vu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = r.route.id),
    N.createElement(mr.Provider, { value: t }, n)
  );
}
function iv(e, t, r, n) {
  var l;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if ((i = r) != null && i.errors) e = r.matches;
    else return null;
  }
  let o = e,
    s = (l = r) == null ? void 0 : l.errors;
  if (s != null) {
    let d = o.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    );
    d >= 0 || he(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let a = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: v } = r,
          x =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (a = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, m) => {
    let v,
      x = !1,
      w = null,
      E = null;
    r &&
      ((v = s && f.route.id ? s[f.route.id] : void 0),
      (w = f.route.errorElement || rv),
      a &&
        (c < 0 && m === 0
          ? ((x = !0), (E = null))
          : c === m &&
            ((x = !0), (E = f.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, m + 1)),
      p = () => {
        let g;
        return (
          v
            ? (g = w)
            : x
            ? (g = E)
            : f.route.Component
            ? (g = N.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = d),
          N.createElement(lv, {
            match: f,
            routeContext: { outlet: d, matches: h, isDataRoute: r != null },
            children: g,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? N.createElement(nv, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var um = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(um || {}),
  Ti = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ti || {});
function ov(e) {
  let t = N.useContext(vu);
  return t || he(!1), t;
}
function sv(e) {
  let t = N.useContext(Ky);
  return t || he(!1), t;
}
function av(e) {
  let t = N.useContext(mr);
  return t || he(!1), t;
}
function cm(e) {
  let t = av(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || he(!1), r.route.id;
}
function uv() {
  var e;
  let t = N.useContext(om),
    r = sv(Ti.UseRouteError),
    n = cm(Ti.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function cv() {
  let { router: e } = ov(um.UseNavigateStable),
    t = cm(Ti.UseNavigateStable),
    r = N.useRef(!1);
  return (
    sm(() => {
      r.current = !0;
    }),
    N.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, pl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function vr(e) {
  he(!1);
}
function dv(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: l = Kt.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  jl() && he(!1);
  let a = t.replace(/^\/*/, "/"),
    c = N.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: o,
        future: pl({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, o]
    );
  typeof n == "string" && (n = jn(n));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: v = null,
      key: x = "default",
    } = n,
    w = N.useMemo(() => {
      let E = yu(d, a);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: m, state: v, key: x },
            navigationType: l,
          };
    }, [a, d, f, m, v, x, l]);
  return w == null
    ? null
    : N.createElement(
        $r.Provider,
        { value: c },
        N.createElement(so.Provider, { children: r, value: w })
      );
}
function fv(e) {
  let { children: t, location: r } = e;
  return Jy(ha(t), r);
}
new Promise(() => {});
function ha(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    N.Children.forEach(e, (n, l) => {
      if (!N.isValidElement(n)) return;
      let i = [...t, l];
      if (n.type === N.Fragment) {
        r.push.apply(r, ha(n.props.children, i));
        return;
      }
      n.type !== vr && he(!1), !n.props.index || !n.props.children || he(!1);
      let o = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (o.children = ha(n.props.children, i)), r.push(o);
    }),
    r
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ga() {
  return (
    (ga = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ga.apply(this, arguments)
  );
}
function pv(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    l,
    i;
  for (i = 0; i < n.length; i++)
    (l = n[i]), !(t.indexOf(l) >= 0) && (r[l] = e[l]);
  return r;
}
function mv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !mv(e);
}
const gv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  yv = "6";
try {
  window.__reactRouterVersion = yv;
} catch {}
const vv = "startTransition",
  id = ph[vv];
function xv(e) {
  let { basename: t, children: r, future: n, window: l } = e,
    i = N.useRef();
  i.current == null && (i.current = Ny({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, a] = N.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = n || {},
    d = N.useCallback(
      (f) => {
        c && id ? id(() => a(f)) : a(f);
      },
      [a, c]
    );
  return (
    N.useLayoutEffect(() => o.listen(d), [o, d]),
    N.createElement(dv, {
      basename: t,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: n,
    })
  );
}
const wv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ze = N.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: a,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      m = pv(t, gv),
      { basename: v } = N.useContext($r),
      x,
      w = !1;
    if (typeof c == "string" && kv.test(c) && ((x = c), wv))
      try {
        let g = new URL(window.location.href),
          j = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          b = yu(j.pathname, v);
        j.origin === g.origin && b != null
          ? (c = b + j.search + j.hash)
          : (w = !0);
      } catch {}
    let E = Yy(c, { relative: l }),
      h = jv(c, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: f,
      });
    function p(g) {
      n && n(g), g.defaultPrevented || h(g);
    }
    return N.createElement(
      "a",
      ga({}, m, { href: x || E, onClick: w || i ? n : p, ref: r, target: a })
    );
  });
var od;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(od || (od = {}));
var sd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(sd || (sd = {}));
function jv(e, t) {
  let {
      target: r,
      replace: n,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = xu(),
    c = Sl(),
    d = am(e, { relative: o });
  return N.useCallback(
    (f) => {
      if (hv(f, r)) {
        f.preventDefault();
        let m = n !== void 0 ? n : zi(c) === zi(d);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: s,
        });
      }
    },
    [c, a, d, n, l, r, e, i, o, s]
  );
}
const zt = () => {
    const e = { top: 0, left: 0 };
    window.scrollTo(e);
  },
  oi = (e) =>
    u.jsx(ze, {
      className: "text-subtitle ",
      to: e.to,
      onClick: e.onClick,
      children: u.jsxs("button", {
        className:
          "text-gray hover:text-brightOrange transition-colors duration-300",
        onClick: zt,
        whilehover: { scale: 1.1 },
        whiletap: { scale: 0.9 },
        children: [
          "SHOP",
          " ",
          u.jsx("img", {
            className: "inline-block align-middle -mt-1",
            src: "/assets/shared/desktop/icon-arrow-right.svg",
            "aria-label": "hidden",
          }),
        ],
      }),
    }),
  Sv = ({ onClose: e }) => {
    const [t, r] = N.useState(!1);
    N.useEffect(() => {
      r(!0);
    }, []);
    function n() {
      r(!1), e();
    }
    return u.jsx("div", {
      className: `lg:hidden bg-pureWhite mobile-menu ${
        t ? "active" : "hidden"
      }`,
      children: u.jsxs("ul", {
        className:
          "pt-[84px] md:pt-[110px] flex flex-col md:flex-row md:justify-between gap-[100px] md:gap-[10px] md:max-w-[689px] mx-auto items-center lg:hidden pb-8",
        children: [
          u.jsx("li", {
            className: "",
            children: u.jsxs("div", {
              className:
                "relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto",
              children: [
                u.jsx("img", {
                  className:
                    "w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  src: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
                  alt: "headphones",
                }),
                u.jsx("h6", {
                  className: "text-mobileMenu",
                  children: "HEADPHONES",
                }),
                u.jsx(oi, { onClick: n, to: "/headphones" }),
              ],
            }),
          }),
          u.jsx("li", {
            className: "",
            children: u.jsxs("div", {
              className:
                "relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto",
              children: [
                u.jsx("img", {
                  className:
                    "w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
                  alt: "speakers",
                }),
                u.jsx("h6", {
                  className: "text-mobileMenu",
                  children: "SPEAKERS",
                }),
                u.jsx(oi, { onClick: n, to: "/speakers" }),
              ],
            }),
          }),
          u.jsx("li", {
            className: "",
            children: u.jsxs("div", {
              className:
                "relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto",
              children: [
                u.jsx("img", {
                  className:
                    "w-1/2 h-auto absolute top-[25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  src: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
                  alt: "earphones",
                }),
                u.jsx("h6", {
                  className: "text-mobileMenu",
                  children: "EARPHONES",
                }),
                u.jsx(oi, { onClick: n, to: "/earphones" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Nv = () =>
    u.jsx(ze, {
      to: "./checkout",
      children: u.jsx("button", {
        className:
          "w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]",
        whilehover: { scale: 1 },
        whiletap: { scale: 0.9 },
        transition: { duration: 0.3 },
        children: "Checkout",
      }),
    });
var dm = { exports: {} },
  fm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gn = N;
function Ev(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bv = typeof Object.is == "function" ? Object.is : Ev,
  Cv = gn.useState,
  Pv = gn.useEffect,
  _v = gn.useLayoutEffect,
  Ov = gn.useDebugValue;
function Rv(e, t) {
  var r = t(),
    n = Cv({ inst: { value: r, getSnapshot: t } }),
    l = n[0].inst,
    i = n[1];
  return (
    _v(
      function () {
        (l.value = r), (l.getSnapshot = t), os(l) && i({ inst: l });
      },
      [e, r, t]
    ),
    Pv(
      function () {
        return (
          os(l) && i({ inst: l }),
          e(function () {
            os(l) && i({ inst: l });
          })
        );
      },
      [e]
    ),
    Ov(r),
    r
  );
}
function os(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !bv(e, r);
  } catch {
    return !0;
  }
}
function zv(e, t) {
  return t();
}
var Tv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? zv
    : Rv;
fm.useSyncExternalStore =
  gn.useSyncExternalStore !== void 0 ? gn.useSyncExternalStore : Tv;
dm.exports = fm;
var Mv = dm.exports,
  Iv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ao = N,
  $v = Mv;
function Lv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fv = typeof Object.is == "function" ? Object.is : Lv,
  Av = $v.useSyncExternalStore,
  Dv = ao.useRef,
  Uv = ao.useEffect,
  Vv = ao.useMemo,
  Bv = ao.useDebugValue;
Iv.useSyncExternalStoreWithSelector = function (e, t, r, n, l) {
  var i = Dv(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Vv(
    function () {
      function a(v) {
        if (!c) {
          if (((c = !0), (d = v), (v = n(v)), l !== void 0 && o.hasValue)) {
            var x = o.value;
            if (l(x, v)) return (f = x);
          }
          return (f = v);
        }
        if (((x = f), Fv(d, v))) return x;
        var w = n(v);
        return l !== void 0 && l(x, w) ? x : ((d = v), (f = w));
      }
      var c = !1,
        d,
        f,
        m = r === void 0 ? null : r;
      return [
        function () {
          return a(t());
        },
        m === null
          ? void 0
          : function () {
              return a(m());
            },
      ];
    },
    [t, r, n, l]
  );
  var s = Av(e, i[0], i[1]);
  return (
    Uv(
      function () {
        (o.hasValue = !0), (o.value = s);
      },
      [s]
    ),
    Bv(s),
    s
  );
};
function Wv(e) {
  e();
}
let pm = Wv;
const Hv = (e) => (pm = e),
  qv = () => pm,
  ad = Symbol.for("react-redux-context"),
  ud = typeof globalThis < "u" ? globalThis : {};
function Xv() {
  var e;
  if (!N.createContext) return {};
  const t = (e = ud[ad]) != null ? e : (ud[ad] = new Map());
  let r = t.get(N.createContext);
  return r || ((r = N.createContext(null)), t.set(N.createContext, r)), r;
}
const yn = Xv();
function mm(e = yn) {
  return function () {
    return N.useContext(e);
  };
}
const Qv = mm();
var hm = { exports: {} },
  Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se = typeof Symbol == "function" && Symbol.for,
  wu = Se ? Symbol.for("react.element") : 60103,
  ku = Se ? Symbol.for("react.portal") : 60106,
  uo = Se ? Symbol.for("react.fragment") : 60107,
  co = Se ? Symbol.for("react.strict_mode") : 60108,
  fo = Se ? Symbol.for("react.profiler") : 60114,
  po = Se ? Symbol.for("react.provider") : 60109,
  mo = Se ? Symbol.for("react.context") : 60110,
  ju = Se ? Symbol.for("react.async_mode") : 60111,
  ho = Se ? Symbol.for("react.concurrent_mode") : 60111,
  go = Se ? Symbol.for("react.forward_ref") : 60112,
  yo = Se ? Symbol.for("react.suspense") : 60113,
  Kv = Se ? Symbol.for("react.suspense_list") : 60120,
  vo = Se ? Symbol.for("react.memo") : 60115,
  xo = Se ? Symbol.for("react.lazy") : 60116,
  Yv = Se ? Symbol.for("react.block") : 60121,
  Gv = Se ? Symbol.for("react.fundamental") : 60117,
  Zv = Se ? Symbol.for("react.responder") : 60118,
  Jv = Se ? Symbol.for("react.scope") : 60119;
function et(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wu:
        switch (((e = e.type), e)) {
          case ju:
          case ho:
          case uo:
          case fo:
          case co:
          case yo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case mo:
              case go:
              case xo:
              case vo:
              case po:
                return e;
              default:
                return t;
            }
        }
      case ku:
        return t;
    }
  }
}
function gm(e) {
  return et(e) === ho;
}
Q.AsyncMode = ju;
Q.ConcurrentMode = ho;
Q.ContextConsumer = mo;
Q.ContextProvider = po;
Q.Element = wu;
Q.ForwardRef = go;
Q.Fragment = uo;
Q.Lazy = xo;
Q.Memo = vo;
Q.Portal = ku;
Q.Profiler = fo;
Q.StrictMode = co;
Q.Suspense = yo;
Q.isAsyncMode = function (e) {
  return gm(e) || et(e) === ju;
};
Q.isConcurrentMode = gm;
Q.isContextConsumer = function (e) {
  return et(e) === mo;
};
Q.isContextProvider = function (e) {
  return et(e) === po;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === wu;
};
Q.isForwardRef = function (e) {
  return et(e) === go;
};
Q.isFragment = function (e) {
  return et(e) === uo;
};
Q.isLazy = function (e) {
  return et(e) === xo;
};
Q.isMemo = function (e) {
  return et(e) === vo;
};
Q.isPortal = function (e) {
  return et(e) === ku;
};
Q.isProfiler = function (e) {
  return et(e) === fo;
};
Q.isStrictMode = function (e) {
  return et(e) === co;
};
Q.isSuspense = function (e) {
  return et(e) === yo;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === uo ||
    e === ho ||
    e === fo ||
    e === co ||
    e === yo ||
    e === Kv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xo ||
        e.$$typeof === vo ||
        e.$$typeof === po ||
        e.$$typeof === mo ||
        e.$$typeof === go ||
        e.$$typeof === Gv ||
        e.$$typeof === Zv ||
        e.$$typeof === Jv ||
        e.$$typeof === Yv))
  );
};
Q.typeOf = et;
hm.exports = Q;
var ex = hm.exports,
  ym = ex,
  tx = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  rx = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  vm = {};
vm[ym.ForwardRef] = tx;
vm[ym.Memo] = rx;
var K = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Su = Symbol.for("react.element"),
  Nu = Symbol.for("react.portal"),
  wo = Symbol.for("react.fragment"),
  ko = Symbol.for("react.strict_mode"),
  jo = Symbol.for("react.profiler"),
  So = Symbol.for("react.provider"),
  No = Symbol.for("react.context"),
  nx = Symbol.for("react.server_context"),
  Eo = Symbol.for("react.forward_ref"),
  bo = Symbol.for("react.suspense"),
  Co = Symbol.for("react.suspense_list"),
  Po = Symbol.for("react.memo"),
  _o = Symbol.for("react.lazy"),
  lx = Symbol.for("react.offscreen"),
  xm;
xm = Symbol.for("react.module.reference");
function at(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Su:
        switch (((e = e.type), e)) {
          case wo:
          case jo:
          case ko:
          case bo:
          case Co:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case nx:
              case No:
              case Eo:
              case _o:
              case Po:
              case So:
                return e;
              default:
                return t;
            }
        }
      case Nu:
        return t;
    }
  }
}
K.ContextConsumer = No;
K.ContextProvider = So;
K.Element = Su;
K.ForwardRef = Eo;
K.Fragment = wo;
K.Lazy = _o;
K.Memo = Po;
K.Portal = Nu;
K.Profiler = jo;
K.StrictMode = ko;
K.Suspense = bo;
K.SuspenseList = Co;
K.isAsyncMode = function () {
  return !1;
};
K.isConcurrentMode = function () {
  return !1;
};
K.isContextConsumer = function (e) {
  return at(e) === No;
};
K.isContextProvider = function (e) {
  return at(e) === So;
};
K.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Su;
};
K.isForwardRef = function (e) {
  return at(e) === Eo;
};
K.isFragment = function (e) {
  return at(e) === wo;
};
K.isLazy = function (e) {
  return at(e) === _o;
};
K.isMemo = function (e) {
  return at(e) === Po;
};
K.isPortal = function (e) {
  return at(e) === Nu;
};
K.isProfiler = function (e) {
  return at(e) === jo;
};
K.isStrictMode = function (e) {
  return at(e) === ko;
};
K.isSuspense = function (e) {
  return at(e) === bo;
};
K.isSuspenseList = function (e) {
  return at(e) === Co;
};
K.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === wo ||
    e === jo ||
    e === ko ||
    e === bo ||
    e === Co ||
    e === lx ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === _o ||
        e.$$typeof === Po ||
        e.$$typeof === So ||
        e.$$typeof === No ||
        e.$$typeof === Eo ||
        e.$$typeof === xm ||
        e.getModuleId !== void 0))
  );
};
K.typeOf = at;
function ix() {
  const e = qv();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        l = t;
      for (; l; ) n.push(l), (l = l.next);
      return n;
    },
    subscribe(n) {
      let l = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const cd = { notify() {}, get: () => [] };
function ox(e, t) {
  let r,
    n = cd,
    l = 0,
    i = !1;
  function o(w) {
    d();
    const E = n.subscribe(w);
    let h = !1;
    return () => {
      h || ((h = !0), E(), f());
    };
  }
  function s() {
    n.notify();
  }
  function a() {
    x.onStateChange && x.onStateChange();
  }
  function c() {
    return i;
  }
  function d() {
    l++, r || ((r = e.subscribe(a)), (n = ix()));
  }
  function f() {
    l--, r && l === 0 && (r(), (r = void 0), n.clear(), (n = cd));
  }
  function m() {
    i || ((i = !0), d());
  }
  function v() {
    i && ((i = !1), f());
  }
  const x = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: a,
    isSubscribed: c,
    trySubscribe: m,
    tryUnsubscribe: v,
    getListeners: () => n,
  };
  return x;
}
const sx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ax = sx ? N.useLayoutEffect : N.useEffect;
function ux({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: l = "once",
  noopCheck: i = "once",
}) {
  const o = N.useMemo(() => {
      const c = ox(e);
      return {
        store: e,
        subscription: c,
        getServerState: n ? () => n : void 0,
        stabilityCheck: l,
        noopCheck: i,
      };
    }, [e, n, l, i]),
    s = N.useMemo(() => e.getState(), [e]);
  ax(() => {
    const { subscription: c } = o;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      s !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [o, s]);
  const a = t || yn;
  return N.createElement(a.Provider, { value: o }, r);
}
function wm(e = yn) {
  const t = e === yn ? Qv : mm(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const cx = wm();
function dx(e = yn) {
  const t = e === yn ? cx : wm(e);
  return function () {
    return t().dispatch;
  };
}
const km = dx();
Hv(Jp.unstable_batchedUpdates);
function mt(e) {
  for (
    var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (r.length
        ? " " +
          r
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function cr(e) {
  return !!e && !!e[te];
}
function Ft(e) {
  var t;
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != "object") return !1;
      var n = Object.getPrototypeOf(r);
      if (n === null) return !0;
      var l = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        l === Object ||
        (typeof l == "function" && Function.toString.call(l) === wx)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[yd] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[yd]) ||
      Eu(e) ||
      bu(e))
  );
}
function zr(e, t, r) {
  r === void 0 && (r = !1),
    Sn(e) === 0
      ? (r ? Object.keys : an)(e).forEach(function (n) {
          (r && typeof n == "symbol") || t(n, e[n], e);
        })
      : e.forEach(function (n, l) {
          return t(l, n, e);
        });
}
function Sn(e) {
  var t = e[te];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Eu(e)
    ? 2
    : bu(e)
    ? 3
    : 0;
}
function sn(e, t) {
  return Sn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function fx(e, t) {
  return Sn(e) === 2 ? e.get(t) : e[t];
}
function jm(e, t, r) {
  var n = Sn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Sm(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Eu(e) {
  return vx && e instanceof Map;
}
function bu(e) {
  return xx && e instanceof Set;
}
function xr(e) {
  return e.o || e.t;
}
function Cu(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Em(e);
  delete t[te];
  for (var r = an(t), n = 0; n < r.length; n++) {
    var l = r[n],
      i = t[l];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[l] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[l],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Pu(e, t) {
  return (
    t === void 0 && (t = !1),
    _u(e) ||
      cr(e) ||
      !Ft(e) ||
      (Sn(e) > 1 && (e.set = e.add = e.clear = e.delete = px),
      Object.freeze(e),
      t &&
        zr(
          e,
          function (r, n) {
            return Pu(n, !0);
          },
          !0
        )),
    e
  );
}
function px() {
  mt(2);
}
function _u(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function bt(e) {
  var t = wa[e];
  return t || mt(18, e), t;
}
function mx(e, t) {
  wa[e] || (wa[e] = t);
}
function ya() {
  return ml;
}
function ss(e, t) {
  t && (bt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Mi(e) {
  va(e), e.p.forEach(hx), (e.p = null);
}
function va(e) {
  e === ml && (ml = e.l);
}
function dd(e) {
  return (ml = { p: [], l: ml, h: e, m: !0, _: 0 });
}
function hx(e) {
  var t = e[te];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function as(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return (
    t.h.O || bt("ES5").S(t, e, n),
    n
      ? (r[te].P && (Mi(t), mt(4)),
        Ft(e) && ((e = Ii(t, e)), t.l || $i(t, e)),
        t.u && bt("Patches").M(r[te].t, e, t.u, t.s))
      : (e = Ii(t, r, [])),
    Mi(t),
    t.u && t.v(t.u, t.s),
    e !== Nm ? e : void 0
  );
}
function Ii(e, t, r) {
  if (_u(t)) return t;
  var n = t[te];
  if (!n)
    return (
      zr(
        t,
        function (s, a) {
          return fd(e, n, t, s, a, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return $i(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var l = n.i === 4 || n.i === 5 ? (n.o = Cu(n.k)) : n.o,
      i = l,
      o = !1;
    n.i === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      zr(i, function (s, a) {
        return fd(e, n, l, s, a, r, o);
      }),
      $i(e, l, !1),
      r && e.u && bt("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function fd(e, t, r, n, l, i, o) {
  if (cr(l)) {
    var s = Ii(e, l, i && t && t.i !== 3 && !sn(t.R, n) ? i.concat(n) : void 0);
    if ((jm(r, n, s), !cr(s))) return;
    e.m = !1;
  } else o && r.add(l);
  if (Ft(l) && !_u(l)) {
    if (!e.h.D && e._ < 1) return;
    Ii(e, l), (t && t.A.l) || $i(e, l);
  }
}
function $i(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Pu(t, r);
}
function us(e, t) {
  var r = e[te];
  return (r ? xr(r) : e)[t];
}
function pd(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function Ht(e) {
  e.P || ((e.P = !0), e.l && Ht(e.l));
}
function cs(e) {
  e.o || (e.o = Cu(e.t));
}
function xa(e, t, r) {
  var n = Eu(t)
    ? bt("MapSet").F(t, r)
    : bu(t)
    ? bt("MapSet").T(t, r)
    : e.O
    ? (function (l, i) {
        var o = Array.isArray(l),
          s = {
            i: o ? 1 : 0,
            A: i ? i.A : ya(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: l,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = s,
          c = hl;
        o && ((a = [s]), (c = Fn));
        var d = Proxy.revocable(a, c),
          f = d.revoke,
          m = d.proxy;
        return (s.k = m), (s.j = f), m;
      })(t, r)
    : bt("ES5").J(t, r);
  return (r ? r.A : ya()).p.push(n), n;
}
function gx(e) {
  return (
    cr(e) || mt(22, e),
    (function t(r) {
      if (!Ft(r)) return r;
      var n,
        l = r[te],
        i = Sn(r);
      if (l) {
        if (!l.P && (l.i < 4 || !bt("ES5").K(l))) return l.t;
        (l.I = !0), (n = md(r, i)), (l.I = !1);
      } else n = md(r, i);
      return (
        zr(n, function (o, s) {
          (l && fx(l.t, o) === s) || jm(n, o, t(s));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function md(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Cu(e);
}
function yx() {
  function e(i, o) {
    var s = l[i];
    return (
      s
        ? (s.enumerable = o)
        : (l[i] = s =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var a = this[te];
                return hl.get(a, i);
              },
              set: function (a) {
                var c = this[te];
                hl.set(c, i, a);
              },
            }),
      s
    );
  }
  function t(i) {
    for (var o = i.length - 1; o >= 0; o--) {
      var s = i[o][te];
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && Ht(s);
            break;
          case 4:
            r(s) && Ht(s);
        }
    }
  }
  function r(i) {
    for (var o = i.t, s = i.k, a = an(s), c = a.length - 1; c >= 0; c--) {
      var d = a[c];
      if (d !== te) {
        var f = o[d];
        if (f === void 0 && !sn(o, d)) return !0;
        var m = s[d],
          v = m && m[te];
        if (v ? v.t !== f : !Sm(m, f)) return !0;
      }
    }
    var x = !!o[te];
    return a.length !== an(o).length + (x ? 0 : 1);
  }
  function n(i) {
    var o = i.k;
    if (o.length !== i.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (s && !s.get) return !0;
    for (var a = 0; a < o.length; a++) if (!o.hasOwnProperty(a)) return !0;
    return !1;
  }
  var l = {};
  mx("ES5", {
    J: function (i, o) {
      var s = Array.isArray(i),
        a = (function (d, f) {
          if (d) {
            for (var m = Array(f.length), v = 0; v < f.length; v++)
              Object.defineProperty(m, "" + v, e(v, !0));
            return m;
          }
          var x = Em(f);
          delete x[te];
          for (var w = an(x), E = 0; E < w.length; E++) {
            var h = w[E];
            x[h] = e(h, d || !!x[h].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), x);
        })(s, i),
        c = {
          i: s ? 5 : 4,
          A: o ? o.A : ya(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: i,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, te, { value: c, writable: !0 }), a;
    },
    S: function (i, o, s) {
      s
        ? cr(o) && o[te].A === i && t(i.p)
        : (i.u &&
            (function a(c) {
              if (c && typeof c == "object") {
                var d = c[te];
                if (d) {
                  var f = d.t,
                    m = d.k,
                    v = d.R,
                    x = d.i;
                  if (x === 4)
                    zr(m, function (g) {
                      g !== te &&
                        (f[g] !== void 0 || sn(f, g)
                          ? v[g] || a(m[g])
                          : ((v[g] = !0), Ht(d)));
                    }),
                      zr(f, function (g) {
                        m[g] !== void 0 || sn(m, g) || ((v[g] = !1), Ht(d));
                      });
                  else if (x === 5) {
                    if ((n(d) && (Ht(d), (v.length = !0)), m.length < f.length))
                      for (var w = m.length; w < f.length; w++) v[w] = !1;
                    else for (var E = f.length; E < m.length; E++) v[E] = !0;
                    for (
                      var h = Math.min(m.length, f.length), p = 0;
                      p < h;
                      p++
                    )
                      m.hasOwnProperty(p) || (v[p] = !0),
                        v[p] === void 0 && a(m[p]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i);
    },
  });
}
var hd,
  ml,
  Ou = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  vx = typeof Map < "u",
  xx = typeof Set < "u",
  gd = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Nm = Ou
    ? Symbol.for("immer-nothing")
    : (((hd = {})["immer-nothing"] = !0), hd),
  yd = Ou ? Symbol.for("immer-draftable") : "__$immer_draftable",
  te = Ou ? Symbol.for("immer-state") : "__$immer_state",
  wx = "" + Object.prototype.constructor,
  an =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Em =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        an(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  wa = {},
  hl = {
    get: function (e, t) {
      if (t === te) return e;
      var r = xr(e);
      if (!sn(r, t))
        return (function (l, i, o) {
          var s,
            a = pd(i, o);
          return a
            ? "value" in a
              ? a.value
              : (s = a.get) === null || s === void 0
              ? void 0
              : s.call(l.k)
            : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !Ft(n)
        ? n
        : n === us(e.t, t)
        ? (cs(e), (e.o[t] = xa(e.A.h, n, e)))
        : n;
    },
    has: function (e, t) {
      return t in xr(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(xr(e));
    },
    set: function (e, t, r) {
      var n = pd(xr(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var l = us(xr(e), t),
          i = l == null ? void 0 : l[te];
        if (i && i.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
        if (Sm(r, l) && (r !== void 0 || sn(e.t, t))) return !0;
        cs(e), Ht(e);
      }
      return (
        (e.o[t] === r && (r !== void 0 || t in e.o)) ||
          (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = r), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        us(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), cs(e), Ht(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = xr(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty: function () {
      mt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      mt(12);
    },
  },
  Fn = {};
zr(hl, function (e, t) {
  Fn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Fn.deleteProperty = function (e, t) {
    return Fn.set.call(this, e, t, void 0);
  }),
  (Fn.set = function (e, t, r) {
    return hl.set.call(this, e[0], t, r, e[0]);
  });
var kx = (function () {
    function e(r) {
      var n = this;
      (this.O = gd),
        (this.D = !0),
        (this.produce = function (l, i, o) {
          if (typeof l == "function" && typeof i != "function") {
            var s = i;
            i = l;
            var a = n;
            return function (w) {
              var E = this;
              w === void 0 && (w = s);
              for (
                var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), g = 1;
                g < h;
                g++
              )
                p[g - 1] = arguments[g];
              return a.produce(w, function (j) {
                var b;
                return (b = i).call.apply(b, [E, j].concat(p));
              });
            };
          }
          var c;
          if (
            (typeof i != "function" && mt(6),
            o !== void 0 && typeof o != "function" && mt(7),
            Ft(l))
          ) {
            var d = dd(n),
              f = xa(n, l, void 0),
              m = !0;
            try {
              (c = i(f)), (m = !1);
            } finally {
              m ? Mi(d) : va(d);
            }
            return typeof Promise < "u" && c instanceof Promise
              ? c.then(
                  function (w) {
                    return ss(d, o), as(w, d);
                  },
                  function (w) {
                    throw (Mi(d), w);
                  }
                )
              : (ss(d, o), as(c, d));
          }
          if (!l || typeof l != "object") {
            if (
              ((c = i(l)) === void 0 && (c = l),
              c === Nm && (c = void 0),
              n.D && Pu(c, !0),
              o)
            ) {
              var v = [],
                x = [];
              bt("Patches").M(l, c, v, x), o(v, x);
            }
            return c;
          }
          mt(21, l);
        }),
        (this.produceWithPatches = function (l, i) {
          if (typeof l == "function")
            return function (c) {
              for (
                var d = arguments.length, f = Array(d > 1 ? d - 1 : 0), m = 1;
                m < d;
                m++
              )
                f[m - 1] = arguments[m];
              return n.produceWithPatches(c, function (v) {
                return l.apply(void 0, [v].concat(f));
              });
            };
          var o,
            s,
            a = n.produce(l, i, function (c, d) {
              (o = c), (s = d);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (c) {
                return [c, o, s];
              })
            : [a, o, s];
        }),
        typeof (r == null ? void 0 : r.useProxies) == "boolean" &&
          this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == "boolean" &&
          this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        Ft(r) || mt(8), cr(r) && (r = gx(r));
        var n = dd(this),
          l = xa(this, r, void 0);
        return (l[te].C = !0), va(n), l;
      }),
      (t.finishDraft = function (r, n) {
        var l = r && r[te],
          i = l.A;
        return ss(i, n), as(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.D = r;
      }),
      (t.setUseProxies = function (r) {
        r && !gd && mt(20), (this.O = r);
      }),
      (t.applyPatches = function (r, n) {
        var l;
        for (l = n.length - 1; l >= 0; l--) {
          var i = n[l];
          if (i.path.length === 0 && i.op === "replace") {
            r = i.value;
            break;
          }
        }
        l > -1 && (n = n.slice(l + 1));
        var o = bt("Patches").$;
        return cr(r)
          ? o(r, n)
          : this.produce(r, function (s) {
              return o(s, n);
            });
      }),
      e
    );
  })(),
  Ge = new kx(),
  jx = Ge.produce;
Ge.produceWithPatches.bind(Ge);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseProxies.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
const bm = jx;
function gl(e) {
  "@babel/helpers - typeof";
  return (
    (gl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gl(e)
  );
}
function Sx(e, t) {
  if (gl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nx(e) {
  var t = Sx(e, "string");
  return gl(t) == "symbol" ? t : t + "";
}
function Ex(e, t, r) {
  return (
    (t = Nx(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vd(Object(r), !0).forEach(function (n) {
          Ex(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vd(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Oe(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var wd = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ds = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Li = {
    INIT: "@@redux/INIT" + ds(),
    REPLACE: "@@redux/REPLACE" + ds(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ds();
    },
  };
function bx(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Cm(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Oe(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(Oe(1));
    return r(Cm)(e, t);
  }
  if (typeof e != "function") throw new Error(Oe(2));
  var l = e,
    i = t,
    o = [],
    s = o,
    a = !1;
  function c() {
    s === o && (s = o.slice());
  }
  function d() {
    if (a) throw new Error(Oe(3));
    return i;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(Oe(4));
    if (a) throw new Error(Oe(5));
    var E = !0;
    return (
      c(),
      s.push(w),
      function () {
        if (E) {
          if (a) throw new Error(Oe(6));
          (E = !1), c();
          var p = s.indexOf(w);
          s.splice(p, 1), (o = null);
        }
      }
    );
  }
  function m(w) {
    if (!bx(w)) throw new Error(Oe(7));
    if (typeof w.type > "u") throw new Error(Oe(8));
    if (a) throw new Error(Oe(9));
    try {
      (a = !0), (i = l(i, w));
    } finally {
      a = !1;
    }
    for (var E = (o = s), h = 0; h < E.length; h++) {
      var p = E[h];
      p();
    }
    return w;
  }
  function v(w) {
    if (typeof w != "function") throw new Error(Oe(10));
    (l = w), m({ type: Li.REPLACE });
  }
  function x() {
    var w,
      E = f;
    return (
      (w = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(Oe(11));
          function g() {
            p.next && p.next(d());
          }
          g();
          var j = E(g);
          return { unsubscribe: j };
        },
      }),
      (w[wd] = function () {
        return this;
      }),
      w
    );
  }
  return (
    m({ type: Li.INIT }),
    (n = { dispatch: m, subscribe: f, getState: d, replaceReducer: v }),
    (n[wd] = x),
    n
  );
}
function Cx(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: Li.INIT });
    if (typeof n > "u") throw new Error(Oe(12));
    if (typeof r(void 0, { type: Li.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Oe(13));
  });
}
function Px(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var l = t[n];
    typeof e[l] == "function" && (r[l] = e[l]);
  }
  var i = Object.keys(r),
    o;
  try {
    Cx(r);
  } catch (s) {
    o = s;
  }
  return function (a, c) {
    if ((a === void 0 && (a = {}), o)) throw o;
    for (var d = !1, f = {}, m = 0; m < i.length; m++) {
      var v = i[m],
        x = r[v],
        w = a[v],
        E = x(w, c);
      if (typeof E > "u") throw (c && c.type, new Error(Oe(14)));
      (f[v] = E), (d = d || E !== w);
    }
    return (d = d || i.length !== Object.keys(a).length), d ? f : a;
  };
}
function Fi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, l) {
        return function () {
          return n(l.apply(void 0, arguments));
        };
      });
}
function _x() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var l = n.apply(void 0, arguments),
        i = function () {
          throw new Error(Oe(15));
        },
        o = {
          getState: l.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (a) {
          return a(o);
        });
      return (
        (i = Fi.apply(void 0, s)(l.dispatch)),
        xd(xd({}, l), {}, { dispatch: i })
      );
    };
  };
}
function Pm(e) {
  var t = function (n) {
    var l = n.dispatch,
      i = n.getState;
    return function (o) {
      return function (s) {
        return typeof s == "function" ? s(l, i, e) : o(s);
      };
    };
  };
  return t;
}
var ka = Pm();
ka.withExtraArgument = Pm;
var _m = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, l) {
              n.__proto__ = l;
            }) ||
          function (n, l) {
            for (var i in l)
              Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null"
        );
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  Ox = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      l,
      i,
      o;
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(c) {
      return function (d) {
        return a([c, d]);
      };
    }
    function a(c) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (
            ((n = 1),
            l &&
              (i =
                c[0] & 2
                  ? l.return
                  : c[0]
                  ? l.throw || ((i = l.return) && i.call(l), 0)
                  : l.next) &&
              !(i = i.call(l, c[1])).done)
          )
            return i;
          switch (((l = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
            case 0:
            case 1:
              i = c;
              break;
            case 4:
              return r.label++, { value: c[1], done: !1 };
            case 5:
              r.label++, (l = c[1]), (c = [0]);
              continue;
            case 7:
              (c = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((i = r.trys),
                !(i = i.length > 0 && i[i.length - 1]) &&
                  (c[0] === 6 || c[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                r.label = c[1];
                break;
              }
              if (c[0] === 6 && r.label < i[1]) {
                (r.label = i[1]), (i = c);
                break;
              }
              if (i && r.label < i[2]) {
                (r.label = i[2]), r.ops.push(c);
                break;
              }
              i[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          c = t.call(e, r);
        } catch (d) {
          (c = [6, d]), (l = 0);
        } finally {
          n = i = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  },
  vn = function (e, t) {
    for (var r = 0, n = t.length, l = e.length; r < n; r++, l++) e[l] = t[r];
    return e;
  },
  Rx = Object.defineProperty,
  zx = Object.defineProperties,
  Tx = Object.getOwnPropertyDescriptors,
  kd = Object.getOwnPropertySymbols,
  Mx = Object.prototype.hasOwnProperty,
  Ix = Object.prototype.propertyIsEnumerable,
  jd = function (e, t, r) {
    return t in e
      ? Rx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  or = function (e, t) {
    for (var r in t || (t = {})) Mx.call(t, r) && jd(e, r, t[r]);
    if (kd)
      for (var n = 0, l = kd(t); n < l.length; n++) {
        var r = l[n];
        Ix.call(t, r) && jd(e, r, t[r]);
      }
    return e;
  },
  fs = function (e, t) {
    return zx(e, Tx(t));
  },
  $x = function (e, t, r) {
    return new Promise(function (n, l) {
      var i = function (a) {
          try {
            s(r.next(a));
          } catch (c) {
            l(c);
          }
        },
        o = function (a) {
          try {
            s(r.throw(a));
          } catch (c) {
            l(c);
          }
        },
        s = function (a) {
          return a.done ? n(a.value) : Promise.resolve(a.value).then(i, o);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  Lx =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Fi
              : Fi.apply(null, arguments);
        };
function Fx(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function sr(e, t) {
  function r() {
    for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error("prepareAction did not return an object");
      return or(
        or({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return "" + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
var Ax = (function (e) {
    _m(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0])
          ? new (t.bind.apply(t, vn([void 0], r[0].concat(this))))()
          : new (t.bind.apply(t, vn([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array),
  Dx = (function (e) {
    _m(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0])
          ? new (t.bind.apply(t, vn([void 0], r[0].concat(this))))()
          : new (t.bind.apply(t, vn([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array);
function ja(e) {
  return Ft(e) ? bm(e, function () {}) : e;
}
function Ux(e) {
  return typeof e == "boolean";
}
function Vx() {
  return function (t) {
    return Bx(t);
  };
}
function Bx(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var n = new Ax();
  return (
    r && (Ux(r) ? n.push(ka) : n.push(ka.withExtraArgument(r.extraArgument))), n
  );
}
var Wx = !0;
function Hx(e) {
  var t = Vx(),
    r = e || {},
    n = r.reducer,
    l = n === void 0 ? void 0 : n,
    i = r.middleware,
    o = i === void 0 ? t() : i,
    s = r.devTools,
    a = s === void 0 ? !0 : s,
    c = r.preloadedState,
    d = c === void 0 ? void 0 : c,
    f = r.enhancers,
    m = f === void 0 ? void 0 : f,
    v;
  if (typeof l == "function") v = l;
  else if (Fx(l)) v = Px(l);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var x = o;
  typeof x == "function" && (x = x(t));
  var w = _x.apply(void 0, x),
    E = Fi;
  a && (E = Lx(or({ trace: !Wx }, typeof a == "object" && a)));
  var h = new Dx(w),
    p = h;
  Array.isArray(m) ? (p = vn([w], m)) : typeof m == "function" && (p = m(h));
  var g = E.apply(void 0, p);
  return Cm(v, d, g);
}
function Om(e) {
  var t = {},
    r = [],
    n,
    l = {
      addCase: function (i, o) {
        var s = typeof i == "string" ? i : i.type;
        if (!s)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type"
          );
        if (s in t)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type"
          );
        return (t[s] = o), l;
      },
      addMatcher: function (i, o) {
        return r.push({ matcher: i, reducer: o }), l;
      },
      addDefaultCase: function (i) {
        return (n = i), l;
      },
    };
  return e(l), [t, r, n];
}
function qx(e) {
  return typeof e == "function";
}
function Xx(e, t, r, n) {
  r === void 0 && (r = []);
  var l = typeof t == "function" ? Om(t) : [t, r, n],
    i = l[0],
    o = l[1],
    s = l[2],
    a;
  if (qx(e))
    a = function () {
      return ja(e());
    };
  else {
    var c = ja(e);
    a = function () {
      return c;
    };
  }
  function d(f, m) {
    f === void 0 && (f = a());
    var v = vn(
      [i[m.type]],
      o
        .filter(function (x) {
          var w = x.matcher;
          return w(m);
        })
        .map(function (x) {
          var w = x.reducer;
          return w;
        })
    );
    return (
      v.filter(function (x) {
        return !!x;
      }).length === 0 && (v = [s]),
      v.reduce(function (x, w) {
        if (w)
          if (cr(x)) {
            var E = x,
              h = w(E, m);
            return h === void 0 ? x : h;
          } else {
            if (Ft(x))
              return bm(x, function (p) {
                return w(p, m);
              });
            var h = w(x, m);
            if (h === void 0) {
              if (x === null) return x;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return h;
          }
        return x;
      }, f)
    );
  }
  return (d.getInitialState = a), d;
}
function Qx(e, t) {
  return e + "/" + t;
}
function Kx(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var r =
      typeof e.initialState == "function" ? e.initialState : ja(e.initialState),
    n = e.reducers || {},
    l = Object.keys(n),
    i = {},
    o = {},
    s = {};
  l.forEach(function (d) {
    var f = n[d],
      m = Qx(t, d),
      v,
      x;
    "reducer" in f ? ((v = f.reducer), (x = f.prepare)) : (v = f),
      (i[d] = v),
      (o[m] = v),
      (s[d] = x ? sr(m, x) : sr(m));
  });
  function a() {
    var d =
        typeof e.extraReducers == "function"
          ? Om(e.extraReducers)
          : [e.extraReducers],
      f = d[0],
      m = f === void 0 ? {} : f,
      v = d[1],
      x = v === void 0 ? [] : v,
      w = d[2],
      E = w === void 0 ? void 0 : w,
      h = or(or({}, m), o);
    return Xx(r, function (p) {
      for (var g in h) p.addCase(g, h[g]);
      for (var j = 0, b = x; j < b.length; j++) {
        var O = b[j];
        p.addMatcher(O.matcher, O.reducer);
      }
      E && p.addDefaultCase(E);
    });
  }
  var c;
  return {
    name: t,
    reducer: function (d, f) {
      return c || (c = a()), c(d, f);
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return c || (c = a()), c.getInitialState();
    },
  };
}
var Yx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Gx = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; ) t += Yx[(Math.random() * 64) | 0];
    return t;
  },
  Zx = ["name", "message", "stack", "code"],
  ps = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  Sd = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  Jx = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, r = 0, n = Zx; r < n.length; r++) {
        var l = n[r];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, r, n) {
    var l = sr(t + "/fulfilled", function (c, d, f, m) {
        return {
          payload: c,
          meta: fs(or({}, m || {}), {
            arg: f,
            requestId: d,
            requestStatus: "fulfilled",
          }),
        };
      }),
      i = sr(t + "/pending", function (c, d, f) {
        return {
          payload: void 0,
          meta: fs(or({}, f || {}), {
            arg: d,
            requestId: c,
            requestStatus: "pending",
          }),
        };
      }),
      o = sr(t + "/rejected", function (c, d, f, m, v) {
        return {
          payload: m,
          error: ((n && n.serializeError) || Jx)(c || "Rejected"),
          meta: fs(or({}, v || {}), {
            arg: f,
            requestId: d,
            rejectedWithValue: !!m,
            requestStatus: "rejected",
            aborted: (c == null ? void 0 : c.name) === "AbortError",
            condition: (c == null ? void 0 : c.name) === "ConditionError",
          }),
        };
      }),
      s =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function c() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (c.prototype.abort = function () {}), c;
            })();
    function a(c) {
      return function (d, f, m) {
        var v = n != null && n.idGenerator ? n.idGenerator(c) : Gx(),
          x = new s(),
          w;
        function E(p) {
          (w = p), x.abort();
        }
        var h = (function () {
          return $x(this, null, function () {
            var p, g, j, b, O, _, z;
            return Ox(this, function (V) {
              switch (V.label) {
                case 0:
                  return (
                    V.trys.push([0, 4, , 5]),
                    (b =
                      (p = n == null ? void 0 : n.condition) == null
                        ? void 0
                        : p.call(n, c, { getState: f, extra: m })),
                    t0(b) ? [4, b] : [3, 2]
                  );
                case 1:
                  (b = V.sent()), (V.label = 2);
                case 2:
                  if (b === !1 || x.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (O = new Promise(function ($, oe) {
                      return x.signal.addEventListener("abort", function () {
                        return oe({
                          name: "AbortError",
                          message: w || "Aborted",
                        });
                      });
                    })),
                    d(
                      i(
                        v,
                        c,
                        (g = n == null ? void 0 : n.getPendingMeta) == null
                          ? void 0
                          : g.call(
                              n,
                              { requestId: v, arg: c },
                              { getState: f, extra: m }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        O,
                        Promise.resolve(
                          r(c, {
                            dispatch: d,
                            getState: f,
                            extra: m,
                            requestId: v,
                            signal: x.signal,
                            abort: E,
                            rejectWithValue: function ($, oe) {
                              return new ps($, oe);
                            },
                            fulfillWithValue: function ($, oe) {
                              return new Sd($, oe);
                            },
                          })
                        ).then(function ($) {
                          if ($ instanceof ps) throw $;
                          return $ instanceof Sd
                            ? l($.payload, v, c, $.meta)
                            : l($, v, c);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (j = V.sent()), [3, 5];
                case 4:
                  return (
                    (_ = V.sent()),
                    (j =
                      _ instanceof ps
                        ? o(null, v, c, _.payload, _.meta)
                        : o(_, v, c)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (z =
                      n &&
                      !n.dispatchConditionRejection &&
                      o.match(j) &&
                      j.meta.condition),
                    z || d(j),
                    [2, j]
                  );
              }
            });
          });
        })();
        return Object.assign(h, {
          abort: E,
          requestId: v,
          arg: c,
          unwrap: function () {
            return h.then(e0);
          },
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: o,
      fulfilled: l,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function e0(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function t0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ru = "listenerMiddleware";
sr(Ru + "/add");
sr(Ru + "/removeAll");
sr(Ru + "/remove");
var Nd;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
yx();
const Rm = Kx({
    name: "cart",
    initialState: { items: [] },
    reducers: {
      addItem: (e, t) => {
        const r = e.items.findIndex((n) => n.id === t.payload.id);
        r >= 0
          ? (e.items[r].quantity += t.payload.quantity)
          : e.items.push(t.payload);
      },
      removeItem: (e, t) => {
        e.items = e.items.filter((r) => r.id !== t.payload);
      },
      updateItemQuantity: (e, t) => {
        const r = e.items.findIndex((n) => n.id === t.payload.id);
        r >= 0 && (e.items[r].quantity = t.payload.quantity);
      },
      removeAllItems: (e) => {
        e.items = [];
      },
    },
  }),
  {
    addItem: r0,
    removeItem: Ed,
    updateItemQuantity: ms,
    removeAllItems: n0,
  } = Rm.actions,
  l0 = Rm.reducer,
  i0 = ({ setCartItemCount: e }) => {
    const [t, r] = N.useState([]),
      n = km();
    N.useEffect(() => {
      const d = JSON.parse(localStorage.getItem("cartItems")) || [];
      d.length > 0 && r(d), e(d.length);
    }, []),
      N.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(t)), e(t.length);
      }, [t]);
    const l = () => {
        n(n0()), r([]);
      },
      i = (d, f) => {
        f === 0
          ? (n(Ed(d)), r(t.filter((m) => m.id !== d)))
          : (n(ms({ id: d, quantity: f })),
            r(t.map((m) => (m.id === d ? { ...m, quantity: f } : m))));
      },
      o = (d) => {
        const f = t.find((m) => m.id === d);
        f &&
          (n(ms({ id: d, quantity: f.quantity + 1 })),
          r(
            t.map((m) => (m.id === d ? { ...m, quantity: m.quantity + 1 } : m))
          ));
      },
      s = (d) => {
        const f = t.find((m) => m.id === d);
        f &&
          f.quantity > 0 &&
          (f.quantity === 1
            ? (n(Ed(d)), r(t.filter((m) => m.id !== d)))
            : (n(ms({ id: d, quantity: f.quantity - 1 })),
              r(
                t.map((m) =>
                  m.id === d ? { ...m, quantity: m.quantity - 1 } : m
                )
              )));
      },
      a = () => {
        props.history.push({ pathname: "/checkout", state: { cartItems: t } });
      },
      c = t.reduce((d, f) => d + f.price * f.quantity, 0);
    return u.jsx("div", {
      className: "relative",
      children: u.jsx("div", {
        className: "cart",
        children: u.jsxs("div", {
          className: "container mx-auto",
          children: [
            u.jsxs("div", {
              className: "cart-header flex justify-between mb-8",
              children: [
                u.jsxs("h2", {
                  className: "cart-title text-h6",
                  children: ["Cart (", t.length, ")"],
                }),
                u.jsx("button", {
                  className: "underline text-body opacity-50",
                  onClick: l,
                  children: "Remove all",
                }),
              ],
            }),
            t.length > 0
              ? u.jsxs("div", {
                  className: "cart-items flex flex-col gap-6",
                  children: [
                    t.map((d) =>
                      u.jsxs(
                        "div",
                        {
                          className:
                            "cart-item flex justify-between gap-4 items-center",
                          children: [
                            u.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                u.jsx("div", {
                                  className: "cart-item-image",
                                  children: u.jsx("img", {
                                    className: "rounded-lg max-w-[64px]",
                                    src: d.image.cart,
                                    alt: d.name,
                                  }),
                                }),
                                u.jsxs("div", {
                                  className: "cart-item-details",
                                  children: [
                                    u.jsx("h3", {
                                      className:
                                        "cart-item-title text-mobileMenu mb-1",
                                      children: d.name
                                        .replace(
                                          /(headphones|speaker|earphones)/i,
                                          ""
                                        )
                                        .replace(/(mark)/i, "MK")
                                        .replace(/(wireless)/i, "")
                                        .trim(),
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "cart-item-price text-mobileMenu opacity-50",
                                      children: ["$", d.price],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsx("div", {
                              className:
                                "flex justify-between gap-4 max-w-[96px]",
                              children: u.jsxs("div", {
                                className:
                                  "flex gap-[20px] place-items-center bg-paleSilver mx-auto px-2",
                                children: [
                                  u.jsx("button", {
                                    type: "button",
                                    className:
                                      "opacity-25 py-2 focus:outline-none",
                                    onClick: () => s(d.id),
                                    children: "-",
                                  }),
                                  u.jsx("input", {
                                    className:
                                      "bg-paleSilver py-2 w-4 text-center focus:outline-none text-subtitle",
                                    type: "number",
                                    min: "1",
                                    value: d.quantity,
                                    onChange: (f) =>
                                      i(d.id, parseInt(f.target.value)),
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    className:
                                      "opacity-25 py-2 focus:outline-none",
                                    onClick: () => o(d.id),
                                    children: "+",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        d.id
                      )
                    ),
                    u.jsxs("div", {
                      className: "cart-total flex justify-between",
                      children: [
                        u.jsx("span", {
                          className: "uppercase opacity-50 text-body",
                          children: "Total",
                        }),
                        u.jsxs("span", {
                          className: "text-h6",
                          children: ["$", c.toFixed(2)],
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "mb-8",
                      children: u.jsx(Nv, { onClick: a }),
                    }),
                  ],
                })
              : u.jsx("div", {
                  className: "cart-empty text-center text-h6 mb-8",
                  children: "Your cart is empty",
                }),
          ],
        }),
      }),
    });
  },
  Wl = "hover:text-brightOrange transition-colors duration-300 uppercase",
  bd = ({ onClick: e }) =>
    u.jsx("div", {
      className: "fixed inset-0 bg-black opacity-40 z-40",
      onClick: e,
      initial: { opacity: 0 },
      animate: { opacity: 0.4 },
      exit: { opacity: 0 },
    }),
  o0 = ({ onClick: e }) =>
    u.jsx("button", {
      className: "lg:hidden",
      onClick: e,
      children: u.jsx("img", {
        src: "/assets/shared/mobile/hamburger.svg",
        alt: "menu",
      }),
    }),
  s0 = () =>
    u.jsxs("ul", {
      className: "hidden lg:flex gap-[34px]",
      children: [
        u.jsx("li", {
          children: u.jsx(ze, { to: "/", className: Wl, children: "Home" }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            to: "/headphones",
            className: Wl,
            children: "Headphones",
          }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            to: "/speakers",
            className: Wl,
            children: "Speakers",
          }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            to: "/earphones",
            className: Wl,
            children: "Earphones",
          }),
        }),
      ],
    }),
  a0 = ({ cartItemCount: e, setCartItemCount: t }) => {
    const [r, n] = N.useState(!1),
      [l, i] = N.useState(!1),
      [o, s] = N.useState(!1);
    function a() {
      n(!r), i(!1);
    }
    function c() {
      s(!o);
    }
    return u.jsxs("div", {
      children: [
        u.jsxs("header", {
          className: "bg-pureBlack sticky top-0 z-50 md:px-4",
          children: [
            u.jsxs("nav", {
              className:
                "mx-auto text-pureWhite text-subtitle flex justify-between py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px] border-b border-b-white border-opacity-20",
              children: [
                u.jsx(o0, { onClick: a }),
                u.jsx(ze, {
                  to: "/",
                  children: u.jsx("img", {
                    src: "/assets/shared/desktop/logo.svg",
                    alt: "audiophile-logo",
                  }),
                }),
                u.jsx(s0, {}),
                u.jsxs("div", {
                  className: "relative",
                  children: [
                    u.jsx("button", {
                      id: "shopping-cart",
                      onClick: c,
                      children: u.jsx("img", {
                        src: "/assets/shared/desktop/icon-cart.svg",
                        alt: "View shopping cart",
                      }),
                    }),
                    e > 0 &&
                      u.jsx("div", {
                        className:
                          "items-cart absolute bg-red-600 top-0 right-0 translate-y-1/2 translate-x-1/2 rounded-full py-0 px-1",
                        children: e,
                      }),
                  ],
                }),
              ],
            }),
            r &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsx(bd, { onClick: a }),
                  u.jsx("div", {
                    className:
                      "fixed top-0 left-0 h-full opacity-100 w-full p-6 z-50",
                    initial: { x: "-100vw" },
                    animate: { x: 0 },
                    exit: { x: "-100vw" },
                    onClick: a,
                    children: u.jsx(Sv, {}),
                  }),
                ],
              }),
          ],
        }),
        o &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(bd, { onClick: c }),
              u.jsx(i0, { cartItemCount: e, setCartItemCount: t }),
            ],
          }),
      ],
    });
  },
  zu = ({ to: e, children: t }) =>
    u.jsx(ze, {
      to: e,
      children: u.jsx("button", {
        className:
          "bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]",
        whilehover: { scale: 1 },
        whiletap: { scale: 0.9 },
        transition: { duration: 0.3 },
        onClick: zt,
        children: t,
      }),
    }),
  u0 = () =>
    u.jsx("div", {
      className:
        "hero bg-heroMobile bg-cover bg-bottom bg-no-repeat md:bg-heroTablet xl:bg-heroDesktop xl:bg-bottom-center pb-[110px] md:pb-[167px] lg:pt-[60px]",
      children: u.jsx("div", {
        className: "container mx-auto max-w-[1110px]",
        children: u.jsxs("div", {
          className:
            "flex flex-col items-center text-center lg:text-left lg:items-start mx-auto max-w-[328px] md:max-w-[379px] lg:max-w-[398px] lg:mx-0",
          children: [
            u.jsx("p", {
              className:
                "text-gray tracking-[10px] uppercase mt-[108px] md:mt-[126px] mb-4",
              children: "New Product",
            }),
            u.jsx("h1", {
              className:
                "text-h1-mobile md:text-h1 uppercase text-pureWhite mb-6 md:mb-10",
              children: "XX99 MARK II Headphones",
            }),
            u.jsx("p", {
              className: "text-body text-lightGray mb-7",
              children:
                "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
            }),
            u.jsx(zu, {
              to: "/products/xx99-mark-two-headphones",
              children: "See Product",
            }),
          ],
        }),
      }),
    }),
  Tr = [
    {
      id: 1,
      slug: "yx1-earphones",
      name: "YX1 Wireless Earphones",
      image: {
        mobile: "./assets/product-yx1-earphones/mobile/image-product.jpg",
        tablet: "./assets/product-yx1-earphones/tablet/image-product.jpg",
        desktop: "./assets/product-yx1-earphones/desktop/image-product.jpg",
        cart: "/assets/cart/image-yx1-earphones.jpg",
      },
      category: "earphones",
      categoryImage: {
        mobile:
          "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
        categoryPreview:
          "./assets/shared/desktop/image-category-thumbnail-earphones.png",
      },
      new: !0,
      price: 599,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
      includes: [
        { quantity: 2, item: "Earphone unit" },
        { quantity: 6, item: "Multi-size earplugs" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "USB-C charging cable" },
        { quantity: 1, item: "Travel pouch" },
      ],
      gallery: {
        first: {
          mobile: "./assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
          tablet: "./assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
          desktop: "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile: "./assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
          tablet: "./assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
          desktop: "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile: "./assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
          tablet: "./assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
          desktop: "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "xx99-mark-one-headphones",
          name: "XX99 Mark I",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          },
        },
        {
          slug: "xx59-headphones",
          name: "XX59",
          image: {
            mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
            desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
          },
        },
        {
          slug: "zx9-speaker",
          name: "ZX9 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
          },
        },
      ],
    },
    {
      id: 2,
      slug: "xx59-headphones",
      name: "XX59 Headphones",
      image: {
        mobile: "./assets/product-xx59-headphones/mobile/image-product.jpg",
        tablet: "./assets/product-xx59-headphones/tablet/image-product.jpg",
        desktop: "./assets/product-xx59-headphones/desktop/image-product.jpg",
        cart: "/assets/cart/image-xx59-headphones.jpg",
      },
      category: "headphones",
      categoryImage: {
        mobile:
          "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      },
      new: !1,
      price: 899,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
      includes: [
        { quantity: 1, item: "Headphone unit" },
        { quantity: 2, item: "Replacement earcups" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "3.5mm 5m audio cable" },
      ],
      gallery: {
        first: {
          mobile: "./assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
          tablet: "./assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
          desktop:
            "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile: "./assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
          tablet: "./assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
          desktop:
            "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile: "./assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
          tablet: "./assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
          desktop:
            "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "xx99-mark-two-headphones",
          name: "XX99 Mark II",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
          },
        },
        {
          slug: "xx99-mark-one-headphones",
          name: "XX99 Mark I",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          },
        },
        {
          slug: "zx9-speaker",
          name: "ZX9 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
          },
        },
      ],
    },
    {
      id: 3,
      slug: "xx99-mark-one-headphones",
      name: "XX99 Mark I Headphones",
      image: {
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
        desktop:
          "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        cart: "/assets/cart/image-xx99-mark-one-headphones.jpg",
      },
      category: "headphones",
      categoryImage: {
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
        categoryPreview:
          "./assets/shared/desktop/image-category-thumbnail-headphones.png",
      },
      new: !1,
      price: 1750,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      features: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.`,
      includes: [
        { quantity: 1, item: "Headphone unit" },
        { quantity: 2, item: "Replacement earcups" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "3.5mm 5m audio cable" },
      ],
      gallery: {
        first: {
          mobile:
            "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
          tablet:
            "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
          desktop:
            "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile:
            "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
          tablet:
            "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
          desktop:
            "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile:
            "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
          tablet:
            "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
          desktop:
            "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "xx99-mark-two-headphones",
          name: "XX99 Mark II",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
          },
        },
        {
          slug: "xx59-headphones",
          name: "XX59",
          image: {
            mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
            desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
          },
        },
        {
          slug: "zx9-speaker",
          name: "ZX9 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
          },
        },
      ],
    },
    {
      id: 4,
      slug: "xx99-mark-two-headphones",
      name: "XX99 Mark II Headphones",
      image: {
        mobile:
          "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
        tablet:
          "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
        desktop:
          "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
        cart: "/assets/cart/image-xx99-mark-two-headphones.jpg",
      },
      category: "headphones",
      categoryImage: {
        mobile:
          "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
      },
      new: !0,
      price: 2999,
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
      includes: [
        { quantity: 1, item: "Headphone unit" },
        { quantity: 2, item: "Replacement earcups" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "3.5mm 5m audio cable" },
        { quantity: 1, item: "Travel bag" },
      ],
      gallery: {
        first: {
          mobile:
            "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
          tablet:
            "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
          desktop:
            "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile:
            "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
          tablet:
            "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
          desktop:
            "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile:
            "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
          tablet:
            "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
          desktop:
            "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "xx99-mark-one-headphones",
          name: "XX99 Mark I",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          },
        },
        {
          slug: "xx59-headphones",
          name: "XX59",
          image: {
            mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
            desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
          },
        },
        {
          slug: "zx9-speaker",
          name: "ZX9 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
          },
        },
      ],
    },
    {
      id: 5,
      slug: "zx7-speaker",
      name: "ZX7 Speaker",
      image: {
        mobile: "./assets/product-zx7-speaker/mobile/image-product.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-product.jpg",
        desktop: "./assets/product-zx7-speaker/desktop/image-product.jpg",
        cart: "/assets/cart/image-zx7-speaker.jpg",
      },
      category: "speakers",
      categoryImage: {
        mobile:
          "./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
      },
      new: !1,
      price: 3500,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
      includes: [
        { quantity: 2, item: "Speaker unit" },
        { quantity: 2, item: "Speaker cloth panel" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "3.5mm 7.5m audio cable" },
        { quantity: 1, item: "7.5m optical cable" },
      ],
      gallery: {
        first: {
          mobile: "./assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
          tablet: "./assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
          desktop: "./assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile: "./assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
          tablet: "./assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
          desktop: "./assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile: "./assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
          tablet: "./assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
          desktop: "./assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "zx9-speaker",
          name: "ZX9 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
          },
        },
        {
          slug: "xx99-mark-one-headphones",
          name: "XX99 Mark I",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          },
        },
        {
          slug: "xx59-headphones",
          name: "XX59",
          image: {
            mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
            desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
          },
        },
      ],
    },
    {
      id: 6,
      slug: "zx9-speaker",
      name: "ZX9 Speaker",
      image: {
        mobile: "./assets/product-zx9-speaker/mobile/image-product.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-product.jpg",
        desktop: "./assets/product-zx9-speaker/desktop/image-product.jpg",
        cart: "/assets/cart/image-zx9-speaker.jpg",
      },
      category: "speakers",
      categoryImage: {
        mobile:
          "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        tablet:
          "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
        desktop:
          "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
        categoryPreview:
          "./assets/shared/desktop/image-category-thumbnail-speakers.png",
      },
      new: !0,
      price: 4500,
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
      includes: [
        { quantity: 2, item: "Speaker unit" },
        { quantity: 2, item: "Speaker cloth panel" },
        { quantity: 1, item: "User manual" },
        { quantity: 1, item: "3.5mm 10m audio cable" },
        { quantity: 1, item: "10m optical cable" },
      ],
      gallery: {
        first: {
          mobile: "./assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
          tablet: "./assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
          desktop: "./assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
        },
        second: {
          mobile: "./assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
          tablet: "./assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
          desktop: "./assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
        },
        third: {
          mobile: "./assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
          tablet: "./assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
          desktop: "./assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
        },
      },
      others: [
        {
          slug: "zx7-speaker",
          name: "ZX7 Speaker",
          image: {
            mobile: "./assets/shared/mobile/image-zx7-speaker.jpg",
            tablet: "./assets/shared/tablet/image-zx7-speaker.jpg",
            desktop: "./assets/shared/desktop/image-zx7-speaker.jpg",
          },
        },
        {
          slug: "xx99-mark-one-headphones",
          name: "XX99 Mark I",
          image: {
            mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            desktop:
              "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
          },
        },
        {
          slug: "xx59-headphones",
          name: "XX59",
          image: {
            mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
            tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
            desktop: "./assets/shared/desktop/image-xx59-headphones.jpg",
          },
        },
      ],
    },
  ],
  c0 = ({ imgUrl: e, alt: t, category: r }) =>
    u.jsx("li", {
      children: u.jsxs("div", {
        className:
          "relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto",
        children: [
          u.jsx("img", {
            className:
              "w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            src: e,
            alt: t,
          }),
          u.jsx("h6", { className: "text-mobileMenu lg:text-h6", children: r }),
          u.jsx(oi, { to: `/${r.toLowerCase()}` }),
        ],
      }),
    }),
  Nl = () => {
    const e = Tr.filter(
      (t) =>
        t.slug === "xx99-mark-one-headphones" ||
        t.slug === "zx9-speaker" ||
        t.slug === "yx1-earphones"
    ).sort((t, r) => {
      const n = { headphones: 0, speakers: 1, earphones: 2 };
      return n[t.category] - n[r.category];
    });
    return u.jsx("div", {
      className: "bg-pureWhite mb-[120px] md:px-4",
      children: u.jsx("ul", {
        className:
          "pt-[92px] md:pt-[110px] flex flex-col md:grid md:grid-cols-3 gap-[68px] md:gap-[10px] lg:gap-[30px] md:max-w-[689px] lg:max-w-[1110px] mx-auto items-center",
        children: e.map((t) =>
          u.jsx(
            c0,
            {
              imgUrl: `/${t.categoryImage.categoryPreview}`,
              alt: t.name,
              category: t.category.toUpperCase(),
            },
            t.id
          )
        ),
      }),
    });
  },
  d0 = N.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  f0 = N.createContext(null),
  p0 = typeof document < "u",
  zm = p0 ? N.useLayoutEffect : N.useEffect;
class Cd {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function m0(e) {
  let t = new Cd(),
    r = new Cd(),
    n = 0,
    l = !1,
    i = !1;
  const o = new WeakSet(),
    s = {
      schedule: (a, c = !1, d = !1) => {
        const f = d && l,
          m = f ? t : r;
        return c && o.add(a), m.add(a) && f && l && (n = t.order.length), a;
      },
      cancel: (a) => {
        r.remove(a), o.delete(a);
      },
      process: (a) => {
        if (l) {
          i = !0;
          return;
        }
        if (((l = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let c = 0; c < n; c++) {
            const d = t.order[c];
            o.has(d) && (s.schedule(d), e()), d(a);
          }
        (l = !1), i && ((i = !1), s.process(a));
      },
    };
  return s;
}
const Hl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  h0 = 40;
function g0(e, t) {
  let r = !1,
    n = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Hl.reduce((f, m) => ((f[m] = m0(() => (r = !0))), f), {}),
    o = (f) => {
      i[f].process(l);
    },
    s = () => {
      const f = performance.now();
      (r = !1),
        (l.delta = n ? 1e3 / 60 : Math.max(Math.min(f - l.timestamp, h0), 1)),
        (l.timestamp = f),
        (l.isProcessing = !0),
        Hl.forEach(o),
        (l.isProcessing = !1),
        r && t && ((n = !1), e(s));
    },
    a = () => {
      (r = !0), (n = !0), l.isProcessing || e(s);
    };
  return {
    schedule: Hl.reduce((f, m) => {
      const v = i[m];
      return (f[m] = (x, w = !1, E = !1) => (r || a(), v.schedule(x, w, E))), f;
    }, {}),
    cancel: (f) => Hl.forEach((m) => i[m].cancel(f)),
    state: l,
    steps: i,
  };
}
const y0 = N.createContext({});
function v0(e) {
  const t = N.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const x0 = (e) => e,
  {
    schedule: w0,
    cancel: P1,
    state: _1,
    steps: O1,
  } = g0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : x0, !0);
function Tm() {
  const e = N.useRef(!1);
  return (
    zm(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function k0() {
  const e = Tm(),
    [t, r] = N.useState(0),
    n = N.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [N.useCallback(() => w0.postRender(n), [n]), t];
}
class j0 extends N.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function S0({ children: e, isPresent: t }) {
  const r = N.useId(),
    n = N.useRef(null),
    l = N.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = N.useContext(d0);
  return (
    N.useInsertionEffect(() => {
      const { width: o, height: s, top: a, left: c } = l.current;
      if (t || !n.current || !o || !s) return;
      n.current.dataset.motionPopId = r;
      const d = document.createElement("style");
      return (
        i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    u.jsx(j0, {
      isPresent: t,
      childRef: n,
      sizeRef: l,
      children: N.cloneElement(e, { ref: n }),
    })
  );
}
const hs = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: l,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const s = v0(N0),
    a = N.useId(),
    c = N.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: r,
        custom: l,
        onExitComplete: (d) => {
          s.set(d, !0);
          for (const f of s.values()) if (!f) return;
          n && n();
        },
        register: (d) => (s.set(d, !1), () => s.delete(d)),
      }),
      i ? [Math.random()] : [r]
    );
  return (
    N.useMemo(() => {
      s.forEach((d, f) => s.set(f, !1));
    }, [r]),
    N.useEffect(() => {
      !r && !s.size && n && n();
    }, [r]),
    o === "popLayout" && (e = u.jsx(S0, { isPresent: r, children: e })),
    u.jsx(f0.Provider, { value: c, children: e })
  );
};
function N0() {
  return new Map();
}
function E0(e) {
  return N.useEffect(() => () => e(), []);
}
const wr = (e) => e.key || "";
function b0(e, t) {
  e.forEach((r) => {
    const n = wr(r);
    t.set(n, r);
  });
}
function C0(e) {
  const t = [];
  return (
    N.Children.forEach(e, (r) => {
      N.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const gs = ({
    children: e,
    custom: t,
    initial: r = !0,
    onExitComplete: n,
    exitBeforeEnter: l,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
  }) => {
    const s = N.useContext(y0).forceRender || k0()[0],
      a = Tm(),
      c = C0(e);
    let d = c;
    const f = N.useRef(new Map()).current,
      m = N.useRef(d),
      v = N.useRef(new Map()).current,
      x = N.useRef(!0);
    if (
      (zm(() => {
        (x.current = !1), b0(c, v), (m.current = d);
      }),
      E0(() => {
        (x.current = !0), v.clear(), f.clear();
      }),
      x.current)
    )
      return u.jsx(u.Fragment, {
        children: d.map((p) =>
          u.jsx(
            hs,
            {
              isPresent: !0,
              initial: r ? void 0 : !1,
              presenceAffectsLayout: i,
              mode: o,
              children: p,
            },
            wr(p)
          )
        ),
      });
    d = [...d];
    const w = m.current.map(wr),
      E = c.map(wr),
      h = w.length;
    for (let p = 0; p < h; p++) {
      const g = w[p];
      E.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
    }
    return (
      o === "wait" && f.size && (d = []),
      f.forEach((p, g) => {
        if (E.indexOf(g) !== -1) return;
        const j = v.get(g);
        if (!j) return;
        const b = w.indexOf(g);
        let O = p;
        if (!O) {
          const _ = () => {
            f.delete(g);
            const z = Array.from(v.keys()).filter((V) => !E.includes(V));
            if (
              (z.forEach((V) => v.delete(V)),
              (m.current = c.filter((V) => {
                const $ = wr(V);
                return $ === g || z.includes($);
              })),
              !f.size)
            ) {
              if (a.current === !1) return;
              s(), n && n();
            }
          };
          (O = u.jsx(
            hs,
            {
              isPresent: !1,
              onExitComplete: _,
              custom: t,
              presenceAffectsLayout: i,
              mode: o,
              children: j,
            },
            wr(j)
          )),
            f.set(g, O);
        }
        d.splice(b, 0, O);
      }),
      (d = d.map((p) => {
        const g = p.key;
        return f.has(g)
          ? p
          : u.jsx(
              hs,
              { isPresent: !0, presenceAffectsLayout: i, mode: o, children: p },
              wr(p)
            );
      })),
      u.jsx(u.Fragment, {
        children: f.size ? d : d.map((p) => N.cloneElement(p)),
      })
    );
  },
  P0 = ({ to: e, children: t }) =>
    u.jsx(ze, {
      to: e,
      children: u.jsx("button", {
        whilehover: { scale: 1.05 },
        whiletap: { scale: 0.9 },
        duration: { duration: 0.3 },
        onClick: zt,
        className:
          "bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-[#4C4C4C] transition-colors duration-300",
        children: t,
      }),
    }),
  Mm = ({ to: e, children: t }) =>
    u.jsx(ze, {
      to: e,
      children: u.jsx("button", {
        whilehover: { scale: 1.05 },
        whiletap: { scale: 0.9 },
        duration: { duration: 0.3 },
        onClick: zt,
        className:
          "bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300",
        children: t,
      }),
    }),
  _0 = () => {
    const e = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    };
    return u.jsxs("div", {
      className:
        "bg-brightOrange bg-patternCircles bg-cover md:bg-auto bg-[center_bottom_10rem] md:bg-[center_bottom] lg:bg-auto lg:bg-[left_-14rem_top_-4rem] bg-no-repeat flex flex-col items-center rounded-lg text-center pb-[55px] md:pb-[64px] lg:grid lg:grid-cols-2 lg:text-left lg:pb-[124px] lg:pt-[133px] lg:gap-[138px] overflow-hidden",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        u.jsxs("div", {
          className: "relative z-0",
          children: [
            u.jsx("img", {
              className: "w-1/2 mt-[55px] mb-8 mx-auto md:hidden",
              src: "/assets/home/mobile/image-speaker-zx9.png",
              alt: "zx-9 speaker",
            }),
            u.jsx("img", {
              className:
                "w-1/3 mt-[55px] mb-8 mx-auto hidden md:block lg:hidden",
              src: "/assets/home/tablet/image-speaker-zx9.png",
              alt: "zx-9 speaker",
            }),
            u.jsx("img", {
              className:
                "absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-9/12 -mb-[280px] hidden lg:block",
              src: "/assets/home/desktop/image-speaker-zx9.png",
              alt: "zx-9 speaker",
            }),
          ],
        }),
        u.jsxs("div", {
          variants: e,
          className: "mt-8 md:mt-0",
          children: [
            u.jsxs("h3", {
              className: "text-h3 md:text-h1 text-pureWhite uppercase mb-6",
              children: ["ZX9", u.jsx("br", {}), " Speaker"],
            }),
            u.jsx("p", {
              className:
                "text-body text-pureWhite opacity-75 mb-6 max-w-[349px]",
              children:
                "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
            }),
            u.jsx(P0, { to: "/products/zx9-speaker", children: "See product" }),
          ],
        }),
      ],
    });
  },
  O0 = () => {
    const e = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    };
    return u.jsx("div", {
      className:
        "bg-zx7-mobile bg-cover bg-no-repeat md:bg-zx7-tablet lg:bg-zx7-desktop rounded-lg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: u.jsxs("div", {
        className: "ml-6 lg:ml-[96px] py-[101px]",
        children: [
          u.jsx("h4", {
            variants: e,
            className: "text-h4 text-pureBlack uppercase mb-6",
            children: "ZX7 Speaker",
          }),
          u.jsx("div", {
            variants: e,
            children: u.jsx(Mm, {
              to: "/products/zx7-speaker",
              children: "See Product",
            }),
          }),
        ],
      }),
    });
  },
  R0 = () => {
    const e = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    };
    return u.jsxs("div", {
      className:
        "flex flex-col md:grid md:grid-cols-2 md:grid-auto-rows gap-[11px]",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        u.jsxs("div", {
          variants: e,
          className: "rounded-lg overflow-hidden mb-6 h-full",
          children: [
            u.jsx("img", {
              className: "md:hidden",
              src: "/assets/home/mobile/image-earphones-yx1.jpg",
              alt: "yx1 earphones",
            }),
            u.jsx("img", {
              className: "hidden md:block lg:hidden h-full w-full object-fit",
              src: "/assets/home/tablet/image-earphones-yx1.jpg",
              alt: "yx1 earphones",
            }),
            u.jsx("img", {
              className: "hidden lg:block h-full w-full object-fit",
              src: "/assets/home/desktop/image-earphones-yx1.jpg",
              alt: "yx1 earphones",
            }),
          ],
        }),
        u.jsx("div", {
          variants: e,
          className: "bg-paleSilver py-[41px] md:py-[101px] rounded-lg",
          children: u.jsxs("div", {
            className: "ml-6 lg:ml-[96px]",
            children: [
              u.jsx("h4", {
                className: "text-h4 mb-6",
                children: "YX1 Earphones",
              }),
              u.jsx(Mm, {
                to: "/products/yx1-earphones",
                children: "See Product",
              }),
            ],
          }),
        }),
      ],
    });
  },
  z0 = () =>
    u.jsxs("section", {
      className:
        "container mx-auto flex flex-col gap-6 mb-[120px] max-w-[328px] md:max-w-[689px] lg:max-w-[1110px] ",
      children: [
        u.jsx(gs, {
          children: u.jsx(
            "div",
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: u.jsx(_0, {}),
            },
            "product-main"
          ),
        }),
        u.jsx(gs, {
          children: u.jsx(
            "div",
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: u.jsx(O0, {}),
            },
            "product-secondary"
          ),
        }),
        u.jsx(gs, {
          children: u.jsx(
            "div",
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: u.jsx(R0, {}),
            },
            "product-additional"
          ),
        }),
      ],
    }),
  T0 = () =>
    u.jsxs("div", { children: [u.jsx(u0, {}), u.jsx(Nl, {}), u.jsx(z0, {})] }),
  M0 = () =>
    u.jsxs("section", {
      className:
        "container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] mb-[120px] flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-[125px]",
      children: [
        u.jsxs("div", {
          className:
            "text-center lg:text-left max-w-[573px] mx-auto lg:place-self-center",
          children: [
            u.jsxs("h2", {
              className: "uppercase text-h4 mb-8 md:text-h2",
              children: [
                "Bringing you the ",
                u.jsx("span", {
                  className: "text-brightOrange",
                  children: "best",
                }),
                " audio gear",
              ],
            }),
            u.jsx("p", {
              className: "text-body opacity-50",
              children:
                "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mx-auto",
          children: [
            u.jsx("img", {
              className: "rounded-lg md:hidden",
              src: "/assets/shared/mobile/image-best-gear.jpg",
              alt: "man wearing headphones listening to music",
            }),
            u.jsx("img", {
              className: "hidden md:block lg:hidden rounded-lg",
              src: "/assets/shared/tablet/image-best-gear.jpg",
              alt: "man wearing headphones listening to music",
            }),
            u.jsx("img", {
              className: "hidden lg:block rounded-lg",
              src: "/assets/shared/desktop/image-best-gear.jpg",
              alt: "man wearing headphones listening to music",
            }),
          ],
        }),
      ],
    });
var Im = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Pd = ce.createContext && ce.createContext(Im),
  I0 = ["attr", "size", "title"];
function $0(e, t) {
  if (e == null) return {};
  var r = L0(e, t),
    n,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (n = i[l]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function L0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ai() {
  return (
    (Ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ai.apply(this, arguments)
  );
}
function _d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _d(Object(r), !0).forEach(function (n) {
          F0(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _d(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function F0(e, t, r) {
  return (
    (t = A0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function A0(e) {
  var t = D0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $m(e) {
  return (
    e &&
    e.map((t, r) =>
      ce.createElement(t.tag, Di({ key: r }, t.attr), $m(t.child))
    )
  );
}
function Tu(e) {
  return (t) =>
    ce.createElement(U0, Ai({ attr: Di({}, e.attr) }, t), $m(e.child));
}
function U0(e) {
  var t = (r) => {
    var { attr: n, size: l, title: i } = e,
      o = $0(e, I0),
      s = l || r.size || "1em",
      a;
    return (
      r.className && (a = r.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      ce.createElement(
        "svg",
        Ai(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          o,
          {
            className: a,
            style: Di(Di({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ce.createElement("title", null, i),
        e.children
      )
    );
  };
  return Pd !== void 0
    ? ce.createElement(Pd.Consumer, null, (r) => t(r))
    : t(Im);
}
function V0(e) {
  return Tu({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function B0(e) {
  return Tu({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function W0(e) {
  return Tu({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
const ql = "hover:text-brightOrange transition-colors duration-300 uppercase",
  H0 = new Date().getFullYear(),
  q0 = () =>
    u.jsxs("ul", {
      className: "flex flex-col gap-4 md:flex-row",
      children: [
        u.jsx("li", {
          children: u.jsx(ze, {
            className: ql,
            to: "/",
            onClick: zt,
            children: "Home",
          }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            className: ql,
            to: "/headphones",
            onClick: zt,
            children: "Headphones",
          }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            className: ql,
            to: "/speakers",
            onClick: zt,
            children: "Speakers",
          }),
        }),
        u.jsx("li", {
          children: u.jsx(ze, {
            className: ql,
            to: "/earphones",
            onClick: zt,
            children: "Earphones",
          }),
        }),
      ],
    }),
  X0 = () =>
    u.jsx("header", {
      className: "bg-pureBlack",
      children: u.jsxs("nav", {
        className:
          "mx-auto text-pureWhite text-subtitle flex flex-col lg:flex-row justify-between items-center md:items-start gap-12 text-center py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px]",
        children: [
          u.jsx(ze, {
            className: "mx-auto md:mx-0",
            onClick: zt,
            to: "/",
            children: u.jsx("img", {
              src: "/assets/shared/desktop/logo.svg",
              alt: "audiophile-logo",
            }),
          }),
          u.jsx(q0, {}),
        ],
      }),
    }),
  Q0 = () =>
    u.jsx("footer", {
      className: "bg-pureBlack md:px-4",
      children: u.jsxs("div", {
        className: "mx-auto md:max-w-[689px] lg:max-w-[1109px] relative",
        children: [
          u.jsx("hr", {
            className:
              "absolute w-[101px] h-[4px] bg-brightOrange left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none",
          }),
          u.jsx(X0, {}),
          u.jsxs("div", {
            className: "flex flex-col gap-12",
            children: [
              u.jsx("p", {
                className:
                  "text-pureWhite opacity-50 text-center max-w-[327px] mx-auto md:mx-0 md:text-left lg:max-w-[540px]",
                children:
                  "Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col-reverse md:flex-row-reverse md:justify-between gap-12 pb-12",
                children: [
                  u.jsxs("ul", {
                    className:
                      "social-links flex justify-center gap-4 items-center",
                    children: [
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "",
                          "aria-label": "Facebook",
                          children: u.jsx(V0, {
                            className:
                              "text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600",
                            size: 24,
                          }),
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "",
                          "aria-label": "Twitter",
                          children: u.jsx(W0, {
                            className:
                              "text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600",
                            size: 24,
                          }),
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "",
                          "aria-label": "Instagram",
                          children: u.jsx(B0, {
                            className:
                              "text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600",
                            size: 24,
                          }),
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("p", {
                    className: "text-pureWhite opacity-50 text-center",
                    children: ["Copyright @", H0, ". All Rights Reserved"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Mu = ({ title: e }) =>
    u.jsx("div", {
      className: "bg-pureBlack mb-16 lg:mb-40",
      children: u.jsx("h1", {
        className:
          "text-pureWhite uppercase text-center py-8 md:py-24 text-h4 md:text-h2",
        children: e,
      }),
    }),
  Iu = ({
    slug: e,
    image: t,
    name: r,
    description: n,
    newProduct: l,
    isReversed: i,
  }) => {
    const o = r.replace(/(earphones|speaker|headphones)/gi, ""),
      s = r.split(" ").pop();
    return u.jsxs("div", {
      className: `container mx-auto flex flex-col gap-8 md:max-w-[689px] lg:flex-row lg:max-w-[1110px] lg:gap-32 lg:items-center ${
        i ? "lg:flex-row-reverse" : ""
      }`,
      children: [
        u.jsxs("div", {
          className: "lg:max-w-[540px]",
          children: [
            u.jsx("img", {
              className: "mx-auto rounded-lg md:hidden",
              src: t.mobile,
              alt: r,
            }),
            u.jsx("img", {
              className: "mx-auto rounded-lg hidden md:block lg:hidden",
              src: t.tablet,
              alt: r,
            }),
            u.jsx("img", {
              className: "mx-auto rounded-lg hidden lg:block",
              src: t.desktop,
              alt: r,
            }),
          ],
        }),
        u.jsxs("div", {
          className:
            "mx-auto text-center lg:text-left flex flex-col gap-6 lg:max-w-[454px]",
          children: [
            l &&
              u.jsx("h6", {
                className: "text-newProduct uppercase text-brightOrange",
                children: "New Product",
              }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className:
                    "text-h4 md:text-h2 uppercase md:mx-auto lg:mx-0 lg:w-full",
                  children: o,
                }),
                u.jsx("h3", {
                  className:
                    "text-h4 md:text-h2 uppercase md:mx-auto lg:mx-0 lg:w-full",
                  children: s,
                }),
              ],
            }),
            u.jsx("p", {
              className: "text-body opacity-50 md:max-w-[572px]",
              children: n,
            }),
            u.jsx("div", {
              children: u.jsx(zu, {
                to: `/products/${e}`,
                children: "See Product",
              }),
            }),
          ],
        }),
      ],
    });
  },
  K0 = () => {
    const e = Tr.filter((t) => t.category === "headphones");
    return u.jsxs("div", {
      children: [
        u.jsx(Mu, { title: "Headphones" }),
        u.jsx("div", {
          className: "flex flex-col gap-[120px] lg:mb-[120px]",
          children: e
            .sort((t, r) => r.new - t.new || t.id - r.id)
            .map((t, r) =>
              u.jsx(
                Iu,
                {
                  image: t.categoryImage,
                  name: t.name,
                  description: t.description,
                  newProduct: t.new,
                  id: t.id,
                  slug: t.slug,
                  isReversed: r % 2 === 1,
                },
                t.id
              )
            ),
        }),
        u.jsx(Nl, {}),
      ],
    });
  };
function Y0() {
  const e = Tr.filter((t) => t.category === "speakers");
  return u.jsxs("div", {
    children: [
      u.jsx(Mu, { title: "Speakers" }),
      u.jsx("div", {
        className: "flex flex-col gap-[120px] lg:mb-[120px]",
        children: e
          .sort((t, r) => r.new - t.new || t.id - r.id)
          .map((t, r) =>
            u.jsx(
              Iu,
              {
                image: t.categoryImage,
                name: t.name,
                description: t.description,
                newProduct: t.new,
                id: t.id,
                slug: t.slug,
                isReversed: r % 2 === 1,
              },
              t.id
            )
          ),
      }),
      u.jsx(Nl, {}),
    ],
  });
}
const G0 = () => {
    const e = Tr.filter((t) => t.category === "earphones");
    return u.jsxs("div", {
      children: [
        u.jsx(Mu, { title: "Earphones" }),
        u.jsx("div", {
          className: "flex flex-col gap-[120px] lg:mb-[120px]",
          children: e
            .sort((t, r) => r.new - t.new || t.id - r.id)
            .map((t, r) =>
              u.jsx(
                Iu,
                {
                  image: t.categoryImage,
                  name: t.name,
                  description: t.description,
                  newProduct: t.new,
                  id: t.id,
                  slug: t.slug,
                  isReversed: r % 2 === 1,
                },
                t.id
              )
            ),
        }),
        u.jsx(Nl, {}),
      ],
    });
  },
  Z0 = ({ product: e, setCartItems: t, setCartItemCount: r, getPrice: n }) => {
    const [l, i] = N.useState(1),
      o = km(),
      s = (f) => {
        const m = parseInt(f.target.value);
        i(m);
        const v = JSON.parse(localStorage.getItem("cartItems")) || [],
          x = v.findIndex((w) => w.slug === e.slug);
        x !== -1 &&
          ((v[x].quantity = m),
          localStorage.setItem("cartItems", JSON.stringify(v)));
      },
      a = () => {
        o(r0({ ...e, quantity: l, cartImage: e.image.cart }));
        const f = JSON.parse(localStorage.getItem("cartItems")) || [],
          m = f.findIndex((v) => v.slug === e.slug);
        m !== -1
          ? (f[m].quantity += l)
          : f.push({ ...e, quantity: l, cartImage: e.image.cart }),
          localStorage.setItem("cartItems", JSON.stringify(f)),
          t(f),
          r(f.reduce((v, x) => v + x.quantity, 0));
      },
      c = () => {
        i(l + 1);
      },
      d = () => {
        l > 1 && i(l - 1);
      };
    return u.jsxs("div", {
      className: "flex justify-between gap-4 max-w-[296px]",
      children: [
        u.jsxs("div", {
          className:
            "flex gap-[20px] place-items-center bg-paleSilver mx-auto px-6",
          children: [
            u.jsx("button", {
              type: "button",
              className: "opacity-25 py-4 focus:outline-none ",
              onClick: d,
              children: "-",
            }),
            u.jsx("input", {
              className:
                "bg-paleSilver py-4 w-4 text-center focus:outline-none text-subtitle",
              type: "number",
              min: "1",
              value: l,
              onChange: s,
            }),
            u.jsx("button", {
              type: "button",
              className: "opacity-25 py-4 focus:outline-none ",
              onClick: c,
              children: "+",
            }),
          ],
        }),
        u.jsx("button", {
          className:
            "bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]",
          onClick: a,
          children: "Add To Cart",
        }),
      ],
    });
  },
  J0 = () => {
    const e = [];
    for (; e.length < 3; ) {
      const t = Math.floor(Math.random() * Tr.length),
        r = Tr[t];
      e.includes(r) || e.push(r);
    }
    return u.jsxs("section", {
      className:
        "container mx-auto text-center mb-[120px] lg:mb-[120px] lg:max-w-[1110px]",
      children: [
        u.jsx("h3", {
          className: "uppercase text-h5 md:text-h3 mb-8",
          children: "You May Also Like",
        }),
        u.jsx("div", {
          className:
            " flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-[11px]",
          children: e.map((t) =>
            u.jsxs(
              "div",
              {
                className: "flex flex-col gap-8 justify-between",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("img", {
                        className:
                          "rounded-lg mx-auto w-1/2 object-cover md:hidden",
                        src: `../../../${t.image.mobile}`,
                        alt: "",
                      }),
                      u.jsx("img", {
                        className:
                          "rounded-lg mx-auto max-h-[318px] object-cover hidden md:block lg:hidden",
                        src: `../../../${t.image.tablet}`,
                        alt: "",
                      }),
                      u.jsx("img", {
                        className:
                          "rounded-lg mx-auto object-cover hidden lg:block",
                        src: `../../../${t.image.desktop}`,
                        alt: "",
                      }),
                    ],
                  }),
                  u.jsx("h5", { className: "text-h5", children: t.name }),
                  u.jsx("div", {
                    children: u.jsx(zu, {
                      to: `/products/${t.slug}`,
                      children: "See Product",
                    }),
                  }),
                ],
              },
              t.id
            )
          ),
        }),
      ],
    });
  },
  e1 = ({ setCartItemCount: e }) => {
    const { slug: t } = Zy(),
      r = xu(),
      [n, l] = N.useState(1),
      [i, o] = N.useState([]),
      s = Tr.find((c) => c.slug === t),
      a = s.price * n;
    return s
      ? u.jsxs("div", {
          children: [
            u.jsxs("div", {
              children: [
                u.jsx("div", {
                  className:
                    "container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50",
                  children: u.jsx("a", {
                    className: "cursor-pointer text-body hover:underline",
                    onClick: () => r(-1),
                    children: "Go Back",
                  }),
                }),
                u.jsxs("div", {
                  className:
                    "container mx-auto flex flex-col gap-8 md:max-w-[689px] md:grid md:grid-cols-2 lg:max-w-[1110px] md:gap-[69px] lg:gap-32 md:items-center md:mb-[120px]",
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("img", {
                          className: "mx-auto rounded-lg md:hidden",
                          src: `/${s.image.mobile}`,
                          alt: "",
                        }),
                        u.jsx("img", {
                          className:
                            "mx-auto w-full h-auto object-cover rounded-lg hidden md:block lg:hidden",
                          src: `/${s.image.tablet}`,
                          alt: "",
                        }),
                        u.jsx("img", {
                          className: "mx-auto rounded-lg hidden lg:block",
                          src: `/${s.image.desktop}`,
                          alt: "",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "mx-auto flex flex-col gap-6 mb-[88px] md:mb-0",
                      children: [
                        u.jsx("h6", {
                          className:
                            "text-newProduct uppercase text-brightOrange",
                          children: s.new && "New Product",
                        }),
                        u.jsx("h3", {
                          className:
                            "text-h4 md:text-h2 uppercase  lg:mx-0 lg:w-full",
                          children: s.name,
                        }),
                        u.jsx("p", {
                          className: "text-body opacity-50 md:max-w-[572px]",
                          children: s.description,
                        }),
                        u.jsxs("h6", {
                          className: "text-h6",
                          children: ["$", a],
                        }),
                        u.jsx(Z0, {
                          product: s,
                          cartItems: i,
                          setCartItems: o,
                          setCartItemCount: e,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "container mx-auto lg:flex lg:gap-[125px] lg:max-w-[1110px]",
                  children: [
                    u.jsxs("div", {
                      className:
                        "container mx-auto mb-[88px] md:max-w-[689px] lg:max-w-[1110px]",
                      children: [
                        u.jsx("h2", {
                          className: "uppercase text-h5 md:text-h3 mb-6",
                          children: "Features",
                        }),
                        u.jsx("p", {
                          className: "text-body opacity-50",
                          children: s.features,
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "container mx-auto mb-[88px] md:mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-2 lg:flex lg:flex-col",
                      children: [
                        u.jsx("h3", {
                          className: "uppercase text-h5 md:text-h3 mb-6",
                          children: "In the box",
                        }),
                        u.jsx("ul", {
                          className: "flex flex-col gap-2",
                          children: s.includes.map((c, d) =>
                            u.jsxs(
                              "li",
                              {
                                className: "flex items-center gap-6",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "text-mobileMenu text-brightOrange",
                                    children: c.quantity,
                                  }),
                                  u.jsx("span", {
                                    className: "text-body opacity-50",
                                    children: c.item,
                                  }),
                                ],
                              },
                              d
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5",
                  children: [
                    u.jsxs("div", {
                      className: "flex flex-col justify-between gap-5",
                      children: [
                        u.jsxs("div", {
                          children: [
                            u.jsx("img", {
                              className: "rounded-lg md:hidden",
                              src: `/${s.gallery.first.mobile}`,
                              alt: "",
                            }),
                            u.jsx("img", {
                              className: "rounded-lg hidden md:block lg:hidden",
                              src: `/${s.gallery.first.tablet}`,
                              alt: "",
                            }),
                            u.jsx("img", {
                              className: "rounded-lg hidden lg:block",
                              src: `/${s.gallery.first.desktop}`,
                              alt: "",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "img2",
                          children: [
                            u.jsx("img", {
                              className: "rounded-lg md:hidden",
                              src: `/${s.gallery.second.mobile}`,
                              alt: "",
                            }),
                            u.jsx("img", {
                              className: "rounded-lg hidden md:block lg:hidden",
                              src: `/${s.gallery.second.tablet}`,
                              alt: "",
                            }),
                            u.jsx("img", {
                              className: "rounded-lg hidden lg:block",
                              src: `/${s.gallery.second.desktop}`,
                              alt: "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("img", {
                          className: "rounded-lg md:hidden",
                          src: `/${s.gallery.third.mobile}`,
                          alt: "",
                        }),
                        u.jsx("img", {
                          className: "rounded-lg hidden md:block lg:hidden",
                          src: `/${s.gallery.third.tablet}`,
                          alt: "",
                        }),
                        u.jsx("img", {
                          className: "rounded-lg hidden lg:block",
                          src: `/${s.gallery.third.desktop}`,
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(J0, {}),
            u.jsx(Nl, {}),
          ],
        })
      : u.jsx("div", { children: "Product not found" });
  };
var El = (e) => e.type === "checkbox",
  Jr = (e) => e instanceof Date,
  $e = (e) => e == null;
const Lm = (e) => typeof e == "object";
var xe = (e) => !$e(e) && !Array.isArray(e) && Lm(e) && !Jr(e),
  t1 = (e) =>
    xe(e) && e.target ? (El(e.target) ? e.target.checked : e.target.value) : e,
  r1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  n1 = (e, t) => e.has(r1(t)),
  l1 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return xe(t) && t.hasOwnProperty("isPrototypeOf");
  },
  $u =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function tt(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !($u && (e instanceof Blob || e instanceof FileList)) &&
    (r || xe(e))
  )
    if (((t = r ? [] : {}), !r && !l1(e))) t = e;
    else for (const n in e) e.hasOwnProperty(n) && (t[n] = tt(e[n]));
  else return e;
  return t;
}
var bl = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  de = (e) => e === void 0,
  L = (e, t, r) => {
    if (!t || !xe(e)) return r;
    const n = bl(t.split(/[,[\].]+?/)).reduce((l, i) => ($e(l) ? l : l[i]), e);
    return de(n) || n === e ? (de(e[t]) ? r : e[t]) : n;
  },
  qt = (e) => typeof e == "boolean",
  Lu = (e) => /^\w*$/.test(e),
  Fm = (e) => bl(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Z = (e, t, r) => {
    let n = -1;
    const l = Lu(t) ? [t] : Fm(t),
      i = l.length,
      o = i - 1;
    for (; ++n < i; ) {
      const s = l[n];
      let a = r;
      if (n !== o) {
        const c = e[s];
        a = xe(c) || Array.isArray(c) ? c : isNaN(+l[n + 1]) ? {} : [];
      }
      if (s === "__proto__") return;
      (e[s] = a), (e = e[s]);
    }
    return e;
  };
const Od = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ht = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ct = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
ce.createContext(null);
var i1 = (e, t, r, n = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(l, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== ht.all &&
              (t._proxyFormState[o] = !n || ht.all),
            e[o]
          );
        },
      });
    return l;
  },
  qe = (e) => xe(e) && !Object.keys(e).length,
  o1 = (e, t, r, n) => {
    r(e);
    const { name: l, ...i } = e;
    return (
      qe(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === ht.all)
    );
  },
  ys = (e) => (Array.isArray(e) ? e : [e]);
function s1(e) {
  const t = ce.useRef(e);
  (t.current = e),
    ce.useEffect(() => {
      const r =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var St = (e) => typeof e == "string",
  a1 = (e, t, r, n, l) =>
    St(e)
      ? (n && t.watch.add(e), L(r, e, l))
      : Array.isArray(e)
      ? e.map((i) => (n && t.watch.add(i), L(r, i)))
      : (n && (t.watchAll = !0), r),
  u1 = (e, t, r, n, l) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: l || !0 },
        }
      : {},
  Rd = (e) => ({
    isOnSubmit: !e || e === ht.onSubmit,
    isOnBlur: e === ht.onBlur,
    isOnChange: e === ht.onChange,
    isOnAll: e === ht.all,
    isOnTouch: e === ht.onTouched,
  }),
  zd = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      ));
const Qn = (e, t, r, n) => {
  for (const l of r || Object.keys(e)) {
    const i = L(e, l);
    if (i) {
      const { _f: o, ...s } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], l) && !n) break;
        if (o.ref && t(o.ref, o.name) && !n) break;
        Qn(s, t);
      } else xe(s) && Qn(s, t);
    }
  }
};
var c1 = (e, t, r) => {
    const n = bl(L(e, r));
    return Z(n, "root", t[r]), Z(e, r, n), e;
  },
  Fu = (e) => e.type === "file",
  Yt = (e) => typeof e == "function",
  Ui = (e) => {
    if (!$u) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  si = (e) => St(e),
  Au = (e) => e.type === "radio",
  Vi = (e) => e instanceof RegExp;
const Td = { value: !1, isValid: !1 },
  Md = { value: !0, isValid: !0 };
var Am = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !de(e[0].attributes.value)
        ? de(e[0].value) || e[0].value === ""
          ? Md
          : { value: e[0].value, isValid: !0 }
        : Md
      : Td;
  }
  return Td;
};
const Id = { isValid: !1, value: null };
var Dm = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        Id
      )
    : Id;
function $d(e, t, r = "validate") {
  if (si(e) || (Array.isArray(e) && e.every(si)) || (qt(e) && !e))
    return { type: r, message: si(e) ? e : "", ref: t };
}
var Dr = (e) => (xe(e) && !Vi(e) ? e : { value: e, message: "" }),
  Ld = async (e, t, r, n, l) => {
    const {
        ref: i,
        refs: o,
        required: s,
        maxLength: a,
        minLength: c,
        min: d,
        max: f,
        pattern: m,
        validate: v,
        name: x,
        valueAsNumber: w,
        mount: E,
        disabled: h,
      } = e._f,
      p = L(t, x);
    if (!E || h) return {};
    const g = o ? o[0] : i,
      j = (U) => {
        n &&
          g.reportValidity &&
          (g.setCustomValidity(qt(U) ? "" : U || ""), g.reportValidity());
      },
      b = {},
      O = Au(i),
      _ = El(i),
      z = O || _,
      V =
        ((w || Fu(i)) && de(i.value) && de(p)) ||
        (Ui(i) && i.value === "") ||
        p === "" ||
        (Array.isArray(p) && !p.length),
      $ = u1.bind(null, x, r, b),
      oe = (U, W, se, we = Ct.maxLength, Me = Ct.minLength) => {
        const Ce = U ? W : se;
        b[x] = {
          type: U ? we : Me,
          message: Ce,
          ref: i,
          ...$(U ? we : Me, Ce),
        };
      };
    if (
      l
        ? !Array.isArray(p) || !p.length
        : s &&
          ((!z && (V || $e(p))) ||
            (qt(p) && !p) ||
            (_ && !Am(o).isValid) ||
            (O && !Dm(o).isValid))
    ) {
      const { value: U, message: W } = si(s)
        ? { value: !!s, message: s }
        : Dr(s);
      if (
        U &&
        ((b[x] = {
          type: Ct.required,
          message: W,
          ref: g,
          ...$(Ct.required, W),
        }),
        !r)
      )
        return j(W), b;
    }
    if (!V && (!$e(d) || !$e(f))) {
      let U, W;
      const se = Dr(f),
        we = Dr(d);
      if (!$e(p) && !isNaN(p)) {
        const Me = i.valueAsNumber || (p && +p);
        $e(se.value) || (U = Me > se.value),
          $e(we.value) || (W = Me < we.value);
      } else {
        const Me = i.valueAsDate || new Date(p),
          Ce = (D) => new Date(new Date().toDateString() + " " + D),
          T = i.type == "time",
          A = i.type == "week";
        St(se.value) &&
          p &&
          (U = T
            ? Ce(p) > Ce(se.value)
            : A
            ? p > se.value
            : Me > new Date(se.value)),
          St(we.value) &&
            p &&
            (W = T
              ? Ce(p) < Ce(we.value)
              : A
              ? p < we.value
              : Me < new Date(we.value));
      }
      if ((U || W) && (oe(!!U, se.message, we.message, Ct.max, Ct.min), !r))
        return j(b[x].message), b;
    }
    if ((a || c) && !V && (St(p) || (l && Array.isArray(p)))) {
      const U = Dr(a),
        W = Dr(c),
        se = !$e(U.value) && p.length > +U.value,
        we = !$e(W.value) && p.length < +W.value;
      if ((se || we) && (oe(se, U.message, W.message), !r))
        return j(b[x].message), b;
    }
    if (m && !V && St(p)) {
      const { value: U, message: W } = Dr(m);
      if (
        Vi(U) &&
        !p.match(U) &&
        ((b[x] = { type: Ct.pattern, message: W, ref: i, ...$(Ct.pattern, W) }),
        !r)
      )
        return j(W), b;
    }
    if (v) {
      if (Yt(v)) {
        const U = await v(p, t),
          W = $d(U, g);
        if (W && ((b[x] = { ...W, ...$(Ct.validate, W.message) }), !r))
          return j(W.message), b;
      } else if (xe(v)) {
        let U = {};
        for (const W in v) {
          if (!qe(U) && !r) break;
          const se = $d(await v[W](p, t), g, W);
          se &&
            ((U = { ...se, ...$(W, se.message) }),
            j(se.message),
            r && (b[x] = U));
        }
        if (!qe(U) && ((b[x] = { ref: g, ...U }), !r)) return b;
      }
    }
    return j(!0), b;
  };
function d1(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = de(e) ? n++ : e[t[n++]];
  return e;
}
function f1(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !de(e[t])) return !1;
  return !0;
}
function ge(e, t) {
  const r = Array.isArray(t) ? t : Lu(t) ? [t] : Fm(t),
    n = r.length === 1 ? e : d1(e, r),
    l = r.length - 1,
    i = r[l];
  return (
    n && delete n[i],
    l !== 0 &&
      ((xe(n) && qe(n)) || (Array.isArray(n) && f1(n))) &&
      ge(e, r.slice(0, -1)),
    e
  );
}
var vs = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (l) => {
        for (const i of e) i.next && i.next(l);
      },
      subscribe: (l) => (
        e.push(l),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== l);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Bi = (e) => $e(e) || !Lm(e);
function Nr(e, t) {
  if (Bi(e) || Bi(t)) return e === t;
  if (Jr(e) && Jr(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const l of r) {
    const i = e[l];
    if (!n.includes(l)) return !1;
    if (l !== "ref") {
      const o = t[l];
      if (
        (Jr(i) && Jr(o)) ||
        (xe(i) && xe(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !Nr(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Um = (e) => e.type === "select-multiple",
  p1 = (e) => Au(e) || El(e),
  xs = (e) => Ui(e) && e.isConnected,
  Vm = (e) => {
    for (const t in e) if (Yt(e[t])) return !0;
    return !1;
  };
function Wi(e, t = {}) {
  const r = Array.isArray(e);
  if (xe(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (xe(e[n]) && !Vm(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), Wi(e[n], t[n]))
        : $e(e[n]) || (t[n] = !0);
  return t;
}
function Bm(e, t, r) {
  const n = Array.isArray(e);
  if (xe(e) || n)
    for (const l in e)
      Array.isArray(e[l]) || (xe(e[l]) && !Vm(e[l]))
        ? de(t) || Bi(r[l])
          ? (r[l] = Array.isArray(e[l]) ? Wi(e[l], []) : { ...Wi(e[l]) })
          : Bm(e[l], $e(t) ? {} : t[l], r[l])
        : (r[l] = !Nr(e[l], t[l]));
  return r;
}
var Xl = (e, t) => Bm(e, t, Wi(t)),
  Wm = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    de(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : r && St(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function ws(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Fu(t)
      ? t.files
      : Au(t)
      ? Dm(e.refs).value
      : Um(t)
      ? [...t.selectedOptions].map(({ value: r }) => r)
      : El(t)
      ? Am(e.refs).value
      : Wm(de(t.value) ? e.ref.value : t.value, e);
}
var m1 = (e, t, r, n) => {
    const l = {};
    for (const i of e) {
      const o = L(t, i);
      o && Z(l, i, o._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: n,
    };
  },
  Tn = (e) =>
    de(e)
      ? e
      : Vi(e)
      ? e.source
      : xe(e)
      ? Vi(e.value)
        ? e.value.source
        : e.value
      : e,
  h1 = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Fd(e, t, r) {
  const n = L(e, r);
  if (n || Lu(r)) return { error: n, name: r };
  const l = r.split(".");
  for (; l.length; ) {
    const i = l.join("."),
      o = L(t, i),
      s = L(e, i);
    if (o && !Array.isArray(o) && r !== i) return { name: r };
    if (s && s.type) return { name: i, error: s };
    l.pop();
  }
  return { name: r };
}
var g1 = (e, t, r, n, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
      ? !(t || e)
      : (r ? n.isOnBlur : l.isOnBlur)
      ? !e
      : (r ? n.isOnChange : l.isOnChange)
      ? e
      : !0,
  y1 = (e, t) => !bl(L(e, t)).length && ge(e, t);
const v1 = {
  mode: ht.onSubmit,
  reValidateMode: ht.onChange,
  shouldFocusError: !0,
};
function x1(e = {}) {
  let t = { ...v1, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Yt(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    l =
      xe(t.defaultValues) || xe(t.values)
        ? tt(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : tt(l),
    o = { action: !1, mount: !1, watch: !1 },
    s = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    a,
    c = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { values: vs(), array: vs(), state: vs() },
    m = Rd(t.mode),
    v = Rd(t.reValidateMode),
    x = t.criteriaMode === ht.all,
    w = (y) => (k) => {
      clearTimeout(c), (c = setTimeout(y, k));
    },
    E = async (y) => {
      if (d.isValid || y) {
        const k = t.resolver ? qe((await z()).errors) : await $(n, !0);
        k !== r.isValid && f.state.next({ isValid: k });
      }
    },
    h = (y, k) => {
      (d.isValidating || d.validatingFields) &&
        ((y || Array.from(s.mount)).forEach((S) => {
          S && (k ? Z(r.validatingFields, S, k) : ge(r.validatingFields, S));
        }),
        f.state.next({
          validatingFields: r.validatingFields,
          isValidating: !qe(r.validatingFields),
        }));
    },
    p = (y, k = [], S, M, R = !0, P = !0) => {
      if (M && S) {
        if (((o.action = !0), P && Array.isArray(L(n, y)))) {
          const F = S(L(n, y), M.argA, M.argB);
          R && Z(n, y, F);
        }
        if (P && Array.isArray(L(r.errors, y))) {
          const F = S(L(r.errors, y), M.argA, M.argB);
          R && Z(r.errors, y, F), y1(r.errors, y);
        }
        if (d.touchedFields && P && Array.isArray(L(r.touchedFields, y))) {
          const F = S(L(r.touchedFields, y), M.argA, M.argB);
          R && Z(r.touchedFields, y, F);
        }
        d.dirtyFields && (r.dirtyFields = Xl(l, i)),
          f.state.next({
            name: y,
            isDirty: U(y, k),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else Z(i, y, k);
    },
    g = (y, k) => {
      Z(r.errors, y, k), f.state.next({ errors: r.errors });
    },
    j = (y) => {
      (r.errors = y), f.state.next({ errors: r.errors, isValid: !1 });
    },
    b = (y, k, S, M) => {
      const R = L(n, y);
      if (R) {
        const P = L(i, y, de(S) ? L(l, y) : S);
        de(P) || (M && M.defaultChecked) || k
          ? Z(i, y, k ? P : ws(R._f))
          : we(y, P),
          o.mount && E();
      }
    },
    O = (y, k, S, M, R) => {
      let P = !1,
        F = !1;
      const q = { name: y },
        pe = !!(L(n, y) && L(n, y)._f.disabled);
      if (!S || M) {
        d.isDirty &&
          ((F = r.isDirty),
          (r.isDirty = q.isDirty = U()),
          (P = F !== q.isDirty));
        const He = pe || Nr(L(l, y), k);
        (F = !!(!pe && L(r.dirtyFields, y))),
          He || pe ? ge(r.dirtyFields, y) : Z(r.dirtyFields, y, !0),
          (q.dirtyFields = r.dirtyFields),
          (P = P || (d.dirtyFields && F !== !He));
      }
      if (S) {
        const He = L(r.touchedFields, y);
        He ||
          (Z(r.touchedFields, y, S),
          (q.touchedFields = r.touchedFields),
          (P = P || (d.touchedFields && He !== S)));
      }
      return P && R && f.state.next(q), P ? q : {};
    },
    _ = (y, k, S, M) => {
      const R = L(r.errors, y),
        P = d.isValid && qt(k) && r.isValid !== k;
      if (
        (e.delayError && S
          ? ((a = w(() => g(y, S))), a(e.delayError))
          : (clearTimeout(c),
            (a = null),
            S ? Z(r.errors, y, S) : ge(r.errors, y)),
        (S ? !Nr(R, S) : R) || !qe(M) || P)
      ) {
        const F = {
          ...M,
          ...(P && qt(k) ? { isValid: k } : {}),
          errors: r.errors,
          name: y,
        };
        (r = { ...r, ...F }), f.state.next(F);
      }
    },
    z = async (y) => {
      h(y, !0);
      const k = await t.resolver(
        i,
        t.context,
        m1(y || s.mount, n, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return h(y), k;
    },
    V = async (y) => {
      const { errors: k } = await z(y);
      if (y)
        for (const S of y) {
          const M = L(k, S);
          M ? Z(r.errors, S, M) : ge(r.errors, S);
        }
      else r.errors = k;
      return k;
    },
    $ = async (y, k, S = { valid: !0 }) => {
      for (const M in y) {
        const R = y[M];
        if (R) {
          const { _f: P, ...F } = R;
          if (P) {
            const q = s.array.has(P.name);
            h([M], !0);
            const pe = await Ld(R, i, x, t.shouldUseNativeValidation && !k, q);
            if ((h([M]), pe[P.name] && ((S.valid = !1), k))) break;
            !k &&
              (L(pe, P.name)
                ? q
                  ? c1(r.errors, pe, P.name)
                  : Z(r.errors, P.name, pe[P.name])
                : ge(r.errors, P.name));
          }
          F && (await $(F, k, S));
        }
      }
      return S.valid;
    },
    oe = () => {
      for (const y of s.unMount) {
        const k = L(n, y);
        k &&
          (k._f.refs ? k._f.refs.every((S) => !xs(S)) : !xs(k._f.ref)) &&
          ut(y);
      }
      s.unMount = new Set();
    },
    U = (y, k) => (y && k && Z(i, y, k), !Nr(ee(), l)),
    W = (y, k, S) =>
      a1(y, s, { ...(o.mount ? i : de(k) ? l : St(y) ? { [y]: k } : k) }, S, k),
    se = (y) =>
      bl(L(o.mount ? i : l, y, e.shouldUnregister ? L(l, y, []) : [])),
    we = (y, k, S = {}) => {
      const M = L(n, y);
      let R = k;
      if (M) {
        const P = M._f;
        P &&
          (!P.disabled && Z(i, y, Wm(k, P)),
          (R = Ui(P.ref) && $e(k) ? "" : k),
          Um(P.ref)
            ? [...P.ref.options].forEach(
                (F) => (F.selected = R.includes(F.value))
              )
            : P.refs
            ? El(P.ref)
              ? P.refs.length > 1
                ? P.refs.forEach(
                    (F) =>
                      (!F.defaultChecked || !F.disabled) &&
                      (F.checked = Array.isArray(R)
                        ? !!R.find((q) => q === F.value)
                        : R === F.value)
                  )
                : P.refs[0] && (P.refs[0].checked = !!R)
              : P.refs.forEach((F) => (F.checked = F.value === R))
            : Fu(P.ref)
            ? (P.ref.value = "")
            : ((P.ref.value = R),
              P.ref.type || f.values.next({ name: y, values: { ...i } })));
      }
      (S.shouldDirty || S.shouldTouch) &&
        O(y, R, S.shouldTouch, S.shouldDirty, !0),
        S.shouldValidate && D(y);
    },
    Me = (y, k, S) => {
      for (const M in k) {
        const R = k[M],
          P = `${y}.${M}`,
          F = L(n, P);
        (s.array.has(y) || !Bi(R) || (F && !F._f)) && !Jr(R)
          ? Me(P, R, S)
          : we(P, R, S);
      }
    },
    Ce = (y, k, S = {}) => {
      const M = L(n, y),
        R = s.array.has(y),
        P = tt(k);
      Z(i, y, P),
        R
          ? (f.array.next({ name: y, values: { ...i } }),
            (d.isDirty || d.dirtyFields) &&
              S.shouldDirty &&
              f.state.next({
                name: y,
                dirtyFields: Xl(l, i),
                isDirty: U(y, P),
              }))
          : M && !M._f && !$e(P)
          ? Me(y, P, S)
          : we(y, P, S),
        zd(y, s) && f.state.next({ ...r }),
        f.values.next({ name: o.mount ? y : void 0, values: { ...i } });
    },
    T = async (y) => {
      o.mount = !0;
      const k = y.target;
      let S = k.name,
        M = !0;
      const R = L(n, S),
        P = () => (k.type ? ws(R._f) : t1(y)),
        F = (q) => {
          M = Number.isNaN(q) || q === L(i, S, q);
        };
      if (R) {
        let q, pe;
        const He = P(),
          Fr = y.type === Od.BLUR || y.type === Od.FOCUS_OUT,
          Xm =
            (!h1(R._f) && !t.resolver && !L(r.errors, S) && !R._f.deps) ||
            g1(Fr, L(r.touchedFields, S), r.isSubmitted, v, m),
          Ro = zd(S, s, Fr);
        Z(i, S, He),
          Fr
            ? (R._f.onBlur && R._f.onBlur(y), a && a(0))
            : R._f.onChange && R._f.onChange(y);
        const zo = O(S, He, Fr, !1),
          Qm = !qe(zo) || Ro;
        if (
          (!Fr && f.values.next({ name: S, type: y.type, values: { ...i } }),
          Xm)
        )
          return (
            d.isValid && E(), Qm && f.state.next({ name: S, ...(Ro ? {} : zo) })
          );
        if ((!Fr && Ro && f.state.next({ ...r }), t.resolver)) {
          const { errors: Wu } = await z([S]);
          if ((F(He), M)) {
            const Km = Fd(r.errors, n, S),
              Hu = Fd(Wu, n, Km.name || S);
            (q = Hu.error), (S = Hu.name), (pe = qe(Wu));
          }
        } else
          h([S], !0),
            (q = (await Ld(R, i, x, t.shouldUseNativeValidation))[S]),
            h([S]),
            F(He),
            M && (q ? (pe = !1) : d.isValid && (pe = await $(n, !0)));
        M && (R._f.deps && D(R._f.deps), _(S, pe, q, zo));
      }
    },
    A = (y, k) => {
      if (L(r.errors, k) && y.focus) return y.focus(), 1;
    },
    D = async (y, k = {}) => {
      let S, M;
      const R = ys(y);
      if (t.resolver) {
        const P = await V(de(y) ? y : R);
        (S = qe(P)), (M = y ? !R.some((F) => L(P, F)) : S);
      } else
        y
          ? ((M = (
              await Promise.all(
                R.map(async (P) => {
                  const F = L(n, P);
                  return await $(F && F._f ? { [P]: F } : F);
                })
              )
            ).every(Boolean)),
            !(!M && !r.isValid) && E())
          : (M = S = await $(n));
      return (
        f.state.next({
          ...(!St(y) || (d.isValid && S !== r.isValid) ? {} : { name: y }),
          ...(t.resolver || !y ? { isValid: S } : {}),
          errors: r.errors,
        }),
        k.shouldFocus && !M && Qn(n, A, y ? R : s.mount),
        M
      );
    },
    ee = (y) => {
      const k = { ...(o.mount ? i : l) };
      return de(y) ? k : St(y) ? L(k, y) : y.map((S) => L(k, S));
    },
    ue = (y, k) => ({
      invalid: !!L((k || r).errors, y),
      isDirty: !!L((k || r).dirtyFields, y),
      isTouched: !!L((k || r).touchedFields, y),
      isValidating: !!L((k || r).validatingFields, y),
      error: L((k || r).errors, y),
    }),
    Lr = (y) => {
      y && ys(y).forEach((k) => ge(r.errors, k)),
        f.state.next({ errors: y ? r.errors : {} });
    },
    xt = (y, k, S) => {
      const M = (L(n, y, { _f: {} })._f || {}).ref,
        R = L(r.errors, y) || {},
        { ref: P, message: F, type: q, ...pe } = R;
      Z(r.errors, y, { ...pe, ...k, ref: M }),
        f.state.next({ name: y, errors: r.errors, isValid: !1 }),
        S && S.shouldFocus && M && M.focus && M.focus();
    },
    Nn = (y, k) =>
      Yt(y)
        ? f.values.subscribe({ next: (S) => y(W(void 0, k), S) })
        : W(y, k, !0),
    ut = (y, k = {}) => {
      for (const S of y ? ys(y) : s.mount)
        s.mount.delete(S),
          s.array.delete(S),
          k.keepValue || (ge(n, S), ge(i, S)),
          !k.keepError && ge(r.errors, S),
          !k.keepDirty && ge(r.dirtyFields, S),
          !k.keepTouched && ge(r.touchedFields, S),
          !k.keepIsValidating && ge(r.validatingFields, S),
          !t.shouldUnregister && !k.keepDefaultValue && ge(l, S);
      f.values.next({ values: { ...i } }),
        f.state.next({ ...r, ...(k.keepDirty ? { isDirty: U() } : {}) }),
        !k.keepIsValid && E();
    },
    hr = ({ disabled: y, name: k, field: S, fields: M, value: R }) => {
      if ((qt(y) && o.mount) || y) {
        const P = y ? void 0 : de(R) ? ws(S ? S._f : L(M, k)._f) : R;
        Z(i, k, P), O(k, P, !1, !1, !0);
      }
    },
    Oo = (y, k = {}) => {
      let S = L(n, y);
      const M = qt(k.disabled);
      return (
        Z(n, y, {
          ...(S || {}),
          _f: {
            ...(S && S._f ? S._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...k,
          },
        }),
        s.mount.add(y),
        S
          ? hr({ field: S, disabled: k.disabled, name: y, value: k.value })
          : b(y, !0, k.value),
        {
          ...(M ? { disabled: k.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!k.required,
                min: Tn(k.min),
                max: Tn(k.max),
                minLength: Tn(k.minLength),
                maxLength: Tn(k.maxLength),
                pattern: Tn(k.pattern),
              }
            : {}),
          name: y,
          onChange: T,
          onBlur: T,
          ref: (R) => {
            if (R) {
              Oo(y, k), (S = L(n, y));
              const P =
                  (de(R.value) &&
                    R.querySelectorAll &&
                    R.querySelectorAll("input,select,textarea")[0]) ||
                  R,
                F = p1(P),
                q = S._f.refs || [];
              if (F ? q.find((pe) => pe === P) : P === S._f.ref) return;
              Z(n, y, {
                _f: {
                  ...S._f,
                  ...(F
                    ? {
                        refs: [
                          ...q.filter(xs),
                          P,
                          ...(Array.isArray(L(l, y)) ? [{}] : []),
                        ],
                        ref: { type: P.type, name: y },
                      }
                    : { ref: P }),
                },
              }),
                b(y, !1, void 0, P);
            } else
              (S = L(n, y, {})),
                S._f && (S._f.mount = !1),
                (t.shouldUnregister || k.shouldUnregister) &&
                  !(n1(s.array, y) && o.action) &&
                  s.unMount.add(y);
          },
        }
      );
    },
    Du = () => t.shouldFocusError && Qn(n, A, s.mount),
    Hm = (y) => {
      qt(y) &&
        (f.state.next({ disabled: y }),
        Qn(
          n,
          (k, S) => {
            const M = L(n, S);
            M &&
              ((k.disabled = M._f.disabled || y),
              Array.isArray(M._f.refs) &&
                M._f.refs.forEach((R) => {
                  R.disabled = M._f.disabled || y;
                }));
          },
          0,
          !1
        ));
    },
    Uu = (y, k) => async (S) => {
      let M;
      S && (S.preventDefault && S.preventDefault(), S.persist && S.persist());
      let R = tt(i);
      if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: P, values: F } = await z();
        (r.errors = P), (R = F);
      } else await $(n);
      if ((ge(r.errors, "root"), qe(r.errors))) {
        f.state.next({ errors: {} });
        try {
          await y(R, S);
        } catch (P) {
          M = P;
        }
      } else k && (await k({ ...r.errors }, S)), Du(), setTimeout(Du);
      if (
        (f.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: qe(r.errors) && !M,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        M)
      )
        throw M;
    },
    qm = (y, k = {}) => {
      L(n, y) &&
        (de(k.defaultValue)
          ? Ce(y, tt(L(l, y)))
          : (Ce(y, k.defaultValue), Z(l, y, tt(k.defaultValue))),
        k.keepTouched || ge(r.touchedFields, y),
        k.keepDirty ||
          (ge(r.dirtyFields, y),
          (r.isDirty = k.defaultValue ? U(y, tt(L(l, y))) : U())),
        k.keepError || (ge(r.errors, y), d.isValid && E()),
        f.state.next({ ...r }));
    },
    Vu = (y, k = {}) => {
      const S = y ? tt(y) : l,
        M = tt(S),
        R = qe(y),
        P = R ? l : M;
      if ((k.keepDefaultValues || (l = S), !k.keepValues)) {
        if (k.keepDirtyValues)
          for (const F of s.mount)
            L(r.dirtyFields, F) ? Z(P, F, L(i, F)) : Ce(F, L(P, F));
        else {
          if ($u && de(y))
            for (const F of s.mount) {
              const q = L(n, F);
              if (q && q._f) {
                const pe = Array.isArray(q._f.refs) ? q._f.refs[0] : q._f.ref;
                if (Ui(pe)) {
                  const He = pe.closest("form");
                  if (He) {
                    He.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (i = e.shouldUnregister ? (k.keepDefaultValues ? tt(l) : {}) : tt(P)),
          f.array.next({ values: { ...P } }),
          f.values.next({ values: { ...P } });
      }
      (s = {
        mount: k.keepDirtyValues ? s.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !d.isValid || !!k.keepIsValid || !!k.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        f.state.next({
          submitCount: k.keepSubmitCount ? r.submitCount : 0,
          isDirty: R
            ? !1
            : k.keepDirty
            ? r.isDirty
            : !!(k.keepDefaultValues && !Nr(y, l)),
          isSubmitted: k.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: R
            ? []
            : k.keepDirtyValues
            ? k.keepDefaultValues && i
              ? Xl(l, i)
              : r.dirtyFields
            : k.keepDefaultValues && y
            ? Xl(l, y)
            : {},
          touchedFields: k.keepTouched ? r.touchedFields : {},
          errors: k.keepErrors ? r.errors : {},
          isSubmitSuccessful: k.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Bu = (y, k) => Vu(Yt(y) ? y(i) : y, k);
  return {
    control: {
      register: Oo,
      unregister: ut,
      getFieldState: ue,
      handleSubmit: Uu,
      setError: xt,
      _executeSchema: z,
      _getWatch: W,
      _getDirty: U,
      _updateValid: E,
      _removeUnmounted: oe,
      _updateFieldArray: p,
      _updateDisabledField: hr,
      _getFieldArray: se,
      _reset: Vu,
      _resetDefaultValues: () =>
        Yt(t.defaultValues) &&
        t.defaultValues().then((y) => {
          Bu(y, t.resetOptions), f.state.next({ isLoading: !1 });
        }),
      _updateFormState: (y) => {
        r = { ...r, ...y };
      },
      _disableForm: Hm,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: j,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(y) {
        o = y;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return s;
      },
      set _names(y) {
        s = y;
      },
      get _formState() {
        return r;
      },
      set _formState(y) {
        r = y;
      },
      get _options() {
        return t;
      },
      set _options(y) {
        t = { ...t, ...y };
      },
    },
    trigger: D,
    register: Oo,
    handleSubmit: Uu,
    watch: Nn,
    setValue: Ce,
    getValues: ee,
    reset: Bu,
    resetField: qm,
    clearErrors: Lr,
    unregister: ut,
    setError: xt,
    setFocus: (y, k = {}) => {
      const S = L(n, y),
        M = S && S._f;
      if (M) {
        const R = M.refs ? M.refs[0] : M.ref;
        R.focus && (R.focus(), k.shouldSelect && R.select());
      }
    },
    getFieldState: ue,
  };
}
function w1(e = {}) {
  const t = ce.useRef(),
    r = ce.useRef(),
    [n, l] = ce.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Yt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Yt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...x1(e), formState: n });
  const i = t.current.control;
  return (
    (i._options = e),
    s1({
      subject: i._subjects.state,
      next: (o) => {
        o1(o, i._proxyFormState, i._updateFormState) && l({ ...i._formState });
      },
    }),
    ce.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    ce.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== n.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, n.isDirty]),
    ce.useEffect(() => {
      e.values && !Nr(e.values, r.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (r.current = e.values),
          l((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    ce.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    ce.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    ce.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = i1(n, i)),
    t.current
  );
}
const k1 = ({ cartItems: e }) => {
    const t = e.reduce((n, l) => n + l.price * l.quantity, 0),
      r = e[0];
    return u.jsx("div", {
      className: "modal-container",
      children: u.jsxs("div", {
        className:
          "bg-pureWhite max-w-[327px] md:max-w-[540px] mx-auto px-8 rounded-lg",
        children: [
          u.jsx("img", {
            className: "pt-8 mb-6",
            src: "/assets/checkout/icon-order-confirmation.svg",
            alt: "checkmark",
          }),
          u.jsx("h3", {
            className: "text-h5 uppercase mb-4",
            children: "Thank you for your order",
          }),
          u.jsx("p", {
            className: "text-body opacity-50 mb-6",
            children: "You will receive an email confirmation shortly.",
          }),
          u.jsxs("div", {
            children: [
              u.jsxs("div", {
                className: "bg-paleSilver rounded-t p-6 rounded-b",
                children: [
                  u.jsxs("div", {
                    className:
                      "flex justify-between items-center pb-3 border-b border-lightGray mb-3",
                    children: [
                      u.jsxs("div", {
                        className: "flex gap-4 items-center",
                        children: [
                          u.jsx("img", {
                            className: "w-[50px] h-[50px] object-fit",
                            src: r.image.cart,
                            alt: r.name,
                          }),
                          u.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              u.jsx("p", {
                                className: "text-mobileMenu",
                                children: r.name
                                  .replace(
                                    /(headphones|speaker|earphones)/i,
                                    ""
                                  )
                                  .replace(/(mark)/i, "MK")
                                  .replace(/(wireless)/i, "")
                                  .trim(),
                              }),
                              u.jsxs("p", {
                                className: "text-mobileMenu opacity-50",
                                children: ["$ ", r.price],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("p", {
                        className: "font-bold opacity-50",
                        children: ["x ", r.quantity],
                      }),
                    ],
                  }),
                  e.length > 1 &&
                    u.jsx("div", {
                      className: "text-center",
                      children: u.jsxs("p", {
                        className: "text-[12px] font-bold opacity-50",
                        children: ["and ", e.length - 1, " other item(s)"],
                      }),
                    }),
                ],
              }),
              u.jsxs("div", {
                className: "bg-black px-6 py-4 rounded-b mb-6",
                children: [
                  u.jsx("h5", {
                    className: "opacity-50 text-white uppercase mb-2",
                    children: "Grand Total",
                  }),
                  u.jsxs("p", {
                    className: "text-white text-h6",
                    children: ["$ ", t],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("button", {
            className:
              "w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite py-[15px] mb-8",
            whilehover: { scale: 1 },
            whiletap: { scale: 0.9 },
            transition: { duration: 0.3 },
            children: u.jsx(ze, { to: "/", children: "Back To Home" }),
          }),
        ],
      }),
    });
  },
  Ad = ({ onClick: e }) =>
    u.jsx("div", {
      className:
        "fixed inset-0 bg-black opacity-40 z-40 transition-colors duration-300",
      onClick: e,
      initial: { opacity: 0 },
      animate: { opacity: 0.4 },
      exit: { opacity: 0 },
    }),
  j1 = () => {
    var w, E, h, p, g, j, b, O;
    const e = xu(),
      [t, r] = N.useState([]),
      [n, l] = N.useState(!1);
    N.useEffect(() => {
      const _ = JSON.parse(localStorage.getItem("cartItems")) || [];
      r(_);
    }, []);
    const {
        register: i,
        handleSubmit: o,
        formState: { errors: s },
      } = w1(),
      [a, c] = N.useState("eMoney"),
      d = (_) => {
        c(_.target.value);
      },
      f = t.reduce((_, z) => _ + z.price * z.quantity, 0),
      m = Math.floor((f / 100) * 20),
      v = f + 50,
      x = () => {
        l(!0);
      };
    return u.jsxs("div", {
      className: "bg-paleGray pb-24",
      children: [
        n && u.jsx(Ad, { onClick: () => l(!1), showBlur: !0 }),
        u.jsx("div", {
          className:
            "container mx-auto pt-4 md:pt-8 mb-6 lg:pt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50",
          children: u.jsx("a", {
            className: " cursor-pointer text-body hover:underline",
            onClick: () => e(-1),
            children: "Go Back",
          }),
        }),
        u.jsxs("form", {
          className:
            "mx-2 flex flex-col lg:flex-row lg:gap-[30px] lg:mx-auto lg:max-w-[1110px] lg:px-2",
          children: [
            u.jsxs("div", {
              className:
                "container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[730px] bg-white px-6 pt-6 pb-8 rounded-lg mb-8 lg:mb-[141px]",
              children: [
                u.jsx("h2", {
                  className: "text-h4 uppercase mb-8",
                  children: "Checkout",
                }),
                u.jsx("h3", {
                  className: "text-brightOrange text-subtitle uppercase mb-4",
                  children: "Billing Details",
                }),
                u.jsxs("div", {
                  className: "flex flex-col gap-6 mb-8 md:grid md:grid-cols-2",
                  children: [
                    u.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("label", {
                              className: "text-[12px] font-bold",
                              children: "Name",
                            }),
                            ((w = s.name) == null ? void 0 : w.type) ===
                              "required" &&
                              u.jsx("p", {
                                className: "text-error text-[12px]",
                                children: "This field is required",
                              }),
                          ],
                        }),
                        u.jsx("input", {
                          className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                            s.name ? "border-red-500" : "border-silver"
                          }`,
                          placeholder: "Alexei Ward",
                          ...i("name", { required: !0 }),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("label", {
                              className: "text-[12px] font-bold",
                              children: "Email Address",
                            }),
                            ((E = s.email) == null ? void 0 : E.type) ===
                              "required" &&
                              u.jsx("p", {
                                className: "text-error text-[12px]",
                                children: "This field is required",
                              }),
                            ((h = s.email) == null ? void 0 : h.type) ===
                              "pattern" &&
                              u.jsx("p", {
                                className: "text-error text-[12px]",
                                children: "Wrong format",
                              }),
                          ],
                        }),
                        u.jsx("input", {
                          className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                            s.email ? "border-red-500" : "border-silver"
                          }`,
                          placeholder: "alexei@mail.com",
                          ...i("email", {
                            required: !0,
                            pattern:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                          }),
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      children: u.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          u.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("label", {
                                className: "text-[12px] font-bold",
                                children: "Phone",
                              }),
                              ((p = s.phone) == null ? void 0 : p.type) ===
                                "required" &&
                                u.jsx("p", {
                                  className: "text-error text-[12px]",
                                  children: "This field is required",
                                }),
                            ],
                          }),
                          u.jsx("input", {
                            className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                              s.phone ? "border-red-500" : "border-silver"
                            }`,
                            placeholder: "+1 202-555-0136",
                            ...i("phone", { required: !0 }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                u.jsx("h3", {
                  className: "text-brightOrange text-subtitle uppercase mb-4",
                  children: "Shipping Info",
                }),
                u.jsxs("div", {
                  className: "flex flex-col gap-6 mb-8",
                  children: [
                    u.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("label", {
                              className: "text-[12px] font-bold",
                              children: "Your Address",
                            }),
                            ((g = s.address) == null ? void 0 : g.type) ===
                              "required" &&
                              u.jsx("p", {
                                className: "text-error text-[12px]",
                                children: "This field is required",
                              }),
                          ],
                        }),
                        u.jsx("input", {
                          className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                            s.address ? "border-red-500" : "border-silver"
                          }`,
                          placeholder: "1137 Williams Avenue",
                          ...i("address", { required: !0 }),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6",
                      children: [
                        u.jsxs("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            u.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                u.jsx("label", {
                                  className: "text-[12px] font-bold",
                                  children: "Zip Code",
                                }),
                                ((j = s.name) == null ? void 0 : j.type) ===
                                  "required" &&
                                  u.jsx("p", {
                                    className: "text-error text-[12px]",
                                    children: "This field is required",
                                  }),
                              ],
                            }),
                            u.jsx("input", {
                              className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                                s.zipCode ? "border-red-500" : "border-silver"
                              }`,
                              placeholder: "10001",
                              ...i("zipCode", { required: !0 }),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            u.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                u.jsx("label", {
                                  className: "text-[12px] font-bold",
                                  children: "City",
                                }),
                                ((b = s.name) == null ? void 0 : b.type) ===
                                  "required" &&
                                  u.jsx("p", {
                                    className: "text-error text-[12px]",
                                    children: "This field is required",
                                  }),
                              ],
                            }),
                            u.jsx("input", {
                              className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                                s.city ? "border-red-500" : "border-silver"
                              }`,
                              placeholder: "New York",
                              ...i("city", { required: !0 }),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            u.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                u.jsx("label", {
                                  className: "text-[12px] font-bold",
                                  children: "Country",
                                }),
                                ((O = s.country) == null ? void 0 : O.type) ===
                                  "required" &&
                                  u.jsx("p", {
                                    className: "text-error text-[12px]",
                                    children: "This field is required",
                                  }),
                              ],
                            }),
                            u.jsx("input", {
                              className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                                s.address ? "border-red-500" : "border-silver"
                              }`,
                              placeholder: "United States",
                              ...i("country", { required: !0 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("h3", {
                  className: "text-brightOrange text-subtitle uppercase mb-4",
                  children: "Payment Details",
                }),
                u.jsxs("div", {
                  className: "md:grid md:grid-cols-2",
                  children: [
                    u.jsx("h2", {
                      className: "font-bold text-[12px]",
                      children: "Payment Method",
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("div", {
                          className: "flex flex-col",
                          children: u.jsxs("div", {
                            className: "md:-mt-4",
                            children: [
                              u.jsx("input", {
                                type: "radio",
                                id: "eMoney",
                                value: "eMoney",
                                ...i("paymentMethod"),
                                checked: a === "eMoney",
                                onChange: d,
                              }),
                              u.jsx("label", {
                                htmlFor: "eMoney",
                                className:
                                  "cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]",
                                children: "e-Money",
                              }),
                            ],
                          }),
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("input", {
                              type: "radio",
                              id: "cashOnDelivery",
                              value: "cashOnDelivery",
                              ...i("paymentMethod"),
                              checked: a === "cashOnDelivery",
                              onChange: d,
                            }),
                            u.jsx("label", {
                              htmlFor: "cashOnDelivery",
                              className:
                                "cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]",
                              children: "Cash On Delivery",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.paymentMethod &&
                  u.jsx("p", { children: s.paymentMethod.message }),
                a === "eMoney" &&
                  u.jsxs("div", {
                    className:
                      "mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 transition-colors duration-300",
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.5 },
                    children: [
                      u.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          u.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("label", {
                                className: "text-[12px] font-bold",
                                children: "e-Money Number",
                              }),
                              s.eMoneyNumber &&
                                u.jsx("p", {
                                  className: "text-error text-[12px]",
                                  children: "This field is required",
                                }),
                            ],
                          }),
                          u.jsx("input", {
                            className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                              s.eMoneyNumber
                                ? "border-red-500"
                                : "border-silver"
                            }`,
                            placeholder: "238521993",
                            ...i("eMoneyNumber", { required: !0 }),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          u.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("label", {
                                className: "text-[12px] font-bold",
                                children: "e-Money Pin",
                              }),
                              s.eMoneyPin &&
                                u.jsx("p", {
                                  className: "text-error text-[12px]",
                                  children: "This field is required",
                                }),
                            ],
                          }),
                          u.jsx("input", {
                            className: `border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                              s.eMoneyPin ? "border-red-500" : "border-silver"
                            }`,
                            placeholder: "6891",
                            ...i("eMoneyPin", { required: !0 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                u.jsxs("div", {
                  className:
                    "hidden lg:flex lg:items-center lg:justify-between lg:gap-8 lg:mt-[30px]",
                  children: [
                    u.jsx("img", {
                      className: "w-[48px] h-[48px]",
                      src: "/assets/checkout/icon-cash-on-delivery.svg",
                      alt: "",
                    }),
                    u.jsx("p", {
                      className: "text-body opacity-50",
                      children:
                        "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[350px] lg:h-1/2 bg-white px-6 pt-6 pb-8 rounded-lg",
              children: [
                u.jsx("h3", {
                  className: "text-h6 uppercase mb-8",
                  children: "Summary",
                }),
                u.jsxs("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("div", {
                          className: "cart-items flex flex-col gap-6 mb-8",
                          children: t.map((_) =>
                            u.jsxs(
                              "div",
                              {
                                className:
                                  "cart-item flex justify-between gap-4 items-center",
                                children: [
                                  u.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      u.jsx("div", {
                                        className: "cart-item-image",
                                        children: u.jsx("img", {
                                          className: "rounded-lg max-w-[64px]",
                                          src: _.image.cart,
                                          alt: _.name,
                                        }),
                                      }),
                                      u.jsxs("div", {
                                        className: "cart-item-details",
                                        children: [
                                          u.jsx("h3", {
                                            className:
                                              "cart-item-title text-mobileMenu mb-1",
                                            children: _.name
                                              .replace(
                                                /(headphones|speaker|earphones)/i,
                                                ""
                                              )
                                              .replace(/(mark)/i, "MK")
                                              .replace(/(wireless)/i, "")
                                              .trim(),
                                          }),
                                          u.jsxs("div", {
                                            className:
                                              "cart-item-price text-mobileMenu opacity-50",
                                            children: ["$", _.price],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    className: "opacity-50 font-extrabold",
                                    children: ["x", _.quantity],
                                  }),
                                ],
                              },
                              _.id
                            )
                          ),
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            u.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                u.jsx("p", {
                                  className: "text-body opacity-50 uppercase",
                                  children: "Total",
                                }),
                                u.jsxs("span", {
                                  className: "text-h6",
                                  children: ["$ ", f],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                u.jsx("p", {
                                  className: "text-body opacity-50 uppercase",
                                  children: "Shipping",
                                }),
                                u.jsx("span", {
                                  className: "text-h6",
                                  children: "$ 50",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                u.jsx("p", {
                                  className: "text-body opacity-50 uppercase",
                                  children: "VAT (Included)",
                                }),
                                u.jsxs("span", {
                                  className: "text-h6",
                                  children: ["$ ", m],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "flex justify-between items-center mt-4",
                              children: [
                                u.jsx("p", {
                                  className: "text-body opacity-50 uppercase",
                                  children: "Grand total",
                                }),
                                u.jsxs("span", {
                                  className: "text-h6 text-brightOrange",
                                  children: ["$ ", v],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("button", {
                      className:
                        "bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite py-[15px]",
                      whilehover: { scale: 1 },
                      whiletap: { scale: 0.9 },
                      transition: { duration: 0.3 },
                      onClick: o(x),
                      children: "Continue & Pay",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n &&
          u.jsxs(u.Fragment, {
            children: [u.jsx(Ad, {}), u.jsx(k1, { cartItems: t })],
          }),
      ],
    });
  },
  S1 = () => {
    const [e, t] = N.useState(0),
      n = Sl().pathname === "/checkout";
    return u.jsxs("div", {
      className: "App",
      children: [
        u.jsx(a0, { cartItemCount: e, setCartItemCount: t }),
        u.jsxs(fv, {
          children: [
            u.jsx(vr, { path: "/", element: u.jsx(T0, {}) }),
            u.jsx(vr, { path: "/headphones", element: u.jsx(K0, {}) }),
            u.jsx(vr, { path: "/speakers", element: u.jsx(Y0, {}) }),
            u.jsx(vr, { path: "/earphones", element: u.jsx(G0, {}) }),
            u.jsx(vr, {
              path: "/products/:slug",
              element: u.jsx(e1, { setCartItemCount: t }),
            }),
            u.jsx(vr, { path: "/checkout", element: u.jsx(j1, {}) }),
          ],
        }),
        !n && u.jsx(M0, {}),
        u.jsx(Q0, {}),
      ],
    });
  },
  N1 = Hx({ reducer: { cart: l0 } });
ks.createRoot(document.getElementById("root")).render(
  u.jsx(ce.StrictMode, {
    children: u.jsx(ux, {
      store: N1,
      children: u.jsx(xv, { children: u.jsx(S1, {}) }),
    }),
  })
);
