
export function startDiscovery(ssid: string, password: string, type: number): Promise<boolean>;

export function stopDiscovery(): void;

export function ssid(): string;
