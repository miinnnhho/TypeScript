interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Omit을 이용해 description 프로퍼티를 제외해봅니다.
type TodoPreview1 = Omit<Todo, "description">;

const todo: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};

// 8줄 - type TodoPreview =Todo를 type TodoPreview = Omit<Todo, 'description'>; 로 수정
