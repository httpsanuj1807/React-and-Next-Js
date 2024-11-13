import { useRef } from "react";
import { TodosContext } from "../store/todos-context";
import { useContext } from "react";


const NewTodo: React.FC= () => {

    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent){

        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim() === ''){
            return;
        }

        todosCtx.addTodo(enteredText);

    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    )

};




export default NewTodo;