# mongo-json-escape

[Escape MongoDB reserved characters](http://docs.mongodb.org/manual/faq/developers/#faq-dollar-sign-escaping) `$` and  `.` from JSON objects. This way you can store JSON objects containing these characters in your database.

## Installation

    $ npm install mongo-json-escape

## Example

```js
var mje = require('mongo-json-escape');

mje.escape({"hello.world":"hello"});
mje.unescape({"hello\uFF0Eworld":"hello");

key.escape({"hello$world":"hello"});
key.unescape({"hello\uFF04world":"hello"});
```

## License

MIT
