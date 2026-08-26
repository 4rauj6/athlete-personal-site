import { useState } from "react";

export default function TitlesDisplay() {
  const titlePhotos = [
    {
      id: "Hungarian GP",
      image:
        "https://i.pinimg.com/736x/b5/d3/75/b5d3750a53bf1e18b1567af8b6481408.jpg",
      header: "1st in Hungarian GP",
      description: "The hungarian GP win was an outstanding victory.",
      name: "Hungarian GP",
    },
    {
      id: "Silverstone GP",
      image:
        "https://i.pinimg.com/1200x/d8/c4/6b/d8c46b1ec43516dcbf98d804b6c407ab.jpg",
      header: "1st in Hungarian GP",
      description: "Silverstone gran prix trophie",
      name: "Silverstone GP",
    },
    {
      id: "Belgian GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "2nd in the Belgian GP",
      name: "Belgian GP",
    },
    {
      id: "Monaco GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "2nd in the Belgian GP",
      name: "Monaco GP",
    },
    {
      id: "Monza GP",
      image:
        "https://i.pinimg.com/1200x/b5/c0/1d/b5c01d0ec41c710405fe573e394af7dd.jpg",
      header: "3rd in the Monza GP",
      name: "Monza GP",
    },
    {
      id: "Bahrein GP",
      image:
        "https://i.pinimg.com/736x/b5/d3/75/b5d3750a53bf1e18b1567af8b6481408.jpg",
      header: "1st in Hungarian GP",
      description: "The hungarian GP win was an outstanding victory.",
      name: "Bahrein GP",
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(titlePhotos[0]);

  const [filter, setFilter] = useState("all");

  const filteredTitles =
    filter === "all"
      ? titlePhotos.slice(0, 3)
      : titlePhotos.filter((title) => title.name === filter);

  const moreTitle = (event) => {
    const titleTarget = event.target.value;

    setFilter(titleTarget);

    if (titleTarget === "all") {
      setSelectedTitle(titlePhotos[0]);
      return;
    }
    const selectedOptions = titlePhotos.find(
      (title) => title.name === titleTarget,
    );

    if (selectedOptions) {
      setSelectedTitle(selectedOptions);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex bg-blue-600 w-240 text-white">
          <div className="w-115 h-full">
            <img src={selectedTitle.image} />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="relative flex flex-row w-full justify-center items-center gap-4">
              {titlePhotos.slice(0, 3).map((title) => (
                <button
                  key={title.id}
                  type="button"
                  onClick={() => setSelectedTitle(title)}
                  className={selectedTitle.id === title.id ? "active" : ""}
                >
                  {title.id}
                </button>
              ))}
              <div>
                <select
                  className="w-auto cursor-pointer
      bg-white
      font-medium
      text-blue-600
      shadow-md
      outline-none
      transition
      hover:bg-white
      focus:ring-2 
      absolute
      top-0
      right-0
      "
                  value={filter}
                  onChange={moreTitle}
                >
                  <option value="all">Filter</option>
                  <option value="Monza GP">Monza</option>
                  <option value="Bahrein GP">Bahrein</option>
                </select>
              </div>
            </div>

            <div>
              {filteredTitles.map((title) => (
                <span key={title.id}></span>
              ))}
            </div>

            <div className="flex flex-col p-5 gap-2">
              <h1 className="text-2xl">{selectedTitle.header}</h1>
              <p>{selectedTitle.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
