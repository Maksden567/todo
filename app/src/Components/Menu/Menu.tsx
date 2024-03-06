import React, { useState } from 'react'

import styles from './Menu.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/UseAppDispatch'
import { addTodo, changeIndex } from '../../store/counterSlice/todoItem'


const Menu = ()=>{

    const listLink =['All tasks','Completed','Current']
    const todos = useAppSelector(state=>state.todos)
    const activeIndex = useAppSelector(state=>state.todos.activeIndex)
   const dispatch = useAppDispatch()
    const handleClick = (index:number) =>{
       dispatch(changeIndex(index))
       
      
    }


    return ( 
        <>
          <nav className={styles.nav}>
             <ul className={styles.list}>
                {listLink.map((item,index)=>(
                    <li className={activeIndex!==index?styles.listItem:styles.listItemActive} onClick={()=>{handleClick(index)}}>{item}</li>
                ))}
                
               
             </ul>
             <div className={styles.informationBlock}>
                <div className={styles.informationAllTasks}>
                    Created tasks
                    <span>{todos.todos.length}</span>
                </div>
                <div className={styles.informationCompletedTasks}>
                    Completed
                    <span>{todos.todos.filter(item=>item.isCompleted==true).length} from {todos.todos.length}</span>
                </div>
             </div>
          </nav>
       
        </>
    )
}

export default Menu