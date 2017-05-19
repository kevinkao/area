
var _type = function(item) {
	return Object.prototype.toString.call(item);
};

var type = function(item) {
	var origType = _type(item);
	var pattern = /^\[object\s{1}(\w+)\]$/;
	return origType.match(pattern)[1].toLowerCase();
};

var isObject = function(obj) {
	return type(obj) === 'object';
};


var isArray = function(arr) {
	return type(arr) === 'array';
};

var isFunction = function(func) {
	return type(func) === 'function';
};

var isUndefined = function(variable) {
	return type(variable) === 'undefined';
};

$.area = {
	version : "<%= meta.version %>",
	namespace: "area"
};

$.fn.area = function(options) {
	return $(this).each(function(_, element) {
		var instance = $(element).data('area');
		if (typeof instance === 'undefined') {
			instance = new Area(element, options);
		}
	});
};