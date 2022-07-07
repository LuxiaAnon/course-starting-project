//========================= Union Type ===============================
//Permet d'accepter plusieurs types à la fois

// const combine = (input1: number | string, input2: number | string) => {
//   //ici  une erreur car ts ne regarde pas le détails de l'union, il voit juste que plusieurs types sont acceptés alors le + peut etre risqués
//   const result = input1 + input2;
//   return result;
// };

const combine2 = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    input1.toString() + input2.toString();
  }
  return result;
};

const combineAges = combine2(23, 30);
const combineNames = combine2("Nelly", "Clémence");
console.log(combineAges);

//========================= Literal Type ===============================
// un type literal est un type encore plus poussé dans sa précision, ici, nous savons que c'est une string et quelle string précisément
const combine3 = (
  input1: number | string,
  input2: number | string,
  //   resultConversion: string
  resultConversion: "as-number" | "as-string"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    input1.toString() + input2.toString();
  }
  return result;
};

const combineAges2 = combine3(23, 30, "as-number");
const combineNames2 = combine3("Nelly", "Clémence", "as-string");
const combineAgesInSring = combine3("20", "31", "as-string");

//========================= Aliases/custom Type ===============================

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

const combine4 = (
  input1: Combinable,
  input2: Combinable,
  //   resultConversion: string
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    input1.toString() + input2.toString();
  }
  return result;
};
