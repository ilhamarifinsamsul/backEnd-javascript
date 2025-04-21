class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100) + 1;
  }

  growl() {
    console.log("grrrrr!");
  }
}

// Todo 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain
module.exports = Tiger;
