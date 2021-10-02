import React from "react";

const Tasks = () => {
  return (
    <>
      {Tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
export default Tasks;
