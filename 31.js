//password Validation check lowercase, uppercase, number, special char and length
const validatePassword = (password) => {
    const minLength =8;
    const hasLowerCase =/[a-z]/.test(password);
    const hasUpperCase =/[A-Z]/.test(password);
    const hasNumber =/\d/.test(password);
    const hasSpecialChar =/[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength =password.length >= minLength;

    return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar && isValidLength;
}
console.log(validatePassword("StrongP@ss1")); // true
console.log(validatePassword("weakpass")); // false

console.log(validatePassword("NoSpecialChar1")); // false
console.log(validatePassword("Short1!")); // false