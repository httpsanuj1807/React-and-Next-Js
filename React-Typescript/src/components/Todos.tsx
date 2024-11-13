import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    return(
        <ul>
            {todosCtx.items.map((item) => <TodoItem onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text} />)}
        </ul>
    )

} 

export default Todos;