let userInput: unknown;
// unknown means we don't know what we will receive, but still we want to be careful for that it's better than any
let userName: string;

userInput = 4;
userInput = "Cheval";

// userName = userInput;
//we get an error here because TS knows userInput can be everything including a string, so if it's not it can create a pb so we have to add a check

if (typeof userInput === "string") {
  userName = userInput;
}

const errorHandler = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

//this function does not return anything, even void (undefined), it cancels the code. Void is still true, but never is more accurate

errorHandler("oh noOOOoon", 500);
