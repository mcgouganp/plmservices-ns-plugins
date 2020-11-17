# NativeScript Outlined Labels ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm](https://img.shields.io/npm/v/@plmservices/nativescript-outline-label.svg)](https://www.npmjs.com/package/@plmservices/nativescript-outline-label)
[![npm](https://img.shields.io/npm/dm/@plmservices/nativescript-outline-label.svg)](https://www.npmjs.com/package/@plmservices/nativescript-outline-label)
[![Build Status](https://travis-ci.com/mcgouganp/plmservices-ns-plugins.svg?branch=master)](https://travis-ci.com/github/mcgouganp/plmservices-ns-plugins)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

This plugin extends the NativeScript Label component to support outlined text.

Outlined text is the only good way to ensure that you text will always be able to be clearly read regardless of what background is behind it, which becomes more important when your background is non-deterministic or moving (e.g. video).

## Prerequisites / Requirements

None.

## Installation

```javascript
ns plugin add @plmservices/nativescript-outline-label
```

## Usage

You must add the appropriate xmlns tag to your XML file, e.g.
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:outlineLabel="@plmservices/nativescript-outline-label" class="page">
```
Once that is done you can use the new outlineLabel tag in your XML, e.g.
```xml
<outlineLabel:OutlineLabel text="CSS on Element" />
```
This can be styled via CSS on the OutlineLabel element, a class or an id, e.g. to set yellow text with a black outline
```css
OutlineLabel {
	color: yellow;
	outline: 4 black;
}
```
Or it can be styled directly in the tag, e.g.
```xml
<outlineLabel:OutlineLabel text="Outline in attribute" color="yellow" outline="4 red" />
<outlineLabel:OutlineLabel text="Outline in style" color="yellow" style="outline: 4 green" />
```

## TODO
* Angular demo app
* Vue demo app

## Donation
If this project helped you reduce your development time, you could consider helping me with a cup of coffee or some electricity :)

[![Donate](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6D28NSTFXMQKQ)

## License

Apache License Version 2.0
