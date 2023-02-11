import React,{useState} from "react";
import style from "./index.module.scss";

export default function Square({value , onSquareClick }){
  // const [value,setValue] = useState(null)

  return <button className={style.square} onClick={onSquareClick}>{value}</button>
}