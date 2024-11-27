// Генерация пароля
function generatePassword(length = 8, options = { numbers: true, symbols: false }) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~|}{[]:;?><,./-=';
    let chars = letters;

    if (options.numbers) chars += numbers;
    if (options.symbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Экспорт функции
module.exports = { generatePassword };