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
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(argv) {
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function _Main$onmessage$LMessageEvent$(event) {
	var xhr;
	var startTime;
	xhr = new XMLHttpRequest();
	startTime = Date.now();
	xhr.onreadystatechange = (function (e) {
		var result;
		var downloadedTime;
		var decoder;
		var decodedContent;
		var decodedTime;
		var data$0;
		if (xhr.readyState === 4) {
			result = ({  });
			downloadedTime = Date.now();
			result.status = xhr.status;
			decoder = ({_buffer: null, _pos: 0, _descriptor: null, _state: 0, _notEnoughData: false, _descriptorStart: 0, _streamSize: null, _dictId: null, _currentStreamChecksum: null, _dataBlock: null, _uncompressed: null, _dataBlockSize: 0, _skippableSize: 0});
			data$0 = xhr.response;
			decoder._buffer = new Uint8Array(data$0);
			Lz4Decoder$_main$LLz4Decoder$(decoder);
			decodedContent = decoder._uncompressed;
			decodedTime = Date.now();
			result.workerReceiveTime = startTime;
			result.workerDownloadedTime = downloadedTime;
			result.workerReturnTime = decodedTime;
			result.content = decodedContent;
			self$0.postMessage(result, [ decodedContent ]);
		}
	});
	xhr.open("GET", event.data + "", true);
	xhr.responseType = "arraybuffer";
	xhr.send();
};

_Main.onmessage$LMessageEvent$ = _Main$onmessage$LMessageEvent$;

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
var self$0 = self;
function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
function Lz4Descriptor() {
	this.blockIndependence = false;
	this.blockChecksum = false;
	this.blockMaxSize = 0;
	this.streamSize = false;
	this.streamChecksum = false;
	this.dict = false;
	this.dictId = 0;
};

$__jsx_extend([Lz4Descriptor], Object);
var _Memcpy$0 = (function () {
    if (Uint8Array.prototype.copyWithin) {
        return {
            memcpy: function (buffer, dstIndex, srcIndex, length) {
                if (srcIndex > dstIndex) {
                    console.log("@@");
                    var endIndex = srcIndex + length;
                    while (srcIndex < endIndex) {
                        buffer[dstIndex++] = buffer[srcIndex++];
                    }
                } else {
                    buffer.copyWithin(dstIndex, srcIndex, length);
                }
            }
        };
    } else {
        return {
            memcpy: function (buffer, dstIndex, srcIndex, length) {
                var endIndex = srcIndex + length;
                while (srcIndex < endIndex) {
                    buffer[dstIndex++] = buffer[srcIndex++];
                }
            }
        };
    }
})();
;
function Lz4Decoder() {
	this._dataBlock = null;
	this._uncompressed = null;
	this._buffer = null;
	this._pos = 0;
	this._descriptor = null;
	this._state = 0;
	this._notEnoughData = false;
	this._descriptorStart = 0;
	this._streamSize = null;
	this._dictId = null;
	this._currentStreamChecksum = null;
	this._dataBlockSize = 0;
	this._skippableSize = 0;
};

$__jsx_extend([Lz4Decoder], Object);
function Lz4Decoder$decode$LLz4Decoder$LArrayBuffer$($this, data) {
	$this._buffer = new Uint8Array(data);
	Lz4Decoder$_main$LLz4Decoder$($this);
	return $this._uncompressed;
};

Lz4Decoder.decode$LLz4Decoder$LArrayBuffer$ = Lz4Decoder$decode$LLz4Decoder$LArrayBuffer$;

function Lz4Decoder$_emit_Error$LLz4Decoder$S($this, msg) {
	throw new Error(msg + ' @' + ($this._pos + ""));
};

Lz4Decoder._emit_Error$LLz4Decoder$S = Lz4Decoder$_emit_Error$LLz4Decoder$S;

function Lz4Decoder$_check_Size$LLz4Decoder$I($this, n) {
	var delta;
	delta = $this._buffer.length - $this._pos;
	if (delta <= 0 || delta < n) {
		if ($this._notEnoughData) {
			throw new Error("Unexpected end of LZ4 stream @" + ($this._pos + ""));
		}
		return true;
	}
	$this._pos = ($this._pos + n) | 0;
	return false;
};

Lz4Decoder._check_Size$LLz4Decoder$I = Lz4Decoder$_check_Size$LLz4Decoder$I;

function Lz4Decoder$_main$LLz4Decoder$($this) {
	var pos;
	var notEnoughData;
	var _buffer$0;
	pos = $this._pos;
	notEnoughData = false;
	while (! notEnoughData && $this._pos < $this._buffer.length) {
		if ($this._state === 0) {
			notEnoughData = Lz4Decoder$_read_MagicNumber$LLz4Decoder$($this);
		}
		if ($this._state === 101) {
			notEnoughData = Lz4Decoder$_read_SkippableSize$LLz4Decoder$($this);
		}
		if ($this._state === 1) {
			notEnoughData = Lz4Decoder$_read_Descriptor$LLz4Decoder$($this);
		}
		if ($this._state === 2) {
			notEnoughData = Lz4Decoder$_read_Size$LLz4Decoder$($this);
		}
		if ($this._state === 3) {
			notEnoughData = Lz4Decoder$_read_DictId$LLz4Decoder$($this);
		}
		if ($this._state === 4) {
			notEnoughData = Lz4Decoder$_read_DescriptorChecksum$LLz4Decoder$($this);
		}
		if ($this._state === 5) {
			notEnoughData = Lz4Decoder$_read_DataBlockSize$LLz4Decoder$($this);
		}
		if ($this._state === 6) {
			notEnoughData = Lz4Decoder$_read_DataBlockData$LLz4Decoder$($this);
		}
		if ($this._state === 7) {
			notEnoughData = Lz4Decoder$_read_DataBlockChecksum$LLz4Decoder$($this);
		}
		if ($this._state === 8) {
			notEnoughData = Lz4Decoder$_uncompress_DataBlock$LLz4Decoder$($this);
		}
		if ($this._state === 90) {
			notEnoughData = Lz4Decoder$_read_EOS$LLz4Decoder$($this);
		}
	}
	if ($this._pos > pos) {
		$this._buffer = (_buffer$0 = $this._buffer).subarray($this._pos, _buffer$0.length);
		$this._pos = 0;
	}
};

Lz4Decoder._main$LLz4Decoder$ = Lz4Decoder$_main$LLz4Decoder$;

function Lz4Decoder$_read_MagicNumber$LLz4Decoder$($this) {
	var pos;
	var magic;
	var msg$0;
	pos = $this._pos;
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
		return true;
	}
	magic = Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0));
	if ((magic & 0xFFFFFFF0) === 0x184D2A50) {
		$this._state = 101;
		return false;
	}
	if (magic !== 0x184D2204) {
		$this._pos = (pos | 0);
		msg$0 = 'Invalid magic number: ' + magic.toString(16).toUpperCase();
		throw new Error(msg$0 + ' @' + ($this._pos + ""));
		return true;
	}
	$this._state = 1;
	return false;
};

Lz4Decoder._read_MagicNumber$LLz4Decoder$ = Lz4Decoder$_read_MagicNumber$LLz4Decoder$;

function Lz4Decoder$_read_SkippableSize$LLz4Decoder$($this) {
	var pos;
	pos = $this._pos;
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
		return true;
	}
	$this._state = 102;
	$this._skippableSize = (Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0)) | 0);
	return false;
};

Lz4Decoder._read_SkippableSize$LLz4Decoder$ = Lz4Decoder$_read_SkippableSize$LLz4Decoder$;

function Lz4Decoder$_read_Descriptor$LLz4Decoder$($this) {
	var pos;
	var descriptor_flg;
	var version;
	var blockMaxSizeIndex;
	var blockMaxSize;
	var msg$0;
	var msg$1;
	var _descriptor$0;
	pos = $this._pos;
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 2)) {
		return true;
	}
	$this._descriptorStart = (pos | 0);
	descriptor_flg = $this._buffer[pos];
	version = descriptor_flg >> 6;
	if (version !== 1) {
		$this._pos = (pos | 0);
		msg$0 = 'Invalid version: ' + (version + "") + ' != ' + "1";
		throw new Error(msg$0 + ' @' + ($this._pos + ""));
		return true;
	}
	if (descriptor_flg >> 1 & 0x1) {
		$this._pos = (pos | 0);
		throw new Error("Reserved bit set @" + ($this._pos + ""));
		return true;
	}
	blockMaxSizeIndex = $this._buffer[pos + 1] >> 4 & 0x7;
	blockMaxSize = Lz4Static.blockMaxSizes[blockMaxSizeIndex];
	if (blockMaxSize == null) {
		$this._pos = (pos | 0);
		msg$1 = 'Invalid block max size: ' + (blockMaxSizeIndex + "");
		throw new Error(msg$1 + ' @' + ($this._pos + ""));
		return true;
	}
	_descriptor$0 = $this._descriptor = ({blockIndependence: false, blockChecksum: false, blockMaxSize: 0, streamSize: false, streamChecksum: false, dict: false, dictId: 0});
	_descriptor$0.blockIndependence = !! (descriptor_flg >> 5 & 0x1);
	_descriptor$0.blockChecksum = !! (descriptor_flg >> 4 & 0x1);
	_descriptor$0.blockMaxSize = blockMaxSize;
	_descriptor$0.streamSize = !! (descriptor_flg >> 3 & 0x1);
	_descriptor$0.streamChecksum = !! (descriptor_flg >> 2 & 0x1);
	_descriptor$0.dict = !! (descriptor_flg & 0x1);
	_descriptor$0.dictId = 0;
	$this._state = 2;
	return false;
};

Lz4Decoder._read_Descriptor$LLz4Decoder$ = Lz4Decoder$_read_Descriptor$LLz4Decoder$;

function Lz4Decoder$_read_Size$LLz4Decoder$($this) {
	var pos;
	if ($this._descriptor.streamSize) {
		pos = $this._pos;
		if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 8)) {
			return true;
		}
		$this._streamSize = [ Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0)), Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos + 4 | 0)) ];
	}
	$this._state = 3;
	return false;
};

Lz4Decoder._read_Size$LLz4Decoder$ = Lz4Decoder$_read_Size$LLz4Decoder$;

function Lz4Decoder$_read_DictId$LLz4Decoder$($this) {
	var pos;
	if ($this._descriptor.dictId) {
		pos = $this._pos;
		if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
			return true;
		}
		$this._dictId = Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0));
	}
	$this._state = 4;
	return false;
};

Lz4Decoder._read_DictId$LLz4Decoder$ = Lz4Decoder$_read_DictId$LLz4Decoder$;

function Lz4Decoder$_read_DescriptorChecksum$LLz4Decoder$($this) {
	var pos;
	var checksum;
	var currentChecksum;
	var d$0;
	var xxh$0$0;
	var _buffer$0;
	pos = $this._pos;
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 1)) {
		return true;
	}
	checksum = (_buffer$0 = $this._buffer)[pos];
	d$0 = _buffer$0.subarray($this._descriptorStart, pos);
	currentChecksum = (xxh$0$0 = new ArrayBufferXXH(0), ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$0$0, d$0))) >> 8 & 0xFF;
	if (currentChecksum !== checksum) {
		$this._pos = (pos | 0);
		throw new Error("Invalid stream descriptor checksum @" + ($this._pos + ""));
		return true;
	}
	$this._state = 5;
	return false;
};

Lz4Decoder._read_DescriptorChecksum$LLz4Decoder$ = Lz4Decoder$_read_DescriptorChecksum$LLz4Decoder$;

function Lz4Decoder$_read_DataBlockSize$LLz4Decoder$($this) {
	var pos;
	var datablock_size;
	pos = $this._pos;
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
		return true;
	}
	datablock_size = Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0));
	if (datablock_size === 0) {
		$this._state = 90;
		return false;
	}
	$this._dataBlockSize = (datablock_size | 0);
	$this._state = 6;
	return false;
};

Lz4Decoder._read_DataBlockSize$LLz4Decoder$ = Lz4Decoder$_read_DataBlockSize$LLz4Decoder$;

function Lz4Decoder$_read_DataBlockData$LLz4Decoder$($this) {
	var pos;
	var datablock_size;
	pos = $this._pos;
	datablock_size = $this._dataBlockSize;
	if (datablock_size & 0x80000000) {
		datablock_size = datablock_size & 0x7FFFFFFF;
	}
	if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, (datablock_size | 0))) {
		return true;
	}
	$this._dataBlock = $this._buffer.subarray(pos, pos + datablock_size);
	$this._state = 7;
	return false;
};

Lz4Decoder._read_DataBlockData$LLz4Decoder$ = Lz4Decoder$_read_DataBlockData$LLz4Decoder$;

function Lz4Decoder$_read_DataBlockChecksum$LLz4Decoder$($this) {
	var pos;
	var checksum;
	var currentChecksum;
	var d$0;
	var xxh$0$0;
	pos = $this._pos;
	if ($this._descriptor.blockChecksum) {
		if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
			return true;
		}
		checksum = Lz4Util$readInt32LE$LUint8Array$I($this._buffer, ($this._pos - 4 | 0));
		d$0 = $this._dataBlock;
		xxh$0$0 = new ArrayBufferXXH(0);
		currentChecksum = ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$0$0, d$0));
		if (currentChecksum !== checksum) {
			$this._pos = (pos | 0);
			throw new Error("Invalid block checksum @" + ($this._pos + ""));
			return true;
		}
	}
	$this._state = 8;
	return false;
};

Lz4Decoder._read_DataBlockChecksum$LLz4Decoder$ = Lz4Decoder$_read_DataBlockChecksum$LLz4Decoder$;

function Lz4Decoder$_uncompress_DataBlock$LLz4Decoder$($this) {
	var uncompressed;
	var decodedSize;
	var msg$0;
	var checksum$0;
	if ($this._dataBlockSize & 0x80000000) {
		uncompressed = $this._dataBlock.buffer;
	} else {
		uncompressed = new ArrayBuffer($this._descriptor.blockMaxSize);
		decodedSize = Lz4Decoder$_uncompress$LLz4Decoder$LUint8Array$LArrayBuffer$($this, $this._dataBlock, uncompressed);
		if (decodedSize < 0) {
			msg$0 = 'Invalid data block: ' + (- decodedSize + "");
			throw new Error(msg$0 + ' @' + ($this._pos + ""));
			return true;
		}
		if (decodedSize < $this._descriptor.blockMaxSize) {
			uncompressed = uncompressed.slice(0, decodedSize);
		}
	}
	$this._dataBlock = null;
	$this._uncompressed = uncompressed;
	if ($this._descriptor.streamChecksum) {
		checksum$0 = $this._currentStreamChecksum;
		if (checksum$0 == null) {
			checksum$0 = new ArrayBufferXXH(0);
		}
		$this._currentStreamChecksum = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(checksum$0, new Uint8Array(uncompressed));
	}
	$this._state = 5;
	return false;
};

Lz4Decoder._uncompress_DataBlock$LLz4Decoder$ = Lz4Decoder$_uncompress_DataBlock$LLz4Decoder$;

function Lz4Decoder$_read_EOS$LLz4Decoder$($this) {
	var pos;
	var checksum;
	var checksum$0;
	var msg$0;
	var checksum$1;
	if ($this._descriptor.streamChecksum) {
		pos = $this._pos;
		if (Lz4Decoder$_check_Size$LLz4Decoder$I($this, 4)) {
			return true;
		}
		checksum = Lz4Util$readInt32LE$LUint8Array$I($this._buffer, (pos | 0));
		console.log("checksum: ", checksum, (checksum$0 = $this._currentStreamChecksum, ArrayBufferXXH$digest$LArrayBufferXXH$(checksum$0)));
		if (checksum !== (checksum$1 = $this._currentStreamChecksum, ArrayBufferXXH$digest$LArrayBufferXXH$(checksum$1))) {
			$this._pos = (pos | 0);
			msg$0 = 'Invalid stream checksum: ' + checksum.toString(16).toUpperCase();
			throw new Error(msg$0 + ' @' + ($this._pos + ""));
			return true;
		}
	}
	$this._state = 0;
	return false;
};

Lz4Decoder._read_EOS$LLz4Decoder$ = Lz4Decoder$_read_EOS$LLz4Decoder$;

function Lz4Decoder$_uncompress$LLz4Decoder$LUint8Array$LArrayBuffer$($this, input, output) {
	var sIdx;
	var eIdx;
	var output8;
	var i;
	var n;
	var j;
	var token;
	var literals_length;
	var l;
	var end;
	var offset;
	var match_length;
	sIdx = 0;
	eIdx = input.length;
	output8 = new Uint8Array(output);
	for ((i = sIdx, n = eIdx, j = 0); i < n; ) {
		token = input[i++];
		literals_length = token >> 4;
		if (literals_length > 0) {
			l = literals_length + 240;
			while (l === 255) {
				l = input[i++];
				literals_length += l;
			}
			end = i + literals_length;
			while (i < end) {
				output8[j++] = input[i++];
			}
			if (i === n) {
				return j;
			}
		}
		offset = input[i++] | input[i++] << 8;
		if (offset === 0 || offset > j) {
			return - (i - 2);
		}
		match_length = token & 0xf;
		l = match_length + 240;
		while (l === 255) {
			l = input[i++];
			match_length += l;
		}
		_Memcpy$0.memcpy(output8, (j | 0), (j - offset | 0), (match_length + 4 | 0));
		j += match_length + 4;
	}
	return j;
};

Lz4Decoder._uncompress$LLz4Decoder$LUint8Array$LArrayBuffer$ = Lz4Decoder$_uncompress$LLz4Decoder$LUint8Array$LArrayBuffer$;

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
function Lz4Static() {
};

$__jsx_extend([Lz4Static], Object);
function Lz4Util() {
};

$__jsx_extend([Lz4Util], Object);
function Lz4Util$descriptorChecksum$LUint8Array$(d) {
	var xxh$0;
	return (xxh$0 = new ArrayBufferXXH(0), ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$0, d))) >> 8 & 0xFF;
};

Lz4Util.descriptorChecksum$LUint8Array$ = Lz4Util$descriptorChecksum$LUint8Array$;

function Lz4Util$streamChecksum$LArrayBuffer$LArrayBufferXXH$(d, checksum) {
	if (checksum == null) {
		checksum = new ArrayBufferXXH(0);
	}
	return ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(checksum, new Uint8Array(d));
};

Lz4Util.streamChecksum$LArrayBuffer$LArrayBufferXXH$ = Lz4Util$streamChecksum$LArrayBuffer$LArrayBufferXXH$;

function Lz4Util$streamChecksum$LArrayBufferXXH$(checksum) {
	return ArrayBufferXXH$digest$LArrayBufferXXH$(checksum);
};

Lz4Util.streamChecksum$LArrayBufferXXH$ = Lz4Util$streamChecksum$LArrayBufferXXH$;

function Lz4Util$blockChecksum$LUint8Array$(d) {
	var xxh$0;
	xxh$0 = new ArrayBufferXXH(0);
	return ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$0, d));
};

Lz4Util.blockChecksum$LUint8Array$ = Lz4Util$blockChecksum$LUint8Array$;

function Lz4Util$readInt32LE$LUint8Array$I(buffer, offset) {
	return buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24;
};

Lz4Util.readInt32LE$LUint8Array$I = Lz4Util$readInt32LE$LUint8Array$I;

function XXH() {
};

$__jsx_extend([XXH], Object);
function XXH$digest$XN(source, seed) {
	var input$0;
	var xxh$0;
	var input$1;
	var xxh$1;
	var input$2;
	var xxh$2;
	if (source instanceof String) {
		input$0 = source + "";
		xxh$0 = new StringXXH(seed);
		return StringXXH$digest$LStringXXH$(StringXXH$update$LStringXXH$S(xxh$0, input$0));
	} else if (source instanceof ArrayBuffer) {
		input$1 = source;
		xxh$1 = new ArrayBufferXXH(seed);
		return ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$1, new Uint8Array(input$1)));
	} else if (source instanceof Uint8Array) {
		input$2 = source;
		xxh$2 = new ArrayBufferXXH(seed);
		return ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$2, input$2));
	}
	return -1;
};

XXH.digest = XXH$digest$XN;
XXH.digest$XN = XXH$digest$XN;

function XXH$digestHex$XN(source, seed) {
	var input$0;
	var xxh$0;
	var this$0$0;
	var result$0$0;
	var input$1;
	var xxh$1;
	var this$0$1;
	var result$0$1;
	var input$2;
	var xxh$2;
	var this$0$2;
	var result$0$2;
	if (source instanceof String) {
		input$0 = source + "";
		xxh$0 = new StringXXH(seed);
		this$0$0 = StringXXH$update$LStringXXH$S(xxh$0, input$0);
		result$0$0 = StringXXH$digest$LStringXXH$(this$0$0);
		return (result$0$0 >>> 16).toString(16) + (result$0$0 & 0xffff).toString(16);
	} else if (source instanceof ArrayBuffer) {
		input$1 = source;
		xxh$1 = new ArrayBufferXXH(seed);
		this$0$1 = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$1, new Uint8Array(input$1));
		result$0$1 = ArrayBufferXXH$digest$LArrayBufferXXH$(this$0$1);
		return (result$0$1 >>> 16).toString(16) + (result$0$1 & 0xffff).toString(16);
	} else if (source instanceof Uint8Array) {
		input$2 = source;
		xxh$2 = new ArrayBufferXXH(seed);
		this$0$2 = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh$2, input$2);
		result$0$2 = ArrayBufferXXH$digest$LArrayBufferXXH$(this$0$2);
		return (result$0$2 >>> 16).toString(16) + (result$0$2 & 0xffff).toString(16);
	}
	return '';
};

XXH.digestHex = XXH$digestHex$XN;
XXH.digestHex$XN = XXH$digestHex$XN;

var _XXHMath$0 = (function () {
    if (Math.imul) {
        return { mul: Math.imul };
    } else {
        return { mul: function (a, b) {
            var ah  = (a >>> 16) & 0xffff;
            var al = a & 0xffff;
            var bh  = (b >>> 16) & 0xffff;
            var bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
        }};
    }
})();
;
function _XXH() {
};

$__jsx_extend([_XXH], Object);
function _XXH$low$N(value) {
	return value & 0xffff;
};

_XXH.low$N = _XXH$low$N;

function _XXH$high$N(value) {
	return value >>> 16 & 0xffff;
};

_XXH.high$N = _XXH$high$N;

function _XXH$fromBits$NN(low, high) {
	return (high | 0) << 16 | (low | 0);
};

_XXH.fromBits$NN = _XXH$fromBits$NN;

function _XXH$rotl$NI(v, n) {
	return v << n | v >>> 32 - n;
};

_XXH.rotl$NI = _XXH$rotl$NI;

function _XXH$update$NNN(source, low, high) {
	var b00;
	var b16;
	var sLow;
	var sHigh;
	var c16;
	var c00;
	var a00;
	var a16;
	var v;
	b00 = 51831;
	b16 = 34283;
	sLow = source & 0xffff;
	sHigh = source >>> 16 & 0xffff;
	c00 = low * b00;
	c16 = c00 >>> 16;
	c16 += high * b00;
	c16 &= 0xFFFF;
	c16 += low * b16;
	a00 = sLow + (c00 & 0xFFFF);
	a16 = a00 >>> 16;
	a16 += sHigh + (c16 & 0xFFFF);
	v = a16 << 16 | a00 & 0xFFFF;
	v = v << 13 | v >>> 19;
	a00 = v & 0xFFFF;
	a16 = v >>> 16;
	b00 = 31153;
	b16 = 40503;
	c00 = a00 * b00;
	c16 = c00 >>> 16;
	c16 += a16 * b00;
	c16 &= 0xFFFF;
	c16 += a00 * b16;
	return _XXH$fromBits$NN(c00 & 0xFFFF, c16 & 0xFFFF);
};

_XXH.update$NNN = _XXH$update$NNN;

function ArrayBufferXXH(seed) {
	this._seed = 0;
	this._v1 = 0;
	this._v2 = 0;
	this._v3 = 0;
	this._v4 = 0;
	this._totalLen = 0;
	this._memSize = 0;
	this._memory = null;
	this._result = 0;
	ArrayBufferXXH$init$LArrayBufferXXH$N(this, seed);
};

$__jsx_extend([ArrayBufferXXH], Object);
function ArrayBufferXXH$digest$LArrayBuffer$N(input, seed) {
	var xxh;
	xxh = new ArrayBufferXXH(seed);
	return ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh, new Uint8Array(input)));
};

ArrayBufferXXH.digest$LArrayBuffer$N = ArrayBufferXXH$digest$LArrayBuffer$N;

function ArrayBufferXXH$digestHex$LArrayBuffer$N(input, seed) {
	var xxh;
	var this$0;
	var result$0;
	xxh = new ArrayBufferXXH(seed);
	this$0 = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh, new Uint8Array(input));
	result$0 = ArrayBufferXXH$digest$LArrayBufferXXH$(this$0);
	return (result$0 >>> 16).toString(16) + (result$0 & 0xffff).toString(16);
};

ArrayBufferXXH.digestHex$LArrayBuffer$N = ArrayBufferXXH$digestHex$LArrayBuffer$N;

function ArrayBufferXXH$digest$LUint8Array$N(input, seed) {
	var xxh;
	xxh = new ArrayBufferXXH(seed);
	return ArrayBufferXXH$digest$LArrayBufferXXH$(ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh, input));
};

ArrayBufferXXH.digest$LUint8Array$N = ArrayBufferXXH$digest$LUint8Array$N;

function ArrayBufferXXH$digestHex$LUint8Array$N(input, seed) {
	var xxh;
	var this$0;
	var result$0;
	xxh = new ArrayBufferXXH(seed);
	this$0 = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(xxh, input);
	result$0 = ArrayBufferXXH$digest$LArrayBufferXXH$(this$0);
	return (result$0 >>> 16).toString(16) + (result$0 & 0xffff).toString(16);
};

ArrayBufferXXH.digestHex$LUint8Array$N = ArrayBufferXXH$digestHex$LUint8Array$N;

ArrayBufferXXH.prototype.init$N = function (seed) {
	var _seed$0;
	_seed$0 = this._seed = seed;
	this._v1 = _seed$0 + 606290984 & 0xffffffff;
	this._v2 = _seed$0 + 2246822519 & 0xffffffff;
	this._v3 = _seed$0;
	this._v4 = _seed$0 - 2654435761 & 0xffffffff;
	this._totalLen = 0;
	this._memSize = 0;
	this._memory = null;
	this._result = 0x1ffffffff;
};


function ArrayBufferXXH$init$LArrayBufferXXH$N($this, seed) {
	var _seed$0;
	_seed$0 = $this._seed = seed;
	$this._v1 = _seed$0 + 606290984 & 0xffffffff;
	$this._v2 = _seed$0 + 2246822519 & 0xffffffff;
	$this._v3 = _seed$0;
	$this._v4 = _seed$0 - 2654435761 & 0xffffffff;
	$this._totalLen = 0;
	$this._memSize = 0;
	$this._memory = null;
	$this._result = 0x1ffffffff;
};

ArrayBufferXXH.init$LArrayBufferXXH$N = ArrayBufferXXH$init$LArrayBufferXXH$N;

ArrayBufferXXH.prototype.update$LArrayBuffer$ = function (input) {
	return ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$(this, new Uint8Array(input));
};


function ArrayBufferXXH$update$LArrayBufferXXH$LArrayBuffer$($this, input) {
	return ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$($this, new Uint8Array(input));
};

ArrayBufferXXH.update$LArrayBufferXXH$LArrayBuffer$ = ArrayBufferXXH$update$LArrayBufferXXH$LArrayBuffer$;

ArrayBufferXXH.prototype.update$LUint8Array$ = function (input) {
	var p;
	var len;
	var bEnd;
	var p32;
	var limit;
	var _memory$0;
	var _memory$1;
	var _memory$2;
	var _memory$3;
	this._result = 0x1ffffffff;
	p = 0;
	len = (input.length | 0);
	bEnd = ((p + len) | 0);
	if (len === 0) {
		return this;
	}
	this._totalLen += len;
	if (this._memSize === 0) {
		this._memory = new Uint8Array(16);
	}
	if (this._memSize + len < 16) {
		this._memory.set(input.subarray(0, len), this._memSize);
		this._memSize += len;
		return this;
	}
	if (this._memSize > 0) {
		this._memory.set(input.subarray(0, 16 - this._memSize), this._memSize);
		p32 = 0;
		this._v1 = _XXH$update$NNN(this._v1, (_memory$0 = this._memory)[p32 + 1] << 8 | _memory$0[p32], _memory$0[p32 + 3] << 8 | _memory$0[p32 + 2]);
		p32 += 4;
		this._v2 = _XXH$update$NNN(this._v2, (_memory$1 = this._memory)[p32 + 1] << 8 | _memory$1[p32], _memory$1[p32 + 3] << 8 | _memory$1[p32 + 2]);
		p32 += 4;
		this._v3 = _XXH$update$NNN(this._v3, (_memory$2 = this._memory)[p32 + 1] << 8 | _memory$2[p32], _memory$2[p32 + 3] << 8 | _memory$2[p32 + 2]);
		p32 += 4;
		this._v4 = _XXH$update$NNN(this._v4, (_memory$3 = this._memory)[p32 + 1] << 8 | _memory$3[p32], _memory$3[p32 + 3] << 8 | _memory$3[p32 + 2]);
		p = (p + (16 - this._memSize)) | 0;
		this._memSize = 0;
	}
	if (p <= bEnd - 16) {
		limit = bEnd - 16;
		do {
			this._v1 = _XXH$update$NNN(this._v1, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			this._v2 = _XXH$update$NNN(this._v2, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			this._v3 = _XXH$update$NNN(this._v3, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			this._v4 = _XXH$update$NNN(this._v4, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
		} while (p <= limit);
	}
	if (p < bEnd) {
		this._memory.set(input.subarray(p, bEnd), this._memSize);
		this._memSize = ((bEnd - p) | 0);
	}
	return this;
};


function ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$($this, input) {
	var p;
	var len;
	var bEnd;
	var p32;
	var limit;
	var _memory$0;
	var _memory$1;
	var _memory$2;
	var _memory$3;
	$this._result = 0x1ffffffff;
	p = 0;
	len = (input.length | 0);
	bEnd = ((p + len) | 0);
	if (len === 0) {
		return $this;
	}
	$this._totalLen += len;
	if ($this._memSize === 0) {
		$this._memory = new Uint8Array(16);
	}
	if ($this._memSize + len < 16) {
		$this._memory.set(input.subarray(0, len), $this._memSize);
		$this._memSize += len;
		return $this;
	}
	if ($this._memSize > 0) {
		$this._memory.set(input.subarray(0, 16 - $this._memSize), $this._memSize);
		p32 = 0;
		$this._v1 = _XXH$update$NNN($this._v1, (_memory$0 = $this._memory)[p32 + 1] << 8 | _memory$0[p32], _memory$0[p32 + 3] << 8 | _memory$0[p32 + 2]);
		p32 += 4;
		$this._v2 = _XXH$update$NNN($this._v2, (_memory$1 = $this._memory)[p32 + 1] << 8 | _memory$1[p32], _memory$1[p32 + 3] << 8 | _memory$1[p32 + 2]);
		p32 += 4;
		$this._v3 = _XXH$update$NNN($this._v3, (_memory$2 = $this._memory)[p32 + 1] << 8 | _memory$2[p32], _memory$2[p32 + 3] << 8 | _memory$2[p32 + 2]);
		p32 += 4;
		$this._v4 = _XXH$update$NNN($this._v4, (_memory$3 = $this._memory)[p32 + 1] << 8 | _memory$3[p32], _memory$3[p32 + 3] << 8 | _memory$3[p32 + 2]);
		p = (p + (16 - $this._memSize)) | 0;
		$this._memSize = 0;
	}
	if (p <= bEnd - 16) {
		limit = bEnd - 16;
		do {
			$this._v1 = _XXH$update$NNN($this._v1, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			$this._v2 = _XXH$update$NNN($this._v2, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			$this._v3 = _XXH$update$NNN($this._v3, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
			$this._v4 = _XXH$update$NNN($this._v4, input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
			p = (p + 4) | 0;
		} while (p <= limit);
	}
	if (p < bEnd) {
		$this._memory.set(input.subarray(p, bEnd), $this._memSize);
		$this._memSize = ((bEnd - p) | 0);
	}
	return $this;
};

ArrayBufferXXH.update$LArrayBufferXXH$LUint8Array$ = ArrayBufferXXH$update$LArrayBufferXXH$LUint8Array$;

ArrayBufferXXH.prototype.digestHex$ = function () {
	var result;
	result = ArrayBufferXXH$digest$LArrayBufferXXH$(this);
	return (result >>> 16).toString(16) + (result & 0xffff).toString(16);
};


function ArrayBufferXXH$digestHex$LArrayBufferXXH$($this) {
	var result;
	result = ArrayBufferXXH$digest$LArrayBufferXXH$($this);
	return (result >>> 16).toString(16) + (result & 0xffff).toString(16);
};

ArrayBufferXXH.digestHex$LArrayBufferXXH$ = ArrayBufferXXH$digestHex$LArrayBufferXXH$;

ArrayBufferXXH.prototype.digest$ = function () {
	var input;
	var p;
	var bEnd;
	var h32;
	var h;
	var u;
	var _result$0;
	var $__jsx_postinc_t;
	if (this._result !== 0x1ffffffff) {
		return this._result;
	}
	input = this._memory;
	p = 0;
	bEnd = this._memSize;
	if (this._totalLen >= 16) {
		h32 = _XXH$rotl$NI(this._v1, 1) + _XXH$rotl$NI(this._v2, 7) + _XXH$rotl$NI(this._v3, 12) + _XXH$rotl$NI(this._v4, 18);
	} else {
		h32 = this._seed + 374761393;
	}
	h32 += this._totalLen;
	while (p <= bEnd - 4) {
		u = _XXH$fromBits$NN(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + _XXHMath$0.mul(u, 3266489917), 17), 668265263);
		p = (p + 4) | 0;
	}
	while (p < bEnd) {
		u = input[($__jsx_postinc_t = p, p = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t)];
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + u * 374761393 & 0xffffffff, 11), 2654435761);
	}
	h = h32 >>> 15;
	h32 = _XXHMath$0.mul(h32 ^ h, 2246822519);
	h = h32 >>> 13;
	h32 = _XXHMath$0.mul(h32 ^ h, 3266489917);
	h = h32 >>> 16;
	_result$0 = this._result = h32 ^ h;
	return _result$0;
};


function ArrayBufferXXH$digest$LArrayBufferXXH$($this) {
	var input;
	var p;
	var bEnd;
	var h32;
	var h;
	var u;
	var _result$0;
	var $__jsx_postinc_t;
	if ($this._result !== 0x1ffffffff) {
		return $this._result;
	}
	input = $this._memory;
	p = 0;
	bEnd = $this._memSize;
	if ($this._totalLen >= 16) {
		h32 = _XXH$rotl$NI($this._v1, 1) + _XXH$rotl$NI($this._v2, 7) + _XXH$rotl$NI($this._v3, 12) + _XXH$rotl$NI($this._v4, 18);
	} else {
		h32 = $this._seed + 374761393;
	}
	h32 += $this._totalLen;
	while (p <= bEnd - 4) {
		u = _XXH$fromBits$NN(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + _XXHMath$0.mul(u, 3266489917), 17), 668265263);
		p = (p + 4) | 0;
	}
	while (p < bEnd) {
		u = input[($__jsx_postinc_t = p, p = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t)];
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + u * 374761393 & 0xffffffff, 11), 2654435761);
	}
	h = h32 >>> 15;
	h32 = _XXHMath$0.mul(h32 ^ h, 2246822519);
	h = h32 >>> 13;
	h32 = _XXHMath$0.mul(h32 ^ h, 3266489917);
	h = h32 >>> 16;
	_result$0 = $this._result = h32 ^ h;
	return _result$0;
};

ArrayBufferXXH.digest$LArrayBufferXXH$ = ArrayBufferXXH$digest$LArrayBufferXXH$;

function StringXXH(seed) {
	this._seed = 0;
	this._v1 = 0;
	this._v2 = 0;
	this._v3 = 0;
	this._v4 = 0;
	this._totalLen = 0;
	this._memSize = 0;
	this._memory = "";
	this._result = 0;
	StringXXH$init$LStringXXH$N(this, seed);
};

$__jsx_extend([StringXXH], Object);
function StringXXH$digest$SN(input, seed) {
	var xxh;
	xxh = new StringXXH(seed);
	return StringXXH$digest$LStringXXH$(StringXXH$update$LStringXXH$S(xxh, input));
};

StringXXH.digest$SN = StringXXH$digest$SN;

function StringXXH$digestHex$SN(input, seed) {
	var xxh;
	var this$0;
	var result$0;
	xxh = new StringXXH(seed);
	this$0 = StringXXH$update$LStringXXH$S(xxh, input);
	result$0 = StringXXH$digest$LStringXXH$(this$0);
	return (result$0 >>> 16).toString(16) + (result$0 & 0xffff).toString(16);
};

StringXXH.digestHex$SN = StringXXH$digestHex$SN;

StringXXH.prototype.init$N = function (seed) {
	var _seed$0;
	_seed$0 = this._seed = seed;
	this._v1 = _seed$0 + 606290984 & 0xffffffff;
	this._v2 = _seed$0 + 2246822519 & 0xffffffff;
	this._v3 = _seed$0;
	this._v4 = _seed$0 - 2654435761 & 0xffffffff;
	this._totalLen = 0;
	this._memSize = 0;
	this._memory = '';
	this._result = 0x1ffffffff;
};


function StringXXH$init$LStringXXH$N($this, seed) {
	var _seed$0;
	_seed$0 = $this._seed = seed;
	$this._v1 = _seed$0 + 606290984 & 0xffffffff;
	$this._v2 = _seed$0 + 2246822519 & 0xffffffff;
	$this._v3 = _seed$0;
	$this._v4 = _seed$0 - 2654435761 & 0xffffffff;
	$this._totalLen = 0;
	$this._memSize = 0;
	$this._memory = '';
	$this._result = 0x1ffffffff;
};

StringXXH.init$LStringXXH$N = StringXXH$init$LStringXXH$N;

StringXXH.prototype.update$S = function (input) {
	var p;
	var len;
	var bEnd;
	var p32;
	var limit;
	var _memory$0;
	this._result = 0x1ffffffff;
	p = 0;
	len = input.length;
	bEnd = ((p + len) | 0);
	if (len === 0) {
		return this;
	}
	this._totalLen += len;
	if (this._memSize === 0) {
		this._memory = '';
	}
	if (this._memSize + len < 16) {
		this._memory += input;
		this._memSize += len;
		return this;
	}
	if (this._memSize > 0) {
		_memory$0 = this._memory += input.slice(0, 16 - this._memSize);
		p32 = 0;
		this._v1 = _XXH$update$NNN(this._v1, _memory$0.charCodeAt(p32 + 1) << 8 | this._memory.charCodeAt(p32), this._memory.charCodeAt(p32 + 3) << 8 | this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		this._v2 = _XXH$update$NNN(this._v2, this._memory.charCodeAt(p32 + 1) << 8 | this._memory.charCodeAt(p32), this._memory.charCodeAt(p32 + 3) << 8 | this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		this._v3 = _XXH$update$NNN(this._v3, this._memory.charCodeAt(p32 + 1) << 8 | this._memory.charCodeAt(p32), this._memory.charCodeAt(p32 + 3) << 8 | this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		this._v4 = _XXH$update$NNN(this._v4, this._memory.charCodeAt(p32 + 1) << 8 | this._memory.charCodeAt(p32), this._memory.charCodeAt(p32 + 3) << 8 | this._memory.charCodeAt(p32 + 2));
		p = (p + (16 - this._memSize)) | 0;
		this._memSize = 0;
		this._memory = '';
	}
	if (p <= bEnd - 16) {
		limit = bEnd - 16;
		do {
			this._v1 = _XXH$update$NNN(this._v1, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			this._v2 = _XXH$update$NNN(this._v2, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			this._v3 = _XXH$update$NNN(this._v3, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			this._v4 = _XXH$update$NNN(this._v4, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
		} while (p <= limit);
	}
	if (p < bEnd) {
		this._memory += input.slice(p);
		this._memSize = ((bEnd - p) | 0);
	}
	return this;
};


function StringXXH$update$LStringXXH$S($this, input) {
	var p;
	var len;
	var bEnd;
	var p32;
	var limit;
	var _memory$0;
	$this._result = 0x1ffffffff;
	p = 0;
	len = input.length;
	bEnd = ((p + len) | 0);
	if (len === 0) {
		return $this;
	}
	$this._totalLen += len;
	if ($this._memSize === 0) {
		$this._memory = '';
	}
	if ($this._memSize + len < 16) {
		$this._memory += input;
		$this._memSize += len;
		return $this;
	}
	if ($this._memSize > 0) {
		_memory$0 = $this._memory += input.slice(0, 16 - $this._memSize);
		p32 = 0;
		$this._v1 = _XXH$update$NNN($this._v1, _memory$0.charCodeAt(p32 + 1) << 8 | $this._memory.charCodeAt(p32), $this._memory.charCodeAt(p32 + 3) << 8 | $this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		$this._v2 = _XXH$update$NNN($this._v2, $this._memory.charCodeAt(p32 + 1) << 8 | $this._memory.charCodeAt(p32), $this._memory.charCodeAt(p32 + 3) << 8 | $this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		$this._v3 = _XXH$update$NNN($this._v3, $this._memory.charCodeAt(p32 + 1) << 8 | $this._memory.charCodeAt(p32), $this._memory.charCodeAt(p32 + 3) << 8 | $this._memory.charCodeAt(p32 + 2));
		p32 += 4;
		$this._v4 = _XXH$update$NNN($this._v4, $this._memory.charCodeAt(p32 + 1) << 8 | $this._memory.charCodeAt(p32), $this._memory.charCodeAt(p32 + 3) << 8 | $this._memory.charCodeAt(p32 + 2));
		p = (p + (16 - $this._memSize)) | 0;
		$this._memSize = 0;
		$this._memory = '';
	}
	if (p <= bEnd - 16) {
		limit = bEnd - 16;
		do {
			$this._v1 = _XXH$update$NNN($this._v1, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			$this._v2 = _XXH$update$NNN($this._v2, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			$this._v3 = _XXH$update$NNN($this._v3, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
			$this._v4 = _XXH$update$NNN($this._v4, input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
			p = (p + 4) | 0;
		} while (p <= limit);
	}
	if (p < bEnd) {
		$this._memory += input.slice(p);
		$this._memSize = ((bEnd - p) | 0);
	}
	return $this;
};

StringXXH.update$LStringXXH$S = StringXXH$update$LStringXXH$S;

StringXXH.prototype.digestHex$ = function () {
	var result;
	result = StringXXH$digest$LStringXXH$(this);
	return (result >>> 16).toString(16) + (result & 0xffff).toString(16);
};


function StringXXH$digestHex$LStringXXH$($this) {
	var result;
	result = StringXXH$digest$LStringXXH$($this);
	return (result >>> 16).toString(16) + (result & 0xffff).toString(16);
};

StringXXH.digestHex$LStringXXH$ = StringXXH$digestHex$LStringXXH$;

StringXXH.prototype.digest$ = function () {
	var input;
	var p;
	var bEnd;
	var h32;
	var h;
	var u;
	var _result$0;
	var $__jsx_postinc_t;
	if (this._result !== 0x1ffffffff) {
		return this._result;
	}
	input = this._memory;
	p = 0;
	bEnd = this._memSize;
	if (this._totalLen >= 16) {
		h32 = _XXH$rotl$NI(this._v1, 1) + _XXH$rotl$NI(this._v2, 7) + _XXH$rotl$NI(this._v3, 12) + _XXH$rotl$NI(this._v4, 18);
	} else {
		h32 = this._seed + 374761393;
	}
	h32 += this._totalLen;
	while (p <= bEnd - 4) {
		u = _XXH$fromBits$NN(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + _XXHMath$0.mul(u, 3266489917), 17), 668265263);
		p = (p + 4) | 0;
	}
	while (p < bEnd) {
		u = input.charCodeAt(($__jsx_postinc_t = p, p = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t));
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + u * 374761393 & 0xffffffff, 11), 2654435761);
	}
	h = h32 >>> 15;
	h32 = _XXHMath$0.mul(h32 ^ h, 2246822519);
	h = h32 >>> 13;
	h32 = _XXHMath$0.mul(h32 ^ h, 3266489917);
	h = h32 >>> 16;
	_result$0 = this._result = h32 ^ h;
	return _result$0;
};


function StringXXH$digest$LStringXXH$($this) {
	var input;
	var p;
	var bEnd;
	var h32;
	var h;
	var u;
	var _result$0;
	var $__jsx_postinc_t;
	if ($this._result !== 0x1ffffffff) {
		return $this._result;
	}
	input = $this._memory;
	p = 0;
	bEnd = $this._memSize;
	if ($this._totalLen >= 16) {
		h32 = _XXH$rotl$NI($this._v1, 1) + _XXH$rotl$NI($this._v2, 7) + _XXH$rotl$NI($this._v3, 12) + _XXH$rotl$NI($this._v4, 18);
	} else {
		h32 = $this._seed + 374761393;
	}
	h32 += $this._totalLen;
	while (p <= bEnd - 4) {
		u = _XXH$fromBits$NN(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + _XXHMath$0.mul(u, 3266489917), 17), 668265263);
		p = (p + 4) | 0;
	}
	while (p < bEnd) {
		u = input.charCodeAt(($__jsx_postinc_t = p, p = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t));
		h32 = _XXHMath$0.mul(_XXH$rotl$NI(h32 + u * 374761393 & 0xffffffff, 11), 2654435761);
	}
	h = h32 >>> 15;
	h32 = _XXHMath$0.mul(h32 ^ h, 2246822519);
	h = h32 >>> 13;
	h32 = _XXHMath$0.mul(h32 ^ h, 3266489917);
	h = h32 >>> 16;
	_result$0 = $this._result = h32 ^ h;
	return _result$0;
};

StringXXH.digest$LStringXXH$ = StringXXH$digest$LStringXXH$;

function Lz4Static$x2ESTATES() {
};

$__jsx_extend([Lz4Static$x2ESTATES], Object);
function Lz4Static$x2ESIZES() {
};

$__jsx_extend([Lz4Static$x2ESIZES], Object);
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});
Lz4Static.MAGICNUMBER = 0x184D2204;
Lz4Static.EOS = 0;
Lz4Static.VERSION = 1;
Lz4Static.MAGICNUMBER_SKIPPABLE = 0x184D2A50;
Lz4Static.blockMaxSizes = [ null, null, null, null, 65536, 262144, 1048576, 4194304 ];
Lz4Static.extension = ".lz4";
Lz4Util.CHECKSUM_SEED = 0;
_XXH.PRIME32_1 = 2654435761;
_XXH.PRIME32_2 = 2246822519;
_XXH.PRIME32_3 = 3266489917;
_XXH.PRIME32_4 = 668265263;
_XXH.PRIME32_5 = 374761393;
_XXH.PRIME32_1plus2 = 606290984;
Lz4Static$x2ESTATES.MAGIC = 0;
Lz4Static$x2ESTATES.DESCRIPTOR = 1;
Lz4Static$x2ESTATES.SIZE = 2;
Lz4Static$x2ESTATES.DICTID = 3;
Lz4Static$x2ESTATES.DESCRIPTOR_CHECKSUM = 4;
Lz4Static$x2ESTATES.DATABLOCK_SIZE = 5;
Lz4Static$x2ESTATES.DATABLOCK_DATA = 6;
Lz4Static$x2ESTATES.DATABLOCK_CHECKSUM = 7;
Lz4Static$x2ESTATES.DATABLOCK_UNCOMPRESS = 8;
Lz4Static$x2ESTATES.DATABLOCK_COMPRESS = 9;
Lz4Static$x2ESTATES.CHECKSUM = 10;
Lz4Static$x2ESTATES.CHECKSUM_UPDATE = 11;
Lz4Static$x2ESTATES.EOS = 90;
Lz4Static$x2ESTATES.SKIP_SIZE = 101;
Lz4Static$x2ESTATES.SKIP_DATA = 102;
Lz4Static$x2ESIZES.MAGIC = 4;
Lz4Static$x2ESIZES.DESCRIPTOR = 2;
Lz4Static$x2ESIZES.SIZE = 8;
Lz4Static$x2ESIZES.DICTID = 4;
Lz4Static$x2ESIZES.DESCRIPTOR_CHECKSUM = 1;
Lz4Static$x2ESIZES.DATABLOCK_SIZE = 4;
Lz4Static$x2ESIZES.DATABLOCK_CHECKSUM = 4;
Lz4Static$x2ESIZES.CHECKSUM = 4;
Lz4Static$x2ESIZES.EOS = 4;
Lz4Static$x2ESIZES.SKIP_SIZE = 4;

var $__jsx_classMap = {
	"src/lz4-xhr.jsx": {
		_Main: _Main,
		_Main$: _Main
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
	"node_modules/webworker.jsx/src/webworker.jsx": {
		TimerHandle: TimerHandle
	},
	"node_modules/lz4.jsx/src/lz4_decoder.jsx": {
		Lz4Descriptor: Lz4Descriptor,
		Lz4Descriptor$: Lz4Descriptor,
		Lz4Decoder: Lz4Decoder,
		Lz4Decoder$: Lz4Decoder
	},
	"node_modules/lz4.jsx/src/lz4_static.jsx": {
		Lz4Static: Lz4Static,
		Lz4Static$: Lz4Static,
		"Lz4Static.STATES": Lz4Static$x2ESTATES,
		"Lz4Static.STATES$": Lz4Static$x2ESTATES,
		"Lz4Static.SIZES": Lz4Static$x2ESIZES,
		"Lz4Static.SIZES$": Lz4Static$x2ESIZES
	},
	"node_modules/lz4.jsx/src/lz4_utils.jsx": {
		Lz4Util: Lz4Util,
		Lz4Util$: Lz4Util
	},
	"node_modules/xxhash.jsx/src/xxhash.jsx": {
		XXH: XXH,
		XXH$: XXH,
		_XXH: _XXH,
		_XXH$: _XXH,
		ArrayBufferXXH: ArrayBufferXXH,
		ArrayBufferXXH$N: ArrayBufferXXH,
		StringXXH: StringXXH,
		StringXXH$N: StringXXH
	}
};


})(JSX);


var module = JSX.require("src/lz4-xhr.jsx");
if (!module) {
    throw new ReferenceError("entry point module not found");
}
if (!module._Main) {
    throw new ReferenceError("entry point _Main not found");
}
if (!module._Main.onmessage && !module._Main.onmessage$LMessageEvent$) {
    throw new ReferenceError("entry point _Main.onmessage(:Event):void not found");
}
addEventListener('message', function(e) {
    if (module._Main.onmessage) {
        module._Main.onmessage(e);
    } else {
        module._Main.onmessage$LMessageEvent$(e);
    }
}, false);
if (module._Main.main) {
    module._Main.main([]);
}
