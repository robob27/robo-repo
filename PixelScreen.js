function PixelScreen(screenEl,initX,initY) {
	/*
	INFO:
	Turns a canvas element into a pixel display
	by Rob Goodberry
	TODO:
	Make set methods validate new values
	*/
	if(this instanceof Screen===false) {
		return new Screen(screenEl,initX,initY);
	}
	var self = this;
	this.onAlpha = "rgb(0,0,0)";
	this.offAlpha = "rgb(220,220,220)";
	this.clearAlpha = "rgb(255,255,255)";
	this.sizeX = initX;
	this.sizeY = initY;
	this.pixelSize = 10;
	this.pixelSpacing = 1;
	this.screenEl = screenEl;
	this.setScreenEl = function(newScreenEl) {
		self.screenEl = newScreenEl;
		return self;
	}
	this.getScreenEl = function() {
		return $(self.screenEl)[0];
	}
	this.getScreen = function() {
		return self.getScreenEl().getContext("2d");
	}
	this.setOnAlpha = function(newAlpha) {
		self.onAlpha = newAlpha;
		return self;
	}
	this.getOnAlpha = function() {
		return self.onAlpha;
	}
	this.setOffAlpha = function(newAlpha) {
		self.offAlpha = newAlpha;
		return self;
	}
	this.getOffAlpha = function() {
		return self.offAlpha;
	}
	this.setClearAlpha = function(newAlpha) {
		self.clearAlpha = newAlpha;
		return self;
	}
	this.getClearAlpha = function() {
		return self.clearAlpha;
	}
	this.setPixelSize = function(newPixelSize) {
		self.pixelSize = newPixelSize;
		return self;
	}
	this.getPixelSize = function() {
		return self.pixelSize;
	}
	this.setPixelSpacing = function(newPixelSpacing) {
		self.pixelSpacing = newPixelSpacing;
		return self;
	}
	this.getPixelSpacing = function() {
		return self.pixelSpacing;
	}
	this.setSizeX = function(newSizeX) {
		self.sizeX = newSizeX;
		return self;
	}
	this.setSizeY = function(newSizeY) {
		self.sizeY = newSizeY;
		return self;
	}
	this.getSizeX = function() {
		return self.sizeX;
	}
	this.getSizeY = function() {
		return self.sizeY;
	}
	this.screenshot = function(picsEl) {
		var img = $(self.screenEl)[0].toDataURL("img/png");
		var imgEl = $(document.createElement('img')).attr('src',img);
		$(picsEl).empty().append(imgEl);
	}
	this.setSize = function(x,y) {
		if(typeof(x)==='undefined') {
			x = self.getSizeX();
		}
		if(typeof(y)==='undefined') {
			y = self.getSizeY();
		}		
		self.setSizeX(x);
		self.setSizeY(y);
		$(self.screenEl).attr('height',((self.getSizeY()*self.getPixelSize())+(self.getSizeY()*self.getPixelSpacing())+self.getPixelSpacing()));
		$(self.screenEl).attr('width',((self.getSizeX()*self.getPixelSize())+(self.getSizeX()*self.getPixelSpacing())+self.getPixelSpacing()));
		self.clear();
		return self;
	}
	this.setResolution = function(pSize,pSpacing) {
		self.blankScreen();
		self.setPixelSize(pSize);
		self.setPixelSpacing(pSpacing);
		self.setSize();
	}
	this.clear = function() {
		for(var x=0;x<(self.getSizeY());x++) {
			for(var i=0;i<(self.getSizeX());i++) {
				self.setPixel("off",i,x);
			}
		}
		return self;
	}
	this.fillScreen = function() {
		for(var x=0;x<(self.getSizeY());x++) {
			for(var i=0;i<(self.getSizeX());i++) {
				self.setPixel("on",i,x);
			}
		}
		return self;
	}	

	this.blankScreen = function() {
		for(var x=0;x<(self.getSizeY());x++) {
			for(var i=0;i<(self.getSizeX());i++) {
				self.setPixel("clear",i,x);
			}
		}
		return self;		
	}
	
	this.setPixel = function(state,x,y) {
		var innerScreen = self.getScreen();
		switch(state) {
			case "on":
				innerScreen.fillStyle = self.getOnAlpha();
			break;
			case "off":
				innerScreen.fillStyle = self.getOffAlpha();
			break;
			case "clear":
				innerScreen.fillStyle = self.getClearAlpha();
			break;
		}
		if((x >= self.getSizeX() || y >= self.getSizeY()) || (x<0 || y<0)) {
			alert("Tried to interact with non existant pixel.");
			return screen;
		}
		if(x>0) {
			var xPos = (x * self.getPixelSize()) + (x*self.getPixelSpacing()) + self.getPixelSpacing();
		}
		else {
			var xPos = self.getPixelSpacing();
		}
		if(y>0) {
			var yPos = (y * self.getPixelSize()) + (y*self.getPixelSpacing()) + self.getPixelSpacing();
		}
		else {
			var yPos = self.getPixelSpacing();
		}
		innerScreen.fillRect(xPos,yPos,self.getPixelSize(),self.getPixelSize());
		return self;
	}
	self.setSize();
}
