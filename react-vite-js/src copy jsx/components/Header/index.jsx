import React from "react";
import styles from './index.module.scss'

const user = {
  name:'rhs',
  age:24,
}

export function Header(){

  return (
    <>
      {/* <div className={styles.header}>Header</div> */}
      <h1 >{user.name}</h1>
      <h2>{user.age}</h2>
    </>
    

  )
}