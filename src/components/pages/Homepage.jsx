import CarroselLogic from "../functions/Carrosel";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import TitlesDisplay from "../functions/TitleDisplay";

function Homepage() {
  const slides = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.hippopx.com%2Fphotos%2F32%2F522%2F400%2Fauto-racing-nascar-car-sport-thumb.jpg&f=1&nofb=1&ipt=520b453658ab3fe7c9bc1891dc2043863e6e5858b65ad8b3cb873157a2c63328",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.hippopx.com%2Fphotos%2F174%2F473%2F108%2Fauto-racing-nascar-car-sport-thumb.jpg&f=1&nofb=1&ipt=d389c9e5c210f7151925b663b0546335564c3d64b1cc0b3e95f855fe0ca35528",
  ];

  return (
    <>
      <section>
        <div>
          <h1>Athlete&apos;s name</h1>
          <p>
            Being a winner always made part of his path. Every lose, every
            failure, every obstacle it was necessary to create what he&apos;s
            are today
          </p>
          <button>Know more</button>
        </div>

        <div>
          <img src="" alt="Athlete's photo" />
        </div>
      </section>

      <section>
        <h1>Knowing more...</h1>

        <div>
          <div>
            <Link to="/biografy">
              <img src="src/assets/react.svg" alt="History page img" />
              <span>
                <strong>Biografy</strong>
              </span>
              <p>Knowing deeply inside of Athlete&apos;s biografy</p>
            </Link>
          </div>

          <div>
            <img src="" alt="History page img" />
            <span>
              <strong>Titles</strong>
            </span>
            <p></p>
          </div>

          <div>
            <img src="" alt="History page img" />
            <span>
              <strong>Biografy</strong>
            </span>
            <p>Knowing deeply inside of Athlete&apos;s biografy</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex self-start p-15 flex-col">
          <span>Medias - the best moments</span>
          <h1 className="text-4xl">Gallery</h1>
        </div>

        <div className="flex justify-center ">
          <CarroselLogic slides={slides} />
        </div>
      </section>

      <section>
        <div>
          <div className="flex self-start p-15 flex-col">
            <span>
              Trophies and title - What made part of a succesfull career{" "}
            </span>
            <h1 className="text-4xl">Achievements</h1>
          </div>

          <div>
            <div>
              <TitlesDisplay />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex self-start p-15 flex-col">
            <span>Social medias - stay connected </span>
            <h1 className="text-4xl">Get linked</h1>
          </div>

          <div className="flex justify-center items-center gap-8 text-6xl ">
            <div className="cursor-pointer hover:text-blue-500 ease-in-out duration-300">
              <span>
                <FaInstagram />
              </span>
            </div>

            <div className="cursor-pointer hover:text-blue-500 ease-in-out duration-300">
              <span>
                <FaFacebookSquare />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
