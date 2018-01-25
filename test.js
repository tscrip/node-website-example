function getDBInfo(time){
	return new Promise(function(resolve){
		setTimeout(resolve, time);
	})
}

async function doStuff() {
	try{
		await getDBInfo(2000);
		return "Test"
	}
	catch(err){
		console.log(err)
	}
};

doStuff();
console.log(val);