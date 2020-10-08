import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptEasylink } from '@demo/shared';
import {} from '@plmservices/nativescript-easylink';

@Component({
	selector: 'demo-nativescript-easylink',
	templateUrl: 'nativescript-easylink.component.html',
})
export class NativescriptEasylinkComponent {
	demoShared: DemoSharedNativescriptEasylink;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptEasylink();
	}
}
