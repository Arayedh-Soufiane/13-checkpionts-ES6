const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];
const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
////////////////////////////////////////////////////
let petsWithAge = pets;
petsWithAge.forEach((elm) => {
  elm.age = getAge(elm);
});
console.log(petsWithAge);
//////////////////////////////////////////////////
let dogs = pets.filter((anim) => anim.type === "dog");
console.log(dogs);
///////////////////////////////////////////////////
let Jasper = pets.filter((anim) => anim.name === "Jasper");
jasper = Jasper[Jasper.length - 1]; // dans le fichier index ES5 en affiche l'age de dernier object qui a le nom Jasper de la array pets
console.log("Jasper is " + jasper.age + " years old");
