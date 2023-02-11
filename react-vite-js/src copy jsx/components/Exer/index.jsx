import React from "react";

const items = [
  {name:'rhs',sex:'男',age:24,id:1},
  {name:'wgh',sex:'女',age:24,id:2}
]

export default function Exer(){

  const personList = items.map(person => <li
  key={person.id}
  style={{color: person.sex === "男" ? 'blue' : 'red'}}
  >
    {person.name}
  </li>)


  return <ul>{personList}</ul>
}