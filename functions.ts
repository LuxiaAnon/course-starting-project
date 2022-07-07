// ici TS déduit le type de réponse fonction de ce qui lui est donné et de l'opération faite
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// ici, la fonction ne retourne rien, TS indique donc que le type rendu est void, c'est différent d'undefined,(voir en dessous), undefined signifie qu'il y a un retour mais vide
const printResult = (num: number) => {
  console.log("Le résultat est : " + num);
};
const printResult2 = (num: number): undefined => {
  console.log("Le résultat est : " + num);
  return;
};

printResult(add(2, 5));

let combineValues: Function;

combineValues = add;
combineValues = printResult;

console.log(combineValues(2, 3)); // va pas marcher car printResult ne prend pas ces valeurs, il faut donc être plus précis dans la définition de la fonction

let combineValues2: () => number; // cette fonction n'accepte pas de paramètre et retourne un chiffre
let combineValues3: (num1: number, num2: number) => number; // cette fonction accepte 2 paramètres qui sont des nombres et retourne un nombre

combineValues3 = add
// combineValues3 = printResult  => pas content


const addAndHandle = (num: number, num2: number, cb: (n: number) => void) => {
    const result = num + num2;
    cb(result);
}
