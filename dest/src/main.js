function clicked() {
    var access;
    var url;
    if ($('#uselz4:checked').val()) {
        access = new AccessViaLz4(); 
        url = '/lz4-xhr.lz4';
    } else {
        access = new AccessDirect();
        url = '/lz4-xhr.json';
    }
    access.startAccess(url, function (result, workerReceiveTime, workerDownloadedTime, workerReturnTime, endTime, parseEndTime) {
        console.log(result, workerReceiveTime, workerReturnTime, endTime, parseEndTime);
        $('#log').append('<p>' + result + ': workerRcv=' + workerReceiveTime + ' download=' + workerDownloadedTime +' decoded=' + workerReturnTime + ' workerEndTime=' + endTime + ' parseEnd=' + parseEndTime + '</p>');
    });
    return false;
}

new AccessViaLz4();
