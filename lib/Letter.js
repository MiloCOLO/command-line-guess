class Letter {
  constructor(letter) {
    this.char = letter;
    this.visible = !/[a-z1-9]/i.test(letter)
    };

    toString() {
        if (this.visible === true) {
            return this.char;
        } else {
            return "_";
        }
    };

    guess(guess) {
        if (this.char !== guess) {
            return false
        } else if (this.char === guess) {
            return true
        }
    };


    getSolution() {
        return this.char;
    }
}

module.exports = Letter;