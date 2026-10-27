import { g as getDefaultExportFromCjs, r as reactExports, R as React, b as requireReact, j as jsxRuntimeExports, d as commonjsGlobal, e as requireJsxRuntime, f as getAugmentedNamespace, c as requireReactDom, $ as $e, S as Sr, a as axios } from "../ssr.js";
import { c as classNames, r as requireButton, a as useBootstrapPrefix, b as requireWarning, w as warning, B as Button, d as useIsRTL, e as useBootstrapBreakpoints, f as useBootstrapMinBreakpoint, F as Form, u as useCart, g as Col, h as FontAwesomeIcon, C as CartItems, i as CartContext } from "./CartItems-CuhxiCeA.js";
import { P as PropTypes } from "./index-BnY4fGey.js";
import { R as ReactDOM } from "./index-ByDHPYIw.js";
import { T as Toaster } from "./index-Bou8ZpUI.js";
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var invariant_1;
var hasRequiredInvariant;
function requireInvariant() {
  if (hasRequiredInvariant) return invariant_1;
  hasRequiredInvariant = 1;
  var NODE_ENV = process.env.NODE_ENV;
  var invariant2 = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== "production") {
      if (format === void 0) {
        throw new Error("invariant requires an error message argument");
      }
    }
    if (!condition) {
      var error;
      if (format === void 0) {
        error = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++];
          })
        );
        error.name = "Invariant Violation";
      }
      error.framesToPop = 1;
      throw error;
    }
  };
  invariant_1 = invariant2;
  return invariant_1;
}
var invariantExports = requireInvariant();
const invariant = /* @__PURE__ */ getDefaultExportFromCjs(invariantExports);
function defaultKey$1(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
function useUncontrolledProp$1(propValue, defaultValue, handler) {
  var wasPropRef = reactExports.useRef(propValue !== void 0);
  var _useState = reactExports.useState(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, reactExports.useCallback(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled$1(props, config2) {
  return Object.keys(config2).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey$1(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose$1(_ref, [defaultKey$1(fieldName), fieldName].map(_toPropertyKey$1));
    var handlerName = config2[fieldName];
    var _useUncontrolledProp = useUncontrolledProp$1(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
const ownerDocument$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ownerDocument
}, Symbol.toStringTag, { value: "Module" }));
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property) {
  var css2 = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css2 += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css2 += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css2;
}
const css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: style
}, Symbol.toStringTag, { value: "Module" }));
const config = {
  disabled: false
};
var timeoutsShape = process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;
const TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context2) {
    var _this;
    _this = _React$Component.call(this, props, context2) || this;
    var parentGroup = context2;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === "undefined" ? PropTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  utils.__esModule = true;
  utils.getChildRef = getChildRef;
  utils.getReactVersion = getReactVersion;
  utils.isEscKey = isEscKey;
  var React2 = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function isEscKey(e) {
    return e.code === "Escape" || e.keyCode === 27;
  }
  function getReactVersion() {
    const parts = React2.version.split(".");
    return {
      major: +parts[0],
      minor: +parts[1],
      patch: +parts[2]
    };
  }
  function getChildRef(element) {
    if (!element || typeof element === "function") {
      return null;
    }
    const {
      major
    } = getReactVersion();
    const childRef = major >= 19 ? element.props.ref : element.ref;
    return childRef;
  }
  return utils;
}
var utilsExports = /* @__PURE__ */ requireUtils();
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const canUseDOM$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: canUseDOM
}, Symbol.toStringTag, { value: "Module" }));
var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
const addEventListener$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: addEventListener,
  get onceSupported() {
    return onceSupported;
  },
  get optionsSupported() {
    return optionsSupported;
  }
}, Symbol.toStringTag, { value: "Module" }));
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function() {
    removeEventListener(node, eventName, handler, options);
  };
}
const listen$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: listen
}, Symbol.toStringTag, { value: "Module" }));
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}
function parseDuration$1(node) {
  var str = style(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called) triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove = listen(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}
function parseDuration(node, property) {
  const str = style(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, "transitionDuration");
  const delay = parseDuration(element, "transitionDelay");
  const remove = transitionEnd(element, (e) => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null) return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
function triggerBrowserReflow(node) {
  node.offsetHeight;
}
const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs$1(refA, refB) {
  return reactExports.useMemo(() => mergeRefs(refA, refB), [refA, refB]);
}
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const TransitionWrapper = /* @__PURE__ */ React.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = reactExports.useRef(null);
  const mergedRef = useMergedRefs$1(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = reactExports.useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = reactExports.useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = reactExports.useCallback(normalize(onEntered), [onEntered]);
  const handleExit = reactExports.useCallback(normalize(onExit), [onExit]);
  const handleExiting = reactExports.useCallback(normalize(onExiting), [onExiting]);
  const handleExited = reactExports.useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = reactExports.useCallback(normalize(addEndListener), [addEndListener]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, {
        ...innerProps,
        ref: attachRef
      })
    ) : /* @__PURE__ */ React.cloneElement(children, {
      ref: attachRef
    })
  });
});
const MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(style(elem, margins[0]), 10) + // @ts-ignore
  parseInt(style(elem, margins[1]), 10);
}
const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
const Collapse = /* @__PURE__ */ React.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  in: inProp = false,
  timeout: timeout2 = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = reactExports.useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = reactExports.useMemo(() => createChainedFunction((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = reactExports.useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = reactExports.useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = reactExports.useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: utilsExports.getChildRef(children),
    in: inProp,
    timeout: timeout2,
    mountOnEnter,
    unmountOnExit,
    appear,
    children: (state, innerProps) => /* @__PURE__ */ React.cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
function useCommittedRef$1(value) {
  const ref = reactExports.useRef(value);
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback$1(fn) {
  const ref = useCommittedRef$1(fn);
  return reactExports.useCallback(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
const divWithClassName = (className) => /* @__PURE__ */ reactExports.forwardRef((p, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
  ...p,
  ref,
  className: classNames(p.className, className)
}));
var Anchor$1 = {};
var cjs = {};
var useCallbackRef$1 = {};
var hasRequiredUseCallbackRef;
function requireUseCallbackRef() {
  if (hasRequiredUseCallbackRef) return useCallbackRef$1;
  hasRequiredUseCallbackRef = 1;
  useCallbackRef$1.__esModule = true;
  useCallbackRef$1.default = useCallbackRef2;
  var _react = requireReact();
  function useCallbackRef2() {
    return (0, _react.useState)(null);
  }
  return useCallbackRef$1;
}
var useCommittedRef = {};
var hasRequiredUseCommittedRef;
function requireUseCommittedRef() {
  if (hasRequiredUseCommittedRef) return useCommittedRef;
  hasRequiredUseCommittedRef = 1;
  useCommittedRef.__esModule = true;
  useCommittedRef.default = void 0;
  var _react = requireReact();
  function useCommittedRef$12(value) {
    const ref = (0, _react.useRef)(value);
    (0, _react.useEffect)(() => {
      ref.current = value;
    }, [value]);
    return ref;
  }
  var _default = useCommittedRef$12;
  useCommittedRef.default = _default;
  return useCommittedRef;
}
var useEventCallback = {};
var hasRequiredUseEventCallback;
function requireUseEventCallback() {
  if (hasRequiredUseEventCallback) return useEventCallback;
  hasRequiredUseEventCallback = 1;
  useEventCallback.__esModule = true;
  useEventCallback.default = useEventCallback$12;
  var _react = requireReact();
  var _useCommittedRef = _interopRequireDefault(requireUseCommittedRef());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useEventCallback$12(fn) {
    const ref = (0, _useCommittedRef.default)(fn);
    return (0, _react.useCallback)(function(...args) {
      return ref.current && ref.current(...args);
    }, [ref]);
  }
  return useEventCallback;
}
var useEventListener = {};
var hasRequiredUseEventListener;
function requireUseEventListener() {
  if (hasRequiredUseEventListener) return useEventListener;
  hasRequiredUseEventListener = 1;
  useEventListener.__esModule = true;
  useEventListener.default = useEventListener$1;
  var _react = requireReact();
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useEventListener$1(eventTarget, event, listener, capture = false) {
    const handler = (0, _useEventCallback.default)(listener);
    (0, _react.useEffect)(() => {
      const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
      target.addEventListener(event, handler, capture);
      return () => target.removeEventListener(event, handler, capture);
    }, [eventTarget]);
  }
  return useEventListener;
}
var useGlobalListener = {};
var hasRequiredUseGlobalListener;
function requireUseGlobalListener() {
  if (hasRequiredUseGlobalListener) return useGlobalListener;
  hasRequiredUseGlobalListener = 1;
  useGlobalListener.__esModule = true;
  useGlobalListener.default = useGlobalListener$1;
  var _useEventListener = _interopRequireDefault(requireUseEventListener());
  var _react = requireReact();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useGlobalListener$1(event, handler, capture = false) {
    const documentTarget = (0, _react.useCallback)(() => document, []);
    return (0, _useEventListener.default)(documentTarget, event, handler, capture);
  }
  return useGlobalListener;
}
var useInterval = {};
var hasRequiredUseInterval;
function requireUseInterval() {
  if (hasRequiredUseInterval) return useInterval;
  hasRequiredUseInterval = 1;
  useInterval.__esModule = true;
  useInterval.default = void 0;
  var _react = requireReact();
  var _useCommittedRef = _interopRequireDefault(requireUseCommittedRef());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useInterval$1(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, _useCommittedRef.default)(fn);
    const pausedRef = (0, _useCommittedRef.default)(paused);
    const tick = () => {
      if (pausedRef.current) return;
      fnRef.current();
      schedule();
    };
    const schedule = () => {
      clearTimeout(handle);
      handle = setTimeout(tick, ms);
    };
    (0, _react.useEffect)(() => {
      if (runImmediately) {
        tick();
      } else {
        schedule();
      }
      return () => clearTimeout(handle);
    }, [paused, runImmediately]);
  }
  var _default = useInterval$1;
  useInterval.default = _default;
  return useInterval;
}
var useRafInterval = {};
var hasRequiredUseRafInterval;
function requireUseRafInterval() {
  if (hasRequiredUseRafInterval) return useRafInterval;
  hasRequiredUseRafInterval = 1;
  useRafInterval.__esModule = true;
  useRafInterval.default = void 0;
  var _react = requireReact();
  var _useCommittedRef = _interopRequireDefault(requireUseCommittedRef());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useRafInterval$1(fn, ms, paused = false) {
    let handle;
    let start = (/* @__PURE__ */ new Date()).getTime();
    const fnRef = (0, _useCommittedRef.default)(fn);
    const pausedRef = (0, _useCommittedRef.default)(paused);
    function loop() {
      const current = (/* @__PURE__ */ new Date()).getTime();
      const delta = current - start;
      if (pausedRef.current) return;
      if (delta >= ms && fnRef.current) {
        fnRef.current();
        start = (/* @__PURE__ */ new Date()).getTime();
      }
      cancelAnimationFrame(handle);
      handle = requestAnimationFrame(loop);
    }
    (0, _react.useEffect)(() => {
      handle = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(handle);
    }, []);
  }
  var _default = useRafInterval$1;
  useRafInterval.default = _default;
  return useRafInterval;
}
var useMergeState = {};
var hasRequiredUseMergeState;
function requireUseMergeState() {
  if (hasRequiredUseMergeState) return useMergeState;
  hasRequiredUseMergeState = 1;
  useMergeState.__esModule = true;
  useMergeState.default = useMergeState$1;
  var _react = requireReact();
  function useMergeState$1(initialState2) {
    const [state, setState] = (0, _react.useState)(initialState2);
    const updater = (0, _react.useCallback)((update) => {
      if (update === null) return;
      if (typeof update === "function") {
        setState((state2) => {
          const nextState = update(state2);
          return nextState == null ? state2 : Object.assign({}, state2, nextState);
        });
      } else {
        setState((state2) => Object.assign({}, state2, update));
      }
    }, [setState]);
    return [state, updater];
  }
  return useMergeState;
}
var useMergeStateFromProps = {};
var hasRequiredUseMergeStateFromProps;
function requireUseMergeStateFromProps() {
  if (hasRequiredUseMergeStateFromProps) return useMergeStateFromProps;
  hasRequiredUseMergeStateFromProps = 1;
  useMergeStateFromProps.__esModule = true;
  useMergeStateFromProps.default = useMergeStateFromProps$1;
  var _useMergeState = _interopRequireDefault(requireUseMergeState());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useMergeStateFromProps$1(props, gDSFP, initialState2) {
    const [state, setState] = (0, _useMergeState.default)(initialState2);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [state, setState];
  }
  return useMergeStateFromProps;
}
var useMounted = {};
var hasRequiredUseMounted;
function requireUseMounted() {
  if (hasRequiredUseMounted) return useMounted;
  hasRequiredUseMounted = 1;
  useMounted.__esModule = true;
  useMounted.default = useMounted$1;
  var _react = requireReact();
  function useMounted$1() {
    const mounted = (0, _react.useRef)(true);
    const isMounted = (0, _react.useRef)(() => mounted.current);
    (0, _react.useEffect)(() => {
      mounted.current = true;
      return () => {
        mounted.current = false;
      };
    }, []);
    return isMounted.current;
  }
  return useMounted;
}
var usePrevious = {};
var hasRequiredUsePrevious;
function requireUsePrevious() {
  if (hasRequiredUsePrevious) return usePrevious;
  hasRequiredUsePrevious = 1;
  usePrevious.__esModule = true;
  usePrevious.default = usePrevious$1;
  var _react = requireReact();
  function usePrevious$1(value) {
    const ref = (0, _react.useRef)(null);
    (0, _react.useEffect)(() => {
      ref.current = value;
    });
    return ref.current;
  }
  return usePrevious;
}
var useImage = {};
var hasRequiredUseImage;
function requireUseImage() {
  if (hasRequiredUseImage) return useImage;
  hasRequiredUseImage = 1;
  useImage.__esModule = true;
  useImage.default = useImage$1;
  var _react = requireReact();
  function useImage$1(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, _react.useState)({
      image: null,
      error: null
    });
    (0, _react.useEffect)(() => {
      if (!imageOrUrl) return void 0;
      let image;
      if (typeof imageOrUrl === "string") {
        image = new Image();
        if (crossOrigin) image.crossOrigin = crossOrigin;
        image.src = imageOrUrl;
      } else {
        image = imageOrUrl;
        if (image.complete && image.naturalHeight > 0) {
          setState({
            image,
            error: null
          });
          return;
        }
      }
      function onLoad() {
        setState({
          image,
          error: null
        });
      }
      function onError(error) {
        setState({
          image,
          error
        });
      }
      image.addEventListener("load", onLoad);
      image.addEventListener("error", onError);
      return () => {
        image.removeEventListener("load", onLoad);
        image.removeEventListener("error", onError);
      };
    }, [imageOrUrl, crossOrigin]);
    return state;
  }
  return useImage;
}
var useResizeObserver = {};
var useIsomorphicEffect$1 = {};
var hasRequiredUseIsomorphicEffect;
function requireUseIsomorphicEffect() {
  if (hasRequiredUseIsomorphicEffect) return useIsomorphicEffect$1;
  hasRequiredUseIsomorphicEffect = 1;
  useIsomorphicEffect$1.__esModule = true;
  useIsomorphicEffect$1.default = void 0;
  var _react = requireReact();
  const isReactNative2 = typeof commonjsGlobal !== "undefined" && // @ts-ignore
  commonjsGlobal.navigator && // @ts-ignore
  commonjsGlobal.navigator.product === "ReactNative";
  const isDOM2 = typeof document !== "undefined";
  var _default = isDOM2 || isReactNative2 ? _react.useLayoutEffect : _react.useEffect;
  useIsomorphicEffect$1.default = _default;
  return useIsomorphicEffect$1;
}
var hasRequiredUseResizeObserver;
function requireUseResizeObserver() {
  if (hasRequiredUseResizeObserver) return useResizeObserver;
  hasRequiredUseResizeObserver = 1;
  useResizeObserver.__esModule = true;
  useResizeObserver.default = useResizeObserver$1;
  var _react = requireReact();
  var _useIsomorphicEffect = _interopRequireDefault(requireUseIsomorphicEffect());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  const targetMap = /* @__PURE__ */ new WeakMap();
  let resizeObserver;
  function getResizeObserver() {
    return resizeObserver = resizeObserver || new window.ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const handler = targetMap.get(entry.target);
        if (handler) handler(entry.contentRect);
      });
    });
  }
  function useResizeObserver$1(element) {
    const [rect, setRect] = (0, _react.useState)(null);
    (0, _useIsomorphicEffect.default)(() => {
      if (!element) return;
      getResizeObserver().observe(element);
      setRect(element.getBoundingClientRect());
      targetMap.set(element, (rect2) => {
        setRect(rect2);
      });
      return () => {
        targetMap.delete(element);
      };
    }, [element]);
    return rect;
  }
  return useResizeObserver;
}
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  cjs.__esModule = true;
  var _useCallbackRef = _interopRequireDefault(requireUseCallbackRef());
  cjs.useCallbackRef = _useCallbackRef.default;
  var _useCommittedRef = _interopRequireDefault(requireUseCommittedRef());
  cjs.useCommittedRef = _useCommittedRef.default;
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  cjs.useEventCallback = _useEventCallback.default;
  var _useEventListener = _interopRequireDefault(requireUseEventListener());
  cjs.useEventListener = _useEventListener.default;
  var _useGlobalListener = _interopRequireDefault(requireUseGlobalListener());
  cjs.useGlobalListener = _useGlobalListener.default;
  var _useInterval = _interopRequireDefault(requireUseInterval());
  cjs.useInterval = _useInterval.default;
  var _useRafInterval = _interopRequireDefault(requireUseRafInterval());
  cjs.useRafInterval = _useRafInterval.default;
  var _useMergeState = _interopRequireDefault(requireUseMergeState());
  cjs.useMergeState = _useMergeState.default;
  var _useMergeStateFromProps = _interopRequireDefault(requireUseMergeStateFromProps());
  cjs.useMergeStateFromProps = _useMergeStateFromProps.default;
  var _useMounted = _interopRequireDefault(requireUseMounted());
  cjs.useMounted = _useMounted.default;
  var _usePrevious = _interopRequireDefault(requireUsePrevious());
  cjs.usePrevious = _usePrevious.default;
  var _useImage = _interopRequireDefault(requireUseImage());
  cjs.useImage = _useImage.default;
  var _useResizeObserver = _interopRequireDefault(requireUseResizeObserver());
  cjs.useResizeObserver = _useResizeObserver.default;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  return cjs;
}
var hasRequiredAnchor;
function requireAnchor() {
  if (hasRequiredAnchor) return Anchor$1;
  hasRequiredAnchor = 1;
  Anchor$1.__esModule = true;
  Anchor$1.default = void 0;
  Anchor$1.isTrivialHref = isTrivialHref;
  var React2 = _interopRequireWildcard(requireReact());
  var _hooks = requireCjs();
  var _Button = /* @__PURE__ */ requireButton();
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["onKeyDown"];
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  function isTrivialHref(href) {
    return !href || href.trim() === "#";
  }
  const Anchor2 = /* @__PURE__ */ React2.forwardRef((_ref, ref) => {
    let {
      onKeyDown
    } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const [buttonProps] = (0, _Button.useButtonProps)(Object.assign({
      tagName: "a"
    }, props));
    const handleKeyDown = (0, _hooks.useEventCallback)((e) => {
      buttonProps.onKeyDown(e);
      onKeyDown == null ? void 0 : onKeyDown(e);
    });
    if (isTrivialHref(props.href) || props.role === "button") {
      return /* @__PURE__ */ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref
      }, props, buttonProps, {
        onKeyDown: handleKeyDown
      }));
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)("a", Object.assign({
      ref
    }, props, {
      onKeyDown
    }));
  });
  Anchor2.displayName = "Anchor";
  Anchor$1.default = Anchor2;
  return Anchor$1;
}
var AnchorExports = /* @__PURE__ */ requireAnchor();
const Anchor = /* @__PURE__ */ getDefaultExportFromCjs(AnchorExports);
const fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
const Fade = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = reactExports.useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: utilsExports.getChildRef(children),
    children: (status, innerProps) => /* @__PURE__ */ reactExports.cloneElement(children, {
      ...innerProps,
      className: classNames("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = "Fade";
const propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": PropTypes.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: PropTypes.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: PropTypes.oneOf(["white"])
};
const CloseButton = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  variant,
  "aria-label": ariaLabel = "Close",
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
  ref,
  type: "button",
  className: classNames("btn-close", variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
const context$2 = /* @__PURE__ */ reactExports.createContext(null);
context$2.displayName = "CardHeaderContext";
function useUpdatedRef$1(value) {
  const valueRef = reactExports.useRef(value);
  valueRef.current = value;
  return valueRef;
}
function useWillUnmount$1(fn) {
  const onUnmount = useUpdatedRef$1(fn);
  reactExports.useEffect(() => () => onUnmount.current(), []);
}
const Container = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    ...props,
    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
var Dropdown$2 = {};
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
const querySelectorAll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qsa
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$3 = /* @__PURE__ */ getAugmentedNamespace(querySelectorAll);
const require$$1$3 = /* @__PURE__ */ getAugmentedNamespace(addEventListener$1);
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  const wasPropRef = reactExports.useRef(propValue !== void 0);
  const [stateValue, setState] = reactExports.useState(defaultValue);
  const isProp = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, reactExports.useCallback((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}
function useUncontrolled(props, config2) {
  return Object.keys(config2).reduce((result, fieldName) => {
    const _ref = result, _defaultKey = defaultKey(fieldName), {
      [_defaultKey]: defaultValue,
      [fieldName]: propsValue
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, [_defaultKey, fieldName].map(_toPropertyKey));
    const handlerName = config2[fieldName];
    const [value, handler] = useUncontrolledProp(propsValue, defaultValue, props[handlerName]);
    return Object.assign({}, rest, {
      [fieldName]: value,
      [handlerName]: handler
    });
  }, props);
}
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultKey,
  useUncontrolled,
  useUncontrolledProp
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$2 = /* @__PURE__ */ getAugmentedNamespace(esm);
var useForceUpdate = {};
var hasRequiredUseForceUpdate;
function requireUseForceUpdate() {
  if (hasRequiredUseForceUpdate) return useForceUpdate;
  hasRequiredUseForceUpdate = 1;
  useForceUpdate.__esModule = true;
  useForceUpdate.default = useForceUpdate$1;
  var _react = requireReact();
  function useForceUpdate$1() {
    const [, dispatch] = (0, _react.useReducer)((revision) => revision + 1, 0);
    return dispatch;
  }
  return useForceUpdate;
}
var DropdownContext$2 = {};
var hasRequiredDropdownContext;
function requireDropdownContext() {
  if (hasRequiredDropdownContext) return DropdownContext$2;
  hasRequiredDropdownContext = 1;
  DropdownContext$2.__esModule = true;
  DropdownContext$2.default = void 0;
  var React2 = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  const DropdownContext2 = /* @__PURE__ */ React2.createContext(null);
  DropdownContext$2.default = DropdownContext2;
  return DropdownContext$2;
}
var DropdownMenu$1 = {};
var usePopper = {};
var dist = {};
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  var has = Object.prototype.hasOwnProperty;
  function find(iter, tar, key) {
    for (key of iter.keys()) {
      if (dequal(key, tar)) return key;
    }
  }
  function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
      if (ctor === Date) return foo.getTime() === bar.getTime();
      if (ctor === RegExp) return foo.toString() === bar.toString();
      if (ctor === Array) {
        if ((len = foo.length) === bar.length) {
          while (len-- && dequal(foo[len], bar[len])) ;
        }
        return len === -1;
      }
      if (ctor === Set) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (len of foo) {
          tmp = len;
          if (tmp && typeof tmp === "object") {
            tmp = find(bar, tmp);
            if (!tmp) return false;
          }
          if (!bar.has(tmp)) return false;
        }
        return true;
      }
      if (ctor === Map) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (len of foo) {
          tmp = len[0];
          if (tmp && typeof tmp === "object") {
            tmp = find(bar, tmp);
            if (!tmp) return false;
          }
          if (!dequal(len[1], bar.get(tmp))) {
            return false;
          }
        }
        return true;
      }
      if (ctor === ArrayBuffer) {
        foo = new Uint8Array(foo);
        bar = new Uint8Array(bar);
      } else if (ctor === DataView) {
        if ((len = foo.byteLength) === bar.byteLength) {
          while (len-- && foo.getInt8(len) === bar.getInt8(len)) ;
        }
        return len === -1;
      }
      if (ArrayBuffer.isView(foo)) {
        if ((len = foo.byteLength) === bar.byteLength) {
          while (len-- && foo[len] === bar[len]) ;
        }
        return len === -1;
      }
      if (!ctor || typeof foo === "object") {
        len = 0;
        for (ctor in foo) {
          if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
          if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
        }
        return Object.keys(bar).length === len;
      }
    }
    return foo !== foo && bar !== bar;
  }
  dist.dequal = dequal;
  return dist;
}
var useSafeState = {};
var hasRequiredUseSafeState;
function requireUseSafeState() {
  if (hasRequiredUseSafeState) return useSafeState;
  hasRequiredUseSafeState = 1;
  useSafeState.__esModule = true;
  useSafeState.default = void 0;
  var _react = requireReact();
  var _useMounted = _interopRequireDefault(requireUseMounted());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useSafeState$1(state) {
    const isMounted = (0, _useMounted.default)();
    return [state[0], (0, _react.useCallback)((nextState) => {
      if (!isMounted()) return;
      return state[1](nextState);
    }, [isMounted, state[1]])];
  }
  var _default = useSafeState$1;
  useSafeState.default = _default;
  return useSafeState;
}
var popper = {};
var hasRequiredPopper;
function requirePopper() {
  if (hasRequiredPopper) return popper;
  hasRequiredPopper = 1;
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper$1 = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main2 = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main2, afterMain, beforeWrite, write, afterWrite];
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument2 = node.ownerDocument;
      return ownerDocument2 ? ownerDocument2.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function contains2(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css2 = getComputedStyle2(currentNode);
      if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains2(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper$1 : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper$1 ? reference : popper$1;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper$1 ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper$1 && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      placement: state.placement
    });
  }
  var popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state = fn({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  const createPopper = popperGenerator({
    defaultModifiers: [
      hide$1,
      popperOffsets$1,
      computeStyles$1,
      eventListeners,
      offset$1,
      flip$1,
      preventOverflow$1,
      arrow$1
    ]
  });
  popper.createPopper = createPopper;
  popper.placements = placements;
  return popper;
}
var hasRequiredUsePopper;
function requireUsePopper() {
  if (hasRequiredUsePopper) return usePopper;
  hasRequiredUsePopper = 1;
  usePopper.__esModule = true;
  usePopper.default = void 0;
  var _react = requireReact();
  var _dequal = requireDist();
  var _useSafeState = _interopRequireDefault(requireUseSafeState());
  var _popper = /* @__PURE__ */ requirePopper();
  const _excluded = ["enabled", "placement", "strategy", "modifiers"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  const disabledApplyStylesModifier = {
    name: "applyStyles",
    enabled: false,
    phase: "afterWrite",
    fn: () => void 0
  };
  const ariaDescribedByModifier = {
    name: "ariaDescribedBy",
    enabled: true,
    phase: "afterWrite",
    effect: ({
      state
    }) => () => {
      const {
        reference,
        popper: popper2
      } = state.elements;
      if ("removeAttribute" in reference) {
        const ids = (reference.getAttribute("aria-describedby") || "").split(",").filter((id) => id.trim() !== popper2.id);
        if (!ids.length) reference.removeAttribute("aria-describedby");
        else reference.setAttribute("aria-describedby", ids.join(","));
      }
    },
    fn: ({
      state
    }) => {
      var _popper$getAttribute;
      const {
        popper: popper2,
        reference
      } = state.elements;
      const role = (_popper$getAttribute = popper2.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
      if (popper2.id && role === "tooltip" && "setAttribute" in reference) {
        const ids = reference.getAttribute("aria-describedby");
        if (ids && ids.split(",").indexOf(popper2.id) !== -1) {
          return;
        }
        reference.setAttribute("aria-describedby", ids ? `${ids},${popper2.id}` : popper2.id);
      }
    }
  };
  const EMPTY_MODIFIERS = [];
  function usePopper$1(referenceElement, popperElement, _ref = {}) {
    let {
      enabled = true,
      placement = "bottom",
      strategy = "absolute",
      modifiers = EMPTY_MODIFIERS
    } = _ref, config2 = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const prevModifiers = (0, _react.useRef)(modifiers);
    const popperInstanceRef = (0, _react.useRef)();
    const update = (0, _react.useCallback)(() => {
      var _popperInstanceRef$cu;
      (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
    }, []);
    const forceUpdate = (0, _react.useCallback)(() => {
      var _popperInstanceRef$cu2;
      (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
    }, []);
    const [popperState, setState] = (0, _useSafeState.default)((0, _react.useState)({
      placement,
      update,
      forceUpdate,
      attributes: {},
      styles: {
        popper: {},
        arrow: {}
      }
    }));
    const updateModifier = (0, _react.useMemo)(() => ({
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: ({
        state
      }) => {
        const styles = {};
        const attributes = {};
        Object.keys(state.elements).forEach((element) => {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement
        });
      }
    }), [update, forceUpdate, setState]);
    const nextModifiers = (0, _react.useMemo)(() => {
      if (!(0, _dequal.dequal)(prevModifiers.current, modifiers)) {
        prevModifiers.current = modifiers;
      }
      return prevModifiers.current;
    }, [modifiers]);
    (0, _react.useEffect)(() => {
      if (!popperInstanceRef.current || !enabled) return;
      popperInstanceRef.current.setOptions({
        placement,
        strategy,
        modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
      });
    }, [strategy, placement, updateModifier, enabled, nextModifiers]);
    (0, _react.useEffect)(() => {
      if (!enabled || referenceElement == null || popperElement == null) {
        return void 0;
      }
      popperInstanceRef.current = (0, _popper.createPopper)(referenceElement, popperElement, Object.assign({}, config2, {
        placement,
        strategy,
        modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
      }));
      return () => {
        if (popperInstanceRef.current != null) {
          popperInstanceRef.current.destroy();
          popperInstanceRef.current = void 0;
          setState((s) => Object.assign({}, s, {
            attributes: {},
            styles: {
              popper: {}
            }
          }));
        }
      };
    }, [enabled, referenceElement, popperElement]);
    return popperState;
  }
  usePopper.default = usePopper$1;
  return usePopper;
}
var useClickOutside = {};
function contains(context2, node) {
  if (context2.contains) return context2.contains(node);
  if (context2.compareDocumentPosition) return context2 === node || !!(context2.compareDocumentPosition(node) & 16);
}
const contains$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contains
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(contains$1);
const require$$0$2 = /* @__PURE__ */ getAugmentedNamespace(listen$1);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(ownerDocument$1);
var hasRequiredUseClickOutside;
function requireUseClickOutside() {
  if (hasRequiredUseClickOutside) return useClickOutside;
  hasRequiredUseClickOutside = 1;
  useClickOutside.__esModule = true;
  useClickOutside.getRefTarget = useClickOutside.default = void 0;
  var _contains = _interopRequireDefault(require$$1$1);
  var _listen = _interopRequireDefault(require$$0$2);
  var _ownerDocument = _interopRequireDefault(require$$1);
  var _react = requireReact();
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _warning = _interopRequireDefault(requireWarning());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  const noop2 = () => {
  };
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  const getRefTarget = (ref) => ref && ("current" in ref ? ref.current : ref);
  useClickOutside.getRefTarget = getRefTarget;
  const InitialTriggerEvents = {
    click: "mousedown",
    mouseup: "mousedown",
    pointerup: "pointerdown"
  };
  function useClickOutside$1(ref, onClickOutside = noop2, {
    disabled,
    clickTrigger = "click"
  } = {}) {
    const preventMouseClickOutsideRef = (0, _react.useRef)(false);
    const waitingForTrigger = (0, _react.useRef)(false);
    const handleMouseCapture = (0, _react.useCallback)((e) => {
      const currentTarget = getRefTarget(ref);
      (0, _warning.default)(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
      preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _contains.default)(currentTarget, e.target) || waitingForTrigger.current;
      waitingForTrigger.current = false;
    }, [ref]);
    const handleInitialMouse = (0, _useEventCallback.default)((e) => {
      const currentTarget = getRefTarget(ref);
      if (currentTarget && (0, _contains.default)(currentTarget, e.target)) {
        waitingForTrigger.current = true;
      } else {
        waitingForTrigger.current = false;
      }
    });
    const handleMouse = (0, _useEventCallback.default)((e) => {
      if (!preventMouseClickOutsideRef.current) {
        onClickOutside(e);
      }
    });
    (0, _react.useEffect)(() => {
      var _ownerWindow$event, _ownerWindow$parent;
      if (disabled || ref == null) return void 0;
      const doc = (0, _ownerDocument.default)(getRefTarget(ref));
      const ownerWindow2 = doc.defaultView || window;
      let currentEvent = (_ownerWindow$event = ownerWindow2.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow2.parent) == null ? void 0 : _ownerWindow$parent.event;
      let removeInitialTriggerListener = null;
      if (InitialTriggerEvents[clickTrigger]) {
        removeInitialTriggerListener = (0, _listen.default)(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
      }
      const removeMouseCaptureListener = (0, _listen.default)(doc, clickTrigger, handleMouseCapture, true);
      const removeMouseListener = (0, _listen.default)(doc, clickTrigger, (e) => {
        if (e === currentEvent) {
          currentEvent = void 0;
          return;
        }
        handleMouse(e);
      });
      let mobileSafariHackListeners = [];
      if ("ontouchstart" in doc.documentElement) {
        mobileSafariHackListeners = [].slice.call(doc.body.children).map((el) => (0, _listen.default)(el, "mousemove", noop2));
      }
      return () => {
        removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
        removeMouseCaptureListener();
        removeMouseListener();
        mobileSafariHackListeners.forEach((remove) => remove());
      };
    }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
  }
  useClickOutside.default = useClickOutside$1;
  return useClickOutside;
}
var mergeOptionsWithPopperConfig = {};
var hasRequiredMergeOptionsWithPopperConfig;
function requireMergeOptionsWithPopperConfig() {
  if (hasRequiredMergeOptionsWithPopperConfig) return mergeOptionsWithPopperConfig;
  hasRequiredMergeOptionsWithPopperConfig = 1;
  mergeOptionsWithPopperConfig.__esModule = true;
  mergeOptionsWithPopperConfig.default = mergeOptionsWithPopperConfig$1;
  mergeOptionsWithPopperConfig.toModifierArray = toModifierArray;
  mergeOptionsWithPopperConfig.toModifierMap = toModifierMap;
  function toModifierMap(modifiers) {
    const result = {};
    if (!Array.isArray(modifiers)) {
      return modifiers || result;
    }
    modifiers == null ? void 0 : modifiers.forEach((m) => {
      result[m.name] = m;
    });
    return result;
  }
  function toModifierArray(map = {}) {
    if (Array.isArray(map)) return map;
    return Object.keys(map).map((k) => {
      map[k].name = k;
      return map[k];
    });
  }
  function mergeOptionsWithPopperConfig$1({
    enabled,
    enableEvents,
    placement,
    flip,
    offset,
    fixed,
    containerPadding,
    arrowElement,
    popperConfig = {}
  }) {
    var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
    const modifiers = toModifierMap(popperConfig.modifiers);
    return Object.assign({}, popperConfig, {
      placement,
      enabled,
      strategy: fixed ? "fixed" : popperConfig.strategy,
      modifiers: toModifierArray(Object.assign({}, modifiers, {
        eventListeners: {
          enabled: enableEvents,
          options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
        },
        preventOverflow: Object.assign({}, modifiers.preventOverflow, {
          options: containerPadding ? Object.assign({
            padding: containerPadding
          }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
        }),
        offset: {
          options: Object.assign({
            offset
          }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
        },
        arrow: Object.assign({}, modifiers.arrow, {
          enabled: !!arrowElement,
          options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
            element: arrowElement
          })
        }),
        flip: Object.assign({
          enabled: !!flip
        }, modifiers.flip)
      }))
    });
  }
  return mergeOptionsWithPopperConfig;
}
var hasRequiredDropdownMenu;
function requireDropdownMenu() {
  if (hasRequiredDropdownMenu) return DropdownMenu$1;
  hasRequiredDropdownMenu = 1;
  DropdownMenu$1.__esModule = true;
  DropdownMenu$1.default = void 0;
  DropdownMenu$1.useDropdownMenu = useDropdownMenu;
  var _react = _interopRequireWildcard(requireReact());
  var _useCallbackRef = _interopRequireDefault(requireUseCallbackRef());
  var _DropdownContext = _interopRequireDefault(/* @__PURE__ */ requireDropdownContext());
  var _usePopper = _interopRequireDefault(/* @__PURE__ */ requireUsePopper());
  var _useClickOutside = _interopRequireDefault(/* @__PURE__ */ requireUseClickOutside());
  var _mergeOptionsWithPopperConfig = _interopRequireDefault(/* @__PURE__ */ requireMergeOptionsWithPopperConfig());
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["children", "usePopper"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  const noop2 = () => {
  };
  function useDropdownMenu(options = {}) {
    const context2 = (0, _react.useContext)(_DropdownContext.default);
    const [arrowElement, attachArrowRef] = (0, _useCallbackRef.default)();
    const hasShownRef = (0, _react.useRef)(false);
    const {
      flip,
      offset,
      rootCloseEvent,
      fixed = false,
      placement: placementOverride,
      popperConfig = {},
      enableEventListeners = true,
      usePopper: shouldUsePopper = !!context2
    } = options;
    const show = (context2 == null ? void 0 : context2.show) == null ? !!options.show : context2.show;
    if (show && !hasShownRef.current) {
      hasShownRef.current = true;
    }
    const handleClose = (e) => {
      context2 == null ? void 0 : context2.toggle(false, e);
    };
    const {
      placement,
      setMenu,
      menuElement,
      toggleElement
    } = context2 || {};
    const popper2 = (0, _usePopper.default)(toggleElement, menuElement, (0, _mergeOptionsWithPopperConfig.default)({
      placement: placementOverride || placement || "bottom-start",
      enabled: shouldUsePopper,
      enableEvents: enableEventListeners == null ? show : enableEventListeners,
      offset,
      flip,
      fixed,
      arrowElement,
      popperConfig
    }));
    const menuProps = Object.assign({
      ref: setMenu || noop2,
      "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
    }, popper2.attributes.popper, {
      style: popper2.styles.popper
    });
    const metadata = {
      show,
      placement,
      hasShown: hasShownRef.current,
      toggle: context2 == null ? void 0 : context2.toggle,
      popper: shouldUsePopper ? popper2 : null,
      arrowProps: shouldUsePopper ? Object.assign({
        ref: attachArrowRef
      }, popper2.attributes.arrow, {
        style: popper2.styles.arrow
      }) : {}
    };
    (0, _useClickOutside.default)(menuElement, handleClose, {
      clickTrigger: rootCloseEvent,
      disabled: !show
    });
    return [menuProps, metadata];
  }
  function DropdownMenu2(_ref) {
    let {
      children,
      usePopper: usePopperProp = true
    } = _ref, options = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const [props, meta] = useDropdownMenu(Object.assign({}, options, {
      usePopper: usePopperProp
    }));
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: children(props, meta)
    });
  }
  DropdownMenu2.displayName = "DropdownMenu";
  DropdownMenu$1.default = DropdownMenu2;
  return DropdownMenu$1;
}
var DropdownToggle$1 = {};
var ssr = {};
var main = { exports: {} };
var SSRProvider_main = { exports: {} };
var hasRequiredSSRProvider_main;
function requireSSRProvider_main() {
  if (hasRequiredSSRProvider_main) return SSRProvider_main.exports;
  hasRequiredSSRProvider_main = 1;
  (function(module) {
    var $14Xyt$react = requireReact();
    function $parcel$interopDefault(a) {
      return a && a.__esModule ? a.default : a;
    }
    function $parcel$export(e, n, v, s) {
      Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
    }
    $parcel$export(module.exports, "SSRProvider", () => $97d95f6660b1bb14$export$9f8ac96af4b1b2ae);
    $parcel$export(module.exports, "useIsSSR", () => $97d95f6660b1bb14$export$535bd6ca7f90a273);
    $parcel$export(module.exports, "useSSRSafeId", () => $97d95f6660b1bb14$export$619500959fc48b26);
    const $97d95f6660b1bb14$var$defaultContext = {
      prefix: String(Math.round(Math.random() * 1e10)),
      current: 0
    };
    const $97d95f6660b1bb14$var$SSRContext = /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createContext($97d95f6660b1bb14$var$defaultContext);
    const $97d95f6660b1bb14$var$IsSSRContext = /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createContext(false);
    function $97d95f6660b1bb14$var$LegacySSRProvider(props) {
      let cur = (0, $14Xyt$react.useContext)($97d95f6660b1bb14$var$SSRContext);
      let counter = $97d95f6660b1bb14$var$useCounter(cur === $97d95f6660b1bb14$var$defaultContext);
      let [isSSR, setIsSSR] = (0, $14Xyt$react.useState)(true);
      let value = (0, $14Xyt$react.useMemo)(() => ({
        // If this is the first SSRProvider, start with an empty string prefix, otherwise
        // append and increment the counter.
        prefix: cur === $97d95f6660b1bb14$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
        current: 0
      }), [
        cur,
        counter
      ]);
      if (typeof document !== "undefined")
        (0, $14Xyt$react.useLayoutEffect)(() => {
          setIsSSR(false);
        }, []);
      return /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createElement($97d95f6660b1bb14$var$SSRContext.Provider, {
        value
      }, /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createElement($97d95f6660b1bb14$var$IsSSRContext.Provider, {
        value: isSSR
      }, props.children));
    }
    let $97d95f6660b1bb14$var$warnedAboutSSRProvider = false;
    function $97d95f6660b1bb14$export$9f8ac96af4b1b2ae(props) {
      if (typeof $parcel$interopDefault($14Xyt$react)["useId"] === "function") {
        if (process.env.NODE_ENV !== "test" && !$97d95f6660b1bb14$var$warnedAboutSSRProvider) {
          console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
          $97d95f6660b1bb14$var$warnedAboutSSRProvider = true;
        }
        return /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createElement($parcel$interopDefault($14Xyt$react).Fragment, null, props.children);
      }
      return /* @__PURE__ */ $parcel$interopDefault($14Xyt$react).createElement($97d95f6660b1bb14$var$LegacySSRProvider, props);
    }
    let $97d95f6660b1bb14$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
    let $97d95f6660b1bb14$var$componentIds = /* @__PURE__ */ new WeakMap();
    function $97d95f6660b1bb14$var$useCounter(isDisabled = false) {
      let ctx = (0, $14Xyt$react.useContext)($97d95f6660b1bb14$var$SSRContext);
      let ref = (0, $14Xyt$react.useRef)(null);
      if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $parcel$interopDefault($14Xyt$react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
          let prevComponentValue = $97d95f6660b1bb14$var$componentIds.get(currentOwner);
          if (prevComponentValue == null)
            $97d95f6660b1bb14$var$componentIds.set(currentOwner, {
              id: ctx.current,
              state: currentOwner.memoizedState
            });
          else if (currentOwner.memoizedState !== prevComponentValue.state) {
            ctx.current = prevComponentValue.id;
            $97d95f6660b1bb14$var$componentIds.delete(currentOwner);
          }
        }
        ref.current = ++ctx.current;
      }
      return ref.current;
    }
    function $97d95f6660b1bb14$var$useLegacySSRSafeId(defaultId) {
      let ctx = (0, $14Xyt$react.useContext)($97d95f6660b1bb14$var$SSRContext);
      if (ctx === $97d95f6660b1bb14$var$defaultContext && !$97d95f6660b1bb14$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
      let counter = $97d95f6660b1bb14$var$useCounter(!!defaultId);
      let prefix = ctx === $97d95f6660b1bb14$var$defaultContext && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ctx.prefix}`;
      return defaultId || `${prefix}-${counter}`;
    }
    function $97d95f6660b1bb14$var$useModernSSRSafeId(defaultId) {
      let id = $parcel$interopDefault($14Xyt$react).useId();
      let [didSSR] = (0, $14Xyt$react.useState)($97d95f6660b1bb14$export$535bd6ca7f90a273());
      let prefix = didSSR || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${$97d95f6660b1bb14$var$defaultContext.prefix}`;
      return defaultId || `${prefix}-${id}`;
    }
    const $97d95f6660b1bb14$export$619500959fc48b26 = typeof $parcel$interopDefault($14Xyt$react)["useId"] === "function" ? $97d95f6660b1bb14$var$useModernSSRSafeId : $97d95f6660b1bb14$var$useLegacySSRSafeId;
    function $97d95f6660b1bb14$var$getSnapshot() {
      return false;
    }
    function $97d95f6660b1bb14$var$getServerSnapshot() {
      return true;
    }
    function $97d95f6660b1bb14$var$subscribe(onStoreChange) {
      return () => {
      };
    }
    function $97d95f6660b1bb14$export$535bd6ca7f90a273() {
      if (typeof $parcel$interopDefault($14Xyt$react)["useSyncExternalStore"] === "function") return $parcel$interopDefault($14Xyt$react)["useSyncExternalStore"]($97d95f6660b1bb14$var$subscribe, $97d95f6660b1bb14$var$getSnapshot, $97d95f6660b1bb14$var$getServerSnapshot);
      return (0, $14Xyt$react.useContext)($97d95f6660b1bb14$var$IsSSRContext);
    }
  })(SSRProvider_main);
  return SSRProvider_main.exports;
}
var hasRequiredMain;
function requireMain() {
  if (hasRequiredMain) return main.exports;
  hasRequiredMain = 1;
  (function(module) {
    var $97d95f6660b1bb14$exports = /* @__PURE__ */ requireSSRProvider_main();
    function $parcel$export(e, n, v, s) {
      Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
    }
    $parcel$export(module.exports, "SSRProvider", () => $97d95f6660b1bb14$exports.SSRProvider);
    $parcel$export(module.exports, "useSSRSafeId", () => $97d95f6660b1bb14$exports.useSSRSafeId);
    $parcel$export(module.exports, "useIsSSR", () => $97d95f6660b1bb14$exports.useIsSSR);
  })(main);
  return main.exports;
}
var hasRequiredSsr;
function requireSsr() {
  if (hasRequiredSsr) return ssr;
  hasRequiredSsr = 1;
  ssr.__esModule = true;
  var _ssr = /* @__PURE__ */ requireMain();
  ssr.useSSRSafeId = _ssr.useSSRSafeId;
  ssr.useIsSSR = _ssr.useIsSSR;
  ssr.SSRProvider = _ssr.SSRProvider;
  return ssr;
}
var hasRequiredDropdownToggle;
function requireDropdownToggle() {
  if (hasRequiredDropdownToggle) return DropdownToggle$1;
  hasRequiredDropdownToggle = 1;
  DropdownToggle$1.__esModule = true;
  DropdownToggle$1.isRoleMenu = DropdownToggle$1.default = void 0;
  DropdownToggle$1.useDropdownToggle = useDropdownToggle;
  var _react = _interopRequireWildcard(requireReact());
  var _ssr = /* @__PURE__ */ requireSsr();
  var _DropdownContext = _interopRequireDefault(/* @__PURE__ */ requireDropdownContext());
  var _jsxRuntime = requireJsxRuntime();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  const isRoleMenu = (el) => {
    var _el$getAttribute;
    return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
  };
  DropdownToggle$1.isRoleMenu = isRoleMenu;
  const noop2 = () => {
  };
  function useDropdownToggle() {
    const id = (0, _ssr.useSSRSafeId)();
    const {
      show = false,
      toggle = noop2,
      setToggle,
      menuElement
    } = (0, _react.useContext)(_DropdownContext.default) || {};
    const handleClick = (0, _react.useCallback)((e) => {
      toggle(!show, e);
    }, [show, toggle]);
    const props = {
      id,
      ref: setToggle || noop2,
      onClick: handleClick,
      "aria-expanded": !!show
    };
    if (menuElement && isRoleMenu(menuElement)) {
      props["aria-haspopup"] = true;
    }
    return [props, {
      show,
      toggle
    }];
  }
  function DropdownToggle2({
    children
  }) {
    const [props, meta] = useDropdownToggle();
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: children(props, meta)
    });
  }
  DropdownToggle2.displayName = "DropdownToggle";
  DropdownToggle$1.default = DropdownToggle2;
  return DropdownToggle$1;
}
var DropdownItem$1 = {};
var SelectableContext$1 = {};
var hasRequiredSelectableContext;
function requireSelectableContext() {
  if (hasRequiredSelectableContext) return SelectableContext$1;
  hasRequiredSelectableContext = 1;
  SelectableContext$1.__esModule = true;
  SelectableContext$1.makeEventKey = SelectableContext$1.default = void 0;
  var React2 = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  const SelectableContext2 = /* @__PURE__ */ React2.createContext(null);
  const makeEventKey = (eventKey, href = null) => {
    if (eventKey != null) return String(eventKey);
    return href || null;
  };
  SelectableContext$1.makeEventKey = makeEventKey;
  SelectableContext$1.default = SelectableContext2;
  return SelectableContext$1;
}
var NavContext = {};
var hasRequiredNavContext;
function requireNavContext() {
  if (hasRequiredNavContext) return NavContext;
  hasRequiredNavContext = 1;
  NavContext.__esModule = true;
  NavContext.default = void 0;
  var React2 = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  const NavContext$1 = /* @__PURE__ */ React2.createContext(null);
  NavContext$1.displayName = "NavContext";
  NavContext.default = NavContext$1;
  return NavContext;
}
var DataKey = {};
var hasRequiredDataKey;
function requireDataKey() {
  if (hasRequiredDataKey) return DataKey;
  hasRequiredDataKey = 1;
  DataKey.__esModule = true;
  DataKey.PROPERTY_PREFIX = DataKey.ATTRIBUTE_PREFIX = void 0;
  DataKey.dataAttr = dataAttr;
  DataKey.dataProp = dataProp;
  const ATTRIBUTE_PREFIX = DataKey.ATTRIBUTE_PREFIX = `data-rr-ui-`;
  const PROPERTY_PREFIX = DataKey.PROPERTY_PREFIX = `rrUi`;
  function dataAttr(property) {
    return `${ATTRIBUTE_PREFIX}${property}`;
  }
  function dataProp(property) {
    return `${PROPERTY_PREFIX}${property}`;
  }
  return DataKey;
}
var hasRequiredDropdownItem;
function requireDropdownItem() {
  if (hasRequiredDropdownItem) return DropdownItem$1;
  hasRequiredDropdownItem = 1;
  DropdownItem$1.__esModule = true;
  DropdownItem$1.default = void 0;
  DropdownItem$1.useDropdownItem = useDropdownItem;
  var _react = _interopRequireWildcard(requireReact());
  var React2 = _react;
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _SelectableContext = _interopRequireWildcard(/* @__PURE__ */ requireSelectableContext());
  var _NavContext = _interopRequireDefault(/* @__PURE__ */ requireNavContext());
  var _Button = _interopRequireDefault(/* @__PURE__ */ requireButton());
  var _DataKey = /* @__PURE__ */ requireDataKey();
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["eventKey", "disabled", "onClick", "active", "as"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  function useDropdownItem({
    key,
    href,
    active,
    disabled,
    onClick
  }) {
    const onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
    const navContext = (0, _react.useContext)(_NavContext.default);
    const {
      activeKey
    } = navContext || {};
    const eventKey = (0, _SelectableContext.makeEventKey)(key, href);
    const isActive = active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === eventKey : active;
    const handleClick = (0, _useEventCallback.default)((event) => {
      if (disabled) return;
      onClick == null ? void 0 : onClick(event);
      if (onSelectCtx && !event.isPropagationStopped()) {
        onSelectCtx(eventKey, event);
      }
    });
    return [{
      onClick: handleClick,
      "aria-disabled": disabled || void 0,
      "aria-selected": isActive,
      [(0, _DataKey.dataAttr)("dropdown-item")]: ""
    }, {
      isActive
    }];
  }
  const DropdownItem2 = /* @__PURE__ */ React2.forwardRef((_ref, ref) => {
    let {
      eventKey,
      disabled,
      onClick,
      active,
      as: Component = _Button.default
    } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const [dropdownItemProps] = useDropdownItem({
      key: eventKey,
      href: props.href,
      disabled,
      onClick,
      active
    });
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, {
      ref
    }, dropdownItemProps));
  });
  DropdownItem2.displayName = "DropdownItem";
  DropdownItem$1.default = DropdownItem2;
  return DropdownItem$1;
}
var useWindow = {};
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(canUseDOM$1);
var hasRequiredUseWindow;
function requireUseWindow() {
  if (hasRequiredUseWindow) return useWindow;
  hasRequiredUseWindow = 1;
  useWindow.__esModule = true;
  useWindow.WindowProvider = void 0;
  useWindow.default = useWindow$1;
  var _react = requireReact();
  var _canUseDOM = _interopRequireDefault(require$$2);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  const Context = /* @__PURE__ */ (0, _react.createContext)(_canUseDOM.default ? window : void 0);
  useWindow.WindowProvider = Context.Provider;
  function useWindow$1() {
    return (0, _react.useContext)(Context);
  }
  return useWindow;
}
var hasRequiredDropdown;
function requireDropdown() {
  if (hasRequiredDropdown) return Dropdown$2;
  hasRequiredDropdown = 1;
  Dropdown$2.__esModule = true;
  Dropdown$2.default = void 0;
  var _querySelectorAll = _interopRequireDefault(require$$0$3);
  var _addEventListener = _interopRequireDefault(require$$1$3);
  var _react = _interopRequireWildcard(requireReact());
  var _uncontrollable = require$$1$2;
  var _usePrevious = _interopRequireDefault(requireUsePrevious());
  var _useForceUpdate = _interopRequireDefault(requireUseForceUpdate());
  var _useEventListener = _interopRequireDefault(requireUseEventListener());
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _DropdownContext = _interopRequireDefault(/* @__PURE__ */ requireDropdownContext());
  var _DropdownMenu = _interopRequireDefault(/* @__PURE__ */ requireDropdownMenu());
  var _DropdownToggle = _interopRequireWildcard(/* @__PURE__ */ requireDropdownToggle());
  var _DropdownItem = _interopRequireDefault(/* @__PURE__ */ requireDropdownItem());
  var _SelectableContext = _interopRequireDefault(/* @__PURE__ */ requireSelectableContext());
  var _DataKey = /* @__PURE__ */ requireDataKey();
  var _useWindow = _interopRequireDefault(/* @__PURE__ */ requireUseWindow());
  var _jsxRuntime = requireJsxRuntime();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function useRefWithUpdate() {
    const forceUpdate = (0, _useForceUpdate.default)();
    const ref = (0, _react.useRef)(null);
    const attachRef = (0, _react.useCallback)((element) => {
      ref.current = element;
      forceUpdate();
    }, [forceUpdate]);
    return [ref, attachRef];
  }
  function Dropdown2({
    defaultShow,
    show: rawShow,
    onSelect,
    onToggle: rawOnToggle,
    itemSelector = `* [${(0, _DataKey.dataAttr)("dropdown-item")}]`,
    focusFirstItemOnShow,
    placement = "bottom-start",
    children
  }) {
    const window2 = (0, _useWindow.default)();
    const [show, onToggle] = (0, _uncontrollable.useUncontrolledProp)(rawShow, defaultShow, rawOnToggle);
    const [menuRef, setMenu] = useRefWithUpdate();
    const menuElement = menuRef.current;
    const [toggleRef, setToggle] = useRefWithUpdate();
    const toggleElement = toggleRef.current;
    const lastShow = (0, _usePrevious.default)(show);
    const lastSourceEvent = (0, _react.useRef)(null);
    const focusInDropdown = (0, _react.useRef)(false);
    const onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
    const toggle = (0, _react.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
      onToggle(nextShow, {
        originalEvent: event,
        source
      });
    }, [onToggle]);
    const handleSelect = (0, _useEventCallback.default)((key, event) => {
      onSelect == null ? void 0 : onSelect(key, event);
      toggle(false, event, "select");
      if (!event.isPropagationStopped()) {
        onSelectCtx == null ? void 0 : onSelectCtx(key, event);
      }
    });
    const context2 = (0, _react.useMemo)(() => ({
      toggle,
      placement,
      show,
      menuElement,
      toggleElement,
      setMenu,
      setToggle
    }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
    if (menuElement && lastShow && !show) {
      focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
    }
    const focusToggle = (0, _useEventCallback.default)(() => {
      if (toggleElement && toggleElement.focus) {
        toggleElement.focus();
      }
    });
    const maybeFocusFirst = (0, _useEventCallback.default)(() => {
      const type = lastSourceEvent.current;
      let focusType = focusFirstItemOnShow;
      if (focusType == null) {
        focusType = menuRef.current && (0, _DropdownToggle.isRoleMenu)(menuRef.current) ? "keyboard" : false;
      }
      if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
        return;
      }
      const first = (0, _querySelectorAll.default)(menuRef.current, itemSelector)[0];
      if (first && first.focus) first.focus();
    });
    (0, _react.useEffect)(() => {
      if (show) maybeFocusFirst();
      else if (focusInDropdown.current) {
        focusInDropdown.current = false;
        focusToggle();
      }
    }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
    (0, _react.useEffect)(() => {
      lastSourceEvent.current = null;
    });
    const getNextFocusedChild = (current, offset) => {
      if (!menuRef.current) return null;
      const items = (0, _querySelectorAll.default)(menuRef.current, itemSelector);
      let index = items.indexOf(current) + offset;
      index = Math.max(0, Math.min(index, items.length));
      return items[index];
    };
    (0, _useEventListener.default)((0, _react.useCallback)(() => window2.document, [window2]), "keydown", (event) => {
      var _menuRef$current, _toggleRef$current;
      const {
        key
      } = event;
      const target = event.target;
      const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
      const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
      const isInput = /input|textarea/i.test(target.tagName);
      if (isInput && (key === " " || key !== "Escape" && fromMenu || key === "Escape" && target.type === "search")) {
        return;
      }
      if (!fromMenu && !fromToggle) {
        return;
      }
      if (key === "Tab" && (!menuRef.current || !show)) {
        return;
      }
      lastSourceEvent.current = event.type;
      const meta = {
        originalEvent: event,
        source: event.type
      };
      switch (key) {
        case "ArrowUp": {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }
        case "ArrowDown":
          event.preventDefault();
          if (!show) {
            onToggle(true, meta);
          } else {
            const next = getNextFocusedChild(target, 1);
            if (next && next.focus) next.focus();
          }
          return;
        case "Tab":
          (0, _addEventListener.default)(target.ownerDocument, "keyup", (e) => {
            var _menuRef$current2;
            if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
              onToggle(false, meta);
            }
          }, {
            once: true
          });
          break;
        case "Escape":
          if (key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
          }
          onToggle(false, meta);
          break;
      }
    });
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_SelectableContext.default.Provider, {
      value: handleSelect,
      children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(_DropdownContext.default.Provider, {
        value: context2,
        children
      })
    });
  }
  Dropdown2.displayName = "Dropdown";
  Dropdown2.Menu = _DropdownMenu.default;
  Dropdown2.Toggle = _DropdownToggle.default;
  Dropdown2.Item = _DropdownItem.default;
  Dropdown$2.default = Dropdown2;
  return Dropdown$2;
}
var DropdownExports = /* @__PURE__ */ requireDropdown();
const BaseDropdown = /* @__PURE__ */ getDefaultExportFromCjs(DropdownExports);
const DropdownContext$1 = /* @__PURE__ */ reactExports.createContext({});
DropdownContext$1.displayName = "DropdownContext";
const DropdownDivider = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "hr",
  role = "separator",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-divider");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    role,
    ...props
  });
});
DropdownDivider.displayName = "DropdownDivider";
const DropdownHeader = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  role = "heading",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-header");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    role,
    ...props
  });
});
DropdownHeader.displayName = "DropdownHeader";
var DropdownItemExports = /* @__PURE__ */ requireDropdownItem();
const DropdownItem = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component = Anchor,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = DropdownItemExports.useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: classNames(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem.displayName = "DropdownItem";
const DropdownItemText = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-item-text");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
DropdownItemText.displayName = "DropdownItemText";
var DropdownMenuExports = /* @__PURE__ */ requireDropdownMenu();
const isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
const isDOM = typeof document !== "undefined";
const useIsomorphicEffect = isDOM || isReactNative ? reactExports.useLayoutEffect : reactExports.useEffect;
const context$1 = /* @__PURE__ */ reactExports.createContext(null);
context$1.displayName = "InputGroupContext";
const context = /* @__PURE__ */ reactExports.createContext(null);
context.displayName = "NavbarContext";
function useWrappedRefWithWarning(ref, componentName) {
  if (!(process.env.NODE_ENV !== "production")) return ref;
  const warningRef = reactExports.useCallback((refValue) => {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? invariant(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : invariant(false) : void 0;
  }, [componentName]);
  return useMergedRefs$1(warningRef, ref);
}
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up") placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end") placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start") placement = alignEnd ? leftEnd : leftStart;
  else if (dropDirection === "down-centered") placement = "bottom";
  else if (dropDirection === "up-centered") placement = "top";
  return placement;
}
const DropdownMenu = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip = true,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = reactExports.useContext(context);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = reactExports.useContext(DropdownContext$1);
  align = align || contextAlign;
  const isInputGroup = reactExports.useContext(context$1);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? warning(keys.length === 1, "There should only be 1 breakpoint when passing an object to `align`") : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper: popper2,
    show,
    toggle
  }] = DropdownMenuExports.useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs$1(useWrappedRefWithWarning(ref, "DropdownMenu"), menuProps.ref);
  useIsomorphicEffect(() => {
    if (show) popper2 == null || popper2.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup) return null;
  if (typeof Component !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style2 = props.style;
  if (popper2 != null && popper2.placement) {
    style2 = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper2.placement;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ...menuProps,
    style: style2,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: classNames(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu.displayName = "DropdownMenu";
var DropdownContextExports = /* @__PURE__ */ requireDropdownContext();
const DropdownContext = /* @__PURE__ */ getDefaultExportFromCjs(DropdownContextExports);
var DropdownToggleExports = /* @__PURE__ */ requireDropdownToggle();
const DropdownToggle = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = Button,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = reactExports.useContext(DropdownContext);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = DropdownToggleExports.useDropdownToggle();
  toggleProps.ref = useMergedRefs$1(toggleProps.ref, useWrappedRefWithWarning(ref, "DropdownToggle"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    className: classNames(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle.displayName = "DropdownToggle";
const Dropdown = /* @__PURE__ */ reactExports.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop = "down",
    show,
    className,
    align = "start",
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    navbar: _4,
    autoClose = true,
    ...props
  } = useUncontrolled$1(pProps, {
    show: "onToggle"
  });
  const isInputGroup = reactExports.useContext(context$1);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false) return source === "click";
    if (autoClose === "inside") return source !== "rootClose";
    if (autoClose === "outside") return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback$1((nextShow, meta) => {
    var _meta$originalEvent;
    const isToggleButton = (_meta$originalEvent = meta.originalEvent) == null || (_meta$originalEvent = _meta$originalEvent.target) == null ? void 0 : _meta$originalEvent.classList.contains("dropdown-toggle");
    if (isToggleButton && meta.source === "mousedown") {
      return;
    }
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape")) meta.source = "rootClose";
    if (isClosingPermitted(meta.source)) onToggle == null || onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = reactExports.useMemo(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    "down-centered": `${prefix}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownContext$1.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BaseDropdown, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
        ...props,
        ref,
        className: classNames(className, show && "show", directionClasses[drop])
      })
    })
  });
});
Dropdown.displayName = "Dropdown";
const Dropdown$1 = Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});
var Nav$2 = {};
var useMergedRefs = {};
var hasRequiredUseMergedRefs;
function requireUseMergedRefs() {
  if (hasRequiredUseMergedRefs) return useMergedRefs;
  hasRequiredUseMergedRefs = 1;
  useMergedRefs.__esModule = true;
  useMergedRefs.default = void 0;
  useMergedRefs.mergeRefs = mergeRefs2;
  var _react = requireReact();
  const toFnRef2 = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
    ref.current = value;
  };
  function mergeRefs2(refA, refB) {
    const a = toFnRef2(refA);
    const b = toFnRef2(refB);
    return (value) => {
      if (a) a(value);
      if (b) b(value);
    };
  }
  function useMergedRefs$12(refA, refB) {
    return (0, _react.useMemo)(() => mergeRefs2(refA, refB), [refA, refB]);
  }
  var _default = useMergedRefs$12;
  useMergedRefs.default = _default;
  return useMergedRefs;
}
var TabContext = {};
var hasRequiredTabContext;
function requireTabContext() {
  if (hasRequiredTabContext) return TabContext;
  hasRequiredTabContext = 1;
  TabContext.__esModule = true;
  TabContext.default = void 0;
  var React2 = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  const TabContext$1 = /* @__PURE__ */ React2.createContext(null);
  TabContext.default = TabContext$1;
  return TabContext;
}
var NavItem$1 = {};
var hasRequiredNavItem;
function requireNavItem() {
  if (hasRequiredNavItem) return NavItem$1;
  hasRequiredNavItem = 1;
  NavItem$1.__esModule = true;
  NavItem$1.default = void 0;
  NavItem$1.useNavItem = useNavItem;
  var _react = _interopRequireWildcard(requireReact());
  var React2 = _react;
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _NavContext = _interopRequireDefault(/* @__PURE__ */ requireNavContext());
  var _SelectableContext = _interopRequireWildcard(/* @__PURE__ */ requireSelectableContext());
  var _Button = _interopRequireDefault(/* @__PURE__ */ requireButton());
  var _DataKey = /* @__PURE__ */ requireDataKey();
  var _TabContext = _interopRequireDefault(/* @__PURE__ */ requireTabContext());
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["as", "active", "eventKey"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  function useNavItem({
    key,
    onClick,
    active,
    id,
    role,
    disabled
  }) {
    const parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
    const navContext = (0, _react.useContext)(_NavContext.default);
    const tabContext = (0, _react.useContext)(_TabContext.default);
    let isActive = active;
    const props = {
      role
    };
    if (navContext) {
      if (!role && navContext.role === "tablist") props.role = "tab";
      const contextControllerId = navContext.getControllerId(key != null ? key : null);
      const contextControlledId = navContext.getControlledId(key != null ? key : null);
      props[(0, _DataKey.dataAttr)("event-key")] = key;
      props.id = contextControllerId || id;
      isActive = active == null && key != null ? navContext.activeKey === key : active;
      if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
    }
    if (props.role === "tab") {
      props["aria-selected"] = isActive;
      if (!isActive) {
        props.tabIndex = -1;
      }
      if (disabled) {
        props.tabIndex = -1;
        props["aria-disabled"] = true;
      }
    }
    props.onClick = (0, _useEventCallback.default)((e) => {
      if (disabled) return;
      onClick == null ? void 0 : onClick(e);
      if (key == null) {
        return;
      }
      if (parentOnSelect && !e.isPropagationStopped()) {
        parentOnSelect(key, e);
      }
    });
    return [props, {
      isActive
    }];
  }
  const NavItem2 = /* @__PURE__ */ React2.forwardRef((_ref, ref) => {
    let {
      as: Component = _Button.default,
      active,
      eventKey
    } = _ref, options = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const [props, meta] = useNavItem(Object.assign({
      key: (0, _SelectableContext.makeEventKey)(eventKey, options.href),
      active
    }, options));
    props[(0, _DataKey.dataAttr)("active")] = meta.isActive;
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(Component, Object.assign({}, options, props, {
      ref
    }));
  });
  NavItem2.displayName = "NavItem";
  NavItem$1.default = NavItem2;
  return NavItem$1;
}
var hasRequiredNav;
function requireNav() {
  if (hasRequiredNav) return Nav$2;
  hasRequiredNav = 1;
  Nav$2.__esModule = true;
  Nav$2.default = void 0;
  var _querySelectorAll = _interopRequireDefault(require$$0$3);
  var _react = _interopRequireWildcard(requireReact());
  var React2 = _react;
  var _useForceUpdate = _interopRequireDefault(requireUseForceUpdate());
  var _useMergedRefs = _interopRequireDefault(requireUseMergedRefs());
  var _NavContext = _interopRequireDefault(/* @__PURE__ */ requireNavContext());
  var _SelectableContext = _interopRequireWildcard(/* @__PURE__ */ requireSelectableContext());
  var _TabContext = _interopRequireDefault(/* @__PURE__ */ requireTabContext());
  var _DataKey = /* @__PURE__ */ requireDataKey();
  var _NavItem = _interopRequireDefault(/* @__PURE__ */ requireNavItem());
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  const noop2 = () => {
  };
  const EVENT_KEY_ATTR = (0, _DataKey.dataAttr)("event-key");
  const Nav2 = /* @__PURE__ */ React2.forwardRef((_ref, ref) => {
    let {
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = "div",
      onSelect,
      activeKey,
      role,
      onKeyDown
    } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const forceUpdate = (0, _useForceUpdate.default)();
    const needsRefocusRef = (0, _react.useRef)(false);
    const parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
    const tabContext = (0, _react.useContext)(_TabContext.default);
    let getControlledId, getControllerId;
    if (tabContext) {
      role = role || "tablist";
      activeKey = tabContext.activeKey;
      getControlledId = tabContext.getControlledId;
      getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, _react.useRef)(null);
    const getNextActiveTab = (offset) => {
      const currentListNode = listNode.current;
      if (!currentListNode) return null;
      const items = (0, _querySelectorAll.default)(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
      const activeChild = currentListNode.querySelector("[aria-selected=true]");
      if (!activeChild || activeChild !== document.activeElement) return null;
      const index = items.indexOf(activeChild);
      if (index === -1) return null;
      let nextIndex = index + offset;
      if (nextIndex >= items.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = items.length - 1;
      return items[nextIndex];
    };
    const handleSelect = (key, event) => {
      if (key == null) return;
      onSelect == null ? void 0 : onSelect(key, event);
      parentOnSelect == null ? void 0 : parentOnSelect(key, event);
    };
    const handleKeyDown = (event) => {
      onKeyDown == null ? void 0 : onKeyDown(event);
      if (!tabContext) {
        return;
      }
      let nextActiveChild;
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
          nextActiveChild = getNextActiveTab(-1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          nextActiveChild = getNextActiveTab(1);
          break;
        default:
          return;
      }
      if (!nextActiveChild) return;
      event.preventDefault();
      handleSelect(nextActiveChild.dataset[(0, _DataKey.dataProp)("EventKey")] || null, event);
      needsRefocusRef.current = true;
      forceUpdate();
    };
    (0, _react.useEffect)(() => {
      if (listNode.current && needsRefocusRef.current) {
        const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
        activeChild == null ? void 0 : activeChild.focus();
      }
      needsRefocusRef.current = false;
    });
    const mergedRef = (0, _useMergedRefs.default)(ref, listNode);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_SelectableContext.default.Provider, {
      value: handleSelect,
      children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(_NavContext.default.Provider, {
        value: {
          role,
          // used by NavLink to determine it's role
          activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
          getControlledId: getControlledId || noop2,
          getControllerId: getControllerId || noop2
        },
        children: /* @__PURE__ */ (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, {
          onKeyDown: handleKeyDown,
          ref: mergedRef,
          role
        }))
      })
    });
  });
  Nav2.displayName = "Nav";
  Nav$2.default = Object.assign(Nav2, {
    Item: _NavItem.default
  });
  return Nav$2;
}
var NavExports = /* @__PURE__ */ requireNav();
const BaseNav = /* @__PURE__ */ getDefaultExportFromCjs(NavExports);
var NavItemExports = /* @__PURE__ */ requireNavItem();
var SelectableContextExports = /* @__PURE__ */ requireSelectableContext();
const SelectableContext = /* @__PURE__ */ getDefaultExportFromCjs(SelectableContextExports);
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
function useCallbackRef() {
  return reactExports.useState(null);
}
var Modal$2 = {};
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}
const activeElement$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: activeElement
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(activeElement$1);
var useWillUnmount = {};
var useUpdatedRef = {};
var hasRequiredUseUpdatedRef;
function requireUseUpdatedRef() {
  if (hasRequiredUseUpdatedRef) return useUpdatedRef;
  hasRequiredUseUpdatedRef = 1;
  useUpdatedRef.__esModule = true;
  useUpdatedRef.default = useUpdatedRef$12;
  var _react = requireReact();
  function useUpdatedRef$12(value) {
    const valueRef = (0, _react.useRef)(value);
    valueRef.current = value;
    return valueRef;
  }
  return useUpdatedRef;
}
var hasRequiredUseWillUnmount;
function requireUseWillUnmount() {
  if (hasRequiredUseWillUnmount) return useWillUnmount;
  hasRequiredUseWillUnmount = 1;
  useWillUnmount.__esModule = true;
  useWillUnmount.default = useWillUnmount$12;
  var _useUpdatedRef = _interopRequireDefault(requireUseUpdatedRef());
  var _react = requireReact();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function useWillUnmount$12(fn) {
    const onUnmount = (0, _useUpdatedRef.default)(fn);
    (0, _react.useEffect)(() => () => onUnmount.current(), []);
  }
  return useWillUnmount;
}
var ModalManager$1 = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(css);
var getScrollbarWidth = {};
var hasRequiredGetScrollbarWidth;
function requireGetScrollbarWidth() {
  if (hasRequiredGetScrollbarWidth) return getScrollbarWidth;
  hasRequiredGetScrollbarWidth = 1;
  getScrollbarWidth.__esModule = true;
  getScrollbarWidth.default = getBodyScrollbarWidth;
  function getBodyScrollbarWidth(ownerDocument2 = document) {
    const window2 = ownerDocument2.defaultView;
    return Math.abs(window2.innerWidth - ownerDocument2.documentElement.clientWidth);
  }
  return getScrollbarWidth;
}
var hasRequiredModalManager;
function requireModalManager() {
  if (hasRequiredModalManager) return ModalManager$1;
  hasRequiredModalManager = 1;
  ModalManager$1.__esModule = true;
  ModalManager$1.default = ModalManager$1.OPEN_DATA_ATTRIBUTE = void 0;
  var _css = _interopRequireDefault(require$$0);
  var _DataKey = /* @__PURE__ */ requireDataKey();
  var _getScrollbarWidth = _interopRequireDefault(/* @__PURE__ */ requireGetScrollbarWidth());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  const OPEN_DATA_ATTRIBUTE = ModalManager$1.OPEN_DATA_ATTRIBUTE = (0, _DataKey.dataAttr)("modal-open");
  class ModalManager2 {
    constructor({
      ownerDocument: ownerDocument2,
      handleContainerOverflow = true,
      isRTL = false
    } = {}) {
      this.handleContainerOverflow = handleContainerOverflow;
      this.isRTL = isRTL;
      this.modals = [];
      this.ownerDocument = ownerDocument2;
    }
    getScrollbarWidth() {
      return (0, _getScrollbarWidth.default)(this.ownerDocument);
    }
    getElement() {
      return (this.ownerDocument || document).body;
    }
    setModalAttributes(_modal) {
    }
    removeModalAttributes(_modal) {
    }
    setContainerStyle(containerState) {
      const style2 = {
        overflow: "hidden"
      };
      const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
      const container = this.getElement();
      containerState.style = {
        overflow: container.style.overflow,
        [paddingProp]: container.style[paddingProp]
      };
      if (containerState.scrollBarWidth) {
        style2[paddingProp] = `${parseInt((0, _css.default)(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
      }
      container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
      (0, _css.default)(container, style2);
    }
    reset() {
      [...this.modals].forEach((m) => this.remove(m));
    }
    removeContainerStyle(containerState) {
      const container = this.getElement();
      container.removeAttribute(OPEN_DATA_ATTRIBUTE);
      Object.assign(container.style, containerState.style);
    }
    add(modal) {
      let modalIdx = this.modals.indexOf(modal);
      if (modalIdx !== -1) {
        return modalIdx;
      }
      modalIdx = this.modals.length;
      this.modals.push(modal);
      this.setModalAttributes(modal);
      if (modalIdx !== 0) {
        return modalIdx;
      }
      this.state = {
        scrollBarWidth: this.getScrollbarWidth(),
        style: {}
      };
      if (this.handleContainerOverflow) {
        this.setContainerStyle(this.state);
      }
      return modalIdx;
    }
    remove(modal) {
      const modalIdx = this.modals.indexOf(modal);
      if (modalIdx === -1) {
        return;
      }
      this.modals.splice(modalIdx, 1);
      if (!this.modals.length && this.handleContainerOverflow) {
        this.removeContainerStyle(this.state);
      }
      this.removeModalAttributes(modal);
    }
    isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }
  ModalManager$1.default = ModalManager2;
  return ModalManager$1;
}
var useWaitForDOMRef = {};
var hasRequiredUseWaitForDOMRef;
function requireUseWaitForDOMRef() {
  if (hasRequiredUseWaitForDOMRef) return useWaitForDOMRef;
  hasRequiredUseWaitForDOMRef = 1;
  useWaitForDOMRef.__esModule = true;
  useWaitForDOMRef.default = useWaitForDOMRef$1;
  useWaitForDOMRef.resolveContainerRef = void 0;
  var _ownerDocument = _interopRequireDefault(require$$1);
  var _canUseDOM = _interopRequireDefault(require$$2);
  var _react = requireReact();
  var _useWindow = _interopRequireDefault(/* @__PURE__ */ requireUseWindow());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  const resolveContainerRef = (ref, document2) => {
    if (!_canUseDOM.default) return null;
    if (ref == null) return (document2 || (0, _ownerDocument.default)()).body;
    if (typeof ref === "function") ref = ref();
    if (ref && "current" in ref) ref = ref.current;
    if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
    return null;
  };
  useWaitForDOMRef.resolveContainerRef = resolveContainerRef;
  function useWaitForDOMRef$1(ref, onResolved) {
    const window2 = (0, _useWindow.default)();
    const [resolvedRef, setRef] = (0, _react.useState)(() => resolveContainerRef(ref, window2 == null ? void 0 : window2.document));
    if (!resolvedRef) {
      const earlyRef = resolveContainerRef(ref);
      if (earlyRef) setRef(earlyRef);
    }
    (0, _react.useEffect)(() => {
      if (onResolved && resolvedRef) {
        onResolved(resolvedRef);
      }
    }, [onResolved, resolvedRef]);
    (0, _react.useEffect)(() => {
      const nextRef = resolveContainerRef(ref);
      if (nextRef !== resolvedRef) {
        setRef(nextRef);
      }
    }, [ref, resolvedRef]);
    return resolvedRef;
  }
  return useWaitForDOMRef;
}
var ImperativeTransition = {};
var NoopTransition = {};
var hasRequiredNoopTransition;
function requireNoopTransition() {
  if (hasRequiredNoopTransition) return NoopTransition;
  hasRequiredNoopTransition = 1;
  NoopTransition.__esModule = true;
  NoopTransition.default = void 0;
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _useMergedRefs = _interopRequireDefault(requireUseMergedRefs());
  var _react = requireReact();
  var _utils = /* @__PURE__ */ requireUtils();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function NoopTransition$1({
    children,
    in: inProp,
    onExited,
    mountOnEnter,
    unmountOnExit
  }) {
    const ref = (0, _react.useRef)(null);
    const hasEnteredRef = (0, _react.useRef)(inProp);
    const handleExited = (0, _useEventCallback.default)(onExited);
    (0, _react.useEffect)(() => {
      if (inProp) hasEnteredRef.current = true;
      else {
        handleExited(ref.current);
      }
    }, [inProp, handleExited]);
    const combinedRef = (0, _useMergedRefs.default)(ref, (0, _utils.getChildRef)(children));
    const child = /* @__PURE__ */ (0, _react.cloneElement)(children, {
      ref: combinedRef
    });
    if (inProp) return child;
    if (unmountOnExit) {
      return null;
    }
    if (!hasEnteredRef.current && mountOnEnter) {
      return null;
    }
    return child;
  }
  NoopTransition.default = NoopTransition$1;
  return NoopTransition;
}
var RTGTransition = {};
var useRTGTransitionProps = {};
var hasRequiredUseRTGTransitionProps;
function requireUseRTGTransitionProps() {
  if (hasRequiredUseRTGTransitionProps) return useRTGTransitionProps;
  hasRequiredUseRTGTransitionProps = 1;
  useRTGTransitionProps.__esModule = true;
  useRTGTransitionProps.default = useRTGTransitionProps$1;
  var _react = requireReact();
  var _useMergedRefs = _interopRequireDefault(requireUseMergedRefs());
  var _utils = /* @__PURE__ */ requireUtils();
  const _excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  function useRTGTransitionProps$1(_ref) {
    let {
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      addEndListener,
      children
    } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const nodeRef = (0, _react.useRef)(null);
    const mergedRef = (0, _useMergedRefs.default)(nodeRef, (0, _utils.getChildRef)(children));
    const normalize = (callback) => (param) => {
      if (callback && nodeRef.current) {
        callback(nodeRef.current, param);
      }
    };
    const handleEnter = (0, _react.useCallback)(normalize(onEnter), [onEnter]);
    const handleEntering = (0, _react.useCallback)(normalize(onEntering), [onEntering]);
    const handleEntered = (0, _react.useCallback)(normalize(onEntered), [onEntered]);
    const handleExit = (0, _react.useCallback)(normalize(onExit), [onExit]);
    const handleExiting = (0, _react.useCallback)(normalize(onExiting), [onExiting]);
    const handleExited = (0, _react.useCallback)(normalize(onExited), [onExited]);
    const handleAddEndListener = (0, _react.useCallback)(normalize(addEndListener), [addEndListener]);
    return Object.assign({}, props, {
      nodeRef
    }, onEnter && {
      onEnter: handleEnter
    }, onEntering && {
      onEntering: handleEntering
    }, onEntered && {
      onEntered: handleEntered
    }, onExit && {
      onExit: handleExit
    }, onExiting && {
      onExiting: handleExiting
    }, onExited && {
      onExited: handleExited
    }, addEndListener && {
      addEndListener: handleAddEndListener
    }, {
      children: typeof children === "function" ? (status, innerProps) => (
        // TODO: Types for RTG missing innerProps, so need to cast.
        children(status, Object.assign({}, innerProps, {
          ref: mergedRef
        }))
      ) : /* @__PURE__ */ (0, _react.cloneElement)(children, {
        ref: mergedRef
      })
    });
  }
  return useRTGTransitionProps;
}
var hasRequiredRTGTransition;
function requireRTGTransition() {
  if (hasRequiredRTGTransition) return RTGTransition;
  hasRequiredRTGTransition = 1;
  RTGTransition.__esModule = true;
  RTGTransition.default = void 0;
  var React2 = _interopRequireWildcard(requireReact());
  var _useRTGTransitionProps = _interopRequireDefault(/* @__PURE__ */ requireUseRTGTransitionProps());
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["component"];
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  const RTGTransition$1 = /* @__PURE__ */ React2.forwardRef((_ref, ref) => {
    let {
      component: Component
    } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const transitionProps = (0, _useRTGTransitionProps.default)(props);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(Component, Object.assign({
      ref
    }, transitionProps));
  });
  RTGTransition.default = RTGTransition$1;
  return RTGTransition;
}
var hasRequiredImperativeTransition;
function requireImperativeTransition() {
  if (hasRequiredImperativeTransition) return ImperativeTransition;
  hasRequiredImperativeTransition = 1;
  ImperativeTransition.__esModule = true;
  ImperativeTransition.default = ImperativeTransition$1;
  ImperativeTransition.renderTransition = renderTransition;
  ImperativeTransition.useTransition = useTransition;
  var _useMergedRefs = _interopRequireDefault(requireUseMergedRefs());
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _useIsomorphicEffect = _interopRequireDefault(requireUseIsomorphicEffect());
  var _react = _interopRequireWildcard(requireReact());
  var _NoopTransition = _interopRequireDefault(/* @__PURE__ */ requireNoopTransition());
  var _RTGTransition = _interopRequireDefault(/* @__PURE__ */ requireRTGTransition());
  var _utils = /* @__PURE__ */ requireUtils();
  var _jsxRuntime = requireJsxRuntime();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function useTransition({
    in: inProp,
    onTransition
  }) {
    const ref = (0, _react.useRef)(null);
    const isInitialRef = (0, _react.useRef)(true);
    const handleTransition = (0, _useEventCallback.default)(onTransition);
    (0, _useIsomorphicEffect.default)(() => {
      if (!ref.current) {
        return void 0;
      }
      let stale = false;
      handleTransition({
        in: inProp,
        element: ref.current,
        initial: isInitialRef.current,
        isStale: () => stale
      });
      return () => {
        stale = true;
      };
    }, [inProp, handleTransition]);
    (0, _useIsomorphicEffect.default)(() => {
      isInitialRef.current = false;
      return () => {
        isInitialRef.current = true;
      };
    }, []);
    return ref;
  }
  function ImperativeTransition$1({
    children,
    in: inProp,
    onExited,
    onEntered,
    transition
  }) {
    const [exited, setExited] = (0, _react.useState)(!inProp);
    if (inProp && exited) {
      setExited(false);
    }
    const ref = useTransition({
      in: !!inProp,
      onTransition: (options) => {
        const onFinish = () => {
          if (options.isStale()) return;
          if (options.in) {
            onEntered == null ? void 0 : onEntered(options.element, options.initial);
          } else {
            setExited(true);
            onExited == null ? void 0 : onExited(options.element);
          }
        };
        Promise.resolve(transition(options)).then(onFinish, (error) => {
          if (!options.in) setExited(true);
          throw error;
        });
      }
    });
    const combinedRef = (0, _useMergedRefs.default)(ref, (0, _utils.getChildRef)(children));
    return exited && !inProp ? null : /* @__PURE__ */ (0, _react.cloneElement)(children, {
      ref: combinedRef
    });
  }
  function renderTransition(component, runTransition, props) {
    if (component) {
      return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_RTGTransition.default, Object.assign({}, props, {
        component
      }));
    }
    if (runTransition) {
      return /* @__PURE__ */ (0, _jsxRuntime.jsx)(ImperativeTransition$1, Object.assign({}, props, {
        transition: runTransition
      }));
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_NoopTransition.default, Object.assign({}, props));
  }
  return ImperativeTransition;
}
var hasRequiredModal;
function requireModal() {
  if (hasRequiredModal) return Modal$2;
  hasRequiredModal = 1;
  Modal$2.__esModule = true;
  Modal$2.default = void 0;
  var _activeElement = _interopRequireDefault(require$$0$1);
  var _contains = _interopRequireDefault(require$$1$1);
  var _canUseDOM = _interopRequireDefault(require$$2);
  var _listen = _interopRequireDefault(require$$0$2);
  var _react = _interopRequireWildcard(requireReact());
  var React2 = _react;
  var _reactDom = _interopRequireDefault(requireReactDom());
  var _useMounted = _interopRequireDefault(requireUseMounted());
  var _useWillUnmount = _interopRequireDefault(requireUseWillUnmount());
  var _usePrevious = _interopRequireDefault(requireUsePrevious());
  var _useEventCallback = _interopRequireDefault(requireUseEventCallback());
  var _ModalManager = _interopRequireDefault(/* @__PURE__ */ requireModalManager());
  var _useWaitForDOMRef = _interopRequireDefault(/* @__PURE__ */ requireUseWaitForDOMRef());
  var _useWindow = _interopRequireDefault(/* @__PURE__ */ requireUseWindow());
  var _ImperativeTransition = /* @__PURE__ */ requireImperativeTransition();
  var _utils = /* @__PURE__ */ requireUtils();
  var _jsxRuntime = requireJsxRuntime();
  const _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  let manager;
  function getManager(window2) {
    if (!manager) manager = new _ModalManager.default({
      ownerDocument: window2 == null ? void 0 : window2.document
    });
    return manager;
  }
  function useModalManager(provided) {
    const window2 = (0, _useWindow.default)();
    const modalManager = provided || getManager(window2);
    const modal = (0, _react.useRef)({
      dialog: null,
      backdrop: null
    });
    return Object.assign(modal.current, {
      add: () => modalManager.add(modal.current),
      remove: () => modalManager.remove(modal.current),
      isTopModal: () => modalManager.isTopModal(modal.current),
      setDialogRef: (0, _react.useCallback)((ref) => {
        modal.current.dialog = ref;
      }, []),
      setBackdropRef: (0, _react.useCallback)((ref) => {
        modal.current.backdrop = ref;
      }, [])
    });
  }
  const Modal2 = /* @__PURE__ */ (0, _react.forwardRef)((_ref, ref) => {
    let {
      show = false,
      role = "dialog",
      className,
      style: style2,
      children,
      backdrop = true,
      keyboard = true,
      onBackdropClick,
      onEscapeKeyDown,
      transition,
      runTransition,
      backdropTransition,
      runBackdropTransition,
      autoFocus = true,
      enforceFocus = true,
      restoreFocus = true,
      restoreFocusOptions,
      renderDialog,
      renderBackdrop = (props) => /* @__PURE__ */ (0, _jsxRuntime.jsx)("div", Object.assign({}, props)),
      manager: providedManager,
      container: containerRef,
      onShow,
      onHide = () => {
      },
      onExit,
      onExited,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = _ref, rest = _objectWithoutPropertiesLoose2(_ref, _excluded);
    const ownerWindow2 = (0, _useWindow.default)();
    const container = (0, _useWaitForDOMRef.default)(containerRef);
    const modal = useModalManager(providedManager);
    const isMounted = (0, _useMounted.default)();
    const prevShow = (0, _usePrevious.default)(show);
    const [exited, setExited] = (0, _react.useState)(!show);
    const lastFocusRef = (0, _react.useRef)(null);
    (0, _react.useImperativeHandle)(ref, () => modal, [modal]);
    if (_canUseDOM.default && !prevShow && show) {
      lastFocusRef.current = (0, _activeElement.default)(ownerWindow2 == null ? void 0 : ownerWindow2.document);
    }
    if (show && exited) {
      setExited(false);
    }
    const handleShow = (0, _useEventCallback.default)(() => {
      modal.add();
      removeKeydownListenerRef.current = (0, _listen.default)(document, "keydown", handleDocumentKeyDown);
      removeFocusListenerRef.current = (0, _listen.default)(
        document,
        "focus",
        // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        () => setTimeout(handleEnforceFocus),
        true
      );
      if (onShow) {
        onShow();
      }
      if (autoFocus) {
        var _modal$dialog$ownerDo, _modal$dialog;
        const currentActiveElement = (0, _activeElement.default)((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow2 == null ? void 0 : ownerWindow2.document);
        if (modal.dialog && currentActiveElement && !(0, _contains.default)(modal.dialog, currentActiveElement)) {
          lastFocusRef.current = currentActiveElement;
          modal.dialog.focus();
        }
      }
    });
    const handleHide = (0, _useEventCallback.default)(() => {
      modal.remove();
      removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
      removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
      if (restoreFocus) {
        var _lastFocusRef$current;
        (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
        lastFocusRef.current = null;
      }
    });
    (0, _react.useEffect)(() => {
      if (!show || !container) return;
      handleShow();
    }, [
      show,
      container,
      /* should never change: */
      handleShow
    ]);
    (0, _react.useEffect)(() => {
      if (!exited) return;
      handleHide();
    }, [exited, handleHide]);
    (0, _useWillUnmount.default)(() => {
      handleHide();
    });
    const handleEnforceFocus = (0, _useEventCallback.default)(() => {
      if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
        return;
      }
      const currentActiveElement = (0, _activeElement.default)(ownerWindow2 == null ? void 0 : ownerWindow2.document);
      if (modal.dialog && currentActiveElement && !(0, _contains.default)(modal.dialog, currentActiveElement)) {
        modal.dialog.focus();
      }
    });
    const handleBackdropClick = (0, _useEventCallback.default)((e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      onBackdropClick == null ? void 0 : onBackdropClick(e);
      if (backdrop === true) {
        onHide();
      }
    });
    const handleDocumentKeyDown = (0, _useEventCallback.default)((e) => {
      if (keyboard && (0, _utils.isEscKey)(e) && modal.isTopModal()) {
        onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
        if (!e.defaultPrevented) {
          onHide();
        }
      }
    });
    const removeFocusListenerRef = (0, _react.useRef)();
    const removeKeydownListenerRef = (0, _react.useRef)();
    const handleHidden = (...args) => {
      setExited(true);
      onExited == null ? void 0 : onExited(...args);
    };
    if (!container) {
      return null;
    }
    const dialogProps = Object.assign({
      role,
      ref: modal.setDialogRef,
      // apparently only works on the dialog role element
      "aria-modal": role === "dialog" ? true : void 0
    }, rest, {
      style: style2,
      className,
      tabIndex: -1
    });
    let dialog = renderDialog ? renderDialog(dialogProps) : /* @__PURE__ */ (0, _jsxRuntime.jsx)("div", Object.assign({}, dialogProps, {
      children: /* @__PURE__ */ React2.cloneElement(children, {
        role: "document"
      })
    }));
    dialog = (0, _ImperativeTransition.renderTransition)(transition, runTransition, {
      unmountOnExit: true,
      mountOnEnter: true,
      appear: true,
      in: !!show,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
      children: dialog
    });
    let backdropElement = null;
    if (backdrop) {
      backdropElement = renderBackdrop({
        ref: modal.setBackdropRef,
        onClick: handleBackdropClick
      });
      backdropElement = (0, _ImperativeTransition.renderTransition)(backdropTransition, runBackdropTransition, {
        in: !!show,
        appear: true,
        mountOnEnter: true,
        unmountOnExit: true,
        children: backdropElement
      });
    }
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /* @__PURE__ */ _reactDom.default.createPortal(/* @__PURE__ */ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [backdropElement, dialog]
      }), container)
    });
  });
  Modal2.displayName = "Modal";
  Modal$2.default = Object.assign(Modal2, {
    Manager: _ModalManager.default
  });
  return Modal$2;
}
var ModalExports = /* @__PURE__ */ requireModal();
const BaseModal = /* @__PURE__ */ getDefaultExportFromCjs(ModalExports);
function hasClass(element, className) {
  if (element.classList) return element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
var ModalManagerExports = /* @__PURE__ */ requireModalManager();
const ModalManager = /* @__PURE__ */ getDefaultExportFromCjs(ModalManagerExports);
const Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class BootstrapModalManager extends ModalManager {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    style(element, {
      [prop]: `${parseFloat(style(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      style(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
}
let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
const ModalBody = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-body");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
ModalBody.displayName = "ModalBody";
const ModalContext = /* @__PURE__ */ reactExports.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
});
const ModalDialog = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    ref,
    className: classNames(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: classNames(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
const ModalFooter = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-footer");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
ModalFooter.displayName = "ModalFooter";
const AbstractModalHeader = /* @__PURE__ */ reactExports.forwardRef(({
  closeLabel = "Close",
  closeVariant,
  closeButton = false,
  onHide,
  children,
  ...props
}, ref) => {
  const context2 = reactExports.useContext(ModalContext);
  const handleClick = useEventCallback$1(() => {
    context2 == null || context2.onHide();
    onHide == null || onHide();
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    ref,
    ...props,
    children: [children, closeButton && /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
const ModalHeader = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AbstractModalHeader, {
    ref,
    ...props,
    className: classNames(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
ModalHeader.displayName = "ModalHeader";
const DivStyledAsH4 = divWithClassName("h4");
const ModalTitle = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-title");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
ModalTitle.displayName = "ModalTitle";
function DialogTransition$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
    ...props,
    timeout: null
  });
}
function BackdropTransition$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
    ...props,
    timeout: null
  });
}
const Modal = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  style: style2,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog = ModalDialog,
  "data-bs-theme": dataBsTheme,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
  /* BaseModal props */
  show = false,
  animation = true,
  backdrop = true,
  keyboard = true,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = reactExports.useState({});
  const [animateStaticModal, setAnimateStaticModal] = reactExports.useState(false);
  const waitingForMouseUpRef = reactExports.useRef(false);
  const ignoreBackdropClickRef = reactExports.useRef(false);
  const removeStaticModalAnimationRef = reactExports.useRef(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs$1(ref, setModalRef);
  const handleHide = useEventCallback$1(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = reactExports.useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager) return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback$1(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount$1(() => {
    removeEventListener(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null || removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null || onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (keyboard) {
      onEscapeKeyDown == null || onEscapeKeyDown(e);
    } else {
      e.preventDefault();
      if (backdrop === "static") {
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null || onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null || removeStaticModalAnimationRef.current();
    onExit == null || onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null || onEntering(node, isAppearing);
    addEventListener(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node) node.style.display = "";
    onExited == null || onExited(node);
    removeEventListener(window, "resize", handleWindowResize);
  };
  const renderBackdrop = reactExports.useCallback((backdropProps) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...backdropProps,
    className: classNames(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style2,
    ...modalStyle
  };
  baseModalStyle.display = "block";
  const renderDialog = (dialogProps) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: classNames(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && "show"),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "data-bs-theme": dataBsTheme,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContext.Provider, {
    value: modalContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BaseModal, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition$1 : void 0,
      backdropTransition: animation ? BackdropTransition$1 : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal.displayName = "Modal";
const Modal$1 = Object.assign(Modal, {
  Body: ModalBody,
  Header: ModalHeader,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: ModalDialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
const NavItem = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-item");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
NavItem.displayName = "NavItem";
const NavLink = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = NavItemExports.useNavItem({
    key: SelectableContextExports.makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: classNames(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
const Nav = /* @__PURE__ */ reactExports.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill = false,
    justify = false,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled$1(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = reactExports.useContext(context);
  const cardHeaderContext = reactExports.useContext(context$2);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseNav, {
    as,
    ref,
    activeKey,
    className: classNames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = "Nav";
const Nav$1 = Object.assign(Nav, {
  Item: NavItem,
  Link: NavLink
});
const NavbarBrand = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component = as || (props.href ? "a" : "span");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ref,
    className: classNames(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
const NavbarCollapse = /* @__PURE__ */ reactExports.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context$12 = reactExports.useContext(context);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, {
    in: !!(context$12 && context$12.expanded),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
const NavbarToggle = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  children,
  label = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = reactExports.useContext(context) || {};
  const handleClick = useEventCallback$1((e) => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });
  if (Component === "button") {
    props.type = "button";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: classNames(className, bsPrefix, !expanded && "collapsed"),
    children: children || /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
const matchersByWindow = /* @__PURE__ */ new WeakMap();
const getMatcher = (query, targetWindow) => {
  if (!query || !targetWindow) return void 0;
  const matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
  matchersByWindow.set(targetWindow, matchers);
  let mql = matchers.get(query);
  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }
  return mql;
};
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? void 0 : window) {
  const mql = getMatcher(query, targetWindow);
  const [matches, setMatches] = reactExports.useState(() => mql ? mql.matches : false);
  useIsomorphicEffect(() => {
    let mql2 = getMatcher(query, targetWindow);
    if (!mql2) {
      return setMatches(false);
    }
    let matchers = matchersByWindow.get(targetWindow);
    const handleChange = () => {
      setMatches(mql2.matches);
    };
    mql2.refCount++;
    mql2.addListener(handleChange);
    handleChange();
    return () => {
      mql2.removeListener(handleChange);
      mql2.refCount--;
      if (mql2.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql2.media);
      }
      mql2 = void 0;
    };
  }, [query]);
  return matches;
}
function createBreakpointHook(breakpointValues) {
  const names = Object.keys(breakpointValues);
  function and(query, next) {
    if (query === next) {
      return next;
    }
    return query ? `${query} and ${next}` : next;
  }
  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }
  function getMaxQuery(breakpoint) {
    const next = getNext(breakpoint);
    let value = breakpointValues[next];
    if (typeof value === "number") value = `${value - 0.2}px`;
    else value = `calc(${value} - 0.2px)`;
    return `(max-width: ${value})`;
  }
  function getMinQuery(breakpoint) {
    let value = breakpointValues[breakpoint];
    if (typeof value === "number") {
      value = `${value}px`;
    }
    return `(min-width: ${value})`;
  }
  function useBreakpoint2(breakpointOrMap, direction, window2) {
    let breakpointMap;
    if (typeof breakpointOrMap === "object") {
      breakpointMap = breakpointOrMap;
      window2 = direction;
      direction = true;
    } else {
      direction = direction || true;
      breakpointMap = {
        [breakpointOrMap]: direction
      };
    }
    let query = reactExports.useMemo(() => Object.entries(breakpointMap).reduce((query2, [key, direction2]) => {
      if (direction2 === "up" || direction2 === true) {
        query2 = and(query2, getMinQuery(key));
      }
      if (direction2 === "down" || direction2 === true) {
        query2 = and(query2, getMaxQuery(key));
      }
      return query2;
    }, ""), [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window2);
  }
  return useBreakpoint2;
}
const useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
const OffcanvasBody = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-body");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
OffcanvasBody.displayName = "OffcanvasBody";
const transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
const OffcanvasToggling = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  children,
  in: inProp = false,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    in: inProp,
    mountOnEnter,
    unmountOnExit,
    appear,
    ...props,
    childRef: utilsExports.getChildRef(children),
    children: (status, innerProps) => /* @__PURE__ */ reactExports.cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.displayName = "OffcanvasToggling";
const OffcanvasHeader = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AbstractModalHeader, {
    ref,
    ...props,
    className: classNames(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
const DivStyledAsH5 = divWithClassName("h5");
const OffcanvasTitle = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH5,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-title");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
OffcanvasTitle.displayName = "OffcanvasTitle";
function DialogTransition(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OffcanvasToggling, {
    ...props
  });
}
function BackdropTransition(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, {
    ...props
  });
}
const Offcanvas = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement = "start",
  responsive,
  /* BaseModal props */
  show = false,
  backdrop = true,
  keyboard = true,
  scroll = false,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode = false,
  ...props
}, ref) => {
  const modalManager = reactExports.useRef();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const [showOffcanvas, setShowOffcanvas] = reactExports.useState(false);
  const handleHide = useEventCallback$1(onHide);
  const hideResponsiveOffcanvas = useBreakpoint(responsive || "xs", "up");
  reactExports.useEffect(() => {
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const modalContext = reactExports.useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager) return propsManager;
    if (scroll) {
      if (!modalManager.current) modalManager.current = new BootstrapModalManager({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = "visible";
    onEnter == null || onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = "";
    onExited == null || onExited(...args);
  };
  const renderBackdrop = reactExports.useCallback((backdropProps) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...backdropProps,
    className: classNames(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...dialogProps,
    ...props,
    className: classNames(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContext.Provider, {
      value: modalContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(BaseModal, {
        show: showOffcanvas,
        ref,
        backdrop,
        container,
        keyboard,
        autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus,
        restoreFocusOptions,
        onEscapeKeyDown,
        onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition,
        backdropTransition: BackdropTransition,
        renderBackdrop,
        renderDialog
      })
    })]
  });
});
Offcanvas.displayName = "Offcanvas";
const Offcanvas$1 = Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: OffcanvasHeader,
  Title: OffcanvasTitle
});
const NavbarOffcanvas = /* @__PURE__ */ reactExports.forwardRef(({
  onHide,
  ...props
}, ref) => {
  const context$12 = reactExports.useContext(context);
  const handleHide = useEventCallback$1(() => {
    context$12 == null || context$12.onToggle == null || context$12.onToggle();
    onHide == null || onHide();
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Offcanvas$1, {
    ref,
    show: !!(context$12 != null && context$12.expanded),
    ...props,
    renderStaticNode: true,
    onHide: handleHide
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
const NavbarText = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-text");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
NavbarText.displayName = "NavbarText";
const Navbar = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand = true,
    variant = "light",
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect = false,
    ...controlledProps
  } = useUncontrolled$1(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = reactExports.useCallback((...args) => {
    onSelect == null || onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null || onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string") expandClass = `${expandClass}-${expand}`;
  const navbarContext = reactExports.useMemo(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(context.Provider, {
    value: navbarContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectableContext.Provider, {
      value: handleCollapse,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
        ref,
        ...controlledProps,
        className: classNames(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.displayName = "Navbar";
const Navbar$1 = Object.assign(Navbar, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Offcanvas: NavbarOffcanvas,
  Text: NavbarText,
  Toggle: NavbarToggle
});
const NavDropdown = /* @__PURE__ */ reactExports.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dropdown$1, {
    ref,
    ...props,
    className: classNames(className, navItemPrefix),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown$1.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink,
      children: title
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown$1.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
const NavDropdown$1 = Object.assign(NavDropdown, {
  Item: Dropdown$1.Item,
  ItemText: Dropdown$1.ItemText,
  Divider: Dropdown$1.Divider,
  Header: Dropdown$1.Header
});
const Row = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
const TopBar = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Navbar$1,
    {
      className: "custom-topbar",
      style: {
        backgroundColor: "#c29522",
        "--bs-navbar-color": "#ffffff",
        "--bs-navbar-hover-color": "rgba(255, 255, 255, 0.8)",
        "--bs-navbar-active-color": "#ffffff"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar$1.Brand, { className: "mx-auto d-md-none fw-normal text-center", children: "IMORA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar$1.Brand, { className: "d-none d-md-block", children: "IMORA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav$1, { className: "ms-auto d-none d-md-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Nav$1.Link, { as: $e, href: "/", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Nav$1.Link, { as: $e, href: "/products-list", children: "Products" })
        ] })
      ] })
    }
  ) });
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const faBars = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
};
const faPhone = {
  prefix: "fas",
  iconName: "phone",
  icon: [512, 512, [128222, 128379], "f095", "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]
};
const faCartShopping = {
  prefix: "fas",
  iconName: "cart-shopping",
  icon: [576, 512, [128722, "shopping-cart"], "f07a", "M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
};
const faShoppingCart = faCartShopping;
const faMagnifyingGlass = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
};
const faSearch = faMagnifyingGlass;
const faXmark = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
const faTimes = faXmark;
function SearchForm() {
  const [query, setQuery] = reactExports.useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      Sr.get(route("search"), { q: query });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "searchForm d-flex", onSubmit: handleSearch, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Form.Control,
      {
        type: "text",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Search what you are looking for ...",
        className: "searchInput",
        style: {
          borderRadius: "5px 0 0 5px",
          border: "1px solid #ccc",
          borderRight: "none",
          height: "50px",
          padding: "10px",
          width: "600px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "searchBtn",
        type: "submit",
        style: {
          backgroundColor: "#9b5d24",
          borderRadius: "0 5px 5px 0",
          border: "1px solid #ccc",
          borderLeft: "none",
          height: "50px",
          width: "200px"
        },
        children: "Search"
      }
    )
  ] });
}
const Logo = "/build/assets/logo-DPyNvzPk.png";
const LogoSmall = "/build/assets/logo-im-CLKEMy2a.jpeg";
function Header({ menus = [] }) {
  const [showCart, setShowCart] = reactExports.useState(false);
  const [showSearch, setShowSearch] = reactExports.useState(false);
  const [showMenu, setShowMenu] = reactExports.useState(false);
  const [phone, setPhone] = reactExports.useState("Loading...");
  const { items } = useCart();
  const itemCount = items.length;
  const dropdownMenus = menus.slice(-6);
  reactExports.useEffect(() => {
    axios.get("/api/settings/phone").then((response) => {
      setPhone(response.data.phone || "N/A");
    }).catch((error) => {
      console.error("Failed to fetch phone number", error);
      setPhone("N/A");
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "header", style: { position: "relative", zIndex: 1030 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "align-items-center justify-content-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: 4, className: "d-md-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn p-0 border-0 bg-transparent",
            onClick: () => setShowMenu(!showMenu),
            "aria-label": "Toggle menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: showMenu ? faTimes : faBars, style: { color: "#fff", fontSize: "1.5rem" } })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: 4, md: "auto", className: "text-center text-md-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Logo, height: "80", className: "d-none d-md-inline-block align-top", alt: "company logo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: LogoSmall, height: "50", className: "d-md-none align-top", alt: "company logo" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "d-none d-md-flex justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Nav$1,
          {
            className: "align-items-center",
            style: {
              "--bs-nav-link-color": "#ffffff",
              "--bs-nav-link-hover-color": "rgba(255, 255, 255, 0.8)"
            },
            children: dropdownMenus.map(
              (menu) => menu.children && menu.children.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                NavDropdown$1,
                {
                  title: menu.title,
                  id: `nav-dropdown-${menu.id}`,
                  className: "fw-bold",
                  children: menu.children.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    NavDropdown$1.Item,
                    {
                      as: $e,
                      href: sub.link || "#",
                      children: sub.title
                    },
                    sub.id
                  ))
                },
                menu.id
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Nav$1.Link,
                {
                  as: $e,
                  href: menu.link || "#",
                  className: "fw-bold",
                  children: menu.title
                },
                menu.id
              )
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xs: 4, md: "auto", className: "d-flex align-items-center justify-content-end gap-3 ms-md-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "btn p-0 border-0 bg-transparent me-md-3",
              onClick: () => setShowSearch(true),
              "aria-label": "Search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faSearch, style: { color: "#fff", fontSize: "1.4rem", cursor: "pointer" } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-none d-md-block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faPhone, className: "header-phone me-3", style: { color: "#9b5d24" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "d-block mb-0", children: "Contact Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#fff" }, children: phone })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cart-icon-wrapper", onClick: () => setShowCart(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FontAwesomeIcon,
              {
                icon: faShoppingCart,
                className: "cart-icon",
                style: { color: "#fff", fontSize: "1.5rem", cursor: "pointer" }
              }
            ),
            itemCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cart-badge", children: itemCount })
          ] })
        ] })
      ] }),
      showMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "d-md-none pb-2 text-start",
          style: {
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#000",
            zIndex: 1030
          },
          children: dropdownMenus.map((menu) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              $e,
              {
                href: menu.link || "#",
                className: "mobile-menu-link d-block py-2 px-3 fw-bold text-decoration-none",
                style: { color: "#fff" },
                children: menu.title
              }
            ),
            menu.children && menu.children.length > 0 && menu.children.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              $e,
              {
                href: sub.link || "#",
                className: "mobile-menu-link d-block py-1 pe-3 ps-5 text-decoration-none",
                style: { color: "#fff" },
                children: sub.title
              },
              sub.id
            ))
          ] }, menu.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal$1, { show: showSearch, onHide: () => setShowSearch(false), centered: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal$1.Body, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchForm, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `cart-drawer-backdrop ${showCart ? "show" : ""}`,
        onClick: () => setShowCart(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `cart-drawer ${showCart ? "show" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-bottom d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0", children: "Shopping Cart" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn-close",
            onClick: () => setShowCart(false),
            "aria-label": "Close"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cart-drawer-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartItems, { onClose: () => setShowCart(false) }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    "© IMORA (PVT) Limited. All rights reserved. ",
    (/* @__PURE__ */ new Date()).getFullYear()
  ] }) });
}
const Layout = ({ children }) => {
  const [menus, setMenus] = reactExports.useState([]);
  reactExports.useEffect(() => {
    fetch("/menus-json").then((res) => res.json()).then((data) => {
      const updatedMenus = data.map((menu) => {
        if (menu.title === "Services") {
          return { ...menu, title: "Products", link: "/products-list", children: [] };
        }
        return menu;
      });
      setMenus(updatedMenus);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", richColors: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { menus }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container-fluid", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};
const calculateTotals = (items) => {
  return items.reduce((acc, item) => {
    const itemTotal = parseFloat(item.price) * item.quantity;
    return {
      total: acc.total + itemTotal,
      itemCount: acc.itemCount + item.quantity
    };
  }, { total: 0, itemCount: 0 });
};
const cartReducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return calculateCartState(updatedItems);
    case "REMOVE_FROM_CART":
      updatedItems = state.items.filter((item) => item.id !== action.payload);
      return calculateCartState(updatedItems);
    case "UPDATE_QUANTITY":
      updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity
          };
        }
        return item;
      });
      return calculateCartState(updatedItems);
    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0
      };
    case "LOAD_CART":
      return calculateCartState(action.payload);
    case "INITIALIZE_TOTALS":
      const { total, itemCount } = calculateTotals(state.items);
      return { ...state, total, itemCount };
    default:
      return state;
  }
};
const calculateCartState = (items) => {
  const itemCount = items.reduce((total2, item) => total2 + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    items,
    total,
    itemCount
  };
};
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = reactExports.useReducer(cartReducer, initialState);
  const [loaded, setLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      const items = saved ? JSON.parse(saved) : [];
      if (Array.isArray(items) && items.length > 0) {
        dispatch({ type: "LOAD_CART", payload: items });
      }
    } catch (e) {
    }
    setLoaded(true);
  }, []);
  reactExports.useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("cart", JSON.stringify(cartState.items));
    } catch (e) {
    }
  }, [cartState.items, loaded]);
  const contextValue = {
    items: cartState.items,
    total: cartState.total,
    itemCount: cartState.itemCount,
    dispatch
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CartContext.Provider, { value: contextValue, children });
};
export {
  CartProvider as C,
  Layout as L,
  Modal$1 as M,
  Row as R
};
