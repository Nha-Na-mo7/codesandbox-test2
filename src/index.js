import "./styles.css";
import "./test";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const makeRundomWordArr = (count) => {
  const getWords = [...words];
  const newWords = [];
  for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * words.length);
    newWords.push(getWords[num]);
    words.splice(num, 1);
  }
  console.log(`これは${newWords}`);

  return newWords;
};

const words = [
  "3a3",
  "4bb4",
  "5ccc5",
  "6dddd6",
  "7eeeee7",
  "8ffffff8",
  "9ggggggg9",
  "10hhhhhh10",
  "11iiiiiii11"
];
// makeRundomWordArr(5);

//Q1 最も短い単語を探し、その文字数を返してください。
