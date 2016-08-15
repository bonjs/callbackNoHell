
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