import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Contact = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div>
        <p>
            O tema é: {theme}
        </p>
    </div>
  )
}

export default Contact