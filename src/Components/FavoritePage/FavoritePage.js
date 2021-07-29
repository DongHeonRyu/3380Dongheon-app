import React, { useEffect, useState } from "react";
import { deleteFavorite, editFavorite, getFavorite } from "../../service/service";

import "antd/dist/antd.css";

import "../NavBar/navStyle.css";
import FavoritePage_Elements from "../../Components/FavoritePage_Elements/FavoritePage_Elements"



function FavoritePage(props) {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [ratedMovie, setRatedMovie] = useState([]);

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getFavorite()
      .then((json) => {
        setRatedMovie(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function deleteMovie(e) {
    await deleteFavorite(e.target.id);
    refreshPage();
  }

  async function editMovie(e) {
    const id = e.target.id;
    const value = e.target.value;

    await editFavorite(id, value);
    refreshPage();
  }

  return (
    <div style={{ margin: "auto" }}>
      <h3 style={{ textAlign: "center" }}>My Favorite Movies</h3>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Movie RunTime</th>
            <th scope="col">Rate</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit Rate</th>
            <th className="comments">70 Words Comment</th>
          </tr>
        </thead>
        <tbody>


          <FavoritePage_Elements
            ratedMovie={ratedMovie} desc={desc}
            deleteMovie={deleteMovie} editMovie={editMovie} />


        </tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
