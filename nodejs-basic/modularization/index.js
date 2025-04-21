// Todo 3 : Import class Tiger dari berkas Tiger.js.
// Todo 4 :  Import class Wolf dari berkas Wolf.js.

const Tiger = require("./tiger.js");
const Wolf = require("./wolf.js");

const fighting = (Tiger, Wolf) => {
  if (Tiger.strength > Wolf.strength) {
    Tiger.growl();
    return;
  }

  if (Wolf.strength > Tiger.strength) {
    Wolf.howl();
    return;
  }

  console.log("Tiger and wolf have the same strength!");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
