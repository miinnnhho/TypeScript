interface Animal {
  makeSound(): void;
}

// Dog class에 Animal interface를 implements합니다.
// 따라서 interface가 가지고 있는 함수를 class에서 구현해야 합니다.
class Dog2 implements Animal {
  //implements 키워드는 class의 interface에 만족하는지 여부를 체크할 때 사용된다.

  // makeSound() 함수를 구현해주세요.
  // 함수 호출 시, "멍멍" 콘솔이 나타날수 있게 cosole.log()를 구현해주세요
  makeSound(): void {
    console.log("멍멍");
  }
}

const dog2 = new Dog2();
dog2.makeSound(); // 멍멍 출력
