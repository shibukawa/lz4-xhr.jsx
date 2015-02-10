lz4-xhr.jsx
===========================================

Synopsis
---------------

lz4 filter for XHR

Motivation
--------------------

It provides another XHR API with data decompression.

Code Example
---------------

```js

var worker = new Worker('lz4-xhr.js');
worker.onmessage = function (event) {
    var content = event.content; // ArrayBuffer
    var dataView = new DataView(content);
    var decoder = new TextDecoder("utf-8");
    var json = JSON.parse(decoder.decode(dataView));
};
worker.postMessage('/content/data.json');
```

Installation
---------------

```sh
$ npm install lz4-xhr.jsx
```

JavaScript code is in `dest/src` folder.

API Reference
------------------

`lz4-xhr` provides simple API via WebWorker interface.
It receives URL as a postMessage parameter. It returns `content` property of resulting event.
`content` is an ArrayBuffer object.

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Repository

* Repository: git://github.com/shibukawa.yoshiki/lz4-xhr.jsx.git
* Issues: https://github.com/shibukawa.yoshiki/lz4-xhr.jsx/issues

## Setup build environment

To create development environment, call following command:

```sh
$ npm install
```

## Run Test

```sh
$ grunt test
```

## Run Sample

```sh
# Build web worker and sample client
$ grunt build

# Launch webserver
$ grunt connect
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa.yoshiki / shibukawa.yoshiki@gmail.com

License
------------

MIT License.

Complete license is written in `LICENSE.md`.
