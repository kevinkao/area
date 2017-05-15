
var Area = function(element, options) {
	var self = this;
	$.extend(self, options);
	self.containerClass = $.area.namespace + '-' + Area.containerClass;
	self.$element       = $(element).addClass(self.containerClass);

	self.$element
	.css({	
		"absolute": "absolute",
		"background-color": "#C8C8C8"
	});


	switch(type(options.source)) {
		case 'array':
			$.each(options.source, function(_, prop) {
				self.addLayer(prop);
			});
			break;
	}
};

Area.containerClass = 'container';

Area.prototype = {
	addLayer: function(properites) {
		return new Layer(properites);
	}
};