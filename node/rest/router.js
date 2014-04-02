var route = function(handler, pathname, response, request){
	console.log("about to route to " + pathname);
	if(typeof handler[pathname] === "function"){
		handler[pathname](response, request);
	} else{
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Not Found");
		response.end();
	}
}

exports.route = route;