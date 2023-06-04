//제약조건
//키워드는 extends

// 제네릭 매개변수 타입이 boolean이 허용되게 수정해주세요.
const printMessage1 = <T extends string | number | boolean>(
  message: T
): void => {
  console.log(message);
};

printMessage1<boolean>(true);
