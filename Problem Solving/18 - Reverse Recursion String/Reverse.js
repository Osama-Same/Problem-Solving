// [1] Reverse a given String using recursion?

const reverseRecursion = (str) => {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseRecursion(str.slice(0, str.length - 1));
};
//console.log(reverseRecursion("osama")); //amaso
//console.log(reverseRecursion("you are a nice dude")); //"edud ecin a era uoy"



