export default function generateVerificationToken(length = 32): string {
    const array = new Uint8Array(length)
    globalThis.crypto.getRandomValues(array)
    const base64 = Buffer.from(array).toString('base64')
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
