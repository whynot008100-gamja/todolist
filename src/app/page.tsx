import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <TodoList />
      </div>
    </div>
  );
}
