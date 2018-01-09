Opal = require('opal-runtime').Opal;
Opal.require ('opal-parser');
require('./enumerator.js');
Opal.require('enumerator');
Opal.require('nodejs');

require('./thread.js');
Opal.require('thread');

require('./prawn-lib.js');
Opal.require('prawn');

var Document = Opal.const_get_qualified(Opal.const_get_relative(Opal, 'Prawn'), 'Document');
pdf = Document.$new();
pdf.$text('Hello World');
pdf.$render_file('hello.pdf');

/*
Opal.send(Document, 'generate', ['hello.pdf'], function () {
  console.log('1');
  return self.$text("Hello World!");
});
*/
