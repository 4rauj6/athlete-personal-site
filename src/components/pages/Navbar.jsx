import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#212121] sticky top-0 z-10">
      <ul>
        <li className="text-blue-500">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
