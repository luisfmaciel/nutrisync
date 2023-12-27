import bcrypt from "bcryptjs";

function getAttributeValue(object, path, defaultValue = undefined) {
    try {
        const prop = getDescendantProp(object, path);
        if (!prop) return defaultValue;
        return prop;
    } catch (error) {
        return defaultValue;
    }
}

function getDescendantProp(object, path) {
    const array = path.split(".");
    while (array.length) object = object[array.shift()];
    return object;
}

async function generateHash(value) {
    return await bcrypt.hash(value, 10);
}

// example@example.com
function validateEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
}

// Pelo menos uma letra minúscula
// Pelo menos uma letra maiúscula
// Pelo menos um número
// Pelo menos 6 caracteres no total
function validadePassword(password) {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regexSenha.test(password);
}

export default {
    getAttributeValue,
    getDescendantProp,
    generateHash,
    validateEmail,
    validadePassword
};
