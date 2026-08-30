import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#212121]">
      <ul>
        <li className="text-blue-500">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
