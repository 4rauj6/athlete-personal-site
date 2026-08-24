import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
