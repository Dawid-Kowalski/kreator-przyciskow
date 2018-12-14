function Button(width, height, background, text, border, borderRadius, fontColor, fontSize, padding, isCenterText, isDisabled) {
	this.width = width || 100;
	this.height = height || 50;
	this.background = background || 'grey';
	this.text = text || 'przycisk';
	this.border = border || 3;
	this.borderRadius = borderRadius || 3;
	this.fontColor = fontColor || 'black';
	this.fontSize = fontSize || 12;
	this.padding = padding || 5;
	this.isCenterText = isCenterText || true;
	this.isDisabled = isDisabled || false;
}