"use client"
import {useState} from "react";
import Count from "./count";
import Toggle from "./toggle";
import Theme from './theme';

export default function Home() {

const [name, setName] = useState("Sahib");

const changeName = () => {
 setName("Sahib Kaur");
}


  return (
    <div>
      <Count></Count>
      <Toggle></Toggle>
      <Theme></Theme>
      {/* <p>{name}</p>
      <button onClick={changeName}>Click Button</button> */}
    </div>
  )
}
