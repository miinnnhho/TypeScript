interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Pick을 이용해 title 프로퍼티를 포함해봅니다..
type TodoPreview = Pick<Todo, "title">;

const todo1: TodoPreview = {
  title: "Clean room",
};

// todo변수 프로퍼티랑 interfacea Todo프러퍼티랑 맞지 않아 에러가 발생. => pick으로 해결
