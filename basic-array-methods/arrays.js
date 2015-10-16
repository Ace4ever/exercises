/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3.  true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/



function reversal(origString) {
var reversedString = origString.split("").reverse().join("");
document.write(reversedString);

return reversedString;
}

function alphabits(origString) {
document.write("<div>" + origString.split("").sort().join("") + "<div>");
}

function palindrome(origString) {
var newString = origString.replace(/[\s,]/g, "").toLowerCase();
var reverseNewString = reversal(newString);

if (newString === reverseNewString) {
    document.write("<div>\"" + origString + "\" is a palidrome</div>");
	} else {
		document.write("<div>\"" + origString + "\" is not a palindrome</div>");
	}
}

var testString = "Excited, Happy, Sad, Mad, Embarrased, Shy, Outgoing"
reversal(testString);
alphabits(testString);
palindrome(testString);