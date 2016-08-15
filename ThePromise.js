
function ThePromise(fns) {
	this.action(fns);
}
ThePromise.prototype.action = function(fns) {
	var fn = fns.shift();
	if(!fn) {
		return;
	}
	var _f = arguments.callee;
	fn.call(fns, function(result, msg) {
		console.log(msg);
		result && _f(fns);
	});
};