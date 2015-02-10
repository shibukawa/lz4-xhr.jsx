// generatedy by JSX compiler 0.9.89 (2014-05-20 06:01:03 +0900; 8e8c6105f36f3dfe440ea026a3c93a3444977102)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
	this.__seed = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function (seed) {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;
  		this.__seed = seed;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function AccessViaLz4() {
	if (! AccessViaLz4.worker) {
		AccessViaLz4.worker = new Worker('/src/lz4-xhr.js');
	}
};

$__jsx_extend([AccessViaLz4], Object);
AccessViaLz4.prototype.startAccess$SF$SIIIIIV$ = function (url, callback) {
	var $this = this;
	var worker;
	var startTime;
	worker = AccessViaLz4.worker;
	startTime = Date.now();
	worker.onmessage = (function (event) {
		var result;
		var workerReceiveTime;
		var workerDownloadedTime;
		var workerReturnTime;
		var endTime;
		var content;
		var dataView;
		var decoder;
		var decodedString;
		var ret;
		var json;
		var parseEndTime;
		result = event.data;
		workerReceiveTime = (result.workerReceiveTime | 0) - startTime;
		workerDownloadedTime = (result.workerDownloadedTime | 0) - startTime;
		workerReturnTime = (result.workerReturnTime | 0) - startTime;
		endTime = Date.now();
		content = result.content;
		dataView = new DataView(content);
		decoder = new TextDecoder("utf-8");
		decodedString = decoder.decode(dataView);
		try {
			json = JSON.parse(decodedString);
			ret = json.type + "";
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				ret = "syntax error: " + (decodedString.length + "");
			} else {
				throw $__jsx_catch_0;
			}
		}
		parseEndTime = Date.now();
		callback(ret, (workerReceiveTime | 0), (workerDownloadedTime | 0), (workerReturnTime | 0), (endTime - startTime | 0), (parseEndTime - startTime | 0));
	});
	worker.postMessage(url);
	return false;
};

AccessViaLz4.prototype.startAccess = AccessViaLz4.prototype.startAccess$SF$SIIIIIV$;

function AccessViaLz4$startAccess$LAccessViaLz4$SF$SIIIIIV$($this, url, callback) {
	var worker;
	var startTime;
	worker = AccessViaLz4.worker;
	startTime = Date.now();
	worker.onmessage = (function (event) {
		var result;
		var workerReceiveTime;
		var workerDownloadedTime;
		var workerReturnTime;
		var endTime;
		var content;
		var dataView;
		var decoder;
		var decodedString;
		var ret;
		var json;
		var parseEndTime;
		result = event.data;
		workerReceiveTime = (result.workerReceiveTime | 0) - startTime;
		workerDownloadedTime = (result.workerDownloadedTime | 0) - startTime;
		workerReturnTime = (result.workerReturnTime | 0) - startTime;
		endTime = Date.now();
		content = result.content;
		dataView = new DataView(content);
		decoder = new TextDecoder("utf-8");
		decodedString = decoder.decode(dataView);
		try {
			json = JSON.parse(decodedString);
			ret = json.type + "";
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				ret = "syntax error: " + (decodedString.length + "");
			} else {
				throw $__jsx_catch_0;
			}
		}
		parseEndTime = Date.now();
		callback(ret, (workerReceiveTime | 0), (workerDownloadedTime | 0), (workerReturnTime | 0), (endTime - startTime | 0), (parseEndTime - startTime | 0));
	});
	worker.postMessage(url);
	return false;
};

AccessViaLz4.startAccess$LAccessViaLz4$SF$SIIIIIV$ = AccessViaLz4$startAccess$LAccessViaLz4$SF$SIIIIIV$;

function AccessDirect() {
};

$__jsx_extend([AccessDirect], Object);
AccessDirect.prototype.startAccess$SF$SIIIIIV$ = function (url, callback) {
	var $this = this;
	var startTime;
	var xhr;
	startTime = Date.now();
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = (function (e) {
		var endTime;
		var json;
		var parseEndTime;
		var ret;
		if (xhr.readyState === 4) {
			endTime = Date.now();
			json = JSON.parse(xhr.responseText);
			parseEndTime = Date.now();
			ret = json.type + "";
			callback(ret, 0, (endTime - startTime | 0), (endTime - startTime | 0), (endTime - startTime | 0), (parseEndTime - startTime | 0));
		}
	});
	xhr.open("GET", url, true);
	xhr.responseType = "text";
	xhr.send();
	return false;
};

AccessDirect.prototype.startAccess = AccessDirect.prototype.startAccess$SF$SIIIIIV$;

function AccessDirect$startAccess$LAccessDirect$SF$SIIIIIV$($this, url, callback) {
	var startTime;
	var xhr;
	startTime = Date.now();
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = (function (e) {
		var endTime;
		var json;
		var parseEndTime;
		var ret;
		if (xhr.readyState === 4) {
			endTime = Date.now();
			json = JSON.parse(xhr.responseText);
			parseEndTime = Date.now();
			ret = json.type + "";
			callback(ret, 0, (endTime - startTime | 0), (endTime - startTime | 0), (endTime - startTime | 0), (parseEndTime - startTime | 0));
		}
	});
	xhr.open("GET", url, true);
	xhr.responseType = "text";
	xhr.send();
	return false;
};

AccessDirect.startAccess$LAccessDirect$SF$SIIIIIV$ = AccessDirect$startAccess$LAccessDirect$SF$SIIIIIV$;

function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function ScrollOptionsHorizontal() {
	this.behavior = "";
	this.x = 0;
};

$__jsx_extend([ScrollOptionsHorizontal], ScrollOptions);
function ScrollOptionsVertical() {
	this.behavior = "";
	this.y = 0;
};

$__jsx_extend([ScrollOptionsVertical], ScrollOptions);
function BoxQuadOptions() {
	this.box = "";
	this.relativeTo = null;
};

$__jsx_extend([BoxQuadOptions], Object);
function ConvertCoordinateOptions() {
	this.fromBox = "";
	this.toBox = "";
};

$__jsx_extend([ConvertCoordinateOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function DOMPointInit() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

$__jsx_extend([DOMPointInit], Object);
function SourceInfo() {
	this.sourceId = "";
	this.kind = "";
	this.label = "";
};

$__jsx_extend([SourceInfo], Object);
function MediaStreamTrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([MediaStreamTrackEventInit], EventInit);
function MediaSourceStates() {
	this.sourceType = "";
	this.sourceId = "";
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
	this.volume = null;
};

$__jsx_extend([MediaSourceStates], Object);
function CapabilityRange() {
	this.max = null;
	this.min = null;
	this.supported = false;
};

$__jsx_extend([CapabilityRange], Object);
function AllVideoCapabilities() {
	this.sourceType = null;
	this.sourceId = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
};

$__jsx_extend([AllVideoCapabilities], Object);
function AllAudioCapabilities() {
	this.volume = null;
};

$__jsx_extend([AllAudioCapabilities], Object);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this._optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function MinMaxConstraint() {
	this.max = null;
	this.min = null;
};

$__jsx_extend([MinMaxConstraint], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return js$0.global.setTimeout(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	js$0.global.clearTimeout(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return js$0.global.setInterval(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	js$0.global.clearInterval(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++i) {
			name = prefixes[i] + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return js$0.global[name](callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return js$0.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++i) {
			name = prefixes[i] + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					js$0.global[name](timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
var js$0 = (function () {
	var global = Function("return this")();
	return {
		global: global,
		eval: global.eval,
		invoke: function(invocant, methodName, args) {
			return invocant[methodName].apply(invocant, args);
		},
		newFunction: Function
	};
}());
AccessViaLz4.worker = null;
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"sample/sample-client.jsx": {
		AccessViaLz4: AccessViaLz4,
		AccessViaLz4$: AccessViaLz4,
		AccessDirect: AccessDirect,
		AccessDirect$: AccessDirect
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		ScrollOptionsHorizontal: ScrollOptionsHorizontal,
		ScrollOptionsHorizontal$: ScrollOptionsHorizontal,
		ScrollOptionsVertical: ScrollOptionsVertical,
		ScrollOptionsVertical$: ScrollOptionsVertical,
		BoxQuadOptions: BoxQuadOptions,
		BoxQuadOptions$: BoxQuadOptions,
		ConvertCoordinateOptions: ConvertCoordinateOptions,
		ConvertCoordinateOptions$: ConvertCoordinateOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		DOMPointInit: DOMPointInit,
		DOMPointInit$: DOMPointInit,
		SourceInfo: SourceInfo,
		SourceInfo$: SourceInfo,
		MediaStreamTrackEventInit: MediaStreamTrackEventInit,
		MediaStreamTrackEventInit$: MediaStreamTrackEventInit,
		MediaSourceStates: MediaSourceStates,
		MediaSourceStates$: MediaSourceStates,
		CapabilityRange: CapabilityRange,
		CapabilityRange$: CapabilityRange,
		AllVideoCapabilities: AllVideoCapabilities,
		AllVideoCapabilities$: AllVideoCapabilities,
		AllAudioCapabilities: AllAudioCapabilities,
		AllAudioCapabilities$: AllAudioCapabilities,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		MinMaxConstraint: MinMaxConstraint,
		MinMaxConstraint$: MinMaxConstraint,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	}
};


})(JSX);

var AccessViaLz4 = JSX.require("sample/sample-client.jsx").AccessViaLz4;
var AccessDirect = JSX.require("sample/sample-client.jsx").AccessDirect;
