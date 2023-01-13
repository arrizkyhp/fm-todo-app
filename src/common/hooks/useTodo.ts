import {
  ChangeEvent, useEffect, useRef, useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TODOS } from '../constants';

const useTodo = () => {
  const initialRender = useRef(true);

  const [todo, setTodo] = useState<string>('');
  const [listTodo, setListTodo] = useState<any>([]);

  useEffect(() => {
    const localTodos: any = localStorage.getItem(TODOS);

    if (JSON.parse(localTodos)) {
      setListTodo(JSON.parse(localTodos));
    } else {
      setListTodo([]);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem(TODOS, JSON.stringify(listTodo));
  }, [listTodo]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const handleAddTodo = (event: any): void => {
    event.preventDefault();

    if (todo !== '') {
      setListTodo([
        ...listTodo,
        {
          id: uuidv4(),
          text: todo.trim(),
          completed: false,
        },
      ]);
    }

    setTodo('');
  };

  const handleCompleteTodo = (id: string): void => {
    const updateItem = listTodo.map((item: any) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setListTodo(updateItem);
  };

  const handleDeleteTodo = (id: string): void => {
    const removeTodo = listTodo.filter((item: any) => {
      return item.id !== id;
    });

    setListTodo(removeTodo);
  };

  return {
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleInputValue,
    listTodo,
    todo,
  };
};

export { useTodo };
