Some tests:
```shell
$ node test.js ola mundo --port=80 -f
# { args: [ 'ola', 'mundo' ], flags: { '--port': '80', '-f': true } }

$ node test.js --force
# { args: [], flags: { "--force": true} }
```
