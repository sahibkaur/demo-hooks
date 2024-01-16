"use client"
import {useState} from "react"
import Toggle from "./count"
// import {use} from "react"

export default function Home() {

const [name, setName] = useState("Sahib");

const changeName = () => {
 setName("Sahib Kaur");
}


  return (
    <div>
      <Toggle></Toggle>
      <p>{name}</p>
      <button onClick={changeName}>Click Button</button>
    </div>
  )
}
