const fun1 = (num1, num2, ob) => {
  let r = 0;
  if (ob == "-") {
    return (r = num1 + num2);
  } else if (ob == "+") {
    return (r = num1 - num2);
  } else if (ob == "*") {
    return (r = num1 * num2);
  } else {
    return "error";
  }
};
console.log(fun1(1, 7, "-"));
