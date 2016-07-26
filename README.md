Sequence of commands:

```bash
$ npm install -g typings
$ npm install -g angular-cli
$ ng new EXXAMPLE
$ cd EXXAMPLE
$ npm install underscore@1.8.3 --save
$ typings install dt~underscore -S -G
# at this point, change the files shown in this commit
$ npm install
$ ng build # optional, I believe ng serve builds already
$ ng serve
```