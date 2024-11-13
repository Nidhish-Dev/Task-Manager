import React from 'react';

interface TaskProps {
  task: TaskInterface;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

// Updated interface name to avoid conflict
interface TaskInterface {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
        />
        <span>{task.title} ({task.priority})</span>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
