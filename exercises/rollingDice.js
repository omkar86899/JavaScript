const dice = {
    max:6,
    rollDice:function() {
        return Math.floor(Math.random()*this.max)+1;
    }
}

var dict = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};

for (let index = 0; index < 10; index++) {
    var diceNumber = dice.rollDice();
    dict[diceNumber] = dict[diceNumber]+1;
}

console.log(dict);