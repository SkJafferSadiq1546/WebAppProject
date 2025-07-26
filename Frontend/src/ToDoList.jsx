import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    // Load saved tasks from localStorage on first render
    const saved = localStorage.getItem('my-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    console.log("Saving tasks to localStorage:", tasks);
    localStorage.setItem('my-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task.trim()]);
    setTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((t, i) => (
          <li key={i} style={styles.listItem}>
            <span>{t}</span>
            <button onClick={() => removeTask(i)} style={styles.removeButton}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: '60vw',
    maxWidth: '700px',
    margin: 'auto',
    marginTop: '5vh',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    gap: '0.7rem',
    marginBottom: '2rem',
  },
  input: {
    flex: 1,
    padding: '0.9rem 1rem',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: '1.8px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  addButton: {
    padding: '0 1.8rem',
    fontSize: '1.1rem',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    maxHeight: '50vh',
    overflowY: 'auto',
  },
  listItem: {
    backgroundColor: 'white',
    padding: '1rem 1.2rem',
    borderRadius: '8px',
    marginBottom: '0.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    fontSize: '1.15rem',
    color: '#222',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    padding: '0.4rem 0.9rem',
    borderRadius: '6px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  },
};
