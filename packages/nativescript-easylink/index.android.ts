import * as application from '@nativescript/core/application';

let easylinkController: io.fogcloud.sdk.easylink.api.EasylinkP2P = new io.fogcloud.sdk.easylink.api.EasylinkP2P(application.android.context);

export function startDiscovery(ssid: string, password: string, type: number): Promise<boolean> {
	return new Promise((resolve, reject) => {
		console.log(`Starting Easylink with [${ssid}], [${password}]`);
		const wlanConfig = new io.fogcloud.sdk.easylink.helper.EasyLinkParams;
		wlanConfig.ssid = ssid;
		wlanConfig.password = password;

		easylinkController.startEasyLink(wlanConfig, new io.fogcloud.sdk.easylink.helper.EasyLinkCallBack({
			onSuccess: function(code: number, message: string): void {
				stopDiscovery();
				resolve(true);
			},
			onFailure: function(code: number, message: string): void {
				stopDiscovery();
				reject(false);
			}
		}));
	});
}

export function stopDiscovery(): void {
	easylinkController.stopEasyLink(new io.fogcloud.sdk.easylink.helper.EasyLinkCallBack({
		onSuccess: function(code: number, message: string): void {
			console.log(`Discovery stopped`);
		},
		onFailure: function(code: number, message: string): void {
			console.log(`Discovery stop failed`);
		}
	}));
}

export function ssid(): string {
	return easylinkController.getSSID();
}
