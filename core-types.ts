// TS, thanks to the first assignation knows what are the types in the object
const person1 = {
  name: "Joe",
  age: 40,
  hobbies: ["fishing", "family trips"],
};

// by adding type object but without more information TS only knows it's an object, and not what's inside
const person2: object = {
  name: "Joe",
  age: 40,
};

// Now it knwows everything again but the best syntax is the first one
const person3: {
  name: string;
  age: number;
} = {
  name: "Joe",
  age: 40,
};

let favoriteActivities: string[]; //["phrase", "phrase2"]
let favoriteStuf: any[]; //["phrase", 1, true] => on peut tout mettre la dedans mais c'est pas très TS spirit

for (const hobby of person1.hobbies) {
  //On accède facilement à toutes les méthodes relatives aux strings car ts sait que ce sont des strings. Inversement si j'essaie de mettre une méthode qui ne
  //s'applique pas sur les string j'ai une erreur (genre map)
  console.log(hobby.toUpperCase());
}

//----------------------------------------------------

//if we need to precise one element, like the tuple here, we have to precise them all. Here the tuple says it has to be an array of 2 elements,
//and it should be a number first then a string. Be careful, the push method wont be stopped
const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Joe",
  age: 40,
  hobbies: ["fishing", "family trips"],
  role: [2, "author"],
};

//----------------------------------------------------

//by default when compiled into JS the first value of the enum will be identified by 0 but I can write {ADMIN = 232, AUTHOR = 'CHEVAL'} if I want to personalize it

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person5 = {
  name: "Joe",
  age: 40,
  hobbies: ["fishing", "family trips"],
  role: Role.ADMIN,
};

console.log(person5);