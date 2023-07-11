import React, { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

export default function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([{ todo: "Wait a minute!", id: 0 }, { todo: "Who are you?", id: 1 }]);
    const [taskId, setTaskId] = useState(2);

    const taskExists = (todos, task) => {
        return todos.some(item => item.todo === task);
    };

    const createTodo = (event) => {
        event.preventDefault();

        if (task.length) {
            if (taskExists(todos, task)) return;
            setTodos(prevTodos => [...prevTodos, { todo: task, id: taskId }]);
            setTaskId(prevId => prevId + 1);
            setTask("");
        }
    };

    const deleteTodo = (itemId) => {
        setTodos(prevTodos => prevTodos.filter(item => item.id !== itemId));
    };

    return (
        <main>
            <div className="container" id="todoHeader">
                <h1>Todo's</h1>

                {/* js approach */}
                {/* <input
            // onKeyDown={(e) => {
            //     if (e.keyCode === 13 || e.key === 'Enter') {
            //         createTodo()
            //     }
            // }}
            type="text"
            value={task}
            onChange={event => setTask(event.target.value)}
            />
            <button onClick={createTodo}>Create Todo</button> */}

                {/* classic HTML approach */}

                <form onSubmit={createTodo}>
                    <input
                        type="text"
                        value={task}
                        placeholder="Add your task..."
                        onChange={event => setTask(event.target.value)}
                    />
                    <button
                        type="submit"
                        id="btn"><AiOutlinePlus size={13} color="#b4345c" /></button>
                </form>
            </div>

            {todos[0] && <div className="container">
                <ul>
                    {todos.map((item) => (
                        <div key={item.id}>
                            <li className="task">{item.todo}
                                <button id="btn" onClick={() => deleteTodo(item.id)}>
                                    <AiOutlineDelete size={13} color="#b4345c" />
                                </button>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>}
        </main>
    );
}
