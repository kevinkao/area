
var Layer = function(options) {
	var self = this;
	self.width = 1920;
	self.height = 1080;
	self.bgColor = '#FFFFFF';
	$.extend(self, options);
	self.className = $.area.namespace + '-' + Layer.className;

	self.$element = $("<div/>");
	self.$element
	.data('layer', self)
	.addClass(self.className)
	.css({
		"width": self.width,
		"height": self.height,
		"background-color": self.bgColor
	});
};

Layer.className = 'layer';

Layer.prototype = {
	addSquare: function() {
		console.log(321);
	}
};