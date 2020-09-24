import { DemoSharedBase } from '../utils';
import { Sha } from '@plmservices/nativescript-sha';
import { Observable, PropertyChangeData } from '@nativescript/core';

export class DemoSharedNativescriptSha extends DemoSharedBase {
	private sha: Sha;

	constructor() {
		super();
		this.sha = new Sha();
		this.set("hintInput", "Enter text to hash");
		this.set("textInput", "");
		this.set("hintKey", "Enter key for HMAC");
		this.set("textKey", "");
		this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
			if (propertyChangeData.propertyName === "textInput") {
				this.set("textInput", propertyChangeData.value);
			}
			if (propertyChangeData.propertyName === "textKey") {
				this.set("textKey", propertyChangeData.value);
			}
		});
	}

	public process(): void {
		console.log(`Data is ${this.get("textInput")}`);
		console.log(`Key is ${this.get("textKey")}`);

		this.set("hash1", this.sha.Sha1(this.get("textInput")));
		console.log(`SHA-1 is ${this.get("hash1")}`);

		this.set("hash224", this.sha.Sha224(this.get("textInput")));
		console.log(`SHA-224 is ${this.get("hash224")}`);

		this.set("hash256", this.sha.Sha256(this.get("textInput")));
		console.log(`SHA-256 is ${this.get("hash256")}`);

		this.set("hash384", this.sha.Sha384(this.get("textInput")));
		console.log(`SHA-384 is ${this.get("hash384")}`);

		this.set("hash512", this.sha.Sha512(this.get("textInput")));
		console.log(`SHA-512 is ${this.get("hash512")}`);

		this.set("hmac1", this.sha.HmacSha1(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-1 is ${this.get("hmac1")}`);

		this.set("hmac224", this.sha.HmacSha224(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-224 is ${this.get("hmac224")}`);

		this.set("hmac256", this.sha.HmacSha256(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-256 is ${this.get("hmac256")}`);

		this.set("hmac384", this.sha.HmacSha384(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-384 is ${this.get("hmac384")}`);

		this.set("hmac512", this.sha.HmacSha512(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-512 is ${this.get("hmac512")}`);
	}
}
