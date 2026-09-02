function Biografy() {
  return (
    <div className="bg-gray-50">
      <section>
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="self-start mt-30">
            <h1>
              This is... <span className="font-kaput">John Player!</span>
            </h1>
            <span>
              A Deep inside view of the biografy of his life. <br />
              The firsts steps. The losses. The victories. The legacy
            </span>
          </div>
          <div>
            <img
              src="src/assets/Footballer-Player-No-Background-1983647935.png"
              alt="Player Photo"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="p-15">
          <div className="flex flex-col">
            <span>Stats and informations</span>
            <span className="text-5xl font-kaput">
              <strong>Profile</strong>
            </span>
          </div>

          <div className="flex flex-col">
            <span>
              <strong>Name:</strong> John Player
            </span>
            <span>
              <strong>Birth place:</strong> Leicester - UK
            </span>
            <span>
              <strong>Birth day:</strong> October 27th 1989
            </span>
            <span>
              <strong>Height:</strong> 1,77
            </span>
            <span>
              <strong>Currently team:</strong> retired
            </span>
            <span>
              <strong>First team:</strong> Meltdown FC
            </span>
            <span>
              <strong>Latest team:</strong> Kashima Antlers
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Biografy;
