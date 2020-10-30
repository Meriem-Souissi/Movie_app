import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import "./App.css";

function App() {
  const [newImage, setNewImage] = useState(false);
  const [newTitle, setNewTitle] = useState(false);
  const [newDescription, setNewDescription] = useState(false);
  const [rateValue, setRateValue] = useState(false);
  const [checked, setChecked] = useState(false);
  const [add, setAdd] = useState(false);
  const [searchList, setSearchList] = useState(false);

  const [moviesList, setMovieList] = useState([
    {
      title: "12 Angry Men",
      image:
        "https://image.tmdb.org/t/p/original/lmWvlb2URoW8yq5DMeB07IxM9G0.jpg",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      rate: "6",
    },
    {
      title: "BraveHeart",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Braveheart_imp.jpg/220px-Braveheart_imp.jpg",
      description:
        "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      rate: "9",
    },
    {
      title: "The Dark Knight 2008",
      image: "https://miro.medium.com/max/4000/1*fT6X7X5zG9c8ZQL20UPSfw.jpeg",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rate: "7",
    },
    {
      title: "Titanic",
      image:
        "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      rate: "3",
    },
    {
      title: "Troy",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91fVYfwoVwL._RI_.jpg",
      description:
        "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
      rate: "8",
    },
  ]);

  const addNew = () => {
    setMovieList([
      ...moviesList,
      {
        title: newTitle,
        image: newImage,
        description: newDescription,
        rate: rateValue,
      },
    ]);
  };

  return (
    <div className="App">
      <Header
        setSearchList={setSearchList}
        setAdd={setAdd}
        checked={checked}
        setChecked={setChecked}
        searchList={searchList}
      />
      <Main
        moviesList={moviesList}
        add={add}
        setAdd={setAdd}
        setNewImage={setNewImage}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
        setRateValue={setRateValue}
        addNew={addNew}
        checked={checked}
        searchList={searchList}
      />
    </div>
  );
}

export default App;
