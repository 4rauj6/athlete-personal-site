import CarroselLogic from "../functions/Carrosel";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Achievements from "./Achievements";
import AcvmDisplay from "../functions/aacvmDisplay";
import { useState } from "react";

function Homepage() {
  const slides = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F20%2FCollege_soccer_yates_iu_v_tulsa_2004.jpg&f=1&nofb=1&ipt=d29ef70e794fbf9328f8ad14a568cfc06837b71bcf344ad967b8651eed7eb6c3",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclamorworld.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fshoesfootball-1350775_1920.jpg&f=1&nofb=1&ipt=63d6d7c1fd884987228bc6a420a58c79c9f7a4972a7a1928087e153b19b3c48b",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.getfootballnewsgermany.com%2Fassets%2Fbayer-04-leverkusen-v-fc-st-pauli-dfb-cup-quarter-final-1-scaled.jpg&f=1&nofb=1&ipt=fff142d7c17658f327294cd439b6918c3f166d5679a38114fb701ae6e77e4c23",
    "src/assets/efl-championship-trophy-2341761766.jpg",
  ];

  const [isOnHover, setIsOnHover] = useState(null);

  return (
    <div className="bg-gray-50">
      <section className="text-blue-500 ">
        <div>
          <h1>John Player</h1>
          <p>
            Being a winner always made part of his path. Every lose, every
            failure, every obstacle it was necessary to create what he&apos;s
            are today
          </p>
          <button className="bg-blue-500 text-white p-1  transition ease-in-out duration-500 rounded cursor-pointer hover:bg-blue-700 hover:text-white">
            Know more
          </button>
        </div>

        <div>
          <img src="" alt="Athlete's photo" />
        </div>
      </section>

      <section>
        <div className="p-15">
          <span className="text-blue-500">Discover more about me here</span>
          <h1 className="text-blue-500 text-5xl font-kaput">Welcome!</h1>
        </div>
        <div className="flex flex-row gap-10 object-cover justify-center items-center">
          <div>
            <Link to="/biografy">
              <div
                className="relative"
                onMouseEnter={() => setIsOnHover(1)}
                onMouseLeave={() => setIsOnHover(null)}
              >
                <img
                  src="src/assets/back-view-of-a-latin-american-soccer-player-holding-a-soccer-ball-while-walking-at-the-soccer-573744466.jpg"
                  alt="History page img"
                  className="w-105 rounded border-blue-500 border-2"
                />

                <div
                  className={`flex flex-col bg-blue-500 rounded p-4 transition duration-300 ease-in-out w-full h-30 absolute bottom-0 ${isOnHover === 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <div className="text-white">
                    <span className="text-2xl">
                      <strong>Biografy</strong>
                    </span>
                    <p>Knowing deeply inside of my life</p>
                    <p>Click to know more about it</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <div
              className="relative"
              onMouseEnter={() => setIsOnHover(2)}
              onMouseLeave={() => setIsOnHover(null)}
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe6.365dm.de%2F18%2F08%2F1600x900%2Fskysport_de-dfb-pokal-trophe_4391592.jpg%3F20180816140458&f=1&nofb=1&ipt=40e1ae8186bc2dd1be6299be34a1956652adf0608b674f4dc1e9b6dc8e0d035f"
                alt="History page img"
                className="w-115 rounded border-blue-500 border-2"
              />
              <div
                className={`flex flex-col bg-blue-500 rounded p-4 transition duration-300 ease-in-out w-full h-30 absolute bottom-0 ${isOnHover === 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <div className="text-white ">
                  <span className="text-2xl">
                    <strong>Titles</strong>
                  </span>
                  <p>Knowing deeply inside of Athlete&apos;s titles</p>
                  <p>Click to know more about it</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative"
              onMouseEnter={() => setIsOnHover(3)}
              onMouseLeave={() => setIsOnHover(null)}
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.awbclaw.co.uk%2Fwp-content%2Fuploads%2F2023%2F04%2FCharity.jpg&f=1&nofb=1&ipt=751bdaa0bee051019114dfde1e5c6dc8fab500fcdb2c8ad6efe6b41d5895db04"
                alt="History page img"
                className="w-105 rounded border-blue-500 border-2"
              />
              <div
                className={`pointer-events-none flex flex-col bg-blue-500 rounded p-4 transition duration-300 ease-in-out w-full h-30 absolute bottom-0 ${isOnHover === 3 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <div className="text-white">
                  <span className="text-2xl">
                    <strong>Charity</strong>
                  </span>
                  <p>Knowing deeply inside of my charities collabs</p>
                  <p>
                    <p>Click to know more about it</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500  h-270 mt-30">
        <div className="flex self-start p-15 flex-col">
          <span className="text-white mt-10">Medias - the best moments</span>
          <h1 className="text-5xl font-kaput text-white">Gallery</h1>
        </div>

        <div className="flex justify-center">
          <CarroselLogic slides={slides} />
        </div>
      </section>

      <section className="bg-gray-50">
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

      <section className="">
        <div>
          <div className="flex self-start p-15 flex-col">
            <span>Social medias - stay connected </span>
            <h1 className="text-5xl font-kaput">Get linked</h1>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className=" flex flex-row justify-center items-center gap-5 text-7xl ">
              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
                <span>
                  <FaInstagram />
                </span>
              </div>

              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
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
