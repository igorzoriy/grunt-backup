/*
 * grunt-backup
 * https://github.com/igorzoriy/grunt-backup
 *
 * Copyright (c) 2013 Igor Zoriy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('backup', 'Make backups using grunt', function () {
        var src = this.data.src, dest = this.data.dest;
        if (!src) {
            grunt.log.error("'src' path is empty.");
            return;
        }
        if (!dest) {
            grunt.log.error("'dest' path is empty.");
            return;
        }


        var done = this.async();
        var Tgz = require('tar.gz');
        var compressor = new Tgz();

        compressor.compress(src, dest, function (error) {
            if (error) {
                grunt.log.error(error);
                done(false);
            }

            grunt.log.writeln('Backup successfully created in ' + dest);
            done(true);
        });
    });
};
