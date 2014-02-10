grunt-hsp-compiler
==================

Usage:

```javascript
    'hsp-compiler': {
      widgets: {
        src: ['**/*.hsp'],
        dest: 'dest/public',
        ext: '.hsp.js',
        cwd: 'src/',
        expand: true
      },
      demo: {
        src: ['public/**/*.hsp'],
        dest: 'dest',
        ext: '.hsp.js',
        expand: true
      }
    }
```