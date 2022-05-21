import React from "react";
import { getAllTasks } from "../pages/tasks";

export default function Form() {
  return (
    <div>
      <p>Meu form</p>
      <input placeholder="Tarefa"/>
      <button>Add</button>

      { console.log(getAllTasks()) }
    </div>
  )
}