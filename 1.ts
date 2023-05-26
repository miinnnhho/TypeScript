// Number
// string
// boolean
//null
//undefined
//any

let a: number = 3;
let b: string = "love you";

let c: number | string = "dsadds";
c = 3;
//타입 두개도 지정 가능.

// 배열
let e: string[] = ["apple", "mango"];
// e.push(3) 는 안 됨

// 객체

//함수
// 일반적인 함수
function addNumber(a, b) {
  return a + b;
}
//ts에선 요소에 타입 지정 해줘야 함.
function addNumber2(a: number, b: number) {
  return a + b;
}
