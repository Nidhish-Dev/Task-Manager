import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleCompletion }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleCompletion={onToggleCompletion}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
