let angka = [3, 5, 12];
let sum = 0;
for (let i = 0; i < angka.length; i++) {
  sum += angka[i];
}

function loopAngka() {
  let text = "";
  for (let i = 0; i < angka.length; i++) {
    if (i === angka.length - 1) {
      text += angka[i];
    } else {
      text += angka[i] + " + ";
    }
  }
  return text;
}

'learning git'

console.log(`total nilai adalah ${sum} karena ${loopAngka(angka)}`);
