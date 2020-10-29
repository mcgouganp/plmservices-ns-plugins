# Nativescript nativescript-easylink ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm](https://img.shields.io/npm/v/@plmservices/nativescript-easylink.svg)](https://www.npmjs.com/package/@plmservices/nativescript-easylink)
[![npm](https://img.shields.io/npm/dm/@plmservices/nativescript-easylink.svg)](https://www.npmjs.com/package/@plmservices/nativescript-easylink)
[![Build Status](https://travis-ci.org/mcgouganp/plmservices-ns-plugins.svg?branch=master)](https://travis-ci.org/mcgouganp/plmservices-ns-plugins)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

This plugin implements MxChip's Easylink device discovery/configuration protocol.

NOTE: I am not affiliated with MxChip and this project is not endorsed by them.
The native code that this plugin uses is publicly supplied by MxChip and all rights and credit for the native code belongs to MxChip.

```javascript
ns plugin add @plmservices/nativescript-easylink
```

## Usage

```typescript
import * as Easylink from '@plmservices/nativescript-easylink';

const ssid: string = Easylink.ssid();
const password: string = 'password';
const type: number = 4;	// AWS style
Easylink.startDiscovery(ssid, password, style);
Easylink.stopDiscovery();
Easylink.destroy();

```

## API

### Methods

| Method                                                                                 | Description                                           |
|----------------------------------------------------------------------------------------| ------------------------------------------------------|
| public destroy(): void;                                                                | Releases allocated resources                          |
| public startDiscovery(ssid: string, password: string, type: number): Promise<boolean>; | Start device discovery                                |
| public stopDiscovery(): void;                                                          | Stops device discovery                                |
| public ssid(): string;                                                                 | Returns the SSID of the locally attached WiFi network |

## Donation
If this project helped you reduce your development time, you could consider helping me with a cup of coffee or some electricity :)

[![Donate](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

## License

Apache License Version 2.0
