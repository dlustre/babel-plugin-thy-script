"use strict";

require("core-js/modules/es.promise.js");
// summon('QuillAndInk');
require("core-js/modules/es.promise.js");

// unyielding truth = "parting is such sweet sorrow...";
// alloweth romeoDothLive = nay;
// alloweth unrequitedInfatuation = yea;
// alloweth thyFuture = unbeknownst;

let romeoDothLive = false;
let unrequitedInfatuation = true;
let thyFuture = undefined;
const truth = "parting is such sweet sorrow...";
function revealWisdom(name) {
  // perchance(name === naught || name === unbeknownst) {
  //     scribe.mishap("Beware, my Lord! Thou must provideth a name")
  // }
  if (name === null || name === undefined) {
    console.error("Beware, my Lord! Thou must provideth a name");
  }
  return(truth);
}
assert(romeoDothLive === false);

// whilst(thyFuture === unbeknownst) {
//     cease;
// }
while (thyFuture === undefined) {
  break;
}
function retrieveTidings() {
  Promise((resolve, reject) => {
    // unyielding tidings = { message: "Tidings from yonder" };
    const info = {
      message: "Tidings from yonder"
    };

    // perchance(data) {
    //     reconcile(data);
    // } otherwise {
    //     forsake(new Mishap("Tidings hath ought to be unbeknownst!"));
    // }
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Tidings hath ought to be unbeknownst!"));
    }
  });
}

// endeavor {
//     bestowWisdom();
// } entrap(mishap) {
//     scribe.tidings("The raven hath brought tidings. It reads:");
//     scribe.forewarn("Beware, for errors lurk in the shadows...");
//     scribe.mishap("Fie! A mishap hath occurred: " + mishap.message);
// }
try {
  bestowWisdom();
} catch (error) {
  console.info("The raven hath brought tidings. It reads:");
  console.warn("Beware, for errors lurk in the shadows...");
  console.error("Fie! A mishap hath occurred: " + error.message);
}
