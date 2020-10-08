import { DemoSharedBase } from '../utils';
import { Easylink } from '@plmservices/nativescript-easylink';
import { Observable, PropertyChangeData } from '@nativescript/core';

export class DemoSharedNativescriptEasylink extends DemoSharedBase {
	//private _easylink: Easylink;
	private _transmitting: boolean;

	constructor() {
		super();
		this._transmitting = false;
		this.set("hintSsid", "Enter WiFi SSID");
		this.set("ssid", "");
		this.set("hintPassword", "Enter WiFi password");
		this.set("password", "");

		this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
			if (propertyChangeData.propertyName === "ssid") {
				this.set("ssid", propertyChangeData.value);
			}
			if (propertyChangeData.propertyName === "password") {
				this.set("password", propertyChangeData.value);
			}
		});


		//this._easylink = new Easylink;
	}

	public setSsid(ssid: string): void {
		console.log(`Setting ssid to ${ssid}`);
		this.set("ssid", ssid);
	}

	public testIt(): void {
		console.log('test nativescript-easylink!');
		if(this._transmitting) {
			//this._easylink.stop();
			Easylink.stop();
		} else {
			Easylink.start(this.get("ssid"), this.get("password"));
			//Easylink.start(this.ssid, this.password);
		}
		this._transmitting = !this._transmitting;
	}
}
