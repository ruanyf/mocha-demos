This repo is for my article "A Mocha tutorial of Examples" (in Chinese).

> "Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun."
> -- [Mochajs.org](https://mochajs.org/)

## How to use

First, clone the repo.

```bash
$ git clone https://github.com/ruanyf/mocha-demos.git
```

Then, install the dependencies locally and Mocha globally.

```bash
$ cd mocha-demos
$ npm install
$ npm install --global mocha
```

Enter the `demo01` subdirectory.

```bash
$ mocha add.test.js
```

Now, play with the other examples under the repo's demo* directories.

## Index

- demo01: basic usage
- demo02: command parameters
- demo03: mocha.opts
- demo04: ES6 testing
- demo05: async testing
- demo06: hooks
- demo07: exclusive/inclusive Tests
- demo08: browser testing
- demo09: generating spec

## License

MIT
