var bNumbers = function () {
    var min = 1;
    var max = 75;
    
    this.generateNumber = function () {
        return {
            number: Math.floor(Math.random() * (max - min + 1)) + min,
            bingoLetter: this.generateLetter()
        }
    };
    
    this.generateLetter = function () {
        var bingoLetterArray = ['B', 'I', 'N', 'G', 'O'];
        
        return bingoLetterArray[Math.floor((Math.random()*bingoLetterArray.length))];
    }
};

module.exports = bNumbers;