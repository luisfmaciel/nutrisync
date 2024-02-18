// Pelo menos uma letra minúscula
// Pelo menos uma letra maiúscula
// Pelo menos um número
// Pelo menos 6 caracteres no total
function validadePassword(password) {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regexSenha.test(password);
}

export {
    validadePassword,
};
