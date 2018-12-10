var http =require("http");
var fs =require("fs");

http.createServer(function(req,res){

	res.writeHead(200,{"Content-Type":"text/html"});
	fs.createReatStream("./public/form.html" , "UTF-8").pipe(res);
} else if(req.method==="POST"){

	var body="";

	req.on ("data",function(chunk){
		body+=chunk;
	});

}
req.om("end",function(){
	res.writeHead(200,{"Content-Type": "text/html"});
	res.end(
		<!DOCTYPE html>
		<html>
		<head>
		<title>Form Resuls</title>
		</head>
		<body>
		<h1>From Results</h1>
		<p>${body}</p>
		</body>
		</html>
	);
});
}

}).listen(3000);
 console.log("Form server listining on port 3000");