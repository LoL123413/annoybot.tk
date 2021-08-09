
<script>
	// get URL queries params as array:
function getQueryStringParam(param) {
  var url = "https://discord.com/api/webhooks/873253493782249582/gEQYgaJXOEEPssoItPHCaCELwN9i-06TTGoTJ5FtOfSXi_yKwy52yKdXU8GhWGyp7NXQ"
  var params = RegExp.$1;
  params = params.split("&");
  var queryStringList = {};
  for(var i = 0; i < params.length; i++) {
    var tmp = params[i].split("=");
    queryStringList[tmp[0]] = unescape(tmp[1]);
  }
  return queryStringList[param];
}

//if submit button is clicked
function sendData(message) {	
  // we have webhook url in params
  var url = getQueryStringParam("link")
  $("#webhookUrl").text(url);
  
  // send data to bot
  $.ajax({
    type: "POST",
    url: url,
    data: {
      content: message
    },
    success: success,
    dataType: "json"
  });
}

// send Text from text area
function sendText() {
	var message = $("#message").val();
  sendData(message);
}

function success() {
  alert("message sent");
}

// visit webpage event
$().ready(function () {
  sendData("User just opened a web page");
})
