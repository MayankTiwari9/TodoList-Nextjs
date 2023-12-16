import TodoForm from "@/Components/Form/TodoForm"
import { useRouter } from "next/router"

const NewTodo = () => {
    const router = useRouter();

    const addTodoHandler = async (enteredTodoData) => {
        const response = await fetch('/api/newtodo', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json();

        router.push('/');
    }

  return (
    <div>
      <TodoForm onAddTodo={addTodoHandler}/>
    </div>
  )
}

export default NewTodo
