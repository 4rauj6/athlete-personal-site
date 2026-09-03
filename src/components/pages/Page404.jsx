import { Link } from "react-router-dom";
import Homepage from "./Homepage";

function Page404() {
  return (
    <div className="flex flex-col justify-center items-center h-160">
      <h1 className="text-6xl">Error 404</h1>
      <span className="text-xl leading-10">Something went wrong!</span>
      <span className="text-lg">
        Please, reconsider go back to the{" "}
        <Link to="/" element={<Homepage />} className="text-blue-700">
          homepage
        </Link>
      </span>
    </div>
  );
}

export default Page404;
