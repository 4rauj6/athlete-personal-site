import { useState } from "react";

export default function TitlesDisplay() {
  const titlePhotos = [
    {
      id: "Hungarian GP",
      image:
        "https://i.pinimg.com/736x/b5/d3/75/b5d3750a53bf1e18b1567af8b6481408.jpg",
      header: "1st in Hungarian GP",
      description: "The hungarian GP win was an outstanding victory.",
    },
    {
      id: "Silverstone GP",
      image:
        "https://i.pinimg.com/1200x/d8/c4/6b/d8c46b1ec43516dcbf98d804b6c407ab.jpg",
      header: "1st in Hungarian GP",
      description: "Silverstone gran prix trophie",
    },
    {
      id: "Belgian GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "2nd in the Belgian GP",
    },
    {
      id: "Monaco GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "2nd in the Belgian GP",
      name: "monaco",
    },
    {
      id: "Monza GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "3rd in the Monza GP",
      name: "italy",
    },
    {
      id: "Bahrein GP",
      image:
        "https://i.pinimg.com/736x/b5/d3/75/b5d3750a53bf1e18b1567af8b6481408.jpg",
      header: "1st in Hungarian GP",
      description: "The hungarian GP win was an outstanding victory.",
      name: "mideast",
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(titlePhotos[0]);

  const [filter, setFilter] = useState("all");

  const filteredTitles =
    filter === "all"
      ? titlePhotos.slice(0, 3)
      : titlePhotos.filter((title) => title.name === filter);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex bg-blue-600 w-250 text-white">
          <div className="w-110 h-full">
            <img src={selectedTitle.image} />
          </div>

          <div className="flex flex-1 flex-col p-2">
            <div className="flex flex-row w-full justify-center items-center gap-4">
              {filteredTitles.map((title) => (
                <button
                  key={title.id}
                  type="button"
                  onClick={() => setSelectedTitle(title)}
                  className={selectedTitle.id === title.id ? "active" : ""}
                >
                  {title.id}
                </button>
              ))}
              <div className="flex">
                <select
                  className=" w-full
      cursor-pointer
      bg-white
      font-medium
      text-blue-600
      shadow-md
      outline-none
      transition
      hover:bg-white
      focus:ring-2 "
                >
                  <option value="all" onClick={() => setFilter("all")}>
                    Filter
                  </option>
                  <option value="italy" onClick={() => setFilter("italy")}>
                    Italy
                  </option>
                  <option value="mideast" onClick={() => setFilter("mideast")}>
                    Middle east
                  </option>
                </select>
              </div>
            </div>

            <div>
              {filteredTitles.map((title) => (
                <span key={title.id}></span>
              ))}
            </div>

            <div className="flex flex-col p-7 gap-2">
              <h1 className="text-2xl">{selectedTitle.header}</h1>
              <p>{selectedTitle.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
