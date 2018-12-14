function Button(width, height, background, text, border, borderRadius, fontColor, fontSize, padding, isCenterText, isDisabled) {
	this.width = width || 100;
	this.height = height || 50;
	this.background = background || "grey";
	this.text = text || "przycisk";
	this.border = border || 1;
	this.borderRadius = borderRadius || 3;
	this.fontColor = fontColor || "black";
	this.fontSize = fontSize || 12;
	this.padding = padding || 5;
	this.isCenterText = isCenterText || "center";
	this.isDisabled = isDisabled || false;
}

Button.prototype = {
	create: function() {

		let self = this;

		let container = document.getElementById("container");

		this.element = document.createElement("button");

		this.element.style.width = buttonWitdh;
		this.element.style.height = buttonHeight;
		this.element.style.backgroundColor = buttonBackgroundcolor;
		this.element.innerHTML = buttonText;
		this.element.style.border = buttonBorder + " solid black";
		this.element.style.borderRadius = buttonBorderRadius;
		this.element.style.color = buttonFontColor;
		this.element.style.fontSize = buttonFontSize;
		this.element.style.padding = buttonPadding;
		this.element.style.textAlign = buttonCentered;
		this.element.disabled = buttonDisabled;

		this.element.addEventListener('click', function() {
			alert(self.text);
		});

		container.appendChild(this.element);
	}
}

function createButton() {

	takeDataforButtons();

	let button = new Button(buttonWitdh, buttonHeight, buttonBackgroundcolor, buttonText, buttonBorder, buttonBorderRadius, buttonFontColor, buttonFontSize,  buttonPadding, buttonDisabled, buttonCentered);
	button.create();
}

function  takeDataforButtons() {
	buttonWitdh = document.getElementById("button-width").value + "px";
	buttonHeight = document.getElementById("button-height").value + "px";
	buttonBackgroundcolor = document.getElementById("button-color").value;
	buttonText = document.getElementById("button-text").value;
	buttonBorder = document.getElementById("button-border").value + "px";
	buttonBorderRadius = document.getElementById("button-border-radius").value + "px";
	buttonFontColor = document.getElementById("button-font-color").value;
	buttonFontSize = document.getElementById("button-font-size").value + "px";
	buttonPadding = document.getElementById("button-padding").value + "px";

	buttonDisabled = false;
	if(document.getElementById("button-disabled").checked) {
		buttonDisabled = true;
	}

	buttonCentered = "center";
	if(document.getElementById("button-left-center").checked) {
		buttonCentered = "left";
	}
}