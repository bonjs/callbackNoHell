
/*
function ThePromise(fns) {
	this.action(fns);
}
ThePromise.prototype.action = function(fns) {
	var _f = arguments.callee;
	var fn = fns.shift();
	fn && fn.call(fns, function(result, msg) {
		console.log(msg);
		result && _f(fns);
	});
};

var thePromise = function() {
	
	var _f = arguments.callee;
	
	var fns = Array.prototype.slice.call(arguments, 0);
	var fn = fns.shift();
	fn && fn.call(null, function(result, msg) {
		console.log(msg);
		result && _f.apply(null, fns);
	});
}
*/


bonPromise = function(fns) {
	var _promise = arguments.callee;
	
	var sliceProto = Array.prototype.slice;
	
	var params = [function(result) {
		result && _promise.apply(null, [fns].concat(sliceProto.apply(arguments)));
	}].concat(sliceProto.call(arguments, 1));
	
	var fn = fns.shift();
	fn && fn.apply(null, params);
};

