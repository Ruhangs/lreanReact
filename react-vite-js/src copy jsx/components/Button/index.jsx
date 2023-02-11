import React from "react";

export default function Button({count, onClick}){
  return <button onClick={onClick}>count is {count}</button>
}