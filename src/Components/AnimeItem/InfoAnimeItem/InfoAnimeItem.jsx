import "./InfoAnimeItem.css";

const InfoAnimeItem = ({ animeData }) => {
  const animeKeyInfoObj = [
    "type",
    "score",
    "members",
    "episodes",
    "duration",
    "status",
    "genres",
    "source",
    "aired",
    "rating",
    "studios",
    "producers",
  ];

  const cheackTypeOfAnimeInfo = (item) => {
    const clone = animeData[item];
    if (Array.isArray(clone)) return clone.map((item) => item.name).join(", ");
    else if (typeof clone === "object") return clone?.string | clone;
    else return clone;
  };

  return (
    <>
      {animeData
        ? animeKeyInfoObj?.map((item, index) => {
            const nameInfo = item[0].toUpperCase() + item.slice(1, item.length);
            let info = cheackTypeOfAnimeInfo(item);

            return (
              <div key={index} className="info_anime_item">
                <h3>{nameInfo}:</h3>
                <h3>{info}</h3>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default InfoAnimeItem;
