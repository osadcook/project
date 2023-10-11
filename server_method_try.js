$("#m1").on("click", function() {
	$.get("http://35.188.215.226:8000/handle_get?name=name1&tag=tag1", 
	function(data, status){
			console.log("status");
			console.log(status);
			console.log("data");
			console.log(data);
			$("#name").html(data["Name"]);
			$("#tag").html(data["Tag"]);
		})
	}
)

$("#m2").on("click", function() {
	$.post("http://35.188.215.226:8000/handle_post", {"name":"alex"},
	function(data, status){
			console.log("post status");
			console.log(status);
			console.log("post data");
			console.log(data);
			$("#name").html(data["Name"]);
			$("#tag").html(data["Tag"]);
		})
	}
)

function yellow() {
	setTimeout( () => {
		console.log("yellow!!");
		}, 1000)
}

function white() {
		console.log("white!!");
}

yellow()
white()