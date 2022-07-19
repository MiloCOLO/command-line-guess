class Letter {
  constructor(letter) {
    this.letter = letter;
    this.visible = !/[a-z1-9]/i.test(letter)
    };

    toString() {
        if (this.visible === true) {
            return this.letter;
        } else {
            return "_";
        }
    };

    guess() {
        if (this.letter !== this.guess) {
            return false
        } else if (this.letter === this.guess) {
            return true
        }
    };


    getSolution() {
        return this.letter;
    }
}

module.exports = Letter;