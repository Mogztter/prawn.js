require 'opal'

builder = Opal::Builder.new
builder.append_paths('lib')
builder.append_paths('lib/prawn')
builder.append_paths('build/prawn/lib')
builder.append_paths('build/ttfunk/lib')
builder.append_paths('build/pdf-core/lib')
builder.compiler_options = {'dynamic_require_severity': 'ignore'}
result = builder.build('prawn').to_s
File.write 'prawn-lib.js', builder.to_s
