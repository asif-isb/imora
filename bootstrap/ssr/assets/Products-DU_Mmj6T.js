import { r as reactExports, a as axios, j as jsxRuntimeExports } from "../ssr.js";
import Dashboard from "./Dashboard-BJGg0EZV.js";
import { p as propTypesExports } from "./index-BnY4fGey.js";
import { S as Swal } from "./sweetalert2.esm.all-CM8klxIU.js";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "crypto";
import "assert";
import "tty";
import "os";
import "zlib";
import "events";
import "process";
import "async_hooks";
import "./AuthenticatedLayout-DP8axALD.js";
import "./ApplicationLogo-B-UT6Pkc.js";
import "./transition-Do-OiQ4t.js";
import "./AdminSidebar-B2DLZYli.js";
import "./index-k2HQ-qxt.js";
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var eventPropTypes = {
  onActivate: propTypesExports.func,
  onAddUndo: propTypesExports.func,
  onBeforeAddUndo: propTypesExports.func,
  onBeforeExecCommand: propTypesExports.func,
  onBeforeGetContent: propTypesExports.func,
  onBeforeRenderUI: propTypesExports.func,
  onBeforeSetContent: propTypesExports.func,
  onBeforePaste: propTypesExports.func,
  onBlur: propTypesExports.func,
  onChange: propTypesExports.func,
  onClearUndos: propTypesExports.func,
  onClick: propTypesExports.func,
  onContextMenu: propTypesExports.func,
  onCommentChange: propTypesExports.func,
  onCompositionEnd: propTypesExports.func,
  onCompositionStart: propTypesExports.func,
  onCompositionUpdate: propTypesExports.func,
  onCopy: propTypesExports.func,
  onCut: propTypesExports.func,
  onDblclick: propTypesExports.func,
  onDeactivate: propTypesExports.func,
  onDirty: propTypesExports.func,
  onDrag: propTypesExports.func,
  onDragDrop: propTypesExports.func,
  onDragEnd: propTypesExports.func,
  onDragGesture: propTypesExports.func,
  onDragOver: propTypesExports.func,
  onDrop: propTypesExports.func,
  onExecCommand: propTypesExports.func,
  onFocus: propTypesExports.func,
  onFocusIn: propTypesExports.func,
  onFocusOut: propTypesExports.func,
  onGetContent: propTypesExports.func,
  onHide: propTypesExports.func,
  onInit: propTypesExports.func,
  onInput: propTypesExports.func,
  onKeyDown: propTypesExports.func,
  onKeyPress: propTypesExports.func,
  onKeyUp: propTypesExports.func,
  onLoadContent: propTypesExports.func,
  onMouseDown: propTypesExports.func,
  onMouseEnter: propTypesExports.func,
  onMouseLeave: propTypesExports.func,
  onMouseMove: propTypesExports.func,
  onMouseOut: propTypesExports.func,
  onMouseOver: propTypesExports.func,
  onMouseUp: propTypesExports.func,
  onNodeChange: propTypesExports.func,
  onObjectResizeStart: propTypesExports.func,
  onObjectResized: propTypesExports.func,
  onObjectSelected: propTypesExports.func,
  onPaste: propTypesExports.func,
  onPostProcess: propTypesExports.func,
  onPostRender: propTypesExports.func,
  onPreProcess: propTypesExports.func,
  onProgressState: propTypesExports.func,
  onRedo: propTypesExports.func,
  onRemove: propTypesExports.func,
  onReset: propTypesExports.func,
  onSaveContent: propTypesExports.func,
  onSelectionChange: propTypesExports.func,
  onSetAttrib: propTypesExports.func,
  onSetContent: propTypesExports.func,
  onShow: propTypesExports.func,
  onSubmit: propTypesExports.func,
  onUndo: propTypesExports.func,
  onVisualAid: propTypesExports.func,
  onSkinLoadError: propTypesExports.func,
  onThemeLoadError: propTypesExports.func,
  onModelLoadError: propTypesExports.func,
  onPluginLoadError: propTypesExports.func,
  onIconsLoadError: propTypesExports.func,
  onLanguageLoadError: propTypesExports.func,
  onScriptsLoad: propTypesExports.func,
  onScriptsLoadError: propTypesExports.func
};
var EditorPropTypes = __assign$2({ apiKey: propTypesExports.string, licenseKey: propTypesExports.string, id: propTypesExports.string, inline: propTypesExports.bool, init: propTypesExports.object, initialValue: propTypesExports.string, onEditorChange: propTypesExports.func, value: propTypesExports.string, tagName: propTypesExports.string, tabIndex: propTypesExports.number, cloudChannel: propTypesExports.string, plugins: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.array]), toolbar: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.array]), disabled: propTypesExports.bool, readonly: propTypesExports.bool, textareaName: propTypesExports.string, tinymceScriptSrc: propTypesExports.oneOfType([
  propTypesExports.string,
  propTypesExports.arrayOf(propTypesExports.string),
  propTypesExports.arrayOf(propTypesExports.shape({
    src: propTypesExports.string,
    async: propTypesExports.bool,
    defer: propTypesExports.bool
  }))
]), rollback: propTypesExports.oneOfType([propTypesExports.number, propTypesExports.oneOf([false])]), scriptLoading: propTypesExports.shape({
  async: propTypesExports.bool,
  defer: propTypesExports.bool,
  delay: propTypesExports.number
}) }, eventPropTypes);
var getTinymce = function(view) {
  var global = view;
  return global && global.tinymce ? global.tinymce : null;
};
var isFunction = function(x) {
  return typeof x === "function";
};
var isEventProp = function(name) {
  return name in eventPropTypes;
};
var eventAttrToEventName = function(attrName) {
  return attrName.substr(2);
};
var configHandlers2 = function(handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
  var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
  var currEventKeys = Object.keys(props).filter(isEventProp);
  var removedKeys = prevEventKeys.filter(function(key) {
    return props[key] === void 0;
  });
  var addedKeys = currEventKeys.filter(function(key) {
    return prevProps[key] === void 0;
  });
  removedKeys.forEach(function(key) {
    var eventName = eventAttrToEventName(key);
    var wrappedHandler = boundHandlers[eventName];
    off(eventName, wrappedHandler);
    delete boundHandlers[eventName];
  });
  addedKeys.forEach(function(key) {
    var wrappedHandler = adapter(handlerLookup, key);
    var eventName = eventAttrToEventName(key);
    boundHandlers[eventName] = wrappedHandler;
    on(eventName, wrappedHandler);
  });
};
var configHandlers = function(editor, prevProps, props, boundHandlers, lookup) {
  return configHandlers2(
    lookup,
    editor.on.bind(editor),
    editor.off.bind(editor),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function(handlerLookup, key) {
      return function(e) {
        var _a;
        return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor);
      };
    },
    prevProps,
    props,
    boundHandlers
  );
};
var unique = 0;
var uuid = function(prefix) {
  var time = Date.now();
  var random = Math.floor(Math.random() * 1e9);
  unique++;
  return prefix + "_" + random + unique + String(time);
};
var isTextareaOrInput = function(element) {
  return element !== null && (element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input");
};
var normalizePluginArray = function(plugins) {
  if (typeof plugins === "undefined" || plugins === "") {
    return [];
  }
  return Array.isArray(plugins) ? plugins : plugins.split(" ");
};
var mergePlugins = function(initPlugins, inputPlugins) {
  return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isBeforeInputEventAvailable = function() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
};
var isInDoc = function(elem) {
  if (!("isConnected" in Node.prototype)) {
    var current = elem;
    var parent_1 = elem.parentNode;
    while (parent_1 != null) {
      current = parent_1;
      parent_1 = current.parentNode;
    }
    return current === elem.ownerDocument;
  }
  return elem.isConnected;
};
var setMode = function(editor, mode) {
  if (editor !== void 0) {
    if (editor.mode != null && typeof editor.mode === "object" && typeof editor.mode.set === "function") {
      editor.mode.set(mode);
    } else {
      editor.setMode(mode);
    }
  }
};
var getTinymceOrError = function(view) {
  var tinymce = getTinymce(view);
  if (!tinymce) {
    throw new Error("tinymce should have been loaded into global scope");
  }
  return tinymce;
};
var isDisabledOptionSupported = function(editor) {
  return editor.options && editor.options.isRegistered("disabled");
};
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var injectScriptTag = function(doc, item, handler) {
  var _a, _b;
  var scriptTag = doc.createElement("script");
  scriptTag.referrerPolicy = "origin";
  scriptTag.type = "application/javascript";
  scriptTag.id = item.id;
  scriptTag.src = item.src;
  scriptTag.async = (_a = item.async) !== null && _a !== void 0 ? _a : false;
  scriptTag.defer = (_b = item.defer) !== null && _b !== void 0 ? _b : false;
  var loadHandler = function() {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src);
  };
  var errorHandler = function(err) {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src, err);
  };
  scriptTag.addEventListener("load", loadHandler);
  scriptTag.addEventListener("error", errorHandler);
  if (doc.head) {
    doc.head.appendChild(scriptTag);
  }
};
var createDocumentScriptLoader = function(doc) {
  var lookup = {};
  var scriptLoadOrErrorHandler = function(src, err) {
    var item = lookup[src];
    item.done = true;
    item.error = err;
    for (var _i = 0, _a = item.handlers; _i < _a.length; _i++) {
      var h = _a[_i];
      h(src, err);
    }
    item.handlers = [];
  };
  var loadScripts = function(items, success, failure) {
    var failureOrLog = function(err) {
      return failure !== void 0 ? failure(err) : console.error(err);
    };
    if (items.length === 0) {
      failureOrLog(new Error("At least one script must be provided"));
      return;
    }
    var successCount = 0;
    var failed = false;
    var loaded = function(_src, err) {
      if (failed) {
        return;
      }
      if (err) {
        failed = true;
        failureOrLog(err);
      } else if (++successCount === items.length) {
        success();
      }
    };
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
      var item = items_1[_i];
      var existing = lookup[item.src];
      if (existing) {
        if (existing.done) {
          loaded(item.src, existing.error);
        } else {
          existing.handlers.push(loaded);
        }
      } else {
        var id = uuid("tiny-");
        lookup[item.src] = {
          id,
          src: item.src,
          done: false,
          error: null,
          handlers: [loaded]
        };
        injectScriptTag(doc, __assign$1({ id }, item), scriptLoadOrErrorHandler);
      }
    }
  };
  var deleteScripts = function() {
    var _a;
    for (var _i = 0, _b = Object.values(lookup); _i < _b.length; _i++) {
      var item = _b[_i];
      var scriptTag = doc.getElementById(item.id);
      if (scriptTag != null && scriptTag.tagName === "SCRIPT") {
        (_a = scriptTag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(scriptTag);
      }
    }
    lookup = {};
  };
  var getDocument = function() {
    return doc;
  };
  return {
    loadScripts,
    deleteScripts,
    getDocument
  };
};
var createScriptLoader = function() {
  var cache = [];
  var getDocumentScriptLoader = function(doc) {
    var loader = cache.find(function(l) {
      return l.getDocument() === doc;
    });
    if (loader === void 0) {
      loader = createDocumentScriptLoader(doc);
      cache.push(loader);
    }
    return loader;
  };
  var loadList = function(doc, items, delay, success, failure) {
    var doLoad = function() {
      return getDocumentScriptLoader(doc).loadScripts(items, success, failure);
    };
    if (delay > 0) {
      setTimeout(doLoad, delay);
    } else {
      doLoad();
    }
  };
  var reinitialize = function() {
    for (var loader = cache.pop(); loader != null; loader = cache.pop()) {
      loader.deleteScripts();
    }
  };
  return {
    loadList,
    reinitialize
  };
};
var ScriptLoader = createScriptLoader();
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var changeEvents = "change keyup compositionend setcontent CommentChange";
var Editor = (
  /** @class */
  function(_super) {
    __extends(Editor2, _super);
    function Editor2(props) {
      var _a, _b, _c;
      var _this = _super.call(this, props) || this;
      _this.rollbackTimer = void 0;
      _this.valueCursor = void 0;
      _this.rollbackChange = function() {
        var editor = _this.editor;
        var value = _this.props.value;
        if (editor && value && value !== _this.currentContent) {
          editor.undoManager.ignore(function() {
            editor.setContent(value);
            if (_this.valueCursor && (!_this.inline || editor.hasFocus())) {
              try {
                editor.selection.moveToBookmark(_this.valueCursor);
              } catch (_e) {
              }
            }
          });
        }
        _this.rollbackTimer = void 0;
      };
      _this.handleBeforeInput = function(_evt) {
        if (_this.props.value !== void 0 && _this.props.value === _this.currentContent && _this.editor) {
          if (!_this.inline || _this.editor.hasFocus()) {
            try {
              _this.valueCursor = _this.editor.selection.getBookmark(3);
            } catch (_e) {
            }
          }
        }
      };
      _this.handleBeforeInputSpecial = function(evt) {
        if (evt.key === "Enter" || evt.key === "Backspace" || evt.key === "Delete") {
          _this.handleBeforeInput(evt);
        }
      };
      _this.handleEditorChange = function(_evt) {
        var editor = _this.editor;
        if (editor && editor.initialized) {
          var newContent = editor.getContent();
          if (_this.props.value !== void 0 && _this.props.value !== newContent && _this.props.rollback !== false) {
            if (!_this.rollbackTimer) {
              _this.rollbackTimer = window.setTimeout(_this.rollbackChange, typeof _this.props.rollback === "number" ? _this.props.rollback : 200);
            }
          }
          if (newContent !== _this.currentContent) {
            _this.currentContent = newContent;
            if (isFunction(_this.props.onEditorChange)) {
              _this.props.onEditorChange(newContent, editor);
            }
          }
        }
      };
      _this.handleEditorChangeSpecial = function(evt) {
        if (evt.key === "Backspace" || evt.key === "Delete") {
          _this.handleEditorChange(evt);
        }
      };
      _this.initialise = function(attempts) {
        var _a2, _b2, _c2;
        if (attempts === void 0) {
          attempts = 0;
        }
        var target = _this.elementRef.current;
        if (!target) {
          return;
        }
        if (!isInDoc(target)) {
          if (attempts === 0) {
            setTimeout(function() {
              return _this.initialise(1);
            }, 1);
          } else if (attempts < 100) {
            setTimeout(function() {
              return _this.initialise(attempts + 1);
            }, 100);
          } else {
            throw new Error("tinymce can only be initialised when in a document");
          }
          return;
        }
        var tinymce = getTinymceOrError(_this.view);
        var finalInit = __assign(__assign(__assign(__assign({}, _this.props.init), { selector: void 0, target, disabled: _this.props.disabled, readonly: _this.props.readonly, inline: _this.inline, plugins: mergePlugins((_a2 = _this.props.init) === null || _a2 === void 0 ? void 0 : _a2.plugins, _this.props.plugins), toolbar: (_b2 = _this.props.toolbar) !== null && _b2 !== void 0 ? _b2 : (_c2 = _this.props.init) === null || _c2 === void 0 ? void 0 : _c2.toolbar }), _this.props.licenseKey ? { license_key: _this.props.licenseKey } : {}), { setup: function(editor) {
          _this.editor = editor;
          _this.bindHandlers({});
          if (_this.inline && !isTextareaOrInput(target)) {
            editor.once("PostRender", function(_evt) {
              editor.setContent(_this.getInitialValue(), { no_events: true });
            });
          }
          if (_this.props.init && isFunction(_this.props.init.setup)) {
            _this.props.init.setup(editor);
          }
          if (_this.props.disabled) {
            if (isDisabledOptionSupported(_this.editor)) {
              _this.editor.options.set("disabled", _this.props.disabled);
            } else {
              _this.editor.mode.set("readonly");
            }
          }
        }, init_instance_callback: function(editor) {
          var _a3;
          var initialValue = _this.getInitialValue();
          _this.currentContent = (_a3 = _this.currentContent) !== null && _a3 !== void 0 ? _a3 : editor.getContent();
          if (_this.currentContent !== initialValue) {
            _this.currentContent = initialValue;
            editor.setContent(initialValue);
            editor.undoManager.clear();
            editor.undoManager.add();
            editor.setDirty(false);
          }
          if (_this.props.init && isFunction(_this.props.init.init_instance_callback)) {
            _this.props.init.init_instance_callback(editor);
          }
        } });
        if (!_this.inline) {
          target.style.visibility = "";
        }
        if (isTextareaOrInput(target)) {
          target.value = _this.getInitialValue();
        }
        tinymce.init(finalInit);
      };
      _this.id = _this.props.id || uuid("tiny-react");
      _this.elementRef = reactExports.createRef();
      _this.inline = (_c = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : false;
      _this.boundHandlers = {};
      return _this;
    }
    Object.defineProperty(Editor2.prototype, "view", {
      get: function() {
        var _a, _b;
        return (_b = (_a = this.elementRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument.defaultView) !== null && _b !== void 0 ? _b : window;
      },
      enumerable: false,
      configurable: true
    });
    Editor2.prototype.componentDidUpdate = function(prevProps) {
      var _this = this;
      var _a, _b;
      if (this.rollbackTimer) {
        clearTimeout(this.rollbackTimer);
        this.rollbackTimer = void 0;
      }
      if (this.editor) {
        this.bindHandlers(prevProps);
        if (this.editor.initialized) {
          this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();
          if (typeof this.props.initialValue === "string" && this.props.initialValue !== prevProps.initialValue) {
            this.editor.setContent(this.props.initialValue);
            this.editor.undoManager.clear();
            this.editor.undoManager.add();
            this.editor.setDirty(false);
          } else if (typeof this.props.value === "string" && this.props.value !== this.currentContent) {
            var localEditor_1 = this.editor;
            localEditor_1.undoManager.transact(function() {
              var cursor;
              if (!_this.inline || localEditor_1.hasFocus()) {
                try {
                  cursor = localEditor_1.selection.getBookmark(3);
                } catch (_e) {
                }
              }
              var valueCursor = _this.valueCursor;
              localEditor_1.setContent(_this.props.value);
              if (!_this.inline || localEditor_1.hasFocus()) {
                for (var _i = 0, _a2 = [cursor, valueCursor]; _i < _a2.length; _i++) {
                  var bookmark = _a2[_i];
                  if (bookmark) {
                    try {
                      localEditor_1.selection.moveToBookmark(bookmark);
                      _this.valueCursor = bookmark;
                      break;
                    } catch (_e) {
                    }
                  }
                }
              }
            });
          }
          if (this.props.readonly !== prevProps.readonly) {
            var readonly = (_b = this.props.readonly) !== null && _b !== void 0 ? _b : false;
            setMode(this.editor, readonly ? "readonly" : "design");
          }
          if (this.props.disabled !== prevProps.disabled) {
            if (isDisabledOptionSupported(this.editor)) {
              this.editor.options.set("disabled", this.props.disabled);
            } else {
              setMode(this.editor, this.props.disabled ? "readonly" : "design");
            }
          }
        }
      }
    };
    Editor2.prototype.componentDidMount = function() {
      var _this = this;
      var _a, _b, _c, _d, _f;
      if (getTinymce(this.view) !== null) {
        this.initialise();
      } else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) {
        (_b = (_a = this.props).onScriptsLoadError) === null || _b === void 0 ? void 0 : _b.call(_a, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
      } else if ((_c = this.elementRef.current) === null || _c === void 0 ? void 0 : _c.ownerDocument) {
        var successHandler = function() {
          var _a2, _b2;
          (_b2 = (_a2 = _this.props).onScriptsLoad) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          _this.initialise();
        };
        var errorHandler = function(err) {
          var _a2, _b2;
          (_b2 = (_a2 = _this.props).onScriptsLoadError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, err);
        };
        ScriptLoader.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (_f = (_d = this.props.scriptLoading) === null || _d === void 0 ? void 0 : _d.delay) !== null && _f !== void 0 ? _f : 0, successHandler, errorHandler);
      }
    };
    Editor2.prototype.componentWillUnmount = function() {
      var _this = this;
      var editor = this.editor;
      if (editor) {
        editor.off(changeEvents, this.handleEditorChange);
        editor.off(this.beforeInputEvent(), this.handleBeforeInput);
        editor.off("keypress", this.handleEditorChangeSpecial);
        editor.off("keydown", this.handleBeforeInputSpecial);
        editor.off("NewBlock", this.handleEditorChange);
        Object.keys(this.boundHandlers).forEach(function(eventName) {
          editor.off(eventName, _this.boundHandlers[eventName]);
        });
        this.boundHandlers = {};
        editor.remove();
        this.editor = void 0;
      }
    };
    Editor2.prototype.render = function() {
      return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor2.prototype.beforeInputEvent = function() {
      return isBeforeInputEventAvailable() ? "beforeinput SelectionChange" : "SelectionChange";
    };
    Editor2.prototype.renderInline = function() {
      var _a = this.props.tagName, tagName = _a === void 0 ? "div" : _a;
      return reactExports.createElement(tagName, {
        ref: this.elementRef,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    };
    Editor2.prototype.renderIframe = function() {
      return reactExports.createElement("textarea", {
        ref: this.elementRef,
        style: { visibility: "hidden" },
        name: this.props.textareaName,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    };
    Editor2.prototype.getScriptSources = function() {
      var _a, _b;
      var async = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async;
      var defer = (_b = this.props.scriptLoading) === null || _b === void 0 ? void 0 : _b.defer;
      if (this.props.tinymceScriptSrc !== void 0) {
        if (typeof this.props.tinymceScriptSrc === "string") {
          return [{ src: this.props.tinymceScriptSrc, async, defer }];
        }
        return this.props.tinymceScriptSrc.map(function(item) {
          if (typeof item === "string") {
            return { src: item, async, defer };
          } else {
            return item;
          }
        });
      }
      var channel = this.props.cloudChannel;
      var apiKey = this.props.apiKey ? this.props.apiKey : "no-api-key";
      var cloudTinyJs = "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js");
      return [{ src: cloudTinyJs, async, defer }];
    };
    Editor2.prototype.getInitialValue = function() {
      if (typeof this.props.initialValue === "string") {
        return this.props.initialValue;
      } else if (typeof this.props.value === "string") {
        return this.props.value;
      } else {
        return "";
      }
    };
    Editor2.prototype.bindHandlers = function(prevProps) {
      var _this = this;
      if (this.editor !== void 0) {
        configHandlers(this.editor, prevProps, this.props, this.boundHandlers, function(key) {
          return _this.props[key];
        });
        var isValueControlled = function(p) {
          return p.onEditorChange !== void 0 || p.value !== void 0;
        };
        var wasControlled = isValueControlled(prevProps);
        var nowControlled = isValueControlled(this.props);
        if (!wasControlled && nowControlled) {
          this.editor.on(changeEvents, this.handleEditorChange);
          this.editor.on(this.beforeInputEvent(), this.handleBeforeInput);
          this.editor.on("keydown", this.handleBeforeInputSpecial);
          this.editor.on("keyup", this.handleEditorChangeSpecial);
          this.editor.on("NewBlock", this.handleEditorChange);
        } else if (wasControlled && !nowControlled) {
          this.editor.off(changeEvents, this.handleEditorChange);
          this.editor.off(this.beforeInputEvent(), this.handleBeforeInput);
          this.editor.off("keydown", this.handleBeforeInputSpecial);
          this.editor.off("keyup", this.handleEditorChangeSpecial);
          this.editor.off("NewBlock", this.handleEditorChange);
        }
      }
    };
    Editor2.propTypes = EditorPropTypes;
    Editor2.defaultProps = {
      cloudChannel: "7"
    };
    return Editor2;
  }(reactExports.Component)
);
function StarRating({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      onClick: () => onChange(star),
      className: `w-6 h-6 cursor-pointer ${value >= star ? "text-yellow-400" : "text-gray-300"}`,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" })
    },
    star
  )) });
}
function Products() {
  const [products, setProducts] = reactExports.useState([]);
  const [categories, setCategories] = reactExports.useState([]);
  const [tags, setTags] = reactExports.useState([]);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    category_id: "",
    price: "",
    discount: "",
    description: "",
    image: null,
    rating: 0,
    is_best_seller: false,
    is_popular: false,
    tags: []
  });
  reactExports.useEffect(() => {
    fetchAll();
    fetchCategories();
  }, []);
  const fetchAll = async () => {
    const [prod, cats, tagList] = await Promise.all([
      axios.get("/admin/api/products"),
      //axios.get("/admin/api/pages/categories"),
      axios.get("/admin/api/categories"),
      //axios.get("/admin/api/pages/tags"),
      axios.get("/admin/api/tags")
    ]);
    setProducts(prod.data);
    setCategories(cats.data);
    setTags(tagList.data);
  };
  const fetchCategories = async () => {
    const res = await axios.get("/admin/api/categories");
    setCategories(res.data);
  };
  const handleShowForm = (product = null) => {
    setEditing(product);
    setForm(
      product ? {
        ...product,
        image: null,
        // reset image for editing
        tags: product.tags.map((t) => t.id)
      } : {
        name: "",
        category_id: "",
        price: "",
        discount: "",
        description: "",
        image: null,
        rating: 0,
        is_best_seller: false,
        is_popular: false,
        tags: []
      }
    );
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm({
      name: "",
      category_id: "",
      price: "",
      discount: "",
      description: "",
      image: null,
      rating: 0,
      is_best_seller: false,
      is_popular: false,
      tags: []
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "tags") {
      setForm((prev) => ({
        ...prev,
        tags: checked ? [...prev.tags, parseInt(value)] : prev.tags.filter((id) => id !== parseInt(value))
      }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleImageChange = (e) => {
    setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };
  const handleRatingChange = (star) => {
    setForm((prev) => ({ ...prev, rating: star }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "tags") {
        value.forEach((tagId) => data.append("tags[]", tagId));
      } else if (key === "image") {
        if (value) {
          data.append("image", value);
        }
      } else if (key === "is_best_seller" || key === "is_popular") {
        data.append(key, value ? 1 : 0);
      } else {
        data.append(key, value);
      }
    });
    if (editing) {
      await axios.post(`/admin/api/products/${editing.id}?_method=PUT`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    } else {
      await axios.post("/admin/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    }
    fetchAll();
    handleCloseForm();
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/admin/api/products/${id}`);
          fetchAll();
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the product.", "error");
        }
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: "Manage Products", description: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "bg-green-600 text-white my-4 px-4 py-2 rounded hover:bg-green-700 transition",
        onClick: () => handleShowForm(),
        children: showForm ? "Close Form" : "+ Add New Product"
      }
    ),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Product Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "name",
              className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
              value: form.name,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              name: "category_id",
              className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
              value: form.category_id,
              onChange: handleChange,
              required: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Category" }),
                categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.name }, c.id))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              name: "price",
              className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
              value: form.price,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              name: "discount",
              className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
              value: form.discount,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              name: "image",
              className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
              onChange: handleImageChange,
              accept: "image/*",
              required: !editing
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Tags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 items-center", children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                name: "tags",
                value: tag.id,
                checked: form.tags.includes(tag.id),
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: tag.name })
          ] }, tag.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                name: "is_best_seller",
                checked: form.is_best_seller,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Best Seller" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                name: "is_popular",
                checked: form.is_popular,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Popular" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: form.rating, onChange: handleRatingChange })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Editor,
          {
            apiKey: "nd1cpj9d1sncp7xkpggqcggqs7vdezvbzk75u17ls30hectv",
            value: form.description,
            init: {
              height: 200,
              menubar: false,
              plugins: [
                "advlist autolink lists link charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
            },
            onEditorChange: (content) => setForm((prev) => ({ ...prev, description: content }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-green-600 text-white px-4 py-2 rounded-lg", children: editing ? "Update" : "Add Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "bg-gray-500 text-white px-4 py-2 rounded-lg",
            onClick: handleCloseForm,
            children: "Cancel"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border-collapse border border-gray-300 dark:border-gray-700 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-700 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Product Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Discount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Best Seller" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((p) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border border-gray-300 dark:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: `${p.image}`,
              alt: p.name,
              className: "w-16 h-16 object-cover rounded"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: (_a = p.category) == null ? void 0 : _a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.discount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.is_best_seller ? "Yes" : "No" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: p.is_popular ? "Yes" : "No" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "bg-blue-500 text-white px-2 py-1 rounded-lg mr-2",
                onClick: () => handleShowForm(p),
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "bg-red-500 text-white px-2 py-1 rounded-lg",
                onClick: () => handleDelete(p.id),
                children: "Delete"
              }
            )
          ] })
        ] }, p.id);
      }) })
    ] }) }) })
  ] });
}
export {
  Products as default
};
