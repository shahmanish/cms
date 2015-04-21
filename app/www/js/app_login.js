"use strict";

window.addEventListener("DOMContentLoaded", function() {

	var submitButton = document.getElementById("submitButton");
  var logoutButton = document.getElementById("logoutButton");

  var win = document.defaultView || document.parentWindow;

  submitButton.addEventListener("click", function(e) {

		var xhr = new XMLHttpRequest();

    var usernameValue = document.getElementById("inputUserName").value;
    var passwordValue = document.getElementById("inputPassword").value;

    //console.log("username = " + usernameValue + ", password = " + passwordValue);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var o = JSON.parse(xhr.responseText)
				console.log(o);

        if (o !== "null") {
          win.alert("Success: You are now logged in.");
        } else {
          win.alert("Failed: username and password did not match. Please try again.")
        }
			}
		};

    var o = {
      "username": usernameValue,
      "password": passwordValue
    }

		xhr.open("POST", "http://localhost:8080/api/authenticate", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(o));

	});

  logoutButton.addEventListener("click", function(e) {
    console.log("logout button clicked.");
    win.alert(document.cookie);
    //var cookie = document.cookie;
    //console.dir(cookie);
  });


});
