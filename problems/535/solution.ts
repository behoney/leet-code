/**
 * Encodes a URL to a shortened URL.
 */
const prefix = "http://ti.ny/"
function encode(longUrl: string): string {
  return prefix+btoa(longUrl)
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return atob(shortUrl.slice(prefix.length))
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */