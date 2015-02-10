import "js/web.jsx";
import "timer.jsx";
import "console.jsx";

native final class TextDecoder {
    function constructor(encode : string);
    function decode(dataView : DataView) : string;
}

__export__ class AccessViaLz4 {
    static var worker : Worker;

    function constructor() {
        if (!AccessViaLz4.worker) {
            AccessViaLz4.worker = new Worker('/src/lz4-xhr.js');
        }
    }

    function startAccess(url : string, callback : function(:string, :int, :int, :int, :int, :int) : void)  : boolean {
        var worker = AccessViaLz4.worker;
        var startTime = Date.now();
        worker.onmessage = (event) -> {
            var result = (event as MessageEvent).data as Map.<variant>;
            var workerReceiveTime = result['workerReceiveTime'] as int - startTime;
            var workerDownloadedTime = result['workerDownloadedTime'] as int - startTime;
            var workerReturnTime = result['workerReturnTime'] as int - startTime;
            var endTime = Date.now();
            var content = result['content'] as ArrayBuffer;
            var dataView = new DataView(content);
            var decoder = new TextDecoder("utf-8");
            var decodedString = decoder.decode(dataView);
            var ret : string;
            try {
                var json = JSON.parse(decodedString);
                ret = json['type'] as string;
            } catch (e : Error) {
                ret = "syntax error: " + decodedString.length as string;
            }
            var parseEndTime = Date.now();
            callback(ret, workerReceiveTime, workerDownloadedTime, workerReturnTime, endTime - startTime, parseEndTime - startTime);
        };
        worker.postMessage(url);

        return false;
    }
}

__export__ class AccessDirect {
    function constructor() {
    }

    function startAccess(url : string, callback : function(:string, :int, :int, :int, :int, :int) : void)  : boolean {
        var startTime = Date.now();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (e : Event) -> {
            if (xhr.readyState == 4) {
                var endTime = Date.now();
                var json = JSON.parse(xhr.responseText);
                var parseEndTime = Date.now();
                var ret = json['type'] as string;
                callback(ret, 0, endTime - startTime, endTime - startTime, endTime - startTime, parseEndTime - startTime);
            }
        };
        xhr.open("GET", url, true);
        xhr.responseType = "text";
        xhr.send();

        return false;
    }
}
