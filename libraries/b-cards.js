/*Generate cards*/
var bCards = function () {
    var usedNums = new Array(76);
    
    this.getNum = function () {
        return Math.floor(Math.random() * 75);
    };
    
    this.newCard = function () {
        var sqArray = [],
            colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4),
            newNum;
            
        for(var i=0; i < 24; i++) {
            do {
                newNum = (colPlace[i] * 15) + this.getNum() + 1;
                sqArray[i] = newNum;
            }
            while (usedNums[newNum]);

            usedNums[newNum] = true;
        }
        
        return sqArray;
    };
    
    this.anCard = function () {
        for(var i=1; i<usedNums.length; i++) {
            usedNums[i] = false;
        }
        
        return this.newCard();
    }
};

module.exports = bCards;