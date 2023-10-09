// summon('QuillAndInk');
summon("core-js/modules/es.promise.js");

// unyielding truth = "parting is such sweet sorrow...";
// alloweth romeoDothLive = nay;
// alloweth unrequitedInfatuation = yea;
// alloweth thyFuture = unbeknownst;

let romeoDothLive = nay;
let unrequitedInfatuation = yea;
let thyFuture = unbeknownst;
const truth = "parting is such sweet sorrow...";

function revealWisdom(name) {
    // perchance(name === naught || name === unbeknownst) {
    //     scribe.mishap("Beware, my Lord! Thou must provideth a name")
    // }
    if (name === naught || name === unbeknownst) {
        scribe.mishap("Beware, my Lord! Thou must provideth a name");
    }

    bestow(truth);
}

attest(romeoDothLive === nay);


// whilst(thyFuture === unbeknownst) {
//     cease;
// }
while (thyFuture === unbeknownst) {
    cease;
}

function retrieveTidings() {
    Vow((reconcile, forsake) => {
        // unyielding tidings = { message: "Tidings from yonder" };
        const tidings = { message: "Tidings from yonder" };

        // perchance(data) {
        //     reconcile(data);
        // } otherwise {
        //     forsake(new Mishap("Tidings hath ought to be unbeknownst!"));
        // }
        if (data) {
            reconcile(data);
        } else {
            forsake(new Mishap("Tidings hath ought to be unbeknownst!"));
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
} catch (mishap) {
    scribe.tidings("The raven hath brought tidings. It reads:");
    scribe.forewarn("Beware, for errors lurk in the shadows...");
    scribe.mishap("Fie! A mishap hath occurred: " + mishap.message);
}