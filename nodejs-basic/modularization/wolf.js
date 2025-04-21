class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100) + 1;
  }

  howl() {
    console.log("owooooo!");
  }
}

// Todo 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain
module.exports = Wolf;
