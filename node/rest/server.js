var http = require("http");
var url = require("url");

var start = function(router, handler){
	function onRequest(request, res){
		var path = url.parse(request.url).pathname;
		router.route(handler, path, res, request);
	}
	http.createServer(onRequest).listen("8000");
	console.log("server started");
}

exports.start =start;


