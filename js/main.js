let encryptorArea = document.querySelector('[data-encryptor-area]');
let decryptor = document.querySelector('[data-decryptor]');
let decryptorTitle = document.querySelector('[data-decryptor-title]');
let decryptorDescription = document.querySelector('[data-decryptor-description]');

encryptorArea.addEventListener("keyup", (evento) => {
    decryptor.innerHTML = evento.target.value;
})