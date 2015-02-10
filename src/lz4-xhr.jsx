import "js/web.jsx";
import "webworker.jsx";
import "lz4.jsx";

class _Main
{
    static function main(argv : string[]) : void
    {
        // called when loading.
    }

    static function onmessage (event : MessageEvent) : void
    {
        var xhr = new XMLHttpRequest();
        var startTime = Date.now();
        xhr.onreadystatechange = (e : Event) -> {
            if (xhr.readyState == 4) {
                var result = {} : Map.<variant>;
                var downloadedTime = Date.now();
                result['status'] = xhr.status;
                var decoder = new Lz4Decoder();
                var decodedContent = decoder.decode(xhr.response as ArrayBuffer);
                var decodedTime = Date.now();
                result['workerReceiveTime'] = startTime;
                result['workerDownloadedTime'] = downloadedTime;
                result['workerReturnTime'] = decodedTime;
                result['content'] = decodedContent;
                self.postMessage(result, [decodedContent]);
            }
        };
        xhr.open("GET", event.data as string, true);
        xhr.responseType = "arraybuffer";
        xhr.send();
    }
}
