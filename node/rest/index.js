var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handler = {
	"/" : requestHandlers.start,
	"/start" : requestHandlers.start,
	"/upload" : requestHandlers.upload
};
server.start(router, handler);