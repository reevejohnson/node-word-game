function Letter() {
    this.underCharacter = '',
    this.letterGuessed = false  
}

Letter.prototype.guessChecker = function() {
    if(this.letterGuessed) {
        this.letterGuessed = false;
        return this.underCharacter
    } else {
        return '_'
    }
}

Letter.prototype.correctGuess = function(arg) {
    if(arg = this.underCharacter) {
        this.letterGuessed = true
    }
}

module.exports = Letter;