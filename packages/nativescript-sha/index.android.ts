export class Sha {
	public Sha1(input: string): string {
		return this._Hash(input, 'SHA-1');
	}

	public Sha224(input: string): string {
		return this._Hash(input, 'SHA-224');
	}

	public Sha256(input: string): string {
		return this._Hash(input, 'SHA-256');
	}

	public Sha384(input: string): string {
		return this._Hash(input, 'SHA-384');
	}

	public Sha512(input: string): string {
		return this._Hash(input, 'SHA-512');
	}

	public HmacSha1(key: string, input: string): string {
		return this._Hmac(key, input, 'HmacSHA1');
	}

	public HmacSha224(key: string, input: string): string {
		return this._Hmac(key, input, 'HmacSHA224');
	}

	public HmacSha256(key: string, input: string): string {
		return this._Hmac(key, input, 'HmacSHA256');
	}

	public HmacSha384(key: string, input: string): string {
		return this._Hmac(key, input, 'HmacSHA384');
	}

	public HmacSha512(key: string, input: string): string {
		return this._Hmac(key, input, 'HmacSHA512');
	}

	// ----------------------------------------------------------------------------
	// Internal

	protected _Hash(input: string, algorithm: string): string {
		let javaStr: java.lang.String;
		if (input) {
			javaStr = new java.lang.String(input);
		} else {
			javaStr = new java.lang.String("");
		}
		const bt = javaStr.getBytes();
		let result: string = '';
		try {
			let md = java.security.MessageDigest.getInstance(algorithm);
			md.update(bt);
			const out = md.digest();
			result = this._Format(out);
		} catch (e) {
			console.log(`SHA ${algorithm} error - ${e}`);
			return null;
		}
		return result;
	}

	protected _Hmac(key: string, input: string, algorithm: string): string {
		let javaKeyStr: java.lang.String;
		let javaInputStr: java.lang.String;
		if (key) {
			javaKeyStr = new java.lang.String(key);
		} else {
			javaKeyStr = new java.lang.String("");
		}
		if (input) {
			javaInputStr = new java.lang.String(input);
		} else {
			javaInputStr = new java.lang.String("");
		}
		const btKey = javaKeyStr.getBytes();
		const btInput = javaInputStr.getBytes();
		let result: string = '';
		try {
			let mac = javax.crypto.Mac.getInstance(algorithm);
			mac.init(new javax.crypto.spec.SecretKeySpec(btKey, algorithm));
			const out = mac.doFinal(btInput);
			result = this._Format(out);
		} catch (e) {
			console.log(`HMAC ${algorithm} error - ${e}`);
			return null;
		}
		return result;
	}

	protected _Format(data: native.Array<number>): string {
		let result: string = '';
		let tmp: string;
		for (let i = 0; i !== data.length; i++) {
			tmp = java.lang.Integer.toHexString((data[i] + 256) % 256);
			if (tmp.length % 2 === 1) {
				result += '0';
			}
			result += tmp;
		}
		return result;
	}
}
