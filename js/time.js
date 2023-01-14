var urlParams;
    (function () {
        var match,
            pl     = /\+/g,
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);
        urlParams = {};
        while (match = search.exec(query))
           urlParams[decode(match[1])] = decode(match[2]);
    })();
    var output = document.getElementById("RTC");
    if (urlParams["style"]) output.setAttribute("style", urlParams["style"]);
    if (urlParams["bodyStyle"]) document.body.setAttribute("style", urlParams["bodyStyle"]);
    var c;
    setInterval(
    c = function() {
        output.innerText = moment().format(urlParams["format"] || 'HH:mm:ss');
    }, 1000);
    c();