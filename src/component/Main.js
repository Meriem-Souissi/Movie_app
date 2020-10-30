import React from "react";
import AddNewMovie from "./AddNewMovie";
import Movie from "./Movie";

function Main({
  moviesList,
  add,
  setAdd,
  setNewImage,
  setNewTitle,
  setNewDescription,
  setRateValue,
  addNew,
  searchList,
  checked,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px 50px",
      }}
    >
      {add && (
        <AddNewMovie
          setAdd={setAdd}
          setNewImage={setNewImage}
          setNewTitle={setNewTitle}
          setNewDescription={setNewDescription}
          setRateValue={setRateValue}
          addNew={addNew}
        />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
        }}
      >
        {!searchList
          ? moviesList.map((movie, i) => (
              <Movie
                image={movie.image}
                rate={movie.rate}
                title={movie.title}
                description={movie.description}
              />
            ))
          : !checked
          ? moviesList
              .filter(
                (el) =>
                  el.title.toLowerCase().startsWith(searchList.toLowerCase()) ==
                  true
              )
              .map((movie, i) => (
                <>
                  <Movie
                    image={movie.image}
                    rate={movie.rate}
                    title={movie.title}
                    description={movie.description}
                  />
                </>
              ))
          : moviesList
              .filter((el) => el.rate == searchList)
              .map((movie, i) => (
                <>
                  <Movie
                    image={movie.image}
                    rate={movie.rate}
                    title={movie.title}
                    description={movie.description}
                  />
                </>
              ))}
      </div>
    </div>
  );
}

export default Main;
