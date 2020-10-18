@NativeClass
class EasylinkDelegate extends NSObject implements EasyLinkFTCDelegate {
	static ObjCProtocols = [ EasyLinkFTCDelegate ];

	owner: WeakRef<EasylinkImpl>;

	onFoundWithNameMataData(client: number, name: string, mataDataDict: NSDictionary<any, any>): void {
		console.log(`onFound ${client}, ${name}, ${mataDataDict}`);
	}

	onDisconnectFromFTCWithError(client: number, err: boolean): void {
		console.log(`onDisconnect ${client}, ${err}`);
	}

	onFoundByFTCWithConfiguration(client: number, configDict: NSDictionary<any, any>): void {
		console.log(`onFoundByFTC ${client}, ${configDict}`);
	}
}

export class EasylinkImpl {
	private _easylink: EASYLINK;
	private _delegate: EasylinkDelegate;

	constructor() {
		this._delegate = new EasylinkDelegate();
		this._delegate.owner = new WeakRef(this);
		this._easylink = EASYLINK.alloc().initForDebugWithDelegate(true, this._delegate);
	}

	public destroy(): void {
		this._easylink.unInit();
		this._easylink = null;
	}

	public start(ssid: string, password: string, type: number): boolean {
		console.log(`Starting Easylink with [${ssid}], [${password}]`);
		const ssid0: NSString = NSString.stringWithString(ssid);
		const ssid1: NSData = ssid0.dataUsingEncoding(NSUTF8StringEncoding);
		const wlanConfig = NSMutableDictionary.alloc().initWithCapacity(3);
		wlanConfig.setObjectForKey(ssid1, "SSID");
		wlanConfig.setObjectForKey(password, "PASSWORD");
		wlanConfig.setObjectForKey(true, "DHCP");
		this._easylink.prepareEasyLinkInfoMode(wlanConfig, null, type);
		this._easylink.transmitSettings();
		return true;
	}

	public stop(): void {
		this._easylink.stopTransmitting();
	}

	public ssid(): string {
		return EASYLINK.ssidForConnectedNetwork();
	}
}

const instance = new EasylinkImpl();
export const Easylink = instance;

