function runningLogger(){
	console.log("I am running!")
}
runningLogger();

function multiplyByTen(parameter){
	console.log(parameter * 10);
}
multiplyByTen(5);
runningLogger();

function stringReturnOne(){
	return "String Number One";
}

function stringReturnTwo(){
	return "String Number Two";
}

function caller(parameter){
	if (typeof(parameter)=='function'){
		parameter();
	}
}
caller(stringReturnOne);

function myDoubleConsoleLog(param1, param2){
	if (typeof(param1)=="function" && typeof(param2)=="function");
	console.log(param1(), param2());
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param1){
	console.log("starting");
	var x = setTimeout(function(){
		if (typeof(param1)=="function"){
			param1(stringReturnOne, stringReturnTwo);
		}
	}, 2000);
	console.log("ending");
	return "interesting";
}
caller2(myDoubleConsoleLog);