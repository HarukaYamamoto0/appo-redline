Some tests:
```shell
$ node test.js param1 param2 --port=80 --force -f
# { args: [ 'param1', 'param2' ], flags: { port: '80', force: true, f: true } }

$ node test.js --force
# { args: [], flags: { force: true} }
```
