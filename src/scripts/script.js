console.log('%c angular.hamburg ', 'background: #db002f; border: 1px solid #fff');

class Typer {
  constructor(selector) {
    this.words = {
      'developers ': '☕',
      'beginners': '🔥',
      'unicorns': '🦄',
      'hackers': '💀',
      'everyone': '❤'
    };
    this.forward = true;
    this.wait = false;

    this.i = 0;
    this.j = 0;

    [...document.querySelectorAll(selector)].forEach(e => {
      window.console.log("typing");
      setTimeout(this.typing(e), 450);
    });
  }

  delay() {
    return Math.floor(
          Math.random() * (this.forward ? 350 : 100)
        ) + (this.wait ? 600 : (this.forward ? 100 : 50));
  }

  nextWord() {
    let word = '';

    if (this.i === this.words.length) this.i = 0;

    word = Object.keys(this.words)[this.i];

    if (this.j === word.length) {
      this.forward = false;
      this.wait = true;
      this.j--;
      return `${word} ${this.words[Object.keys(this.words)[this.i]]}`;
    }

    if (this.j === -1) {
      this.forward = true;
      this.wait = true;
      this.j = 0;
      this.i++;
      return '';
    }

    return word.slice(0, this.forward ? ++this.j : this.j--);
  }

  typing(e) {
    e.textContent = this.nextWord();
    setTimeout(() => { this.typing(e) }, this.delay());
  }
}

// {
//   new Typer('#typer');
// }
