const { generatePassword } = require('dmitriy-password-gen');
console.log(generatePassword(10, { numbers: true, symbols: true }));