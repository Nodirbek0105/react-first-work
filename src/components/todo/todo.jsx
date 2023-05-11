import React, { useRef, useState } from 'react'

export default function todo() {
    const [todos, setTodos] = useState([])
    const [id, setId] = useState(0)
    const input = useRef(null)
    const name = useRef(null)


    function onSubmit(evt) {
        evt.preventDefault()
        setTodos([...todos, { name: name.current.value, isDone: false, id: id, rendered: true, modal: false, edited: false }])
        setId(id + 1)
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
    function clearDone() {
        let temp = todos.filter(todo => todo.isDone == false)
        setTodos(temp)
    }
    function openModal(id) {
        let temp = [...todos]
        let index = temp.findIndex(todo => +todo.id === +id)
        temp[index].modal = !temp[index].modal
        setTodos(temp)
    }
    function openModalEdit(id) {
        let temp = [...todos]
        let index = temp.findIndex(todo => +todo.id === +id)
        temp[index].edited = !temp[index].edited
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
    function editTodo(id, name) {
        let temp = [...todos]
        let index = temp.findIndex(todo => +todo.id === +id)
        temp[index].name = `${name}`
        temp[index].edited = false
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
                                    ref={name}
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
                                    className="btn btn-sm btn-danger"
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
                                    onClick={() => {
                                        clearDone()
                                        todoBox.classList.remove("todos")
                                    }}
                                >
                                    Clear done
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
                                                className="card-header d-flex justify-content-between flex-column"
                                            >
                                                <div className="parent-input d-flex" style={{ alignItems: "center" }}>
                                                    <label htmlFor="checked">Done  </label>
                                                    <input id='checked' onChange={() => inputChange(todo.id)} style={{ height: "20px", width: "20px" }} checked={todo.isDone} type="checkbox" name="" />
                                                </div>
                                                <span className={todo.isDone == true ? "line" : ""} >{`Your task:${todo.name}`}</span>
                                                <div className='w-100 d-flex align-items-center justify-content-around'>
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => openModalEdit(todo.id)}
                                                    >
                                                        edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => openModal(todo.id)}
                                                    >
                                                        delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div >
                                        <div className={`modal fade ${todo.modal == true ? "show d-block" : ""}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">You delete this todo, or no</h5>
                                                        <button type="button" className="btn-close" onClick={() => openModal(todo.id)} data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-success" onClick={() => openModal(todo.id)} data-bs-dismiss="modal">No, I don't</button>
                                                        <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)} >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                        <div className={`modal fade ${todo.edited == true ? "show d-block" : ""}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">You want edit this todo ?</h5>
                                                        <button type="button" className="btn-close" onClick={() => openModalEdit(todo.id)} data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form onSubmit={(evt) => {
                                                            editTodo(todo.id, input.current.value)
                                                            evt.preventDefault()
                                                        }}>
                                                            <input required="" type="text" ref={input} defaultValue={todo.name} onChange={(evt) => input.current.defaultValue = evt.target.value} />
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-success" onClick={() => openModalEdit(todo.id)} data-bs-dismiss="modal">No, I don't edit</button>
                                                        <button type="button" className="btn btn-danger" onClick={() => editTodo(todo.id, input.current.value)} >Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    </>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
