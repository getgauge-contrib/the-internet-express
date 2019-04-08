# The Internet (Express)

## What?

This is a partial port of @tourdedave's [The Internet](https://github.com/tourdedave/the-internet). This is written in NodeJS/ExpressJS whereas the original work is in Ruby/Sinatra.


## Why?

We develop and maintain [Taiko](https://github.com/getgauge/taiko), and in order to showcase the features and write some examples, The-internet was perfect. However, since the tech stack differ, we had to rely on a bunch of pre-requisites that weren't needed for Taiko scripts, in order to bring up The Internet. 

## Partial port? Why not a complete port?

As mentioned above, the purpose of this project is very specific, to illustrate use cases of Taiko. Hence, this project brings in only those parts of The Internet which are relevant for this cause. For instance, examples of cross-browser testing are out of scope.

## How?

### Standalone

- `npm install`
- `npm serve`
- visit `http://localhost:3000`

### As an in-memory server

```
var app = require('the-internet-express');

var server = app.listen(3000, () => {
    // do as you please with the-internet-express at localhost:3000
    server.close();
});

```

## Contribution

Contributions are welcome. Feel free to send pull requests.

## License

MIT - the same as [The Internet](https://raw.githubusercontent.com/tourdedave/the-internet/master/license.txt)