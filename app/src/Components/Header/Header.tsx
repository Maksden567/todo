
import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './Header.module.scss'
import InputBlock from '../InputBlock/InputBlock'

const Header = ()=>{
    return ( 
        <>
          <header className={styles.header}>
                <div className={styles.headerName}>to<span>do</span></div>
                <InputBlock/>
          </header>
       
        </>
    )
}

export default Header
