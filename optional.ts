// width 프로퍼티를 optional로 변경해주세요.
interface Config {
  color: string;
  width?: number;
  //옵셔널(Optional)은 있을수도, 없을 수도 있는 변수를 저장하기 위해 있다.
}

function createSqure(config: Config): { color: string; area: number } {
  return {
    color: config.color,
    area: 100 * (config.width ? config.width : 1), // width 프로퍼티를 선택적 속성으로 사용합니다.
  };
}

const config = {
  color: "red",
};
//width에 ?를 선언했기에 없어도 결과가 나온다.

createSqure(config);
