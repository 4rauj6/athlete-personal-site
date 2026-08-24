import CarroselLogic from "../functions/Carrosel";

function Homepage() {
  const slides = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.hippopx.com%2Fphotos%2F32%2F522%2F400%2Fauto-racing-nascar-car-sport-thumb.jpg&f=1&nofb=1&ipt=520b453658ab3fe7c9bc1891dc2043863e6e5858b65ad8b3cb873157a2c63328",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.hippopx.com%2Fphotos%2F174%2F473%2F108%2Fauto-racing-nascar-car-sport-thumb.jpg&f=1&nofb=1&ipt=d389c9e5c210f7151925b663b0546335564c3d64b1cc0b3e95f855fe0ca35528",
  ];

  return (
    <>
      <section>
        <div>
          <h1>Athlete's name</h1>
          <p>
            Being a winner always made part of his path. Every lose, every
            failure, every obstacle it was necessary to create what he's are
            today
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
            <img src="src/assets/react.svg" alt="History page img" />
            <span>
              <strong>Biografy</strong>
            </span>
            <p>Knowing deeply inside of Athlete's biografy</p>
          </div>

          <div>
            <img src="" alt="History page img" />
            <span>
              <strong>Biografy</strong>
            </span>
            <p>Knowing deeply inside of Athlete's biografy</p>
          </div>

          <div>
            <img src="" alt="History page img" />
            <span>
              <strong>Biografy</strong>
            </span>
            <p>Knowing deeply inside of Athlete's biografy</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center ">
          <CarroselLogic slides={slides} />
        </div>
      </section>
    </>
  );
}

export default Homepage;
