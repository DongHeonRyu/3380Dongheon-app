import React, { useEffect, useState } from "react";
import { deleteFavorite, editFavorite, getFavorite } from "../../Service/service";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

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
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3 style={{ textAlign: "center" }}>My Favorite Movies</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Rate</th>
            <th>Delete</th>
            <th>Edit Rate</th>
            <th>70 Words Comment</th>
          </tr>
        </thead>
        <tbody>
          {ratedMovie.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  {" "}
                  <Link to={`/movie/${item.movieId}`} className="navbar-brand">
                    {item.movieTitle}
                  </Link>
                </td>
                <td>{item.movieRunTime}</td>
                <td>
                  <Rate value={item.movieRate} />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={deleteMovie} id={item.movieId}>
                    Delete{" "}
                  </button>
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={editMovie}
                    id={item.movieId}
                    defaultValue={item.movieRate}
                  >
                    <option value="1">1 star ({desc[0]})</option>
                    <option value="2">2 star ({desc[1]})</option>
                    <option value="3">3 star ({desc[2]})</option>
                    <option value="4">4 star ({desc[3]})</option>
                    <option value="5">5 star ({desc[4]})</option>
                  </select>
                </td>
                <td>{item.movieComment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
