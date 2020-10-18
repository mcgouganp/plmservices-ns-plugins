import { Outline } from './index';
import { OutlineLabelCommon, outlineProperty } from './common';

declare var NSStrokeWidthAttributeName: any;
declare var NSStrokeColorAttributeName: any;
declare var NSForegroundColorAttributeName: any;

export class OutlineLabel extends OutlineLabelCommon {
	[outlineProperty.setNative](value: Outline) {
		const attr = new (NSDictionary as any)(
			[-value.size, value.color.ios, this.nativeViewProtected.textColor],
			[NSStrokeWidthAttributeName, NSStrokeColorAttributeName, NSForegroundColorAttributeName]
		);

		this.nativeViewProtected.attributedText = NSAttributedString.alloc().initWithStringAttributes(this.nativeViewProtected.text, attr);
	}
}
