import { useState } from "react";

const TodoApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();
        setTodoList((prev) => [...prev, inputValue]);
        setInputValue("");
    };

    const deleteHandler = (task) => {
        const removeTask = todoList.filter((list) => list !== task);
        setTodoList(removeTask);
    };

    return (
        <>
            <div className="d-flex bg-info justify-content-center align-items-center vh-100">
                <div>
                    <form className="d-flex" onSubmit={formHandler}>
                        <input
                            type="text"
                            value={inputValue}
                            className="form-control"
                            placeholder="Enter your task..."
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="btn btn-success ms-2 px-3">
                            Add
                        </button>
                    </form>
                    <div className="mt-2">
                        {todoList.map((task, index) => (
                            <div key={index} className="d-flex justify-content-between py-2">
                                <h3>{task}</h3>
                                <button onClick={() => deleteHandler(task)} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoApp;

