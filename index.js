const generatePassword = require('generate-password');

const args = process.argv.slice(2);

let passwordLength = 8; // default password length
let includeSymbols = true; // default includes symbols
const MAX_LENGTH = 25; // sets the maximum password length


args.forEach(arg => {
    if (arg.startsWith('length=')) { // Check if length is used, and if its proper.
        const value = arg.split('=')[1];
        if (!isNaN(value) && value > 0) {
            const parsedLength = parseInt(value, 10);
            if (parsedLength > MAX_LENGTH) {
                console.warn(`Warning: Password length cannot exceed 25 characters. Setting length to 25..`);
                passwordLength = MAX_LENGTH;
            } else {
                passwordLength = parsedLength;
            }
        } else {
            console.error('Error: Invalid length. Generating password of default length 8.');
        }
    }
    
    if (arg.startsWith('symbols=')) {
        const value = arg.split('=')[1].toLowerCase();
        if (value === 'true') {
            includeSymbols = true;
        } else if (value === 'false') {
            includeSymbols = false;
        } else {
            console.error('Error: Invalid value for symbols. Using symbols by default.');
        }
    }
});

function createPassword() {
    const password = generatePassword.generate({
        length: passwordLength, // uses the dynamic length
        numbers: true,
        symbols: includeSymbols, // uses the dynamic value for symbols
        uppercase: true,
        lowercase: true,
    });

    return password;
}

const password = createPassword();
console.log('Generated Password: ', password);