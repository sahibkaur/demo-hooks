"use client"
import {useState} from "react"
// import {use} from "react"

export default function Home() {

const [name, setName] = useState("Sahib");
const [age, setAge] = useState(26);

const changeName = () => {
 setName("Sahib Kaur");
}


  return (
    <div>
      <h2>useState</h2>
      <h3>React hook</h3>
      <br/>
      <p>{name} is {age}</p>
      <button onClick={changeName}>Click Button</button>
    </div>
  )
}
