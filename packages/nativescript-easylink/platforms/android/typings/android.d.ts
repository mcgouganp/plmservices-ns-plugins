/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export class BuildConfig {
					public static class: java.lang.Class<io.fogcloud.sdk.easylink.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module api {
					export class EasyLink {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.api.EasyLink>;
						public static mPort: number;
						public getSSID(): string;
						public is3rd(): boolean;
						public startEasyLink(param0: io.fogcloud.sdk.easylink.helper.EasyLinkParams, param1: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public constructor(param0: globalAndroid.content.Context);
						public isWifiEnabled(): boolean;
						public stopEasyLink(param0: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public startEasylink(param0: string, param1: string, param2: boolean, param3: number, param4: string, param5: string, param6: boolean, param7: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public isAvailable(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module api {
					export class EasyLink_plus {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.api.EasyLink_plus>;
						public stopTransmitting(): void;
						public setSmallMtu(param0: boolean): void;
						public transmitSettings(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: number, param4: number, param5: string): void;
						public transmitSettings(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string): void;
						public static getInstence(param0: globalAndroid.content.Context): io.fogcloud.sdk.easylink.api.EasyLink_plus;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module api {
					export class EasylinkP2P {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.api.EasylinkP2P>;
						public getSSID(): string;
						public startEasyLink(param0: io.fogcloud.sdk.easylink.helper.EasyLinkParams, param1: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public constructor(param0: globalAndroid.content.Context);
						public stopEasyLink(param0: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class CRC16 {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.CRC16>;
						public constructor();
						public static zconfig_checksum_v2(param0: native.Array<string>, param1: number): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class ComHelper {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.ComHelper>;
						public constructor();
						public successCBEasyLink(param0: number, param1: string, param2: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public static isInteger(param0: string): boolean;
						public failureCBEasyLink(param0: number, param1: string, param2: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public static checkPara(param0: native.Array<string>): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class Crc8Code {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.Crc8Code>;
						public constructor();
						public static calcCrc8(param0: native.Array<number>, param1: number, param2: number): number;
						public static calcCrc8(param0: native.Array<number>): number;
						public static calcCrc8(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class EasyLinkCallBack {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.EasyLinkCallBack>;
						/**
						 * Constructs a new instance of the io.fogcloud.sdk.easylink.helper.EasyLinkCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: number, param1: string): void;
							onFailure(param0: number, param1: string): void;
						});
						public constructor();
						public onFailure(param0: number, param1: string): void;
						public onSuccess(param0: number, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class EasyLinkErrCode {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.EasyLinkErrCode>;
						public static START_CODE: number;
						public static STOP_CODE: number;
						public static INVALID_CODE: number;
						public static CONTEXT_CODE: number;
						public static BUSY_CODE: number;
						public static CLOSED_CODE: number;
						public static CALLBACK_CODE: number;
						public static EXCEPTION_CODE: number;
						public static SUCCESS: string;
						public static INVALID: string;
						public static BUSY: string;
						public static CLOSED: string;
						public static CONTEXT: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class EasyLinkParams {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.EasyLinkParams>;
						public ssid: string;
						public password: string;
						public isSendIP: boolean;
						public runSecond: number;
						public sleeptime: number;
						public extraData: string;
						public rc4key: string;
						public isSmallMTU: boolean;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class Helper {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.Helper>;
						public static ConvertStringToHexByte(param0: string): number;
						public constructor();
						public static ConvertHexByteArrayToString(param0: native.Array<number>): string;
						public static buildArrayBlocks(param0: native.Array<number>, param1: number): native.Array<string>;
						public static castHexKeyboard(param0: string): string;
						public static ConvertIntToHexFormatString(param0: number): string;
						public static fillbyte(param0: number, param1: native.Array<number>): native.Array<number>;
						public static ConvertIntTo2bytesHexaFormat(param0: number): native.Array<number>;
						public static StringForceDigit(param0: string, param1: number): string;
						public static ConvertStringToInt(param0: string): number;
						public static hexStringToBytes(param0: string): native.Array<number>;
						public static checkFileName(param0: string): boolean;
						public static FormatValueByteWrite(param0: string): string;
						public static charToByte(param0: string): number;
						public static Convert2bytesHexaFormatToInt(param0: native.Array<number>): number;
						public static checkAndChangeDataHexa(param0: string): string;
						public static checkDataHexa(param0: string): boolean;
						public static ConvertStringToHexBytes(param0: string): native.Array<number>;
						public static checkAndChangeFileName(param0: string): string;
						public static ConvertStringToHexBytesArray(param0: string): native.Array<number>;
						public static byteMerger(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
						public static buildArrayValueBlocks(param0: native.Array<number>, param1: number): native.Array<string>;
						public static ConvertHexByteToString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class P2PData {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.P2PData>;
						public constructor();
						public bgProtocol(param0: io.fogcloud.sdk.easylink.helper.aws_broadcast, param1: string, param2: string): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class ProbeReqData {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.ProbeReqData>;
						public static hexArray: native.Array<string>;
						public constructor();
						public static bytesToHex(param0: native.Array<number>): string;
						public bgProtocol(param0: string, param1: string, param2: number): native.Array<string>;
						public static hexStringToBytes(param0: string): native.Array<number>;
						public static charToByte(param0: string): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class RC4 {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.RC4>;
						public encrypt(param0: native.Array<number>): native.Array<number>;
						public decrypt(param0: native.Array<number>): native.Array<number>;
						public constructor(param0: native.Array<number>);
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class SinRC4 {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.SinRC4>;
						public constructor();
						public static encry_RC4_string(param0: string, param1: string): string;
						public static decry_RC4(param0: string, param1: string): string;
						public static encry_RC4_byte(param0: native.Array<number>, param1: string): native.Array<number>;
						public static encry_RC4_byte(param0: string, param1: string): native.Array<number>;
						public static decry_RC4(param0: native.Array<number>, param1: string): string;
						public static intToBytes2(param0: number): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class UdpSend {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.UdpSend>;
						public sendUdpunicast(param0: native.Array<number>, param1: number, param2: number, param3: java.net.InetAddress): void;
						public constructor();
						public recvPackage(param0: java.net.DatagramPacket): void;
						public constructor(param0: number);
						public sendConfigData(param0: number, param1: number): void;
						public setReuseAddr(): void;
						public get_socket(): java.net.DatagramSocket;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class WiFiP2PDeviceInstance {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.WiFiP2PDeviceInstance>;
						public device: globalAndroid.net.wifi.p2p.WifiP2pDevice;
						public instanceName: string;
						public serviceRegistrationType: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module helper {
					export class aws_broadcast {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.helper.aws_broadcast>;
						public constructor();
						public set_stop_broad_flag(param0: boolean): void;
						public aws_send(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module jetty {
					export class EasyServer {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.jetty.EasyServer>;
						public mServer: org.eclipse.jetty.server.Server;
						public start(param0: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack): void;
						public constructor(param0: number);
						public isStarted(): boolean;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module jetty {
					export class EasyServlet {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.jetty.EasyServlet>;
						public doPost(param0: javax.servlet.http.HttpServletRequest, param1: javax.servlet.http.HttpServletResponse): void;
						public constructor(param0: io.fogcloud.sdk.easylink.helper.EasyLinkCallBack);
						public readFully(param0: java.io.InputStream, param1: string): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module plus {
					export class EasyLink_minus {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.plus.EasyLink_minus>;
						public isScanning(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public stopTransmitting(): void;
						public startTransmit(param0: string, param1: string, param2: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: java.lang.Thread);
						public transmitSettings(param0: string, param1: string, param2: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module plus {
					export class EasyLink_v2 {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.plus.EasyLink_v2>;
						public static getInstence(): io.fogcloud.sdk.easylink.plus.EasyLink_v2;
						public stopTransmitting(): void;
						public transmitSettings(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: number): void;
						public static getWlanEth(): java.net.NetworkInterface;
						public static sendData(param0: java.net.DatagramPacket, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fogcloud {
		export module sdk {
			export module easylink {
				export module plus {
					export class EasyLink_v3 {
						public static class: java.lang.Class<io.fogcloud.sdk.easylink.plus.EasyLink_v3>;
						public static getInstence(): io.fogcloud.sdk.easylink.plus.EasyLink_v3;
						public stopTransmitting(): void;
						public transmitSettings(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: string, param4: number): void;
						public SetSmallMTU(param0: boolean): void;
					}
				}
			}
		}
	}
}

//Generics information:

