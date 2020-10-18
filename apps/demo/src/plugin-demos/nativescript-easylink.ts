import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptEasylink } from '@demo/shared';
import * as geolocation from '@nativescript/geolocation';
import { Easylink } from '@plmservices/nativescript-easylink';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function navigatingFrom(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext.destroy();
}

export class DemoModel extends DemoSharedNativescriptEasylink {
	constructor() {
		super();
		const self = this;
		geolocation.isEnabled().then(
			function(isEnabled) {
				if(isEnabled === false) {
					geolocation.enableLocationRequest(false, true).then(
						() => {
							console.log('Location services enabled');
							const ssid0 = Easylink.ssid();
							console.log(`SSID found is [${ssid0}]`);
							self.ssid = ssid0;
						},
						(e) => {
							console.log('Error: ' + (e.message || e));
						}
					)
					.catch((ex) => {
						console.log('Unable to enable location services', ex);
					});
				} else {
					console.log('Location services already enabled');
					const ssid0 = Easylink.ssid();
					console.log(`SSID found is [${ssid0}]`);
					self.ssid = ssid0;
				}
			},
			function(e) {
				console.log('Error: ' + (e.message || e));
			}
		);
	}
}
