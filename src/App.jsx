import { useState } from "react"
import {ItemListContainer} from "./components/ItemListContainer"
import {Header} from "./components/header/Header"
import "./css/main.css"

function App() {

  const numero = "🛒 1"

  return (
    <>
    <Header numero = {numero} />
    <ItemListContainer/>
    </>
  )
}

export default App
