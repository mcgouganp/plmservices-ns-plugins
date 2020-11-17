import { setTimeout, clearTimeout } from "@nativescript/core/timer"

let easylinkController: EASYLINK;
let easylinkDelegate: EasylinkDelegate;
let timeout: number;

@NativeClass()
class EasylinkDelegate extends NSObject implements EasyLinkFTCDelegate {
	public static ObjCProtocols = [EasyLinkFTCDelegate];

	private _resolve: (result: boolean) => void;
	private _reject: (error: Error) => void;

	public static createDelegate(resolve: (result: boolean) => void, reject: (error: Error) => void): EasylinkDelegate {
		const delegate = <EasylinkDelegate>EasylinkDelegate.new();
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	public onFoundWithNameMataData(client: number, name: string, mataDataDict: NSDictionary<any, any>): void {
		console.log(`onFound ${client}, ${name}, ${mataDataDict}`);
		stopDiscovery();
		this._resolve(true);
	}

	public onFoundByFTCWithConfiguration(client: number, configDict: NSDictionary<any, any>): void {
		console.log(`onFoundByFTC ${client}, ${configDict}`);
	}

	public onDisconnectFromFTCWithError(client: number, err: boolean): void {
		console.log(`onDisconnect ${client}, ${err}`);
	}
}

export function startDiscovery(ssid: string, password: string, type: number): Promise<boolean> {
	return new Promise((resolve, reject) => {
		console.log(`Starting Easylink with [${ssid}], [${password}]`);
		const ssid0: NSString = NSString.stringWithString(ssid);
		const ssid1: NSData = ssid0.dataUsingEncoding(NSUTF8StringEncoding);
		const wlanConfig = NSMutableDictionary.alloc().initWithCapacity(3);
		wlanConfig.setObjectForKey(ssid1, "SSID");
		wlanConfig.setObjectForKey(password, "PASSWORD");
		wlanConfig.setObjectForKey(true, "DHCP");

		easylinkDelegate = EasylinkDelegate.createDelegate(resolve, reject);
		easylinkController = EASYLINK.alloc().initForDebugWithDelegate(true, easylinkDelegate);
		easylinkController.prepareEasyLinkInfoMode(wlanConfig, null, type);
		easylinkController.transmitSettings();
		timeout = setTimeout(() => {
			console.log('startDiscovery timeout');
			stopDiscovery();
			resolve(false);
		}, 20000);
	});
}

export function stopDiscovery(): void {
	console.log('Stopping easylink discovery');
	clearTimeout(timeout);
	easylinkController.stopTransmitting();
}

export function ssid(): string {
	return EASYLINK.ssidForConnectedNetwork();
}
