const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    });

    const ordered = people.sort((firstPerson, secondPerson) => 
        (firstPerson.yearOfDeath - firstPerson.yearOfBirth) >
        (secondPerson.yearOfDeath - secondPerson.yearOfBirth) ? -1 : 1);

    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
