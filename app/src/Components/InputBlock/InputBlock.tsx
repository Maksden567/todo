import React, { useState } from 'react'

import styles from './InputBlock.module.scss'
import { addTodo } from '../../store/counterSlice/todoItem'
import { useAppDispatch, useAppSelector } from '../../hooks/UseAppDispatch'


const InputBlock = ()=>{


    const [text,setText] = useState('')
    const todos = useAppSelector(state=>state.todos)
    const dispatch = useAppDispatch()
    const [isError,setIsError] = useState<boolean|null>(null)
    const handleClick = () =>{
        if(text.length<10){
            setIsError(true)
           
        }
        else{
            dispatch(addTodo({id:todos.todos.length,isCompleted:false,text:text}))
            setIsError(false)
            setText('')
        }
        
    }
   


    return ( 
        <>
          <div className={styles.InputBlock}>
            <div className={styles.Wrapper}>   
                 <input className={styles.input} type="text" placeholder='Add new task' value={text} onChange={(e)=>setText(e.target.value)} />
               <button className={styles.button} onClick={handleClick}>Add up</button>

            </div>
           
              {isError!=null && isError?<div className={styles.error} >It is wrong</div>:null}
          </div>
        
        </>
    )
}

export default InputBlock

function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
