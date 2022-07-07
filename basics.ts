const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    // sans traiter le nombre seul mais avec la phrase, on retombe sur le probleme de concatenation de string
    const result = n1 + n2
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const number1 = 2;
const number2 = 4;
const printResult = true;
const resultPhrase = "Je suis la réponse : ";

const result = add(number1, number2, printResult, resultPhrase);
