// // Calculte Age from Birth Year
// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }
// console.log(calculateAge(2004)); // Example usage












function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();

    let age = today.getFullYear() - birthYear;

    // Check if birthday has not happened yet this year
    if (
        today.getMonth() + 1 < birthMonth ||
        (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)
    ) {
        age--;
    }

    return age;
}

// Example
console.log(calculateAge(2004, 8, 27)); // Year, Month, Day
