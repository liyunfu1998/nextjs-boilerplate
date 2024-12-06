"use client";

import { useCallback, useState } from "react";
import { Checkbox } from "./_components/ui/checkbox";
import { cn } from "./_components/utils";

export function Todos() {
  const [todos, setTodos] = useState([
    {
      todo: "录制Expo教程",
      completed: false,
    },
    {
      todo: "和小秘开会",
      completed: false,
    },
  ]);

  const toggleTodo = useCallback(
    (todo: string) => {
      const index = todos.findIndex((t) => t.todo === todo);
      const existingTodo = todos[index];
      setTodos([
        ...todos.slice(0, index),
        {
          ...existingTodo,
          completed: !existingTodo.completed,
        },
        ...todos.slice(index + 1),
      ]);
    },
    [todos]
  );
  return (
    <ul className="w-full">
      {todos.map(({ todo, completed }) => (
        <li
          key={todo}
          className="flex items-center gap-2 w-full hover:bg-muted/50 active:bg-muted rounded-sm p-1"
        >
          <Checkbox
            id={`checkbox-${todo}`}
            checked={completed}
            onCheckedChange={() => toggleTodo(todo)}
          />
          <label
            htmlFor={`checkbox-${todo}`}
            className={cn("flex-1 cursor-pointer", {
              "text-muted-foreground line-through": completed,
            })}
          >
            {todo}
          </label>
        </li>
      ))}
    </ul>
  );
}
