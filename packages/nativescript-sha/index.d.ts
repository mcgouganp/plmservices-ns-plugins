export declare class Sha {
	public Sha1(input: string): string;
	public Sha224(input: string): string;
	public Sha256(input: string): string;
	public Sha384(input: string): string;
	public Sha512(input: string): string;

	public HmacSha1(key: string, input: string): string;
	public HmacSha224(key: string, input: string): string;
	public HmacSha256(key: string, input: string): string;
	public HmacSha384(key: string, input: string): string;
	public HmacSha512(key: string, input: string): string;
}
