"use client";

import { Check, X } from "lucide-react";

interface TodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  id,
  title,
  isCompleted,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div
      className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
        isCompleted
          ? "bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200"
          : "bg-white border border-teal-100 hover:border-teal-300 shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          isCompleted
            ? "bg-rose-500 border-rose-500 text-white"
            : "border-teal-400 hover:border-teal-500 hover:bg-teal-50"
        }`}
        aria-label={isCompleted ? "완료 취소" : "완료"}
      >
        {isCompleted && <Check size={16} />}
      </button>

      <span
        className={`flex-1 text-lg transition-all duration-200 ${
          isCompleted
            ? "text-rose-600 line-through opacity-70"
            : "text-gray-800"
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onDelete(id)}
        className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="삭제"
      >
        <X size={16} />
      </button>
    </div>
  );
}

