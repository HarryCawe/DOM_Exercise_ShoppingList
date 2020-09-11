var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var removeButtons = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Remove"));
	li.appendChild(button);

	button.addEventListener("click", removeParent);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done")		
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

function removeParent(evt) {
  evt.target.parentNode.remove();
}

function addRemoveButtonFunction() {
	for (i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", removeParent);
	}
}

addRemoveButtonFunction();