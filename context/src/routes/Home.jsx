
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>Página Inicial</h1>
        <p>O tema atual é : {theme}</p>
        <button onClick={() => toggleTheme()} >Alterar</button>
    </div>
  )
}

export default Home