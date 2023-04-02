export default function checkInputSecurity(input) {
    // Cek apakah input merupakan string
    if (typeof input !== 'string') {
        throw new Error('Input harus berupa string');
    }

    // Cek apakah input tidak kosong
    if (input.trim().length === 0) {
        throw new Error('Input tidak boleh kosong');
    }

    // Cek apakah input tidak mengandung karakter yang tidak diizinkan
    const disallowedCharacters = ['<', '>', '"', '\'', '\\', '&'];
    if (disallowedCharacters.some(char => input.includes(char))) {
        throw new Error('Input tidak boleh mengandung karakter yang tidak diizinkan');
    }

    // Jika input lolos semua cek, kembalikan input
    return input;
}





