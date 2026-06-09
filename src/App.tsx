import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div
      style={{
        padding: "10px",
        font: "Arial, sans-serif",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h2>Завдання 1. Список завдань</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть нове завдання..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Додати
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              marginBottom: "8px",
              textDecorationLine: task.completed ? "line-through" : "none",
              cursor: "pointer",
              borderRadius: "4px",
              border: "1px solid #e2e9f0",
              userSelect: "none",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
