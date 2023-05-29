interface Todo {
  title: string;
  description: string;
}

// obj매개변수 타입에 Partial Utility types을 추가해주세요
function updateTodo(obj: Partial<Todo>) {
  return obj;
}

const result = updateTodo({
  title: "title", //description: string를 안 넣어서 에러가 났음.
});

console.log(result); // { title: 'title' } 출력

//12줄- description: string를 안 넣어서 에러가 났음. 근데 결과에서 title만 원하니까
//7줄 - updateTodo(obj: Todo)에서 updateTodo(obj: Partial<Todo>) 로 변경해주면 됨
