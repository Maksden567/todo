import React, { FC } from 'react'
import deleteImage from '../../assets/trash.png'
import styles from './TodoItem.module.scss'
import { ItodoItem, copmleteTodo, deleteTodoItem } from '../../store/counterSlice/todoItem'
import { useAppDispatch } from '../../hooks/UseAppDispatch'

const TodoItem:FC<ItodoItem> = ({id,isCompleted,text})=>{
    const dispacth = useAppDispatch()

    const handleClick = () =>{
        dispacth(copmleteTodo({id,isComplete:!isCompleted}))
    }

    const deleteTodo = () =>{
        dispacth(deleteTodoItem(id))
    }


    return ( 
        <>
          <div className={styles.todoItem}>
               <input className={styles.input} id={`input${id}`} type="checkBox" checked={isCompleted} onChange={handleClick}/>
               <label htmlFor={`input${id}`} className={styles.inputLabel}>{text}</label>
                <img src={deleteImage} className={styles.image} onClick={deleteTodo} alt="iamge" />
          </div>
       
        </>
    )
}

export default TodoItem