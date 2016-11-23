
function f1(f) {
    $.get('data/step1.json', {}, function(d) {
    	if(d.success) {
			console.log('step1成功');
    		f(true, d.step2Id);	// 下个函数请示可能依赖这次的请求结果
    	} else {
    		f(false);
    	}
    });
}
function f2(f) {
    $.get('data/step2.json', {}, function(d) {
    	if(d.success) {
			console.log('step2成功');
    		f(true, d.step3Id);	// 下个函数请示可能依赖这次的请求结果
    	} else {
    		f(false);
    	}
    });
}
function f3(f) {
    $.get('data/step3.json', {}, function(d) {
    	if(d.success) {
			console.log('step3成功');
    		f(true, 'step3成功');
    	} else {
    		f(false);
    	}
    });
}

bonPromise([f2, f1, f3]);