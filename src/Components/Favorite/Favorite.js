import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { addFavorite, getSpecific, editFavorite } from "../../service/service";

function Favorite(props) {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [ratedMovie, setRatedMovie] = useState([]);
  const [value, setValue] = useState();

  const movieId = props.movieId;
  const movieTitle = props.movieInfo.title;
  const movieRunTime = props.movieInfo.runtime;

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getSpecific(movieId)
      .then((json) => {
        setRatedMovie(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleChange = async (e) => {
    window.location.reload();

    setValue(e.target.value);

    let variables = {
      movieId: movieId,
      movieTitle: movieTitle,
      movieRunTime: movieRunTime,
      movieRate: e.target.value,
      movieComment: "",
    };

    await addFavorite(variables);
    
    refreshPage();
  };

  async function editMovie(e) {
    const id = e.target.id;
    const value = e.target.value;

    await editFavorite(id, value);
    refreshPage();
  }

  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>
            Rate this movie:{" "}
            {ratedMovie ? (
              <Rate tooltips={desc} value={ratedMovie.movieRate} />
            ) : (
              <Rate tooltips={desc} value={value} />
            )}
          </th>
          <th>
            {ratedMovie ? (
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={editMovie}
                id={movieId}
                value={ratedMovie.movieRate}
              >
                <option value="1">1 star ({desc[0]})</option>
                <option value="2">2 star ({desc[1]})</option>
                <option value="3">3 star ({desc[2]})</option>
                <option value="4">4 star ({desc[3]})</option>
                <option value="5">5 star ({desc[4]})</option>
              </select>
            ) : (
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                id={movieId}
              >
                <option value="1">1 star ({desc[0]})</option>
                <option value="2">2 star ({desc[1]})</option>
                <option value="3">3 star ({desc[2]})</option>
                <option value="4">4 star ({desc[3]})</option>
                <option value="5">5 star ({desc[4]})</option>
              </select>
            )}
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default Favorite;
