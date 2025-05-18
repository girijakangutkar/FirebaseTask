import React, { useState, useEffect } from "react";
import { firestore } from "../firebase-config";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const snapshot = await firestore.collection("tasks").get();
        setTasks(snapshot.docs.map((doc) => doc.data()));
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => <li key={index}>{task.name}</li>)
        ) : (
          <p>No tasks found</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
