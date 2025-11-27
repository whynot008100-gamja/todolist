"use client";

import { useState, FormEvent } from "react";
import { Plus } from "lucide-react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="새로운 할 일을 입력하세요..."
          className="flex-1 px-6 py-4 rounded-xl border-2 border-teal-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 text-lg transition-all duration-200 bg-white"
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
        >
          <Plus size={20} />
          추가
        </button>
      </div>
    </form>
  );
}

