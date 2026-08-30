import CarroselLogic from "../functions/Carrosel";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Achievements from "./Achievements";
import AcvmDisplay from "../functions/aacvmDisplay";

function Homepage() {
  const slides = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F20%2FCollege_soccer_yates_iu_v_tulsa_2004.jpg&f=1&nofb=1&ipt=d29ef70e794fbf9328f8ad14a568cfc06837b71bcf344ad967b8651eed7eb6c3",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclamorworld.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fshoesfootball-1350775_1920.jpg&f=1&nofb=1&ipt=63d6d7c1fd884987228bc6a420a58c79c9f7a4972a7a1928087e153b19b3c48b",
  ];

  return (
    <div className="">
      <section className="text-blue-500 ">
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

      <section className="text-blue-500">
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
          <h1 className="text-5xl font-kaput">Gallery</h1>
        </div>

        <div className="flex justify-center">
          <CarroselLogic slides={slides} />
        </div>
      </section>

      <section>
        <div>
          <div className="flex self-start p-15 flex-col">
            <span>Top achievements</span>
            <h1 className="text-5xl font-kaput mb-20">Titles</h1>
            <div>
              <AcvmDisplay />
            </div>
            <div className="flex flex-row justify-center items-center mt-20">
              <span>
                <Link to="/achievements" element={Achievements}>
                  See everything
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex self-start p-15 flex-col">
            <span>Social medias - stay connected </span>
            <h1 className="text-5xl font-kaput">Get linked</h1>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className=" flex flex-row justify-center items-center gap-5 text-7xl ">
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
        </div>
      </section>
    </div>
  );
}

export default Homepage;
