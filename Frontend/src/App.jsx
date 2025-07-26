import { useState } from 'react'
import React from 'react';
import TodoList from './ToDoList';
import LightDarkToggle from './LightDarkToggle';
import './App.css';  // <-- Import your CSS here

export default function App() {
  return (
    <>
      <LightDarkToggle />

      <div id="app-container">
        <header>
          <h1>To-Do List</h1>
          <p>Stay organized and never forget a task!</p>
        </header>

        <TodoList />
      </div>
    </>
  );
}
