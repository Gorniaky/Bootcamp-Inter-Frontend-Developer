function comparator(num1 = 0, num2 = 0) {
  const same = num1 == num2,
    soma = num1 + num2;
  let string = `Os números ${num1} e ${num2}`;

  if (!same)
    string = `${string} não`;

  string = `${string} são iguais. Sua soma é ${soma}, que é`;
  if (soma < 10) {
    string = `${string} menor`;
  } else {
    string = `${string} maior`;
  }

  string = `${string} que 10 e`;
  if (soma < 20) {
    string = `${string} menor`;
  } else {
    string = `${string} maior`;
  }

  string = `${string} que 20.`;
  return string;
}

console.log(comparator(0, 0));

let contador = 0

console.log(contador++)