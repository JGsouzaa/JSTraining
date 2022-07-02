var age;

function calculateAge(birthYear, currentYear) {

    age = currentYear - birthYear;
    return age;
    
}

document.write("Your age is: " + calculateAge(1998, 2022));
