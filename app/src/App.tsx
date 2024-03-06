import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import TodoItem from './Components/TodoItem/TodoItem'
import { useAppSelector } from './hooks/UseAppDispatch'
import { ItodoItem } from './store/counterSlice/todoItem'


function App() {

  let todos = useAppSelector(state=>state.todos)
  const activeIndex = useAppSelector(state=>state.todos.activeIndex)
  const [todosItems,setTodos]  = useState<ItodoItem[]>(todos.todos) 
  
  useEffect(()=>{

    switch (activeIndex) {
  
      case 0:
        console.log(activeIndex)
        setTodos(todos.todos)
        break;
      case 1:
        console.log(activeIndex)
       setTodos(todos.todos.filter(item=>item.isCompleted!=false))
        break;
        case 2:
          console.log(activeIndex)
          setTodos(todos.todos.filter(item=>item.isCompleted!=true))
          break;
      default:
        break;
    }

  },[activeIndex,todos])

  



  return (
    <>
      <div className='mainBlock'>
          <Header/>
          <Menu/>
          <div className='todoItems'>


          {todosItems?.map((item)=>(

            <TodoItem id={item.id} isCompleted={item.isCompleted} text={item.text}/>

          ))}
         
          
          </div>
         
      </div>
   
    </>
  )
}

export default App
