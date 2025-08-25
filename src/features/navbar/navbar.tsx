import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>main</Link>
        <br />
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/contacts'}>contacts</Link>
    </div>
  )
}
