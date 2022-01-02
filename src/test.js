// ​​# 問1
// もっとも短い単語を探し、その文字数を返してください。
// 例文から、String型の文字列を受け取り、半角スペースで区切った上で短い単語の文字数を返す。
// 短い単語が何か自体は探す必要がない
// 文字数だけわかれば良い

// 例:
// ```js
// function shortest('red blue yellow green'); // -> 3
// ```

// ```js
const shortest = (str) => {
  // 引数で指定された文字列を、半角スペースで分割します
  // 区切った配列をmapで文字数だけの配列に変換します。
  // reduceによりその要素から最も文字数が少ない要素の文字数をreturnします。
  return str
    .split([" "])
    .map((str) => str.length)
    .reduce((a, b) => Math.min(a, b));
};
// console.log(`shortest: ${shortest("green yellow red blue")}`);
// ```

// # 問2
// 連続する文字をなくす関数を作ってください。
// 次のindexと文字が同一でない場合という条件でfilterをかけます。
const format = (str) => [...str].filter((e, i, arr) => e !== arr[i + 1]);
// console.log(format("abbcccaabccc"));

// # 問3
// 配列に1つだけ違う数字が入っている。ユニークな数字を探してください。
// ※ 配列には最低3つ以上の数字が入ります。

// 例:

// ```js
// findUniqueNumber([1, 5, 1, 1, 1, 1])  // -> 5
// findUniqueNumber([0, 0, 0, 3])  // -> 3
// [2, 5, 5, 5] // -> 2
const numberArr1 = [1, 5, 1, 1, 1, 1],
  numberArr2 = [0, 0, 0, 3],
  numberArr3 = [2, 5, 5, 5, 5],
  numberArr4 = [3, 3, 4];
// ```

// ```js
// function findUniqueNumber(){
//   // your answer
// }
const findUniqueNumber = (arr) => {
  const result = arr.reduce((acc, _, index) => {
    console.log(index, acc, _);
    return acc + 1;
  }, 500);
  console.log("result", result);
};
console.log(findUniqueNumber([0, 0, 0, 3]));
// ```

// # 問4
// N x Nの2次元配列がある。反時計回りで左上から中央まで一筆で数字を通るときの配列に変換する関数を作ってください。
// N * Nは必ずしも3*3ではない。2*2でも、それ以降の可能性もある。
// つまりベタがきでの攻略は不可なので、配列の要素数に関係なく確認できるようにする必要がある。

/* イテレータの移動はN*N-1回発生する
* [0,0], [1,0], // X+1(2)
* [2,0], [2,1], // Y+1(2)
* [2,2], [1,2], // X-1(2)
* [0,2], // Y-1(1) & [0,1], // X+1(1)

イテレータは↓,→,↑,←の順に指定した分だけ移動する。
ただし←の移動は最後の移動に関しては↓に置き換わる。

一つのサイクルが終わると、再び↓移動へ切り替わる。この時の移動ますは外周分を除いた-2マスとなる。
*/

// ```js
const matrix3 = [
  [6, 2, 1],
  [5, 4, 9],
  [3, 8, 7]
];
const matrix4 = [
  [1, 12, 11, 10],
  [2, 13, 16, 9],
  [3, 14, 15, 8],
  [4, 5, 6, 7]
];

const matrix6 = [
  [1, 20, 19, 18, 17, 16],
  [2, 21, 32, 31, 30, 15],
  [3, 22, 33, 36, 29, 14],
  [4, 23, 34, 35, 28, 13],
  [5, 24, 25, 26, 27, 12],
  [6, 7, 8, 9, 10, 11]
];
// getSpiralPath(matrix3) // -> [6, 5, 3, 8, 7, 9, 1, 2, 4]
// ```

// ```js
const getSpiralPath = (matrix) => {
  // mode(1:↓, 2:→, 3:↑, 4:←)
  const matLen = matrix.length;
  let moveMode = 1,
    moved = 0,
    laps = 0,
    coordX = 0,
    coordY = 0;
  const arr = [];

  for (let i = 0; i < matLen ** 2; i++) {
    // 座標の値を格納
    arr.push(matrix[coordX][coordY]);

    switch (moveMode) {
      case 1:
        coordX += 1;
        break;
      case 2:
        coordY += 1;
        break;
      case 3:
        coordX -= 1;
        break;
      case 4:
        moved === matLen - 2 - laps * 2 ? (coordX += 1) : (coordY -= 1);
        break;
      default:
    }

    moved++;
    if (moved === matLen - 1 - laps * 2) {
      if (moveMode !== 4) {
        moveMode++;
      } else {
        laps++;
        moveMode = 1;
      }
      moved = 0;
    }
  }
  return arr;
};
// ```
// console.log(getSpiralPath(matrix3));
// console.log(getSpiralPath(matrix4));
// console.log(getSpiralPath(matrix6));
