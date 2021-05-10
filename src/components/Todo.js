import React from "react";
import firebase from "../utils/firebase";

export default function Todo({ todo }) {
  const deleteHandle = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const updateHandle = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div>
      <h2 className={todo.complete ? "complete" : ""}>{todo.title}</h2>
      <button className="delete-btn" onClick={deleteHandle}>
        Delete
      </button>
      <button className="complete-btn" onClick={updateHandle}>
        Complete
      </button>
    </div>
  );
}
