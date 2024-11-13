
import './App.css'

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('priority'); // Default sorting by priority

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    if (tasks.length > 0) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
      }
    } else {
      // Clear tasks from localStorage if no tasks exist
      localStorage.removeItem('tasks');
    }
  }, [tasks]);

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);  // Update state
    // Update localStorage with the new task list
    try {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving updated tasks to localStorage:', error);
    }
  };

  const handleToggleCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);  // Update state
    // Update localStorage with the new task list
    try {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving updated tasks to localStorage:', error);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort tasks based on selected criteria
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'priority') {
      // Adjusting the priority order: high > medium > low
      const priorityOrder = ['high', 'medium', 'low']; // Priority array for sorting
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    } else if (sortBy === 'completed') {
      // Sorting by completed: false (incomplete) should come first
      // False (0) comes before True (1)
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0; // No sorting
  });

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="priority">Sort by Priority</option>
        <option value="completed">Sort by Completed</option>
        <option value="title">Sort by Title</option>
      </select>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={sortedTasks}
        onDelete={handleDeleteTask}
        onToggleCompletion={handleToggleCompletion}
      />
    </div>
  );
};

export default App;
