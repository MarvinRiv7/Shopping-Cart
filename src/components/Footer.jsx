import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
   const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>React Shop whitd react ⚛️ － <span>@marvinrivas7</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}