import React, { useEffect, useState } from "react";
import { Button, Rate } from "antd";
import "antd/dist/antd.css";
import { addFavorite, getFavorite } from "../../service/service";

function Favorite(props) {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [data, setData] = useState();
  const [value, setValue] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const movieId = props.movieId;
  const movieTitle = props.movieInfo.title;
  const movieRunTime = props.movieInfo.runtime;

  // useEffect(() => {
  //   refreshPage();
  // }, []);

  // async function refreshPage() {

  //   await getFavorite()
  //     .then((json) => {
  //       setData(json.movieRate)
  //       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+data)

  //     })
  //     .catch((err) => {
  //       console.error(err);

  //     });
  // }

  const handleChange = async (value) => {
    if (!value) {
      setValue(value);
    }

    let variables = {
      movieId: movieId,
      movieTitle: movieTitle,
      movieRunTime: movieRunTime,
      movieRate: value,
    };

    await addFavorite(variables);
  };

  return (
    <table className="table">
      <thead>
        <th scope="col">
          <h4>
            Rate this movie: <Rate tooltips={desc} onChange={handleChange} value={value} />
            {value ? (
              <span className="ant-rate-text">
                <h4>{desc[value - 1]} </h4>
              </span>
            ) : (
              ""
            )}
          </h4>
        </th>
      </thead>
    </table>
  );
}

export default Favorite;
