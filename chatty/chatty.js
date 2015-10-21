// // Create an element to serve as the navigation bar for your application.

// // If there are no messages, then the clear messages button should be disabled (see example above).
// The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.





// GETS USER MESSAGE INTO MESSAGE BOX

var clearButton = document.getElementById("clear-button");
var messageBoard = document.getElementById("messages");



var messageField = document.getElementById("message-field");
messageField.addEventListener("keydown", function whenEnter  (keypress) {
  if (keypress.keyCode === 13) {
  	console.log("message", messageField.value);
  	var message = messageField.value;
  	printMessage(message);

  	function printMessage (message) {
  		if (message === "") {
  			messageBoard.innerHTML = "<div id='null-message' class='user-message'>You entered no message.<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;
  		} else {messageBoard.innerHTML = "<div class='user-message'>" + message + "<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;}
      limitPosts();
  	}


  	clearInput();

  	function clearInput() {
  		messageField.value = "";
  		console.log(messageField.value);
  	} 
  }
});

// CLEAR WHOLE MESSAGE BOX

clearButton.addEventListener("click", function () {
	messageBoard.innerHTML = "";
});

// DISABLED CLEAR MESSAGE BOARD BUTTON 

clearButton.setAttribute("disabled", true);

if (messageBoard.innerHTML !== "") {
	clearButton.setAttribute("disabled", false);
	console.log("legnth", messageBoard.innerHTML);
}

// if (messageBoard.innerHTML !== "") {
// 	clearButton.disabled = false;
// } else {clearButton.disabled = true;}


// NOW TO DELETE MESSAGE

document.querySelector("body").addEventListener("click", function (event) {
	if (event.target.id === "delete") {
		deletePost(event);

	}
});

var deletePost = function(localPost) {
	localPost.target.parentNode.remove(localPost);
}


var webpage = document.getElementById("everything");


// TO MAKE LARGE TEXT TOGGLE


var largeTextCheck = document.getElementById("large-text");
largeTextCheck.addEventListener("click", largify);

function largify () {
	webpage.classList.toggle("large-text");
}

// TO MAKE DARK THEME TOGGLE

var darkThemeCheck = document.getElementById("dark-theme");
darkThemeCheck.addEventListener("click", darkify);

function darkify () {
	webpage.classList.toggle("dark-theme");

}


function limitPosts () {
  var numberOfMessages = document.getElementsByClassName("user-message").length;
  if (document.getElementsByClassName("user-message").length > 5) {
    console.log("length of messages", numberOfMessages);
    messageBoard.childNodes.item(5).remove();
  }
};
console.log("limitPosts", limitPosts);










