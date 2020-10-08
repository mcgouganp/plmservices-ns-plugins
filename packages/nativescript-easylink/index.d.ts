export declare class EasylinkImpl {
	constructor();
	public destroy(): void;
	public start(ssid: string, password: string): boolean;
	public stop(): void;
	public ssid(): string;
}

const instance = new EasylinkImpl();
export const Easylink = instance;
