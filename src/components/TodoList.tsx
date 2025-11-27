"use client";

import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { ListTodo, CheckCircle2 } from "lucide-react";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // 로컬 스토리지에서 todos 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        const parsed = JSON.parse(savedTodos);
        setTodos(
          parsed.map((todo: Todo) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
          }))
        );
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    }
  }, []);

  // todos 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.isCompleted)
      : filter === "completed"
      ? todos.filter((todo) => todo.isCompleted)
      : todos;

  const activeCount = todos.filter((todo) => !todo.isCompleted).length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="max-w-2xl mx-auto">
      {/* 헤더 */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-rose-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
          할 일 목록
        </h1>
        <p className="text-gray-600 text-lg">
          오늘의 할 일을 관리해보세요
        </p>
      </div>

      {/* 입력 폼 */}
      <TodoForm onAdd={handleAdd} />

      {/* 통계 및 필터 */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2 text-teal-600">
            <ListTodo size={18} />
            <span className="font-medium">전체: {todos.length}</span>
          </div>
          <div className="flex items-center gap-2 text-orange-600">
            <span className="font-medium">진행중: {activeCount}</span>
          </div>
          <div className="flex items-center gap-2 text-rose-600">
            <CheckCircle2 size={18} />
            <span className="font-medium">완료: {completedCount}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === "all"
                ? "bg-teal-500 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-teal-50 border border-teal-200"
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === "active"
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-orange-50 border border-orange-200"
            }`}
          >
            진행중
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === "completed"
                ? "bg-rose-500 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-rose-50 border border-rose-200"
            }`}
          >
            완료
          </button>
        </div>
      </div>

      {/* 할 일 목록 */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-teal-200">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg">
              {filter === "all"
                ? "할 일이 없습니다. 새로운 할 일을 추가해보세요!"
                : filter === "active"
                ? "진행중인 할 일이 없습니다."
                : "완료된 할 일이 없습니다."}
            </p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

