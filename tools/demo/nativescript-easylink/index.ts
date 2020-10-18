import { DemoSharedBase } from '../utils';
import { Easylink } from '@plmservices/nativescript-easylink';
import { Observable, PropertyChangeData } from '@nativescript/core';

export class DemoSharedNativescriptEasylink extends DemoSharedBase {
	private _transmitting: boolean;
	private _ssid: string;
	private _password: string;
	private _types: any;
	private _type: number;

	constructor() {
		super();
		this._transmitting = false;
		this.set("hintSsid", "Enter WiFi SSID");
		this.set("hintPassword", "Enter WiFi password");

		this._ssid = "";
		this._password = "";
		this._types = [
			{ name: 'Version 1', value: 0 }, { name: 'Version 2', value: 1 }, { name: 'Plus', value: 2 },
			{ name: '2/Plus', value: 3 }, { name: 'AWS', value: 4 }
		];
		this._type = 4;

		this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
			if (propertyChangeData.propertyName === "ssid") {
				this.set("ssid", propertyChangeData.value);
			}
			if (propertyChangeData.propertyName === "password") {
				this.set("password", propertyChangeData.value);
			}
		});
	}

	get ssid(): string {
		return this._ssid;
	}

	set ssid(value: string) {
		if(this._ssid !== value) {
			this._ssid = value;
			this.notifyPropertyChange("ssid", value);
		}
	}

	get password(): string {
		return this._password;
	}

	set password(value: string) {
		if(this._password !== value) {
			this._password = value;
			this.notifyPropertyChange("password", value);
		}
	}

	get transmitting(): boolean {
		return this._transmitting;
	}

	get types(): any {
		return this._types;
	}

	get type(): number {
		return this._type;
	}

	set type(value: number) {
		this._type = value;
	}

	public action(): void {
		if(this._transmitting) {
			console.log('Stopping nativescript-easylink!');
			Easylink.stop();
		} else {
			console.log('Starting nativescript-easylink!');
			Easylink.start(this.get("ssid"), this.get("password"), this.get("type"));
		}
		this._transmitting = !this._transmitting;
		this.notifyPropertyChange("transmitting", this._transmitting);
	}

	public destroy(): void {
		console.log('Destroying nativescript-easylink')
		if(this._transmitting) {
			this.action();
		}
	}
}
