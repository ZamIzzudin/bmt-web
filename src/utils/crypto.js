const CryptoJS = require("crypto-js");

const SALT = 'jsdg7jbejkd7j2'

// Enkripsi
function encrypt(plaintext) {
    const ciphertext = CryptoJS.AES.encrypt(plaintext, SALT);
    return ciphertext.toString();
}

// Dekripsi
function decrypt(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SALT);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

module.exports = {
    encrypt,
    decrypt,
};