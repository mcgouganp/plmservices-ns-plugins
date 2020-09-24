# Nativescript nativescript-sha

```javascript
ns plugin add @plmservices/nativescript-sha
```

## Usage


# Nativescript nativescript-sha ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm](https://img.shields.io/npm/v/nativescript-sha.svg)](https://www.npmjs.com/package/nativescript-sha)
[![npm](https://img.shields.io/npm/dm/nativescript-sha.svg)](https://www.npmjs.com/package/nativescript-sha)
[![Build Status](https://travis-ci.org/mcgouganp/nativescript-sha.svg?branch=master)](https://travis-ci.org/mcgouganp/nativescript-sha)
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
public Sha1(input: string): string;
public Sha224(input: string): string;
public Sha256(input: string): string;
public Sha384(input: string): string;
public Sha512(input: string): string;

public HmacSha1(key: string, input: string): string;
public HmacSha224(key: string, input: string): string;
public HmacSha256(key: string, input: string): string;
public HmacSha384(key: string, input: string): string;
public HmacSha512(key: string, input: string): string;

## Donation
If this project helped you reduce your development time, you could consider helping me with a cup of coffee or some electricity :)

[![Donate](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

## License

Apache License Version 2.0, January 2004
