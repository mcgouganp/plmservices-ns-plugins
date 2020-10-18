import { CssProperty, Style, Color } from '@nativescript/core';
import { dip } from '@nativescript/core/ui/core/view';
import { OutlineLabelCommon } from './common';

export declare class OutlineLabel extends OutlineLabelCommon {
	outline: any;
}

export declare const outlineProperty: CssProperty<Style, Outline>;

export interface Outline {
	size: dip;
	color: Color;
}
