# NativeScript SHA/HMAC ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm](https://img.shields.io/npm/v/@plmservices/nativescript-sha.svg)](https://www.npmjs.com/package/@plmservices/nativescript-sha)
[![npm](https://img.shields.io/npm/dm/@plmservices/nativescript-sha.svg)](https://www.npmjs.com/package/@plmservices/nativescript-sha)
[![Build Status](https://travis-ci.com/mcgouganp/plmservices-ns-plugins.svg?branch=master)](https://travis-ci.com/github/mcgouganp/plmservices-ns-plugins)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

This plugin gives access to native SHA generation code on iOS and Android.

Supports SHA-1, SHA-224, SHA-256, SHA-384 and SHA-512.

Also support HMAC for all supported SHA hashes.

## Prerequisites / Requirements

None.

## Installation

To install, simply run:

```javascript
ns plugin add @plmservices/nativescript-sha
```

## Usage

To use this module you must first `require()` it:

```javascript
// Javascript
var Sha = require('@plmservices/nativescript-sha');
var sha = new Sha.Sha();
```

Or if you're using Typescript, `import` the module:

```typescript
// Typescript
import { Sha } from '@plmservices/nativescript-sha');
const sha = new Sha();
```

After you have a reference to the module you call the hash functions:

```typescript
// Typescript
import { Sha } from '@plmservices/nativescript-sha';
const sha = new Sha();

console.log(`Hash is ${sha.Sha256("this is our test data")}`);

console.log(`Hmac is ${sha.HmacSha256("secretkey", "this is our test data")}`);
```

## API

### Methods

| Method                                                 | Description                                                          |
|--------------------------------------------------------| ---------------------------------------------------------------------|
| public Sha1(input: string): string;                    | Calculate SHA1 of supplied input data                                |
| public Sha224(input: string): string;                  | Calculate SHA224 of supplied input data                              |
| public Sha256(input: string): string;                  | Calculate SHA256 of supplied input data                              |
| public Sha384(input: string): string;                  | Calculate SHA384 of supplied input data                              |
| public Sha512(input: string): string;                  | Calculate SHA512 of supplied input data                              |
| public HmacSha1(key: string, input: string): string;   | Calculate HMAC using SHA1 of supplied input data with supplied key   |
| public HmacSha224(key: string, input: string): string; | Calculate HMAC using SHA224 of supplied input data with supplied key |
| public HmacSha256(key: string, input: string): string; | Calculate HMAC using SHA256 of supplied input data with supplied key |
| public HmacSha384(key: string, input: string): string; | Calculate HMAC using SHA384 of supplied input data with supplied key |
| public HmacSha512(key: string, input: string): string; | Calculate HMAC using SHA512 of supplied input data with supplied key |

## TODO
* Angular demo app
* Vue demo app

## Donation
If this project helped you reduce your development time, you could consider helping me with a cup of coffee or some electricity :)

[![Donate](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

## License

Apache License Version 2.0, January 2004
