Opal = require('opal-runtime').Opal;

require('./enumerator.js');
Opal.require('enumerator');

require('./thread.js');
Opal.require('thread');

require('./prawn-lib.js');
Opal.require('prawn');

console.log(Opal.Prawn);
//Prawn::Document.generate("hello.pdf") do
//  text "Hello World!"
//end
