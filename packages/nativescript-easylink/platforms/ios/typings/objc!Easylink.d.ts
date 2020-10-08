
declare class EASYLINK extends NSObject implements NSNetServiceBrowserDelegate, NSNetServiceDelegate {

	static alloc(): EASYLINK; // inherited from NSObject

	static getBroadcastAddress(): string;

	static getGatewayAddress(): string;

	static getIPAddress(): string;

	static getNetMask(): string;

	static infoForConnectedNetwork(): NSDictionary<any, any>;

	static new(): EASYLINK; // inherited from NSObject

	static ssidDataForConnectedNetwork(): NSData;

	static ssidForConnectedNetwork(): string;

	easyLinkAWSDelayPerByte: number;

	easyLinkPlusDelayPerBlock: number;

	easyLinkPlusDelayPerByte: number;

	easyLinkV2DelayPerBlock: number;

	enableDebug: boolean;

	readonly mode: EasyLinkMode;

	readonly softAPSending: boolean;

	readonly softAPStage: EasyLinkSoftApStage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { forDebug: boolean; withDelegate: any; });

	constructor(o: { delegate: any; });

	class(): typeof NSObject;

	closeFTCClient(client: number): void;

	configFTCClientWithConfiguration(client: number, configDict: NSDictionary<any, any>): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	delegate(): any;

	initForDebugWithDelegate(enable: boolean, delegate: any): this;

	initWithDelegate(delegate: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	netServiceBrowserDidFindDomainMoreComing(browser: NSNetServiceBrowser, domainString: string, moreComing: boolean): void;

	netServiceBrowserDidFindServiceMoreComing(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidNotSearch(browser: NSNetServiceBrowser, errorDict: NSDictionary<string, number>): void;

	netServiceBrowserDidRemoveDomainMoreComing(browser: NSNetServiceBrowser, domainString: string, moreComing: boolean): void;

	netServiceBrowserDidRemoveServiceMoreComing(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidStopSearch(browser: NSNetServiceBrowser): void;

	netServiceBrowserWillSearch(browser: NSNetServiceBrowser): void;

	netServiceDidAcceptConnectionWithInputStreamOutputStream(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidNotResolve(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidPublish(sender: NSNetService): void;

	netServiceDidResolveAddress(sender: NSNetService): void;

	netServiceDidStop(sender: NSNetService): void;

	netServiceDidUpdateTXTRecordData(sender: NSNetService, data: NSData): void;

	netServiceWillPublish(sender: NSNetService): void;

	netServiceWillResolve(sender: NSNetService): void;

	otaFTCClientWithOTAData(client: number, otaData: NSData): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareEasyLinkInfoMode(wlanConfigDict: NSDictionary<any, any>, userInfo: NSData, easyLinkMode: EasyLinkMode): void;

	prepareEasyLinkInfoModeEncrypt(wlanConfigDict: NSDictionary<any, any>, userInfo: NSData, easyLinkMode: EasyLinkMode, key: NSData): void;

	prepareEasyLink_withFTCInfoMode(wlanConfigDict: NSDictionary<any, any>, userInfo: NSData, easyLinkMode: EasyLinkMode): void;

	prepareEasyLink_withFTCInfoModeEncrypt(wlanConfigDict: NSDictionary<any, any>, userInfo: NSData, easyLinkMode: EasyLinkMode, key: NSData): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setDelegate(delegate: any): void;

	stopTransmitting(): void;

	transmitSettings(): void;

	unInit(): void;
}

interface EasyLinkFTCDelegate {

	onDisconnectFromFTC?(client: number): void;

	onDisconnectFromFTCWithError(client: number, err: boolean): void;

	onEasyLinkSoftApStageChanged?(stage: EasyLinkSoftApStage): void;

	onFoundByFTCWithConfiguration(client: number, configDict: NSDictionary<any, any>): void;

	onFoundWithNameMataData(client: number, name: string, mataDataDict: NSDictionary<any, any>): void;
}
declare var EasyLinkFTCDelegate: {

	prototype: EasyLinkFTCDelegate;
};

declare const enum EasyLinkMode {

	ASYLINK_V1 = 0,

	ASYLINK_V2 = 1,

	ASYLINK_PLUS = 2,

	ASYLINK_V2_PLUS = 3,

	ASYLINK_AWS = 4,

	ASYLINK_SOFT_AP = 5,

	ASYLINK_MODE_MAX = 6
}

declare const enum EasyLinkSoftApStage {

	eState_initialize = 0,

	eState_connect_to_uap = 1,

	eState_configured_by_uap = 2,

	eState_connect_to_wrong_wlan = 3,

	eState_connect_to_target_wlan = 4
}

declare var EasylinkVersionNumber: number;

declare var EasylinkVersionString: interop.Reference<number>;
