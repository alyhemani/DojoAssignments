function randomChance() {
	var winningN= (Math.trunc(Math.random()*100));
	var playerN= (Math.trunc(Math.random()*100))
	var coinsWon=(Math.trunc(Math.random()*50)+50);

		if(winningN === playerN){
			i = i + coinsWon;
			console.log('You win ' + coinsWon + 'coins');
		}
		else if(i<1){
			console.log('You have no quarters left');
		}
		else{
			console.log('You have' + i + 'quarters left');
		}
	}
	var quarters =500;
	for(var i = quarters; i> -1; i--){
		randomChance();
	}