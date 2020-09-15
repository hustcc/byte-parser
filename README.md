# byte-parser

> Parse byte string to byte number, e.g. `1.2 Kb` -> `1228.8`, Kb, Mb, Gb, Tb, Pb, Eb, Zb, Yb supported.

[![npm Version](https://img.shields.io/npm/v/byte-parser.svg)](https://www.npmjs.com/package/byte-parser)
[![Build Status](https://github.com/hustcc/byte-parser/workflows/build/badge.svg)](https://github.com/hustcc/byte-parser/actions)
[![npm](https://img.shields.io/npm/dm/byte-parser.svg)](https://www.npmjs.com/package/byte-parser)
[![npm License](https://img.shields.io/npm/l/byte-parser.svg)](https://www.npmjs.com/package/byte-parser)


## Install

```bash
$ npm i --save-dev byte-parser
```


## Usage

```ts
import parse from 'byte-parser';

parse('100');               // 100
parse('10.1 b');            // 10.1
parse('10.1 KB');           // 10.1 * 1024
parse('10.1 kb', 1000);     // 10.1 * 1000
parse('1.2 mb');            // 1.2 * 1024 * 1024
parse('1.2 Gb');            // 1.2 * 1024 * 1024 * 1024
parse('1.2 G');             // 1.2 * 1024 * 1024 * 1024
```


## License

MIT@[hustcc](https://github.com/hustcc).
