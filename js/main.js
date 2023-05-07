let encryptorArea = document.querySelector('[data-encryptor-area]');
let decryptorDescription = document.querySelector('[data-decryptor-description]');
let btnEncrypt = document.querySelector('[data-btn-encrypt]');
let btnDecrypt = document.querySelector('[data-btn-decrypt]');

btnEncrypt.addEventListener('click', () => {
    const encryptText = encrypt(encryptorArea.value);
    decryptorDescription.textContent = encryptText;
    encryptorArea.value = "";
})

function encrypt(encryptString) {
    let matrixCode = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    encryptString = encryptString.toLowerCase();

    for (code in matrixCode) {
        if (encryptString.includes(matrixCode[code][0])) {
            encryptString = encryptString.replaceAll(matrixCode[code][0], matrixCode[code][1]);
        }
    }

    return encryptString;
}