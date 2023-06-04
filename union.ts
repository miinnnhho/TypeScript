// string과 number 두 타입이 허용될수 있게 union type을 선언해주세요
const printMessage = (message: string | number) => {
  console.log(message);
};

printMessage(1234);
printMessage("hello");

// |를 사용하여 두 개 이상의 타입을 선언 가능
