import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSha } from '@demo/shared';
import {} from '@plmservices/nativescript-sha';

@Component({
	selector: 'demo-nativescript-sha',
	templateUrl: 'nativescript-sha.component.html',
})
export class NativescriptShaComponent {
	demoShared: DemoSharedNativescriptSha;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSha();
	}
}
