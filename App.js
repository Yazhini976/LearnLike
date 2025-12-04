import React, { useEffect, useState } from 'react';
import api from './api';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    try {
      const res = await api.post('/tasks', { title: title.trim() });
      setTasks(prev => [res.data, ...prev]);
      setTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (task) => {
    try {
      const res = await api.put(`/tasks/${task._id}`, { completed: !task.completed });
      setTasks(prev => prev.map(t => t._id === res.data._id ? res.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">✔ Yazh's To-Do</h1>

        <div className="input-row">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        {loading ? <p className="muted">Loading...</p> : null}

        <ul className="task-list">
          {tasks.length === 0 && !loading && <li className="muted">No tasks yet — add one!</li>}
          {tasks.map(task => (
            <li key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div onClick={() => toggleComplete(task)} className="task-left">
                <input type="checkbox" checked={task.completed} readOnly />
                <span>{task.title}</span>
              </div>
              <div className="task-right">
                <button className="del" onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="muted small">You can run backend at port 5000 and frontend at 3000.</p>
      </div>
    </div>
  );
}

export default App;
