import { OutlineLabel as OutlineLabelDefinition, Outline } from './index';
import { Label, CssProperty, Style, CSSType, Color, isIOS, Utils } from '@nativescript/core';
import { dip } from '@nativescript/core/ui/core/view';

@CSSType("OutlineLabel")
export class OutlineLabelCommon extends Label implements OutlineLabelDefinition {
	get outline() {
		return this.style.outline;
	}

	set outline(value: any) {
		this.style.outline = value;
	}
}

export const outlineProperty = new CssProperty<Style, string | Outline>({
	name: 'outline',
	cssName: 'outline',
	affectsLayout: isIOS,
	valueConverter: value => {
		const params = value.split(' ');
		return {
			size: parseDIPs(params[0]),
			color: new Color(params.slice(1).join(''))
		};
	}
});

declare module '@nativescript/core/ui/styling/style' {
	interface Style {
		outline: string | Outline;
	}
}
outlineProperty.register(Style);

function parseDIPs(value: string): dip {
	if (value.indexOf('px') !== -1) {
		return Utils.layout.toDeviceIndependentPixels(parseFloat(value.replace('px', '').trim()));
	} else {
		return parseFloat(value.replace('dip', '').trim());
	}
}
