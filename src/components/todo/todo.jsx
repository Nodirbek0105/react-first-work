import React, { useState } from 'react'

export default function todo() {
    const [todos, setTodos] = useState([])
    const [todoName, setTodoName] = useState("")

    function onSubmit(evt) {
        evt.preventDefault()
        console.log(todos.length, todoName);
        setTodos([...todos, { name: todoName, isDone: false, id: todos.length + 1, rendered: true }])
        console.log(todos);
    }
    function inputChange(id) {
        let temp = [...todos]
        let index = temp.findIndex(todo => +todo.id == +id)
        if (typeof index !== "number") return
        temp[index].isDone = !temp[index].isDone
        setTodos(temp)
    }
    function deleteTodo(id) {
        let temp = todos.filter(todo => +todo.id !== +id)
        setTodos(temp)
    }
    let todoBox = document.querySelector("[data-todos]")
    function all() {
        todoBox.classList.remove("todos")
        let temp = [...todos]
        temp.forEach(todo => {
            todo.rendered = true
        })
        setTodos(temp)
    }
    function done() {
        todoBox.classList.add("todos")
        let temp = [...todos]
        temp.forEach(todo => {
            if (todo.isDone == true) {
                todo.rendered = true
            }
            if (todo.isDone == false) {
                todo.rendered = false
            }
        })
        setTodos(temp)
    }
    function notDone() {
        todoBox.classList.add("todos")
        let temp = [...todos]
        temp.forEach(todo => {
            if (todo.isDone == false) {
                todo.rendered = true
            }
            if (todo.isDone == true) {
                todo.rendered = false
            }
        })
        setTodos(temp)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Todo</div>
                            <form onSubmit={onSubmit} className="card-body">
                                <label htmlFor="task" className="form-label">Your task</label>
                                <input
                                    value={todoName}
                                    onChange={evt => setTodoName(evt.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="task"
                                    placeholder="Enter Your task"
                                />
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Add Todo
                                </button>
                            </form>
                            <div className="filter d-flex justify-content-around align-items-center">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    onClick={() => {
                                        setTodos([])
                                        todoBox.classList.remove("todos")
                                    }}
                                >
                                    Clear All
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    onClick={() => all()}
                                >
                                    All todos
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    onClick={() => done(todo.id)}
                                >
                                    Qilinganlari
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    onClick={() => notDone(todo.id)}
                                >
                                    Qilinmaganlari
                                </button>

                            </div>
                            <div data-todos className="">
                                {...todos.map((todo) => {
                                    if (todo.rendered !== true) return
                                    return <>
                                        <div key={todo.id} className="card mt-4">
                                            <div
                                                className="card-header d-flex justify-content-between"
                                            >
                                                <div className="parent-input d-flex" style={{alignItems:"start"}}>
                                                <input onChange={() => inputChange(todo.id)} checked={todo.isDone} type="checkbox" name="" />
                                                </div>
                                                <span className={todo.isDone == true ? "line" : "" } style={{maxWidth:"85%"}}>{todo.name}</span>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => deleteTodo(todo.id)}
                                                    >
                                                        delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    // <TodoItem todo={todo.name} isDone={todo.isDone}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
