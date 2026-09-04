import { useState } from "react";

function AcvmDisplay() {
  const [isOnHover, setIsOnHover] = useState(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row gap-10 object-cover">
        <div
          className="relative"
          onMouseEnter={() => setIsOnHover(1)}
          onMouseLeave={() => setIsOnHover(null)}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2F2023%2F11%2F03%2F12%2FnewFile.jpg&f=1&nofb=1&ipt=c9718efc525bf0fb415b42082d153e9209f11187072c99dd73d142704d6cb4d5"
            alt="FA Cup Trophy"
            className="w-114 shrink-0 rounded border-red-500 border-2"
          />
          <div
            className={`flex flex-col bg-red-500  p-4 transition duration-300 ease-in-out rounded w-full h-25 absolute bottom-0 ${
              isOnHover === 1
                ? "translate-y-0  opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white">The FA Cup</span>
              <span className="text-gray-300">
                2018/2019 - <a href="https://chelseafc.com">Chelsea FC</a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsOnHover(2)}
          onMouseLeave={() => setIsOnHover(null)}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.getfootballnewsgermany.com%2Fassets%2Fbayer-04-leverkusen-v-fc-st-pauli-dfb-cup-quarter-final-1-scaled.jpg&f=1&nofb=1&ipt=fff142d7c17658f327294cd439b6918c3f166d5679a38114fb701ae6e77e4c23"
            alt="DFB Cup Trophy"
            className="w-114 shrink-0 rounded border-red-500 border-2"
          />
          <div
            className={`flex flex-col bg-red-500 p-8 transition duration-300 ease-in-out rounded  w-full h-25 absolute bottom-0 ${
              isOnHover === 2
                ? "translate-y-0  opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-center items-center h-5">
              <span className="text-xl text-white">The DFB Pokal</span>
              <span className="text-gray-300">
                2015/2016 -{" "}
                <a href="https://www.bayer04.de">Bayern Munich FC</a>
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsOnHover(3)}
          onMouseLeave={() => setIsOnHover(null)}
        >
          <img
            src="src/assets/efl-championship-trophy-2341761766.jpg"
            alt="FA Cup Trophy"
            className="w-113 shrink-0 rounded border-red-500 border-2"
          />
          <div
            className={`flex flex-col bg-red-500 p-8 transition duration-300 ease-in-out rounded  w-full h-25 absolute bottom-0 ${
              isOnHover === 3
                ? "translate-y-0  opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-center items-center h-5">
              <span className="text-xl text-white">EFL Championship</span>
              <span className="text-gray-200">
                2013/2014 - <a href="https://www.lcfc.com">
                  Leicester City FC
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcvmDisplay;
