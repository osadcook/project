function onEnter() {
  document.getElementById("enter").innerHTML = "Hello!";
}

function onDown() {
  document.getElementById("down").innerHTML = "You typed something!";
}

let y = 0;
let z = 0;

function onMove() {
  document.getElementById("move").innerHTML = y+=1;
}

function onClick1() {
  document.getElementById("click1").innerHTML = z+=1;
}

function onClick2() {
  document.getElementById("click2").innerHTML = "This is a click function!";
}

$("#get").on("click", function() {
  $.post("http://35.188.215.226:8000/handle_post", {"name":"Katie"},
  function(data, status){
      console.log("post status");
      console.log(status);
      console.log("post data");
      console.log(data);
      $("#name").html(data["Name"]);
      $("#program").html(data["Program"]);
    })
  }
)