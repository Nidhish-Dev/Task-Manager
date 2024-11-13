import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority,
    };

    onAddTask(newTask);
    setTitle('');
    setPriority('low');
  };

  return (
    <form className='flex gap-5' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className='addtaskbtn' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
