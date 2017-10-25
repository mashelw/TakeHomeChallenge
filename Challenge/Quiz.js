input1 = "tewrwaBcfasaBCabcgadfasdAbcsfaSFD".toLowerCase()
input2 = "abc"
output = 4
counter = 0

for (var i = 0; i < input1.length; i++) {
	
	if(input2[0] === input1[i]){
		var isSubString = true;
		for (var j = 0; j < input2.length; j++) {
			if(input1[i+j] !== input2[j]){
				isSubString = false;			
			}

		}
		if (isSubString) {
			counter += 1; 
		}

	}
}
console.log(counter);