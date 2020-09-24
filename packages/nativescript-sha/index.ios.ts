export class Sha {
	public Sha1(input: string): string {
		const nsStr: NSString = NSString.stringWithString(input);
		const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(20);

		CC_SHA1(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 20);

		return this._Format(data);
	}

	public Sha224(input: string): string {
		const nsStr: NSString = NSString.stringWithString(input);
		const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(28);

		CC_SHA224(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 28);

		return this._Format(data);
	}

	public Sha256(input: string): string {
		const nsStr: NSString = NSString.stringWithString(input);
		const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(32);

		CC_SHA256(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 32);

		return this._Format(data);
	}

	public Sha384(input: string): string {
		const nsStr: NSString = NSString.stringWithString(input);
		const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(48);

		CC_SHA384(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 48);

		return this._Format(data);
	}

	public Sha512(input: string): string {
		const nsStr: NSString = NSString.stringWithString(input);
		const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(64);

		CC_SHA512(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 64);

		return this._Format(data);
	}

	public HmacSha1(key: string, input: string): string {
		return this._Hmac(key, input, kCCHmacAlgSHA1, 20);
	}

	public HmacSha224(key: string, input: string): string {
		return this._Hmac(key, input, kCCHmacAlgSHA224, 28);
	}

	public HmacSha256(key: string, input: string): string {
		return this._Hmac(key, input, kCCHmacAlgSHA256, 32);
	}

	public HmacSha384(key: string, input: string): string {
		return this._Hmac(key, input, kCCHmacAlgSHA384, 48);
	}

	public HmacSha512(key: string, input: string): string {
		return this._Hmac(key, input, kCCHmacAlgSHA512, 64);
	}

	// ----------------------------------------------------------------------------
	// Internal

	protected _Hmac(key: string, input: string, algorithm: number, hashSize: number): string {
		const nsKeyStr: NSString = NSString.stringWithString(key);
		const nsKeyData: NSData = nsKeyStr.dataUsingEncoding(NSUTF8StringEncoding);
		const nsInputStr: NSString = NSString.stringWithString(input);
		const nsInputData: NSData = nsInputStr.dataUsingEncoding(NSUTF8StringEncoding);
		const hash: NSMutableData = NSMutableData.dataWithLength(hashSize);

		CCHmac(algorithm, nsKeyData.bytes, nsKeyData.length, nsInputData.bytes, nsInputData.length, hash.mutableBytes);

		const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, hashSize);

		return this._Format(data);
	}

	protected _Format(data: NSData): string {
		const buffer: ArrayBuffer = interop.bufferFromData(data);
		const view: Uint8Array = new Uint8Array(buffer);

		let result: string = "";
		for (let i = 0; i !== data.length; ++i) {
			let tmp: string = view[i].toString(16);
			if (tmp.length === 1) {
				result += "0";
			}
			result += tmp;
		}
		return result;
	}
}
