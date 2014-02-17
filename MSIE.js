$(document).on('ready',function() {
	window.resizeTo(400,400);
});

function MSIE(opt) {
	var self = this;
	this.ready = false;
	this.document = null;
	this.window = new ActiveXObject("InternetExplorer.Application");
	this.timeout = opt.timeout;
	this.callbacks = $.Callbacks();
	this.navigate=function(nOpt) {
		var defaultOpt = {
			'timeout':self.timeout,
			'done':function(){},
			'fail':function(){},
			'always':function(){}
		};
		nOpt = $.extend(defaultOpt,nOpt);
	
	};
	this.do=function(dOpt) {
		var defaultOpt = {
		
		};
		dOpt = $.extend(defaultOpt,dOpt);
		if(self.isReady()===false) {
			return;
		}
	};
	this.isReady=function() {
	
	}
}
