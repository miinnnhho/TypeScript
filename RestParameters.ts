// restOfChar를 rest parameters형식으로 수정해주세요
function makeWord(firstChar: string, ...restOfChar: string[]) {
  return firstChar + restOfChar.join("");
}

let word = makeWord("타", "입", "스", "크", "립", "트");

console.log(word); // 타입스크립트 출력

//makeWord의 파라미터는 2개인데 6line의 값은 6개여서 오류가 남(숫자가 일치하지 않아서)
// ...을 넣어준다, string을 string[]로 변경.
