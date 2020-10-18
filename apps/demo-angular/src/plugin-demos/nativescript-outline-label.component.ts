import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOutlineLabel } from '@demo/shared';
import {} from '@plmservices/nativescript-outline-label';

@Component({
	selector: 'demo-nativescript-outline-label',
	templateUrl: 'nativescript-outline-label.component.html',
})
export class NativescriptOutlineLabelComponent {
	demoShared: DemoSharedNativescriptOutlineLabel;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOutlineLabel();
	}
}
