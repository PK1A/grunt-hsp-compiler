module.exports = function(grunt) {
  'use strict';

  var compiler = require('hashspace').compiler;

  function compileErrMsg(fileName, compileErr) {
    return 'HSP compilation error in ' + fileName + ' ('+compileErr.line+','+compileErr.column+'): ' + compileErr.description;
  }

  this.files.forEach(function (f) {

    // filter out invalid file paths
    var src = f.src.filter(function(filepath){
      if (!grunt.file.exists(filepath)) {
        return false;
      } else {
        return true;
      }
    });

    // compile valid paths
    src.forEach(function (tplFileName) {

      var compileResult = compiler.compile(grunt.file.read(tplFileName));

      //TODO: this check won't be needed as soon as https://github.com/ariatemplates/hashspace/issues/61 is fixed
      if (compileResult.errors.length === 0) {
        grunt.file.write(f.dest, compileResult.code);
      } else {
        grunt.fail.fatal(compileErrMsg(tplFileName, compileResult.errors[0]));
      }
    });

  });
};