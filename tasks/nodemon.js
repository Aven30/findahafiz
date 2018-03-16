'use strict';
const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');


Gulp.task('nodemon', () => {

    const nodeArgs = ['--inspect'];

    if (process.env.DEBUGGER) {
        nodeArgs.push('--debug');
    }

    Nodemon({
        script: 'bin/www',
        ext: 'js md',
        ignore: [
            'client/**/*',
            'tasks/**/*',
            'dist/**/*',
            'node_modules/**/*'
        ],
        nodeArgs
    })
        .on('restart', (files) => {

            console.log('change detected:', files);
        });
});
