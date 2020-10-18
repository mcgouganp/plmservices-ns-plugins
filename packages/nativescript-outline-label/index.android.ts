import { Outline } from './index';
import { OutlineLabelCommon, outlineProperty } from './common';

@NativeClass()
class OutlineTextView extends android.widget.TextView {
	outlineSize: number;
	outlineColour: number;

	constructor(context: any) {
		super(context);
		this.outlineSize = 0;
		this.outlineColour = android.graphics.Color.BLACK;
	}

	public setOutline(size: number, color: number): void {
		this.outlineSize = size;
		this.outlineColour = color;

	}
	public onDraw(canvas: android.graphics.Canvas): void {
		if (this.outlineSize) {
			let paint = this.getPaint();
			const textColour = this.getCurrentTextColor();
			paint.setStyle(android.graphics.Paint.Style.STROKE);
			paint.setStrokeWidth(this.outlineSize);
			this.setTextColor(this.outlineColour);
			super.onDraw(canvas);
			this.setTextColor(textColour);
			paint.setStyle(android.graphics.Paint.Style.FILL);
			super.onDraw(canvas);
		} else {
			super.onDraw(canvas);
		}
	}
}


export class OutlineLabel extends OutlineLabelCommon {
	nativeViewProtected: OutlineTextView;
	nativeTextViewProtected: OutlineTextView;

	public createNativeView(): Object {
		return new OutlineTextView(this._context);
	}

	public initNativeView(): void {
		super.initNativeView();
		this.nativeViewProtected.setOutline(0, android.graphics.Color.BLACK);
		(<any>this.nativeView).owner = this;
	}

	public disposeNativeView(): void {
		(<any>this.nativeView).owner = null;
		super.disposeNativeView();
	}

	[outlineProperty.setNative](value: Outline) {
		//this.nativeViewProtected.setOutline(value.size, value.color.android);
		this.nativeViewProtected.setOutline(this.nativeViewProtected.getTextSize() / 15, value.color.android);
		console.log(`outline size: ${value.size} ${this.nativeViewProtected.getTextSize()}`);
	}
}
